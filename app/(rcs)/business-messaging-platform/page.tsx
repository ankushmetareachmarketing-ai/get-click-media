import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Radio,
  Hash,
  Mic2,
  LayoutDashboard,
  Webhook,
  BarChart3,
  ShieldCheck,
  Building2,
  ShoppingCart,
  Landmark,
  GraduationCap,
} from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";

export const metadata: Metadata = {
  title: "Business Messaging Platform for Indian Companies | Get Click Media",
  description:
    "One platform for SMS, WhatsApp, RCS, and Voice — Get Click Media's business messaging platform for Indian companies. Unified API, single dashboard, one delivery report.",
  keywords:
    "business messaging platform, business messaging platform india, unified messaging platform, multi-channel messaging platform, omnichannel messaging platform india, cpaas platform india, sms whatsapp rcs platform, communication platform for business",
  alternates: { canonical: "https://getclickmedia.com/business-messaging-platform" },
  openGraph: {
    title: "Business Messaging Platform for Indian Companies",
    description:
      "One platform for SMS, WhatsApp, RCS, and Voice — unified API, single dashboard, one delivery report, for Indian businesses.",
    url: "https://getclickmedia.com/business-messaging-platform",
    type: "website",
  },
};

const LAST_UPDATED = "July 2026";

const CHANNELS = [
  { icon: Hash, title: "Bulk SMS", desc: "The universal fallback channel — reaches any phone, no app or data connection required. Best for OTPs, alerts, and high-volume campaigns.", href: "/bulk-sms-service-provider-india" },
  { icon: MessageSquare, title: "WhatsApp Business API", desc: "Rich media, two-way chat, and the highest open rates in India — for support, marketing, and conversational commerce.", href: "/whatsapp-business-api" },
  { icon: Radio, title: "RCS Messaging", desc: "Branded, interactive rich cards delivered natively in Google Messages — no app install, verified sender badge included.", href: "/rcs-messaging" },
  { icon: Mic2, title: "Voice & IVR", desc: "Automated voice calls and interactive voice response for confirmations, reminders, and support escalation.", href: "/" },
];

const PLATFORM_FEATURES = [
  { icon: LayoutDashboard, title: "One dashboard, every channel", desc: "Build, schedule, and monitor SMS, WhatsApp, RCS, and Voice campaigns from a single screen instead of four separate vendor logins." },
  { icon: Webhook, title: "One API, every channel", desc: "A single REST API and webhook contract for sending and receiving delivery-status callbacks across all four channels." },
  { icon: BarChart3, title: "One report, every channel", desc: "Delivery, read, and click-through data normalised across channels so you can compare true performance, not just raw counts." },
  { icon: ShieldCheck, title: "One compliance layer", desc: "DLT registration for SMS, Meta BSP verification for WhatsApp, and Google brand verification for RCS — all handled by the same onboarding team." },
];

const COMPARISON_ROWS = [
  { channel: "Bulk SMS", reach: "Any mobile number", cost: "Lowest per-message cost", bestFor: "OTPs, alerts, universal reach" },
  { channel: "WhatsApp Business API", reach: "Opted-in WhatsApp users", cost: "Priced per conversation", bestFor: "Rich media, two-way support" },
  { channel: "RCS Messaging", reach: "Android users on supporting carriers", cost: "Comparable to SMS at scale", bestFor: "Branded, interactive campaigns" },
  { channel: "Voice / IVR", reach: "Any phone, if answered", cost: "Priced per minute", bestFor: "Urgent, high-stakes confirmations" },
];

