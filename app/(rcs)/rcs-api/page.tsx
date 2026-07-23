import type { Metadata } from "next";
import Link from "next/link";
import {
  KeyRound,
  Webhook,
  BarChart3,
  ShieldCheck,
  Repeat,
  TimerReset,
  FileWarning,
  Gauge,
} from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";

export const metadata: Metadata = {
  title: "RCS Messaging API for Businesses | Get Click Media",
  description:
    "Integrate RCS Business Messaging into your app or CRM with Get Click Media's RCS API — REST endpoints, webhooks, delivery reports, and code samples.",
  keywords:
    "RCS API, RCS API integration, RCS REST API, RCS API documentation, RCS API authentication, RCS API India, RCS webhook, RCS messaging API, RCS SDK",
  alternates: { canonical: "https://getclickmedia.com/rcs-api" },
  openGraph: {
    title: "RCS Messaging API for Businesses",
    description:
      "A developer-friendly RCS API — authentication, REST examples, webhooks, and delivery reporting for Indian businesses.",
    url: "https://getclickmedia.com/rcs-api",
    type: "website",
  },
};

const LAST_UPDATED = "July 2026";

const ENDPOINT_ROWS = [
  { endpoint: "POST /v1/rcs/messages", purpose: "Send a message (text / rich card / carousel)" },
  { endpoint: "GET /v1/rcs/messages/{id}", purpose: "Check delivery status of a sent message" },
  { endpoint: "POST /v1/rcs/webhooks", purpose: "Register a delivery-status or read-receipt webhook" },
];

const BEST_PRACTICES = [
  { icon: ShieldCheck, title: "Store your API key securely", desc: "Keep your API key server-side only — never ship it in client-side/mobile app code." },
  { icon: Repeat, title: "Always handle the SMS-fallback case", desc: "Check the delivery-status webhook for a fallback event so your app can log or route it correctly." },
  { icon: TimerReset, title: "Use webhooks, not polling", desc: "Register delivery and read-receipt webhooks instead of repeatedly polling the message-status endpoint." },
  { icon: FileWarning, title: "Validate payloads before sending", desc: "Malformed rich-card or carousel JSON is the most common cause of send failures — validate structure client-side first." },
  { icon: Gauge, title: "Design for rate limits", desc: "Batch sends and back off on 429 responses rather than retrying immediately in a tight loop." },
  { icon: BarChart3, title: "Monitor delivery rate, not just send success", desc: "A 200 response means the request was accepted — track the delivery webhook to confirm the message actually reached the device." },
];

const FAQS = [
  {
    q: "Does Get Click Media offer an RCS API?",
    a: "Yes — a REST API for sending rich cards, carousels, and text messages, with webhook support for delivery and read-receipt status.",
  },
  {
    q: "How do I authenticate with the RCS API?",
    a: "Authentication uses an API key issued during onboarding, passed as a bearer token in the Authorization header of every request.",
  },
  {
    q: "What message types can I send via the RCS API?",
    a: "Text, rich cards, carousels, and suggested-reply / suggested-action messages are all supported.",
  },
  {
    q: "Does the RCS API support webhooks?",
    a: "Yes — webhooks are available for delivery status and read receipts, so you can track engagement in real time instead of polling.",
  },
  {
    q: "Is there a sandbox for testing before going live?",
    a: "Ask your onboarding contact about sandbox/test-mode access for your account — availability can depend on your plan.",
  },
  {
    q: "What happens if the recipient's device doesn't support RCS?",
    a: "Messages automatically fall back to SMS when RCS delivery isn't available on the recipient's device or network, so no message is lost.",
  },
  {
    q: "Can I integrate the RCS API with my CRM?",
    a: "Yes — the REST API integrates with common CRMs and e-commerce platforms via standard HTTP calls, the same way our WhatsApp and SMS APIs do.",
  },
  {
    q: "Are there rate limits on the RCS API?",
    a: "Rate limits apply and vary by plan — your onboarding contact will confirm the exact tier for your account so you can design your integration accordingly.",
  },
  {
    q: "What are common RCS API error codes?",
    a: "Errors typically relate to invalid recipient formatting, an unverified sender ID, or rich-card/carousel payload validation failures. Full error-code documentation is provided during API onboarding.",
  },
  {
    q: "Do you provide code samples?",
    a: "Yes — illustrative REST examples for sending rich cards and carousels are shown below, and full documentation with tested samples is provided once your API key is issued.",
  },
];

