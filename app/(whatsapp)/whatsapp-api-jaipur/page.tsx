import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ChevronDown,
  Palmtree,
  Gem,
  Home,
  Stethoscope,
  ShoppingBag,
  Languages,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Jaipur — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business Solution Provider. 3-5 day onboarding with Hindi-language chatbot support for Jaipur's tourism, jewellery, real estate, and healthcare businesses.",
  keywords:
    "WhatsApp Business API Jaipur, whatsapp api provider jaipur, whatsapp business api jaipur, whatsapp marketing jaipur, whatsapp chatbot jaipur, whatsapp api service rajasthan",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-jaipur" },
  openGraph: {
    title: "WhatsApp Business API in Jaipur — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business Solution Provider, with Hindi-language chatbot support for Jaipur businesses.",
    url: "https://getclickmedia.com/whatsapp-api-jaipur",
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
      name: "WhatsApp Business API Provider in Jaipur",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Jaipur", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-jaipur",
      description:
        "Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business Solution Provider. Jaipur's tourism and hospitality sector, jewellery and handicraft exports, real estate market, and growing IT presence are the primary WhatsApp API use cases in the city.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Jaipur", item: "https://getclickmedia.com/whatsapp-api-jaipur" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media support Hindi-language WhatsApp chatbots for Jaipur businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Hindi is GCM's primary non-English chatbot language — essential for Jaipur's broad consumer market. GCM's chatbot platform processes Hindi messages naturally (Devanagari script and Hinglish) and responds in Hindi. For tourism businesses, bilingual Hindi-English chatbots are configured for domestic and international tourist segments." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API help Jaipur's tourism and hospitality businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Jaipur receives 2 crore+ tourists annually — and WhatsApp is the primary communication channel for tourism businesses. Hotels use WhatsApp for booking confirmation delivery, check-in instructions, local experience recommendations, sightseeing booking, and post-stay review requests. Travel agencies use WhatsApp for tour enquiry handling, itinerary delivery, and in-trip support. GCM has pre-built tourism industry templates for Jaipur hotels and travel agencies." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp API be used for Jaipur's jewellery export business?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Jaipur's jewellery exporters use WhatsApp for international buyer communication (order status, shipment tracking, quality report delivery), domestic retailer communication (new collection alerts, scheme announcements), and custom jewellery design consultation (image-based WhatsApp consultation). GCM provides both English (for international buyers) and Hindi (for domestic retailers) WhatsApp communication flows." },
        },
        {
          "@type": "Question",
          name: "What is WhatsApp API pricing for Jaipur businesses?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp API pricing is uniform across India — Jaipur, Delhi, Mumbai, and all other cities have the same rates: marketing Rs 0.79-0.91 per conversation, utility Rs 0.14-0.17 per conversation, first 1,000 service conversations free. Get Click Media's platform fee is based on volume. Contact for a custom quote for your Jaipur business." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Palmtree,
    title: "Tourism and Hospitality",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Heritage hotels, travel agencies, and RTDC serve the 2 crore+ tourists Jaipur receives annually.",
    useCase: "Tourist enquiry chatbot, hotel booking confirmation, sightseeing itinerary delivery, TripAdvisor review collection.",
    image: "/images/industries/hospitality.webp",
  },
  {
    icon: Gem,
    title: "Jewellery and Gems",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Johri Bazaar and Sireh Deori anchor the world's largest gemstone cutting and polishing hub.",
    useCase: "International buyer communication, order status updates, custom jewellery design consultation via WhatsApp.",
    image: "/images/industries/fashion.webp",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Vaishali Nagar, Jagatpura, and the Ajmer Road corridor are seeing rapid residential growth.",
    useCase: "Portal lead qualification in Hindi, site visit booking, payment milestone reminders.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Major healthcare providers in Jaipur need Hindi-first communication for their broad patient base.",
    useCase: "Hindi appointment reminders, lab reports, prescription refills for Hindi-speaking patients.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: ShoppingBag,
    title: "Retail and Handicrafts",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Bapu Bazaar and Johari Bazaar serve both domestic and international handicraft buyers.",
    useCase: "Festival offer campaigns in Hindi, new collection alerts, export buyer communication in English.",
    image: "/images/industries/retail.webp",
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
  { sector: "Heritage hotel — Civil Lines", automation: "Tourist enquiry chatbot + booking confirmation + itinerary delivery", result: "Booking conversion 2.8x. TripAdvisor reviews +400%." },
  { sector: "Jewellery exporter — Johri Bazaar", automation: "International buyer order tracking + WhatsApp design consultation", result: "Order queries -50%. International buyer satisfaction +35%." },
  { sector: "Real estate developer — Vaishali Nagar", automation: "Hindi-language lead qualification + site visit automation", result: "Lead response time: hours to 2 min. Conversion 3x." },
  { sector: "Multi-speciality hospital — MI Road", automation: "Hindi appointment reminders + lab report delivery", result: "No-show -38%. Prescription adherence +28%." },
  { sector: "Handicraft exporter — EPIP zone", automation: "B2B order status + payment reminders for export clients", result: "Order query calls -60%. Payment on time +32%." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Does Get Click Media support Hindi-language WhatsApp chatbots for Jaipur businesses?",
    a: "Yes. Hindi is GCM's primary non-English chatbot language — essential for Jaipur's broad consumer market. GCM's chatbot platform processes Hindi messages naturally (Devanagari script and Hinglish) and responds in Hindi. For tourism businesses, bilingual Hindi-English chatbots are configured for domestic and international tourist segments.",
  },
  {
    q: "How does WhatsApp API help Jaipur's tourism and hospitality businesses?",
    a: "Jaipur receives 2 crore+ tourists annually — and WhatsApp is the primary communication channel for tourism businesses. Hotels use WhatsApp for: booking confirmation delivery, check-in instructions, local experience recommendations, sightseeing booking, and post-stay review requests. Travel agencies use WhatsApp for tour enquiry handling, itinerary delivery, and in-trip support. GCM has pre-built tourism industry templates for Jaipur hotels and travel agencies.",
  },
  {
    q: "Can WhatsApp API be used for Jaipur's jewellery export business?",
    a: "Yes. Jaipur's jewellery exporters use WhatsApp for international buyer communication (order status, shipment tracking, quality report delivery), domestic retailer communication (new collection alerts, scheme announcements), and custom jewellery design consultation (image-based WhatsApp consultation). GCM provides both English (for international buyers) and Hindi (for domestic retailers) WhatsApp communication flows.",
  },
  {
    q: "What is WhatsApp API pricing for Jaipur businesses?",
    a: "WhatsApp API pricing is uniform across India — Jaipur, Delhi, Mumbai, and all other cities have the same rates: marketing Rs 0.79-0.91 per conversation, utility Rs 0.14-0.17 per conversation, first 1,000 service conversations free. Get Click Media's platform fee is based on volume. Contact for a custom quote for your Jaipur business.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIJaipurPage() {
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
              <li className="text-white font-medium">Jaipur</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Jaipur
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Jaipur — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business
                Solution Provider. Jaipur&apos;s tourism and hospitality sector, jewellery and handicraft
                exports, real estate market, and growing IT presence are the primary WhatsApp API use cases
                in the city.
                <strong className="text-white"> GCM delivers 3 to 5 day onboarding with Hindi-language chatbot support.</strong>
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

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · Hindi-language chatbot support · India-based support</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Jaipur businesses — rich message preview on a phone"
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
              { value: "2 crore+", label: "Tourists visiting Jaipur annually" },
              { value: "#1", label: "World's largest gemstone cutting hub" },
              { value: "3–5 days", label: "Onboarding timeline" },
              { value: "Hindi", label: "Chatbot support for Jaipur's broad market" },
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
              Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business Solution
              Provider. Jaipur&apos;s tourism and hospitality sector, jewellery and handicraft exports, real
              estate market, and growing IT presence are the primary WhatsApp API use cases in the city. GCM
              delivers 3 to 5 day onboarding for Jaipur businesses with Hindi-language chatbot support.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Jaipur — the Pink City — is Rajasthan&apos;s commercial capital and one of India&apos;s most
            visited tourist destinations. The city&apos;s economy is driven by tourism and hospitality,
            jewellery (Jaipur is the world&apos;s largest gemstone cutting and polishing centre), textile
            exports, and a growing IT and startup ecosystem in areas like Malviya Nagar and EPIP.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Jaipur&apos;s business community is increasingly digital — the city&apos;s smartphone penetration
            and WhatsApp adoption have grown rapidly with Rajasthan&apos;s improving digital infrastructure.
            Hindi-language WhatsApp communication is essential for reaching Jaipur&apos;s broad consumer base
            beyond the tourist segment.
          </p>
        </div>
      </section>

      {/* ── WHY JAIPUR BUSINESSES CHOOSE WHATSAPP API ────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-jaipur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Jaipur businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Jaipur Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                A tourism-and-export-driven market built for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Jaipur&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Jaipur report faster lead
                conversion, higher customer retention, and lower support costs compared to SMS and email
                alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Palmtree, title: "2 crore+ annual tourists", desc: "Heritage hotels and travel agencies rely on WhatsApp as the primary tourist communication channel." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Jaipur businesses." },
                  { icon: Languages, title: "Hindi-language chatbot support", desc: "Essential for reaching Jaipur's broad consumer base beyond the tourist and export segments." },
                  { icon: MapPinned, title: "World's largest gemstone hub", desc: "Johri Bazaar's jewellery exporters use WhatsApp for both international buyer and domestic retailer communication." },
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
              Top Industries Using WhatsApp API in Jaipur
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Jaipur&apos;s tourism, export, and retail-heavy business landscape creates a distinctive set of
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
                    alt={`WhatsApp Business API use cases for ${industry.title} in Jaipur`}
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

      {/* ── GCM'S WHATSAPP API SERVICE IN JAIPUR ─────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/rcs/banking-why-rcs.webp"
                  alt="Get Click Media's WhatsApp Business API onboarding and Hindi-language chatbot support for Jaipur clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Jaipur
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Jaipur
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media provides WhatsApp API to Jaipur businesses with strong
                <strong className="text-gray-900"> Hindi-language chatbot capabilities</strong> — essential
                for Jaipur&apos;s broad consumer market. GCM&apos;s tourism industry WhatsApp templates and
                jewellery export communication flows are specifically designed for Jaipur&apos;s unique
                business sectors.
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
              Client Use Cases — Jaipur Businesses
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
            Areas in and Around Jaipur We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Jaipur and the surrounding
            region. Onboarding is fully remote — we set up your WhatsApp API account without requiring any
            in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Ajmer", "Alwar", "Bhilwara", "Kota", "Sikar", "Jodhpur", "Bikaner", "Vaishali Nagar", "Jagatpura", "Sanganer", "Bagru", "Malviya Nagar"].map((area) => (
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
              WhatsApp Business API in Jaipur
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
              { label: "WhatsApp API for Travel", href: "/whatsapp-api-travel" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
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
                Ready to launch WhatsApp API for your Jaipur business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and Hindi-language
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
