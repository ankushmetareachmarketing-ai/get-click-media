import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  LayoutTemplate,
  Layers,
  Reply,
} from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";

/* -- SEO Metadata ----------------------------------------------------------
   Duplicate-risk page (per Phase 1B brief): kept short (~1,500-2,000 words)
   and canonical-references /rcs-messaging and /google-rcs-business-messaging
   for anything beyond the RBM naming distinction, rather than re-explaining
   RCS or Google RBM from scratch. */
export const metadata: Metadata = {
  title: "Rich Business Messaging (RBM) for Enterprises | Get Click Media",
  description:
    "Rich Business Messaging (RBM) explained- Google's RCS product for enterprise messaging. Features, setup, and pricing for Indian businesses.",
  keywords:
    "rich business messaging, rbm messaging, rbm india, rich business messaging india, rbm vs rcs, rich business messaging platform, rbm enterprise, rbm setup, rbm pricing, rbm features, rbm google, rich business messaging api, rbm agent, rbm verification",
  alternates: { canonical: "https://getclickmedia.com/rich-business-messaging" },
  openGraph: {
    title: "Rich Business Messaging (RBM) for Enterprises",
    description:
      "Google's RCS product for enterprise messaging, explained- features, setup, and pricing for Indian businesses.",
    url: "https://getclickmedia.com/rich-business-messaging",
    type: "website",
  },
};

const LAST_UPDATED = "July 2026";

const RBM_FEATURES = [
  { icon: LayoutTemplate, title: "Rich cards", desc: "A branded image, headline, description, and up to two action buttons in a single message- see our Google RCS Business Messaging guide for the full feature breakdown." },
  { icon: Layers, title: "Carousels", desc: "Multiple rich cards a user can swipe through horizontally, for showcasing several products or offers in one message." },
  { icon: Reply, title: "Suggested replies & actions", desc: "Tappable quick-reply chips and action buttons (call, open URL, view location) built into every RBM message." },
  { icon: BadgeCheck, title: "Verified sender badge", desc: "Your business name and logo appear on every message once Google brand verification is complete, handled as part of Get Click Media's onboarding." },
];

const FAQS = [
  {
    q: "What is Rich Business Messaging (RBM)?",
    a: "Rich Business Messaging (RBM) is Google's branded name for its RCS Business Messaging product- the same underlying standard as RCS, delivered through Google Messages. See our full Google RCS Business Messaging guide for how RBM works end to end.",
  },
  {
    q: "Is RBM different from RCS?",
    a: "No. RBM isn't a separate technology- it's Google's product name for its specific implementation of RCS Business Messaging. The underlying GSMA standard (RCS) is identical; 'RBM' is simply the branding Google uses for its own rollout of that standard.",
  },
  {
    q: "What does RBM stand for?",
    a: "RBM stands for Rich Business Messaging. It's used interchangeably with 'RCS Business Messaging' in most industry and Google documentation- both refer to the same Google product for sending verified, rich messages through Google Messages.",
  },
  {
    q: "Why does Google call it RBM instead of RCS?",
    a: "RCS (Rich Communication Services) is the open GSMA standard every carrier and vendor implements. RBM is Google's own branded product built on that standard- the naming distinction separates the industry-wide protocol from Google's specific implementation of it.",
  },
  {
    q: "Is RBM available for businesses in India?",
    a: "Yes- RBM is available to Indian businesses through Google's Business Communications Console, with delivery via Google Messages on Jio, Airtel, and Vi. Get Click Media handles Google brand verification as part of standard RCS onboarding.",
  },
  {
    q: "Does Get Click Media support RBM setup?",
    a: "Yes- RBM agent registration through Google's Business Communications Console is included as part of our standard RCS onboarding, so you don't need to manage that relationship with Google separately.",
  },
  {
    q: "What features does RBM support for enterprise senders?",
    a: "RBM supports rich cards, swipeable carousels, suggested replies and actions, and a verified sender badge- the same feature set covered in depth on our Google RCS Business Messaging page. Get Click Media configures these as part of your campaign setup.",
  },
  {
    q: "Does RBM cost more than standard RCS messaging?",
    a: "No- RBM isn't a separate paid tier. It's Google's branding for RCS Business Messaging delivered through Google Messages, so it's priced the same as any other RCS campaign. See our RCS Pricing India page for rates.",
  },
];

