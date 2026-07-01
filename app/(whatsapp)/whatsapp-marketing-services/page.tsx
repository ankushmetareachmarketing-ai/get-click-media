import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Target,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Repeat,
  Percent,
  Tag,
  Bell,
  Gift,
  CalendarClock,
  Users,
  FileCheck,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Marketing Services in India — Campaigns, Automation & ROI | Get Click Media",
  description:
    "End-to-end WhatsApp marketing services in India — campaign strategy, template creation, broadcast management, chatbot automation, and performance reporting. Official Meta BSP based in Noida. Go live in 5 days.",
  keywords:
    "WhatsApp Marketing Services India, whatsapp marketing api, whatsapp marketing company india, whatsapp marketing agency india, bulk whatsapp marketing india, whatsapp marketing platform india, whatsapp campaign management india",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-marketing-services" },
  openGraph: {
    title: "WhatsApp Marketing Services in India — Campaigns, Automation & ROI | Get Click Media",
    description:
      "Campaign strategy, template management, broadcast execution, chatbot automation, and analytics — the complete WhatsApp marketing service from an official Meta BSP.",
    url: "https://getclickmedia.com/whatsapp-marketing-services",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "WhatsApp Marketing Services India",
      provider: { "@type": "Organization", "@id": "https://getclickmedia.com/#org", name: "Get Click Media" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "WhatsApp Marketing Platform",
      url: "https://getclickmedia.com/whatsapp-marketing-services",
      description:
        "End-to-end WhatsApp marketing services in India — campaign strategy, template management, broadcast execution, chatbot automation, and analytics. Official Meta BSP.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp Marketing Services", item: "https://getclickmedia.com/whatsapp-marketing-services" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is WhatsApp marketing?", acceptedAnswer: { "@type": "Answer", text: "WhatsApp marketing uses WhatsApp Business API to send promotional campaigns, transactional notifications, and automated journeys to opted-in customers. India average: 98% open rate, 20-28% CTR." } },
        { "@type": "Question", name: "Is WhatsApp marketing legal in India?", acceptedAnswer: { "@type": "Answer", text: "Yes, when you have explicit opt-in consent, use Meta-approved templates, honour opt-outs, and comply with DPDP 2023." } },
        { "@type": "Question", name: "Can I send WhatsApp marketing to DND numbers?", acceptedAnswer: { "@type": "Answer", text: "Yes. WhatsApp API is not subject to TRAI DND restrictions. Opted-in customers can be messaged regardless of DND status." } },
        { "@type": "Question", name: "What is the difference between WhatsApp broadcast and WhatsApp marketing API?", acceptedAnswer: { "@type": "Answer", text: "WhatsApp broadcast is limited to 256 contacts and requires mutual contacts. WhatsApp API has no contact limit, full automation, personalisation, and analytics." } },
        { "@type": "Question", name: "How many customers can I message at once?", acceptedAnswer: { "@type": "Answer", text: "Starting at 1,000/day (Tier 1), scaling to 10,000 (Tier 2), 1,00,000 (Tier 3), and unlimited based on quality and volume history." } },
      ],
    },
  ],
};

const WHY_DIFFERENT = [
  { title: "It lands where your customers already are", body: "Indian consumers check WhatsApp 25+ times daily. Unlike email or a competitive social feed, messages land in a personal, distraction-free inbox." },
  { title: "It enables two-way conversations", body: "Customers can reply, ask questions, tap buttons, and complete transactions in the same thread — driving 5x–8x higher conversion than SMS." },
  { title: "Verified sender identity builds instant trust", body: "Your brand name, logo, and Green Tick appear on every message — WhatsApp campaigns see 60–70% lower opt-out rates than SMS." },
];

const MARKETING_TYPES = [
  { type: "Promotional / Campaign Marketing", what: "Business-initiated messages to opted-in customers — offers, launches, events. Uses Marketing-category templates.", best: "Flash sales, festive campaigns, launches, re-engagement, loyalty rewards" },
  { type: "Transactional / Utility Marketing", what: "Automated messages triggered by customer actions. Uses Utility-category templates.", best: "Order flows, appointments, payments, delivery updates, OTPs" },
  { type: "Conversational Marketing", what: "Two-way engagement, chatbot-handled, escalating to agents for complex cases.", best: "Lead qualification, support, product discovery, feedback collection" },
];

