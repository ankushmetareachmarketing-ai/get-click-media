import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  Repeat,
  FileCheck2,
  Code2,
  Rocket,
  BarChart3,
  Headset,
} from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "Best RCS Service Provider in India (2026) | Get Click Media",
  description:
    "Looking for a reliable RCS service provider in India? Compare capabilities, network coverage, and setup process — trusted by 10,000+ Indian businesses. Book a free RCS demo.",
  keywords:
    "RCS service provider India, best RCS provider India, RCS messaging company India, RCS business messaging provider, RCS API provider India, RCS vendor India, RCS aggregator India",
  alternates: { canonical: "https://getclickmedia.com/rcs-service-provider-india" },
  openGraph: {
    title: "Best RCS Service Provider in India",
    description:
      "Get Click Media is a trusted RCS Business Messaging provider for Indian companies — capabilities, coverage, and setup process.",
    url: "https://getclickmedia.com/rcs-service-provider-india",
    type: "website",
  },
};

const LAST_UPDATED = "July 2026";

const CAPABILITIES = [
  { icon: ShieldCheck, title: "Verified sender badge", desc: "Google brand verification handled end-to-end, so every message shows your business name and logo." },
  { icon: Repeat, title: "Intelligent SMS fallback", desc: "Every recipient's device is checked for RCS support; non-RCS devices automatically get an SMS fallback so delivery is never lost." },
  { icon: Layers, title: "Rich cards & carousels", desc: "Swipeable product carousels, suggested replies, and up to three action buttons per message — no code required to build them." },
  { icon: BarChart3, title: "Delivery & read reporting", desc: "Real-time delivery, read, and click data per recipient — not just \"sent,\" like plain SMS." },
  { icon: Code2, title: "REST API & webhooks", desc: "Full API access for sending programmatically, plus webhooks for delivery-status and read-receipt callbacks." },
  { icon: Headset, title: "Dedicated onboarding support", desc: "A single point of contact walks you through brand verification and your first campaign build." },
];

const COVERAGE_ROWS = [
  { network: "Jio", support: "Supported", notes: "Direct carrier integration" },
  { network: "Airtel", support: "Supported", notes: "Direct carrier integration" },
  { network: "Vi (Vodafone Idea)", support: "Supported", notes: "Direct carrier integration" },
  { network: "Android (Google Messages)", support: "Supported", notes: "Primary RCS delivery surface in India" },
  { network: "iOS (iOS 18+)", support: "Growing", notes: "Apple added RCS support starting iOS 18; feature parity is still evolving" },
];

const COMPARISON_ROWS = [
  { capability: "Verified sender badge", gcm: true, generic: "Varies by provider" },
  { capability: "SMS fallback for non-RCS devices", gcm: true, generic: "Not always included" },
  { capability: "Direct carrier integration (no aggregator hop)", gcm: true, generic: "Often routed via aggregators" },
  { capability: "Real-time delivery & read reporting", gcm: true, generic: "Varies by provider" },
  { capability: "Dedicated onboarding support", gcm: true, generic: "Self-serve only, in some cases" },
  { capability: "REST API & webhook access", gcm: true, generic: "Varies by provider" },
];

