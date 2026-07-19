import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/work/hh-hub", "/work/pet-care-crm", "/resume"];
const productionUrl = "https://personal-portfolio-alpha-silk-12.vercel.app";

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

test("capture screenshots of all pages for visual audit", async ({ page }) => {
  const screenshotPaths = {
    "/": "C:/Users/aaron/.gemini/antigravity/brain/5ad333ce-4832-4315-b2eb-3473a0720c55/media__homepage.png",
    "/work/hh-hub": "C:/Users/aaron/.gemini/antigravity/brain/5ad333ce-4832-4315-b2eb-3473a0720c55/media__hh_hub.png",
    "/work/pet-care-crm": "C:/Users/aaron/.gemini/antigravity/brain/5ad333ce-4832-4315-b2eb-3473a0720c55/media__pet_care_crm.png",
    "/resume": "C:/Users/aaron/.gemini/antigravity/brain/5ad333ce-4832-4315-b2eb-3473a0720c55/media__resume.png",
  };
  for (const [route, path] of Object.entries(screenshotPaths)) {
    await page.goto(route);
    await page.screenshot({ path, fullPage: true });
  }
});
