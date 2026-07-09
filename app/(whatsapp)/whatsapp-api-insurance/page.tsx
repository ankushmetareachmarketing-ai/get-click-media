import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ShieldCheck,
  Users,
  Clock,
  Headphones,
  Building2,
  ChevronDown,
  AlertTriangle,
  Shield,
  FileText,
  Calendar,
  Bell,
  TrendingUp,
  MessageSquare,
  Settings,
  Database,
  Globe,
  Camera,
  CreditCard,
  BarChart3,
  HeartPulse,
  Umbrella,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Insurance — Policy Renewal, Claims and Customer Engagement India | Get Click Media",
  description:
    "WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech platforms to automate policy renewal reminders, premium due alerts, claims status updates, and new policy issuance.",
  keywords:
    "WhatsApp API for Insurance India, WhatsApp Insurance India, WhatsApp Policy Renewal Reminder, Insurance Chatbot WhatsApp India, WhatsApp Claims India, Insurance WhatsApp Automation India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-insurance" },
  openGraph: {
    title: "WhatsApp API for Insurance — Policy Renewal, Claims and Customer Engagement India",
    description:
      "WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech platforms to automate policy renewal reminders, premium due alerts, claims status updates, and new policy issuance.",
    url: "https://getclickmedia.com/whatsapp-api-insurance",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://getclickmedia.com/#org",
      name: "Get Click Media",
      url: "https://getclickmedia.com",
      logo: { "@type": "ImageObject", url: "https://getclickmedia.com/images/gcm-logo.png" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Service",
      name: "WhatsApp API for Insurance India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-insurance",
      description:
        "WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech platforms to automate policy renewal reminders, premium due alerts, claims status updates, and new policy issuance.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Insurance India", item: "https://getclickmedia.com/whatsapp-api-insurance" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is WhatsApp API compliant with IRDAI guidelines for insurance communication?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp Business API is not directly regulated by IRDAI, but insurance communication via WhatsApp must comply with IRDAI's broader communication guidelines — including fair practice code, policyholder communication standards, and claims intimation procedures. Get Click Media reviews all insurance templates for IRDAI alignment before submission to Meta. Our insurance implementations include compliant disclosure language and opt-out mechanisms." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp improve insurance renewal rates in India?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp renewal reminders achieve 85%+ open rates compared to 35% for SMS and 22% for email. The key differentiator is the embedded Renew Now button — clicking it takes the customer directly to the payment gateway with policy details pre-filled, reducing the renewal journey from 6+ steps to 2 taps. The 5-message sequence (60/30/7/3/due date days) catches customers at multiple touchpoints." },
        },
        {
          "@type": "Question",
          name: "Can insurance claims be filed via WhatsApp in India?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — WhatsApp can be the channel for claims notification and document submission. The customer messages your WhatsApp number with CLAIM or taps a claims button. The chatbot collects the claim type, policy number, and incident details. A WhatsApp Flow requests document uploads (photos, FIR copy, medical reports). The claim is registered in your claims management system automatically. Status updates are sent via WhatsApp throughout the claims process." },
        },
        {
          "@type": "Question",
          name: "How does Get Click Media handle sensitive insurance data on WhatsApp?",
          acceptedAnswer: { "@type": "Answer", text: "Get Click Media's insurance implementations use: India-hosted infrastructure (AWS Mumbai), no storage of sensitive policy or financial data in message logs beyond retention requirements, masked policy numbers in WhatsApp messages, secure document upload via WhatsApp Flows with direct transfer to your document management system, and DPDP 2023-compliant consent and data handling. Security reviews are conducted for all insurance deployments." },
        },
      ],
    },
  ],
};

