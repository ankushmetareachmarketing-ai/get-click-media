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
  ShoppingCart,
  Package,
  Truck,
  Repeat,
  Star,
  Tag,
  RefreshCw,
  MessageSquare,
  Settings,
  Database,
  Globe,
  CreditCard,
  BarChart3,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for E-commerce — Order Updates, Cart Recovery & D2C Growth India | Get Click Media",
  description:
    "WhatsApp Business API for e-commerce enables Indian online retailers and D2C brands to automate order confirmations, shipping updates, cart abandonment recovery, product recommendations, and review collection.",
  keywords:
    "WhatsApp API for E-commerce India, WhatsApp E-commerce India, WhatsApp Order Notification, WhatsApp Cart Recovery India, WhatsApp D2C India, E-commerce WhatsApp API India 2026",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-ecommerce" },
  openGraph: {
    title: "WhatsApp API for E-commerce — Order Updates, Cart Recovery & D2C Growth India",
    description:
      "WhatsApp Business API for e-commerce enables Indian online retailers and D2C brands to automate order confirmations, shipping updates, cart abandonment recovery, product recommendations, and review collection.",
    url: "https://getclickmedia.com/whatsapp-api-ecommerce",
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
      name: "WhatsApp API for E-commerce India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-ecommerce",
      description:
        "WhatsApp Business API for e-commerce enables Indian online retailers and D2C brands to automate order confirmations, shipping updates, cart abandonment recovery, product recommendations, and review collection.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for E-commerce India", item: "https://getclickmedia.com/whatsapp-api-ecommerce" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does WhatsApp cart recovery work for Indian e-commerce brands?",
          acceptedAnswer: { "@type": "Answer", text: "When a customer adds items to their cart but does not complete the purchase, Get Click Media's system detects the abandonment after 1 hour and sends a WhatsApp message with the product image, name, price, and a direct checkout link. If not converted, a 24-hour follow-up adds social proof. A 48-hour final message includes a 10% discount code. This sequence achieves 18-26% cart recovery vs 4-6% for email sequences." },
        },
        {
          "@type": "Question",
          name: "Does WhatsApp e-commerce integration work with Shopify?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media's native Shopify plugin connects your Shopify store to WhatsApp in real time — product catalog syncs automatically, orders trigger WhatsApp notifications, and customer interactions from WhatsApp are synced back to Shopify customer profiles. Setup takes 1-2 hours after WhatsApp API onboarding." },
        },
        {
          "@type": "Question",
          name: "What is the ROI of WhatsApp for Indian D2C brands?",
          acceptedAnswer: { "@type": "Answer", text: "Based on Get Click Media's D2C client data: WhatsApp marketing campaigns achieve ROAS of 22-28x (vs 8-15x for email). Cart recovery recovers 18-26% of abandoned carts. Replenishment reminders increase repeat purchase rate by 35%. For a D2C brand with Rs 1 crore monthly GMV, WhatsApp automation typically generates Rs 15-25 lakh additional revenue per month." },
        },
        {
          "@type": "Question",
          name: "How do WhatsApp order notifications reduce support tickets?",
          acceptedAnswer: { "@type": "Answer", text: "Order confirmation, dispatch notification, and delivery updates via WhatsApp proactively answer the 3 most common customer support questions: 'Did you receive my order?', 'When will my order ship?', and 'Where is my order now?'. These 3 question types represent 60-70% of all e-commerce support tickets. Automating these answers reduces ticket volume by 50-65%." },
        },
      ],
    },
  ],
};

