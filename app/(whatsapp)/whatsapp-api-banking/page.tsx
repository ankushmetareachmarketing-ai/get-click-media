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
  Landmark,
  CreditCard,
  Wallet,
  FileText,
  Bell,
  TrendingUp,
  MessageSquare,
  Settings,
  Database,
  Globe,
  Lock,
  Shield,
  PhoneCall,
  BarChart3,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Banking and NBFCs — EMI Alerts, OTP and Loan Servicing India | Get Click Media",
  description:
    "WhatsApp Business API for banking and NBFCs enables automated EMI payment reminders, loan disbursement alerts, account statements, OTP delivery, and fraud notifications through WhatsApp.",
  keywords:
    "WhatsApp API for Banking India, WhatsApp Banking India, WhatsApp API NBFC India, WhatsApp Loan Servicing, WhatsApp EMI Reminder India, Bank WhatsApp API India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-banking" },
  openGraph: {
    title: "WhatsApp API for Banking and NBFCs — EMI Alerts, OTP and Loan Servicing India",
    description:
      "WhatsApp Business API for banking and NBFCs enables automated EMI payment reminders, loan disbursement alerts, account statements, OTP delivery, and fraud notifications through WhatsApp.",
    url: "https://getclickmedia.com/whatsapp-api-banking",
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
      name: "WhatsApp API for Banking and NBFC India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-banking",
      description:
        "WhatsApp Business API for banking and NBFCs enables automated EMI payment reminders, loan disbursement alerts, account statements, OTP delivery, and fraud notifications through WhatsApp.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Banking and NBFC India", item: "https://getclickmedia.com/whatsapp-api-banking" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is WhatsApp API approved for banking communication in India?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp Business API is not explicitly regulated by RBI for banking communication — it falls under general digital communication guidelines. Banks and NBFCs use WhatsApp API for customer communication with appropriate safeguards: verified sender identity (Green Tick), explicit customer consent, India-hosted data, and complete audit trails. RBI's digital communication guidelines require authenticated sender identity and opt-out mechanisms — both of which WhatsApp API provides." },
        },
        {
          "@type": "Question",
          name: "Can banks send OTPs via WhatsApp in India?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — WhatsApp authentication-category templates are designed for OTP delivery. WhatsApp OTPs offer higher delivery rates (99.1% vs 97.2% for SMS) and stronger sender identity verification (Meta-verified business name + Green Tick) compared to SMS. Several Indian digital lenders and neo-banks use WhatsApp as their primary OTP channel. Get Click Media manages the authentication template setup and delivery infrastructure." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API improve EMI collection for NBFCs?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp EMI reminders achieve 98% open rates compared to 35% for SMS, and include a Pay Now button that links directly to the payment gateway — reducing the steps from reminder to payment from 4+ (SMS > open > search payment app > pay) to 2 (open WhatsApp message > tap Pay Now > complete UPI payment). The 5-message reminder sequence starting 7 days before due date catches at-risk customers before they become delinquent." },
        },
        {
          "@type": "Question",
          name: "Is customer banking data safe on WhatsApp?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp messages are end-to-end encrypted in delivery. Get Click Media's infrastructure for banking clients includes: India-hosted data processing (AWS Mumbai), no storage of sensitive financial data in message logs, masked account numbers in templates, and DPDP 2023-compliant consent and data handling. We conduct security reviews for all banking integrations." },
        },
      ],
    },
  ],
};

