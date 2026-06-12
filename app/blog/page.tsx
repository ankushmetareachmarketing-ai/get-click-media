import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "./data/posts";

// ── SEO metadata ──────────────────────────────────────────────────────────────

export const metadata = {
  title: "Blog | SMS Marketing, WhatsApp API & Business Communication | Get Click Media",
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
    canonical: "https://getclickmedia.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// ── JSON-LD ───────────────────────────────────────────────────────────────────

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
    logo: {
      "@type": "ImageObject",
      url: "https://getclickmedia.com/images/gcm-logo.png",
    },
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://getclickmedia.com/blog/${post.slug}`,
    datePublished: post.dateISO,
    image: `https://getclickmedia.com${post.image}`,
    author: { "@type": "Organization", name: "Get Click Media" },
    publisher: { "@type": "Organization", name: "Get Click Media" },
  })),
};

// ── Category counts for filter pills ─────────────────────────────────────────

const CATEGORIES = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 sm:pt-40 pb-14 sm:pb-20"
        style={{ background: "var(--surface-hero)" }}
      >
        {/* Soft glow */}
        <div
          className="absolute top-0 right-0 w-130 h-130 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
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
            Expert guides, compliance updates, and strategies to help Indian
            businesses get more value from every message they send.
          </p>

          {/* Stats strip */}
          <div className="inline-flex items-center gap-6 sm:gap-10 mt-10 px-6 sm:px-8 py-4 rounded-2xl bg-white border border-(--border-subtle) shadow-(--shadow-card) text-sm">
            {[
              { value: String(BLOG_POSTS.length) + "+", label: "Articles" },
              { value: "6", label: "Topics" },
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

      {/* ── Category filter pills ─────────────────────────────────────────── */}
      <div className="sticky top-20 z-30 bg-white border-b border-(--border-subtle) shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="flex-none px-3.5 py-1.5 rounded-full text-xs font-semibold border cursor-pointer whitespace-nowrap
                           first:bg-primary first:text-white first:border-primary
                           border-(--border-subtle) text-(--ink-3) hover:border-primary hover:text-primary transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Posts ─────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-(--surface-0)">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Featured post */}
          <article
            className="mb-10 sm:mb-14 group"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <meta itemProp="author" content="Get Click Media" />
            <Link href={`/blog/${featured.slug}`} className="block">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] rounded-[20px] overflow-hidden border border-(--border-subtle) shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:-translate-y-1 transition-all duration-200 bg-white">

                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto lg:min-h-90">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    priority
                    itemProp="image"
                  />
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-white text-[0.625rem] font-bold tracking-widest uppercase shadow-md">
                      ✦ Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-4 p-8 sm:p-10 lg:p-12">
                  <span
                    className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-bold border ${featured.categoryStyle}`}
                  >
                    {featured.category}
                  </span>

                  <h2
                    className="text-[1.375rem] sm:text-[1.75rem] [font-family:var(--font-syne)] font-bold leading-[1.2] tracking-[-0.015em] text-(--ink-1) group-hover:text-primary transition-colors"
                    itemProp="headline"
                  >
                    {featured.title}
                  </h2>

                  <p
                    className="text-(--ink-3) text-sm sm:text-[0.9375rem] leading-[1.7] line-clamp-3"
                    itemProp="description"
                  >
                    {featured.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-(--border-subtle)">
                    <span className="flex items-center gap-1.5 text-xs text-(--ink-4)">
                      <Calendar size={12} aria-hidden="true" />
                      <time dateTime={featured.dateISO} itemProp="datePublished">
                        {featured.dateLabel}
                      </time>
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-(--ink-4)">
                      <Clock size={12} aria-hidden="true" />
                      {featured.readTime}
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          {/* Section divider */}
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <h2 className="text-sm font-bold tracking-widest uppercase text-(--ink-4)">
              Latest Articles
            </h2>
            <div className="flex-1 h-px bg-(--border-subtle)" />
            <span className="text-xs text-(--ink-4)">{rest.length} articles</span>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="author" content="Get Click Media" />
                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="flex flex-col h-full rounded-[20px] overflow-hidden border border-(--border-subtle) bg-white shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:-translate-y-1 transition-all duration-200">

                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        itemProp="image"
                      />
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 gap-3 p-5 sm:p-6">
                      <span
                        className={`self-start inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.6875rem] font-bold border ${post.categoryStyle}`}
                      >
                        {post.category}
                      </span>

                      <h3
                        className="text-[1.0625rem] [font-family:var(--font-syne)] font-bold leading-[1.3] tracking-[-0.01em] text-(--ink-1) group-hover:text-primary transition-colors line-clamp-2"
                        itemProp="headline"
                      >
                        {post.title}
                      </h3>

                      <p
                        className="text-(--ink-3) text-sm leading-[1.65] line-clamp-3 flex-1"
                        itemProp="description"
                      >
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center gap-3 pt-3 mt-auto border-t border-(--border-subtle) text-xs text-(--ink-4)">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} aria-hidden="true" />
                          <time dateTime={post.dateISO} itemProp="datePublished">
                            {post.dateLabel}
                          </time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} aria-hidden="true" />
                          {post.readTime}
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
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-(--surface-1)">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div
            className="rounded-[20px] p-8 sm:p-12 text-center shadow-(--shadow-elevated)"
            style={{
              background:
                "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)",
            }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[0.6875rem] font-bold tracking-widest uppercase text-white mb-4">
              Stay Updated
            </span>
            <h2 className="text-[1.5rem] sm:text-[2rem] [font-family:var(--font-syne)] font-bold text-white leading-[1.15] mb-3 max-w-xl mx-auto">
              Get the latest guides delivered to your inbox
            </h2>
            <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
              Weekly insights on SMS marketing, WhatsApp API, and compliance
              updates for Indian businesses. No spam, unsubscribe anytime.
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
