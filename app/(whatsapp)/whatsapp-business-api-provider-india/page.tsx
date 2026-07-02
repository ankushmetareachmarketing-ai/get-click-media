import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ShieldCheck,
  MapPin,
  Users,
  Layers,
  Clock,
  Headphones,
  Wallet,
  Landmark,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Building2,
  Plane,
  Truck,
  Store,
  Car,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API Provider in India — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media is an official WhatsApp Business API provider in India, authorised by Meta as a Business Solution Provider. Noida HQ, 10,000+ businesses onboarded, 3–5 day setup, transparent pricing, 24×7 support.",
  keywords:
    "WhatsApp Business API Provider India, official whatsapp partner india, whatsapp api company india, best whatsapp api provider india, whatsapp bsp india, whatsapp api service provider india, whatsapp business solution provider india",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-business-api-provider-india" },
  openGraph: {
    title: "WhatsApp Business API Provider in India — Official Meta BSP | Get Click Media",
    description:
      "Official Meta BSP headquartered in Noida. Complete onboarding, template management, and dedicated account management. Setup in 3–5 business days.",
    url: "https://getclickmedia.com/whatsapp-business-api-provider-india",
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
      name: "WhatsApp Business API Provider India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "Official WhatsApp Business Solution Provider",
      url: "https://getclickmedia.com/whatsapp-business-api-provider-india",
      description:
        "Get Click Media is an official Meta BSP providing WhatsApp Business API to Indian businesses. 3-5 day setup. 10,000+ businesses served. Noida-based with 24x7 support.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Provider India", item: "https://getclickmedia.com/whatsapp-business-api-provider-india" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What makes Get Click Media different from other WhatsApp API providers?",
          acceptedAnswer: { "@type": "Answer", text: "Get Click Media is an official Meta BSP based in Noida with Hindi support, 3-5 day onboarding, 24x7 SLA support, and a unified platform for WhatsApp, RCS, and SMS." },
        },
        {
          "@type": "Question",
          name: "How do I verify a WhatsApp API provider is an official Meta BSP?",
          acceptedAnswer: { "@type": "Answer", text: "Check Meta's official BSP directory at developers.facebook.com/docs/whatsapp/partners. Get Click Media is listed as an authorised Meta BSP." },
        },
        {
          "@type": "Question",
          name: "Can I transfer my WhatsApp account to Get Click Media?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. WABA migration between BSPs takes 1-3 business days. Get Click Media manages the migration end-to-end. Templates and history are preserved." },
        },
        {
          "@type": "Question",
          name: "What is the minimum commitment with Get Click Media?",
          acceptedAnswer: { "@type": "Answer", text: "No minimum monthly commitment for growth-tier clients. Pay per usage — Meta conversation charges plus platform fee." },
        },
        {
          "@type": "Question",
          name: "Does Get Click Media manage WhatsApp Green Tick?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media manages the entire Green Tick verification application with Meta. Most eligible businesses receive verification in 5-14 business days." },
        },
      ],
    },
  ],
};

const BSP_VS_RESELLER = [
  { aspect: "Meta authorisation", gcm: "Directly authorised by Meta", other: "No Meta authorisation — uses another BSP's credentials" },
  { aspect: "Account ownership", gcm: "Your WABA is owned by your business", other: "WABA may be owned by provider — risk of account loss" },
  { aspect: "Compliance", gcm: "Fully compliant with Meta's policies", other: "May violate Meta's terms — account suspension risk" },
  { aspect: "API stability", gcm: "Direct access to Meta's infrastructure", other: "Dependent on upstream provider — lower reliability" },
  { aspect: "Template approval", gcm: "Submits directly to Meta", other: "Submitted through another layer — slower, riskier" },
  { aspect: "Support escalation", gcm: "Can escalate to Meta directly", other: "No direct Meta access — limited support capability" },
  { aspect: "Green Tick availability", gcm: "Available through official process", other: "Not always available or may be slower" },
  { aspect: "Data security", gcm: "Data stays within official Meta ecosystem", other: "Data may pass through multiple third parties" },
];

