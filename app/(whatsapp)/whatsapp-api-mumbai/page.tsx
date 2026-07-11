import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ChevronDown,
  Building2,
  Home,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Landmark,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Mumbai — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution Provider. 3-5 day onboarding for BFSI, insurance, real estate, D2C, and logistics businesses across Mumbai, Navi Mumbai, and Thane.",
  keywords:
    "WhatsApp Business API Mumbai, whatsapp api provider mumbai, whatsapp business api mumbai, whatsapp marketing services mumbai, whatsapp chatbot mumbai, whatsapp api cost mumbai maharashtra",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-mumbai" },
  openGraph: {
    title: "WhatsApp Business API in Mumbai — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution Provider, with remote delivery across Mumbai, Navi Mumbai, and Thane.",
    url: "https://getclickmedia.com/whatsapp-api-mumbai",
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
      name: "WhatsApp Business API Provider in Mumbai",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Mumbai", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-mumbai",
      description:
        "Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution Provider. Mumbai businesses spanning BFSI, media and entertainment, real estate, logistics, and D2C brands use GCM's WhatsApp API for customer engagement, lead conversion, and operational automation.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Mumbai", item: "https://getclickmedia.com/whatsapp-api-mumbai" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media offer WhatsApp API in Mumbai?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media provides WhatsApp Business API across Mumbai including South Mumbai, Bandra, Andheri, Powai, Navi Mumbai, Thane, and all surrounding areas. Onboarding is fully remote — consultations by phone or video call, setup handled entirely by GCM." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API suitable for Mumbai's BFSI sector?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — BFSI is the largest WhatsApp API user segment in Mumbai. Banks, NBFCs, insurance companies, and wealth managers use WhatsApp API for OTP delivery, transaction alerts, EMI reminders, policy renewal, and customer support. Get Click Media's India-hosted infrastructure and compliance-ready template framework are specifically designed for regulated BFSI deployments." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API pricing work for Mumbai businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Pricing is the same across India — Meta charges Rs 0.79-0.91 per marketing conversation and Rs 0.14-0.17 per utility conversation. There is no Mumbai surcharge. Get Click Media's platform fee is volume-based and quoted on request." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp API be used for Bollywood and media industry communication?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — Mumbai's media and entertainment companies use WhatsApp API for talent/artist management communication, movie or show promotional campaigns, fan engagement automation, press release distribution, and event management. GCM has experience in entertainment industry WhatsApp deployments." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Landmark,
    title: "BFSI",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "India's banking capital — home to major national banks and hundreds of NBFCs and fintechs.",
    useCase: "EMI reminders, loan pre-approval campaigns, OTP delivery, fraud alerts, wealth management alerts.",
    image: "/images/rcs/banking-hero.webp",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Mumbai is home to India's largest insurance cluster, spanning life, health, and general insurers.",
    useCase: "Policy renewal automation, premium reminders, claims status updates, cross-sell campaigns.",
    image: "/images/rcs/banking-insurance-renewal.webp",
  },
  {
    icon: Home,
    title: "Real Estate — Premium",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Worli, Bandra, Powai, and Navi Mumbai make up India's most expensive and most active property market.",
    useCase: "NRI buyer management, luxury property carousels, payment milestone communication.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: ShoppingBag,
    title: "D2C and E-commerce",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Mumbai's D2C startup ecosystem is a heavy adopter of WhatsApp Commerce for customer engagement.",
    useCase: "Cart recovery, post-purchase engagement, product launch campaigns, loyalty programme.",
    image: "/images/rcs/ecommerce-hero.png",
  },
  {
    icon: Truck,
    title: "Logistics",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "JNPT and Mumbai Port anchor India's largest logistics hub, driving heavy B2B shipment communication.",
    useCase: "B2B consignment updates, delivery notifications, RTO reduction for e-commerce.",
    image: "/images/rcs/ecommerce-delivery.webp",
  },
];

// ── GCM Capability Table ────────────────────────────────────────────────
const CAPABILITIES = [
  { label: "Onboarding timeline", value: "3 to 5 business days from consultation to first live WhatsApp message" },
  { label: "Meta BSP status", value: "Official Meta Business Solution Provider — GCM manages your full WhatsApp Business Account registration" },
  { label: "Local support", value: "India-based support team available 9 AM to 7 PM IST, Monday to Saturday. WhatsApp support available." },
  { label: "Pricing", value: "Same as national rates — marketing Rs 0.79-0.91/conv, utility Rs 0.14-0.17/conv. Platform fee based on volume." },
  { label: "Languages supported", value: "Hindi + English + regional language chatbot flows as required by your customer base" },
  { label: "Integration partners", value: "Shopify, WooCommerce, Salesforce, HubSpot, Zoho, LeadSquared, and custom systems" },
];

