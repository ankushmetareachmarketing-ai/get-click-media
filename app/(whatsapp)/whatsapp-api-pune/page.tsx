import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ChevronDown,
  Code2,
  Car,
  GraduationCap,
  Stethoscope,
  Home,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Pune — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution Provider. 3-5 day onboarding with Salesforce, HubSpot, and custom CRM integrations for Pune's IT, automotive, education, and healthcare businesses.",
  keywords:
    "WhatsApp Business API Pune, whatsapp api provider pune, whatsapp business api pune, whatsapp marketing pune, whatsapp chatbot pune, whatsapp api service pune maharashtra",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-pune" },
  openGraph: {
    title: "WhatsApp Business API in Pune — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution Provider, with 3-5 day onboarding for Pune's IT, automotive, education, and healthcare businesses.",
    url: "https://getclickmedia.com/whatsapp-api-pune",
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
      name: "WhatsApp Business API Provider in Pune",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Pune", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-pune",
      description:
        "Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution Provider. Pune's IT and manufacturing industries, education sector, real estate growth, and healthcare network are the primary WhatsApp API segments in the city.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Pune", item: "https://getclickmedia.com/whatsapp-api-pune" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media offer WhatsApp API in Pune?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media provides WhatsApp Business API across Pune including Hinjewadi, Magarpatta, Kharadi, Wakad, Baner, Koregaon Park, Viman Nagar, Kothrud, and Pimpri-Chinchwad. All onboarding is remote — no in-person requirement." },
        },
        {
          "@type": "Question",
          name: "What are the most common WhatsApp API use cases for Pune's IT companies?",
          acceptedAnswer: { "@type": "Answer", text: "Pune's IT companies use WhatsApp API most commonly for B2B lead qualification (chatbot on website or CTWA ads), candidate sourcing and interview scheduling for HR, client project milestone updates, and employee communication (leave approval, attendance, payslip). GCM integrates with Salesforce, HubSpot, and Zoho — the CRM platforms most used by Pune IT companies." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API benefit automotive dealers in Pune?",
          acceptedAnswer: { "@type": "Answer", text: "Pune's automotive dealers (two-wheelers and four-wheelers — Chakan is India's automotive hub) use WhatsApp for test drive booking, service reminders, new model launch campaigns, and vehicle delivery notifications. GCM's DMS integration connects with Automate and custom dealer management systems common in Pune's automotive dealerships." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API used by Pune's educational institutions?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — Pune's high density of engineering colleges, MBA institutions, and coaching institutes makes education one of the top WhatsApp API use cases in the city. Admission chatbot, fee reminders, exam schedule, and campus placement notifications via WhatsApp are common GCM deployments for Pune educational institutions." },
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
    why: "Hinjewadi, Magarpatta, and Kharadi form major IT corridors housing global tech companies and hundreds more.",
    useCase: "B2B sales automation, support chatbot, HR communication, client project updates.",
    image: "/images/rcs/banking-dashboard.webp",
  },
  {
    icon: Car,
    title: "Automotive and Manufacturing",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Chakan and Pimpri-Chinchwad anchor India's automotive manufacturing corridor.",
    useCase: "Dealer communication, service reminder, parts inventory alerts, B2B supplier communication.",
    image: "/images/dashboard.png",
  },
  {
    icon: GraduationCap,
    title: "Education",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Pune has the highest engineering college density in India, alongside major universities and MBA institutions.",
    useCase: "Admission automation, fee reminders, exam notifications, campus placement WhatsApp flows.",
    image: "/images/rcs/education-hero.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Pune's major hospital groups need appointment and reporting workflows that scale beyond phone coordination.",
    useCase: "Appointment management, health check promotions, post-procedure follow-up.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Hinjewadi, Wakad, and Baner are seeing rapid residential development to house the growing IT workforce.",
    useCase: "Lead qualification, site visit booking, payment milestone communication.",
    image: "/images/rcs/real-estate-why-rcs.webp",
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
  { sector: "IT company — Hinjewadi", automation: "B2B lead qualification chatbot + Salesforce integration", result: "MQL-to-SQL 2.5x. Sales cycle -25%." },
  { sector: "Automotive dealer — Pimpri-Chinchwad", automation: "Test drive automation + service reminder", result: "Test drive +2.8x. Service retention +32%." },
  { sector: "Engineering college — Shivajinagar", automation: "Admission chatbot + fee collection + placement notification", result: "Admission conversion 3x. Fee on-time +40%." },
  { sector: "Multi-speciality hospital — Baner", automation: "Appointment automation + health check campaigns", result: "No-show -35%. Package revenue +28%." },
  { sector: "D2C startup — Koregaon Park", automation: "Cart recovery + festive campaign + loyalty", result: "Cart recovery 22%. Repeat purchase +35%." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Does Get Click Media offer WhatsApp API in Pune?",
    a: "Yes. Get Click Media provides WhatsApp Business API across Pune including Hinjewadi, Magarpatta, Kharadi, Wakad, Baner, Koregaon Park, Viman Nagar, Kothrud, and Pimpri-Chinchwad. All onboarding is remote — no in-person requirement.",
  },
  {
    q: "What are the most common WhatsApp API use cases for Pune's IT companies?",
    a: "Pune's IT companies use WhatsApp API most commonly for: B2B lead qualification (chatbot on website or CTWA ads), candidate sourcing and interview scheduling for HR, client project milestone updates, and employee communication (leave approval, attendance, payslip). GCM integrates with Salesforce, HubSpot, and Zoho — the CRM platforms most used by Pune IT companies.",
  },
  {
    q: "How does WhatsApp API benefit automotive dealers in Pune?",
    a: "Pune's automotive dealers (two-wheelers and four-wheelers — Chakan is India's automotive hub) use WhatsApp for test drive booking, service reminders, new model launch campaigns, and vehicle delivery notifications. GCM's DMS integration connects with Automate and custom dealer management systems common in Pune's automotive dealerships.",
  },
  {
    q: "Is WhatsApp API used by Pune's educational institutions?",
    a: "Yes — Pune's high density of engineering colleges, MBA institutions (Symbiosis, IIPM Pune), and coaching institutes makes education one of the top WhatsApp API use cases in the city. Admission chatbot, fee reminders, exam schedule, and campus placement notifications via WhatsApp are common GCM deployments for Pune educational institutions.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIPunePage() {
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
              <li className="text-white font-medium">Pune</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Pune
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Pune — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution
                Provider. Pune&apos;s IT and manufacturing industries, education sector, real estate growth,
                and healthcare network are the primary WhatsApp API segments in the city.
                <strong className="text-white"> GCM delivers 3 to 5 day onboarding with Salesforce, HubSpot, and custom CRM integrations.</strong>
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

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · Salesforce &amp; HubSpot ready · India-based support</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Pune businesses — rich message preview on a phone"
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
              { value: "#1", label: "Highest engineering college density in India" },
              { value: "3 corridors", label: "Hinjewadi, Magarpatta, Kharadi IT hubs" },
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
              Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution
              Provider. Pune&apos;s IT and manufacturing industries, education sector (home to India&apos;s
              highest density of engineering colleges), real estate growth, and healthcare network are the
              primary WhatsApp API segments in the city. GCM delivers 3 to 5 day onboarding for Pune
              businesses with Salesforce, HubSpot, and custom CRM integrations.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Pune is Maharashtra&apos;s second-largest city and one of India&apos;s fastest-growing IT
            destinations — with Hinjewadi, Magarpatta, and Kharadi forming major IT corridors housing TCS,
            Infosys, Wipro, and hundreds of tech companies. The city is also India&apos;s automotive hub
            (Chakan, Pimpri-Chinchwad) and has the highest density of engineering and management colleges in
            any Indian city.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Pune&apos;s cosmopolitan, educated, and digitally active population makes it an ideal market for
            WhatsApp Business API — consumer engagement rates in Pune consistently match or exceed Mumbai and
            Bangalore for equivalent campaigns.
          </p>
        </div>
      </section>

      {/* ── WHY PUNE BUSINESSES CHOOSE WHATSAPP API ──────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-pune">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Pune businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Pune Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                A cosmopolitan, education-driven market for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Pune&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Pune report faster lead conversion,
                higher customer retention, and lower support costs compared to SMS and email alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Code2, title: "Major IT and automotive hub", desc: "Hinjewadi, Magarpatta, and Kharadi's IT corridors alongside Chakan and Pimpri-Chinchwad's automotive manufacturing base drive heavy WhatsApp adoption." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Pune businesses." },
                  { icon: GraduationCap, title: "India's highest engineering college density", desc: "COEP, PICT, Symbiosis, and Pune University drive one of the country's largest EdTech and admissions WhatsApp use cases." },
                  { icon: MapPinned, title: "Fully remote onboarding", desc: "GCM delivers the same enterprise-grade WhatsApp API capabilities to Pune clients with zero in-person meetings required." },
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
              Top Industries Using WhatsApp API in Pune
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Pune&apos;s diverse business landscape creates a wide range of WhatsApp API use cases across
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
                    alt={`WhatsApp Business API use cases for ${industry.title} in Pune`}
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

      {/* ── GCM'S WHATSAPP API SERVICE IN PUNE ───────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/rcs/education-why-rcs.webp"
                  alt="Get Click Media's WhatsApp Business API onboarding and CRM integrations for Pune clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Pune
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Pune
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media provides WhatsApp API to Pune businesses remotely — full onboarding without
                in-person requirement. Pune&apos;s IT companies appreciate GCM&apos;s
                <strong className="text-gray-900"> developer-friendly API, comprehensive documentation, and
                pre-built integrations with Salesforce and HubSpot</strong> — the dominant CRM platforms in
                Pune&apos;s enterprise IT market.
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
              Client Use Cases — Pune Businesses
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
            Areas in and Around Pune We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Pune and the surrounding
            region. Onboarding is fully remote — we set up your WhatsApp API account without requiring any
            in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Hinjewadi", "Magarpatta", "Kharadi", "Wakad", "Baner", "Viman Nagar", "Kothrud", "Pimpri", "Chinchwad", "Chakan", "Lonavala", "Nashik", "Satara"].map((area) => (
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
              WhatsApp Business API in Pune
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
              { label: "WhatsApp API Mumbai", href: "/whatsapp-api-mumbai" },
              { label: "WhatsApp API Bangalore", href: "/whatsapp-api-bangalore" },
              { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
              { label: "WhatsApp API for Automobile", href: "/whatsapp-api-automobile" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
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
                Ready to launch WhatsApp API for your Pune business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and CRM
                integration — fully remote, no in-person visit required.
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