const WHY_GCM = [
  { icon: ShieldCheck, title: "Official Meta BSP — Direct Authorisation", body: "We have a direct relationship with Meta and the ability to onboard your business with full authorisation. Your WABA is registered under your business entity — not shared infrastructure." },
  { icon: MapPin, title: "Headquartered in Noida — India-First Operations", body: "Our entire operations team works in IST. Account managers speak English and Hindi. For NCR clients, in-person meetings are available — no offshore queues, no timezone delays." },
  { icon: Users, title: "10,000+ Indian Businesses Already Onboarded", body: "Across banking, e-commerce, education, healthcare, real estate, logistics, insurance, and retail — with pre-built connectors, code samples, and templates ready for your industry." },
  { icon: Layers, title: "Unified Platform — WhatsApp + RCS + Bulk SMS", body: "The only provider in NCR offering all three channels from one dashboard, one API, one analytics view, and one account manager." },
  { icon: Clock, title: "3 to 5 Business Day Go-Live Guarantee", body: "Most BSPs in India take 7 to 14 days. Our parallel verification and pre-built templates bring most clients live in 3–5 business days, with a fast-track option for urgent deployments." },
  { icon: Headphones, title: "24×7 Technical Support with SLA", body: "Our support team operates 24×7. Enterprise clients get a sub-30-minute response SLA for P1 incidents — API downtime, template rejections, account health issues." },
  { icon: Wallet, title: "Transparent Pricing — No Hidden Charges", body: "Meta's conversation charges passed through at cost, plus a clearly stated platform fee. No setup fees for standard onboarding. No lock-in contracts for growth-tier clients." },
  { icon: ShieldCheck, title: "Full Compliance Support — TRAI, Meta, DPDP", body: "All customer data is processed on India-hosted infrastructure with no cross-border transfer, keeping your campaigns within Meta, TRAI, and DPDP 2023 requirements." },
];

const CHECKLIST = [
  { criteria: "Official Meta BSP?", gcm: "Yes — listed in Meta's BSP directory", ask: "Are you listed in Meta's official BSP directory?" },
  { criteria: "India-based operations?", gcm: "Yes — Noida, UP headquarters", ask: "Where is your support team located?" },
  { criteria: "WABA owned by your business?", gcm: "Yes — your entity owns the WABA", ask: "Who owns the WABA? Can I transfer it?" },
  { criteria: "Template approval timeline", gcm: "1–3 business days", ask: "What is your average template approval time?" },
  { criteria: "Go-live timeline", gcm: "3–5 business days", ask: "How long does full onboarding take?" },
  { criteria: "24×7 support?", gcm: "Yes — with SLA for enterprise", ask: "What are your support hours and response SLA?" },
  { criteria: "Hindi language support?", gcm: "Yes", ask: "Can your team support in Hindi?" },
  { criteria: "RCS and SMS on same platform?", gcm: "Yes — unified platform", ask: "Do you offer RCS and SMS alongside WhatsApp?" },
  { criteria: "India data residency?", gcm: "Yes — India-hosted infra", ask: "Where is customer data stored?" },
  { criteria: "Transparent pricing?", gcm: "Yes — no hidden charges", ask: "Show me a complete pricing breakdown with all fees" },
  { criteria: "CRM integration support?", gcm: "Yes — Salesforce, HubSpot, Zoho+", ask: "Which CRMs do you have pre-built connectors for?" },
  { criteria: "Green Tick support?", gcm: "Yes — managed end to end", ask: "Do you manage the Green Tick verification process?" },
];

