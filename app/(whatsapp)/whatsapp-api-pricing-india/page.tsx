import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Info,
  AlertTriangle,
  CheckCheck,
  Calculator,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API Pricing in India — Complete Breakdown (2026) | Get Click Media",
  description:
    "WhatsApp Business API pricing in India, explained. Marketing ₹0.79–0.91, utility/authentication ₹0.14–0.17 per conversation, 1,000 free service conversations/month. Full cost calculator, platform fee tiers, and WhatsApp vs SMS vs RCS comparison.",
  keywords:
    "WhatsApp API pricing India, whatsapp api pricing, whatsapp business api pricing india, whatsapp api cost, cheapest whatsapp api, whatsapp cloud api pricing, whatsapp api free, whatsapp business api free, whatsapp business api price",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-pricing-india" },
  openGraph: {
    title: "WhatsApp Business API Pricing in India — Complete Breakdown (2026)",
    description:
      "Conversation-based pricing explained: marketing, utility, authentication, and free service conversations. Platform fee tiers, cost calculator, and ROI vs SMS.",
    url: "https://getclickmedia.com/whatsapp-api-pricing-india",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "WhatsApp Business API Pricing India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      offers: [
        { "@type": "Offer", name: "Starter Plan", description: "Up to 10,000 conversations/month" },
        { "@type": "Offer", name: "Growth Plan", description: "10,000 to 2,00,000 conversations/month" },
        { "@type": "Offer", name: "Enterprise Plan", description: "2,00,000+ conversations/month, custom pricing" },
      ],
      url: "https://getclickmedia.com/whatsapp-api-pricing-india",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "Pricing India", item: "https://getclickmedia.com/whatsapp-api-pricing-india" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does WhatsApp Business API cost in India?",
          acceptedAnswer: { "@type": "Answer", text: "Marketing conversations cost ₹0.79-0.91/window. Utility and authentication cost ₹0.14-0.17/window. Service conversations are free for the first 1,000/month. Platform fees apply." },
        },
        {
          "@type": "Question",
          name: "What is a WhatsApp conversation?",
          acceptedAnswer: { "@type": "Answer", text: "A 24-hour messaging session between business and customer. Unlimited messages within the window for one flat fee. Categories: marketing, utility, authentication, service." },
        },
        {
          "@type": "Question",
          name: "Are there free WhatsApp API conversations?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. 1,000 service conversations free per month. Click-to-WhatsApp ad conversations free for 72 hours. Messages within open windows are free." },
        },
        {
          "@type": "Question",
          name: "Does Get Click Media charge a setup fee?",
          acceptedAnswer: { "@type": "Answer", text: "No setup fee for standard Starter and Growth plans. Enterprise custom infrastructure may have a one-time setup fee disclosed in contract." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API cheaper than SMS?",
          acceptedAnswer: { "@type": "Answer", text: "Per message, SMS is cheaper. But WhatsApp API has 20-28% CTR vs 1.5-2% for SMS, making cost per conversion 60-80% lower for campaign use cases." },
        },
      ],
    },
  ],
};

const CATEGORIES = [
  { symbol: "★", name: "Marketing Conversation", who: "Business", rate: "₹0.79–0.91 per conversation", quota: "None — fully paid", example: "Flash sale campaign, abandoned cart recovery, product launch, re-engagement, festive offer", color: "border-orange-200 bg-orange-50/60" },
  { symbol: "→", name: "Utility Conversation", who: "Business", rate: "₹0.14–0.17 per conversation", quota: "None — fully paid", example: "Order confirmation, shipping update, appointment reminder, payment due alert, account alert", color: "border-teal-200 bg-teal-50/60" },
  { symbol: "✓", name: "Authentication Conversation", who: "Business", rate: "₹0.14–0.17 per conversation", quota: "None — fully paid", example: "Login OTP, password reset OTP, 2FA verification code, transaction authentication", color: "border-blue-200 bg-blue-50/60" },
  { symbol: "◈", name: "Service Conversation", who: "Customer", rate: "Free (first 1,000/month)", quota: "1,000 free/month, then ₹0.14", example: "Order status query, complaint, product enquiry, support request", color: "border-green-200 bg-green-50/60" },
];

