import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Zap,
  Send,
  Eye,
  BarChart3,
  Keyboard,
  Repeat,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp CRM Integration — Connect WhatsApp to Salesforce, HubSpot, Zoho & More | Get Click Media",
  description:
    "Connect WhatsApp Business API to Salesforce, HubSpot, Zoho, Freshdesk, LeadSquared, Sell.do, or any custom CRM via REST API. Zero lead leakage, automated follow-up, and a complete 360° customer view. Setup in 1–4 hours.",
  keywords:
    "WhatsApp CRM Integration, crm whatsapp api, whatsapp api crm, whatsapp salesforce integration, whatsapp hubspot integration, whatsapp zoho crm, whatsapp freshdesk, whatsapp crm india, best crm with whatsapp integration",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-crm-integration" },
  openGraph: {
    title: "WhatsApp CRM Integration — Connect WhatsApp to Salesforce, HubSpot, Zoho & More | Get Click Media",
    description:
      "Native connectors for India's most widely used CRM platforms, plus REST API access for any custom system. Setup in 1–4 hours.",
    url: "https://getclickmedia.com/whatsapp-crm-integration",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to integrate WhatsApp with your CRM",
      totalTime: "PT4H",
      step: [
        { "@type": "HowToStep", position: 1, name: "Choose integration path", text: "Select pre-built connector (Salesforce, HubSpot, Zoho, Freshdesk) or REST API for custom CRM." },
        { "@type": "HowToStep", position: 2, name: "Confirm API credentials", text: "Ensure GCM API key and Phone Number ID are available from WhatsApp onboarding." },
        { "@type": "HowToStep", position: 3, name: "Install connector", text: "Install GCM app from CRM marketplace. Authenticate with API key." },
        { "@type": "HowToStep", position: 4, name: "Map data fields", text: "Map CRM contact fields to WhatsApp message variables (phone, name, trigger conditions)." },
        { "@type": "HowToStep", position: 5, name: "Define triggers", text: "Set CRM automation rules that fire WhatsApp messages on lead/deal/support events." },
        { "@type": "HowToStep", position: 6, name: "Configure inbound webhook", text: "Set webhook URL to receive WhatsApp replies and status events in CRM." },
        { "@type": "HowToStep", position: 7, name: "Test end-to-end", text: "Create test records, verify WhatsApp fires, confirm replies log to CRM. Go live." },
      ],
    },
    {
      "@type": "Service",
      name: "WhatsApp CRM Integration",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "WhatsApp CRM Integration Service",
      url: "https://getclickmedia.com/whatsapp-crm-integration",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp CRM Integration", item: "https://getclickmedia.com/whatsapp-crm-integration" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Can I integrate WhatsApp with my CRM without a developer?", acceptedAnswer: { "@type": "Answer", text: "Yes for Salesforce, HubSpot, Zoho, Freshdesk, LeadSquared, and Sell.do — GCM marketplace apps install without coding. Custom CRMs require developer work." } },
        { "@type": "Question", name: "Will WhatsApp conversation history appear in my CRM?", acceptedAnswer: { "@type": "Answer", text: "Yes. All WhatsApp interactions are logged in your CRM activity or timeline — outbound messages, inbound replies, button taps, delivery and read status." } },
        { "@type": "Question", name: "Is WhatsApp CRM integration real-time?", acceptedAnswer: { "@type": "Answer", text: "Yes. Outbound messages send in seconds of CRM trigger. Inbound replies appear in CRM within 1-3 seconds. Read receipts post within 3-5 seconds." } },
        { "@type": "Question", name: "Does WhatsApp CRM integration work with Salesforce Marketing Cloud?", acceptedAnswer: { "@type": "Answer", text: "Yes. GCM supports WhatsApp in Salesforce Marketing Cloud Journey Builder as a message step alongside email, SMS, and push." } },
      ],
    },
  ],
};

