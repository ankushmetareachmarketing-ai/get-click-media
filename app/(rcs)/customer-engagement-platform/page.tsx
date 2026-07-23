import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Radio,
  Hash,
  Mail,
  Eye,
  MousePointerClick,
  Reply,
  Repeat,
  Building2,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
} from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";

export const metadata: Metadata = {
  title: "Customer Engagement Platform for Indian Businesses | Get Click Media",
  description:
    "Engage customers across SMS, WhatsApp, RCS, and Email from one platform. Get Click Media's messaging infrastructure helps Indian businesses improve response and retention.",
  keywords:
    "customer engagement platform, customer engagement platform india, customer engagement software india, customer engagement tools, multi channel customer engagement, customer retention messaging platform, customer communication platform india",
  alternates: { canonical: "https://getclickmedia.com/customer-engagement-platform" },
  openGraph: {
    title: "Customer Engagement Platform for Indian Businesses",
    description:
      "Engage customers across SMS, WhatsApp, RCS, and Email from one platform, with delivery data that shows what's actually driving response and retention.",
    url: "https://getclickmedia.com/customer-engagement-platform",
    type: "website",
  },
};

const LAST_UPDATED = "July 2026";

const CHANNELS = [
  { icon: Hash, title: "SMS", desc: "Universal reach for time-critical alerts, OTPs, and reminders — the channel every customer can receive.", href: "/bulk-sms-service-provider-india" },
  { icon: MessageSquare, title: "WhatsApp", desc: "Two-way, rich-media conversations for support, updates, and marketing where customers already spend their time.", href: "/whatsapp-business-api" },
  { icon: Radio, title: "RCS", desc: "Branded, interactive rich cards for campaigns that need to look and feel like more than plain text.", href: "/rcs-messaging" },
  { icon: Mail, title: "Email", desc: "Detailed, non-urgent content — newsletters, invoices, and longer-form updates — alongside your messaging channels.", href: "/" },
];

const METRICS = [
  { icon: Eye, title: "Open & read rate", desc: "How many recipients actually saw the message — the first signal of whether a channel and send-time are working." },
  { icon: MousePointerClick, title: "Click-through rate", desc: "How many recipients acted on a link or button — the metric that connects a message to real intent." },
  { icon: Reply, title: "Response rate", desc: "For two-way channels like WhatsApp and RCS, how often a message starts an actual conversation instead of a one-way broadcast." },
  { icon: Repeat, title: "Retention & repeat engagement", desc: "Whether customers who receive consistent, well-timed messages keep coming back — the metric that ties engagement to revenue." },
];

const SEGMENTS = [
  { icon: Building2, title: "Real Estate", desc: "Site-visit reminders, payment alerts, and nurture sequences keep leads engaged from enquiry to possession." },
  { icon: ShoppingCart, title: "Ecommerce", desc: "Order updates, cart recovery, and post-purchase engagement across SMS, WhatsApp, and RCS." },
  { icon: HeartPulse, title: "Healthcare", desc: "Appointment reminders, report alerts, and refill nudges that keep patients engaged with their care plan." },
  { icon: GraduationCap, title: "Education", desc: "Fee reminders, attendance alerts, and exam notifications that keep parents engaged with the school." },
];

const FAQS = [
  {
    q: "What is a customer engagement platform?",
    a: "A customer engagement platform is a system businesses use to communicate with customers across channels — SMS, WhatsApp, RCS, and email — with the goal of driving response, retention, and conversion, backed by data on what's actually working.",
  },
  {
    q: "Is a customer engagement platform the same as a messaging API?",
    a: "Not quite — a messaging API is the delivery infrastructure that sends and receives messages. A customer engagement platform sits on top of that infrastructure, adding campaign building, engagement metrics, and channel selection so the business can focus on the customer relationship rather than the technical delivery layer.",
  },
  {
    q: "Is Get Click Media a CRM or a messaging platform?",
    a: "Get Click Media is a messaging-infrastructure company, not a full CRM or customer-support suite — we don't replace tools like a sales pipeline, ticketing system, or contact database. What we provide is the multi-channel messaging layer — SMS, WhatsApp, RCS, and delivery/engagement reporting — that plugs into the CRM or business system you already use, so your existing customer data drives messages across every channel from one place.",
  },
  {
    q: "Which engagement metrics matter most?",
    a: "Open/read rate tells you whether a message was seen, click-through rate tells you whether it drove action, response rate matters for two-way channels like WhatsApp and RCS, and retention over time is the metric that ultimately connects engagement activity to business outcomes. Most businesses track all four rather than optimising for just one.",
  },
  {
    q: "Can engagement data be compared across SMS, WhatsApp, and RCS?",
    a: "Yes — Get Click Media normalises delivery and engagement data across all supported channels into one reporting view, so you can compare true performance between an SMS campaign and a WhatsApp or RCS campaign rather than exporting separate reports from separate vendor dashboards.",
  },
];

