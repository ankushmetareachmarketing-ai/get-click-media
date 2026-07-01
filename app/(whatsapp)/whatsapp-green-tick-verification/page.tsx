import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  BadgeCheck,
  FileCheck,
  Globe2,
  Smartphone,
  Newspaper,
  ShieldAlert,
  ThumbsUp,
  Lock,
  TrendingUp,
  Award,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Green Tick Verification — How to Get the Official Badge | Get Click Media",
  description:
    "WhatsApp Green Tick is Meta's official verified badge for WhatsApp Business API accounts. Learn eligibility, the step-by-step process, common rejection reasons, and how Get Click Media manages verification end-to-end in 5–7 business days.",
  keywords:
    "WhatsApp Green Tick Verification, whatsapp verified badge, whatsapp official business account, whatsapp green tick india, meta business verification whatsapp",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-green-tick-verification" },
  openGraph: {
    title: "WhatsApp Green Tick Verification — How to Get the Official Badge | Get Click Media",
    description:
      "Meta's official verified badge for WhatsApp Business API. Eligibility, process, common rejection reasons, and end-to-end management by Get Click Media.",
    url: "https://getclickmedia.com/whatsapp-green-tick-verification",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to Get WhatsApp Green Tick Verification",
      totalTime: "P7D",
      step: [
        { "@type": "HowToStep", name: "Set up WhatsApp Business API", text: "Provision a WhatsApp Business API number, as green tick review only applies to API accounts." },
        { "@type": "HowToStep", name: "Complete Meta Business Manager verification", text: "Submit business documents including GST certificate, incorporation certificate, and business PAN." },
        { "@type": "HowToStep", name: "Match your brand details", text: "Ensure business name, website, and Meta Business Manager profile are consistent." },
        { "@type": "HowToStep", name: "Submit Official Business Account request", text: "Apply via Meta's business verification flow." },
        { "@type": "HowToStep", name: "Provide supporting evidence", text: "Share website, app listings, or press mentions confirming business legitimacy." },
        { "@type": "HowToStep", name: "Meta review and approval", text: "Meta reviews the request, typically within 5–7 business days." },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com/" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp Green Tick Verification", item: "https://getclickmedia.com/whatsapp-green-tick-verification" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is WhatsApp Green Tick?",
          acceptedAnswer: { "@type": "Answer", text: "The official verified badge Meta grants to WhatsApp Business API accounts that pass business verification and Official Business Account review." },
        },
        {
          "@type": "Question",
          name: "How long does WhatsApp Green Tick verification take?",
          acceptedAnswer: { "@type": "Answer", text: "Typically 5–7 business days once all documents are submitted correctly." },
        },
        {
          "@type": "Question",
          name: "Can I get a green tick on the free WhatsApp Business App?",
          acceptedAnswer: { "@type": "Answer", text: "No — green tick verification is only available for WhatsApp Business API accounts." },
        },
      ],
    },
  ],
};

const COMPARISON = [
  { aspect: "Badge visible in chat", regular: "No", verified: "Yes — green checkmark next to name" },
  { aspect: "Customer trust signal", regular: "Standard", verified: "Higher — confirms official status" },
  { aspect: "Eligibility requirement", regular: "Business verification only", verified: "Business verification + Official Business Account review" },
  { aspect: "Typical approval time", regular: "N/A", verified: "5–7 business days" },
  { aspect: "Best suited for", regular: "All businesses", verified: "Established/recognizable brands" },
];

const ELIGIBILITY = [
  { icon: FileCheck, text: "A verified Meta Business Manager account" },
  { icon: BadgeCheck, text: "A registered business name matching official documents (GST/incorporation certificate)" },
  { icon: Globe2, text: "An active, functioning website representing the business" },
  { icon: Smartphone, text: "A WhatsApp Business API number already provisioned" },
  { icon: Newspaper, text: "Brand recognition Meta can independently confirm — news mentions, app store presence, or established online footprint" },
];