const CAMPAIGNS = [
  { icon: Tag, name: "Flash Sale & Seasonal Campaign", when: "Sale launch day, festive season", kpi: "Open rate 96% · CTR 22–30% · 5x–8x revenue vs SMS" },
  { icon: Repeat, name: "Abandoned Cart Recovery", when: "1 hour + 24 hours after abandonment", kpi: "18–26% recovery rate vs 4–6% for email" },
  { icon: Sparkles, name: "New Product / Collection Launch", when: "Early access, 2–4 hrs before public launch", kpi: "78% open rate · 3x first-hour conversion" },
  { icon: Percent, name: "Price Drop & Wishlist Alert", when: "15%+ price drop on wishlisted item", kpi: "41% CTR — highest of any e-commerce campaign" },
  { icon: Gift, name: "Loyalty & Rewards Update", when: "Post-purchase, tier upgrade, points expiry", kpi: "31% engagement vs 8% via email" },
  { icon: Bell, name: "Win-Back / Re-engagement", when: "Customer inactive 60–90 days", kpi: "12% win-back rate vs 2.5% email, 1.8% SMS" },
  { icon: CalendarClock, name: "Event & Webinar Registration", when: "14 days, 3 days, and morning-of reminders", kpi: "+30% attendance vs email · -40% no-show" },
  { icon: Users, name: "Referral Programme", when: "3–7 days post-delivery, at peak NPS", kpi: "5x referral awareness vs email" },
];

const LIFECYCLE = [
  { stage: "Awareness", problem: "High paid ad costs for new customers", solution: "Click-to-WhatsApp ads on Meta — direct into conversation", result: "Cost per lead 40–60% lower" },
  { stage: "Consideration", problem: "Leads go cold after first enquiry", solution: "Automated follow-up: product info + comparison + offer", result: "3x lead-to-sale vs email" },
  { stage: "Purchase", problem: "70% of Indian e-commerce carts abandoned", solution: "Cart recovery with product image + urgency + discount", result: "18–26% recovery vs 4–6% email" },
  { stage: "Onboarding", problem: "New customers confused, high early churn", solution: "Welcome sequence: tips, how-to, exclusive offer", result: "Early churn -35%, NPS +12 pts" },
  { stage: "Retention", problem: "Customers stop buying after 1–2 purchases", solution: "Replenishment, new arrivals, loyalty updates", result: "Repeat purchase +24%" },
  { stage: "Advocacy", problem: "Satisfied customers not referring/reviewing", solution: "Review request + referral invite at peak NPS", result: "Review volume 5x, referral 4.7x" },
  { stage: "Win-back", problem: "Lapsed customers unresponsive to email/SMS", solution: "Personalised re-engagement carousel + offer", result: "12% win-back vs 2.5% email" },
];

const SERVICES = [
  { title: "Campaign Strategy & Audience Segmentation", body: "Define your WhatsApp marketing calendar, segment your database by behaviour, and plan the right campaign type per segment." },
  { title: "Template Creation & Meta Approval Management", body: "We draft templates in the correct Meta format, review for policy compliance, and manage submission and approval.", href: "/whatsapp-template-messages" },
  { title: "Campaign Execution — Broadcast & Scheduling", body: "List upload, variable personalisation, send-time optimisation, and real-time delivery monitoring.", href: "/whatsapp-broadcast" },
  { title: "WhatsApp Chatbot Automation", body: "Chatbot flows that qualify leads, answer FAQs, book appointments, and escalate complex queries.", href: "/whatsapp-chatbot" },
  { title: "Performance Analytics & Reporting", body: "Delivery, read rate, CTR per button, conversion, revenue attributed, and cost per conversion — tracked end-to-end." },
  { title: "Compliance & Opt-in Management", body: "Opt-in database management, automated opt-outs, and audit-ready DPDP 2023 records." },
];

const COMPARISON = [
  { metric: "Average open rate India", wa: "98%", email: "20–25%", sms: "30–35%", ads: "Impressions-based" },
  { metric: "Average CTR", wa: "20–28%", email: "3–5%", sms: "1.5–2%", ads: "1–3%" },
  { metric: "Cost per 1,000 messages", wa: "₹790–910", email: "₹50–200", sms: "₹120–180", ads: "₹3,000–15,000 CPM" },
  { metric: "Two-way conversation", wa: "Yes — native", email: "No", sms: "No", ads: "No" },
  { metric: "DND restriction", wa: "No", email: "No", sms: "Yes (promo)", ads: "No" },
  { metric: "Best use case", wa: "Conversational, opted-in base", email: "Newsletter, long-form", sms: "Universal reach, OTP", ads: "New audience acquisition" },
];

