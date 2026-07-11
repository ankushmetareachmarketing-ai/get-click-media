import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getAllBlogPosts, getAllCategories } from "@/lib/blogs";

const BASE_URL = "https://getclickmedia.com";
const APP_DIR = path.join(process.cwd(), "app");

// Directories under app/ that are not page routes and must never be scanned.
const EXCLUDED_TOP_LEVEL = new Set(["api", "blog", "components"]);

const LEGAL_SLUGS = new Set([
  "privacy-policy",
  "terms-of-service",
  "refund-policy",
  "cookie-policy",
  "gdpr",
]);

export const revalidate = 86400;

/**
 * Recursively walks app/ and returns every route that resolves to a page.tsx,
 * skipping API routes, blog (handled separately below), shared components,
 * and dynamic segments (e.g. [slug]) which have no static URL of their own.
 * Next.js route-group folders like (whatsapp) don't appear in the final URL,
 * so they're stripped out here the same way the framework strips them.
 */
function discoverStaticRoutes(dir: string, urlSegments: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];

  const hasPage = entries.some(
    (e) => e.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(e.name)
  );
  if (hasPage && urlSegments.length > 0) {
    routes.push(`/${urlSegments.join("/")}`);
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("[") || entry.name.startsWith("_")) continue;
    if (urlSegments.length === 0 && EXCLUDED_TOP_LEVEL.has(entry.name)) continue;

    const isRouteGroup = entry.name.startsWith("(") && entry.name.endsWith(")");
    const nextSegments = isRouteGroup ? urlSegments : [...urlSegments, entry.name];

    routes.push(...discoverStaticRoutes(path.join(dir, entry.name), nextSegments));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  const discovered = discoverStaticRoutes(APP_DIR);

  const homeRoute: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const staticRoutes: MetadataRoute.Sitemap = discovered
    .filter((route) => !LEGAL_SLUGS.has(route.slice(1)))
    .map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const blogIndexRoute: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.publishedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/blog/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const legalRoutes: MetadataRoute.Sitemap = [...LEGAL_SLUGS].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    ...homeRoute,
    ...staticRoutes,
    ...blogIndexRoute,
    ...blogRoutes,
    ...categoryRoutes,
    ...legalRoutes,
  ];
}
