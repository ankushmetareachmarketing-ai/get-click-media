import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ChevronDown,
  Shirt,
  Factory,
  Home,
  Stethoscope,
  Gem,
  Languages,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Ahmedabad — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business Solution Provider. 3-5 day onboarding with Gujarati and Hindi chatbot support for Ahmedabad's textile, MSME, real estate, and diamond businesses.",
  keywords:
    "WhatsApp Business API Ahmedabad, whatsapp api provider ahmedabad, whatsapp business api ahmedabad, whatsapp marketing ahmedabad, whatsapp chatbot gujarat, whatsapp api service ahmedabad gujarat",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-ahmedabad" },
  openGraph: {
    title: "WhatsApp Business API in Ahmedabad — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business Solution Provider, with Gujarati and Hindi language chatbot capabilities.",
    url: "https://getclickmedia.com/whatsapp-api-ahmedabad",
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
      name: "WhatsApp Business API Provider in Ahmedabad",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Ahmedabad", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-ahmedabad",
      description:
        "Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business Solution Provider. Ahmedabad's trading and MSME sector, textile and diamond industry, manufacturing, real estate, and healthcare are the primary WhatsApp API adopters.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Ahmedabad", item: "https://getclickmedia.com/whatsapp-api-ahmedabad" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media support Gujarati-language WhatsApp chatbots?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media supports Gujarati-language chatbots — understanding messages in Gujarati script and Gujarati-romanised text, and responding in Gujarati. For Ahmedabad's trading and MSME businesses where Gujarati is the primary business communication language, GCM configures bilingual Gujarati-Hindi or Gujarati-English chatbots." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API help Ahmedabad's MSME and manufacturing sector?",
          acceptedAnswer: { "@type": "Answer", text: "Ahmedabad's MSMEs use WhatsApp API for dealer and distributor communication (order confirmation, dispatch alert, payment reminder), supplier coordination (material availability, delivery schedule), GST invoice and payment confirmation delivery, and B2B customer support. GCM's manufacturing flows are built for the B2B communication patterns of Gujarat's industrial sector." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API suitable for textile traders in Ahmedabad?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Ahmedabad's textile trading community — one of the most WhatsApp-active B2B segments in India — uses WhatsApp API for fabric availability alerts to regular buyers, order confirmation and dispatch notification, payment reminder for credit buyers, new collection announcement with product images, and customer support for export inquiries. GCM has pre-built textile trade templates for Ahmedabad." },
        },
        {
          "@type": "Question",
          name: "Which Navratri campaign approach works best for Ahmedabad retail brands on WhatsApp?",
          acceptedAnswer: { "@type": "Answer", text: "Navratri is Ahmedabad's highest-revenue retail period. The most effective WhatsApp Navratri campaign approach: pre-Navratri teaser 3 days before with exclusive early access, Day 1 launch with full product carousel and offer, Day 5 mid-campaign update with bestsellers, Day 9 final push with countdown, and a post-Navratri thank you with next festival preview. GCM clients report 3x Navratri footfall vs non-campaign comparison." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Shirt,
    title: "Textiles and Apparel",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Kankaria, Sindhi Market, and Narol anchor India's textile trading hub.",
    useCase: "B2B buyer communication, fabric availability alerts, order confirmation, payment reminders for fabric traders.",
    image: "/images/industries/retail.webp",
  },
  {
    icon: Factory,
    title: "Manufacturing and MSME",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "GIDC Vatva, Naroda, and Odhav are major industrial areas driving Gujarat's manufacturing economy.",
    useCase: "Supplier order tracking, quality report delivery, dealer communication, GST invoice WhatsApp.",
    image: "/images/rcs/ecommerce-delivery.webp",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "SG Highway, Prahlad Nagar, and Satellite are seeing rapid residential and commercial growth.",
    useCase: "Lead qualification (Gujarati), site visit automation, payment milestone communication.",
    image: "/images/rcs/rcs-for-real-estate.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Major hospital groups in Ahmedabad need Gujarati-first communication for their broad patient base.",
    useCase: "Appointment management, lab reports, Gujarati-language patient communication.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Gem,
    title: "Diamond and Gems",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "The Surat-Ahmedabad corridor forms the world's diamond capital, processing the majority of global diamonds.",
    useCase: "International buyer communication, diamond parcel tracking, auction notification, trade communication.",
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
  { sector: "Textile trader — Kankaria", automation: "B2B WhatsApp for fabric availability + order confirmation + payment reminder", result: "Order query calls -55%. Payment default -28%." },
  { sector: "MSME manufacturer — Vatva", automation: "Dealer WhatsApp communication + payment reminders in Gujarati", result: "Dealer engagement +45%. Payment on-time +38%." },
  { sector: "Real estate developer — SG Highway", automation: "Gujarati-language lead qualification + site visit automation", result: "Site visit rate 3x. No-show -35%." },
  { sector: "Multi-speciality hospital — Satellite", automation: "Gujarati appointment reminders + lab report delivery", result: "No-show -35%. Lab call volume -60%." },
  { sector: "D2C brand — Prahlad Nagar", automation: "Cart recovery + festive campaign (Navratri, Diwali)", result: "Navratri campaign ROAS 24x. Cart recovery 21%." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Does Get Click Media support Gujarati-language WhatsApp chatbots?",
    a: "Yes. Get Click Media supports Gujarati-language chatbots — understanding messages in Gujarati script and Gujarati-romanised text, and responding in Gujarati. For Ahmedabad's trading and MSME businesses where Gujarati is the primary business communication language, GCM configures bilingual Gujarati-Hindi or Gujarati-English chatbots.",
  },
  {
    q: "How does WhatsApp API help Ahmedabad's MSME and manufacturing sector?",
    a: "Ahmedabad's MSMEs use WhatsApp API for: dealer and distributor communication (order confirmation, dispatch alert, payment reminder), supplier coordination (material availability, delivery schedule), GST invoice and payment confirmation delivery, and B2B customer support. GCM's manufacturing flows are built for the B2B communication patterns of Gujarat's industrial sector.",
  },
  {
    q: "Is WhatsApp API suitable for textile traders in Ahmedabad?",
    a: "Yes. Ahmedabad's textile trading community — one of the most WhatsApp-active B2B segments in India — uses WhatsApp API for: fabric availability alerts to regular buyers, order confirmation and dispatch notification, payment reminder for credit buyers, new collection announcement with product images, and customer support for export inquiries. GCM has pre-built textile trade templates for Ahmedabad.",
  },
  {
    q: "Which Navratri campaign approach works best for Ahmedabad retail brands on WhatsApp?",
    a: "Navratri is Ahmedabad's highest-revenue retail period. The most effective WhatsApp Navratri campaign approach: (1) Pre-Navratri teaser 3 days before (exclusive early access), (2) Day 1 launch with full product carousel and offer, (3) Day 5 mid-campaign update with bestsellers, (4) Day 9 final push with countdown, (5) Post-Navratri thank you with next festival preview. GCM clients report 3x Navratri footfall vs non-campaign comparison.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIAhmedabadPage() {
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
              <li className="text-white font-medium">Ahmedabad</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Ahmedabad
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Ahmedabad — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business
                Solution Provider. Ahmedabad&apos;s trading and MSME sector, textile and diamond industry,
                manufacturing, real estate, and healthcare are the primary WhatsApp API adopters.
                <strong className="text-white"> GCM delivers 3 to 5 day onboarding with Gujarati and Hindi chatbot capabilities.</strong>
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

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · Gujarati &amp; Hindi chatbot support · India-based support</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Ahmedabad businesses — rich message preview on a phone"
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
              { value: "#1", label: "India's fastest-growing major city" },
              { value: "World's largest", label: "Diamond processing cluster (Surat-Ahmedabad)" },
              { value: "3–5 days", label: "Onboarding timeline" },
              { value: "Gujarati", label: "Chatbot support for Ahmedabad's trading community" },
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
              Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business
              Solution Provider. Ahmedabad&apos;s trading and MSME sector, textile and diamond industry,
              manufacturing, real estate, and healthcare are the primary WhatsApp API adopters. GCM delivers
              3 to 5 day onboarding for Ahmedabad businesses with Gujarati and Hindi language chatbot
              capabilities.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Ahmedabad is India&apos;s fastest-growing major city and Gujarat&apos;s commercial capital — home
            to one of India&apos;s most vibrant MSME sectors, the world&apos;s largest diamond processing
            cluster (Surat-Ahmedabad corridor), India&apos;s largest textile market (Kankaria Textiles,
            Sindhi Market), and a growing startup ecosystem in areas like SG Highway and Prahlad Nagar.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Gujarat&apos;s business community is among India&apos;s most entrepreneurial — Ahmedabad
            businesses adopt WhatsApp Business API faster than the national average, driven by the
            state&apos;s digital-forward business culture and strong trading community that has historically
            adopted communication tools early.
          </p>
        </div>
      </section>

      {/* ── WHY AHMEDABAD BUSINESSES CHOOSE WHATSAPP API ─────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-ahmedabad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Ahmedabad businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Ahmedabad Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                A trading-and-MSME-driven market built for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Ahmedabad&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Ahmedabad report faster lead
                conversion, higher customer retention, and lower support costs compared to SMS and email
                alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Factory, title: "One of India's most vibrant MSME sectors", desc: "GIDC Vatva, Naroda, and Odhav drive heavy B2B WhatsApp adoption for dealer and supplier communication." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Ahmedabad businesses." },
                  { icon: Languages, title: "Gujarati-language chatbot support", desc: "Essential for Ahmedabad's trading and MSME community, where business communication happens in Gujarati." },
                  { icon: MapPinned, title: "World's largest diamond processing cluster", desc: "The Surat-Ahmedabad corridor drives international buyer and trade communication via WhatsApp." },
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
              Top Industries Using WhatsApp API in Ahmedabad
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Ahmedabad&apos;s trading, manufacturing, and export-heavy business landscape creates a
              distinctive set of WhatsApp API use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => (
              <div key={industry.title} className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
                <div className={`h-1.5 bg-gradient-to-r ${industry.color}`} />
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={industry.image}
                    alt={`WhatsApp Business API use cases for ${industry.title} in Ahmedabad`}
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

      {/* ── GCM'S WHATSAPP API SERVICE IN AHMEDABAD ──────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/rcs/banking-credit-score.webp"
                  alt="Get Click Media's WhatsApp Business API onboarding and Gujarati-language chatbot support for Ahmedabad clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Ahmedabad
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Ahmedabad
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media provides WhatsApp API to Ahmedabad businesses with
                <strong className="text-gray-900"> Gujarati-language chatbot support</strong> — essential for
                the city&apos;s trading and MSME community where business communication happens in Gujarati.
                GCM&apos;s B2B and manufacturing WhatsApp flows are specifically designed for Gujarat&apos;s
                trade-heavy business culture.
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
              Client Use Cases — Ahmedabad Businesses
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
            Areas in and Around Ahmedabad We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Ahmedabad and the
            surrounding region. Onboarding is fully remote — we set up your WhatsApp API account without
            requiring any in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Surat", "Vadodara", "Rajkot", "Gandhinagar", "Anand", "Nadiad", "Mehsana", "SG Highway", "Prahlad Nagar", "Satellite", "Narol", "Vatva", "Naroda"].map((area) => (
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
              WhatsApp Business API in Ahmedabad
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
              { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
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
                Ready to launch WhatsApp API for your Ahmedabad business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and Gujarati-language
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