const BENEFITS = [
  { icon: Zap, title: "Zero Lead Leakage", before: "Sales team copies WhatsApp details to CRM manually, hours later. Data incomplete, follow-up delayed.", after: "Enquiry triggers automatic CRM lead creation in under 30 seconds — full message content and history captured." },
  { icon: Send, title: "Automated Follow-Up", before: "Lead marked Qualified. Sales rep manually sends WhatsApp — inconsistent and slow.", after: "CRM workflow detects the stage change and sends a personalised WhatsApp message in 60 seconds, every time." },
  { icon: Eye, title: "Complete 360° Customer View", before: "WhatsApp conversations sit in a separate inbox from calls, emails, and notes.", after: "Every WhatsApp thread syncs to the CRM record — full history alongside emails and calls." },
  { icon: BarChart3, title: "Accurate Lead Scoring", before: "Scoring uses only email opens and website visits — WhatsApp signals are invisible.", after: "Read receipts, button taps, and replies feed into CRM lead scoring for faster follow-up on engaged leads." },
  { icon: Keyboard, title: "Eliminated Manual Data Entry", before: "Agents manually copy WhatsApp data to CRM after every interaction — slow and error-prone.", after: "All WhatsApp interactions log automatically. Agents focus on selling, not data entry." },
  { icon: Repeat, title: "Consistent Cross-Channel Experience", before: "Sales rep has no context of yesterday's WhatsApp chat when the customer calls.", after: "Agent opens CRM before the call, sees the complete WhatsApp history, and never asks the customer to repeat themselves." },
];

const CRMS = [
  { name: "Salesforce", tag: "Most powerful for enterprise", time: "2–4 hours", best: "Enterprise sales teams, financial services, large B2B", does: "Flow Builder follow-ups, Activity Timeline logging, opt-in sync, Einstein scoring" },
  { name: "HubSpot", tag: "Best for inbound marketing teams", time: "1–2 hours", best: "B2B SaaS, marketing agencies, EdTech, D2C", does: "Workflow message steps, contact timeline, deal-stage triggers, chatbot data enrichment" },
  { name: "Zoho CRM", tag: "Ideal for SME and mid-market", time: "1–2 hours", best: "SME, retail, manufacturing, mid-market", does: "Zoho Workflow follow-ups, SalesIQ escalation, Campaigns multi-channel, Desk ticket linking" },
  { name: "Freshdesk / Freshsales", tag: "Support + sales in one platform", time: "1 hour", best: "E-commerce support, SaaS success, healthcare", does: "WhatsApp as a support channel, auto-ticketing, agent routing, CSAT via WhatsApp" },
  { name: "LeadSquared", tag: "India's leading EdTech & real estate CRM", time: "2–3 hours", best: "Coaching institutes, universities, EdTech, real estate", does: "Admission response automation, lead scoring, counsellor assignment, fee reminders" },
  { name: "Sell.do", tag: "Purpose-built for Indian real estate", time: "1–2 hours", best: "Real estate developers, builders, brokers", does: "Property carousel follow-up, site visit confirmation, payment reminders, NRI outreach" },
  { name: "Custom CRM", tag: "Any system that can make HTTP requests", time: "Varies", best: "Any business with a custom-built or proprietary CRM", does: "POST to GCM REST API, receive events at your webhook, SDKs for Node.js, Python, PHP, Java" },
];

const SETUP_STEPS = [
  { n: "01", title: "Choose Your Integration Path", body: "Identify your CRM platform. Use a pre-built connector for Salesforce, HubSpot, Zoho, Freshdesk, LeadSquared, Sell.do — or the REST API for custom CRMs." },
  { n: "02", title: "Confirm API Credentials Are Ready", body: "Ensure WhatsApp onboarding is complete and your GCM API key and Phone Number ID are available." },
  { n: "03", title: "Install or Configure the Connector", body: "Install the GCM app from your CRM's marketplace and authenticate with your API key. No developer required." },
  { n: "04", title: "Map Data Fields", body: "Configure which CRM fields correspond to WhatsApp message variables — e.g. MobilePhone → recipient number." },
  { n: "05", title: "Define Trigger Conditions", body: "Set the CRM automation rules that fire WhatsApp messages — lead qualification, payment reminders, and more." },
  { n: "06", title: "Configure Inbound Webhook", body: "Post inbound WhatsApp events (message, button tap, delivery status) back to your CRM in real time." },
  { n: "07", title: "Test End-to-End", body: "Create a test lead, verify the WhatsApp fires, reply from your phone, confirm the CRM record updates." },
];

