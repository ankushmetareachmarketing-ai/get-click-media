import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import {
  getAllCategories,
  getBlogsByCategory,
  getCategoryStyle,
  formatDate,
  categoryToSlug,
} from "@/lib/blogs";
import { categoryPageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const categories = getAllCategories();
  const found = categories.find((c) => c.slug === categorySlug);
  if (!found) return {};
  return categoryPageMetadata(found.name, found.slug, found.count);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;

  const allCategories = getAllCategories();
  const current = allCategories.find((c) => c.slug === categorySlug);
  if (!current) notFound();

  const posts = getBlogsByCategory(current.name);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://getclickmedia.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: `${current.name} Articles`,
        item: `https://getclickmedia.com/blog/category/${current.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* -- Hero ------------------------------------------------------------ */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-(--ink-4)">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-(--ink-2)">{current.name}</li>
            </ol>
          </nav>

          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.6875rem] font-bold border mb-4 ${getCategoryStyle(current.name)}`}
          >
            <Tag size={11} />
            {current.name}
          </span>

          <h1 className="text-[2rem] sm:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1) mb-4 max-w-2xl">
            {current.name} Articles
          </h1>

          <p className="text-(--ink-3) text-base sm:text-lg max-w-xl leading-relaxed mb-8">
            {current.count} expert guide{current.count !== 1 ? "s" : ""} on{" "}
            {current.name.toLowerCase()} for Indian businesses.
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold border border-(--border-subtle) text-(--ink-3) hover:border-primary hover:text-primary transition-colors"
            >
              All Articles
            </Link>
            {allCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  cat.slug === categorySlug
                    ? "bg-primary text-white border-primary"
                    : "border-(--border-subtle) text-(--ink-3) hover:border-primary hover:text-primary"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- Posts grid ----------------------------------------------------- */}
      <section className="pb-20 pt-8 bg-(--surface-0)">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-(--ink-3) text-lg">No articles found in this category yet.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
              >
                Browse all articles <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <meta itemProp="author" content="Get Click Media" />
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <div className="flex flex-col h-full rounded-[20px] overflow-hidden border border-(--border-subtle) bg-white shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:-translate-y-1 transition-all duration-200">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          priority
                          itemProp="image"
                        />
                      </div>
                      <div className="flex flex-col flex-1 gap-3 p-5 sm:p-6">
                        <span
                          className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-bold border ${getCategoryStyle(post.category)}`}
                        >
                          {post.category}
                        </span>
                        <h2
                          className="text-[1.0625rem] [font-family:var(--font-syne)] font-bold leading-[1.3] tracking-[-0.01em] text-(--ink-1) group-hover:text-primary transition-colors line-clamp-2"
                          itemProp="headline"
                        >
                          {post.title}
                        </h2>
                        <p
                          className="text-(--ink-3) text-sm leading-[1.65] line-clamp-3 flex-1"
                          itemProp="description"
                        >
                          {post.description}
                        </p>
                        <div className="flex items-center gap-3 pt-3 mt-auto border-t border-(--border-subtle) text-xs text-(--ink-4)">
                          <span className="flex items-center gap-1">
                            <Calendar size={11} />
                            <time dateTime={post.publishedDate} itemProp="datePublished">
                              {formatDate(post.publishedDate)}
                            </time>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={11} />
                            {post.readingTime}
                          </span>
                          <span className="ml-auto flex items-center gap-0.5 font-semibold text-primary group-hover:gap-1.5 transition-all text-[0.75rem]">
                            Read <ArrowRight size={11} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
