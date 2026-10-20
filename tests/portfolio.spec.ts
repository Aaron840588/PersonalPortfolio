import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/work/hh-hub", "/work/pet-care-crm", "/resume"];
const productionUrl = "https://aarontagapan.vercel.app";

for (const route of routes) {
  test(`${route} has working structure, metadata, and no critical accessibility issues`, async ({
    page,
  }) => {
    const response = await page.goto(route);

    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("main#main-content")).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `${productionUrl}${route === "/" ? "" : route}`,
    );

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);

    const results = await new AxeBuilder({ page }).exclude("object").analyze();
    expect(results.violations).toEqual([]);
  });
}

test("homepage actions and local navigation targets work", async ({ page, request }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "View selected work" }).click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.getByRole("heading", { name: "Selected work" })).toBeVisible();

  const internalHrefs = await page.locator('a[href^="/"]').evaluateAll((links) =>
    [...new Set(links.map((link) => link.getAttribute("href")).filter(Boolean))] as string[],
  );

  for (const href of internalHrefs) {
    const response = await request.get(href);
    expect(response.ok(), `${href} should respond successfully`).toBeTruthy();
  }
});

test("case-study controls point to the expected demos, repositories, and images", async ({
  page,
}) => {
  await page.goto("/work/hh-hub");
  await expect(page.getByRole("link", { name: /View repository/ }).first()).toHaveAttribute(
    "href",
    "https://github.com/Aaron840588/food-operations-erp-demo",
  );
  await expect(page.locator('.project-media__image a[href^="/projects/"]')).toHaveCount(3);

  await page.goto("/work/pet-care-crm");
  await expect(page.getByRole("link", { name: /Open public demo/ })).toHaveAttribute(
    "href",
    "https://pet-care-crm-demo.vercel.app",
  );
  await expect(page.locator('.project-media__image a[href^="/projects/"]')).toHaveCount(3);
});

test("resume PDF and custom not-found route remain usable", async ({ page, request }) => {
  const pdf = await request.get("/resume/Aaron_Tagapan_Resume.pdf");
  expect(pdf.ok()).toBeTruthy();
  expect(pdf.headers()["content-type"]).toContain("application/pdf");

  const response = await page.goto("/not-a-real-page");
  expect(response?.status()).toBe(404);
  await expect(page.locator("main#main-content")).toBeVisible();
  await expect(page.getByRole("link", { name: "Return to the portfolio" })).toHaveAttribute(
    "href",
    "/",
  );
});

test("production responses include the expected security headers", async ({ request }) => {
  const response = await request.get("/");
  const headers = response.headers();

  expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["permissions-policy"]).toContain("camera=()");
});

test("capture screenshots of all pages for visual audit", async ({ page }, testInfo) => {
  for (const route of routes) {
    await page.goto(route);
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({ path: testInfo.outputPath(`${route.replaceAll("/", "_") || "home"}.png`), fullPage: true });
  }
});

test("maintenance demo is not offered as a working destination", async ({ page }) => {
  for (const route of ["/", "/work/hh-hub"]) {
    await page.goto(route);
    await expect(page.locator('a[href="https://food-operations-erp-demo.vercel.app"]')).toHaveCount(0);
    await expect(page.getByText("Demo under maintenance", { exact: false }).first()).toBeVisible();
  }
});

test("every page link, fragment, and screenshot has a valid local destination", async ({ page, request }) => {
  for (const route of routes) {
    await page.goto(route);
    const hrefs = await page.locator("a[href]").evaluateAll((links) =>
      [...new Set(links.map((link) => link.getAttribute("href")!))],
    );
    for (const href of hrefs) {
      if (href.startsWith("#")) {
        await expect(page.locator(href)).toHaveCount(1);
      } else if (href.startsWith("/")) {
        const url = new URL(href, "http://localhost");
        expect((await request.get(url.pathname)).ok(), href).toBeTruthy();
      } else {
        expect(href).toMatch(/^(https:\/\/|mailto:)/);
      }
    }
    await expect(page.locator("h1")).toHaveCount(1);
  }
});

test("keyboard skip link reaches main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
});

test("all routes reflow from narrow phones to large desktop screens", async ({ page }) => {
  for (const width of [320, 375, 768, 1280, 2048, 2560]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      expect(await page.evaluate(() =>
        document.documentElement.scrollWidth - document.documentElement.clientWidth,
      ), `${route} at ${width}px`).toBeLessThanOrEqual(1);
    }
  }
});

test("reduced motion and disabled JavaScript retain readable content", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "Read case study" })).toHaveCount(2);
  expect(await page.locator("h1").evaluate((heading) => getComputedStyle(heading).animationName)).toBe("none");
  await context.close();
});