const INDUSTRIES = [
  { icon: Landmark, name: "Banking & Fintech", enable: "Verified sender for high-trust communication", uses: "Loan offers, EMI reminders, fraud alerts, credit card campaigns" },
  { icon: ShoppingCart, name: "E-commerce & D2C", enable: "Order flow automation + campaign delivery", uses: "Cart recovery, order updates, flash sales, review requests" },
  { icon: GraduationCap, name: "Education & EdTech", enable: "Admission funnel + student engagement automation", uses: "Enquiry follow-up, fee reminders, result notifications, re-engagement" },
  { icon: HeartPulse, name: "Healthcare", enable: "Appointment management + patient communication", uses: "Appointment reminders, lab reports, prescription refills, insurance renewals" },
  { icon: Building2, name: "Real Estate", enable: "Lead nurturing + site visit automation", uses: "Property carousels, site visit booking, payment reminders, NRI outreach" },
  { icon: Plane, name: "Travel & Hospitality", enable: "Booking confirmation + upsell automation", uses: "Check-in reminders, upgrade offers, loyalty points, visa updates" },
  { icon: Truck, name: "Logistics", enable: "Shipment tracking + delivery management", uses: "Dispatch alerts, delivery notifications, failed delivery recovery" },
  { icon: ShieldCheck, name: "Insurance", enable: "Renewal automation + claims communication", uses: "Policy renewals, premium reminders, claims status, new product offers" },
  { icon: Store, name: "Retail & FMCG", enable: "Loyalty + campaign delivery", uses: "Festive campaigns, loyalty points, product launches, cashback" },
  { icon: Car, name: "Automobile", enable: "Lead-to-showroom conversion automation", uses: "Test drive booking, service reminders, EMI alerts, new model launches" },
];

const ONBOARDING = [
  { n: "01", title: "Initial Consultation", when: "Day 1", body: "Your account manager understands your use case, volume, industry, and CRM setup, and delivers a custom onboarding plan and quote within 24 hours." },
  { n: "02", title: "Meta Business Manager Verification", when: "Day 1–3", body: "We guide you through Meta Business Manager verification. For businesses with an existing verified Meta BM, this step is immediate." },
  { n: "03", title: "WhatsApp Business Account Setup", when: "Day 2–3", body: "We create your WABA under your Meta Business Manager, register your phone number, and upload your brand assets." },
  { n: "04", title: "Template Submission & Approval", when: "Day 2–4", body: "We draft your initial templates for OTP, order confirmation, appointment reminders, and campaigns, then submit and manage Meta approval." },
  { n: "05", title: "Platform Access & Integration", when: "Day 3–5", body: "You get dashboard and REST API access. Our team supports Shopify, WooCommerce, Salesforce, HubSpot, Zoho, or custom API integration." },
  { n: "06", title: "Test Send & Go-Live", when: "Day 4–5", body: "We verify template rendering, buttons, webhooks, and fallback behaviour, then launch your first live campaign — staying on call to monitor delivery." },
];

const INCLUDED = [
  { item: "Official Meta BSP access", detail: "Your WABA registered under your business entity with full Meta authorisation" },
  { item: "Onboarding support", detail: "Dedicated onboarding manager from Day 1 to Go-Live" },
  { item: "Template submission & management", detail: "We draft, submit, and track all templates — initial batch and ongoing additions" },
  { item: "Campaign dashboard", detail: "No-code dashboard for your marketing team to create and send campaigns" },
  { item: "REST API + webhooks", detail: "Full API access — Node.js, Python, PHP, and Java SDKs available" },
  { item: "CRM integration support", detail: "Pre-built connectors for major CRMs; custom API support for other platforms" },
  { item: "Green Tick application support", detail: "We manage your Green Tick verification application with Meta" },
  { item: "24×7 technical support", detail: "Phone, WhatsApp, and email support — enterprise clients get SLA guarantee" },
  { item: "Analytics dashboard", detail: "Delivery, read, click, and conversion tracking for every campaign" },
  { item: "Compliance guidance", detail: "Template review for Meta policy compliance; DPDP and consent management support" },
  { item: "Opt-out management", detail: "Automated opt-out handling — customers who opt out are removed immediately" },
  { item: "India data residency", detail: "All customer data processed on India-hosted servers — DPDP 2023 compliant" },
];