// ── Banking Use Cases ──────────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: CreditCard,
    title: "EMI Payment Reminder Sequence",
    trigger: "EMI due date — automated at Day -7, -3, 0, +1, +3",
    message: "EMI amount, due date, account number (masked), and [Pay Now] button. Escalating urgency at each stage. Final notice before collections flag.",
    result: "On-time payment +28%. Collections escalation -45%. Customer dispute calls -22%.",
  },
  {
    icon: Wallet,
    title: "Loan Disbursement Notification",
    trigger: "Loan disbursed in CBS — amount credited to account",
    message: "Loan disbursement confirmation with amount, loan account number, first EMI date, and repayment schedule PDF",
    result: "Customer confusion calls -80%. Loan account activation rate +15%.",
  },
  {
    icon: Shield,
    title: "OTP Delivery — Authentication",
    trigger: "Customer initiates net banking login, NEFT, UPI, or card transaction requiring 2FA",
    message: "Transaction OTP with amount, beneficiary (masked), and 5-minute expiry notice. Clear fraud warning.",
    result: "OTP delivery rate 99.1% vs 97.2% SMS. Phishing susceptibility lower with verified WA sender.",
  },
  {
    icon: FileText,
    title: "Account Statement on Demand",
    trigger: "Customer messages STATEMENT or taps quick-reply button",
    message: "Mini statement (last 5 transactions) inline + [Download Full Statement] PDF button + [Email Statement] option",
    result: "Branch visit for statement -55%. Call centre statement queries -40%.",
  },
  {
    icon: ShieldCheck,
    title: "KYC Renewal Alert and Document Collection",
    trigger: "KYC expiry date approaching — 60 days, 30 days, 7 days",
    message: "KYC renewal required notice with [Upload Documents] WhatsApp Flow button — captures Aadhaar, PAN, selfie in-chat",
    result: "KYC renewal completion rate +3.2x. Branch visit for KYC -65%.",
  },
  {
    icon: Bell,
    title: "Fraud Alert and Account Security Notification",
    trigger: "Unusual transaction detected by fraud management system",
    message: "Immediate alert: transaction attempt details. [This Was Me] / [Block Immediately] interactive buttons. 24/7 response.",
    result: "Fraud transaction reversal speed 4x faster. Customer trust score +15 points.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "EMI on-time payment rate", before: "67% (SMS reminder baseline)", after: "86% (WhatsApp 5-message sequence)", source: "GCM NBFC client data" },
  { metric: "Collections team call volume", before: "100% manual outreach", after: "45% reduction — WhatsApp handles pre-delinquency", source: "GCM collections automation" },
  { metric: "KYC completion rate", before: "38% (email and SMS)", after: "72% (WhatsApp Flow document upload)", source: "GCM bank client deployment" },
  { metric: "OTP delivery rate", before: "97.2% (SMS)", after: "99.1% (WhatsApp API)", source: "GCM authentication platform data" },
  { metric: "Customer service call volume", before: "Baseline", after: "28% reduction with WhatsApp self-service", source: "GCM bank contact centre data" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "CBS integration", desc: "Finacle, Temenos, Oracle FLEXCUBE, and custom CBS via API webhook or file-based trigger" },
  { icon: ShieldCheck, title: "RBI compliance", desc: "Audit trail for all customer communications. Opt-in consent management. 2-year message retention for regulatory review." },
  { icon: Globe, title: "India data residency", desc: "All customer financial data processed and stored on India-hosted infrastructure (AWS Mumbai)" },
  { icon: Bell, title: "Fraud alert integration", desc: "Fraud management system webhook — real-time WhatsApp alert within 10 seconds of flag" },
  { icon: PhoneCall, title: "Collections workflow", desc: "Pre-delinquency WhatsApp sequence before traditional collections escalation" },
  { icon: Shield, title: "Verified Green Tick", desc: "GCM manages Green Tick application — critical for banking trust in India" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is WhatsApp API approved for banking communication in India?",
    a: "WhatsApp Business API is not explicitly regulated by RBI for banking communication — it falls under general digital communication guidelines. Banks and NBFCs use WhatsApp API for customer communication with appropriate safeguards: verified sender identity (Green Tick), explicit customer consent, India-hosted data, and complete audit trails. RBI's digital communication guidelines require authenticated sender identity and opt-out mechanisms — both of which WhatsApp API provides.",
  },
  {
    q: "Can banks send OTPs via WhatsApp in India?",
    a: "Yes — WhatsApp authentication-category templates are designed for OTP delivery. WhatsApp OTPs offer higher delivery rates (99.1% vs 97.2% for SMS) and stronger sender identity verification (Meta-verified business name + Green Tick) compared to SMS. Several Indian digital lenders and neo-banks use WhatsApp as their primary OTP channel. Get Click Media manages the authentication template setup and delivery infrastructure.",
  },
  {
    q: "How does WhatsApp API improve EMI collection for NBFCs?",
    a: "WhatsApp EMI reminders achieve 98% open rates compared to 35% for SMS, and include a Pay Now button that links directly to the payment gateway — reducing the steps from reminder to payment from 4+ (SMS > open > search payment app > pay) to 2 (open WhatsApp message > tap Pay Now > complete UPI payment). The 5-message reminder sequence starting 7 days before due date catches at-risk customers before they become delinquent.",
  },
  {
    q: "Is customer banking data safe on WhatsApp?",
    a: "WhatsApp messages are end-to-end encrypted in delivery. Get Click Media's infrastructure for banking clients includes: India-hosted data processing (AWS Mumbai), no storage of sensitive financial data in message logs, masked account numbers in templates, and DPDP 2023-compliant consent and data handling. We conduct security reviews for all banking integrations.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIBankingPage() {
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
          <li className="text-[#2563eb] font-medium">Banking & NBFC</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                Banking & NBFC WhatsApp API
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API <br />
                for Banking and NBFCs
              </h1>

              <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
                Automate EMI payment reminders, loan disbursement alerts, account statements, OTP delivery, 
                and fraud notifications through WhatsApp Business API integrated with your core banking system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Start Onboarding
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="./images/whatsapp/banking/whatsapp-for-banking.webp"
                alt="WhatsApp Business API for Banking and NBFCs"
                className="w-full max-w-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Business API for banking and NBFCs enables automated EMI payment reminders, loan
              disbursement alerts, account statements, OTP delivery, and fraud notifications through WhatsApp.
              <strong className="text-gray-900"> Get Click Media integrates WhatsApp with core banking systems</strong>
              and NBFC loan management systems in India — improving on-time EMI payment rates by 28% and
              reducing collections team workload by 45%.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/whatsapp-api-pricing-india"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
            >
              View Pricing
            </Link>
          </div>

          <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-blue-500" />
              Indian banks and NBFCs send millions of transactional messages daily — EMI reminders, payment
              confirmations, KYC alerts, and account updates. SMS achieves 30-35% open rates and has declining
              CTR. WhatsApp achieves <strong>98% open rates</strong> and enables two-way interaction — a customer
              can confirm a payment, raise a dispute, or request a statement directly in the chat.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Get Click Media provides WhatsApp API integration for banks, NBFCs, and microfinance institutions
            in India — with RBI-aligned compliance frameworks, India-hosted data infrastructure, and integration
            with Finacle, Temenos, and custom CBS platforms.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "28%", label: "Improvement in on-time EMI payment rate" },
            { value: "45%", label: "Reduction in collections team workload" },
            { value: "3.2x", label: "Faster KYC completion via WhatsApp" },
            { value: "99.1%", label: "OTP delivery rate via WhatsApp API" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="pb-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-[#2563eb] font-semibold hover:underline"
          >
            Get these results for your bank or NBFC
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── IMAGE SECTION: Banking Dashboard ───────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Banking Communication Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">for banks and NBFCs</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all customer communication from a single dashboard — EMI reminders, loan disbursements,
                OTP delivery, KYC collection, account statements, and fraud alerts — with full integration to
                your core banking system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Automated EMI reminder sequence with Pay Now button</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Real-time fraud alerts with interactive buttons</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>KYC document collection via WhatsApp Flow</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>India-hosted data with full RBI compliance</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full">
                <Image
                  src="/images/whatsapp/banking/whatsaap-bussiness-api-for-banking.png"
                  alt="WhatsApp API Banking dashboard — EMI reminders, loan disbursements, OTP delivery, KYC collection, and fraud alerts"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BANKING NEEDS WHATSAPP ──────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-banking">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Banking Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why Banking and NBFC Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Indian banks and NBFCs face a critical challenge: the collections-to-EMI ratio is worsening as
              manual calling becomes less effective. Customers ignore unknown calls but respond to WhatsApp
              from a verified, named institution.
            </p>
            <p>
              The verified Green Tick on WhatsApp creates trust that SMS sender IDs cannot match — critical
              for financial communication where fraud is a significant concern. With <strong>28% improvement
              in on-time EMI payments</strong> and <strong>45% reduction in collections team workload</strong>,
              WhatsApp is rapidly becoming the standard for banking communication in India.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> SMS achieves 30-35% open rates with declining CTR. WhatsApp
                achieves 98% open rates and enables two-way interaction — a customer can confirm a payment,
                raise a dispute, or request a statement directly in the chat.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Transform Your Banking Communication
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="use-cases">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API Use Cases for Banking and NBFC — 6 Automations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#2563eb] hover:shadow-md transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
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

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Implement These Automations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: WhatsApp EMI Reminder Preview ────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                EMI Collection Automation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp EMI reminders <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">with one-tap payment</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Interactive WhatsApp EMI reminders with Pay Now buttons linked directly to payment gateways.
                A 5-message sequence starting 7 days before due date catches at-risk customers before they
                become delinquent — reducing collections escalations by 45%.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>98% open rate vs 35% for SMS reminders</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Pay Now button links directly to payment gateway</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>5-message sequence with escalating urgency</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Reduces collection calls and improves cash flow</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
                >
                  Start Automating EMI Collections
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full">
                <Image
                  src="/images/whatsapp/banking/whatsApp-for-banking-and-fintech.webp"
                  alt="WhatsApp EMI reminder message preview — EMI amount, due date, and Pay Now button with one-tap payment"
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
      <section className="py-20 sm:py-28 bg-white" id="performance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Performance Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Real results from Indian banks and NBFCs
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
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Get These Results for Your Bank or NBFC
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: CBS Integration ──────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full">
                <Image
                  src="/images/whatsapp/banking/best-whatsapp-api-service-provider-in-india.webp"
                  alt="WhatsApp API CBS integration — Finacle, Temenos, Oracle FLEXCUBE integration for banking communication"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
                Core Banking Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Connect WhatsApp with <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">your core banking system</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media integrates with leading core banking systems — Finacle, Temenos, and
                Oracle FLEXCUBE — enabling real-time WhatsApp communication triggered by customer events
                like EMI due dates, loan disbursements, and KYC expiry.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Finacle", "Temenos", "Oracle FLEXCUBE", "Custom CBS", "API webhook", "File-based trigger"].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-xs font-medium text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                RBI-compliant with full audit trails and 2-year message retention.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
                >
                  Start CBS Integration
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
              Get Click Media&apos;s WhatsApp API Capabilities for Banking and NBFC
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
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0f172a] text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Capabilities
              <ArrowRight className="w-4 h-4" />
            </Link>
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
              WhatsApp API for Banking and NBFC
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-gray-200 shadow-sm open:shadow-md transition-shadow"
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
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Still Have Questions? Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-200">
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
              { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
              { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
              { label: "WhatsApp API Security", href: "/whatsapp-api-security" },
              { label: "WhatsApp Green Tick Verification", href: "/whatsapp-green-tick-verification" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
              { label: "WhatsApp API for NBFC", href: "/whatsapp-api-nbfc" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-[#2563eb] font-semibold hover:underline"
            >
              Need help choosing the right solution?
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Ready to transform banking communication with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for banking and NBFCs with CBS integration, RBI
                compliance, and India-hosted data infrastructure.
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