const CATEGORY_TABLE = [
  { cat: "Marketing", who: "Business", rate: "₹0.79–0.91", quota: "None", best: "Campaigns, offers, re-engagement" },
  { cat: "Utility", who: "Business", rate: "₹0.14–0.17", quota: "None", best: "Transactional alerts, order updates, reminders" },
  { cat: "Authentication", who: "Business", rate: "₹0.14–0.17", quota: "None", best: "OTPs, 2FA, verification codes" },
  { cat: "Service", who: "Customer", rate: "Free → ₹0.14 (>1,000)", quota: "1,000/month free", best: "Customer support, queries, complaints" },
];

const PLANS = [
  { name: "Starter", tag: "Up to 10,000 conversations/month", includes: ["Dashboard access", "Template management", "Onboarding support", "Email support", "Basic analytics"], featured: false },
  { name: "Growth", tag: "10,000–2,00,000 conversations/month", includes: ["Everything in Starter", "Priority delivery", "Advanced analytics", "CRM integration support", "24×7 phone + WhatsApp support", "Dedicated account manager", "A/B testing"], featured: true },
  { name: "Enterprise", tag: "2,00,000+ conversations/month", includes: ["Everything in Growth", "Custom SLA", "Dedicated infrastructure", "White-label options", "On-site support (NCR)", "Compliance documentation (RBI, IRDAI, SEBI)", "Custom integrations"], featured: false },
];

const CALCULATOR_STEPS = [
  { n: "1", what: "Marketing conversations / month", formula: "No. of customers messaged × campaign frequency", example: "50,000 × 2 = 1,00,000" },
  { n: "2", what: "Utility conversations / month", formula: "No. of transactional messages", example: "80,000 orders × 2 = 1,60,000" },
  { n: "3", what: "Authentication conversations / month", formula: "No. of OTPs sent", example: "30,000 OTPs = 30,000" },
  { n: "4", what: "Service conversations / month", formula: "Customer queries − 1,000 free", example: "20,000 − 1,000 = 19,000 paid" },
  { n: "5", what: "Meta charges", formula: "Sum of all categories × rates", example: "≈ ₹1,16,160/month" },
  { n: "6", what: "Add GCM platform fee", formula: "Based on total volume — contact sales", example: "Varies by tier" },
  { n: "7", what: "Total monthly budget", formula: "Meta charges + GCM platform fee", example: "Total monthly investment" },
];

const SMS_VS_WA = [
  { metric: "Messages / conversations sent", sms: "1,00,000", wa: "1,00,000" },
  { metric: "Cost per message / conversation", sms: "₹0.12", wa: "₹0.85 (marketing)" },
  { metric: "Total send cost", sms: "₹12,000", wa: "₹85,000" },
  { metric: "Average open rate", sms: "30–35%", wa: "98%" },
  { metric: "Average CTR", sms: "1.5–2%", wa: "20–28%" },
  { metric: "Total clicks generated", sms: "1,500–2,000", wa: "20,000–28,000" },
  { metric: "Cost per click", sms: "₹6–8", wa: "₹3.04–4.25" },
  { metric: "Conversion rate", sms: "3–5%", wa: "8–12%" },
  { metric: "Total orders generated", sms: "45–100", wa: "1,600–3,360" },
  { metric: "Total revenue generated", sms: "₹63,000–1,40,000", wa: "₹22,40,000–47,04,000" },
  { metric: "Cost per order", sms: "₹120–267", wa: "₹25–53" },
  { metric: "Revenue per ₹1 spent", sms: "₹5.25–11.67", wa: "₹26.4–55.3" },
];

