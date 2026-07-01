import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  ArrowRightLeft,
  ArrowDownToLine,
  Puzzle,
  Code2,
  ShieldCheck,
  Gauge,
  Zap,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API Integration Guide — Connect WhatsApp to Your Platform | Get Click Media",
  description:
    "Connect WhatsApp Business API to Shopify, WooCommerce, Salesforce, HubSpot, Zoho, or any custom platform via REST API and webhooks. Code samples, architecture, and pre-built connectors from an official Meta BSP.",
  keywords:
    "WhatsApp API Integration, whatsapp business integration, whatsapp business api integration, integrate whatsapp website, crm whatsapp api, whatsapp api connect, whatsapp shopify integration, whatsapp salesforce integration, whatsapp hubspot integration",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-integration" },
  openGraph: {
    title: "WhatsApp API Integration Guide — Connect WhatsApp to Your Platform | Get Click Media",
    description:
      "Pre-built connectors for 10+ platforms, REST API + SDKs, and technical team support. Go live in 5 days.",
    url: "https://getclickmedia.com/whatsapp-api-integration",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to integrate WhatsApp Business API",
      totalTime: "P5D",
      step: [
        { "@type": "HowToStep", position: 1, name: "Get API credentials", text: "Complete WhatsApp onboarding. Receive API key and Phone Number ID from Get Click Media." },
        { "@type": "HowToStep", position: 2, name: "Send test message", text: "POST to /v2/whatsapp/messages with a template payload to verify credentials." },
        { "@type": "HowToStep", position: 3, name: "Set up webhook", text: "Create HTTPS endpoint, register in GCM dashboard, verify signature on inbound events." },
        { "@type": "HowToStep", position: 4, name: "Connect data sources", text: "Link chatbot to your OMS, CRM, or DB for live data lookups." },
        { "@type": "HowToStep", position: 5, name: "Handle opt-outs and errors", text: "Honour opt-out webhook events immediately. Implement retry logic for 429/5xx." },
        { "@type": "HowToStep", position: 6, name: "Test and go live", text: "Full end-to-end testing in sandbox. Deploy to production." },
      ],
    },
    {
      "@type": "Service",
      name: "WhatsApp API Integration Services",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "WhatsApp API Integration",
      url: "https://getclickmedia.com/whatsapp-api-integration",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Integration", item: "https://getclickmedia.com/whatsapp-api-integration" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How do I integrate WhatsApp API with my website?", acceptedAnswer: { "@type": "Answer", text: "Shopify/WooCommerce: GCM plugin — no code needed, 60 min setup. Custom platforms: REST API + webhooks. CRMs: native connectors available." } },
        { "@type": "Question", name: "Do I need a developer to integrate WhatsApp API?", acceptedAnswer: { "@type": "Answer", text: "Not for Shopify/WooCommerce or CRM integrations. Custom platform integrations require a developer for REST API and webhook implementation." } },
        { "@type": "Question", name: "Can WhatsApp API integrate with Salesforce?", acceptedAnswer: { "@type": "Answer", text: "Yes. GCM has a native Salesforce AppExchange app. Setup takes 2-4 hours." } },
        { "@type": "Question", name: "What is the rate limit for WhatsApp API?", acceptedAnswer: { "@type": "Answer", text: "Growth tier: 100 msg/sec. Enterprise: 1,000+ msg/sec. Dedicated transactional queue available for OTPs and payment alerts." } },
      ],
    },
  ],
};

const ARCHITECTURE = [
  { dir: "Outbound (your system → WhatsApp)", what: "Your application sends a message to a customer's WhatsApp", mech: "Your system calls Get Click Media's REST API with phone number, template, and variables", role: "Trigger the API call from your CRM, OMS, or automation platform" },
  { dir: "Inbound (WhatsApp → your system)", what: "A customer messages your business number", mech: "GCM posts the message payload to your webhook endpoint as a JSON event in real time", role: "Your server receives the webhook, processes it, and responds via REST API" },
];

