import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/work/hh-hub`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work/pet-care-crm`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resume`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
