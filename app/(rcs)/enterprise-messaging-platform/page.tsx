import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Server,
  Headset,
  Webhook,
  Database,
  Building2,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Lock,
  Gauge,
} from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";

export const metadata: Metadata = {
  title: "Enterprise Messaging Platform India | Get Click Media",
  description:
    "Enterprise-grade messaging for high-volume Indian businesses — RCS, WhatsApp, and SMS with custom SLAs, dedicated support, and custom integrations.",
  keywords:
    "enterprise messaging platform, enterprise messaging platform india, enterprise sms platform, enterprise whatsapp api, enterprise rcs platform, high volume messaging platform india, enterprise communication platform, enterprise messaging sla, b2b messaging platform india",
  alternates: { canonical: "https://getclickmedia.com/enterprise-messaging-platform" },
  openGraph: {
    title: "Enterprise Messaging Platform India",
    description:
      "Enterprise-grade messaging for high-volume Indian businesses — RCS, WhatsApp, and SMS with custom SLAs, dedicated support, and custom integrations.",
    url: "https://getclickmedia.com/enterprise-messaging-platform",
    type: "website",
  },
};

const LAST_UPDATED = "July 2026";

const ENTERPRISE_TRAITS = [
  { icon: Gauge, title: "High-volume capacity", desc: "Infrastructure sized for millions of messages a month across SMS, WhatsApp, and RCS, without the throughput ceilings of a standard small-business plan." },
  { icon: ShieldCheck, title: "Custom SLA terms", desc: "Uptime, delivery-latency, and support-response commitments negotiated to your business's actual risk tolerance, not a fixed one-size-fits-all number." },
  { icon: Headset, title: "Dedicated account management", desc: "A named account manager and technical contact instead of a shared support queue — for escalations that can't wait in line." },
  { icon: Database, title: "Custom system integration", desc: "Direct integration work with your core banking system, ERP, CRM, or in-house platform, beyond what a standard API doc alone gets you to." },
  { icon: Server, title: "Dedicated infrastructure options", desc: "Isolated sending infrastructure for businesses whose volume or compliance requirements call for it, rather than fully shared multi-tenant capacity." },
  { icon: Lock, title: "Security and compliance depth", desc: "India-hosted data processing, audit-trail logging, and support for sector-specific compliance reviews (banking, healthcare) beyond baseline DLT/BSP registration." },
];

const SEGMENTS = [
  { icon: Landmark, title: "Banks & NBFCs", desc: "High-volume OTP and EMI-reminder traffic on a DND-exempt route, with audit-trail logging for compliance review." },
  { icon: ShoppingCart, title: "Large Ecommerce & Marketplaces", desc: "Order, OTP, and delivery-update volume that scales sharply during sale events, on infrastructure built for traffic spikes." },
  { icon: Building2, title: "Real Estate Groups & Developers", desc: "Multi-project, multi-city SMS and RCS coordination across a large, growing buyer and broker database." },
  { icon: GraduationCap, title: "School Networks & Ed-Tech Platforms", desc: "Multi-branch or multi-campus communication with a shared platform and consistent compliance across locations." },
];

const FAQS = [
  {
    q: "What defines an enterprise messaging platform?",
    a: "An enterprise messaging platform offers high-volume sending capacity, negotiated SLA terms, dedicated account and technical support, and custom system integration work — the layer of service beyond what a standard self-serve small-business plan includes.",
  },
  {
    q: "Does Get Click Media serve enterprise and high-volume clients?",
    a: "Yes — Get Click Media's platform is built on infrastructure already handling delivery for 10,000+ businesses across SMS, WhatsApp, and RCS with 99.9% uptime. High-volume and enterprise accounts move to custom SLA terms, dedicated account management, and direct integration support rather than the standard self-serve plan.",
  },
  {
    q: "What SLA can an enterprise account expect?",
    a: "SLA terms — uptime commitments, delivery-latency targets, and support-response times — are negotiated per account based on your volume, criticality, and compliance requirements, rather than published as a single fixed number. Talk to our sales team for the specific terms that apply to your use case.",
  },
  {
    q: "Can Get Click Media integrate directly with our core banking, ERP, or CRM system?",
    a: "Yes — enterprise onboarding includes direct integration work with core banking systems, ERP platforms, and CRMs, beyond the standard REST API and webhook documentation available to all accounts.",
  },
  {
    q: "Is enterprise pricing different from the standard plans?",
    a: "Yes — enterprise accounts move to custom, volume-negotiated pricing rather than the published Starter/Growth per-message rates, reflecting dedicated infrastructure, SLA commitments, and account management that scale with your usage.",
  },
];