// ── E-commerce Use Cases ──────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: Package,
    title: "Order Confirmation and Tracking",
    trigger: "Order placed in Shopify or WooCommerce",
    message: "Instant order confirmation: order ID, items, amount, expected delivery. Dispatch notification with courier + tracking. Out for delivery alert. Delivery confirmation.",
    result: "Support tickets -60%. Customer satisfaction +18 points. Returns due to confusion -25%.",
  },
  {
    icon: ShoppingCart,
    title: "Cart Abandonment Recovery",
    trigger: "Cart abandoned for 1 hour without purchase",
    message: "Hour 1: gentle nudge with product image. Hour 24: social proof + low stock signal. Hour 48: 10% off code if still unconverted.",
    result: "Cart recovery 18-26%. Revenue per 1,000 abandoned carts 4x email.",
  },
  {
    icon: Star,
    title: "Post-Purchase Review Collection",
    trigger: "Delivery confirmed + 24 hours",
    message: "Did your order arrive well? Rate your experience [1-2-3-4-5 star buttons]. 4-5 star → Google review link. 1-3 star → escalate to support.",
    result: "Review collection 5x vs email. Google reviews +300% over 6 months.",
  },
  {
    icon: Repeat,
    title: "Replenishment and Repeat Purchase Reminder",
    trigger: "Days since last purchase (30/60/90 days based on product category)",
    message: "Personalised: product they bought + reorder button. New arrivals in same category. Loyalty points balance.",
    result: "Repeat purchase rate +35%. Customer LTV +2.3x over 12 months.",
  },
  {
    icon: Tag,
    title: "Flash Sale and Campaign Launch",
    trigger: "Campaign scheduled send to opted-in customer list",
    message: "Product carousel with sale prices, countdown timer, and [Shop Now] button. Personalised based on past purchase category.",
    result: "Campaign ROAS 22-28x. CTR 20-25% vs 3-5% email.",
  },
  {
    icon: RefreshCw,
    title: "Return and Refund Handling",
    trigger: "Customer messages RETURN or taps Return button on order update",
    message: "Chatbot collects order ID, reason, preferred resolution (refund/exchange). Schedules reverse pickup. Confirms refund timeline.",
    result: "Return resolution time -65%. Customer satisfaction during returns +40 points.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "Order notification open rate", before: "22% (email)", after: "98% (WhatsApp)", source: "GCM e-commerce client data" },
  { metric: "Cart abandonment recovery rate", before: "4-6% (email)", after: "18-26% (WhatsApp)", source: "GCM D2C brand data India" },
  { metric: "Review submission rate", before: "2% (email request)", after: "12% (WhatsApp request)", source: "GCM post-purchase automation data" },
  { metric: "Repeat purchase rate (90 days)", before: "22% baseline", after: "38% with WhatsApp replenishment", source: "GCM D2C client cohort analysis" },
  { metric: "Support ticket volume (order-related)", before: "Baseline", after: "60% reduction with automated updates", source: "GCM e-commerce client" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "Shopify integration", desc: "Native Shopify plugin — catalog sync, order trigger automation, customer data sync" },
  { icon: Settings, title: "WooCommerce integration", desc: "WooCommerce plugin — same capabilities as Shopify integration" },
  { icon: ShoppingCart, title: "Cart recovery automation", desc: "1hr, 24hr, 48hr recovery sequence with dynamic product cards" },
  { icon: Star, title: "Review collection", desc: "Post-delivery review flow with Google review redirect for positive responses" },
  { icon: CreditCard, title: "Payment integration", desc: "Razorpay, PayU, UPI payment links for COD-to-prepaid conversion and re-ordering" },
  { icon: RefreshCw, title: "Return management", desc: "In-chat return initiation, reverse pickup scheduling, refund status updates" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp cart recovery work for Indian e-commerce brands?",
    a: "When a customer adds items to their cart but does not complete the purchase, Get Click Media's system detects the abandonment after 1 hour and sends a WhatsApp message with the product image, name, price, and a direct checkout link. If not converted, a 24-hour follow-up adds social proof (how many people bought this). A 48-hour final message includes a 10% discount code. This sequence achieves 18-26% cart recovery vs 4-6% for email sequences.",
  },
  {
    q: "Does WhatsApp e-commerce integration work with Shopify?",
    a: "Yes. Get Click Media's native Shopify plugin connects your Shopify store to WhatsApp in real time — product catalog syncs automatically, orders trigger WhatsApp notifications, and customer interactions from WhatsApp are synced back to Shopify customer profiles. Setup takes 1-2 hours after WhatsApp API onboarding.",
  },
  {
    q: "What is the ROI of WhatsApp for Indian D2C brands?",
    a: "Based on Get Click Media's D2C client data: WhatsApp marketing campaigns achieve ROAS of 22-28x (vs 8-15x for email). Cart recovery recovers 18-26% of abandoned carts. Replenishment reminders increase repeat purchase rate by 35%. For a D2C brand with Rs 1 crore monthly GMV, WhatsApp automation typically generates Rs 15-25 lakh additional revenue per month.",
  },
  {
    q: "How do WhatsApp order notifications reduce support tickets?",
    a: "Order confirmation, dispatch notification, and delivery updates via WhatsApp proactively answer the 3 most common customer support questions: 'Did you receive my order?', 'When will my order ship?', and 'Where is my order now?'. These 3 question types represent 60-70% of all e-commerce support tickets. Automating these answers reduces ticket volume by 50-65%.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIEcommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── BREADCRUMB ─────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/whatsapp-business-api" className="hover:text-[#2563eb] transition-colors">WhatsApp Business API</Link></li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">E-commerce</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            E-commerce WhatsApp API
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Business API for E-commerce<br />
            <span className="text-[#38bdf8]">Order Updates, Cart Recovery &amp; D2C Growth India</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            WhatsApp Business API for e-commerce enables Indian online retailers and D2C brands to automate
            order confirmations, shipping updates, cart abandonment recovery, product recommendations, and
            review collection. Get Click Media integrates WhatsApp with Shopify, WooCommerce, and custom OMS
            platforms — reducing cart abandonment by 18-26% and increasing repeat purchase rates by 35%.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/whatsapp-api-pricing-india"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              View Pricing
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
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
              WhatsApp Business API for e-commerce enables Indian online retailers and D2C brands to automate
              order confirmations, shipping updates, cart abandonment recovery, product recommendations, and
              review collection.
              <strong className="text-gray-900"> Get Click Media integrates WhatsApp with Shopify, WooCommerce,</strong>
              and custom OMS platforms — reducing cart abandonment by 18-26% and increasing repeat purchase rates by 35%.
            </p>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
            <p className="text-sm text-red-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-red-500" />
              Indian e-commerce brands lose an estimated <strong>₹95,000 crore annually</strong> to cart
              abandonment. Traditional cart recovery channels — email (4-6% recovery) and retargeting ads
              (2-3% conversion) — leave significant revenue on the table. WhatsApp cart recovery messages
              with product images, prices, and one-tap checkout links achieve <strong>18-26% recovery rates</strong>
              — 4x to 6x higher than email.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            India's e-commerce market processes over 15 million orders daily. Order communication via email
            achieves 20-25% open rates — meaning 75-80% of customers do not see their order updates.
            WhatsApp achieves 98% open rates. For Indian D2C brands, the difference in customer experience
            between email and WhatsApp order communication is not incremental — it is transformational.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "98%", label: "Order notification open rate vs 22% email" },
            { value: "26%", label: "Cart recovery rate via WhatsApp vs 6% email" },
            { value: "35%", label: "Increase in repeat purchase rate" },
            { value: "60%", label: "Reduction in order-related support tickets" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE SECTION: E-commerce Dashboard ────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Order Management Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">for e-commerce brands</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all customer communication from a single dashboard — order confirmations, shipping
                updates, cart recovery, review collection, and replenishment reminders — with full integration
                to your e-commerce platform.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Automated order confirmation and tracking updates</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Cart recovery sequence with product images and discounts</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Post-purchase review collection with star ratings</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Replenishment reminders for repeat purchases</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/ecommerce-dashboard.webp"
                  alt="WhatsApp API E-commerce dashboard — order confirmations, cart recovery, review collection, and replenishment reminders"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ECOMMERCE NEEDS WHATSAPP ───────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="why-ecommerce">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why E-commerce Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why E-commerce and D2C Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Indian e-commerce brands lose an estimated <strong>₹95,000 crore annually</strong> to cart
              abandonment. Traditional cart recovery channels — email (4-6% recovery) and retargeting ads
              (2-3% conversion) — leave significant revenue on the table.
            </p>
            <p>
              WhatsApp cart recovery messages with product images, prices, and one-tap checkout links achieve
              <strong> 18-26% recovery rates</strong> — 4x to 6x higher than email. With <strong>98% order
              notification open rates</strong> and <strong>35% increase in repeat purchases</strong>, WhatsApp
              is rapidly becoming the standard for e-commerce customer communication in India.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> Order communication via email achieves 20-25% open rates —
                meaning 75-80% of customers do not see their order updates. WhatsApp achieves 98% open rates.
                For Indian D2C brands, the difference is not incremental — it is transformational.
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
              WhatsApp API Use Cases for E-commerce — 6 Automations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <uc.icon className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-(family-name:--font-syne)">{uc.title}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-700">Trigger:</span> <span className="text-gray-500">{uc.trigger}</span></p>
                  <p><span className="font-semibold text-gray-700">WhatsApp message sent:</span> <span className="text-gray-500">{uc.message}</span></p>
                  <p><span className="font-semibold text-gray-700">Business result:</span> <span className="text-green-600">{uc.result}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: WhatsApp Cart Recovery Preview ──────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Cart Recovery Automation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp cart recovery <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">that actually recovers revenue</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Interactive WhatsApp cart recovery messages with product images, prices, and one-tap checkout
                links. A 3-message sequence (1hr, 24hr, 48hr) with escalating urgency and discount offers
                achieves 18-26% recovery rates — 4x to 6x higher than email.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Product image and price in every recovery message</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Social proof — how many people bought this item</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Discount offer escalation at 48 hours</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>One-tap checkout link directly to cart</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 max-w-sm mx-auto">
                <Image
                  src="/images/whatsapp/ecommerce-cart-recovery.webp"
                  alt="WhatsApp cart recovery message preview — product image, price, discount offer, and one-tap checkout link"
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
              Real results from Indian e-commerce brands
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold text-red-400">Before WhatsApp API</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">After WhatsApp API</th>
                  <th className="text-left px-4 py-4 font-semibold text-white/60">Source</th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.metric}</td>
                    <td className="px-4 py-3.5 text-center text-red-400">{row.before}</td>
                    <td className="px-4 py-3.5 text-center text-[#38bdf8]">{row.after}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: Shopify Integration ──────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/ecommerce-shopify-integration.webp"
                  alt="WhatsApp API Shopify integration — native plugin for order sync, catalog sync, and customer data sync"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
                Native Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Connect WhatsApp with <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">Shopify and WooCommerce</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media's native plugins for Shopify and WooCommerce connect your store to WhatsApp
                in real time — product catalog syncs automatically, orders trigger WhatsApp notifications,
                and customer interactions are synced back to your e-commerce platform.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Shopify native plugin", "WooCommerce plugin", "Custom OMS API", "Product catalog sync", "Order trigger automation"].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Setup takes 1-2 hours after WhatsApp API onboarding is complete.
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
              Get Click Media&apos;s WhatsApp API Capabilities for E-commerce
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map(c => (
              <div key={c.title} className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-[#38bdf8]" />
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">{c.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{c.desc}</p>
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
              WhatsApp API for E-commerce
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

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
              { label: "WhatsApp Catalog", href: "/whatsapp-catalog" },
              { label: "WhatsApp Commerce", href: "/whatsapp-commerce" },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
              { label: "Click to WhatsApp Ads", href: "/whatsapp-click-to-whatsapp-ads" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
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
                Ready to transform e-commerce communication with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for e-commerce with Shopify, WooCommerce, and custom OMS
                integration — automated order updates, cart recovery, and review collection.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
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