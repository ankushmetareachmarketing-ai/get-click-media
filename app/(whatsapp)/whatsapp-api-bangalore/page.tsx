import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ChevronDown,
  Building2,
  Code2,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Users,
  MapPinned,
  TrendingUp,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Bangalore — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business Solution Provider. 3-5 day onboarding with full REST API, webhook, and SDK access for Bangalore's startups, IT companies, and D2C brands.",
  keywords:
    "WhatsApp Business API Bangalore, whatsapp api provider bangalore, whatsapp business api bengaluru, whatsapp marketing bangalore, whatsapp chatbot bangalore, whatsapp api startup bangalore",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-bangalore" },
  openGraph: {
    title: "WhatsApp Business API in Bangalore — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business Solution Provider, with full API and integration access for Bangalore's tech ecosystem.",
    url: "https://getclickmedia.com/whatsapp-api-bangalore",
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
      name: "WhatsApp Business API Provider in Bangalore",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Bangalore", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-bangalore",
      description:
        "Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business Solution Provider. Bangalore's tech startups, IT companies, healthcare providers, and D2C brands use GCM's WhatsApp API for customer onboarding, support automation, campaign management, and B2B lead generation.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Bangalore", item: "https://getclickmedia.com/whatsapp-api-bangalore" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is WhatsApp Business API popular among Bangalore startups?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — Bangalore has among the highest WhatsApp API adoption rates among Indian startups. The developer-heavy culture means integrations are deeper and more custom than in other cities. Common Bangalore startup use cases include product onboarding chatbot, trial-to-paid conversion automation, B2B sales qualification, and customer support automation." },
        },
        {
          "@type": "Question",
          name: "Can developers in Bangalore integrate WhatsApp API with custom systems?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media provides full REST API access, webhook event documentation, code samples in Node.js, Python, PHP, and Java, and developer support for custom integrations. GCM's API is designed for developer-led implementations common in Bangalore's startup ecosystem." },
        },
        {
          "@type": "Question",
          name: "What WhatsApp API use cases are most common for Bangalore's EdTech companies?",
          acceptedAnswer: { "@type": "Answer", text: "EdTech companies in Bangalore most commonly use WhatsApp for course onboarding and first-week engagement, completion nudges for inactive learners, live class reminders, fee collection automation, and placement notification for job-focused programmes. GCM integrates with Moodle, Canvas, and custom LMS platforms used by Bangalore EdTech companies." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API work for B2B sales in Bangalore's SaaS ecosystem?",
          acceptedAnswer: { "@type": "Answer", text: "Bangalore SaaS companies use WhatsApp for the full B2B sales cycle: CTWA LinkedIn ads drive trial signups, a chatbot qualifies company size, role, and use case, personalised demo booking follows, onboarding communication continues after trial signup, and renewal reminders use usage data. GCM deploys this flow with Salesforce, HubSpot, and custom CRM integrations." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Code2,
    title: "Tech Startups and SaaS",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "India's startup capital — thousands of SaaS companies use WhatsApp for product onboarding, trial conversion, and customer support.",
    useCase: "Product trial chatbot, onboarding drip sequence, renewal automation, support ticket routing.",
    image: "/images/rcs/ecommerce-dashboard.png",
  },
  {
    icon: Building2,
    title: "IT Services and Outsourcing",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Bangalore's IT companies use WhatsApp for talent acquisition, client communication, and project management.",
    useCase: "Candidate screening chatbot, interview scheduling, client project update automation.",
    image: "/images/dashboard.png",
  },
  {
    icon: Stethoscope,
    title: "Healthcare and Biotech",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Major hospital chains and a thriving health-tech startup ecosystem drive Bangalore's WhatsApp healthcare adoption.",
    useCase: "Appointment management, health report delivery, pharma patient communication.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Major national EdTech companies headquartered in Bangalore, plus hundreds of local coaching institutes, need scalable learner communication.",
    useCase: "Course onboarding, completion nudges, fee collection, instructor-student communication.",
    image: "/images/rcs/education-dashboard.webp",
  },
  {
    icon: ShoppingBag,
    title: "Retail and Food Delivery",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Bangalore's D2C brands, food tech companies, and premium retail rely on WhatsApp for order and loyalty communication.",
    useCase: "Order updates, cart recovery, restaurant order management, loyalty programmes.",
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
  { sector: "SaaS startup — Koramangala", automation: "B2B trial onboarding chatbot + renewal reminder", result: "Trial-to-paid +35%. Churn reduced 28%." },
  { sector: "EdTech platform — Whitefield", automation: "Course completion nudge + fee collection automation", result: "Completion rate +45%. Fee on-time +42%." },
  { sector: "Healthcare tech company — HSR Layout", automation: "Patient engagement WhatsApp integration for partner hospitals", result: "No-show -32%. Patient satisfaction +20 points." },
  { sector: "D2C food brand — Indiranagar", automation: "Order tracking + cart recovery + replenishment", result: "Cart recovery 23%. Repeat purchase +32%." },
  { sector: "IT staffing company — Electronic City", automation: "Candidate sourcing chatbot + interview automation", result: "Sourcing time -50%. Interview show rate +38%." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is WhatsApp Business API popular among Bangalore startups?",
    a: "Yes — Bangalore has among the highest WhatsApp API adoption rates among Indian startups. The developer-heavy culture means integrations are deeper and more custom than in other cities. Common Bangalore startup use cases include: product onboarding chatbot, trial-to-paid conversion automation, B2B sales qualification, and customer support automation.",
  },
  {
    q: "Can developers in Bangalore integrate WhatsApp API with custom systems?",
    a: "Yes. Get Click Media provides full REST API access, webhook event documentation, code samples in Node.js, Python, PHP, and Java, and developer support for custom integrations. GCM's API is designed for developer-led implementations common in Bangalore's startup ecosystem.",
  },
  {
    q: "What WhatsApp API use cases are most common for Bangalore's EdTech companies?",
    a: "EdTech companies in Bangalore most commonly use WhatsApp for: (1) course onboarding and first-week engagement, (2) completion nudges for inactive learners, (3) live class reminders, (4) fee collection automation, (5) placement notification for job-focused programmes. GCM integrates with Moodle, Canvas, and custom LMS platforms used by Bangalore EdTech companies.",
  },
  {
    q: "How does WhatsApp API work for B2B sales in Bangalore's SaaS ecosystem?",
    a: "Bangalore SaaS companies use WhatsApp for the full B2B sales cycle: (1) CTWA LinkedIn ads drive trial signups, (2) chatbot qualifies company size, role, and use case, (3) personalised demo booking, (4) onboarding communication after trial signup, (5) renewal reminders with usage data. GCM deploys this flow with Salesforce, HubSpot, and custom CRM integrations.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIBangalorePage() {
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
              <li className="text-white font-medium">Bangalore</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp Business API Bangalore
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API<br />
                <span className="text-[#38bdf8]">in Bangalore — Official Meta BSP</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business
                Solution Provider. Bangalore&apos;s tech startups, IT companies, healthcare providers, and
                D2C brands are among India&apos;s most sophisticated WhatsApp API adopters — using it for
                customer onboarding, support automation, campaign management, and B2B lead generation.
                <strong className="text-white"> Onboarding in 3 to 5 business days with full API and integration access.</strong>
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

              <p className="text-white/40 text-xs">Official Meta BSP · 3–5 Day Setup · Full REST API &amp; SDK access · India-based support</p>
            </div>

            {/* Right-side hero image */}
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API for Bangalore businesses — rich message preview on a phone"
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
              { value: "30,000+", label: "Tech companies headquartered in Bangalore" },
              { value: "10,000+", label: "Active startups — India's largest ecosystem" },
              { value: "3–5 days", label: "Onboarding timeline" },
              { value: "Full API", label: "REST API, webhooks, and SDK access" },
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
              Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business
              Solution Provider. Bangalore&apos;s tech startups, IT companies, healthcare providers, and D2C
              brands are among India&apos;s most sophisticated WhatsApp API adopters — using it for customer
              onboarding, support automation, campaign management, and B2B lead generation. Onboarding in 3 to
              5 business days with full API and integration access.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Bangalore is India&apos;s technology capital — home to 30,000+ tech companies, India&apos;s
            largest startup ecosystem (over 10,000 active startups), and a developer-heavy population that is
            among the earliest adopters of business WhatsApp API. The city&apos;s business landscape spans IT
            services, product startups, healthcare tech, EdTech, and a rapidly growing D2C brand ecosystem.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Bangalore developers are disproportionately represented among the first adopters of WhatsApp
            Business API in India — the technical familiarity with API integrations, chatbot development, and
            CRM platforms in Bangalore&apos;s business community makes adoption faster and integrations deeper
            than in most other Indian cities.
          </p>
        </div>
      </section>

      {/* ── WHY BANGALORE BUSINESSES CHOOSE WHATSAPP API ─────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-bangalore">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media — official Meta Business Solution Provider dashboard for Bangalore businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Bangalore Businesses Choose WhatsApp API
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                India&apos;s most developer-fluent market for WhatsApp automation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Bangalore&apos;s business landscape is shaped by a digital-first consumer base — smartphone
                penetration, WhatsApp usage rates, and e-commerce adoption are all above India&apos;s national
                average. Businesses that deploy WhatsApp Business API in Bangalore report faster lead
                conversion, higher customer retention, and lower support costs compared to SMS and email
                alternatives.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Code2, title: "India's technology capital", desc: "30,000+ tech companies and 10,000+ active startups make Bangalore India's largest and most sophisticated WhatsApp API market." },
                  { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Bangalore businesses." },
                  { icon: Users, title: "Developer-heavy business culture", desc: "Deeper, more custom API integrations than in most Indian cities, thanks to Bangalore's technical talent base." },
                  { icon: MapPinned, title: "Full API and SDK access", desc: "REST API, webhook documentation with code samples, and pre-built SDKs for Node.js, Python, and Java." },
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
              Top Industries Using WhatsApp API in Bangalore
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Bangalore&apos;s startup and tech-heavy business landscape creates a wide range of WhatsApp API
              use cases across sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => (
              <div key={industry.title} className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
                <div className={`h-1.5 bg-gradient-to-r ${industry.color}`} />
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={industry.image}
                    alt={`WhatsApp Business API use cases for ${industry.title} in Bangalore`}
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

      {/* ── GCM'S WHATSAPP API SERVICE IN BANGALORE ──────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="gcm-service">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14">
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/rcs/banking-dashboard.webp"
                  alt="Get Click Media's WhatsApp Business API developer dashboard and onboarding for Bangalore clients"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                GCM in Bangalore
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media&apos;s WhatsApp API Service in Bangalore
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media&apos;s WhatsApp API platform is purpose-built for the technical requirements
                of Bangalore&apos;s API-first business community. GCM provides
                <strong className="text-gray-900"> full REST API access, webhook documentation with code
                samples, and pre-built SDKs</strong> for Node.js, Python, and Java — the languages most
                commonly used in Bangalore&apos;s startup ecosystem. Onboarding is fully remote. Developer
                support is available via WhatsApp and email.
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
              Client Use Cases — Bangalore Businesses
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
            Areas in and Around Bangalore We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Get Click Media provides WhatsApp Business API to businesses across Bangalore and the surrounding
            region. Onboarding is fully remote — we set up your WhatsApp API account without requiring any
            in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Electronic City", "Whitefield", "Koramangala", "HSR Layout", "Indiranagar", "Sarjapur Road", "Yelahanka", "Marathahalli", "Mysore Road", "Tumkur Road", "Domlur"].map((area) => (
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
              WhatsApp Business API in Bangalore
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
              { label: "WhatsApp API Hyderabad", href: "/whatsapp-api-hyderabad" },
              { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
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
                Ready to launch WhatsApp API for your Bangalore business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media manages Meta business verification, template approval, and full API access —
                built for Bangalore&apos;s developer-led implementations.
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