const OPTIONS = [
  { icon: Puzzle, title: "No-code plugins", body: "Shopify, WooCommerce, Magento — plug-and-play plugins connect WhatsApp to your store in under 60 minutes. No developer required." },
  { icon: ArrowRightLeft, title: "Pre-built CRM connectors", body: "Native connectors for Salesforce, HubSpot, Zoho, Freshdesk, LeadSquared, Sell.do, and Razorpay — sync contacts and trigger messages on CRM events." },
  { icon: Code2, title: "REST API + webhooks", body: "For custom platforms, proprietary CRMs, and complex workflows — the most flexible option. Any system that can make an HTTP request can integrate." },
];

const CONNECTORS = [
  { platform: "Salesforce", type: "Native app — AppExchange", time: "2–4 hours", does: "Trigger WA on lead/opportunity events, log in Activity timeline, sync opt-in status" },
  { platform: "HubSpot", type: "Native integration", time: "1–2 hours", does: "WA in HubSpot workflows, contact WA status, conversation inbox" },
  { platform: "Zoho CRM", type: "Zoho Marketplace app", time: "1–2 hours", does: "WA triggers in workflows, interaction logging, lead qualification via chatbot" },
  { platform: "Freshdesk", type: "Freshdesk Marketplace", time: "1 hour", does: "WA as support channel, agent routing, CSAT via WA" },
  { platform: "LeadSquared", type: "API connector", time: "2–3 hours", does: "Lead follow-up automation, enquiry-to-conversation flow, lead scoring" },
  { platform: "Sell.do", type: "Native integration", time: "1–2 hours", does: "Real estate lead automation, site visit reminders, payment alerts" },
  { platform: "Razorpay", type: "Webhook + API", time: "2–4 hours", does: "Payment confirmation, payment link delivery, failed payment alerts" },
  { platform: "Custom CRM", type: "REST API + webhooks", time: "Varies", does: "Any event can trigger a WA message via API call. Replies post back via webhook." },
];

const STEPS = [
  { n: "01", title: "Get Your API Credentials", body: "After onboarding, receive your API key and Phone Number ID. Store as environment variables — never hardcode." },
  { n: "02", title: "Send Your First Test Message", body: "POST to our messages endpoint using your own number as the test recipient. Arrives in seconds via the sandbox." },
  { n: "03", title: "Set Up Your Webhook Endpoint", body: "Create an HTTPS endpoint that receives inbound messages and status updates. Must respond HTTP 200 within 3 seconds." },
  { n: "04", title: "Connect to Your Data Sources", body: "Integrate WhatsApp logic with your OMS, CRM, or appointment database for live, personalised data replies." },
  { n: "05", title: "Handle Opt-outs and Errors", body: "Honour STOP events immediately. Implement exponential backoff for 429s; never blindly retry 400 errors." },
  { n: "06", title: "Test in Staging, Then Go Live", body: "Full end-to-end testing in GCM's sandbox before moving to production." },
];

const SCENARIOS = [
  { n: "01", name: "Shopify — E-commerce", enables: "Order confirmation, shipping updates, cart recovery, review requests", difficulty: "Easy" },
  { n: "02", name: "Salesforce — Enterprise Sales", enables: "Lead follow-up, opportunity nurture, meeting confirmation, deal-closed welcome", difficulty: "Medium" },
  { n: "03", name: "HubSpot — Inbound Marketing", enables: "Form submission follow-up, lifecycle-stage campaigns, contact timeline logging", difficulty: "Easy" },
  { n: "04", name: "Razorpay — Payment Gateway", enables: "Payment links, confirmations, retry nudges, subscription reminders", difficulty: "Medium" },
  { n: "05", name: "Hospital HMS / Clinic Software", enables: "Appointment confirmation, reminders, lab reports, feedback forms", difficulty: "Medium" },
  { n: "06", name: "LMS / EdTech Platform", enables: "Enrollment welcome, module nudges, re-engagement, exam reminders", difficulty: "Medium" },
  { n: "07", name: "Chatbot + Custom Database", enables: "Live order/account/inventory lookups with agent escalation", difficulty: "Medium-High" },
  { n: "08", name: "Marketing Automation Platform", enables: "WhatsApp alongside email/SMS in the same journey (MoEngage, CleverTap)", difficulty: "Medium" },
  { n: "09", name: "Real Estate CRM (Sell.do, LeadSquared)", enables: "Lead follow-up, site visit confirmation, payment reminders", difficulty: "Easy" },
  { n: "10", name: "Custom ERP / Legacy System", enables: "Invoice, dispatch, and stock alerts via simple HTTP POST", difficulty: "Varies" },
];