const PROCESS = [
  { n: "01", title: "Set up WhatsApp Business API", body: "Green tick review only applies to API accounts, not the free app." },
  { n: "02", title: "Complete Meta Business Manager verification", body: "Submit GST certificate, incorporation certificate, and business PAN." },
  { n: "03", title: "Match your brand details", body: "Ensure business name, website, and Meta Business Manager profile are consistent." },
  { n: "04", title: "Submit Official Business Account request", body: "Apply via Meta's business verification flow." },
  { n: "05", title: "Provide supporting evidence", body: "Share website, app listings, press mentions, or other proof of legitimacy." },
  { n: "06", title: "Meta review and approval", body: "5–7 business days on average; Get Click Media tracks status and handles follow-ups." },
];

const REJECTION_REASONS = [
  "Business name mismatch between GST documents, website, and Meta Business Manager",
  "Incomplete or low-quality business verification documents",
  "No active website or minimal online presence to confirm legitimacy",
  "Using a personal WhatsApp number instead of a properly provisioned API number",
  "Applying before completing standard Meta Business Manager verification",
];

const BENEFITS = [
  { icon: ThumbsUp, title: "Higher customer trust", body: "The verified badge reduces hesitation to click links or share information." },
  { icon: ShieldAlert, title: "Lower impersonation risk", body: "Customers can distinguish your official account from fraudulent lookalikes." },
  { icon: TrendingUp, title: "Better campaign performance", body: "Verified accounts often see higher open and response rates on broadcast messages." },
  { icon: Award, title: "Brand credibility", body: "Signals an established, recognizable business to new customers." },
];