const RELATED_LINKS = [
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "Google RCS Business Messaging", href: "/google-rcs-business-messaging" },
  { label: "RCS Service Provider India", href: "/rcs-service-provider-india" },
  { label: "RCS Pricing India", href: "/rcs-pricing-india" },
  { label: "RCS API", href: "/rcs-api" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://getclickmedia.com/#org",
      name: "Get Click Media",
      url: "https://getclickmedia.com",
      logo: { "@type": "ImageObject", url: "https://getclickmedia.com/images/gcm-logo.png" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
        { "@type": "ListItem", position: 3, name: "Rich Business Messaging (RBM)", item: "https://getclickmedia.com/rich-business-messaging" },
      ],
    },
    {
      "@type": "Service",
      name: "Rich Business Messaging (RBM) Setup",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "RCS Business Messaging",
      url: "https://getclickmedia.com/rich-business-messaging",
    },
    {
      "@type": "WebPage",
      "@id": "https://getclickmedia.com/rich-business-messaging",
      url: "https://getclickmedia.com/rich-business-messaging",
      name: "Rich Business Messaging (RBM) for Enterprises | Get Click Media",
      primaryImageOfPage: { "@type": "ImageObject", url: "https://getclickmedia.com/images/rcs/rcs-service-provider-india.png" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RichBusinessMessagingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -- HERO ------------------------------------------------------------ */}
      <DarkHero
        theme="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "RCS Messaging", href: "/rcs-messaging" },
          { label: "Rich Business Messaging (RBM)" },
        ]}
        eyebrow="Google's RBM, Explained"
        title="Rich Business Messaging (RBM)"
        highlight="for Enterprises in India"
        description={
          <>
            Rich Business Messaging (RBM) is Google&apos;s branded term for its RCS Business
            Messaging product- <strong className="text-gray-900">the same standard as RCS,
            with Google&apos;s specific implementation</strong> and naming.
          </>
        }
        primaryCta={{ label: "Book a Free RCS Demo", href: "/contact" }}
        secondaryCta={{ label: "See RCS Pricing", href: "/rcs-pricing-india" }}
        imageSrc="/images/rcs/rcs-service-provider-india.png"
        imageAlt="Rich Business Messaging (RBM) verified sender message on mobile phone"
        trustLine="Google brand verification handled as part of onboarding"
      />

      {/* -- EEAT: byline + last-updated strip -------------------------------- */}
      <div className="bg-white border-b border-gray-100">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 text-center text-xs text-gray-400">
          Written by the Get Click Media Pvt. Ltd. Team · Last updated: {LAST_UPDATED} · Reviewed by the Get Click Media RCS team
        </p>
      </div>

      <ClientMarquee />

      {/* -- WHAT IS RBM / AEO BLOCK ------------------------------------------- */}
      <section className="relative py-10">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-[680px] mx-auto rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base leading-[1.7] text-gray-700">
              <strong className="text-gray-900">Rich Business Messaging (RBM)</strong> is Google&apos;s
              branded name for its RCS Business Messaging product- functionally the same as RCS,
              with Google&apos;s specific implementation delivered through Google Messages. For the
              full breakdown of how it works, verification, and coverage, see our{" "}
              <Link href="/google-rcs-business-messaging" className="text-[#2563eb] underline underline-offset-2">
                Google RCS Business Messaging guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* -- RBM VS STANDARD RCS ------------------------------------------------ */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="rbm-vs-rcs">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 space-y-6 text-gray-600 leading-[1.7]">
          <div className="text-center mb-6 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              RBM vs Standard RCS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Same Thing, Different Name
            </h2>
          </div>
          <p>
            RCS (Rich Communication Services) is the open, GSMA-standardised messaging protocol
            that carriers and vendors implement worldwide. RBM (Rich Business Messaging) is
            Google&apos;s own branded product built on that standard- not a competing technology,
            not a premium tier, just Google&apos;s specific rollout of RCS Business Messaging
            through Google Messages.
          </p>
          <p>
            In practice, the two terms are used interchangeably across the industry. If you&apos;re
            evaluating vendors, use whichever term matches how your team searches- the underlying
            setup, verification process, and messaging capabilities are the same either way. For
            the complete explanation of RCS itself, see our{" "}
            <Link href="/rcs-messaging" className="text-[#2563eb] underline underline-offset-2">
              RCS Messaging pillar page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* -- RBM FEATURES ------------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="features">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              RBM Features for Enterprise Senders
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              What Enterprise Senders Get with RBM
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-2">
            {RBM_FEATURES.map((f) => (
              <BentoCard key={f.title} icon={f.icon} name={f.title} description={f.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- GETTING STARTED ----------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="getting-started">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
            Getting Started with RBM
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
            RBM Agent Registration, Handled for You
          </h2>
          <p className="text-gray-500 text-base leading-[1.7] max-w-2xl mx-auto">
            Getting started with RBM means registering as a verified agent through Google&apos;s
            Business Communications Console- Get Click Media handles this as part of standard
            RCS onboarding, alongside carrier setup and campaign configuration. See our{" "}
            <Link href="/google-rcs-business-messaging" className="text-[#2563eb] underline underline-offset-2">
              step-by-step registration guide
            </Link>{" "}
            or our{" "}
            <Link href="/rcs-service-provider-india" className="text-[#2563eb] underline underline-offset-2">
              RCS service provider page
            </Link>{" "}
            for the full onboarding process.
          </p>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="faq">
        <SectionPattern tone="gold" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Rich Business Messaging (RBM) FAQs
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/5">
                <Image
                  src="/images/rcs/rcs-service-provider-india.png"
                  alt="Ask a question about Rich Business Messaging (RBM)"
                  fill
                  className="object-cover"
                  sizes="36vw"
                />
              </div>
            </div>
            <AccordionList
              className="flex-1 w-full"
              items={FAQS.map((f) => ({ question: f.q, answer: <p className="text-base text-gray-500 leading-[1.7]">{f.a}</p> }))}
            />
          </div>
        </div>
      </section>

      {/* -- RELATED LINKS ---------------------------------------------------- */}
      <section className="relative py-16">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related RCS resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {RELATED_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- BOTTOM CTA ------------------------------------------------------ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <GlowCtaBanner
            title="Ready to set up Rich Business Messaging?"
            description="Get Click Media handles Google brand verification, RBM agent registration, and campaign setup end-to-end."
            ctaLabel="Book a Free RCS Demo"
          />
        </div>
      </section>
    </>
  );
}
