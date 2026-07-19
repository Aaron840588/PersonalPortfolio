import type { Metadata } from "next";

export const siteName = "Aaron Tagapan — IT Operations, Systems and Business Technology";
export const siteDescription =
  "Portfolio of Aaron Tagapan, a BS Information Systems graduate focused on IT operations, application support, systems analysis, QA/UAT, and AI-assisted personal projects.";

const productionSiteUrl = "https://personal-portfolio-alpha-silk-12.vercel.app";

export function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const candidate = explicitUrl ?? (vercelUrl ? `https://${vercelUrl}` : undefined);

  if (candidate) return candidate.replace(/\/$/, "");
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  return productionSiteUrl;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName,
      title,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