const SEGMENTS = [
  { icon: Building2, title: "Real Estate & Financial Services", desc: "Site-visit reminders on SMS, EMI alerts on the DND-exempt route, and rich project brochures on RCS — one platform coordinating all three." },
  { icon: ShoppingCart, title: "Ecommerce & D2C Brands", desc: "Order and OTP alerts on SMS, cart recovery and support on WhatsApp, and branded delivery updates on RCS, triggered from the same order event." },
  { icon: Landmark, title: "Banking & NBFC", desc: "OTPs and fraud alerts on the DND-exempt SMS route, EMI reminders on WhatsApp with a Pay Now button, and statement delivery on RCS." },
  { icon: GraduationCap, title: "Schools & Education", desc: "Absence alerts on SMS for universal reach, fee reminders on WhatsApp, and admission-drive rich cards on RCS — one parent database, three channels." },
];

const FAQS = [
  {
    q: "What is a business messaging platform?",
    a: "A business messaging platform lets a company send and manage customer communication — SMS, WhatsApp, RCS, and voice — from one unified system instead of maintaining separate accounts, dashboards, and integrations per channel.",
  },
  {
    q: "Does Get Click Media offer a unified messaging platform?",
    a: "Yes — Bulk SMS, WhatsApp Business API, RCS Messaging, and Voice/IVR are all manageable through one Get Click Media account, with a shared API, shared delivery reporting, and one onboarding process for DLT, Meta BSP, and Google brand verification.",
  },
  {
    q: "Why use a unified platform instead of separate tools per channel?",
    a: "Running SMS, WhatsApp, and RCS through separate vendors means separate contracts, separate APIs to integrate, separate dashboards to check, and no easy way to compare channel performance side by side. A unified platform collapses that into one integration and one source of truth for delivery data — which is also what lets you run true channel-fallback logic (RCS to SMS, for example) automatically.",
  },
  {
    q: "Can I start with one channel and add others later?",
    a: "Yes — most businesses start with Bulk SMS or WhatsApp for a specific use case (OTPs, order alerts, support) and add RCS or Voice as those needs grow. Because the account, API, and compliance groundwork are shared, adding a channel later doesn't require a new integration from scratch.",
  },
  {
    q: "Is this the same as a CPaaS platform?",
    a: "Yes, in category terms — Get Click Media functions as a CPaaS (Communications Platform as a Service) provider for the Indian market, with the addition of India-specific compliance handling (TRAI DLT, Meta BSP, Google RBM verification) built into onboarding rather than left to the business to manage separately.",
  },
];

