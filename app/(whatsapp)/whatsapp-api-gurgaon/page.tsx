import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ChevronDown,
  Building2,
  Home,
  Stethoscope,
  Briefcase,
  Landmark,
  Cpu,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Gurgaon — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta Business Solution Provider. 3-5 day onboarding with full CRM and OMS integration for Gurgaon's startups, corporates, and premium businesses.",
  keywords:
    "WhatsApp Business API Gurgaon, whatsapp api gurgaon, whatsapp business api gurugram, whatsapp marketing gurgaon, whatsapp chatbot gurugram, best whatsapp api provider gurgaon",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-gurgaon" },
  openGraph: {
    title: "WhatsApp Business API in Gurgaon — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta Business Solution Provider with 3-5 day onboarding and full CRM/OMS integration.",
    url: "https://getclickmedia.com/whatsapp-api-gurgaon",
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
      name: "WhatsApp Business API Provider in Gurgaon",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Gurgaon", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-gurgaon",
      description:
        "Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta Business Solution Provider. GCM delivers 3 to 5 day onboarding for Gurgaon businesses with full CRM and OMS integration capabilities.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Gurgaon", item: "https://getclickmedia.com/whatsapp-api-gurgaon" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best WhatsApp API provider in Gurgaon?",
          acceptedAnswer: { "@type": "Answer", text: "Get Click Media is among the most established WhatsApp API providers serving Gurgaon — as an official Meta BSP with India-based support and enterprise integration capabilities. GCM's strength in B2B WhatsApp automation and CRM integration makes it particularly suitable for Gurgaon's corporate and startup ecosystem." },
        },
        {
          "@type": "Question",
          name: "Can Gurgaon startups use WhatsApp API for B2B lead generation?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. WhatsApp B2B lead generation works well for SaaS, fintech, and professional services companies in Gurgaon. The most common approach: CTWA (Click-to-WhatsApp) LinkedIn or Facebook ads drive prospects into a WhatsApp chatbot that qualifies budget, timeline, and company size — routing sales-ready leads to a sales rep. Get Click Media has deployed this flow for multiple Gurgaon B2B companies." },
        },
        {
          "@type": "Question",
          name: "Does WhatsApp API work for luxury real estate in Gurgaon?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — and it works particularly well. Gurgaon's high-net-worth buyers and NRI investors are highly active on WhatsApp. WhatsApp enables instant property enquiry response, virtual tour video delivery, payment milestone reminders for Rs 3-10 crore transactions, and NRI documentation support. GCM's Sell.do CRM integration is used by multiple Golf Course Road developers." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API pricing compare between Gurgaon and other cities?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp API pricing is uniform across India — the same Meta conversation rates apply in Gurgaon, Delhi, Mumbai, or any other city. Get Click Media's platform fee is also India-wide. There is no city-specific surcharge for Gurgaon." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Landmark,
    title: "Fintech and Banking",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Gurgaon houses major fintech headquarters and hundreds of fintech startups — all heavy WhatsApp API users.",
    useCase: "Loan pre-approval campaigns, insurance renewal, investment portfolio alerts, EMI collection.",
    image: "/images/rcs/banking-hero.webp",
  },
  {
    icon: Home,
    title: "Luxury Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Golf Course Road, DLF 5, and Sohna Road are among India's most expensive residential addresses.",
    useCase: "High-value buyer qualification, virtual tour delivery, NRI buyer management, payment milestone reminders.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: Briefcase,
    title: "Corporate HR and Staffing",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Gurgaon is India's HR tech capital, home to major job platforms and hundreds of RPO companies.",
    useCase: "Candidate sourcing chatbot, interview scheduling, offer letter delivery, onboarding communication.",
    image: "/images/dashboard.png",
  },
  {
    icon: Stethoscope,
    title: "Premium Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Gurgaon's premium hospital chains carry high patient expectations for responsiveness and convenience.",
    useCase: "Appointment automation, priority booking, health check package promotion, post-procedure follow-up.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Cpu,
    title: "SaaS and B2B Tech",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Gurgaon's MG Road-Golf Course Road belt houses India's highest density of SaaS companies.",
    useCase: "Product trial onboarding, renewal reminders, upsell automation, B2B support chatbot.",
    image: "/images/rcs/ecommerce-dashboard.png",
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
  { sector: "Luxury real estate developer — Golf Course Road", automation: "NRI buyer WhatsApp management + payment milestone automation", result: "NRI conversion 2.5x. Milestone payment on-time +38%." },
  { sector: "InsurTech startup — Cyber City", automation: "Policy renewal WhatsApp sequence + claims chatbot", result: "Renewal rate +28%. Claims initiation time -60%." },
  { sector: "Premium hospital — Sector 44", automation: "Appointment automation for 12 departments + health package promotion", result: "No-show -35%. Health package revenue +22%." },
  { sector: "B2B SaaS company — MG Road", automation: "Trial signup chatbot + renewal reminder + upsell flow", result: "Trial-to-paid conversion +35%. Renewal rate +28%." },
  { sector: "Staffing company — Udyog Vihar", automation: "Candidate sourcing chatbot + interview scheduling automation", result: "Time-to-shortlist -60%. Candidate NPS +25 points." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is the best WhatsApp API provider in Gurgaon?",
    a: "Get Click Media is among the most established WhatsApp API providers serving Gurgaon — as an official Meta BSP with India-based support and enterprise integration capabilities. GCM's strength in B2B WhatsApp automation and CRM integration makes it particularly suitable for Gurgaon's corporate and startup ecosystem.",
  },
  {
    q: "Can Gurgaon startups use WhatsApp API for B2B lead generation?",
    a: "Yes. WhatsApp B2B lead generation works well for SaaS, fintech, and professional services companies in Gurgaon. The most common approach: CTWA (Click-to-WhatsApp) LinkedIn or Facebook ads drive prospects into a WhatsApp chatbot that qualifies budget, timeline, and company size — routing sales-ready leads to a sales rep. Get Click Media has deployed this flow for multiple Gurgaon B2B companies.",
  },
  {
    q: "Does WhatsApp API work for luxury real estate in Gurgaon?",
    a: "Yes — and it works particularly well. Gurgaon's high-net-worth buyers and NRI investors are highly active on WhatsApp. WhatsApp enables: instant property enquiry response, virtual tour video delivery, payment milestone reminders for Rs 3-10 crore transactions, and NRI documentation support. GCM's Sell.do CRM integration is used by multiple Golf Course Road developers.",
  },
  {
    q: "How does WhatsApp API pricing compare between Gurgaon and other cities?",
    a: "WhatsApp API pricing is uniform across India — the same Meta conversation rates apply in Gurgaon, Delhi, Mumbai, or any other city. Get Click Media's platform fee is also India-wide. There is no city-specific surcharge for Gurgaon.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIGurgaonPage() {
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
              <li className="text-white font-medium">Gurgaon</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Gurgaon
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Gurgaon — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta
                Business Solution Provider. Gurgaon&apos;s startup ecosystem, corporate headquarters, luxury
                real estate market, and premium healthcare providers are the leading WhatsApp API adopters in
                the city.
                <strong className="text-white"> GCM delivers 3 to 5 day onboarding with full CRM and OMS integration.</strong>
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

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · Enterprise CRM/OMS integration · India-based support</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Gurgaon businesses — rich message preview on a phone"
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
              { value: "5,000+", label: "Tech startups headquartered in Gurgaon" },
              { value: "B2B-heavy", label: "Gurgaon's distinctive WhatsApp API profile" },
              { value: "3–5 days", label: "Onboarding timeline" },
              { value: "NCR", label: "GCM base — full Gurgaon coverage" },
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
              Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta
              Business Solution Provider. Gurgaon&apos;s startup ecosystem, corporate headquarters, luxury
              real estate market, and premium healthcare providers are the leading WhatsApp API adopters in
              the city. GCM delivers 3 to 5 day WhatsApp API onboarding for Gurgaon businesses with full CRM
              and OMS integration capabilities.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Gurgaon is India&apos;s startup capital — home to over 5,000 tech startups, hundreds of Fortune
            500 Indian headquarters (Cyber City, DLF buildings, Golf Course Road), and a high-income consumer
            base that expects digital-first engagement. The city&apos;s concentration of fintech, EdTech,
            SaaS, real estate, and premium retail makes it one of India&apos;s most active WhatsApp API
            markets.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Gurgaon&apos;s business profile is distinctly B2B-heavy — a significant proportion of WhatsApp
            API deployments in Gurgaon involve B2B lead generation, enterprise sales automation, and
            professional services communication alongside the consumer-facing applications dominant in other
            Indian cities.
          </p>
        </div>
      </section>

      {/* ── WHY GURGAON BUSINESSES CHOOSE WHATSAPP API ───────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-gurgaon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Gurgaon businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Gurgaon Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                A B2B-heavy market built for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Gurgaon&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Gurgaon report faster lead conversion,
                higher customer retention, and lower support costs compared to SMS and email alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Cpu, title: "India's startup capital", desc: "Over 5,000 tech startups headquartered in Gurgaon, running B2B WhatsApp lead generation and sales automation." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Gurgaon businesses." },
                  { icon: Building2, title: "Hundreds of corporate headquarters", desc: "Cyber City, DLF buildings, and Golf Course Road house major Indian corporate and MNC offices with high-value B2B audiences." },
                  { icon: MapPinned, title: "GCM serves Gurgaon from our NCR base", desc: "The same 3-5 day onboarding and enterprise integration depth larger providers charge a premium for." },
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
              Top Industries Using WhatsApp API in Gurgaon
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Gurgaon&apos;s corporate and startup-heavy business landscape creates a distinctive set of
              WhatsApp API use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => (
              <div key={industry.title} className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
                <div className={`h-1.5 bg-gradient-to-r ${industry.color}`} />
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={industry.image}
                    alt={`WhatsApp Business API use cases for ${industry.title} in Gurgaon`}
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

      {/* ── GCM'S WHATSAPP API SERVICE IN GURGAON ────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/rcs/rcs-service-provider-india.png"
                  alt="Get Click Media's WhatsApp Business API onboarding and enterprise integrations for Gurgaon clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Gurgaon
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Gurgaon
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media serves Gurgaon businesses from our NCR base — providing the same 3-5 day
                onboarding, India-based support, and enterprise integration capabilities that larger WhatsApp
                API providers offer at premium pricing. Gurgaon clients particularly value GCM&apos;s
                <strong className="text-gray-900"> depth in B2B WhatsApp automation and CRM integration</strong> —
                the dominant use cases for Gurgaon&apos;s corporate and startup ecosystem.
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
              Client Use Cases — Gurgaon Businesses
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
            Areas in and Around Gurgaon We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Gurgaon and the surrounding
            region. Onboarding is fully remote — we set up your WhatsApp API account without requiring any
            in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Faridabad", "Manesar", "Sohna", "Palwal", "Rewari", "Golf Course Road", "DLF Phase 1-5", "Cyber City", "Udyog Vihar", "Palam Vihar", "South City"].map((area) => (
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
              WhatsApp Business API in Gurgaon
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
              { label: "WhatsApp API Delhi", href: "/whatsapp-api-delhi" },
              { label: "WhatsApp API Noida", href: "/whatsapp-api-noida" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
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
                Ready to launch WhatsApp API for your Gurgaon business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and enterprise CRM
                integration — most Gurgaon businesses go live within 3 to 5 business days.
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