const RELATED_LINKS = [
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "RCS Service Provider India", href: "/rcs-service-provider-india" },
  { label: "RCS Pricing India", href: "/rcs-pricing-india" },
  { label: "Google RCS Business Messaging", href: "/google-rcs-business-messaging" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
        { "@type": "ListItem", position: 3, name: "RCS API", item: "https://getclickmedia.com/rcs-api" },
      ],
    },
    {
      "@type": "Service",
      name: "RCS Messaging API",
      provider: { "@type": "Organization", name: "Get Click Media", url: "https://getclickmedia.com" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "RCS Business Messaging API",
      url: "https://getclickmedia.com/rcs-api",
    },
    {
      "@type": "WebPage",
      "@id": "https://getclickmedia.com/rcs-api",
      url: "https://getclickmedia.com/rcs-api",
      name: "RCS Messaging API for Businesses | Get Click Media",
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

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0c1220]">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs text-white/40 font-mono">{title}</span>
      </div>
      <pre className="p-5 overflow-x-auto text-xs sm:text-sm leading-relaxed">
        <code className="text-[#e2e8f0] font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

const RICH_CARD_CODE = `curl -X POST https://api.getclickmedia.com/v1/rcs/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+9198XXXXXXXX",
    "type": "rich_card",
    "richCard": {
      "title": "Flash Sale — 30% Off",
      "imageUrl": "https://cdn.example.com/sale-banner.jpg",
      "description": "Today only. Tap below to shop the sale.",
      "actions": [
        { "type": "openUrl", "label": "Shop Now", "url": "https://example.com/sale" }
      ]
    }
  }'`;

const CAROUSEL_CODE = `curl -X POST https://api.getclickmedia.com/v1/rcs/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+9198XXXXXXXX",
    "type": "carousel",
    "cards": [
      { "title": "Product A", "imageUrl": "https://cdn.example.com/a.jpg",
        "actions": [{ "type": "openUrl", "label": "View", "url": "https://example.com/a" }] },
      { "title": "Product B", "imageUrl": "https://cdn.example.com/b.jpg",
        "actions": [{ "type": "openUrl", "label": "View", "url": "https://example.com/b" }] }
    ]
  }'`;

const WEBHOOK_CODE = `{
  "event": "message.delivered",
  "messageId": "msg_9f2a1c",
  "to": "+9198XXXXXXXX",
  "status": "delivered",
  "channel": "rcs",
  "timestamp": "2026-07-01T10:15:00Z"
}`;

export default function RCSApiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -- HERO ------------------------------------------------------------ */}
      <DarkHero
        theme="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "RCS Messaging", href: "/rcs-messaging" },
          { label: "RCS API" },
        ]}
        eyebrow="Developer Documentation"
        title="RCS Messaging API"
        highlight="for Businesses"
        description={
          <>
            Send rich cards, carousels, and text messages programmatically. REST endpoints,
            webhook-based delivery and read-receipt tracking, and automatic SMS fallback —
            <strong className="text-gray-900"> built for CRM and app integration.</strong>
          </>
        }
        primaryCta={{ label: "Get API Access", href: "/contact" }}
        secondaryCta={{ label: "Talk to Our Integration Team", href: "/contact" }}
        imageSrc="/images/rcs/rcs-service-provider-india.png"
        imageAlt="RCS API integration — rich card message on mobile phone"
        trustLine="Node.js, Python, PHP, and Java SDKs available"
      />

      {/* -- EEAT: last-updated strip ---------------------------------------- */}
      <div className="bg-white border-b border-gray-100">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 text-center text-xs text-gray-400">
          Last updated: {LAST_UPDATED} · Reviewed by the Get Click Media engineering team
        </p>
      </div>

      <ClientMarquee />

      {/* -- OVERVIEW / AEO BLOCK --------------------------------------------- */}
      <section className="relative py-10">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-[680px] mx-auto rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base leading-[1.7] text-gray-700">
              The Get Click Media RCS API is a REST API for sending rich cards, carousels, and
              plain-text RCS messages from your own app or CRM, with webhooks for delivery status
              and read receipts, and automatic SMS fallback for devices that don&apos;t support RCS.
            </p>
          </div>
        </div>
      </section>

      {/* -- AUTHENTICATION ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="authentication">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Authentication
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              API Key Generation
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Every request is authenticated with an API key issued when your account is
              provisioned, passed as a bearer token in the request header.
            </p>
          </div>
          <CodeBlock
            title="Authorization header"
            code={`Authorization: Bearer YOUR_API_KEY\nContent-Type: application/json`}
          />
        </div>
      </section>

      {/* -- REST API EXAMPLES ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="rest-examples">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              REST API Examples
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Send a Message via the RCS API
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Illustrative request format — your onboarding contact confirms exact field names
              and base URL for your account before you go live.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Send a Rich Card Message</h3>
            <CodeBlock title="POST /v1/rcs/messages" code={RICH_CARD_CODE} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Send a Carousel Message</h3>
            <CodeBlock title="POST /v1/rcs/messages" code={CAROUSEL_CODE} />
          </div>
        </div>
      </section>

      {/* -- WEBHOOKS ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="webhooks">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 space-y-8">
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Webhooks
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Delivery Status & Read Receipt Webhooks
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Register a webhook URL to receive real-time delivery-status and read-receipt
              events, instead of polling the API for status updates.
            </p>
          </div>
          <CodeBlock title="Delivery status webhook payload" code={WEBHOOK_CODE} />
          <BentoGrid className="sm:grid-cols-2 lg:grid-cols-2">
            <BentoCard icon={Webhook} name="Delivery Status Webhook" description="Fires when a message is sent, delivered, falls back to SMS, or fails — with a timestamp and reason." />
            <BentoCard icon={KeyRound} name="Read Receipt Webhook" description="Fires when the recipient opens the message inside Google Messages, for engagement tracking." />
          </BentoGrid>
        </div>
      </section>

      {/* -- DELIVERY REPORTS ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="delivery-reports">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Delivery Reports
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Illustrative RCS API Endpoints
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              In addition to webhooks, you can poll message status directly by ID — useful for
              reconciliation jobs and dashboards.
            </p>
          </div>
          <ResponsiveTable
            caption="RCS API endpoints"
            columns={[
              { key: "endpoint", label: "Endpoint" },
              { key: "purpose", label: "Purpose" },
            ]}
            rows={ENDPOINT_ROWS}
          />
        </div>
      </section>

      {/* -- BEST PRACTICES ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-[#0f172a]" id="best-practices">
        <SectionPattern tone="green" opacity={0.08} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              RCS API Best Practices
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight font-(family-name:--font-syne)">
              Building a Reliable RCS Integration
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {BEST_PRACTICES.map((b) => (
              <BentoCard key={b.title} tone="dark" icon={b.icon} name={b.title} description={b.desc} />
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
              RCS API for Developers
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
            title="Ready to integrate RCS into your app?"
            description="Talk to our integration team for API access, full endpoint documentation, and SDK support."
            ctaLabel="Talk to Our Integration Team"
          />
        </div>
      </section>
    </>
  );
}