// ── Insurance Use Cases ──────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: Calendar,
    title: "Policy Renewal Reminder Sequence",
    trigger: "Policy expiry approaching — Day -60, -30, -7, -3, 0",
    message: "Premium amount, coverage summary, renewal benefits, and [Renew Now] button linking to payment gateway. Escalating urgency. Final notice includes coverage gap warning.",
    result: "Renewal rate +31%. Manual renewal calls -50%. Lapse rate -28%.",
  },
  {
    icon: CreditCard,
    title: "Premium Due and Payment Confirmation",
    trigger: "Premium due date for life insurance or regular premium policies",
    message: "Premium amount due, due date, policy number, and [Pay Premium] button. Payment confirmation with receipt PDF.",
    result: "On-time premium payment +25%. Policy lapse due to non-payment -30%.",
  },
  {
    icon: FileText,
    title: "Claims Registration and Status Updates",
    trigger: "Claim filed in claims management system OR customer messages CLAIM",
    message: "Claim registration confirmation with claim number. Document checklist via WhatsApp Flow. Status updates at each stage. Final settlement notification.",
    result: "Claim initiation 2.8x faster. Claims call centre volume -40%. Customer satisfaction during claims +22 points.",
  },
  {
    icon: MessageSquare,
    title: "Document Collection via WhatsApp Flows",
    trigger: "Policy issuance or claims requiring KYC/document submission",
    message: "Document upload flow — structured form captures: ID proof, address proof, income proof, photo. Secure upload confirmation.",
    result: "Document collection time -60%. NIGO (Not in Good Order) rejection rate -45%.",
  },
  {
    icon: Users,
    title: "New Product Cross-Sell and Upsell",
    trigger: "Policy anniversary or trigger event (new car registered, new home bought)",
    message: "Personalised recommendation: existing customer + relevant product. Coverage gap analysis. [Get a Quote] button → chatbot qualification → agent connection",
    result: "Cross-sell conversion 2x vs cold outreach. Premium per customer +18%.",
  },
  {
    icon: Umbrella,
    title: "Monsoon and Seasonal Alert Campaigns",
    trigger: "Pre-monsoon (May-June) or weather alert",
    message: "Car/home insurance renewal reminder with monsoon-specific messaging. Flood cover addition offer. [Renew Now] [Add Cover] buttons.",
    result: "Monsoon campaign renewal uplift +22%. Flood cover attachment rate +35%.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "Policy renewal rate (general insurance)", before: "61% (SMS + email baseline)", after: "80% (WhatsApp sequence)", source: "GCM insurance client data" },
  { metric: "Premium payment reminder open rate", before: "35% (SMS)", after: "85% (WhatsApp)", source: "GCM insurance deployment data" },
  { metric: "Claim initiation time", before: "3-5 days (branch/phone)", after: "Same day (WhatsApp chatbot)", source: "GCM InsurTech client" },
  { metric: "Document submission NIGO rate", before: "28%", after: "15% (WhatsApp Flow structured upload)", source: "GCM insurance client" },
  { metric: "Claims call centre volume", before: "Baseline", after: "40% reduction with WhatsApp status updates", source: "GCM insurance client" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "Policy management integration", desc: "Majesco, custom PMS — renewal trigger, premium due, claims status webhook" },
  { icon: ShieldCheck, title: "IRDAI-compliant templates", desc: "All templates reviewed for IRDAI communication guidelines before Meta submission" },
  { icon: FileText, title: "Claims document collection", desc: "WhatsApp Flows for structured document upload — ID, address, income proof, photos" },
  { icon: CreditCard, title: "Payment gateway", desc: "Razorpay, BillDesk, Paytm for premium and renewal payment via WhatsApp link" },
  { icon: Globe, title: "Multilingual", desc: "Hindi, Tamil, Telugu for pan-India insurance customer communication" },
  { icon: Shield, title: "Verified Green Tick", desc: "Critical for insurance trust — GCM manages Green Tick application for insurance clients" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is WhatsApp API compliant with IRDAI guidelines for insurance communication?",
    a: "WhatsApp Business API is not directly regulated by IRDAI, but insurance communication via WhatsApp must comply with IRDAI's broader communication guidelines — including fair practice code, policyholder communication standards, and claims intimation procedures. Get Click Media reviews all insurance templates for IRDAI alignment before submission to Meta. Our insurance implementations include compliant disclosure language and opt-out mechanisms.",
  },
  {
    q: "How does WhatsApp improve insurance renewal rates in India?",
    a: "WhatsApp renewal reminders achieve 85%+ open rates compared to 35% for SMS and 22% for email. The key differentiator is the embedded Renew Now button — clicking it takes the customer directly to the payment gateway with policy details pre-filled, reducing the renewal journey from 6+ steps to 2 taps. The 5-message sequence (60/30/7/3/due date days) catches customers at multiple touchpoints.",
  },
  {
    q: "Can insurance claims be filed via WhatsApp in India?",
    a: "Yes — WhatsApp can be the channel for claims notification and document submission. The customer messages your WhatsApp number with CLAIM or taps a claims button. The chatbot collects the claim type, policy number, and incident details. A WhatsApp Flow requests document uploads (photos, FIR copy, medical reports). The claim is registered in your claims management system automatically. Status updates are sent via WhatsApp throughout the claims process.",
  },
  {
    q: "How does Get Click Media handle sensitive insurance data on WhatsApp?",
    a: "Get Click Media's insurance implementations use: India-hosted infrastructure (AWS Mumbai), no storage of sensitive policy or financial data in message logs beyond retention requirements, masked policy numbers in WhatsApp messages, secure document upload via WhatsApp Flows with direct transfer to your document management system, and DPDP 2023-compliant consent and data handling. Security reviews are conducted for all insurance deployments.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIInsurancePage() {
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
          <li className="text-[#2563eb] font-medium">Insurance</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Insurance WhatsApp API
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Business API for Insurance<br />
            <span className="text-[#38bdf8]">Policy Renewal, Claims and Customer Engagement India</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech
            platforms to automate policy renewal reminders, premium due alerts, claims status updates,
            and new policy issuance. Get Click Media integrates WhatsApp with insurance CRMs and
            policy management systems — improving renewal rates by 31% and reducing claims call
            centre volume by 40%.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/whatsapp-api-pricing-india"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              View Pricing
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Start WhatsApp Onboarding
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech
              platforms to automate policy renewal reminders, premium due alerts, claims status updates,
              and new policy issuance.
              <strong className="text-gray-900"> Get Click Media integrates WhatsApp with insurance CRMs</strong>
              and policy management systems — improving renewal rates by 31% and reducing claims call
              centre volume by 40%.
            </p>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
            <p className="text-sm text-red-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-red-500" />
              India's insurance industry has a renewal lapse problem — <strong>35-40% of general insurance
              policies lapse</strong> at renewal due to insufficient customer engagement. WhatsApp
              renewal reminder sequences with embedded payment links have consistently improved
              renewal rates by <strong>28-35%</strong> across Indian insurance deployments.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Get Click Media provides WhatsApp API for insurance companies, brokers, and InsurTech
            platforms — integrated with policy management systems and IRDAI-compliant template frameworks.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "31%", label: "Improvement in policy renewal rate" },
            { value: "40%", label: "Reduction in claims call centre volume" },
            { value: "2.8x", label: "Faster claim initiation via WhatsApp" },
            { value: "85%", label: "Premium reminder open rate vs 35% SMS" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE SECTION: Insurance Dashboard ────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Policy Management Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">for insurers and brokers</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all policyholder communication from a single dashboard — renewal reminders,
                premium due alerts, claims registration, document collection, and cross-sell campaigns
                — with full integration to your policy management system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Automated renewal reminder sequence with Pay Now button</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Claims registration and status updates via WhatsApp</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Secure document collection via WhatsApp Flows</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>IRDAI-compliant templates with disclosure language</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/insurance-dashboard.webp"
                  alt="WhatsApp API Insurance dashboard — policy renewal reminders, premium due alerts, claims status, and document collection"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY INSURANCE NEEDS WHATSAPP ────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="why-insurance">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Insurance Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why Insurance Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Insurance customers are accustomed to ignoring renewal notices — email goes unread,
              SMS is dismissed, and phone calls are often missed or rejected.
            </p>
            <p>
              WhatsApp renewal reminders from a verified insurer identity achieve <strong>85%+ open
              rates</strong> and include a direct payment link — reducing the steps from awareness to
              renewal payment from 6+ to 2. With <strong>31% improvement in renewal rates</strong> and
              <strong>40% reduction in claims call centre volume</strong>, WhatsApp is rapidly becoming
              the standard for insurance communication in India.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> 35-40% of general insurance policies lapse at renewal
                due to insufficient customer engagement. WhatsApp renewal reminder sequences with
                embedded payment links have consistently improved renewal rates by 28-35% across
                Indian insurance deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API Use Cases for Insurance — 6 Automations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <uc.icon className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-(family-name:--font-syne)">{uc.title}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-700">Trigger:</span> <span className="text-gray-500">{uc.trigger}</span></p>
                  <p><span className="font-semibold text-gray-700">WhatsApp message sent:</span> <span className="text-gray-500">{uc.message}</span></p>
                  <p><span className="font-semibold text-gray-700">Business result:</span> <span className="text-green-600">{uc.result}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: WhatsApp Renewal Reminder Preview ────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Renewal Automation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp renewal reminders <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">with one-tap payment</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Automated renewal reminder sequence with embedded Renew Now button. Customers can
                renew their policy directly from WhatsApp — reducing the renewal journey from 6+ steps
                to 2 taps and improving renewal rates by up to 35%.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>85%+ open rate vs 35% for SMS reminders</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Renew Now button links directly to payment gateway</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>5-message sequence (60/30/7/3/due date days)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Coverage gap warning in final notice</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 max-w-sm mx-auto">
                <Image
                  src="/images/whatsapp/insurance-renewal.webp"
                  alt="WhatsApp insurance renewal reminder preview — policy details, premium amount, and Renew Now button with one-tap payment"
                  width={400}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE BENCHMARKS ──────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="performance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Performance Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Real results from Indian insurers and InsurTech companies
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold text-red-400">Before WhatsApp API</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">After WhatsApp API</th>
                  <th className="text-left px-4 py-4 font-semibold text-white/60">Source</th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.metric}</td>
                    <td className="px-4 py-3.5 text-center text-red-400">{row.before}</td>
                    <td className="px-4 py-3.5 text-center text-[#38bdf8]">{row.after}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: Policy Management Integration ────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/insurance-pms-integration.webp"
                  alt="WhatsApp API policy management system integration — Majesco, custom PMS for insurance communication"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
                Policy System Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Connect WhatsApp with <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">your policy management system</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media integrates with leading insurance systems — Majesco and custom PMS —
                enabling automated WhatsApp communication for renewal triggers, premium due alerts,
                and claims status updates.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Majesco", "Custom PMS", "Renewal triggers", "Premium due alerts", "Claims status webhooks"].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                IRDAI-compliant with full audit trails and disclosure language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Get Click Media&apos;s WhatsApp API Capabilities for Insurance
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map(c => (
              <div key={c.title} className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-[#38bdf8]" />
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">{c.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{c.desc}</p>
              </div>
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
              WhatsApp API for Insurance
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
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
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
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
              { label: "WhatsApp Green Tick Verification", href: "/whatsapp-green-tick-verification" },
              { label: "WhatsApp API for Insurance", href: "/whatsapp-api-insurance" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
              { label: "WhatsApp API for NBFC", href: "/whatsapp-api-nbfc" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                {l.label}
              </Link>
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
                Ready to transform insurance communication with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for insurance with policy management integration,
                IRDAI-compliant templates, and automated claims communication.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Start Onboarding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}