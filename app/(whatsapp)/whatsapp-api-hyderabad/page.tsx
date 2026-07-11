import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ChevronDown,
  Building2,
  Code2,
  Pill,
  Home,
  Stethoscope,
  Gem,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Hyderabad — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business Solution Provider. 3-5 day onboarding for Hyderabad's IT, pharma, real estate, and healthcare businesses across HITEC City, Gachibowli, and beyond.",
  keywords:
    "WhatsApp Business API Hyderabad, whatsapp api provider hyderabad, whatsapp business api hyderabad, whatsapp marketing hyderabad, whatsapp chatbot hyderabad, whatsapp api telangana",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-hyderabad" },
  openGraph: {
    title: "WhatsApp Business API in Hyderabad — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business Solution Provider with 3-5 day onboarding for Hyderabad's tech-heavy business ecosystem.",
    url: "https://getclickmedia.com/whatsapp-api-hyderabad",
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
      name: "WhatsApp Business API Provider in Hyderabad",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Hyderabad", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-hyderabad",
      description:
        "Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business Solution Provider. Hyderabad's IT and pharma industries, real estate market, and healthcare sector are the primary WhatsApp API adopters in the city.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Hyderabad", item: "https://getclickmedia.com/whatsapp-api-hyderabad" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media serve Hyderabad businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media provides WhatsApp Business API across Hyderabad and Secunderabad — covering HITEC City, Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Shamshabad, and old Hyderabad. All onboarding is remote with no requirement for in-person meetings." },
        },
        {
          "@type": "Question",
          name: "What WhatsApp API use cases are most common for Hyderabad's pharmaceutical companies?",
          acceptedAnswer: { "@type": "Answer", text: "Pharmaceutical companies in Hyderabad use WhatsApp API for patient medication adherence reminders, pharmacy order management (prescription refill alerts), clinical trial participant communication, and HCP (healthcare professional) engagement for detailing and product launches. GCM implements DPDP-compliant patient communication flows for pharma clients." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API help real estate developers in Hyderabad's HITEC City corridor?",
          acceptedAnswer: { "@type": "Answer", text: "HITEC City's rapid real estate growth generates thousands of monthly enquiries from IT professionals. WhatsApp chatbot responds instantly to portal leads, qualifies budget and possession timeline, and books site visits. The tech-savvy buyer segment in HITEC City has above-average WhatsApp engagement rates — making it an ideal channel for property communication." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API cost-effective for small Hyderabad businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. For small businesses with modest message volumes, WhatsApp API is very affordable. Service conversations — where the customer messages first — are free for the first 1,000 per month. Utility conversations cost Rs 0.14-0.17 each. For a local Hyderabad business sending 500 messages per month, total Meta charges might be Rs 500-800. GCM's Starter plan is designed for small businesses." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Code2,
    title: "IT and Technology",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "HITEC City and Gachibowli house major global tech companies plus thousands of IT service companies.",
    useCase: "B2B sales chatbot, client project updates, IT support automation, developer community engagement.",
    image: "/images/rcs/banking-dashboard.webp",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Genome Valley is India's pharma hub, home to major domestic pharmaceutical manufacturers.",
    useCase: "Patient adherence communication, pharmacy order management, clinical trial participant communication.",
    image: "/images/industries/finance.webp",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "The HITEC City corridor, Gachibowli, and Shamshabad are seeing rapid commercial and residential growth.",
    useCase: "Lead qualification, site visit automation, payment milestone communication.",
    image: "/images/rcs/rcs-for-real-estate.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Major hospital groups in Hyderabad need appointment and reporting workflows that scale beyond phone coordination.",
    useCase: "Appointment management, lab report delivery, patient follow-up automation.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Gem,
    title: "Jewellery and Traditional Retail",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Laad Bazaar and Abids are major traditional retail hubs with loyal, high-frequency customer bases.",
    useCase: "Festive campaigns, loyalty updates, product availability alerts, special occasion offers.",
    image: "/images/industries/fashion.webp",
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
  { sector: "IT services company — HITEC City", automation: "B2B lead qualification chatbot + client communication automation", result: "Demo bookings +50%. Client NPS +18 points." },
  { sector: "Pharma company — Genome Valley", automation: "Patient medication reminder + pharmacy order management", result: "Adherence rate +32%. Pharmacy reorder +28%." },
  { sector: "Real estate developer — Gachibowli", automation: "Lead qualification + payment milestone automation for IT corridor projects", result: "Site visit conversion 3x. Payment default -30%." },
  { sector: "Multi-speciality hospital — Banjara Hills", automation: "Appointment automation for 15 departments", result: "No-show -38%. Department utilisation +22%." },
  { sector: "Jewellery chain — Abids", automation: "Festive campaign + new collection alert + loyalty programme", result: "Festive revenue 2.8x. Loyalty engagement +55%." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Does Get Click Media serve Hyderabad businesses?",
    a: "Yes. Get Click Media provides WhatsApp Business API across Hyderabad and Secunderabad — covering HITEC City, Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Shamshabad, and old Hyderabad. All onboarding is remote with no requirement for in-person meetings.",
  },
  {
    q: "What WhatsApp API use cases are most common for Hyderabad's pharmaceutical companies?",
    a: "Pharmaceutical companies in Hyderabad use WhatsApp API for: patient medication adherence reminders, pharmacy order management (prescription refill alerts), clinical trial participant communication, and HCP (healthcare professional) engagement for detailing and product launches. GCM implements DPDP-compliant patient communication flows for pharma clients.",
  },
  {
    q: "How does WhatsApp API help real estate developers in Hyderabad's HITEC City corridor?",
    a: "HITEC City's rapid real estate growth generates thousands of monthly enquiries from IT professionals. WhatsApp chatbot responds instantly to portal leads, qualifies budget and possession timeline, and books site visits. The tech-savvy buyer segment in HITEC City has above-average WhatsApp engagement rates — making it an ideal channel for property communication.",
  },
  {
    q: "Is WhatsApp API cost-effective for small Hyderabad businesses?",
    a: "Yes. For small businesses with modest message volumes, WhatsApp API is very affordable. Service conversations — where the customer messages first — are free for the first 1,000 per month. Utility conversations (transactional notifications) cost Rs 0.14-0.17 each. For a local Hyderabad business sending 500 messages per month, total Meta charges might be Rs 500-800. GCM's Starter plan is designed for small businesses.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIHyderabadPage() {
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
              <li className="text-white font-medium">Hyderabad</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Hyderabad
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Hyderabad — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business
                Solution Provider. Hyderabad&apos;s IT and pharma industries, real estate market (HITEC City
                to Shamshabad corridor), and healthcare sector are the primary WhatsApp API adopters in the
                city.
                <strong className="text-white"> GCM delivers 3 to 5 day onboarding with integration support.</strong>
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

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · HITEC City to Shamshabad coverage · India-based support</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Hyderabad businesses — rich message preview on a phone"
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
              { value: "#2", label: "India's second-fastest-growing tech city" },
              { value: "Genome Valley", label: "India's pharmaceutical hub" },
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
              Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business
              Solution Provider. Hyderabad&apos;s IT and pharma industries, real estate market (HITEC City to
              Shamshabad corridor), and healthcare sector are the primary WhatsApp API adopters in the city.
              GCM delivers 3 to 5 day onboarding with integration support for Hyderabad&apos;s tech-heavy
              business ecosystem.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Hyderabad is India&apos;s second-fastest-growing tech city — HITEC City, Gachibowli, and Madhapur
            form a major IT corridor housing Microsoft India, Google India, Amazon, and thousands of IT
            companies. The city is also India&apos;s pharmaceutical hub (Genome Valley) and home to a rapidly
            growing startup ecosystem.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Hyderabad&apos;s dual identity — traditional commerce in the old city (Charminar, Laad Bazaar) and
            modern tech in HITEC City — creates diverse WhatsApp API use cases from luxury real estate
            communication to pharma patient engagement and IT B2B sales automation.
          </p>
        </div>
      </section>

      {/* ── WHY HYDERABAD BUSINESSES CHOOSE WHATSAPP API ─────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-hyderabad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Hyderabad businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Hyderabad Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                A dual-identity market built for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Hyderabad&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Hyderabad report faster lead
                conversion, higher customer retention, and lower support costs compared to SMS and email
                alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Code2, title: "Major IT and pharma hub", desc: "HITEC City's global tech companies and Genome Valley's pharma majors both run at-scale WhatsApp deployments." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Hyderabad businesses." },
                  { icon: Building2, title: "Dual traditional and modern economy", desc: "From Laad Bazaar's traditional retail to HITEC City's B2B tech sales — WhatsApp adapts to both ends of Hyderabad's business spectrum." },
                  { icon: MapPinned, title: "Fully remote onboarding", desc: "GCM delivers the same enterprise-grade WhatsApp API capabilities to Hyderabad clients with zero in-person meetings required." },
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
              Top Industries Using WhatsApp API in Hyderabad
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Hyderabad&apos;s diverse business landscape creates a wide range of WhatsApp API use cases
              across sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => (
              <div key={industry.title} className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
                <div className={`h-1.5 bg-gradient-to-r ${industry.color}`} />
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={industry.image}
                    alt={`WhatsApp Business API use cases for ${industry.title} in Hyderabad`}
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

      {/* ── GCM'S WHATSAPP API SERVICE IN HYDERABAD ──────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/rcs/ecommerce-why-rcs.webp"
                  alt="Get Click Media's WhatsApp Business API onboarding and integration support for Hyderabad clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Hyderabad
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Hyderabad
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media serves Hyderabad businesses remotely from our NCR headquarters — providing
                the same enterprise-grade WhatsApp API capabilities and integration depth that
                Hyderabad&apos;s tech-heavy businesses require. GCM&apos;s platform is trusted by
                <strong className="text-gray-900"> HITEC City IT companies for B2B automation</strong> and by
                Hyderabad&apos;s pharmaceutical companies for patient engagement communication.
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
              Client Use Cases — Hyderabad Businesses
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
            Areas in and Around Hyderabad We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Hyderabad and the
            surrounding region. Onboarding is fully remote — we set up your WhatsApp API account without
            requiring any in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Secunderabad", "HITEC City", "Gachibowli", "Madhapur", "Banjara Hills", "Jubilee Hills", "Kondapur", "Kukatpally", "Miyapur", "LB Nagar", "Shamshabad", "Warangal"].map((area) => (
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
              WhatsApp Business API in Hyderabad
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
              { label: "WhatsApp API Bangalore", href: "/whatsapp-api-bangalore" },
              { label: "WhatsApp API Chennai", href: "/whatsapp-api-chennai" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
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
                Ready to launch WhatsApp API for your Hyderabad business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and onboarding —
                fully remote, tailored to Hyderabad&apos;s IT and pharma-heavy business ecosystem.
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