const FAQS = [
  { q: "What is WhatsApp Green Tick?", a: "The official verified badge Meta grants to WhatsApp Business API accounts that pass business verification and Official Business Account review." },
  { q: "How long does WhatsApp Green Tick verification take?", a: "Typically 5–7 business days once all documents are submitted correctly." },
  { q: "Can I get a green tick on the free WhatsApp Business App?", a: "No — green tick verification is only available for WhatsApp Business API accounts.", link: { text: "See WhatsApp Business API vs App", href: "/whatsapp-api-vs-whatsapp-business-app" } },
  { q: "What documents are needed for green tick verification?", a: "GST certificate, business incorporation certificate, business PAN, and a matching, active business website." },
  { q: "Why do green tick requests get rejected?", a: "Most rejections happen due to business name mismatches, incomplete documents, or lack of an established online presence." },
  { q: "Is green tick approval guaranteed?", a: "No — approval is at Meta's discretion, even for fully eligible businesses. Get Click Media pre-screens applications to reduce rejection risk." },
  { q: "Does green tick verification cost extra?", a: "Verification itself is a Meta review process; Get Click Media manages the process as part of WhatsApp Business API onboarding.", link: { text: "See WhatsApp API pricing", href: "/whatsapp-api-pricing-india" } },
  { q: "Can an already-active WhatsApp API account apply for green tick later?", a: "Yes — you can apply for Official Business Account review at any point after your API account is active and Meta Business Manager is verified." },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppGreenTickPage() {
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
          <li className="text-[#2563eb] font-medium">Green Tick Verification</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <BadgeCheck className="w-3.5 h-3.5 text-[#25D366]" />
            Official Meta Verified Badge
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Green Tick Verification<br />
            <span className="text-[#38bdf8]">How to Get the Official Badge</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            The green tick confirms to customers that they&apos;re messaging a genuine, verified business — not an
            impersonator. Get Click Media manages the entire process end-to-end.
            <strong className="text-white"> Typical approval: 5–7 business days.</strong>
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              Apply for Green Tick <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Book a Free Consultation
            </Link>
            <Link href="/whatsapp-api-pricing-india"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              View WhatsApp API Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Green Tick is the official verified badge Meta grants to{" "}
              <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">WhatsApp Business API</Link> accounts
              that pass its business verification and &ldquo;Official Business Account&rdquo; review. It confirms to
              customers that they&apos;re messaging a genuine, verified business — not an impersonator. The process
              involves Meta Business Manager verification, brand name matching, and an official business account
              review, and typically takes 5–7 business days once submitted correctly. Get Click Media, an
              official Meta Business Solution Provider in Noida, manages the entire green tick verification
              process for its clients — from document preparation to Meta submission and follow-up — so
              businesses don&apos;t face rejection due to avoidable errors.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS GREEN TICK ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="what-is-green-tick">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What Is Green Tick Verification?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              A trust signal Meta only grants to verified brands
            </h2>
          </div>
          <p className="text-gray-500 text-base leading-relaxed">
            The green tick (also called the &ldquo;verified badge&rdquo;) appears next to a business&apos;s name in WhatsApp
            chats once Meta confirms the account belongs to a well-known or officially verified brand. It sits on
            top of WhatsApp Business API — you cannot get a green tick on the free WhatsApp Business App.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mt-4 mb-6">
            Green tick verification builds trust by signaling to customers that:
          </p>
          <ul className="space-y-3">
            {[
              "The account is genuinely operated by the business, not a scam or clone",
              "Meta has independently verified the business's identity",
              "Messages from this number are safe to trust and act on (payments, KYC, order confirmations)",
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                <BadgeCheck className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
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
              Green Tick vs Regular Account
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              What actually changes once you&apos;re verified
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[28%]">Aspect</th>
                  <th className="text-left px-4 py-4 font-semibold">Regular API Account</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Green Tick Verified Account</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">{row.aspect}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.regular}</td>
                    <td className="px-4 py-3.5 text-gray-800 font-medium">{row.verified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="eligibility">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Eligibility Requirements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              What a business generally needs to qualify
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {ELIGIBILITY.map(e => (
              <div key={e.text} className="flex items-start gap-4 rounded-2xl bg-gray-50 border border-gray-100 p-5">
                <span className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <e.icon className="w-4 h-4 text-[#2563eb]" />
                </span>
                <p className="text-sm text-gray-700 leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-amber-50/60 border border-amber-200 px-6 py-5 max-w-3xl mx-auto text-center">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>Note:</strong> Green tick approval is at Meta&apos;s discretion — even fully eligible businesses
              can be asked for additional documentation.
            </p>
          </div>
        </div>
      </section>

      {/* ── STEP-BY-STEP PROCESS ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Step-by-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              How to get WhatsApp Green Tick
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[4%] right-[4%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {PROCESS.map(s => (
                <div key={s.n} className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white font-extrabold text-lg flex items-center justify-center mx-auto font-(family-name:--font-syne) shadow-lg shadow-blue-900/40">
                    {s.n}
                  </div>
                  <h3 className="text-sm font-bold text-white">{s.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REJECTION REASONS ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="rejection-reasons">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest">
              <Lock className="w-3.5 h-3.5" /> Common Rejection Reasons
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why green tick requests get rejected
            </h2>
          </div>
          <div className="rounded-2xl bg-gray-50 border border-gray-100 p-7 space-y-4">
            {REJECTION_REASONS.map(r => (
              <div key={r} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-500 text-xs">✕</span>
                {r}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Get Click Media pre-checks all of the above before submission to avoid unnecessary rejection cycles.
          </p>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              What a verified badge does for your business
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map(b => (
              <div key={b.title} className="rounded-2xl bg-white border border-gray-100 p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-[#2563eb]" />
                </span>
                <h3 className="text-base font-bold text-gray-900">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GET CLICK MEDIA ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="why-gcm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
            Why Choose Get Click Media
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
            We pre-screen every application before Meta sees it
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Get Click Media is an official{" "}
            <Link href="/whatsapp-business-api-provider-india" className="text-[#2563eb] underline underline-offset-2">Meta Business Solution Provider</Link> headquartered
            in Noida, managing WhatsApp Business API, Green Tick verification, chatbot automation, and bulk
            messaging for 10,000+ Indian businesses. We handle document preparation, Meta submission, and status
            follow-up end-to-end — most clients see faster approval because we pre-screen applications against
            Meta&apos;s common rejection triggers before submitting.
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
              { label: "Meta Business Verification", href: "/meta-business-verification" },
              { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp Broadcast", href: "/whatsapp-broadcast" },
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
              Questions about Green Tick verification
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
                Ready to get your business verified?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages document preparation, Meta submission, and follow-up — start to green
                tick in 5–7 business days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Apply for Green Tick <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Book a Free Consultation
                </Link>
                <Link href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  View WhatsApp API Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
