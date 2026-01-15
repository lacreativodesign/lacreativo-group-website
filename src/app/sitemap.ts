import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/who-we-are`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/vision-mission-values`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}
