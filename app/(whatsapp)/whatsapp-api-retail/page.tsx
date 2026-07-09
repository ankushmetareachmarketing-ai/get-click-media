import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ShieldCheck,
  Users,
  Clock,
  Headphones,
  Building2,
  ChevronDown,
  AlertTriangle,
  Store,
  Gift,
  Calendar,
  Tag,
  Bell,
  TrendingUp,
  MessageSquare,
  Settings,
  Database,
  Globe,
  Camera,
  CreditCard,
  BarChart3,
  Heart,
  Sparkles,
  MapPin,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "WhatsApp API for Retail — Festive Campaigns, Loyalty and Customer Engagement India | Get Click Media",
  description:
    "WhatsApp Business API for retail enables Indian retailers — from large format stores to kirana chains — to automate festive sale campaigns, loyalty programme updates, stock availability alerts, and customer re-engagement.",
  keywords:
    "WhatsApp API for Retail India, WhatsApp Retail India, WhatsApp Loyalty Programme, WhatsApp Festive Sale India, Retail WhatsApp Automation India, WhatsApp for Kiranas India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-retail" },
  openGraph: {
    title:
      "WhatsApp API for Retail — Festive Campaigns, Loyalty and Customer Engagement India",
    description:
      "WhatsApp Business API for retail enables Indian retailers — from large format stores to kirana chains — to automate festive sale campaigns, loyalty programme updates, stock availability alerts, and customer re-engagement.",
    url: "https://getclickmedia.com/whatsapp-api-retail",
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
      logo: {
        "@type": "ImageObject",
        url: "https://getclickmedia.com/images/gcm-logo.png",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    {
      "@type": "Service",
      name: "WhatsApp API for Retail India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-retail",
      description:
        "WhatsApp Business API for retail enables Indian retailers — from large format stores to kirana chains — to automate festive sale campaigns, loyalty programme updates, stock availability alerts, and customer re-engagement.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://getclickmedia.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "WhatsApp Business API",
          item: "https://getclickmedia.com/whatsapp-business-api",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "WhatsApp API for Retail India",
          item: "https://getclickmedia.com/whatsapp-api-retail",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does WhatsApp API improve festive sales for Indian retailers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp festive campaigns deliver product carousels with offer images, discount percentages, and one-tap links to product pages or store directions to opted-in customers. WhatsApp's 98% open rate and 22% CTR dramatically outperform SMS (2-3% CTR) and email (3-5% CTR) for festive announcements. GCM's retail clients consistently achieve 3x festive revenue from WhatsApp campaigns vs single-blast SMS.",
          },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp integrate with retail POS systems in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Get Click Media integrates with Marg ERP, Posist, Lightspeed, and custom POS systems. Every purchase triggers a loyalty points update WhatsApp message. POS inventory triggers new arrival alerts. Billing data enables personalised campaign targeting based on past purchase categories.",
          },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp loyalty programme communication work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every time a customer earns loyalty points (via purchase, referral, or special event), a WhatsApp message is automatically sent with: points earned, total balance, points monetary value, and a [View and Redeem] button. This keeps customers aware of their balance and incentivises return visits. WhatsApp loyalty notifications achieve 60% higher programme awareness than app-based loyalty notifications.",
          },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp suitable for kirana and small retail stores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — WhatsApp Business API is cost-effective even for kirana chains and small retailers. For a neighbourhood store with 2,000 customers: a single Diwali campaign WhatsApp send costs approximately Rs 1,700 (at Rs 0.85 per conversation) but drives Rs 15,000-25,000 in incremental footfall if well-executed. GCM's Starter plan is designed for small and mid-size retailers entering WhatsApp API for the first time.",
          },
        },
      ],
    },
  ],
};