const FAQS = [
  {
    q: "Who is the best RCS service provider in India?",
    a: "Look for a provider with direct carrier integrations (not just an aggregator relay), proven SMS-fallback capability, and hands-on brand-verification support. Get Click Media offers all three, serving 10,000+ Indian businesses across WhatsApp, RCS, and SMS.",
  },
  {
    q: "What should I look for in an RCS provider?",
    a: "Verified sender support, delivery and read-receipt reporting, automatic SMS fallback for devices that don't support RCS, and transparent, volume-based pricing with no surprise charges.",
  },
  {
    q: "Does Get Click Media offer RCS SMS fallback?",
    a: "Yes — messages automatically fall back to SMS when the recipient's device or network doesn't support RCS, so delivery is never lost.",
  },
  {
    q: "How fast is RCS onboarding with Get Click Media?",
    a: "Brand verification and go-live typically takes 5–7 business days, depending on how quickly your business documentation and brand assets are ready.",
  },
  {
    q: "Can I switch from another RCS provider to Get Click Media?",
    a: "Yes — our onboarding team handles brand re-verification and helps migrate your existing message templates as part of the switch.",
  },
  {
    q: "Is there a minimum volume commitment?",
    a: "Plans scale with your usage rather than locking you into a fixed volume. Talk to our sales team and we'll recommend the right structure for your expected send volume.",
  },
  {
    q: "Do you provide delivery and read-receipt reports?",
    a: "Yes — real-time delivery, read, and click reporting is included on every RCS account, so you can see engagement per recipient rather than just \"sent.\"",
  },
  {
    q: "What carriers does Get Click Media's RCS support in India?",
    a: "Coverage spans Android devices via Google Messages, with direct integrations across Jio, Airtel, and Vi.",
  },
  {
    q: "Is RCS messaging more expensive than SMS?",
    a: "Per-message RCS typically costs more than plain SMS, but the rich-media format tends to drive materially higher engagement. See our RCS Pricing India page for a full breakdown and to get a custom quote.",
  },
  {
    q: "Do you offer a free trial or demo?",
    a: "Yes — book a free RCS demo to see rich cards, carousels, and action buttons rendered on a live test device before you commit to anything.",
  },
];