const FAQS = [
  { q: "What is WhatsApp marketing and how does it work in India?", a: "WhatsApp marketing is the use of WhatsApp Business API to send promotional campaigns, transactional notifications, and automated customer journeys to opted-in customers. It works by sending Meta-approved templates via the API — delivering rich media messages with verified sender identity. India consistently sees 98% open rates and 20–28% click-through rates." },
  { q: "Is WhatsApp marketing legal in India?", a: "Yes, when done correctly: you need explicit opt-in consent, all promotional messages must use Meta-approved Marketing-category templates, opt-outs must be honoured immediately, and you must comply with India's DPDP Act 2023 for data handling." },
  { q: "How many customers can I message on WhatsApp at once?", a: "There's no absolute cap, but throughput is governed by your messaging tier — starting at 1,000/day (Tier 1), scaling to 10,000 (Tier 2), 1,00,000 (Tier 3), and unlimited based on quality and volume history." },
  { q: "Can I send WhatsApp marketing messages to customers on the DND list?", a: "Yes. WhatsApp Business API is not classified as commercial SMS under TRAI's regulations, so it's not subject to DND restrictions — as long as customers have given explicit opt-in consent." },
  { q: "What is the difference between WhatsApp broadcast and WhatsApp marketing?", a: "WhatsApp broadcast via the consumer app is limited to 256 mutual contacts with no automation or analytics. WhatsApp marketing via the Business API has no contact limit and supports full automation, personalisation, and analytics.", link: { text: "See WhatsApp Broadcast API", href: "/whatsapp-broadcast" } },
  { q: "How do I collect WhatsApp opt-ins for marketing?", a: "Through website opt-in forms, Click-to-WhatsApp ads, WhatsApp Flows, SMS opt-in campaigns, offline point-of-sale consent, and in-app prompts. Get Click Media's onboarding includes an opt-in strategy review." },
  { q: "Can WhatsApp marketing messages include images and buttons?", a: "Yes — JPEG/PNG images, animated GIFs, video thumbnails, up to 3 interactive buttons, quick-reply chips, and product carousels of 2–10 cards." },
  { q: "How does Get Click Media measure WhatsApp marketing performance?", a: "Delivery rate, read rate, CTR per button, conversion rate, revenue per campaign, cost per conversion, and opt-out rate — with monthly reports benchmarked against industry data." },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppMarketingServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/whatsapp-business-api" className="hover:text-[#2563eb] transition-colors">WhatsApp Business API</Link></li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">WhatsApp Marketing Services</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Official Meta BSP · Full-Service Marketing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Marketing Services in India<br />
            <span className="text-[#38bdf8]">Campaigns, Automation &amp; ROI</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Campaign strategy, message templates, broadcast management, chatbot automation, and performance
            reporting — the complete WhatsApp marketing service for Indian businesses.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              Start WhatsApp Marketing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Request Demo
            </Link>
            <Link href="/whatsapp-api-pricing-india"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER ────────────────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp marketing services involve using{" "}
              <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">WhatsApp Business API</Link> to
              run promotional campaigns, transactional communications, and automated customer journeys at
              scale. Get Click Media provides end-to-end WhatsApp marketing services in India — including
              campaign strategy, message template creation, broadcast management, chatbot automation, and
              performance reporting — for businesses across banking, e-commerce, education, healthcare, and
              real estate.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY WHATSAPP MARKETING IS DIFFERENT ──────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="what-is-whatsapp-marketing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What Is WhatsApp Marketing?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              India&apos;s highest-ROI marketing channel
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {WHY_DIFFERENT.map(w => (
              <div key={w.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-2">
                <h3 className="text-base font-bold text-gray-900">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 TYPES ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="types">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              3 Types of WhatsApp Marketing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Which does your business need?
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[24%]">Type</th>
                  <th className="text-left px-4 py-4 font-semibold">What It Is</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Best For</th>
                </tr>
              </thead>
              <tbody>
                {MARKETING_TYPES.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-900 font-bold">{row.type}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.what}</td>
                    <td className="px-4 py-3.5 text-gray-800 font-medium">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
            Most mature programmes run all three simultaneously — promotional for acquisition, transactional
            for retention, and conversational for support and upsell.
          </p>
        </div>
      </section>

      {/* ── 8 CAMPAIGN TYPES ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="campaigns">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              High-ROI Campaign Types
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              8 campaign types built for the Indian market
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAMPAIGNS.map(c => (
              <div key={c.name} className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-[#38bdf8]" />
                </span>
                <h3 className="text-sm font-bold text-white">{c.name}</h3>
                <p className="text-xs text-white/40">{c.when}</p>
                <p className="text-xs text-green-400 font-semibold leading-relaxed">{c.kpi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIFECYCLE ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="lifecycle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Full Customer Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              From first touch to loyal advocate
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Stage</th>
                  <th className="text-left px-4 py-4 font-semibold">Common Problem</th>
                  <th className="text-left px-4 py-4 font-semibold">WhatsApp Solution</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Result</th>
                </tr>
              </thead>
              <tbody>
                {LIFECYCLE.map((row, i) => (
                  <tr key={row.stage} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-900 font-bold">{row.stage}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.problem}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.solution}</td>
                    <td className="px-4 py-3.5 text-green-600 font-semibold">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What You Get
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              End-to-end management, not just API access
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(s => {
              const Card = (
                <div className="h-full rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all p-6 space-y-2">
                  <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                </div>
              );
              return s.href ? <Link key={s.title} href={s.href}>{Card}</Link> : <div key={s.title}>{Card}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="comparison">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Channel Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp vs <Link href="/whatsapp-vs-email-marketing" className="hover:underline underline-offset-4">Email</Link> vs{" "}
              <Link href="/whatsapp-vs-sms" className="hover:underline underline-offset-4">SMS</Link> vs Meta Ads
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">WhatsApp</th>
                  <th className="text-left px-4 py-4 font-semibold">Email</th>
                  <th className="text-left px-4 py-4 font-semibold">Bulk SMS</th>
                  <th className="text-left px-4 py-4 font-semibold">Meta / Google Ads</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">{row.metric}</td>
                    <td className="px-4 py-3.5 text-gray-800 font-semibold">{row.wa}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.email}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.sms}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.ads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
            Use WhatsApp marketing for your opted-in customer base and warm lead nurturing; use Meta or Google
            Ads for new audience acquisition, with{" "}
            <Link href="/whatsapp-click-to-whatsapp-ads" className="text-[#2563eb] underline underline-offset-2">Click-to-WhatsApp ads</Link> as
            the bridge.
          </p>
        </div>
      </section>

      {/* ── COMPLIANCE ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="compliance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" /> Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              What you must know about WhatsApp marketing compliance
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7 space-y-3">
              <h3 className="text-base font-bold text-white">Meta's WhatsApp Business Messaging Policy</h3>
              <ul className="space-y-2.5">
                {[
                  "Opt-in mandatory — no cold contacts or purchased lists",
                  "Marketing templates require Meta approval before use",
                  "Quality rating monitors opt-out and report rates",
                  "Prohibited categories — gambling, alcohol, adult content, misleading claims",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <FileCheck className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7 space-y-3">
              <h3 className="text-base font-bold text-white">India's DPDP Act 2023</h3>
              <ul className="space-y-2.5">
                {[
                  "Documented consent required before marketing messages",
                  "Every message must include a clear opt-out mechanism",
                  "Personal data cannot be retained beyond its collection purpose",
                  "No cross-border transfer without appropriate safeguards",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <FileCheck className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-white/40 mt-8 max-w-2xl mx-auto">
            Get Click Media reviews all marketing templates for policy compliance before submission, with
            automated opt-out management and DPDP-aligned data handling built into the platform.
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
              { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp Broadcast", href: "/whatsapp-broadcast" },
              { label: "WhatsApp Message Templates", href: "/whatsapp-template-messages" },
              { label: "Click to WhatsApp Ads", href: "/whatsapp-click-to-whatsapp-ads" },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
              { label: "WhatsApp API Delhi", href: "/whatsapp-api-delhi" },
              { label: "WhatsApp API Noida", href: "/whatsapp-api-noida" },
              { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
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
              Questions about WhatsApp Marketing in India
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
                Launch Your WhatsApp Marketing Campaign Today
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Official Meta BSP · No-code campaign builder · Industry templates ready · Go live in 5 days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Start WhatsApp Marketing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Request Demo
                </Link>
                <Link href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  See Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