const ENDPOINTS = [
  { method: "POST", path: "/v2/whatsapp/messages", desc: "Send a WhatsApp message (template or session)" },
  { method: "POST", path: "/v2/whatsapp/messages/batch", desc: "Send bulk messages — campaign broadcast" },
  { method: "GET", path: "/v2/whatsapp/messages/{id}", desc: "Get status + events for a specific message" },
  { method: "POST", path: "/v2/whatsapp/media", desc: "Upload media file for use in messages" },
  { method: "GET", path: "/v2/whatsapp/contacts/{phone}", desc: "Check if a number is a valid WhatsApp user" },
  { method: "POST", path: "/v2/whatsapp/webhooks", desc: "Register a webhook endpoint" },
  { method: "GET", path: "/v2/whatsapp/templates", desc: "List all approved message templates" },
  { method: "GET", path: "/v2/whatsapp/analytics", desc: "Get campaign delivery and engagement analytics" },
  { method: "POST", path: "/v2/whatsapp/conversations/reply", desc: "Reply within an open 24-hour conversation window" },
  { method: "GET", path: "/v2/whatsapp/usage", desc: "Get monthly usage summary and billing data" },
];

const BEST_PRACTICES = [
  { icon: ShieldCheck, title: "Security", items: ["Store API keys in environment variables, never in source code", "Restrict API key access by IP allowlist", "Verify webhook signatures with HMAC-SHA256", "Use HTTPS only — reject HTTP delivery"] },
  { icon: Gauge, title: "Reliability", items: ["Acknowledge webhooks with HTTP 200 within 3 seconds", "Exponential backoff for 429 and 5xx responses", "Use idempotency keys to prevent duplicate sends", "Log all API calls with message_id, retain 90 days"] },
  { icon: Zap, title: "Performance", items: ["Use batch endpoints for campaign broadcasts", "Pre-upload media and reuse media_id", "Dedicated transactional queue for OTPs and alerts", "Cache template IDs and media IDs"] },
];