const CHANNEL_COMPARISON = [
  { dim: "Pricing model", wa: "Per conversation (24hr)", rcs: "Per message (A2P)", sms: "Per message" },
  { dim: "Marketing rate India", wa: "₹0.79–0.91 / conv", rcs: "₹0.15–0.25 / msg", sms: "₹0.08–0.14 / msg" },
  { dim: "Utility / transactional", wa: "₹0.14–0.17 / conv", rcs: "₹0.10–0.20 / msg", sms: "₹0.12–0.18 / msg" },
  { dim: "Free quota", wa: "1,000 service convos/mo", rcs: "None", sms: "None" },
  { dim: "Rich media", wa: "Yes", rcs: "Yes", sms: "No" },
  { dim: "Avg open rate India", wa: "98%", rcs: "70–80%", sms: "30–35%" },
  { dim: "Avg CTR (campaigns)", wa: "20–28%", rcs: "15–25%", sms: "1.5–2%" },
  { dim: "Works without internet", wa: "No", rcs: "SMS fallback", sms: "Yes" },
  { dim: "Best for", wa: "Conversational, opted-in base", rcs: "Broad Android campaigns", sms: "Universal reach, OTP" },
];

const HIDDEN_COSTS = [
  { title: "Template category misclassification", body: "If Meta reclassifies your template from Utility to Marketing, cost per conversation jumps from ~₹0.15 to ~₹0.85 — a 5x increase. Get Click Media's template review checks for this before submission." },
  { title: "Multiple conversations, same customer", body: "Triggering a marketing and a utility template to the same customer in a short window can open two separate billed conversations. Consolidating messaging flows reduces this at scale." },
  { title: "Failed message retries", body: "Some providers charge for failed delivery attempts. Get Click Media does not — you only pay for conversations that are successfully initiated." },
  { title: "Chatbot conversation window mismanagement", body: "Poorly configured chatbots can open new billed conversations after the 24-hour window closes. Get Click Media's chatbot platform handles session state automatically." },
  { title: "BSP markup on Meta rates", body: "Some providers add a markup on Meta's published rates. Get Click Media passes through Meta's rates at cost — ask any provider to show Meta's rates alongside their invoice." },
];

const INDUSTRY_BENCHMARKS = [
  { industry: "E-commerce (50K orders/mo)", mix: "Utility 60% + marketing 30% + auth 10%", spend: "₹80,000–1,50,000/mo", driver: "Order updates + campaign sends" },
  { industry: "Banking / Fintech (1L customers)", mix: "Auth 50% + utility 30% + marketing 20%", spend: "₹60,000–1,20,000/mo", driver: "OTP + EMI reminders + loan campaigns" },
  { industry: "EdTech (20K active learners)", mix: "Utility 50% + marketing 30% + service 20%", spend: "₹25,000–60,000/mo", driver: "Fee reminders + re-engagement + support" },
  { industry: "Healthcare (5K appointments/mo)", mix: "Utility 70% + service 20% + marketing 10%", spend: "₹15,000–35,000/mo", driver: "Appointment reminders + reports" },
  { industry: "Real estate (500 leads/mo)", mix: "Marketing 60% + utility 30% + service 10%", spend: "₹30,000–70,000/mo", driver: "Lead nurturing + site visit bookings" },
  { industry: "Logistics (30K shipments/mo)", mix: "Utility 90% + service 10%", spend: "₹40,000–80,000/mo", driver: "Shipment + delivery notifications" },
  { industry: "D2C brand (10K orders/mo)", mix: "Utility 50% + marketing 40% + auth 10%", spend: "₹20,000–50,000/mo", driver: "Order flows + campaigns + OTPs" },
];