// ── Retail Use Cases ──────────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: Tag,
    title: "Festive Sale Campaign Launch",
    trigger: "Campaign scheduled 3-5 days before festival date",
    message:
      "Offer image carousel with product categories, discount percentages, validity date, and [Shop Now] or [Visit Store] button with Google Maps link",
    result: "Festive revenue 3x vs single SMS. CTR 22%. Store footfall +35%.",
  },
  {
    icon: Gift,
    title: "Loyalty Programme Points Update",
    trigger: "Purchase completed — points credited to loyalty account",
    message:
      "Points earned this transaction, total balance, points value, redemption threshold, and [View Rewards] button",
    result:
      "Loyalty programme awareness +60%. Points redemption rate +45%. Return visit +28%.",
  },
  {
    icon: Bell,
    title: "New Arrival and Restock Alert",
    trigger: "New product category added to POS inventory or restocked item",
    message:
      "New arrival image, product name, price, and [Reserve Now] or [Visit Store] button. Limited to customers who bought from that category previously.",
    result:
      "New product trial rate 2x vs walk-in only. Targeted relevance reduces opt-out.",
  },
  {
    icon: Heart,
    title: "Birthday and Anniversary Personalised Offer",
    trigger:
      "Customer birthday or shopping anniversary (1 year since first purchase)",
    message:
      "Personalised birthday greeting with exclusive discount code valid for 7 days",
    result:
      "Birthday offer redemption rate 38%. Customer satisfaction +25 points. Brand affinity increased.",
  },
  {
    icon: Sparkles,
    title: "Stock Clearance and Flash Sale",
    trigger: "Excess inventory identified in POS — clearance campaign trigger",
    message:
      "Flash sale: product name, original price, sale price, validity (24 hours), [Buy Now] button. Creates urgency with countdown.",
    result:
      "Clearance sell-through rate +65%. Markdown loss minimised. Cash flow improved.",
  },
  {
    icon: Users,
    title: "Win-Back Campaign — Lapsed Customers",
    trigger: "Customer has not visited or purchased in 90 days",
    message:
      "We miss you message + personalised offer based on past purchase category + [Claim Offer] button",
    result:
      "Lapsed customer reactivation rate 18%. Cost of reactivation 70% lower than new customer acquisition.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  {
    metric: "Festive campaign CTR",
    before: "2% (SMS)",
    after: "22% (WhatsApp product carousel)",
    source: "GCM retail client India",
  },
  {
    metric: "Loyalty programme engagement",
    before: "15% (email + app)",
    after: "42% (WhatsApp)",
    source: "GCM loyalty integration client",
  },
  {
    metric: "New arrival announcement open rate",
    before: "25% (email)",
    after: "96% (WhatsApp)",
    source: "GCM retail client data",
  },
  {
    metric: "Birthday offer redemption",
    before: "12% (email)",
    after: "38% (WhatsApp personalised)",
    source: "GCM retail client",
  },
  {
    metric: "Lapsed customer reactivation",
    before: "8% (email win-back)",
    after: "18% (WhatsApp win-back)",
    source: "GCM retail client",
  },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    icon: Database,
    title: "POS integration",
    desc: "Marg ERP, Posist, Lightspeed, custom POS — purchase trigger, loyalty credit events",
  },
  {
    icon: Gift,
    title: "Loyalty platform integration",
    desc: "LoyLap, Capillary, custom loyalty — points update triggers, tier upgrade notifications",
  },
  {
    icon: Store,
    title: "Product catalog",
    desc: "Retail product catalog sync — category-based personalised campaign targeting",
  },
  {
    icon: Calendar,
    title: "Festive campaign management",
    desc: "Pre-built festive campaign templates for all major Indian festivals",
  },
  {
    icon: MapPin,
    title: "Store visit attribution",
    desc: "WhatsApp offer code redemption tracking in POS — campaign ROI measurement",
  },
  {
    icon: Building2,
    title: "Kirana chain support",
    desc: "Multi-location WhatsApp management with location-specific offers and inventory",
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp API improve festive sales for Indian retailers?",
    a: "WhatsApp festive campaigns deliver product carousels with offer images, discount percentages, and one-tap links to product pages or store directions to opted-in customers. WhatsApp's 98% open rate and 22% CTR dramatically outperform SMS (2-3% CTR) and email (3-5% CTR) for festive announcements. GCM's retail clients consistently achieve 3x festive revenue from WhatsApp campaigns vs single-blast SMS.",
  },
  {
    q: "Can WhatsApp integrate with retail POS systems in India?",
    a: "Yes. Get Click Media integrates with Marg ERP, Posist, Lightspeed, and custom POS systems. Every purchase triggers a loyalty points update WhatsApp message. POS inventory triggers new arrival alerts. Billing data enables personalised campaign targeting based on past purchase categories.",
  },
  {
    q: "How does WhatsApp loyalty programme communication work?",
    a: "Every time a customer earns loyalty points (via purchase, referral, or special event), a WhatsApp message is automatically sent with: points earned, total balance, points monetary value, and a [View and Redeem] button. This keeps customers aware of their balance and incentivises return visits. WhatsApp loyalty notifications achieve 60% higher programme awareness than app-based loyalty notifications.",
  },
  {
    q: "Is WhatsApp suitable for kirana and small retail stores?",
    a: "Yes — WhatsApp Business API is cost-effective even for kirana chains and small retailers. For a neighbourhood store with 2,000 customers: a single Diwali campaign WhatsApp send costs approximately Rs 1,700 (at Rs 0.85 per conversation) but drives Rs 15,000-25,000 in incremental footfall if well-executed. GCM's Starter plan is designed for small and mid-size retailers entering WhatsApp API for the first time.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIRetailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2"
      >
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li>
            <Link href="/" className="hover:text-[#2563eb] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link
              href="/whatsapp-business-api"
              className="hover:text-[#2563eb] transition-colors"
            >
              WhatsApp Business API
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">Retail</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Retail WhatsApp API
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Business API for Retail
            <br />
            <span className="text-[#38bdf8]">
              Festive Campaigns, Loyalty and Customer Engagement India
            </span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            WhatsApp Business API for retail enables Indian retailers — from
            large format stores to kirana chains — to automate festive sale
            campaigns, loyalty programme updates, stock availability alerts, and
            customer re-engagement. Get Click Media integrates WhatsApp with POS
            systems and loyalty platforms — achieving 3x higher festive campaign
            revenue and 28% higher repeat visit rates.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/whatsapp-api-pricing-india"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Start WhatsApp Onboarding
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Business API for retail enables Indian retailers — from
              large format stores to kirana chains — to automate festive sale
              campaigns, loyalty programme updates, stock availability alerts,
              and customer re-engagement.
              <strong className="text-gray-900">
                {" "}
                Get Click Media integrates WhatsApp with POS systems
              </strong>
              and loyalty platforms — achieving 3x higher festive campaign
              revenue and 28% higher repeat visit rates.
            </p>
          </div>

          <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-100">
            <p className="text-sm text-orange-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-orange-500" />
              Indian retail is deeply seasonal — Diwali, Dussehra, Eid,
              Christmas, and regional festivals drive{" "}
              <strong>40-60% of annual revenue</strong> for many categories. The
              retailers who communicate Diwali offers to their WhatsApp customer
              list 3 days before launch consistently outperform competitors who
              rely on print, SMS, and email.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Get Click Media's WhatsApp API for retail integrates with
            point-of-sale systems and loyalty programmes — turning your customer
            database into a high-ROI WhatsApp marketing list.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            {
              value: "3x",
              label: "Festive campaign revenue vs single SMS blast",
            },
            {
              value: "28%",
              label: "Higher repeat visit rate with WhatsApp loyalty",
            },
            { value: "₹1,850", label: "Average WhatsApp campaign order value" },
            { value: "22%", label: "CTR on WhatsApp product carousels" },
          ].map((s) => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">
                {s.value}
              </p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE SECTION: Retail Dashboard ───────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Retail Customer Engagement Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform{" "}
                <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">
                  for retailers and kirana chains
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all customer communication from a single dashboard —
                festive campaigns, loyalty programme updates, new arrival
                alerts, stock clearance, and win-back campaigns — with full
                integration to your POS and loyalty systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>
                    Automated festive campaign carousels with product images
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>
                    Real-time loyalty points updates after each purchase
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Personalised birthday and anniversary offers</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Store visit attribution with offer code tracking</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/retail-dashboard.webp"
                  alt="WhatsApp API Retail dashboard — festive campaigns, loyalty updates, new arrivals, and win-back campaigns"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY RETAIL NEEDS WHATSAPP ───────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="why-retail">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Retail Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why Retail Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Indian retailers collect customer mobile numbers at billing
              counters but rarely have an effective channel to communicate with
              them. SMS reaches only non-DND numbers with text-only messages.
            </p>
            <p>
              WhatsApp reaches opted-in customers with{" "}
              <strong>rich product carousels</strong>, offer images, and one-tap
              store visit or purchase actions. With{" "}
              <strong>3x festive campaign revenue</strong> and{" "}
              <strong>28% higher repeat visit rates</strong>, WhatsApp is
              rapidly becoming the standard for retail customer engagement in
              India.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> The retailers who communicate
                Diwali offers to their WhatsApp customer list 3 days before
                launch consistently outperform competitors who rely on print,
                SMS, and email. WhatsApp's 98% open rate and 22% CTR vs SMS's
                2-3% CTR drives the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API Use Cases for Retail — 6 Automations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <uc.icon className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-(family-name:--font-syne)">
                    {uc.title}
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-gray-700">
                      Trigger:
                    </span>{" "}
                    <span className="text-gray-500">{uc.trigger}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      WhatsApp message sent:
                    </span>{" "}
                    <span className="text-gray-500">{uc.message}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Business result:
                    </span>{" "}
                    <span className="text-green-600">{uc.result}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: WhatsApp Festive Campaign Preview ────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Festive Campaign Automation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp festive campaigns <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">with product carousels</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Automated festive campaign carousels with product images,
                discount percentages, and one-tap links to product pages or
                store directions. WhatsApp's 98% open rate and 22% CTR
                dramatically outperform SMS (2-3% CTR) for festive
                announcements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>
                    Product carousel with images and discount percentages
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>One-tap Shop Now button to product pages</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Google Maps link for store visits</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>
                    Pre-built templates for all major Indian festivals
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 max-w-sm mx-auto">
                <Image
                  src="/images/whatsapp/retail-festive-campaign.webp"
                  alt="WhatsApp retail festive campaign preview — product carousel with Diwali offers, discount percentages, and Shop Now button"
                  width={400}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE BENCHMARKS ──────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="performance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Performance Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Real results from Indian retailers
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold text-red-400">
                    Before WhatsApp API
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">
                    After WhatsApp API
                  </th>
                  <th className="text-left px-4 py-4 font-semibold text-white/60">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      {row.metric}
                    </td>
                    <td className="px-4 py-3.5 text-center text-red-400">
                      {row.before}
                    </td>
                    <td className="px-4 py-3.5 text-center text-[#38bdf8]">
                      {row.after}
                    </td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">
                      {row.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: POS Integration ──────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/retail-pos-integration.webp"
                  alt="WhatsApp API POS integration — Marg ERP, Posist, Lightspeed for retail customer engagement"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
                POS & Loyalty Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Connect WhatsApp with <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">
                  your POS and loyalty systems
                </span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media integrates with leading retail POS and loyalty
                platforms — Marg ERP, Posist, Lightspeed, LoyLap, and Capillary
                — enabling automated customer communication at every retail
                touchpoint.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Marg ERP",
                  "Posist",
                  "Lightspeed",
                  "LoyLap",
                  "Capillary",
                  "Custom POS",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Setup takes 3-5 days after WhatsApp API onboarding is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Get Click Media&apos;s WhatsApp API Capabilities for Retail
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-6 space-y-3"
              >
                <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-[#38bdf8]" />
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {c.desc}
                </p>
              </div>
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
              WhatsApp API for Retail
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-gray-50 border border-gray-100 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              {
                label: "WhatsApp Business API",
                href: "/whatsapp-business-api",
              },
              { label: "WhatsApp Catalog", href: "/whatsapp-catalog" },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              {
                label: "WhatsApp Marketing Services",
                href: "/whatsapp-marketing-services",
              },
              {
                label: "WhatsApp API Pricing India",
                href: "/whatsapp-api-pricing-india",
              },
              {
                label: "WhatsApp API for Retail",
                href: "/whatsapp-api-retail",
              },
              {
                label: "WhatsApp API for E-commerce",
                href: "/whatsapp-api-ecommerce",
              },
              {
                label: "WhatsApp API for Real Estate",
                href: "/whatsapp-api-real-estate",
              },
              {
                label: "WhatsApp API for Travel",
                href: "/whatsapp-api-travel",
              },
              { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
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
                Ready to transform retail customer engagement with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for retail with POS and
                loyalty integration, automated festive campaigns, and
                personalised customer engagement.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Start Onboarding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