const FAQS = [
  { q: "How do I integrate WhatsApp Business API with my website?", a: "For Shopify and WooCommerce, Get Click Media provides plugins that connect WhatsApp in under 60 minutes without coding. For custom websites, integration involves calling our REST API from your server-side code and setting up a webhook endpoint to receive inbound messages and status updates." },
  { q: "Do I need a developer to integrate WhatsApp API?", a: "For Shopify and WooCommerce, no. For CRM integrations (HubSpot, Zoho, Freshdesk, LeadSquared), most connections are made through the CRM's integration settings with minimal technical knowledge. For custom platforms, a developer is required for REST API calls and webhook handling." },
  { q: "Can I integrate WhatsApp API with Salesforce?", a: "Yes. Get Click Media has a native Salesforce integration on the AppExchange — it triggers WhatsApp from Salesforce workflows, logs interactions in the Activity timeline, and syncs opt-in status. Setup typically takes 2 to 4 hours.", link: { text: "See WhatsApp CRM integration", href: "/whatsapp-crm-integration" } },
  { q: "How do I handle inbound WhatsApp messages in my integration?", a: "Inbound messages are delivered to your webhook endpoint as JSON POST requests. Your server extracts the phone number and message content, processes it per your business logic, and responds via the REST API." },
  { q: "What happens if my webhook endpoint is down?", a: "Get Click Media retries event delivery with exponential backoff — up to 5 attempts over 24 hours. If the endpoint remains unavailable, undelivered events are queued and replayed once it recovers." },
  { q: "Can WhatsApp API send PDFs, images, and videos?", a: "Yes — JPEG, PNG, animated GIF, MP4 video, MP3/AAC audio, and PDF attachments. For large campaigns, upload to GCM's CDN and reuse the returned media_id." },
  { q: "How do I test my WhatsApp API integration before going live?", a: "Get Click Media provides a sandbox environment mirroring production behaviour without conversation charges. You can also whitelist your own number for real-device testing." },
  { q: "What is the rate limit for WhatsApp API messages?", a: "The Growth tier supports 100 messages per second; Enterprise supports 1,000+. A dedicated transactional queue guarantees sub-second delivery for OTPs and fraud alerts independent of campaign traffic." },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppApiIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/whatsapp-business-api" className="hover:text-[#2563eb] transition-colors">WhatsApp Business API</Link></li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">WhatsApp API Integration</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
            Technical Integration Guide
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp API Integration Guide<br />
            <span className="text-[#38bdf8]">Connect WhatsApp to Your Platform</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Pre-built connectors for 10+ platforms, a fully documented REST API, and webhooks — plus a
            technical team that supports your integration from day one.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              Start Integration <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Request Technical Demo
            </Link>
            <Link href="/whatsapp-api-documentation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Read API Docs
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER ────────────────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp API integration is the process of connecting{" "}
              <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">WhatsApp Business API</Link> to
              your existing business systems — CRM, e-commerce platform, ERP, or custom application — so that
              WhatsApp messages are automatically triggered, received, and processed without manual
              intervention. Get Click Media supports integration with Shopify, WooCommerce, Salesforce,
              HubSpot, Zoho, Freshdesk, LeadSquared, and any custom platform via REST API and webhooks.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="architecture">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Architecture Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              How WhatsApp API integration works
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[22%]">Direction</th>
                  <th className="text-left px-4 py-4 font-semibold">What Happens</th>
                  <th className="text-left px-4 py-4 font-semibold">Your Role</th>
                </tr>
              </thead>
              <tbody>
                {ARCHITECTURE.map((row, i) => (
                  <tr key={row.dir} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-900 font-bold">{row.dir}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.what}<br /><span className="text-xs text-gray-400">{row.mech}</span></td>
                    <td className="px-4 py-3.5 text-gray-700">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
            Get Click Media&apos;s platform handles authentication, message queuing, delivery tracking, webhook
            management, and failover. Your team writes the business logic — we handle the WhatsApp infrastructure.
          </p>
        </div>
      </section>

      {/* ── 3 INTEGRATION OPTIONS ────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="options">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              3 Integration Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Choose what fits your tech stack
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {OPTIONS.map(o => (
              <div key={o.title} className="rounded-2xl bg-white/5 border border-white/10 p-7 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                  <o.icon className="w-5 h-5 text-[#38bdf8]" />
                </span>
                <h3 className="text-base font-bold text-white">{o.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRM CONNECTORS TABLE ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="connectors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Pre-Built Connectors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Native connectors for 8 platforms
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Platform</th>
                  <th className="text-left px-4 py-4 font-semibold">Connector Type</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Setup Time</th>
                  <th className="text-left px-4 py-4 font-semibold">What It Does</th>
                </tr>
              </thead>
              <tbody>
                {CONNECTORS.map((row, i) => (
                  <tr key={row.platform} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-900 font-bold">{row.platform}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.type}</td>
                    <td className="px-4 py-3.5 text-[#2563eb] font-semibold whitespace-nowrap">{row.time}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.does}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── STEP-BY-STEP ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="steps">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Step-by-Step Technical Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              From API credentials to production
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map(s => (
              <div key={s.n} className="relative rounded-2xl border-2 border-blue-100 bg-white p-7 space-y-3">
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center font-(family-name:--font-syne)">
                  {s.n}
                </span>
                <h3 className="text-base font-bold text-gray-900 pt-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CODE SAMPLE ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="code">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Code Sample
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Send your first message — Node.js
            </h2>
          </div>
          <pre className="rounded-2xl bg-black/40 border border-white/10 p-6 overflow-x-auto text-xs sm:text-sm text-green-300 leading-relaxed">
{`const axios = require('axios');

const sendWhatsApp = async (to, templateName, variables) => {
  const res = await axios.post(
    'https://api.getclickmedia.com/v2/whatsapp/messages',
    {
      to,
      type: 'template',
      template: {
        name: templateName,
        language: { code: 'en' },
        components: [{ type: 'body', parameters: variables }]
      }
    },
    { headers: {
        'Authorization': \`Bearer \${process.env.GCM_API_KEY}\`,
        'X-Phone-Number-ID': process.env.GCM_PHONE_ID
      }
    }
  );
  return res.data; // { message_id: 'msg_xxxx', status: 'sent' }
};

// Trigger on order placed:
sendWhatsApp('+919876543210', 'order_confirmation_v2',
  [{ type: 'text', text: '#ORD-4782' }, { type: 'text', text: 'Nike Air Max' }]);`}
          </pre>
          <p className="text-center text-sm text-white/40 mt-6">
            SDKs available for Node.js, Python, PHP, and Java — full documentation at{" "}
            <Link href="/whatsapp-api-documentation" className="text-[#38bdf8] underline underline-offset-2">getclickmedia.com/whatsapp-api-documentation</Link>.
          </p>
        </div>
      </section>

      {/* ── INTEGRATION SCENARIOS ────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="scenarios">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              10 Integration Scenarios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Common WhatsApp API integration patterns in India
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Scenario</th>
                  <th className="text-left px-4 py-4 font-semibold">What It Enables</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {SCENARIOS.map((row, i) => (
                  <tr key={row.n} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-900 font-bold">{row.name}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.enables}</td>
                    <td className="px-4 py-3.5 text-gray-700 font-medium">{row.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── API QUICK REFERENCE ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="reference">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              API Quick Reference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Core WhatsApp API endpoints
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[14%]">Method</th>
                  <th className="text-left px-4 py-4 font-semibold">Endpoint</th>
                  <th className="text-left px-4 py-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {ENDPOINTS.map((row, i) => (
                  <tr key={row.path} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-mono text-xs font-bold text-[#2563eb]">{row.method}</td>
                    <td className="px-4 py-3.5 font-mono text-xs text-gray-700">{row.path}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Full API documentation with schemas, error codes, and rate limit details:{" "}
            <Link href="/whatsapp-api-documentation" className="text-[#2563eb] font-semibold underline underline-offset-2">
              WhatsApp API documentation
            </Link>
            . See also <Link href="/whatsapp-api-error-codes" className="text-[#2563eb] underline underline-offset-2">WhatsApp API error codes</Link>.
          </p>
        </div>
      </section>

      {/* ── BEST PRACTICES ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="best-practices">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Best Practices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Security, reliability, and performance
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {BEST_PRACTICES.map(bp => (
              <div key={bp.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-7 space-y-4">
                <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <bp.icon className="w-5 h-5 text-[#2563eb]" />
                </span>
                <h3 className="text-base font-bold text-gray-900">{bp.title}</h3>
                <ul className="space-y-2">
                  {bp.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                      <ArrowDownToLine className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
              { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
              { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp Webhooks", href: "/whatsapp-webhooks" },
              { label: "WhatsApp API Documentation", href: "/whatsapp-api-documentation" },
              { label: "WhatsApp API Error Codes", href: "/whatsapp-api-error-codes" },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              { label: "WhatsApp Marketing Services", href: "/whatsapp-marketing-services" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
              { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Questions about WhatsApp API Integration
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-gray-50 border border-gray-100 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                    {faq.link && (
                      <>
                        {" "}
                        <Link href={faq.link.href} className="text-[#2563eb] underline underline-offset-2">
                          {faq.link.text}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Integrate WhatsApp API with your platform
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Pre-built connectors for 10+ platforms · REST API + SDKs · Technical team support · Go live in 5 days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Start Integration <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Request Technical Demo
                </Link>
                <Link href="/whatsapp-api-documentation"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Read API Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
