import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Users,
  LayoutTemplate,
  CalendarClock,
  BarChart3,
  Sparkles,
  UserX,
  FlaskConical,
  ShoppingCart,
  Landmark,
  HeartPulse,
  Building2,
  GraduationCap,
  Store,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Broadcast API — Send Bulk Messages to Thousands Instantly | Get Click Media",
  description:
    "WhatsApp Broadcast API lets you send approved template messages to unlimited opted-in customers at once — beyond the 256-contact limit of the free app. Segmented targeting, analytics, and template management from an official Meta BSP.",
  keywords:
    "WhatsApp Broadcast API, whatsapp bulk messaging, whatsapp broadcast message, whatsapp marketing campaigns India, whatsapp broadcast list",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-broadcast" },
  openGraph: {
    title: "WhatsApp Broadcast API — Send Bulk Messages to Thousands Instantly | Get Click Media",
    description:
      "Segmented audience targeting, approved templates, and delivery analytics for marketing, utility, and authentication campaigns at scale.",
    url: "https://getclickmedia.com/whatsapp-broadcast",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "WhatsApp Broadcast API",
      provider: { "@type": "Organization", "@id": "https://getclickmedia.com/#org", name: "Get Click Media" },
      areaServed: "India",
      serviceType: "WhatsApp Bulk Messaging",
      url: "https://getclickmedia.com/whatsapp-broadcast",
      description:
        "Bulk WhatsApp messaging via WhatsApp Business API, supporting segmented audience targeting, approved message templates, and delivery analytics for marketing, utility, and authentication campaigns.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com/" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp Broadcast API", item: "https://getclickmedia.com/whatsapp-broadcast" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is WhatsApp Broadcast API?",
          acceptedAnswer: { "@type": "Answer", text: "A WhatsApp Business API feature that lets businesses send one approved template message to a large list of opted-in customers in a single campaign." },
        },
        {
          "@type": "Question",
          name: "How many people can I send a WhatsApp broadcast to?",
          acceptedAnswer: { "@type": "Answer", text: "Unlike the free Business App's 256-contact limit, Broadcast API has no practical recipient cap, depending on your messaging tier." },
        },
      ],
    },
  ],
};

const COMPARISON = [
  { aspect: "Max recipients per broadcast", app: "256 contacts", api: "Unlimited (tier-dependent)" },
  { aspect: "Recipient must have your number saved", app: "Yes", api: "No" },
  { aspect: "Message format", app: "Free text", api: "Meta-approved template only" },
  { aspect: "Automation / CRM integration", app: "No", api: "Yes" },
  { aspect: "Analytics", app: "Basic", api: "Delivery, read rate, click tracking" },
  { aspect: "Best suited for", app: "Very small businesses", api: "Businesses sending at scale" },
];

const FEATURES = [
  { icon: Users, title: "Segmented Audience Targeting", desc: "Send to specific customer groups based on behavior or CRM data." },
  { icon: LayoutTemplate, title: "Template Message Library", desc: "Pre-approved marketing, utility, and authentication templates.", href: "/whatsapp-template-messages" },
  { icon: CalendarClock, title: "Scheduled Campaigns", desc: "Plan and queue broadcasts in advance." },
  { icon: BarChart3, title: "Delivery & Read-Rate Analytics", desc: "Track sent, delivered, read, and replied metrics per campaign." },
  { icon: Sparkles, title: "Personalization Variables", desc: "Insert customer name, order ID, or other dynamic fields." },
  { icon: UserX, title: "Opt-Out Handling", desc: "Automatic suppression of unsubscribed contacts." },
  { icon: FlaskConical, title: "A/B Template Testing", desc: "Compare performance across message variants." },
];

const PRICING_CATEGORIES = [
  { name: "Marketing", desc: "Promotional offers, campaigns, product announcements", tier: "Highest cost tier" },
  { name: "Utility", desc: "Order updates, delivery notifications, account alerts", tier: "Mid cost tier" },
  { name: "Authentication", desc: "OTPs and login verification codes", tier: "Lowest cost tier" },
];