const INDUSTRY_FLOWS = [
  { industry: "B2B Sales (any)", trigger: "Lead status → Qualified", result: "Response rate 4x vs email follow-up alone" },
  { industry: "Real Estate", trigger: "New enquiry → Sell.do lead created", result: "Sub-minute response — 3x site visit rate" },
  { industry: "EdTech / Coaching", trigger: "LeadSquared: Free trial → enrolled", result: "Early dropout rate -35%" },
  { industry: "Banking / NBFC", trigger: "Salesforce: Pre-approval score → eligible", result: "Loan conversion 4x vs branch-only outreach" },
  { industry: "E-commerce", trigger: "Custom CRM: Order status → Shipped", result: "Support tickets -60%, CSAT +15 pts" },
  { industry: "Healthcare", trigger: "Custom HMS: Appointment → Confirmed", result: "No-show rate -38%" },
  { industry: "Insurance", trigger: "CRM: Policy renewal date − 30 days", result: "Renewal rate +31%" },
  { industry: "Logistics", trigger: "Custom WMS: Delivery status → Out for delivery", result: "Failed delivery rate -34%" },
];

const FAQS = [
  { q: "Can I integrate WhatsApp with my CRM without a developer?", a: "Yes for Salesforce, HubSpot, Zoho, Freshdesk, LeadSquared, and Sell.do — Get Click Media's marketplace apps install through your CRM's app store and configure through a settings interface. Custom CRMs need developer involvement for REST API and webhook implementation." },
  { q: "Will WhatsApp conversation history appear in my CRM?", a: "Yes. All WhatsApp interactions — outbound messages, inbound replies, button taps, delivery and read status — are logged in your CRM's activity or interaction history for the relevant record." },
  { q: "What happens in the CRM when a customer replies on WhatsApp?", a: "The platform posts the reply event to your webhook (or directly via the native connector). The CRM creates an Activity or Task record with the reply text and timestamp, and any configured workflow automation triggers." },
  { q: "Does WhatsApp CRM integration work with Salesforce Marketing Cloud?", a: "Yes. Get Click Media supports WhatsApp as a channel in SFMC Journey Builder — alongside email, SMS, and push, with engagement updating Data Extensions and triggering journey branching." },
  { q: "Can I see which WhatsApp campaigns converted to CRM deals?", a: "Yes. With UTM parameters and CRM tracking tokens on campaign buttons, you can attribute deals and opportunities to specific WhatsApp campaigns in HubSpot or Salesforce." },
  { q: "What if a customer is already in my CRM under a different number?", a: "Get Click Media uses phone number as the primary identifier. If a number doesn't match an existing record, a new contact or lead is created, following your CRM's standard deduplication rules." },
  { q: "Is the WhatsApp CRM integration real-time?", a: "Yes. Outbound messages send within seconds of the CRM trigger. Inbound messages appear in your CRM within 1 to 3 seconds. Read receipts post within 3 to 5 seconds." },
  { q: "How does WhatsApp CRM integration handle opt-outs?", a: "When a customer opts out, the platform immediately stops future sends, posts an opt-out event to your CRM webhook, and updates the WhatsApp consent field on the contact record." },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppCrmIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/whatsapp-business-api" className="hover:text-[#2563eb] transition-colors">WhatsApp Business API</Link></li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">WhatsApp CRM Integration</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            B2B High-Value Integration
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp CRM Integration<br />
            <span className="text-[#38bdf8]">Connect Salesforce, HubSpot, Zoho &amp; More</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Every WhatsApp conversation, lead, and engagement synced automatically with your CRM. Native
            connectors for 6 platforms, plus REST API for any custom system.
            <strong className="text-white"> Setup takes 1 to 4 hours.</strong>
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              Connect My CRM <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Request Technical Demo
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Talk to Integration Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER ────────────────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp CRM integration connects{" "}
              <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">WhatsApp Business API</Link> to
              your customer relationship management (CRM) system — so that WhatsApp conversations, lead data,
              and engagement history automatically sync with your CRM records. Get Click Media supports
              WhatsApp integration with Salesforce, HubSpot, Zoho CRM, Freshdesk, LeadSquared, Sell.do, and
              any custom CRM via REST API. Setup takes 1 to 4 hours for supported platforms.
            </p>
          </div>
          <p className="text-gray-500 text-base leading-relaxed mt-8">
            Your CRM is the single source of truth for your customer data. Your WhatsApp Business API is where
            customers actually communicate with you. When the two systems aren&apos;t connected, leads get
            followed up manually, sales teams waste time copying information, and the 360-degree customer view
            your CRM was supposed to provide is incomplete.
          </p>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why It Matters — 6 Business Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              What changes when WhatsApp and CRM are actually connected
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(b => (
              <div key={b.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-[#2563eb]" />
                </span>
                <h3 className="text-base font-bold text-gray-900">{b.title}</h3>
                <p className="text-xs text-red-500"><strong>Before:</strong> {b.before}</p>
                <p className="text-xs text-green-600"><strong>After:</strong> {b.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRM PLATFORMS TABLE ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="platforms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              CRM Platforms Supported
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              7 CRM platforms used by Indian businesses
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-sm">
            <table className="w-full text-sm min-w-[680px]">
              <thead>
                <tr className="bg-white/5 text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Platform</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Setup Time</th>
                  <th className="text-left px-4 py-4 font-semibold">Best For</th>
                  <th className="text-left px-4 py-4 font-semibold">What It Does</th>
                </tr>
              </thead>
              <tbody>
                {CRMS.map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}>
                    <td className="px-5 py-3.5 text-white font-bold">{row.name}<br /><span className="text-xs text-white/40 font-normal">{row.tag}</span></td>
                    <td className="px-4 py-3.5 text-[#38bdf8] font-semibold whitespace-nowrap">{row.time}</td>
                    <td className="px-4 py-3.5 text-white/60">{row.best}</td>
                    <td className="px-4 py-3.5 text-white/50 text-xs">{row.does}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SETUP STEPS ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="setup">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Setup — Step by Step
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              How to set up WhatsApp CRM integration
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SETUP_STEPS.map(s => (
              <div key={s.n} className="relative rounded-2xl border-2 border-blue-100 bg-blue-50/40 p-7 space-y-3">
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center font-(family-name:--font-syne)">
                  {s.n}
                </span>
                <h3 className="text-base font-bold text-gray-900 pt-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            Get Click Media&apos;s integration team supports your CRM connection end-to-end — from connector
            installation to field mapping to testing. You don&apos;t manage this alone.
          </p>
        </div>
      </section>

      {/* ── INDUSTRY FLOWS ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="industry-flows">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Integration Flows by Industry
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              The most valuable WhatsApp + CRM automations
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Industry</th>
                  <th className="text-left px-4 py-4 font-semibold">CRM Trigger</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Business Result</th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRY_FLOWS.map((row, i) => (
                  <tr key={row.industry} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-900 font-bold">{row.industry}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.trigger}</td>
                    <td className="px-4 py-3.5 text-green-600 font-semibold">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
              { label: "WhatsApp API Integration", href: "/whatsapp-api-integration" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              { label: "WhatsApp Marketing Services", href: "/whatsapp-marketing-services" },
              { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "WhatsApp API for Logistics", href: "/whatsapp-api-logistics" },
              { label: "WhatsApp API for Insurance", href: "/whatsapp-api-insurance" },
              { label: "WhatsApp Webhooks", href: "/whatsapp-webhooks" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Questions about WhatsApp CRM Integration
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-gray-100 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
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
                Connect WhatsApp to Your CRM
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Salesforce · HubSpot · Zoho · Freshdesk · LeadSquared · Custom CRM · Setup in 1–4 hours.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Connect My CRM <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Request Technical Demo
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Talk to Integration Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
