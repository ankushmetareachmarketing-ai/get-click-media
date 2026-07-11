import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ChevronDown,
  Car,
  Code2,
  Stethoscope,
  Factory,
  GraduationCap,
  Languages,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Chennai — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business Solution Provider. 3-5 day onboarding with Tamil-language chatbot support for Chennai's automotive, IT, healthcare, and manufacturing businesses.",
  keywords:
    "WhatsApp Business API Chennai, whatsapp api provider chennai, whatsapp business api chennai, whatsapp marketing chennai, whatsapp chatbot chennai, whatsapp api tamil nadu",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-chennai" },
  openGraph: {
    title: "WhatsApp Business API in Chennai — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business Solution Provider, with Tamil-language chatbot support for Chennai businesses.",
    url: "https://getclickmedia.com/whatsapp-api-chennai",
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
      name: "WhatsApp Business API Provider in Chennai",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Chennai", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-chennai",
      description:
        "Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business Solution Provider. Chennai's automotive and manufacturing industry, IT sector, healthcare network, and Tamil Nadu's large educational institutions are the primary WhatsApp API adopters.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Chennai", item: "https://getclickmedia.com/whatsapp-api-chennai" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media support Tamil-language WhatsApp chatbots for Chennai businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. GCM's chatbot platform supports Tamil language — both understanding Tamil messages from customers and responding in Tamil. For Chennai B2C businesses (healthcare, retail, education) where customers communicate in Tamil, GCM configures bilingual chatbots that detect the customer's language and respond accordingly." },
        },
        {
          "@type": "Question",
          name: "What is WhatsApp API used for in Chennai's automotive industry?",
          acceptedAnswer: { "@type": "Answer", text: "Chennai's automotive sector uses WhatsApp API across the value chain: OEM dealer communication (spare parts availability, service campaigns, model launch announcements in Tamil), dealer-to-customer communication (service reminders, appointment booking, vehicle delivery), and manufacturing B2B (supplier order tracking, production schedule updates, payment reminders). GCM integrates with automotive DMS systems used by Chennai dealers." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API suitable for medical tourism facilitation in Chennai?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Chennai is a major medical tourism destination for patients from South Asia, Middle East, and Africa. WhatsApp API for medical tourism enables pre-arrival consultation coordination, visa and documentation assistance via chatbot, appointment scheduling for international patients, treatment plan delivery, and post-treatment follow-up. GCM configures multi-language WhatsApp flows (English, Arabic, Sinhala, Bahasa as required) for Chennai hospitals' international patient departments." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API help manufacturing companies in Chennai?",
          acceptedAnswer: { "@type": "Answer", text: "Chennai's manufacturing companies use WhatsApp for B2B communication: supplier order confirmations, production milestone updates, quality report delivery, payment reminders for distributors, and employee communication. GCM's manufacturing integration supports ERP systems common in Chennai's industrial sector." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Car,
    title: "Automotive Manufacturing",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Sriperumbudur is home to major global automotive manufacturers — Chennai is often called India's Detroit.",
    useCase: "Dealer communication automation, service reminder (Tamil), parts supply chain WhatsApp.",
    image: "/images/dashboard.png",
  },
  {
    icon: Code2,
    title: "IT and Software Services",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "OMR, also called the IT Highway, is India's second-largest IT services corridor.",
    useCase: "B2B delivery communication, employee communication, support chatbot for software products.",
    image: "/images/rcs/ecommerce-dashboard.png",
  },
  {
    icon: Stethoscope,
    title: "Healthcare and Medical Tourism",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Chennai is one of India's top medical tourism destinations, drawing patients from across South Asia and beyond.",
    useCase: "International patient coordination, appointment automation, Tamil-language patient communication.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Factory,
    title: "Manufacturing and Exports",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Factories across Chennai's suburbs — textiles, electronics, and auto parts — drive heavy B2B communication needs.",
    useCase: "B2B order tracking, supplier communication, payment reminder WhatsApp flows.",
    image: "/images/rcs/ecommerce-delivery.webp",
  },
  {
    icon: GraduationCap,
    title: "Education",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Major educational institutions across Chennai and Tamil Nadu need scalable, bilingual admissions communication.",
    useCase: "Admission chatbot (Tamil + English), fee automation, placement communication.",
    image: "/images/rcs/rcs-for-education.webp",
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
  { sector: "Automotive dealer — Anna Nagar", automation: "Service reminder (Tamil) + new model launch campaign", result: "Service retention +35%. Launch day footfall 3x." },
  { sector: "Multi-speciality hospital — OMR", automation: "Appointment automation + international patient WhatsApp coordination", result: "No-show -32%. International patient satisfaction +28 points." },
  { sector: "IT services company — Tidel Park", automation: "B2B client communication + support ticket automation", result: "Client response time -60%. Support satisfaction +22 points." },
  { sector: "Engineering college — Sriperumbudur", automation: "Tamil-language admission chatbot + fee automation", result: "Admission conversion 2.8x. Fee on-time +40%." },
  { sector: "Textile exporter — Ambattur", automation: "B2B order update + payment reminder automation", result: "Order query calls -55%. Payment default -28%." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Does Get Click Media support Tamil-language WhatsApp chatbots for Chennai businesses?",
    a: "Yes. GCM's chatbot platform supports Tamil language — both understanding Tamil messages from customers and responding in Tamil. For Chennai B2C businesses (healthcare, retail, education) where customers communicate in Tamil, GCM configures bilingual chatbots that detect the customer's language and respond accordingly.",
  },
  {
    q: "What is WhatsApp API used for in Chennai's automotive industry?",
    a: "Chennai's automotive sector uses WhatsApp API across the value chain: (1) OEM dealer communication — spare parts availability, service campaigns, model launch announcements in Tamil; (2) Dealer-to-customer — service reminders, appointment booking, vehicle delivery; (3) Manufacturing B2B — supplier order tracking, production schedule updates, payment reminders. GCM integrates with automotive DMS systems used by Chennai dealers.",
  },
  {
    q: "Is WhatsApp API suitable for medical tourism facilitation in Chennai?",
    a: "Yes. Chennai is a major medical tourism destination for patients from South Asia, Middle East, and Africa. WhatsApp API for medical tourism enables: pre-arrival consultation coordination, visa and documentation assistance via chatbot, appointment scheduling for international patients, treatment plan delivery, and post-treatment follow-up. GCM configures multi-language WhatsApp flows (English + Arabic + Sinhala + Bahasa as required) for Chennai hospitals' international patient departments.",
  },
  {
    q: "How does WhatsApp API help manufacturing companies in Chennai?",
    a: "Chennai's manufacturing companies use WhatsApp for B2B communication: supplier order confirmations, production milestone updates, quality report delivery, payment reminders for distributors, and employee communication. GCM's manufacturing integration supports ERP systems common in Chennai's industrial sector.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIChennaiPage() {
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
              <li className="text-white font-medium">Chennai</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Chennai
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Chennai — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business
                Solution Provider. Chennai&apos;s automotive and manufacturing industry, IT sector (OMR
                corridor), healthcare network, and Tamil Nadu&apos;s large educational institutions are the
                primary WhatsApp API adopters.
                <strong className="text-white"> GCM delivers 3 to 5 day onboarding with Tamil-language chatbot support.</strong>
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

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · Tamil-language chatbot support · India-based support</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Chennai businesses — rich message preview on a phone"
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
              { value: "India's Detroit", label: "Sriperumbudur automotive manufacturing cluster" },
              { value: "OMR", label: "India's second-largest IT corridor" },
              { value: "3–5 days", label: "Onboarding timeline" },
              { value: "Tamil", label: "Bilingual chatbot support" },
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
              Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business Solution
              Provider. Chennai&apos;s automotive and manufacturing industry, IT sector (OMR corridor),
              healthcare network (one of India&apos;s top medical tourism destinations), and Tamil
              Nadu&apos;s large educational institutions are the primary WhatsApp API adopters. GCM delivers 3
              to 5 day onboarding with Tamil-language chatbot support for Chennai businesses.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Chennai is South India&apos;s commercial capital and one of India&apos;s four major metros — home
            to India&apos;s second-largest IT corridor (OMR, also called the IT Highway), India&apos;s
            largest automotive manufacturing cluster (Sriperumbudur, Oragadam), and a major healthcare hub
            known for quality medical services and medical tourism.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Tamil Nadu&apos;s business culture and Chennai&apos;s consumer base are notably different from
            North India — regional language communication (Tamil) is essential for many B2C use cases, and
            the city&apos;s manufacturing and B2B heritage creates strong demand for operational WhatsApp API
            deployments beyond consumer marketing.
          </p>
        </div>
      </section>

      {/* ── WHY CHENNAI BUSINESSES CHOOSE WHATSAPP API ───────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-chennai">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Chennai businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Chennai Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                A manufacturing-and-B2B-heavy market built for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Chennai&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Chennai report faster lead
                conversion, higher customer retention, and lower support costs compared to SMS and email
                alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Car, title: "India's largest automotive manufacturing cluster", desc: "Sriperumbudur and Oragadam anchor a deep OEM-to-dealer-to-customer WhatsApp communication chain." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Chennai businesses." },
                  { icon: Languages, title: "Tamil-language chatbot support", desc: "Regional language communication is essential for Chennai's B2C use cases — GCM configures bilingual Tamil/English flows." },
                  { icon: MapPinned, title: "Strong B2B and manufacturing heritage", desc: "Chennai's operational WhatsApp API deployments go well beyond consumer marketing into supply chain and export communication." },
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
              Top Industries Using WhatsApp API in Chennai
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Chennai&apos;s manufacturing and B2B-heavy business landscape creates a distinctive set of
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
                    alt={`WhatsApp Business API use cases for ${industry.title} in Chennai`}
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

      {/* ── GCM'S WHATSAPP API SERVICE IN CHENNAI ────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/rcs/ecommerce-why-rcs.png"
                  alt="Get Click Media's WhatsApp Business API onboarding and Tamil-language chatbot support for Chennai clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Chennai
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Chennai
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media serves Chennai businesses remotely — providing WhatsApp API with
                <strong className="text-gray-900"> Tamil-language chatbot support</strong>, essential for B2C
                communication with Chennai&apos;s Tamil-speaking consumer base. GCM&apos;s multilingual
                chatbot capability and manufacturing sector integration experience make it particularly
                suitable for Chennai&apos;s automotive and industrial clients.
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
              Client Use Cases — Chennai Businesses
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
            Areas in and Around Chennai We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Chennai and the surrounding
            region. Onboarding is fully remote — we set up your WhatsApp API account without requiring any
            in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Tambaram", "Sriperumbudur", "Oragadam", "Mahindra City", "OMR", "ECR", "Perambur", "Ambattur", "Avadi", "Sholinganallur", "Coimbatore", "Madurai"].map((area) => (
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
              WhatsApp Business API in Chennai
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
              { label: "WhatsApp API Hyderabad", href: "/whatsapp-api-hyderabad" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "WhatsApp API for Automobile", href: "/whatsapp-api-automobile" },
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
                Ready to launch WhatsApp API for your Chennai business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and Tamil-language
                chatbot setup — fully remote, no in-person visit required.
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