const BUSINESS_SIZES = [
  {
    tag: "Under ₹10 crore ARR",
    title: "Startups & D2C brands",
    body: "A growth-tier plan with no minimum monthly commitment — you pay for what you use. Shopify and WooCommerce plugins mean cart recovery and order confirmation flows can go live in under an hour without writing code.",
    stat: "Cart abandonment recovery on WhatsApp: 18–26% vs 4–6% for email. Review requests: 5x higher submission rate than email.",
  },
  {
    tag: "₹10 crore – ₹200 crore ARR",
    title: "Mid-market businesses",
    body: "Pre-built connectors for Salesforce, HubSpot, Zoho, Freshdesk, and LeadSquared. For custom integrations, our API is fully documented with code samples in four languages.",
    stat: "Highest-ROI move: replacing SMS campaigns with WhatsApp for opted-in segments — 5x to 8x CTR uplift at comparable per-message cost.",
  },
  {
    tag: "₹200 crore+ ARR or 1M+ customers",
    title: "Enterprise",
    body: "Dedicated infrastructure, custom SLAs, a named enterprise account manager, and monthly business reviews. Supports 1,000+ messages per second, with SEBI, IRDAI, and RBI audit documentation for regulated industries.",
    stat: "Typical deployment: WhatsApp for conversational campaigns, RCS for Android-native reach, SMS for guaranteed delivery — one unified integration.",
  },
];