const RELATED_LINKS = [
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "Business Messaging Platform", href: "/business-messaging-platform" },
  { label: "Conversational Messaging Platform", href: "/conversational-messaging-platform" },
  { label: "RCS for Ecommerce", href: "/rcs-for-ecommerce" },
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
        { "@type": "ListItem", position: 2, name: "Customer Engagement Platform", item: "https://getclickmedia.com/customer-engagement-platform" },
      ],
    },
    {
      "@type": "Service",
      name: "Customer Engagement Platform — Get Click Media",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "Multi-Channel Customer Engagement (SMS, WhatsApp, RCS, Email)",
      url: "https://getclickmedia.com/customer-engagement-platform",
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

export default function CustomerEngagementPlatformPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <DarkHero
        theme="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Customer Engagement Platform" },
        ]}
        eyebrow="Multi-Channel Engagement"
        title="Customer Engagement Platform for Indian Businesses"
        highlight="for Indian Businesses"
        description={
          <>
            Engage customers across <strong className="text-gray-900">SMS, WhatsApp, RCS, and
            Email</strong> from one platform — with delivery data that shows what's actually
            driving response and retention, not just what got sent.
          </>
        }
        primaryCta={{ label: "Book a Demo" }}
        secondaryCta={{ label: "See the Full Platform", href: "/business-messaging-platform" }}
        imageSrc="/images/rcs/rcs-service-provider-india.png"
        imageAlt="Customer engagement dashboard showing SMS, WhatsApp, RCS, and Email channel performance"
        trustLine="One reporting view across every channel · 10,000+ Indian businesses"
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
              A <strong className="text-gray-900">customer engagement platform</strong> is a
              system businesses use to communicate with customers across channels — SMS,
              WhatsApp, RCS, and email — to drive response, retention, and conversion, with
              engagement data to show what's working. Get Click Media provides the multi-channel
              messaging layer for this — it plugs into the CRM or business system you already
              use, rather than replacing it.
            </p>
          </div>
        </div>
      </section>

      {/* -- WHAT IS A CUSTOMER ENGAGEMENT PLATFORM --------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="what-is-it">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 space-y-6 text-gray-600 leading-[1.7]">
          <div className="text-center mb-6 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What Is a Customer Engagement Platform
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              The Messaging Layer, Not the CRM
            </h2>
          </div>
          <p>
            "Customer engagement platform" gets used to describe two genuinely different kinds of
            product: full CX/CRM suites that manage the entire customer record and relationship,
            and the messaging layer that actually delivers the communication those systems
            decide to send. Get Click Media is the second kind — we're a messaging-infrastructure
            company, not a replacement for your CRM.
          </p>
          <p>
            What that means in practice: your CRM, e-commerce platform, or in-house system stays
            the source of truth for customer data and business logic. Get Click Media plugs into
            it to actually deliver the resulting SMS, WhatsApp, RCS, or email message, and feeds
            back delivery and engagement data — open rate, click-through, response, retention —
            so you can see which channel and message is genuinely moving the relationship
            forward.
          </p>
        </div>
      </section>

      {/* -- MULTI-CHANNEL ENGAGEMENT ----------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="channels">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Multi-Channel Engagement
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              SMS + WhatsApp + RCS + Email
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-2">
            {CHANNELS.map((c) => (
              <BentoCard key={c.title} icon={c.icon} name={c.title} description={c.desc} href={c.href} cta="Learn more" />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- ENGAGEMENT METRICS ------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="metrics">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Engagement Metrics That Matter
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              What to Track Across Channels
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-2">
            {METRICS.map((m) => (
              <BentoCard key={m.title} icon={m.icon} name={m.title} description={m.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- INDUSTRIES WE HELP ENGAGE ----------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="industries">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Industries We Help Engage Customers
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Engagement Looks Different by Sector
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
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="faq">
        <SectionPattern tone="gold" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Customer Engagement Platform FAQs
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
            title="Ready to engage customers across every channel?"
            description="Get Click Media brings SMS, WhatsApp, RCS, and Email together with one engagement reporting view for Indian businesses."
            ctaLabel="Book a Demo"
          />
        </div>
      </section>
    </>
  );
}
