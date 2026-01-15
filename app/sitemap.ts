import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://explorahead.com";

/**
 * Dynamic sitemap generation for SEO
 * Automatically generates sitemap.xml with all routes
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "pl"];
  const currentDate = new Date().toISOString();

  // Marketing pages with their priorities and change frequencies
  const marketingPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // Generate sitemap entries for all locales and pages
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const page of marketingPages) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${page.path}`,
            pl: `${BASE_URL}/pl${page.path}`,
          },
        },
      });
    }
  }

  // Add root redirect entry
  sitemapEntries.push({
    url: BASE_URL,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 1.0,
  });

  return sitemapEntries;
}