const RELATED_LINKS = [
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "RCS Pricing India", href: "/rcs-pricing-india" },
  { label: "RCS API", href: "/rcs-api" },
  { label: "Google RCS Business Messaging", href: "/google-rcs-business-messaging" },
  { label: "RCS for Banking", href: "/rcs-for-banking" },
  { label: "RCS for E-commerce", href: "/rcs-for-ecommerce" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
        { "@type": "ListItem", position: 3, name: "RCS Service Provider India", item: "https://getclickmedia.com/rcs-service-provider-india" },
      ],
    },
    {
      "@type": "Service",
      name: "RCS Business Messaging Service Provider",
      provider: { "@type": "Organization", name: "Get Click Media", url: "https://getclickmedia.com" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "RCS Business Messaging",
      url: "https://getclickmedia.com/rcs-service-provider-india",
    },
    {
      "@type": "WebPage",
      "@id": "https://getclickmedia.com/rcs-service-provider-india",
      url: "https://getclickmedia.com/rcs-service-provider-india",
      name: "Best RCS Service Provider in India (2026) | Get Click Media",
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

export default function RCSServiceProviderIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -- HERO ------------------------------------------------------------ */}
      <DarkHero
        theme="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "RCS Messaging", href: "/rcs-messaging" },
          { label: "RCS Service Provider India" },
        ]}
        eyebrow="RCS Business Messaging Provider"
        title="Best RCS Service Provider"
        highlight="in India"
        description={
          <>
            Direct carrier integrations with Jio, Airtel, and Vi — no aggregator hop in between.
            Verified sender setup, automatic SMS fallback, and real-time reporting, backed by a
            dedicated onboarding team.
            <strong className="text-gray-900"> Trusted by 10,000+ Indian businesses.</strong>
          </>
        }
        primaryCta={{ label: "Book a Free RCS Demo", href: "/contact" }}
        secondaryCta={{ label: "See RCS Pricing", href: "/rcs-pricing-india" }}
        imageSrc="/images/rcs/rcs-service-provider-india.png"
        imageAlt="Get Click Media RCS Business Messaging dashboard showing verified sender messages"
        trustLine="Trusted by 10,000+ businesses across India"
      />

      {/* -- EEAT: last-updated strip ---------------------------------------- */}
      <div className="bg-white border-b border-gray-100">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 text-center text-xs text-gray-400">
          Last updated: {LAST_UPDATED} · Reviewed by the Get Click Media RCS team
        </p>
      </div>

      {/* -- TRUST LOGOS ------------------------------------------------------ */}
      <ClientMarquee />

      {/* -- DIRECT ANSWER / AEO BLOCK --------------------------------------- */}
      <section className="relative py-10">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-[680px] mx-auto rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base leading-[1.7] text-gray-700">
              A reliable RCS service provider in India should offer direct carrier integration
              (not just an aggregator relay), Google brand verification support, automatic SMS
              fallback for unsupported devices, and transparent reporting. Get Click Media
              provides all four, with direct connections to Jio, Airtel, and Vi, serving
              10,000+ Indian businesses across RCS, WhatsApp, and SMS.
            </p>
          </div>
        </div>
      </section>

      {/* -- WHY CHOOSE GET CLICK MEDIA --------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="why-us">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Choose Get Click Media
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Your RCS Service Provider for the Indian Market
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              We connect directly to Jio, Airtel, and Vi rather than routing through a third-party
              aggregator — that means faster delivery, better reliability, and accurate device
              capability detection for every recipient.
            </p>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <BentoCard key={c.title} icon={c.icon} name={c.title} description={c.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- NETWORK COVERAGE -------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="coverage">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              RCS Network Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              RCS Coverage Across India's Networks
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              RCS delivery depends on both the recipient's carrier and their default messaging
              app — here's what Get Click Media's direct integrations cover today.
            </p>
          </div>
          <ResponsiveTable
            caption="RCS network and device coverage in India"
            columns={[
              { key: "network", label: "Network / Platform" },
              { key: "support", label: "Support", align: "center" },
              { key: "notes", label: "Notes" },
            ]}
            rows={COVERAGE_ROWS}
            highlightColumnKey="support"
          />
        </div>
      </section>

      {/* -- SETUP PROCESS ------------------------------------------------------ */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="setup-process">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Setup Process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              From Sign-Up to Your First RCS Campaign
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", icon: FileCheck2, title: "Brand Verification", body: "Submit your business documents, logo, and sender details. Our team handles Google brand verification end-to-end — typically 5–7 business days." },
              { n: "02", icon: Code2, title: "API Integration", body: "Connect via our REST API or no-code campaign builder. SDKs are available for Node.js, Python, PHP, and Java." },
              { n: "03", icon: Rocket, title: "Go Live", body: "Launch your first campaign or transactional flow, with real-time delivery and engagement data from message one." },
            ].map((s) => (
              <div key={s.n} className="relative rounded-2xl border-2 border-blue-100 bg-blue-50/40 p-7 space-y-4">
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center font-(family-name:--font-syne)">
                  {s.n}
                </span>
                <s.icon className="w-7 h-7 text-[#2563eb]" />
                <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- PRICING TEASER ------------------------------------------------------ */}
      <section className="relative py-14" id="pricing">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="rounded-2xl bg-[#0f172a] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">Volume-based RCS pricing, no hidden fees</h3>
              <p className="text-white/50 text-sm max-w-lg">
                RCS is billed per conversation, with rates varying by message category. See a full
                breakdown, or get a custom quote for your expected volume.
              </p>
            </div>
            <Link
              href="/rcs-pricing-india"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold hover:scale-105 transition-transform shadow-md"
            >
              See RCS Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* -- HOW WE COMPARE ------------------------------------------------------ */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="comparison">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              How We Compare
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Get Click Media vs. a Typical RCS Provider
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              A feature-based comparison against common gaps we see when businesses switch to us
              from another RCS provider or aggregator.
            </p>
          </div>
          <ResponsiveTable
            caption="Get Click Media vs a typical RCS provider in India"
            columns={[
              { key: "capability", label: "Capability" },
              { key: "gcm", label: "Get Click Media", align: "center" },
              { key: "generic", label: "Typical Provider", align: "center" },
            ]}
            rows={COMPARISON_ROWS.map((r) => ({
              capability: r.capability,
              gcm: <span className="text-green-500 font-bold">✓</span>,
              generic: <span className="text-gray-500 text-xs">{r.generic}</span>,
            }))}
            highlightColumnKey="gcm"
          />
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
              Choosing an RCS Service Provider in India
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
            title="Ready to switch to a direct-integration RCS provider?"
            description="Get Click Media handles brand verification, campaign setup, and carrier connectivity end-to-end — most clients go live within a week."
            ctaLabel="Book a Free RCS Demo"
          />
        </div>
      </section>
    </>
  );
}