const FAQS = [
  {
    q: "How much does WhatsApp Business API cost in India?",
    a: "Pricing is based on conversation categories. Marketing conversations cost approximately ₹0.79–0.91 per 24-hour window. Utility and authentication conversations cost ₹0.14–0.17 per window. Service conversations (customer-initiated) are free for the first 1,000 per month. Get Click Media charges an additional platform fee based on your total monthly conversation volume.",
  },
  {
    q: "Is WhatsApp Business API cheaper than SMS in India?",
    a: "Per message, SMS is cheaper — ₹0.08–0.14 per message vs ₹0.14–0.91 per WhatsApp conversation. However, WhatsApp API generates significantly higher click-through rates (20–28% vs 1.5–2% for SMS). The cost per order or cost per lead from WhatsApp campaigns is typically 60–80% lower than SMS campaigns.",
    link: { text: "Compare WhatsApp vs SMS in detail", href: "/whatsapp-vs-sms" },
  },
  {
    q: "What is a WhatsApp conversation and how is it charged?",
    a: "A WhatsApp conversation is a 24-hour messaging session between your business and a customer. It opens when either party sends the first message. Within the window, you can exchange unlimited messages for a single flat fee, depending on the category: marketing (₹0.79–0.91), utility (₹0.14–0.17), authentication (₹0.14–0.17), or service (free for first 1,000/month).",
  },
  {
    q: "Are there any free WhatsApp API conversations?",
    a: "Yes. Every account receives 1,000 free service conversations per month — conversations where the customer messages you first. Conversations starting from a Click-to-WhatsApp ad are free for the first 72 hours. Messages within an already-open conversation window are also free.",
    link: { text: "Read: Is WhatsApp Business API free?", href: "/is-whatsapp-business-api-free" },
  },
  {
    q: "How is WhatsApp API pricing different from SMS pricing?",
    a: "SMS is priced per individual message. WhatsApp API is priced per 24-hour conversation window, regardless of how many messages are exchanged within it — making it more cost-effective for high-frequency interactions like chatbot conversations.",
  },
  {
    q: "Does Get Click Media charge a setup fee?",
    a: "No. There's no setup fee for standard onboarding on Starter and Growth plans. Enterprise plans with custom infrastructure may have a one-time setup fee, clearly stated in the contract. There are no hidden fees.",
  },
  {
    q: "What happens if WhatsApp changes its pricing?",
    a: "Meta periodically updates WhatsApp Business API pricing. Get Click Media notifies all clients with at least 30 days advance notice and updates all pricing documentation. We do not lock in old rates and absorb losses, nor do we pass through undisclosed markups.",
  },
  {
    q: "How do I reduce my WhatsApp API costs?",
    a: "Four strategies: maximise service conversation usage via Click-to-WhatsApp buttons, consolidate multiple messages into single conversation windows, keep utility templates free of promotional language so they aren't reclassified as marketing, and optimise your opt-in list quality. Our account managers provide ongoing cost optimisation advice as part of standard account management.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppPricingIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── BREADCRUMB ─────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/whatsapp-business-api" className="hover:text-[#2563eb] transition-colors">WhatsApp Business API</Link></li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">Pricing India</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Calculator className="w-3.5 h-3.5 text-[#38bdf8]" />
            Pricing Guide — Updated 2026
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Business API Pricing in India<br />
            <span className="text-[#38bdf8]">A Complete Breakdown (2026)</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Marketing ₹0.79–0.91 · Utility &amp; Authentication ₹0.14–0.17 · Service free for the first
            1,000/month. Here&apos;s exactly how conversation-based pricing works, what Get Click Media charges
            on top, and a real ROI calculation against SMS.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Request Free Demo
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Talk to Sales
            </Link>
          </div>
          <p className="text-white/40 text-xs">Pricing customised by volume, industry &amp; conversation mix · Reply within 24 hours</p>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Business API pricing in India is based on conversation categories. Meta charges per
              24-hour conversation window, not per individual message. Marketing conversations cost
              approximately ₹0.79–0.91 per conversation, utility and authentication conversations cost
              ₹0.14–0.17 per conversation, and service conversations (customer-initiated) are free for the
              first 1,000 per month. Get Click Media charges an additional platform fee based on volume
              tier. There are no setup fees.
            </p>
          </div>
          <p className="text-gray-500 text-base leading-relaxed mt-8">
            Most businesses ask &ldquo;how much does it cost per message?&rdquo; — but that&apos;s not how{" "}
            <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">WhatsApp Business API</Link> charges.
            WhatsApp charges per conversation, not per message. One conversation is a 24-hour window in which
            you can exchange unlimited messages with a customer for a single flat fee.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mt-4">
            This guide gives you a complete, honest breakdown of WhatsApp API pricing in India in 2026 — Meta&apos;s
            conversation rates, Get Click Media&apos;s platform fees, what&apos;s free, what isn&apos;t, hidden costs to
            watch for, and a real ROI calculation showing why WhatsApp API consistently delivers a lower cost
            per conversion than SMS or paid ads.
          </p>
        </div>
      </section>

      {/* ── CONVERSATION MODEL ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="conversation-model">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              The Conversation Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              How WhatsApp Business API pricing actually works
            </h2>
          </div>
          <div className="space-y-4 text-gray-500 text-base leading-relaxed">
            <p>
              A conversation is a 24-hour messaging session between your business and a single customer. It
              opens when either party sends the first message. Within that window, you can send unlimited
              messages — and you&apos;re charged only once for the entire window, regardless of how many
              messages are exchanged.
            </p>
            <p>
              <strong className="text-gray-800">Example:</strong> You send a payment reminder at 10 AM. The
              customer replies at 2 PM. You respond at 2:05 PM. They confirm at 2:07 PM. All of that is one
              conversation — one charge. If the customer messages you again the next day, a new conversation opens.
            </p>
            <p>
              The 24-hour window starts fresh each time a new conversation is initiated — by either party. If a
              customer messages you at 9 PM Monday, a service window opens until 9 PM Tuesday. If you send them
              a marketing message at 10 PM Monday, a separate marketing window opens.
            </p>
          </div>
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50/60 px-6 py-5">
            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Key insight:</strong> Two simultaneous conversations with the same customer are billed
              separately if they&apos;re in different categories. A service conversation and a marketing
              conversation are two separate charges — even on the same day.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4 CONVERSATION CATEGORIES ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Conversation Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              The 4 WhatsApp conversation categories — India rates (2026)
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {CATEGORIES.map(c => (
              <div key={c.name} className={`rounded-2xl border ${c.color} p-6 space-y-2`}>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  {c.symbol} {c.name} <span className="text-gray-400 font-normal">· Initiated by: {c.who}</span>
                </p>
                <p className="text-xl font-extrabold text-gray-900">{c.rate}</p>
                <p className="text-xs text-gray-600"><strong>Free quota:</strong> {c.quota}</p>
                <p className="text-xs text-gray-500 leading-relaxed"><strong>Example:</strong> {c.example}</p>
              </div>
            ))}
          </div>

          <div className="mb-10 flex items-start gap-4 rounded-2xl border border-red-400/30 bg-red-500/10 px-6 py-5 max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-100 leading-relaxed">
              <strong>Important change — July 2025 update:</strong> Meta updated conversation pricing in June
              2025. Utility conversations are now significantly cheaper than before (previously ~₹0.50–0.60,
              now ~₹0.14–0.17). Marketing conversations remain the most expensive category. Always verify
              current rates with Get Click Media at the time of signing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-white/5 text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Category</th>
                  <th className="text-left px-4 py-4 font-semibold">Who Initiates</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">India Rate (2026)</th>
                  <th className="text-left px-4 py-4 font-semibold">Free Quota</th>
                  <th className="text-left px-4 py-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORY_TABLE.map((row, i) => (
                  <tr key={row.cat} className={i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}>
                    <td className="px-5 py-3.5 text-white font-bold">{row.cat}</td>
                    <td className="px-4 py-3.5 text-white/60">{row.who}</td>
                    <td className="px-4 py-3.5 text-[#38bdf8] font-semibold whitespace-nowrap">{row.rate}</td>
                    <td className="px-4 py-3.5 text-white/60">{row.quota}</td>
                    <td className="px-4 py-3.5 text-white/60">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHAT'S FREE VS NOT ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="whats-free">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What&apos;s Actually Free?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Free WhatsApp API conversations — the honest breakdown
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-green-50/60 border border-green-100 p-7 space-y-4">
              <h3 className="text-base font-bold text-green-700">What is free</h3>
              <ul className="space-y-3">
                {[
                  "First 1,000 service conversations per month — reset on the first day of each calendar month",
                  "Click-to-WhatsApp ad entry conversations — free for 72 hours, not the standard 24",
                  "Messages within an already-open conversation window — unlimited, one flat fee",
                  "WhatsApp Business API account creation — no fee from Meta",
                  "Template message creation and submission — free; Get Click Media manages this in all plans",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-7 space-y-4">
              <h3 className="text-base font-bold text-gray-700">What is not free</h3>
              <ul className="space-y-3">
                {[
                  "Marketing conversations — no free quota, fully paid",
                  "Utility conversations — no free quota, fully paid",
                  "Authentication conversations — no free quota, fully paid",
                  "Service conversations beyond 1,000/month — ₹0.14 per additional conversation",
                  "Get Click Media platform fee — covers API access, dashboard, support, and infrastructure",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center shrink-0 text-gray-500 text-xs">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-2xl bg-blue-50/60 border border-blue-100 px-6 py-5 max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">&ldquo;Is WhatsApp API free?&rdquo; — the honest answer:</strong> WhatsApp
              Business API has a free tier for service conversations (first 1,000/month), but is not free for
              outbound marketing and transactional messaging. For businesses primarily using WhatsApp for
              customer support who receive under 1,000 enquiries per month, the Meta conversation cost is zero.
              Read more: <Link href="/is-whatsapp-business-api-free" className="text-[#2563eb] font-semibold underline underline-offset-2">Is WhatsApp Business API free?</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── PLATFORM FEE TIERS ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Get Click Media Platform Fees
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Transparent plan tiers — no markup on Meta&apos;s rates
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(p => (
              <div key={p.name} className={`rounded-2xl p-7 space-y-4 border-2 ${p.featured ? "border-[#2563eb] bg-white shadow-lg scale-[1.02]" : "border-gray-100 bg-white"}`}>
                {p.featured && <span className="inline-block px-3 py-1 rounded-full bg-[#2563eb] text-white text-xs font-bold">Most Popular</span>}
                <h3 className="text-xl font-extrabold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.tag}</p>
                <p className="text-xs text-gray-400">Meta rate: passed through at cost · GCM platform fee: contact sales</p>
                <ul className="space-y-2 pt-2">
                  {p.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCheck className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8 max-w-2xl mx-auto">
            No hidden charges: Get Click Media does not add a markup to Meta&apos;s conversation rates. No setup
            fees for standard onboarding. No lock-in contracts for Starter and Growth plans.
          </p>
        </div>
      </section>

      {/* ── COST CALCULATOR ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="calculator">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Monthly Cost Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Estimate your monthly WhatsApp API spend
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Use this framework before speaking to our team — worked example for a mid-size e-commerce business.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[6%]">Step</th>
                  <th className="text-left px-4 py-4 font-semibold">What to Calculate</th>
                  <th className="text-left px-4 py-4 font-semibold">Formula</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Example</th>
                </tr>
              </thead>
              <tbody>
                {CALCULATOR_STEPS.map((row, i) => (
                  <tr key={row.n} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-400 font-bold">{row.n}</td>
                    <td className="px-4 py-3.5 text-gray-800 font-medium">{row.what}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.formula}</td>
                    <td className="px-4 py-3.5 text-[#2563eb] font-semibold">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 rounded-2xl bg-[#0f172a] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">Get an exact estimate</h3>
              <p className="text-white/50 text-sm max-w-lg">
                Share your expected message volumes with our team and we&apos;ll provide an exact cost estimate
                within 24 hours, including Meta&apos;s current India rates and our platform fee for your volume tier.
              </p>
            </div>
            <Link href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold hover:scale-105 transition-transform shadow-md">
              Get Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP VS SMS ROI ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="whatsapp-vs-sms">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              True Cost Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              <Link href="/whatsapp-vs-sms" className="hover:underline underline-offset-4">WhatsApp API vs Bulk SMS</Link> — cost per conversion
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              A worked example: a mid-size Indian e-commerce brand sending a flash sale campaign to 1,00,000 customers.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold">Bulk SMS</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">WhatsApp API</th>
                </tr>
              </thead>
              <tbody>
                {SMS_VS_WA.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">{row.metric}</td>
                    <td className="px-4 py-3.5 text-center text-gray-500">{row.sms}</td>
                    <td className="px-4 py-3.5 text-center text-green-600 font-semibold">{row.wa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-2xl bg-green-50/60 border border-green-100 px-6 py-5 text-center">
            <p className="text-sm text-gray-700 leading-relaxed">
              WhatsApp API costs ₹73,000 more to send than SMS in this example. But it generates ₹21,00,000 to
              ₹45,64,000 more in revenue. The cost per order is 80% lower via WhatsApp — for any campaign with a
              clear conversion goal, the higher per-conversation cost is overwhelmingly justified.
            </p>
          </div>
        </div>
      </section>

      {/* ── WA VS RCS VS SMS ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="channel-comparison">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Full Channel Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API vs <Link href="/whatsapp-vs-rcs" className="hover:underline underline-offset-4">RCS</Link> vs SMS — cost, India 2026
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Dimension</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">WhatsApp API</th>
                  <th className="text-left px-4 py-4 font-semibold">RCS Messaging</th>
                  <th className="text-left px-4 py-4 font-semibold">Bulk SMS</th>
                </tr>
              </thead>
              <tbody>
                {CHANNEL_COMPARISON.map((row, i) => (
                  <tr key={row.dim} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">{row.dim}</td>
                    <td className="px-4 py-3.5 text-gray-800 font-medium">{row.wa}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.rcs}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.sms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
            The strategic recommendation for most Indian businesses: use WhatsApp API for conversational
            engagement with your opted-in base, <Link href="/rcs-messaging" className="text-[#2563eb] underline underline-offset-2">RCS</Link> for
            broad outbound rich campaigns to Android users, and{" "}
            <Link href="/bulk-sms-service-provider-india" className="text-[#2563eb] underline underline-offset-2">bulk SMS</Link> as a universal fallback.
            Read more on <Link href="/blog/rcs-messaging-cost-india" className="text-[#2563eb] underline underline-offset-2">RCS messaging cost in India</Link>.
            Get Click Media supports all three from a single platform.
          </p>
        </div>
      </section>

      {/* ── HIDDEN COSTS ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="hidden-costs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Hidden Costs to Watch For
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              5 charges that catch Indian businesses by surprise
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {HIDDEN_COSTS.map((c, i) => (
              <div key={c.title} className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-2">
                <p className="text-xs font-bold text-[#38bdf8]">0{i + 1}</p>
                <h3 className="text-base font-bold text-white">{c.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY BENCHMARKS ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="benchmarks">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Cost Benchmarks by Industry
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              What businesses like yours typically spend
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Industry</th>
                  <th className="text-left px-4 py-4 font-semibold">Dominant Mix</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Typical Spend</th>
                  <th className="text-left px-4 py-4 font-semibold">Primary Cost Driver</th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRY_BENCHMARKS.map((row, i) => (
                  <tr key={row.industry} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-800 font-medium">{row.industry}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.mix}</td>
                    <td className="px-4 py-3.5 text-[#2563eb] font-semibold whitespace-nowrap">{row.spend}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.driver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            These are estimates — actual costs depend on your conversation mix, message frequency, and customer
            base size. <Link href="/contact" className="text-[#2563eb] underline underline-offset-2">Get a free cost estimate</Link> based on your specific parameters.
          </p>
          <p className="text-center text-xs text-gray-400 mt-6">
            See related: <Link href="/whatsapp-api-ecommerce" className="text-[#2563eb] underline underline-offset-2">WhatsApp API for e-commerce</Link>{" "}
            · <Link href="/whatsapp-api-banking" className="text-[#2563eb] underline underline-offset-2">WhatsApp API for banking</Link>
          </p>
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
              { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
              { label: "Is WhatsApp Business API Free?", href: "/is-whatsapp-business-api-free" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp Broadcast", href: "/whatsapp-broadcast" },
              { label: "WhatsApp API vs SMS", href: "/whatsapp-vs-sms" },
              { label: "WhatsApp vs RCS", href: "/whatsapp-vs-rcs" },
              { label: "RCS Messaging Service", href: "/rcs-messaging" },
              { label: "RCS Messaging Cost India", href: "/blog/rcs-messaging-cost-india" },
              { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
              { label: "Click-to-WhatsApp Ads", href: "/whatsapp-click-to-whatsapp-ads" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
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
              Questions about WhatsApp API pricing in India
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
                Get a Custom WhatsApp API Pricing Quote
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Pricing is customised by volume, industry, and conversation mix. Reply within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Get Custom Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Request Free Demo
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Talk to Sales
                </Link>
              </div>
              <p className="text-white/30 text-xs">
                Rates shown are indicative based on Meta&apos;s published India pricing as of July 2026. Meta
                periodically updates conversation rates — contact Get Click Media for current rates and a
                custom quote for your volume.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