// ── Client Use Cases ─────────────────────────────────────────────────────
const CLIENT_USE_CASES = [
  { sector: "NBFC — Bandra Kurla Complex", automation: "EMI reminder sequence + loan pre-approval WhatsApp campaign", result: "On-time EMI +30%. Loan application conversion 3.5x." },
  { sector: "Insurance broker — Lower Parel", automation: "Policy renewal WhatsApp sequence + claims chatbot", result: "Renewal rate +28%. Claims call volume -40%." },
  { sector: "D2C beauty brand — Andheri", automation: "Cart recovery + replenishment reminder + festive campaign", result: "Cart recovery 24%. Repeat purchase +38%." },
  { sector: "Logistics company — Navi Mumbai", automation: "B2B shipment tracking + delivery notification automation", result: "B2B client satisfaction +32%. Support calls -50%." },
  { sector: "Premium real estate — Worli", automation: "NRI buyer WhatsApp management + payment alerts", result: "NRI conversion 2.8x. Milestone payment on-time +35%." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Does Get Click Media offer WhatsApp API in Mumbai?",
    a: "Yes. Get Click Media provides WhatsApp Business API across Mumbai including South Mumbai, Bandra, Andheri, Powai, Navi Mumbai, Thane, and all surrounding areas. Onboarding is fully remote — consultations by phone or video call, setup handled entirely by GCM.",
  },
  {
    q: "Is WhatsApp API suitable for Mumbai's BFSI sector?",
    a: "Yes — BFSI is the largest WhatsApp API user segment in Mumbai. Banks, NBFCs, insurance companies, and wealth managers use WhatsApp API for OTP delivery, transaction alerts, EMI reminders, policy renewal, and customer support. Get Click Media's India-hosted infrastructure and compliance-ready template framework are specifically designed for regulated BFSI deployments.",
  },
  {
    q: "How does WhatsApp API pricing work for Mumbai businesses?",
    a: "Pricing is the same across India — Meta charges Rs 0.79-0.91 per marketing conversation and Rs 0.14-0.17 per utility conversation. There is no Mumbai surcharge. Get Click Media's platform fee is volume-based and quoted on request.",
  },
  {
    q: "Can WhatsApp API be used for Bollywood and media industry communication?",
    a: "Yes — Mumbai's media and entertainment companies use WhatsApp API for: talent/artist management communication, movie or show promotional campaigns, fan engagement automation, press release distribution, and event management. GCM has experience in entertainment industry WhatsApp deployments.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIMumbaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mt-2 bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/60 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden className="text-white/30">/</li>
              <li><Link href="/whatsapp-business-api" className="hover:text-white transition-colors">WhatsApp Business API</Link></li>
              <li aria-hidden className="text-white/30">/</li>
              <li className="text-white font-medium">Mumbai</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Mumbai
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Mumbai — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution
                Provider. Mumbai businesses spanning BFSI, media and entertainment, real estate, logistics,
                and D2C brands use GCM&apos;s WhatsApp API for customer engagement, lead conversion, and
                operational automation.
                <strong className="text-white"> Onboarding takes 3 to 5 business days with remote delivery.</strong>
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
                  Get WhatsApp API <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  Book a Demo
                </Link>
                <Link href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  View Pricing
                </Link>
              </div>

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · Fully remote onboarding · Mumbai, Navi Mumbai &amp; Thane coverage</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Mumbai businesses — rich message preview on a phone"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {[
              { value: "96%+", label: "WhatsApp penetration among Mumbai smartphone users" },
              { value: "BFSI", label: "Largest WhatsApp API user segment in Mumbai" },
              { value: "3–5 days", label: "Onboarding timeline" },
              { value: "100%", label: "Remote onboarding — no in-person visit required" },
            ].map((stat) => (
              <div key={stat.value} className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-extrabold text-[#38bdf8] font-(family-name:--font-syne)">{stat.value}</p>
                <p className="text-xs text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <strong className="text-gray-900">Direct answer: </strong>
              Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution
              Provider. Mumbai businesses spanning BFSI, media and entertainment, real estate, logistics, and
              D2C brands use GCM&apos;s WhatsApp API for customer engagement, lead conversion, and operational
              automation. Onboarding takes 3 to 5 business days with remote delivery across Mumbai, Navi
              Mumbai, and Thane.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Mumbai is India&apos;s financial capital and largest commercial city — home to the Bombay Stock
            Exchange, RBI, SEBI, and the headquarters of India&apos;s top banks, insurance companies, media
            houses, and financial institutions. The city&apos;s business environment is dominated by BFSI,
            real estate (South Mumbai to Thane corridor), Bollywood and media, and a thriving startup
            ecosystem.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Mumbai&apos;s consumer base is India&apos;s most affluent and digitally active — WhatsApp
            penetration exceeds 96% among smartphone users. For Mumbai businesses in banking, insurance, and
            premium retail, WhatsApp API provides both the engagement rates and the professional brand
            verification that these regulated industries require.
          </p>
        </div>
      </section>

      {/* ── WHY MUMBAI BUSINESSES CHOOSE WHATSAPP API ────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-mumbai">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Mumbai businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Mumbai Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                India&apos;s most affluent market, built for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Mumbai&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Mumbai report faster lead conversion,
                higher customer retention, and lower support costs compared to SMS and email alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Landmark, title: "India's financial capital", desc: "RBI, SEBI, the Bombay Stock Exchange, and the HQs of India's top banks and insurers drive the country's largest BFSI WhatsApp deployments." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Mumbai businesses." },
                  { icon: Building2, title: "96%+ WhatsApp penetration", desc: "Among the highest smartphone and WhatsApp adoption rates in India, across a highly affluent consumer base." },
                  { icon: MapPinned, title: "Fully remote onboarding", desc: "GCM delivers the same enterprise-grade WhatsApp API capabilities to Mumbai clients with zero in-person meetings required." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-[#2563eb]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOP INDUSTRIES ────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Top Industries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Top Industries Using WhatsApp API in Mumbai
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Mumbai&apos;s BFSI-heavy business landscape creates a distinctive set of regulated and
              consumer-facing WhatsApp API use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => (
              <div key={industry.title} className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
                <div className={`h-1.5 bg-gradient-to-r ${industry.color}`} />
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={industry.image}
                    alt={`WhatsApp Business API use cases for ${industry.title} in Mumbai`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-xl ${industry.bgColor} flex items-center justify-center shrink-0`}>
                      <industry.icon className={`w-5 h-5 ${industry.textColor}`} />
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 font-(family-name:--font-syne)">{industry.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{industry.why}</p>
                  <div className="flex items-start gap-2 text-sm bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <span className="text-gray-600">{industry.useCase}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GCM'S WHATSAPP API SERVICE IN MUMBAI ─────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/rcs/what-is-rcs.png"
                  alt="Get Click Media's WhatsApp Business API onboarding and support for Mumbai clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Mumbai
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Mumbai
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media delivers WhatsApp API services to Mumbai clients fully remotely — the
                onboarding process requires no in-person meetings. Mumbai businesses get the same
                enterprise-grade WhatsApp API capabilities as local providers, with the additional advantage
                of GCM&apos;s proximity to Meta&apos;s India-based technical support and our NCR headquarters
                for national client management. GCM has deployed WhatsApp API for
                <strong className="text-gray-900"> multiple Mumbai-based BFSI, insurance, and D2C companies</strong>.
              </p>

              <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
                {CAPABILITIES.map((row, i) => (
                  <div key={row.label} className={`flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <span className="font-semibold text-gray-900 sm:w-44 shrink-0">{row.label}</span>
                    <span className="text-gray-500">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT USE CASES ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="use-cases">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Client Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Client Use Cases — Mumbai Businesses
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Sector</th>
                  <th className="text-left px-4 py-4 font-semibold">WhatsApp automation deployed</th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Business result</th>
                </tr>
              </thead>
              <tbody>
                {CLIENT_USE_CASES.map((row, i) => (
                  <tr key={row.sector} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.sector}</td>
                    <td className="px-4 py-3.5 text-gray-500">{row.automation}</td>
                    <td className="px-4 py-3.5 text-green-600 font-medium">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── AREAS SERVED ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="areas-served">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
            Areas We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
            Areas in and Around Mumbai We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Mumbai and the surrounding
            region. Onboarding is fully remote — we set up your WhatsApp API account without requiring any
            in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Navi Mumbai", "Thane", "Kalyan", "Dombivli", "Panvel", "Bandra", "Andheri", "Powai", "Worli", "Dadar", "BKC", "Goregaon", "Borivali", "Vasai-Virar"].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70">
                {area}
              </span>
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
              WhatsApp Business API in Mumbai
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

      {/* ── RELATED LINKS / INTERNAL LINKING MAP ─────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
              { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
              { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
              { label: "WhatsApp API Pune", href: "/whatsapp-api-pune" },
              { label: "WhatsApp API Bangalore", href: "/whatsapp-api-bangalore" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
              { label: "WhatsApp API for Insurance", href: "/whatsapp-api-insurance" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Logistics", href: "/whatsapp-api-logistics" },
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
                Ready to launch WhatsApp API for your Mumbai business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and onboarding —
                fully remote, no in-person visit required.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Get WhatsApp API <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Book a Demo
                </Link>
                <Link href="/whatsapp-api-pricing-india"
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