const FAQS = [
  {
    q: "What makes Get Click Media different from other WhatsApp API providers in India?",
    a: "Get Click Media is an official Meta BSP based in Noida — India-first, Hindi-supported, and the only provider in NCR that offers WhatsApp API, RCS messaging, and bulk SMS from a single unified platform. Our onboarding timeline (3–5 days), 24×7 support with SLA, and transparent pricing distinguish us from both large international BSPs, who lack India-specific support, and grey-market resellers, who lack Meta authorisation.",
  },
  {
    q: "How do I verify that a WhatsApp API provider is an official Meta BSP?",
    a: "Meta maintains a public directory of authorised Business Solution Providers at developers.facebook.com/docs/whatsapp/partners. Any provider claiming BSP status should be searchable in this directory. Get Click Media is listed as an official Meta BSP. If a provider can't point you to their listing, they're likely a reseller — ask who their upstream BSP is.",
  },
  {
    q: "Can I transfer my WhatsApp Business Account to Get Click Media from another provider?",
    a: "Yes. WhatsApp Business Account migration between BSPs is supported by Meta. Get Click Media's migration team manages the process end-to-end. Migration typically takes 1 to 3 business days, doesn't require a new phone number, and preserves your existing templates and message history.",
  },
  {
    q: "Is Get Click Media available for businesses outside Delhi-NCR?",
    a: "Yes. We serve businesses across India — from Mumbai and Bangalore to Hyderabad, Chennai, and Tier 2 cities. Onboarding is entirely digital, and Delhi-NCR clients get the added option of in-person support from our Noida headquarters.",
  },
  {
    q: "What is the minimum commitment to start with Get Click Media?",
    a: "There is no minimum monthly message commitment for growth-tier clients — you pay Meta's conversation charges plus our platform fee, both based on actual usage. Enterprise clients can opt for committed-volume contracts with lower per-conversation rates.",
  },
  {
    q: "Does Get Click Media manage WhatsApp Green Tick verification?",
    a: "Yes. Green Tick verification requires a Meta business verification process. Get Click Media manages the entire application — document preparation, submission, and follow-up. Most businesses with a verified Meta Business Manager receive Green Tick status within 5 to 14 business days.",
    link: { text: "Learn about WhatsApp Green Tick verification", href: "/blog/whatsapp-green-tick-verification" },
  },
  {
    q: "What CRM systems does Get Click Media integrate with?",
    a: "We have pre-built integrations with Salesforce (including Financial Services Cloud), HubSpot, Zoho CRM, Freshdesk, LeadSquared, and Sell.do. Shopify and WooCommerce have native plugins. For any other platform, we provide a fully documented REST API with SDKs for Node.js, Python, PHP, and Java.",
    link: { text: "See WhatsApp API integration options", href: "/blog/whatsapp-api-integration" },
  },
  {
    q: "How does Get Click Media handle opt-out requests?",
    a: "When a customer sends a WhatsApp opt-out message, such as 'STOP' or clicking an unsubscribe button, our platform immediately removes them from all future sends and logs the opt-out with a timestamp — fully automated, with records retained for audit purposes under India's DPDP Act 2023.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppProviderIndiaPage() {
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
          <li className="text-[#2563eb] font-medium">Provider India</li>
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
                Official Meta Business Solution Provider
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API Provider in India<br />
                <span className="text-[#38bdf8]">Official Meta BSP</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media is an official WhatsApp Business API provider in India, authorised by Meta as a
                Business Solution Provider. Headquartered in Noida, we onboard businesses across India with
                complete setup support, template management, and dedicated account management.
                <strong className="text-white"> Setup takes 3 to 5 business days.</strong>
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
                  Get WhatsApp API Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  Request a Free Consultation
                </Link>
                <Link href="/blog/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  View Pricing
                </Link>
              </div>
              <p className="text-white/40 text-xs">Noida · Official Meta BSP · 10,000+ Businesses · 3–5 Day Setup</p>
            </div>

            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/40">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media, an official Meta Business Solution Provider dashboard"
                  fill
                  className="object-cover"
                  priority
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
              Get Click Media is an official <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">WhatsApp Business API</Link> provider
              in India, authorised by Meta as a Business Solution Provider (BSP). Headquartered in Noida, Uttar
              Pradesh, Get Click Media provides WhatsApp Business API access to businesses across India with
              complete onboarding support, template management, and dedicated account management. Setup
              takes 3 to 5 business days.
            </p>
          </div>
          <p className="text-gray-500 text-base leading-relaxed mt-8">
            Choosing the right WhatsApp Business API provider in India is one of the most important decisions in
            your business messaging strategy. Not all providers are equal — the difference between an official
            Meta BSP and an unauthorised reseller is the difference between a stable, compliant, scalable
            solution and a risk to your business communications.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mt-4">
            This page explains exactly what to look for in a WhatsApp API provider in India, why Get Click Media
            is the right choice for Indian businesses, what the onboarding process looks like, and how we compare
            to other providers in the market.
          </p>
        </div>
      </section>

      {/* ── WHAT IS A BSP ────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="what-is-a-bsp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14 mb-16">
            <div className="flex-1 text-center lg:text-left space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                What Is a WhatsApp BSP?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                A WhatsApp Business Solution Provider, explained
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                A WhatsApp Business Solution Provider (BSP) is a company officially authorised by Meta to provide
                access to the WhatsApp Business API on behalf of businesses. BSPs sit between Meta&apos;s
                infrastructure and the end businesses that want to use WhatsApp for customer communication.
                Businesses cannot access the API directly from Meta — they must work through an authorised BSP,
                which handles account setup, verification, template approval, infrastructure, and ongoing support.
              </p>
            </div>
            <div className="w-full lg:w-[42%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API rich message on a phone"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">Official BSP vs unofficial reseller — the critical difference</h3>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[26%]">Aspect</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Official Meta BSP (Get Click Media)</th>
                  <th className="text-left px-4 py-4 font-semibold">Unofficial reseller / grey-market provider</th>
                </tr>
              </thead>
              <tbody>
                {BSP_VS_RESELLER.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">{row.aspect}</td>
                    <td className="px-4 py-3.5 text-gray-800">{row.gcm}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-red-100 bg-red-50/60 px-6 py-5 max-w-4xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-800 leading-relaxed">
              <strong>Important:</strong> Always verify that your WhatsApp API provider is listed in Meta&apos;s official
              BSP directory before signing up. Using an unofficial provider risks your WhatsApp account being
              suspended without warning — and losing access to all your customer conversations.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY GCM ──────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="why-gcm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Why Choose Get Click Media
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              India&apos;s trusted WhatsApp Business API provider
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_GCM.map(f => (
              <div key={f.title} className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-[#38bdf8]" />
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">{f.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO CHOOSE A PROVIDER ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="how-to-choose">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              How to Choose the Right Provider
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              A checklist for evaluating any WhatsApp API provider
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              The Indian WhatsApp API provider market has dozens of players — official BSPs, resellers, and
              grey-market providers. Use this checklist before signing up with anyone.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[26%]">Evaluation Criteria</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Get Click Media</th>
                  <th className="text-left px-4 py-4 font-semibold">What to Ask Competitors</th>
                </tr>
              </thead>
              <tbody>
                {CHECKLIST.map((row, i) => (
                  <tr key={row.criteria} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">{row.criteria}</td>
                    <td className="px-4 py-3.5 text-green-600 font-semibold">{row.gcm}</td>
                    <td className="px-4 py-3.5 text-gray-500 italic">{row.ask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            Read more: <Link href="/blog/best-whatsapp-api-providers-india" className="text-[#2563eb] underline underline-offset-2">best WhatsApp API providers in India</Link>
          </p>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Industries We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Purpose-built for every major Indian industry
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map(ind => (
              <div key={ind.name} className="rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <ind.icon className="w-5 h-5 text-[#2563eb]" />
                </span>
                <h3 className="text-base font-bold text-gray-900">{ind.name}</h3>
                <p className="text-sm text-gray-600">{ind.enable}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{ind.uses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONBOARDING PROCESS ───────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="onboarding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Onboarding Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              From sign-up to first live campaign — exactly what happens
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {ONBOARDING.map(s => (
              <div key={s.n} className="relative rounded-2xl border-2 border-blue-100 bg-blue-50/40 p-7 space-y-3">
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center font-(family-name:--font-syne)">
                  {s.n}
                </span>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb] pt-2">{s.when}</p>
                <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-blue-50/60 border border-blue-100 px-6 py-5 max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">Typical total timeline:</strong> 3 to 5 business days from signing
              up to sending your first WhatsApp campaign. The primary variable is Meta&apos;s WABA approval timeline —
              which Get Click Media actively manages and follows up on.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="included">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What&apos;s Included
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Every plan includes all of this — no add-on fees
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {INCLUDED.map(row => (
              <div key={row.item} className="flex items-start gap-3 rounded-xl bg-white border border-gray-100 p-5">
                <CheckCheck className="w-4 h-4 text-[#2563eb] shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{row.item}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{row.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS SIZES ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="business-sizes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              For Every Business Size
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Get Click Media scales with you
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {BUSINESS_SIZES.map(b => (
              <div key={b.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-7 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#2563eb] text-xs font-bold">{b.tag}</span>
                <h3 className="text-lg font-bold text-gray-900">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.body}</p>
                <p className="text-xs text-green-600 font-semibold leading-relaxed">{b.stat}</p>
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
              { label: "WhatsApp API Pricing India", href: "/blog/whatsapp-api-pricing-india" },
              { label: "WhatsApp Green Tick Verification", href: "/blog/whatsapp-green-tick-verification" },
              { label: "WhatsApp Business API Delhi", href: "/whatsapp-api-delhi" },
              { label: "WhatsApp API Noida", href: "/whatsapp-api-noida" },
              { label: "Best WhatsApp API Providers India", href: "/blog/best-whatsapp-api-providers-india" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp API Integration", href: "/blog/whatsapp-api-integration" },
              { label: "RCS Messaging Service", href: "/rcs-messaging" },
              { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
              { label: "Meta Business Verification", href: "/meta-business-verification" },
              { label: "How to Get WhatsApp Business API", href: "/how-to-get-whatsapp-business-api" },
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
              Questions about choosing a WhatsApp API provider
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
                Get WhatsApp Business API from India&apos;s Official Meta BSP
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Noida · Official Meta BSP · 10,000+ Businesses · 3–5 Day Setup. Our team responds within 2 hours
                on business days. For urgent enquiries, call our Noida office directly.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Get WhatsApp API Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Request a Free Consultation
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
