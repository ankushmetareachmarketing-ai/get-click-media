import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import {
  getAllBlogPosts,
  getAllCategories,
  getCategoryStyle,
  formatDate,
} from "@/lib/blogs";

// ── Config ────────────────────────────────────────────────────────────────────

const POSTS_PER_PAGE = 9;

// ── SEO metadata ──────────────────────────────────────────────────────────────

export const revalidate = 86400;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const pageNum = parseInt(page ?? "1", 10) || 1;

  return {
    title:
      pageNum > 1
        ? `Blog — Page ${pageNum} | Get Click Media`
        : "Blog | SMS Marketing, WhatsApp API & Business Communication | Get Click Media",
    description:
      "Expert guides on bulk SMS, WhatsApp Business API, RCS messaging, AI chatbots, and DLT compliance for Indian businesses. Stay ahead with actionable communication insights.",
    keywords:
      "bulk sms blog india, whatsapp marketing guide, rcs messaging india, dlt compliance guide, sms marketing tips, otp sms best practices",
    openGraph: {
      title: "Blog | SMS Marketing & Business Communication Insights | Get Click Media",
      description:
        "Expert guides on bulk SMS, WhatsApp Business API, RCS messaging, AI chatbots, and DLT compliance for Indian businesses.",
      type: "website",
      url: "https://getclickmedia.com/blog",
      siteName: "Get Click Media",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Get Click Media",
      description:
        "Expert guides on SMS marketing, WhatsApp API, RCS messaging, and business communication for Indian businesses.",
    },
    alternates: {
      canonical:
        pageNum > 1
          ? `https://getclickmedia.com/blog?page=${pageNum}`
          : "https://getclickmedia.com/blog",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

// ── Pagination bar ────────────────────────────────────────────────────────────

function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null;

  const href = (p: number) => (p === 1 ? "/blog" : `/blog?page=${p}`);

  // Build page number list with at most 7 slots
  const pages: (number | "…")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else if (page <= 4) {
    pages.push(1, 2, 3, 4, 5, "…", totalPages);
  } else if (page >= totalPages - 3) {
    pages.push(1, "…", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
  } else {
    pages.push(1, "…", page - 1, page, page + 1, "…", totalPages);
  }

  const btnBase =
    "inline-flex items-center justify-center h-9 min-w-9 px-3 rounded-xl text-sm font-semibold border transition-all duration-150";
  const active = "bg-primary text-white border-primary shadow-sm";
  const idle = "border-(--border-subtle) text-(--ink-2) hover:border-primary hover:text-primary bg-white";
  const disabled = "border-(--border-subtle) text-(--ink-4) bg-(--surface-1) cursor-not-allowed opacity-50";

  return (
    <nav
      aria-label="Blog pagination"
      className="flex items-center justify-center gap-1.5 mt-12 sm:mt-16"
    >
      {/* Prev */}
      {page > 1 ? (
        <Link href={href(page - 1)} className={`${btnBase} ${idle} gap-1`} aria-label="Previous page">
          <ChevronLeft size={15} />
          <span className="hidden sm:inline">Prev</span>
        </Link>
      ) : (
        <span className={`${btnBase} ${disabled} gap-1`} aria-disabled="true">
          <ChevronLeft size={15} />
          <span className="hidden sm:inline">Prev</span>
        </span>
      )}

      {/* Page numbers */}
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`dot-${i}`} className="flex items-center justify-center h-9 w-9 text-(--ink-4) text-sm">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={href(p)}
            className={`${btnBase} ${p === page ? active : idle}`}
            aria-current={p === page ? "page" : undefined}
            aria-label={`Page ${p}`}
          >
            {p}
          </Link>
        )
      )}

      {/* Next */}
      {page < totalPages ? (
        <Link href={href(page + 1)} className={`${btnBase} ${idle} gap-1`} aria-label="Next page">
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={15} />
        </Link>
      ) : (
        <span className={`${btnBase} ${disabled} gap-1`} aria-disabled="true">
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={15} />
        </span>
      )}
    </nav>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const allPosts = getAllBlogPosts();
  const categories = getAllCategories();

  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const page = Math.min(Math.max(1, parseInt(pageParam ?? "1", 10) || 1), totalPages);

  const start = (page - 1) * POSTS_PER_PAGE;
  const pagePosts = allPosts.slice(start, start + POSTS_PER_PAGE);

  // Featured card only on page 1
  const featured = page === 1 ? pagePosts[0] : null;
  const gridPosts = page === 1 ? pagePosts.slice(1) : pagePosts;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Get Click Media Blog",
    description:
      "Expert insights on bulk SMS, WhatsApp Business API, RCS messaging, and business communication for Indian businesses.",
    url: "https://getclickmedia.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Get Click Media",
      logo: { "@type": "ImageObject", url: "https://getclickmedia.com/images/gcm-logo.png" },
    },
    blogPost: pagePosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://getclickmedia.com/blog/${post.slug}`,
      datePublished: post.publishedDate,
      image: `https://getclickmedia.com${post.image}`,
      author: { "@type": "Organization", name: "Get Click Media" },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* ── Hero (page 1 only) ─────────────────────────────────────────────── */}
      {page === 1 ? (
        <section className="relative overflow-hidden pt-32 sm:pt-40 pb-14 sm:pb-20">
          <div
            className="absolute top-0 right-0 w-130 h-130 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
              transform: "translate(20%, -30%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[0.6875rem] font-bold tracking-widest uppercase text-primary mb-5">
              <BookOpen size={11} />
              Blog &amp; Insights
            </span>

            <h1 className="text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1) mb-5 max-w-3xl mx-auto">
              Insights on SMS, WhatsApp &amp; Business Communication
            </h1>

            <p className="text-(--ink-3) text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Expert guides, compliance updates, and strategies to help Indian businesses
              get more value from every message they send.
            </p>

            <div className="inline-flex items-center gap-6 sm:gap-10 mt-10 px-6 sm:px-8 py-4 rounded-2xl bg-white border border-(--border-subtle) shadow-(--shadow-card) text-sm">
              {[
                { value: `${allPosts.length}+`, label: "Articles" },
                { value: `${categories.length}`, label: "Topics" },
                { value: "Weekly", label: "New posts" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-0.5">
                  <span className="text-lg font-extrabold text-(--ink-1) [font-family:var(--font-syne)]">
                    {value}
                  </span>
                  <span className="text-xs text-(--ink-4)">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Compact header for page 2+ */
        <section className="pt-32 sm:pt-36 pb-8">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-(--ink-4)">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-(--ink-2)">Page {page}</li>
              </ol>
            </nav>
            <h1 className="text-[1.75rem] sm:text-[2.25rem] [font-family:var(--font-syne)] font-bold text-(--ink-1) tracking-[-0.02em]">
              Blog &amp; Insights — Page {page}
            </h1>
          </div>
        </section>
      )}

      {/* ── Category filter pills ─────────────────────────────────────────── */}
      <div className="sticky top-20 z-30 bg-white border-b border-(--border-subtle) shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            <Link
              href="/blog"
              className="flex-none px-3.5 py-1.5 rounded-full text-xs font-semibold border bg-primary text-white border-primary whitespace-nowrap"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="flex-none px-3.5 py-1.5 rounded-full text-xs font-semibold border border-(--border-subtle) text-(--ink-3) hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Posts ─────────────────────────────────────────────────────────── */}
      <section id="posts" className="py-14 sm:py-20 bg-(--surface-0)">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Featured post — page 1 only */}
          {featured && (
            <article className="mb-10 sm:mb-14 group" itemScope itemType="https://schema.org/BlogPosting">
              <meta itemProp="author" content="Get Click Media" />
              <Link href={`/blog/${featured.slug}`} className="block">
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] rounded-[20px] overflow-hidden border border-(--border-subtle) shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:-translate-y-1 transition-all duration-200 bg-white">
                  <div className="relative aspect-video">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                      priority
                      itemProp="image"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-white text-[0.625rem] font-bold tracking-widest uppercase shadow-md">
                        ✦ Featured
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-8 sm:p-10 lg:p-12">
                    <span className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-bold border ${getCategoryStyle(featured.category)}`}>
                      {featured.category}
                    </span>
                    <h2 className="text-[1.375rem] sm:text-[1.75rem] [font-family:var(--font-syne)] font-bold leading-[1.2] tracking-[-0.015em] text-(--ink-1) group-hover:text-primary transition-colors" itemProp="headline">
                      {featured.title}
                    </h2>
                    <p className="text-(--ink-3) text-sm sm:text-[0.9375rem] leading-[1.7] line-clamp-3" itemProp="description">
                      {featured.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-(--border-subtle)">
                      <span className="flex items-center gap-1.5 text-xs text-(--ink-4)">
                        <Calendar size={12} aria-hidden="true" />
                        <time dateTime={featured.publishedDate} itemProp="datePublished">
                          {formatDate(featured.publishedDate)}
                        </time>
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-(--ink-4)">
                        <Clock size={12} aria-hidden="true" />
                        {featured.readingTime}
                      </span>
                      <span className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {/* Section divider */}
          {gridPosts.length > 0 && (
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <h2 className="text-sm font-bold tracking-widest uppercase text-(--ink-4)">
                {page === 1 ? "Latest Articles" : `Page ${page} Articles`}
              </h2>
              <div className="flex-1 h-px bg-(--border-subtle)" />
              <span className="text-xs text-(--ink-4)">
                {start + (featured ? 2 : 1)}–{Math.min(start + POSTS_PER_PAGE, allPosts.length)} of {allPosts.length}
              </span>
            </div>
          )}

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gridPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col" itemScope itemType="https://schema.org/BlogPosting">
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
                        itemProp="image"
                      />
                    </div>
                    <div className="flex flex-col flex-1 gap-3 p-5 sm:p-6">
                      <span className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-bold border ${getCategoryStyle(post.category)}`}>
                        {post.category}
                      </span>
                      <h3 className="text-[1.0625rem] [font-family:var(--font-syne)] font-bold leading-[1.3] tracking-[-0.01em] text-(--ink-1) group-hover:text-primary transition-colors line-clamp-2" itemProp="headline">
                        {post.title}
                      </h3>
                      <p className="text-(--ink-3) text-sm leading-[1.65] line-clamp-3 flex-1" itemProp="description">
                        {post.description}
                      </p>
                      <div className="flex items-center gap-3 pt-3 mt-auto border-t border-(--border-subtle) text-xs text-(--ink-4)">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} aria-hidden="true" />
                          <time dateTime={post.publishedDate} itemProp="datePublished">
                            {formatDate(post.publishedDate)}
                          </time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} aria-hidden="true" />
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

          {/* Pagination */}
          <Pagination page={page} totalPages={totalPages} />
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-(--surface-1)">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div
            className="rounded-[20px] p-8 sm:p-12 text-center shadow-(--shadow-elevated)"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)" }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[0.6875rem] font-bold tracking-widest uppercase text-white mb-4">
              Stay Updated
            </span>
            <h2 className="text-[1.5rem] sm:text-[2rem] [font-family:var(--font-syne)] font-bold text-white leading-[1.15] mb-3 max-w-xl mx-auto">
              Get the latest guides delivered to your inbox
            </h2>
            <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
              Weekly insights on SMS marketing, WhatsApp API, and compliance updates for
              Indian businesses. No spam, unsubscribe anytime.
            </p>
            <form
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Enter your work email"
                required
                aria-label="Email address"
                className="flex-1 w-full h-11 px-4 rounded-full bg-white text-(--ink-1) text-sm placeholder:text-(--ink-4) border-0 outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="w-full sm:w-auto flex-none h-11 px-6 rounded-full bg-white text-primary text-sm font-bold hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
