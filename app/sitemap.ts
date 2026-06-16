import type { MetadataRoute } from "next";
import { getAllBlogPosts, getAllCategories } from "@/lib/blogs";

const BASE_URL = "https://getclickmedia.com";

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/bulk-sms-service-provider-india`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
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

  const legalRoutes: MetadataRoute.Sitemap = [
    "privacy-policy",
    "terms-of-service",
    "refund-policy",
    "cookie-policy",
    "gdpr",
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticRoutes, ...blogRoutes, ...categoryRoutes, ...legalRoutes];
}