const HOW_TO = [
  { n: "01", title: "Build or select a customer list", body: "Import contacts with valid opt-in consent." },
  { n: "02", title: "Create or choose an approved template", body: "Follow Meta-approved message template guidelines.", href: "/whatsapp-template-messages" },
  { n: "03", title: "Segment your audience", body: "Optional — by location, purchase history, or engagement." },
  { n: "04", title: "Schedule or send immediately", body: "Via Get Click Media's broadcast dashboard." },
  { n: "05", title: "Track performance", body: "Delivery rate, read rate, replies, and conversions in real time." },
];

const USE_CASES = [
  { icon: ShoppingCart, name: "E-commerce", body: "Flash sale announcements, cart recovery, restock alerts" },
  { icon: Landmark, name: "BFSI", body: "Payment due reminders, EMI notifications, policy renewal alerts" },
  { icon: HeartPulse, name: "Healthcare", body: "Appointment reminders, health camp announcements" },
  { icon: Building2, name: "Real Estate", body: "New project launches, site visit invitations" },
  { icon: GraduationCap, name: "Education", body: "Admission open alerts, fee due reminders" },
  { icon: Store, name: "Retail", body: "Seasonal offers, loyalty program updates" },
];

const FAQS = [
  { q: "What is WhatsApp Broadcast API?", a: "A WhatsApp Business API feature that lets businesses send one approved template message to a large list of opted-in customers in a single campaign." },
  { q: "How many people can I send a WhatsApp broadcast to?", a: "Unlike the free Business App's 256-contact limit, Broadcast API has no practical recipient cap — it depends on your messaging tier." },
  { q: "Do recipients need to save my business number to receive a broadcast?", a: "No — unlike the free app, Broadcast API doesn't require recipients to have your number saved." },
  { q: "Can I send any message as a broadcast?", a: "No — broadcasts must use a Meta-approved template. Free-form text broadcasts aren't permitted.", link: { text: "See template message guidelines", href: "/whatsapp-template-messages" } },
  { q: "How is WhatsApp broadcast messaging priced?", a: "Per conversation window opened, based on template category — marketing, utility, or authentication.", link: { text: "See full WhatsApp API pricing", href: "/blog/whatsapp-api-pricing-india" } },
  { q: "Can I track how many people read my broadcast?", a: "Yes — Get Click Media's dashboard provides delivery, read, and reply analytics per campaign." },
  { q: "Is WhatsApp broadcast messaging compliant with Indian regulations?", a: "Yes, when sent to properly opted-in customers using approved templates; Get Click Media ensures campaigns follow Meta's commerce and messaging policies." },
  { q: "Can I personalize broadcast messages for each customer?", a: "Yes — templates support dynamic variables like customer name, order ID, and other personalization fields." },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppBroadcastPage() {
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
          <li className="text-[#2563eb] font-medium">WhatsApp Broadcast API</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                No 256-Contact Limit
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Broadcast API<br />
                <span className="text-[#38bdf8]">Send Bulk Messages to Thousands Instantly</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Send a single approved template message to thousands of customers simultaneously — with segmented
                targeting, delivery analytics, and no recipient-saved-your-number requirement.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
                  Start a Broadcast Campaign <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  Book a Free Demo
                </Link>
                <Link href="/blog/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/40 border border-white/10">
                <video
                  src="/images/video/whatsapp-manage.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Broadcast API lets businesses send a single template message to thousands of customers
              simultaneously through the{" "}
              <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">WhatsApp Business API</Link> —
              unlike the free WhatsApp Business App, which limits broadcasts to 256 contacts who must have your
              number saved. Broadcast messages require Meta-approved templates and are billed per conversation
              based on category (marketing, utility, or authentication). Get Click Media, an official Meta
              Business Solution Provider in Noida, provides WhatsApp Broadcast API with segmented audience
              targeting, delivery and read-rate analytics, and template management — helping Indian businesses
              run compliant, high-reach WhatsApp campaigns at scale.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS BROADCAST API ────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="what-is-broadcast">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What Is WhatsApp Broadcast API?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Bulk messaging, without the free app&apos;s limits
            </h2>
          </div>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            WhatsApp Broadcast API is the bulk-messaging capability of WhatsApp Business API. It allows a
            business to send one approved template message to a large list of opted-in customers in a single
            campaign — order updates, promotional offers, payment reminders, or event notifications — without
            the recipient limit or opt-in restrictions of the free Business App.
          </p>
          <ul className="space-y-3">
            {[
              "Sent to customers who have opted in (via DLT-style consent or existing relationship)",
              "Must use a Meta-approved message template — free-form text broadcasts aren't allowed",
              "Billed per 24-hour conversation window opened, based on template category",
              "No practical limit on recipient list size (subject to your messaging tier and quality rating)",
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COMPARISON ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="comparison">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Broadcast vs Business App
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp Broadcast API vs Business App broadcast
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[30%]">Aspect</th>
                  <th className="text-left px-4 py-4 font-semibold">WhatsApp Business App</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">WhatsApp Broadcast API</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">{row.aspect}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.app}</td>
                    <td className="px-4 py-3.5 text-gray-800 font-medium">{row.api}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Broadcast API Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Everything you need to run broadcast campaigns
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => {
              const Card = (
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-6 space-y-3">
                  <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-[#38bdf8]" />
                  </span>
                  <h3 className="text-base font-bold text-white">{f.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
                </div>
              );
              return f.href ? <Link key={f.title} href={f.href}>{Card}</Link> : <div key={f.title}>{Card}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING LOGIC ────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="pricing">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Pricing Logic
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Broadcast message categories &amp; pricing
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Meta bills broadcast messages by conversation category, opened per 24-hour window.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {PRICING_CATEGORIES.map(c => (
              <div key={c.name} className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-2">
                <h3 className="text-base font-bold text-gray-900">{c.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                <p className="text-xs font-semibold text-[#2563eb]">{c.tier}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            See the <Link href="/blog/whatsapp-api-pricing-india" className="text-[#2563eb] font-semibold underline underline-offset-2">full WhatsApp Business API pricing breakdown</Link>.
          </p>
        </div>
      </section>

      {/* ── HOW TO SEND A BROADCAST ──────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="how-to">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              How to Send a Broadcast
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              5 steps to launch your WhatsApp broadcast campaign
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HOW_TO.map(s => {
              const Card = (
                <div className="relative h-full rounded-2xl border-2 border-blue-100 bg-white p-7 space-y-3">
                  <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center font-(family-name:--font-syne)">
                    {s.n}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 pt-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                </div>
              );
              return s.href ? <Link key={s.n} href={s.href}>{Card}</Link> : <div key={s.n}>{Card}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp Broadcast across every industry
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map(u => (
              <div key={u.name} className="rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <u.icon className="w-5 h-5 text-[#2563eb]" />
                </span>
                <h3 className="text-base font-bold text-gray-900">{u.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GET CLICK MEDIA ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="why-gcm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 text-center lg:text-left space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
                Why Choose Get Click Media
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                We protect your number&apos;s quality rating
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Get Click Media is an official Meta Business Solution Provider based in Noida, running WhatsApp
                Broadcast campaigns for 10,000+ Indian businesses. We manage template approval, audience
                segmentation, delivery optimization, and quality rating monitoring — so your broadcasts reach
                customers reliably without risking your number&apos;s messaging tier or quality score.
              </p>
            </div>
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Broadcast campaign message on a phone"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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
              { label: "WhatsApp Message Templates", href: "/whatsapp-template-messages" },
              { label: "WhatsApp API Pricing India", href: "/blog/whatsapp-api-pricing-india" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp Green Tick Verification", href: "/blog/whatsapp-green-tick-verification" },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
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
              Questions about WhatsApp Broadcast API
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
                Ready to reach thousands of customers at once?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media sets up your broadcast dashboard, templates, and audience segments — start
                sending compliant, high-reach campaigns today.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Start a Broadcast Campaign <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Book a Free Demo
                </Link>
                <Link href="/blog/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