const RELATED_LINKS = [
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "Enterprise Messaging Platform", href: "/enterprise-messaging-platform" },
  { label: "Conversational Messaging Platform", href: "/conversational-messaging-platform" },
  { label: "RCS Pricing India", href: "/rcs-pricing-india" },
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
        { "@type": "ListItem", position: 2, name: "Business Messaging Platform", item: "https://getclickmedia.com/business-messaging-platform" },
      ],
    },
    {
      "@type": "Service",
      name: "Business Messaging Platform — Get Click Media",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "Unified Business Messaging Platform (SMS, WhatsApp, RCS, Voice)",
      url: "https://getclickmedia.com/business-messaging-platform",
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

export default function BusinessMessagingPlatformPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <DarkHero
        theme="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Business Messaging Platform" },
        ]}
        eyebrow="Unified Business Messaging"
        title="Business Messaging Platform for Indian Businesses"
        highlight="for Indian Businesses"
        description={
          <>
            One platform for <strong className="text-gray-900">SMS, WhatsApp, RCS, and Voice</strong> —
            a single API, a single dashboard, and one delivery report across every channel your
            customers actually use.
          </>
        }
        primaryCta={{ label: "Book a Platform Demo" }}
        secondaryCta={{ label: "See RCS Pricing", href: "/rcs-pricing-india" }}
        imageSrc="/images/rcs/rcs-service-provider-india.png"
        imageAlt="Get Click Media unified business messaging platform dashboard showing SMS, WhatsApp, RCS, and Voice channels"
        trustLine="One account for SMS, WhatsApp, RCS & Voice · 10,000+ Indian businesses"
      />

      <div className="bg-white border-b border-gray-100">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 text-center text-xs text-gray-400">
          Last updated: {LAST_UPDATED} · Reviewed by the Get Click Media platform team
        </p>
      </div>

      <ClientMarquee />

      {/* -- AEO BLOCK ------------------------------------------------------ */}
      <section className="relative py-10">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-[680px] mx-auto rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base leading-[1.7] text-gray-700">
              A <strong className="text-gray-900">business messaging platform</strong> is a
              single system for sending and managing customer communication across SMS,
              WhatsApp, RCS, and voice — instead of running each channel through a separate
              vendor, API, and dashboard. Get Click Media's platform gives Indian businesses one
              account, one API, and one delivery report across all four channels, with DLT, Meta
              BSP, and Google brand verification handled as part of onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* -- WHAT IS A BUSINESS MESSAGING PLATFORM --------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="what-is-it">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 space-y-6 text-gray-600 leading-[1.7]">
          <div className="text-center mb-6 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What Is a Business Messaging Platform
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              One Login Instead of Four Vendor Relationships
            </h2>
          </div>
          <p>
            Most Indian businesses end up assembling their customer communication stack one
            channel at a time — an SMS gateway for OTPs, a separate WhatsApp Business Solution
            Provider for marketing, maybe a voice/IVR vendor for support calls. Each comes with
            its own contract, its own API to integrate, and its own dashboard to check.
          </p>
          <p>
            A business messaging platform collapses that into a single relationship: one account
            covering SMS, WhatsApp, RCS, and Voice, one API contract your engineering team
            integrates once, and one delivery-report view so you can actually compare how each
            channel is performing instead of stitching together four separate exports.
          </p>
        </div>
      </section>

      {/* -- CHANNELS IN ONE PLATFORM ----------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="channels">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Four Channels, One Platform
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              SMS, WhatsApp, RCS, and Voice — Together
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-2">
            {CHANNELS.map((c) => (
              <BentoCard key={c.title} icon={c.icon} name={c.title} description={c.desc} href={c.href} cta="Learn more" />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- PLATFORM FEATURES ------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="platform-features">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why a Unified Platform Beats Single-Channel Tools
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              What "Unified" Actually Means
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-2">
            {PLATFORM_FEATURES.map((f) => (
              <BentoCard key={f.title} icon={f.icon} name={f.title} description={f.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- CHANNEL COMPARISON --------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="comparison">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Choosing the Right Channel
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Which Channel Fits Which Message
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Most businesses don't pick one channel — they route each message type to the
              channel that fits it best, and let the platform fall back automatically when a
              recipient's device doesn't support the richer option.
            </p>
          </div>
          <ResponsiveTable
            caption="Comparison of SMS, WhatsApp, RCS, and Voice channels"
            columns={[
              { key: "channel", label: "Channel" },
              { key: "reach", label: "Reach" },
              { key: "cost", label: "Cost" },
              { key: "bestFor", label: "Best For" },
            ]}
            rows={COMPARISON_ROWS}
          />
        </div>
      </section>

      {/* -- WHO THIS IS FOR --------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="who-this-is-for">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Who This Is For
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Built for Businesses Running More Than One Channel
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-2">
            {SEGMENTS.map((s) => (
              <BentoCard key={s.title} icon={s.icon} name={s.title} description={s.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="faq">
        <SectionPattern tone="gold" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Business Messaging Platform FAQs
            </h2>
          </div>
          <AccordionList items={FAQS.map((f) => ({ question: f.q, answer: <p className="text-base text-gray-500 leading-[1.7]">{f.a}</p> }))} />
        </div>
      </section>

      {/* -- RELATED LINKS ---------------------------------------------------- */}
      <section className="relative py-16">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related resources
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
            title="Ready to unify your business messaging?"
            description="Get Click Media brings SMS, WhatsApp, RCS, and Voice under one API and one dashboard for Indian businesses."
            ctaLabel="Book a Platform Demo"
          />
        </div>
      </section>
    </>
  );
}
