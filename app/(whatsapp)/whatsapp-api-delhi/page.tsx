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
  ShoppingBag,
  Truck,
  Users,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Delhi — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution Provider. 3-5 day onboarding, India-based support from Noida, and full Delhi NCR coverage for retail, healthcare, real estate, EdTech, and financial services.",
  keywords:
    "WhatsApp Business API Delhi, whatsapp api provider delhi, whatsapp business api delhi ncr, whatsapp marketing services delhi, whatsapp chatbot delhi, whatsapp api cost delhi",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-delhi" },
  openGraph: {
    title: "WhatsApp Business API in Delhi — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution Provider, with onboarding in 3-5 business days and full Delhi NCR coverage.",
    url: "https://getclickmedia.com/whatsapp-api-delhi",
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
      name: "WhatsApp Business API Provider in Delhi",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Delhi", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-delhi",
      description:
        "Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution Provider. Delhi businesses use GCM's WhatsApp API for lead generation, customer support automation, and marketing campaigns.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "Delhi", item: "https://getclickmedia.com/whatsapp-api-delhi" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Get Click Media available in Delhi?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media is headquartered in Noida and serves the entire Delhi NCR region. Onboarding is fully remote — you can start from anywhere in Delhi. For clients who prefer an in-person consultation, our Noida office is 30 minutes from most Delhi locations." },
        },
        {
          "@type": "Question",
          name: "What is the cost of WhatsApp Business API for a Delhi business?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp API pricing is the same across India. Meta charges marketing conversations at Rs 0.79-0.91 each, utility conversations at Rs 0.14-0.17 each, with the first 1,000 service conversations free per month. Get Click Media charges a platform fee based on your volume. Contact us for a custom quote for your Delhi business." },
        },
        {
          "@type": "Question",
          name: "How quickly can a Delhi business go live on WhatsApp API?",
          acceptedAnswer: { "@type": "Answer", text: "3 to 5 business days with Get Click Media managing the setup. The timeline depends on Meta's business verification (1-3 days) and template approval (1-3 days), which run in parallel — most Delhi businesses go live within 4 days." },
        },
        {
          "@type": "Question",
          name: "Which industries in Delhi use WhatsApp API the most?",
          acceptedAnswer: { "@type": "Answer", text: "Real estate (Delhi NCR property developers and brokers), EdTech and coaching institutes, healthcare (hospital chains and clinics), retail (Chandni Chowk, Karol Bagh, Lajpat Nagar traders), and NBFCs and microfinance companies." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Delhi NCR is India's largest real estate market. Property enquiry volumes from portals are massive — a WhatsApp chatbot qualifies and routes leads instantly.",
    useCase: "Builders and brokers across Delhi NCR use WhatsApp for instant lead response and site visit booking.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Delhi has 50+ major hospital groups. Appointment management at this scale requires WhatsApp automation.",
    useCase: "Appointment reminders, lab report delivery, and prescription refills — all automated via WhatsApp.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: GraduationCap,
    title: "EdTech and Coaching",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Delhi is India's coaching capital (Karol Bagh, Rajinder Nagar, Mukherjee Nagar), with 1,000+ admission enquiries per institute daily.",
    useCase: "Instant admission chatbot, fee reminders, and exam schedules — GCM's most common Delhi use case.",
    image: "/images/industries/edtech.webp",
  },
  {
    icon: ShoppingBag,
    title: "Retail and Fashion",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Chandni Chowk, Karol Bagh, and Lajpat Nagar are major retail hubs with lakhs of customer touchpoints.",
    useCase: "Festive sale campaigns, loyalty updates, and new arrival alerts — a 3x footfall lift reported by Delhi retail clients.",
    image: "/images/industries/fashion.webp",
  },
  {
    icon: Truck,
    title: "Logistics and Courier",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Delhi is India's largest logistics hub, and last-mile delivery challenges are acute in the dense urban geography.",
    useCase: "Pre-delivery WhatsApp alerts reduce failed deliveries by 34% in Delhi operations.",
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
  { sector: "Real estate developer — South Delhi", automation: "WhatsApp chatbot for portal lead qualification + site visit booking", result: "Lead-to-visit conversion 3x. No-show rate -42%" },
  { sector: "Multi-speciality hospital — West Delhi", automation: "Appointment reminder + lab report delivery automation", result: "No-show -35%. Lab call volume -65%" },
  { sector: "UPSC coaching institute — Mukherjee Nagar", automation: "Admission enquiry chatbot + fee reminder sequence", result: "Enquiry conversion 3x. Fee collection on time +40%" },
  { sector: "D2C fashion brand — Lajpat Nagar", automation: "Cart recovery + order updates + festive campaigns", result: "Cart recovery 22%. Festive campaign ROAS 26x" },
  { sector: "NBFC — Connaught Place", automation: "EMI reminder sequence with Pay Now button", result: "On-time EMI payment +31%. Collections calls -45%" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is Get Click Media available in Delhi?",
    a: "Yes. Get Click Media is headquartered in Noida and serves the entire Delhi NCR region. Onboarding is fully remote — you can start from anywhere in Delhi. For clients who prefer an in-person consultation, our Noida office is 30 minutes from most Delhi locations.",
  },
  {
    q: "What is the cost of WhatsApp Business API for a Delhi business?",
    a: "WhatsApp API pricing is the same across India. Meta charges: marketing conversations Rs 0.79-0.91 each, utility Rs 0.14-0.17 each, first 1,000 service conversations free per month. Get Click Media charges a platform fee based on your volume. Contact us for a custom quote for your Delhi business.",
  },
  {
    q: "How quickly can a Delhi business go live on WhatsApp API?",
    a: "3 to 5 business days with Get Click Media managing the setup. The timeline depends on Meta's business verification speed (1-3 days) and your template approval (1-3 days). These run in parallel — most Delhi businesses go live within 4 days.",
  },
  {
    q: "Which industries in Delhi use WhatsApp API the most?",
    a: "Real estate (Delhi NCR property developers and brokers), EdTech and coaching institutes (largest coaching market in India), healthcare (large hospital chains and smaller clinics), retail (Chandni Chowk, Karol Bagh, Lajpat Nagar traders), and NBFCs and microfinance (significant financial services presence in Delhi).",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIDelhiPage() {
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
              <li className="text-white font-medium">Delhi</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Delhi
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Delhi — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution
                Provider. Delhi businesses — spanning retail, healthcare, real estate, EdTech, and financial
                services — use GCM&apos;s WhatsApp API for lead generation, customer support automation, and
                marketing campaigns.
                <strong className="text-white"> Onboarding takes 3 to 5 business days.</strong>
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

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · Noida-based support · Full Delhi NCR coverage</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Delhi businesses — rich message preview on a phone"
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
              { value: "200+", label: "Delhi NCR businesses served" },
              { value: "95%+", label: "Daily WhatsApp usage in Delhi NCR" },
              { value: "3–5 days", label: "Onboarding timeline" },
              { value: "Noida", label: "GCM headquarters, NCR" },
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
              Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution
              Provider. Delhi businesses — spanning retail, healthcare, real estate, EdTech, and financial
              services — use GCM&apos;s WhatsApp API for lead generation, customer support automation, and
              marketing campaigns. Onboarding takes 3 to 5 business days. GCM&apos;s support team is
              headquartered in Noida with full coverage across Delhi NCR.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Delhi is India&apos;s commercial capital — home to over 1.5 lakh registered businesses spanning
            government, retail, healthcare, education, real estate, and technology sectors. The city&apos;s
            business density and highly connected consumer base make WhatsApp Business API one of the most
            impactful marketing investments for Delhi businesses of any size.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Delhi NCR&apos;s WhatsApp adoption rate is among the highest in India — over 95% of smartphone
            users in the region use WhatsApp daily. For B2C businesses in Delhi, WhatsApp is not just a
            communication channel: it is the primary interface between business and customer.
          </p>
        </div>
      </section>

      {/* ── WHY DELHI BUSINESSES CHOOSE WHATSAPP API ─────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-delhi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Delhi businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Delhi Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                A digital-first market built for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Delhi&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Delhi report faster lead conversion,
                higher customer retention, and lower support costs compared to SMS and email alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, title: "95%+ daily WhatsApp usage in Delhi NCR", desc: "Among the highest adoption rates in India — WhatsApp is the primary customer interface for Delhi B2C businesses." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Delhi businesses." },
                  { icon: Building2, title: "1.5 lakh+ registered businesses in Delhi", desc: "Spanning government, retail, healthcare, education, real estate, and technology sectors." },
                  { icon: MapPinned, title: "GCM is based in nearby Noida", desc: "Local account management and the option of in-person onboarding consultations for Delhi clients." },
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
              Top Industries Using WhatsApp API in Delhi
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Delhi&apos;s diverse business landscape creates a wide range of WhatsApp API use cases across
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
                    alt={`WhatsApp Business API use cases for ${industry.title} in Delhi`}
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

      {/* ── GCM'S WHATSAPP API SERVICE IN DELHI ──────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media's WhatsApp Business API onboarding and support for Delhi NCR clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Delhi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Delhi
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media is headquartered in Noida, Uttar Pradesh — providing WhatsApp Business API
                services to businesses across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, and the broader NCR
                region. Our proximity to Delhi gives Delhi clients faster response times and the option of
                in-person onboarding consultations. GCM has served <strong className="text-gray-900">200+ Delhi NCR businesses</strong> across
                retail, healthcare, real estate, EdTech, and financial services.
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
              Client Use Cases — Delhi Businesses
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
            Areas in and Around Delhi We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Delhi and the surrounding
            region. Onboarding is fully remote — we set up your WhatsApp API account without requiring any
            in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Noida", "Gurgaon", "Faridabad", "Ghaziabad", "Greater Noida", "Gurugram", "South Delhi", "West Delhi", "North Delhi", "East Delhi", "Dwarka", "Rohini", "Pitampura"].map((area) => (
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
              WhatsApp Business API in Delhi
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
              { label: "WhatsApp API Noida", href: "/whatsapp-api-noida" },
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
                Ready to launch WhatsApp API for your Delhi business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and onboarding —
                most Delhi businesses go live within 4 days.
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