const RELATED_LINKS = [
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "RCS Service Provider India", href: "/rcs-service-provider-india" },
  { label: "Business Messaging Platform", href: "/business-messaging-platform" },
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
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
        { "@type": "ListItem", position: 3, name: "Enterprise Messaging Platform", item: "https://getclickmedia.com/enterprise-messaging-platform" },
      ],
    },
    {
      "@type": "Service",
      name: "Enterprise Messaging Platform — Get Click Media",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "Enterprise Business Messaging (SMS, WhatsApp, RCS)",
      url: "https://getclickmedia.com/enterprise-messaging-platform",
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

export default function EnterpriseMessagingPlatformPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <DarkHero
        theme="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Business Messaging Platform", href: "/business-messaging-platform" },
          { label: "Enterprise Messaging Platform" },
        ]}
        eyebrow="Enterprise-Grade Messaging"
        title="Enterprise Messaging Platform for High-Volume Businesses"
        highlight="for High-Volume Businesses"
        description={
          <>
            High-volume SMS, WhatsApp, and RCS messaging with{" "}
            <strong className="text-gray-900">custom SLAs, dedicated support, and direct
            system integration</strong> — for Indian businesses whose messaging needs have
            outgrown a standard self-serve plan.
          </>
        }
        primaryCta={{ label: "Talk to Enterprise Sales" }}
        secondaryCta={{ label: "See the Full Platform", href: "/business-messaging-platform" }}
        imageSrc="/images/rcs/rcs-service-provider-india.png"
        imageAlt="Enterprise messaging platform dashboard for high-volume Indian businesses"
        trustLine="Built on infrastructure serving 10,000+ Indian businesses at 99.9% uptime"
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
              An <strong className="text-gray-900">enterprise messaging platform</strong> is a
              tier of messaging service built for high-volume senders — offering negotiated SLA
              terms, dedicated account and technical support, and direct integration with core
              business systems, beyond what a standard self-serve plan provides. Get Click Media
              offers this as an upgrade path from its standard SMS, WhatsApp, and RCS plans for
              Indian businesses whose volume, compliance needs, or integration complexity call
              for it.
            </p>
          </div>
        </div>
      </section>

      {/* -- WHAT MAKES A PLATFORM ENTERPRISE-GRADE ---------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="what-makes-it-enterprise">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 space-y-6 text-gray-600 leading-[1.7]">
          <div className="text-center mb-6 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What Makes a Platform "Enterprise-Grade"
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              It's a Service Tier, Not a Marketing Label
            </h2>
          </div>
          <p>
            "Enterprise" gets attached to a lot of SaaS pricing pages without much behind it. In
            practical terms, an enterprise messaging tier means four things: capacity that can
            absorb high and spiky volume without throttling, SLA terms that are actually
            negotiated to your risk profile rather than a fixed page you can't adjust, a named
            account contact instead of a shared support queue, and integration work that goes
            into your specific core systems rather than stopping at generic API documentation.
          </p>
          <p>
            We'd rather be direct about this than oversell it: enterprise terms are negotiated
            per account, based on your volume, compliance requirements, and integration scope —
            they're not a fixed public number we can quote out of context. What we can tell you
            up front is the infrastructure this tier runs on, which already handles delivery for
            10,000+ businesses across India at 99.9% uptime.
          </p>
        </div>
      </section>

      {/* -- ENTERPRISE TRAITS ------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="traits">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              SLAs, Uptime, Integrations & Support
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              What's Included at the Enterprise Tier
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {ENTERPRISE_TRAITS.map((t) => (
              <BentoCard key={t.title} icon={t.icon} name={t.title} description={t.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- WHO THIS IS FOR --------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="who-this-is-for">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Who Needs the Enterprise Tier
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              High-Volume Sectors We Support
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              If a standard plan's volume ceiling, shared support queue, or generic API docs are
              already a bottleneck for your team, that's usually the signal it's time to talk to
              enterprise sales.
            </p>
          </div>
          <BentoGrid className="lg:grid-cols-2">
            {SEGMENTS.map((s) => (
              <BentoCard key={s.title} icon={s.icon} name={s.title} description={s.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- GETTING STARTED --------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="getting-started">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Getting Started
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              How Enterprise Onboarding Works
            </h2>
          </div>
          <ol className="space-y-4">
            {[
              { title: "Volume and use-case review", body: "Our team reviews your expected volume, channel mix, and compliance requirements to scope the right infrastructure and SLA terms." },
              { title: "Integration and compliance setup", body: "Direct integration with your core systems, plus DLT, Meta BSP, and Google brand verification handled by our onboarding team." },
              { title: "Go live with a dedicated account manager", body: "A named account and technical contact takes over from general support, for launches and ongoing escalations." },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4 items-start rounded-2xl border border-gray-100 bg-white shadow-(--shadow-card) p-6">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white text-sm font-bold flex items-center justify-center font-(family-name:--font-syne)">
                  {i + 1}
                </span>
                <div>
                  <p className="text-base font-bold text-gray-900">{step.title}</p>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="faq">
        <SectionPattern tone="gold" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Enterprise Messaging Platform FAQs
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
            title="Outgrown your current messaging plan?"
            description="Talk to Get Click Media's enterprise team about SLA terms, dedicated support, and custom integration for high-volume messaging."
            ctaLabel="Talk to Enterprise Sales"
          />
        </div>
      </section>
    </>
  );
}
