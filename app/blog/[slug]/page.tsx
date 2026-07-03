import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import {
  getAllBlogSlugs,
  getBlogPost,
  getRelatedPosts,
  getPrevNextPosts,
  getCategoryStyle,
  categoryToSlug,
  formatDate,
} from "@/lib/blogs";
import { renderMdx } from "@/lib/mdx";
import { blogPostMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema, howToSchema } from "@/lib/schema";
import FaqAccordion from "@/app/components/blog/FaqAccordion";

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return blogPostMetadata(post);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const mdxContent = await renderMdx(post.content);
  const related = getRelatedPosts(post.slug, post.category);
  const { prev, next } = getPrevNextPosts(post.slug);

  const BASE_URL = "https://getclickmedia.com";
  const schemas = [
    articleSchema(post),
    breadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: "Blog", url: `${BASE_URL}/blog` },
      { name: post.title, url: `${BASE_URL}/blog/${post.slug}` },
    ]),
    ...(post.faq && post.faq.length > 0 ? [faqSchema(post.faq)] : []),
    ...(post.howTo && post.howTo.steps.length > 0 ? [howToSchema(post)] : []),
  ];

  return (
    <>
      {/* JSON-LD Schemas */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="pt-28 sm:pt-36 pb-4 max-w-7xl mx-auto px-5 sm:px-8"
      >
        <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm text-(--ink-4)">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-(--ink-2) truncate max-w-[260px] sm:max-w-xs">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* ── Post header ───────────────────────────────────────────────────── */}
      <header className="pb-8 max-w-7xl mx-auto px-5 sm:px-8">
        <Link
          href={`/blog/category/${categoryToSlug(post.category)}`}
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-bold border mb-4 hover:opacity-80 transition-opacity ${getCategoryStyle(post.category)}`}
        >
          {post.category}
        </Link>

        <h1 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1) mb-5 max-w-4xl">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-(--ink-3) leading-relaxed max-w-3xl mb-6">
          {post.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-(--ink-4)">
          <span className="flex items-center gap-1.5">
            <User size={14} aria-hidden="true" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} aria-hidden="true" />
            <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
          </span>
          {post.updatedDate && post.updatedDate !== post.publishedDate && (
            <span className="flex items-center gap-1.5 text-xs">
              Updated: <time dateTime={post.updatedDate}>{formatDate(post.updatedDate)}</time>
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Clock size={14} aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
      </header>

      {/* ── Featured image ────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10 sm:mb-14">
        <div className="relative aspect-video rounded-[20px] overflow-hidden shadow-(--shadow-elevated)">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ── Main layout: article + TOC sidebar ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_268px] gap-10 xl:gap-14">

          {/* ── Article body ──────────────────────────────────────────────── */}
          <article>
            <div className="blog-prose">{mdxContent}</div>

            {/* Keywords */}
            {post.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-(--border-subtle)">
                {post.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 rounded-full bg-(--surface-1) border border-(--border-subtle) text-xs text-(--ink-3)"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}

            {/* ── FAQ Accordion ─────────────────────────────────────────── */}
            {post.faq && post.faq.length > 0 && (
              <section className="mt-12" aria-label="Frequently Asked Questions">
                <h2 className="text-[1.375rem] sm:text-[1.75rem] [font-family:var(--font-syne)] font-bold text-(--ink-1) mb-6">
                  Frequently Asked Questions
                </h2>
                <FaqAccordion faqs={post.faq} />
              </section>
            )}

            {/* ── Prev / Next navigation ────────────────────────────────── */}
            {(prev || next) && (
              <nav
                aria-label="Post navigation"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-10 border-t border-(--border-subtle)"
              >
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group flex flex-col gap-1.5 p-4 sm:p-5 rounded-[16px] border border-(--border-subtle) bg-(--surface-0) hover:shadow-(--shadow-card-hover) hover:-translate-y-0.5 transition-all"
                  >
                    <span className="flex items-center gap-1 text-xs text-(--ink-4)">
                      <ChevronLeft size={12} />
                      Previous
                    </span>
                    <span className="text-sm font-semibold text-(--ink-1) group-hover:text-primary transition-colors line-clamp-2">
                      {prev.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group flex flex-col gap-1.5 p-4 sm:p-5 rounded-[16px] border border-(--border-subtle) bg-(--surface-0) hover:shadow-(--shadow-card-hover) hover:-translate-y-0.5 transition-all text-right"
                  >
                    <span className="flex items-center gap-1 text-xs text-(--ink-4) justify-end">
                      Next
                      <ChevronRight size={12} />
                    </span>
                    <span className="text-sm font-semibold text-(--ink-1) group-hover:text-primary transition-colors line-clamp-2">
                      {next.title}
                    </span>
                  </Link>
                )}
              </nav>
            )}
          </article>

          {/* ── TOC Sidebar ───────────────────────────────────────────────── */}
          {post.toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="rounded-[20px] border border-(--border-subtle) bg-(--surface-0) shadow-(--shadow-card) p-5">
                  <p className="text-[0.6875rem] font-bold tracking-widest uppercase text-(--ink-4) mb-4">
                    Table of Contents
                  </p>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-1">
                      {post.toc.map((item) => (
                        <li
                          key={item.id}
                          className={item.level === 3 ? "pl-3" : ""}
                        >
                          <a
                            href={`#${item.id}`}
                            className={`block text-sm leading-snug py-1 transition-colors hover:text-primary ${
                              item.level === 3
                                ? "text-(--ink-4) text-xs"
                                : "text-(--ink-3)"
                            }`}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Back to blog */}
                <Link
                  href="/blog"
                  className="flex items-center gap-2 mt-4 text-sm text-(--ink-4) hover:text-primary transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to all articles
                </Link>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* ── Related posts ─────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-14 sm:py-20 bg-(--surface-1)">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl [font-family:var(--font-syne)] font-bold text-(--ink-1) whitespace-nowrap">
                Related Articles
              </h2>
              <div className="flex-1 h-px bg-(--border-subtle)" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((p) => (
                <article
                  key={p.slug}
                  className="group"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <meta itemProp="author" content="Get Click Media" />
                  <Link href={`/blog/${p.slug}`}>
                    <div className="flex flex-col h-full rounded-[20px] overflow-hidden border border-(--border-subtle) bg-white shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:-translate-y-1 transition-all duration-200">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          itemProp="image"
                        />
                      </div>
                      <div className="flex flex-col gap-3 p-5 flex-1">
                        <Link
                          href={`/blog/category/${categoryToSlug(p.category)}`}
                          className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-bold border hover:opacity-80 transition-opacity ${getCategoryStyle(p.category)}`}
                        >
                          {p.category}
                        </Link>
                        <h3
                          className="text-[1.0625rem] [font-family:var(--font-syne)] font-bold text-(--ink-1) group-hover:text-primary transition-colors line-clamp-2"
                          itemProp="headline"
                        >
                          {p.title}
                        </h3>
                        <p
                          className="text-sm text-(--ink-3) line-clamp-2 flex-1"
                          itemProp="description"
                        >
                          {p.description}
                        </p>
                        <div className="flex items-center gap-3 pt-3 border-t border-(--border-subtle) text-xs text-(--ink-4)">
                          <span className="flex items-center gap-1">
                            <Calendar size={11} />
                            <time dateTime={p.publishedDate} itemProp="datePublished">
                              {formatDate(p.publishedDate)}
                            </time>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={11} />
                            {p.readingTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
