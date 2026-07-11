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
  GraduationCap,
  Factory,
  Cpu,
  Users,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Noida — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media is headquartered in Noida, Uttar Pradesh, and provides WhatsApp Business API as an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway corridor. Same-day consultation, 3-5 day onboarding.",
  keywords:
    "WhatsApp Business API Noida, whatsapp api provider noida, whatsapp business api noida, whatsapp marketing noida, whatsapp chatbot noida, whatsapp api service noida up",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-noida" },
  openGraph: {
    title: "WhatsApp Business API in Noida — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media is headquartered in Noida and provides WhatsApp Business API as an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway corridor.",
    url: "https://getclickmedia.com/whatsapp-api-noida",
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
      name: "WhatsApp Business API Provider in Noida",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Noida", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-noida",
      description:
        "Get Click Media is headquartered in Noida, Uttar Pradesh, and provides WhatsApp Business API as an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway corridor.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Noida", item: "https://getclickmedia.com/whatsapp-api-noida" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Get Click Media based in Noida?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media is headquartered in Noida, Uttar Pradesh — making us the closest WhatsApp API provider for Noida businesses. We offer in-person consultations at our Noida office and remote onboarding for businesses anywhere in the region." },
        },
        {
          "@type": "Question",
          name: "What is WhatsApp Business API and how does it help Noida businesses?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp Business API is Meta's enterprise messaging platform — it allows businesses to send automated messages, run chatbots, integrate with CRM systems, and broadcast to opted-in customers at scale. Noida businesses use it most commonly for real estate lead management, EdTech admission automation, IT support workflows, and e-commerce order communication." },
        },
        {
          "@type": "Question",
          name: "Does Get Click Media serve Greater Noida and Yamuna Expressway businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. GCM serves the entire Noida-Greater Noida-Yamuna Expressway corridor including Sectors 1-168 (Noida), Alpha, Beta, Gamma, Delta sectors (Greater Noida), Pari Chowk, Knowledge Park, and the Yamuna Expressway development zones." },
        },
        {
          "@type": "Question",
          name: "What WhatsApp API integrations are most common for Noida's IT companies?",
          acceptedAnswer: { "@type": "Answer", text: "Noida IT companies most commonly use WhatsApp API for B2B lead qualification chatbots, client communication and project update automation, support ticket routing and resolution, and internal HR notifications such as leave approval, attendance, and payslip delivery. GCM provides pre-built integrations for common SaaS CRMs used by Noida IT companies." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Cpu,
    title: "IT and Tech Services",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Noida's Sector 62-63-125 IT corridor houses thousands of IT companies and startups using WhatsApp for B2B lead generation and client communication.",
    useCase: "Sales lead qualification chatbot, support ticket WhatsApp integration, SaaS trial signup flows.",
    image: "/images/rcs/ecommerce-dashboard.png",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Noida Expressway and Greater Noida are India's most active real estate development corridors.",
    useCase: "Instant lead qualification from portals, site visit automation, payment milestone reminders for under-construction projects.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: GraduationCap,
    title: "EdTech and Coaching",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Major national EdTech companies (Noida HQ) and coaching institutes in Sector 2, 4, 10 need scalable admission and fee workflows.",
    useCase: "Admission chatbot, fee collection, course progress automation.",
    image: "/images/industries/edtech.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Noida's major hospital groups need appointment and reporting workflows that scale beyond phone-based coordination.",
    useCase: "Appointment management, lab report delivery, telemedicine booking.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Factory,
    title: "Manufacturing and Export",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Noida's SEZ and manufacturing zones produce significant B2B communication requirements across vendors and distributors.",
    useCase: "Vendor communication, order tracking, payment reminders for manufacturing clients.",
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
  { sector: "PropTech startup — Sector 125", automation: "WhatsApp lead qualification + Sell.do CRM integration for Noida Expressway project leads", result: "Lead qualification time: 2 days to 4 minutes. Site visit rate 3x." },
  { sector: "IT services company — Sector 62", automation: "WhatsApp chatbot for B2B demo booking and support ticket routing", result: "Demo booking +45%. Support tickets routed instantly 24/7." },
  { sector: "Coaching institute — Sector 2", automation: "Admission chatbot + fee reminder + exam notification for JEE/NEET preparation", result: "Admission conversion 2.8x. Fee on-time payment +38%." },
  { sector: "Multi-speciality clinic — Sector 18", automation: "Appointment automation + prescription reminders", result: "No-show -32%. Prescription compliance +28%." },
  { sector: "E-commerce warehouse — Noida Expressway", automation: "Order notification + delivery tracking WhatsApp automation", result: "Support call volume -55%. Delivery success +28%." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is Get Click Media based in Noida?",
    a: "Yes. Get Click Media is headquartered in Noida, Uttar Pradesh — making us the closest WhatsApp API provider for Noida businesses. We offer in-person consultations at our Noida office and remote onboarding for businesses anywhere in the region.",
  },
  {
    q: "What is WhatsApp Business API and how does it help Noida businesses?",
    a: "WhatsApp Business API is Meta's enterprise messaging platform — it allows businesses to send automated messages, run chatbots, integrate with CRM systems, and broadcast to opted-in customers at scale. Noida businesses use it most commonly for real estate lead management, EdTech admission automation, IT support workflows, and e-commerce order communication.",
  },
  {
    q: "Does Get Click Media serve Greater Noida and Yamuna Expressway businesses?",
    a: "Yes. GCM serves the entire Noida-Greater Noida-Yamuna Expressway corridor including Sectors 1-168 (Noida), Alpha, Beta, Gamma, Delta sectors (Greater Noida), Pari Chowk, Knowledge Park, and the Yamuna Expressway development zones.",
  },
  {
    q: "What WhatsApp API integrations are most common for Noida's IT companies?",
    a: "Noida IT companies most commonly use WhatsApp API for: (1) B2B lead qualification chatbot for incoming enquiries, (2) client communication and project update automation, (3) support ticket routing and resolution, and (4) internal HR notifications (leave approval, attendance, payslip delivery). GCM provides pre-built integrations for common SaaS CRMs used by Noida IT companies.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPINoidaPage() {
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
              <li className="text-white font-medium">Noida</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Noida
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Noida — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media is headquartered in Noida, Uttar Pradesh, and provides WhatsApp Business API
                as an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway
                corridor. Noida businesses in IT services, real estate, EdTech, healthcare, and manufacturing
                use GCM&apos;s WhatsApp API for lead generation, customer communication, and automation.
                <strong className="text-white"> Same-day consultation available. Onboarding in 3 to 5 business days.</strong>
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

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · Headquartered in Noida · Same-day consultation</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Noida businesses — rich message preview on a phone"
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
              { value: "100+", label: "Noida-based businesses served" },
              { value: "Sector 62", label: "India's second-largest IT corridor" },
              { value: "3–5 days", label: "Onboarding timeline" },
              { value: "Noida", label: "GCM headquarters — same-city support" },
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
              Get Click Media is headquartered in Noida, Uttar Pradesh, and provides WhatsApp Business API as
              an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway
              corridor. Noida businesses in IT services, real estate, EdTech, healthcare, and manufacturing
              use GCM&apos;s WhatsApp API for lead generation, customer communication, and automation.
              Same-day consultation available. Onboarding in 3 to 5 business days.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Noida is the fastest-growing commercial hub in the Delhi NCR region — home to India&apos;s
            second-largest IT corridor (Sectors 62, 63, 125, 132), major real estate developments along the
            Expressway, and a booming EdTech and startup ecosystem. The city&apos;s tech-savvy business
            population and high smartphone penetration make WhatsApp Business API adoption particularly high.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Get Click Media&apos;s Noida headquarters makes it the closest WhatsApp API provider to
            businesses in Sectors 18, 62, 63, 125, 132, and the Greater Noida-Yamuna Expressway belt. Clients
            in Noida benefit from same-city support and faster onboarding consultations.
          </p>
        </div>
      </section>

      {/* ── WHY NOIDA BUSINESSES CHOOSE WHATSAPP API ─────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-noida">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Noida businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Noida Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                A tech-forward market built for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Noida&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Noida report faster lead conversion,
                higher customer retention, and lower support costs compared to SMS and email alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Cpu, title: "India's second-largest IT corridor", desc: "Sectors 62, 63, 125, and 132 house thousands of IT companies and startups running B2B WhatsApp workflows." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Noida businesses." },
                  { icon: Building2, title: "Fastest-growing NCR commercial hub", desc: "Major real estate development, EdTech, and startup activity across the Expressway and Greater Noida corridor." },
                  { icon: MapPinned, title: "GCM is headquartered right here in Noida", desc: "Same-city account management and in-person onboarding consultations at our Noida office." },
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
              Top Industries Using WhatsApp API in Noida
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Noida&apos;s diverse business landscape creates a wide range of WhatsApp API use cases across
              sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => (
              <div key={industry.title} className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
                <div className={`h-1.5 bg-gradient-to-r ${industry.color}`} />
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={industry.image}
                    alt={`WhatsApp Business API use cases for ${industry.title} in Noida`}
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

      {/* ── GCM'S WHATSAPP API SERVICE IN NOIDA ──────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/video/whatsapp-bussiness-api.png"
                  alt="Get Click Media's WhatsApp Business API onboarding and support for Noida clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Noida
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Noida
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media is based in Noida, Uttar Pradesh — making us the most accessible WhatsApp API
                provider for Noida businesses. Our team has delivered WhatsApp API solutions to
                <strong className="text-gray-900"> 100+ Noida-based businesses</strong> across IT, real
                estate, EdTech, and healthcare. In-person consultations are available at our Noida office. We
                understand the specific business context of Noida&apos;s Expressway real estate market,
                Sector 62-63 IT corridor, and the Greater Noida industrial zone.
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
              Client Use Cases — Noida Businesses
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
            Areas in and Around Noida We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Noida and the surrounding
            region. Onboarding is fully remote — we set up your WhatsApp API account without requiring any
            in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Greater Noida", "Sector 62", "Sector 63", "Sector 125", "Sector 132", "Yamuna Expressway", "Knowledge Park", "Pari Chowk", "Dadri", "Ghaziabad", "Indirapuram", "Vaishali"].map((area) => (
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
              WhatsApp Business API in Noida
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
              { label: "WhatsApp API Gurgaon", href: "/whatsapp-api-gurgaon" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
              { label: "WhatsApp API for Logistics", href: "/whatsapp-api-logistics" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
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
                Ready to launch WhatsApp API for your Noida business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and onboarding —
                same-day consultations available at our Noida office.
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
