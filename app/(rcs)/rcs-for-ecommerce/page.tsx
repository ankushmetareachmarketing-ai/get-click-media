import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCheck, Zap, Shield, BarChart3, MessageSquare, Layers, Globe, PhoneCall, MapPin, Star, ChevronDown, ShoppingCart, Tag, Truck, RefreshCw, Heart, Award, Clock, TrendingUp, Package, Users } from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "RCS Messaging for E-commerce: Drive Sales, Recover Carts & Retain Customers | Get Click Media",
  description:
    "RCS messaging for e-commerce in India — flash sale carousels, abandoned cart recovery, order tracking, loyalty campaigns. See how Indian brands drive 5x ROI with RCS. Get a free demo.",
  keywords:
    "RCS for E-commerce, RCS Ecommerce Marketing, RCS for Online Shopping India, RCS Cart Recovery, RCS Product Carousel India",
  alternates: { canonical: "https://getclickmedia.com/rcs-for-ecommerce" },
  openGraph: {
    title: "RCS Messaging for E-commerce: Drive Sales, Recover Carts & Retain Customers | Get Click Media",
    description:
      "RCS messaging for e-commerce in India — flash sale carousels, abandoned cart recovery, order tracking, loyalty campaigns. See how Indian brands drive 5x ROI with RCS.",
    url: "https://getclickmedia.com/rcs-for-ecommerce",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "RCS Messaging for E-commerce",
      "description": "RCS Business Messaging service for Indian e-commerce brands — flash sale carousels, abandoned cart recovery, order tracking, loyalty campaigns, and personalised product recommendations.",
      "provider": {
        "@type": "Organization",
        "name": "Get Click Media",
        "url": "https://getclickmedia.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "RCS Business Messaging — E-commerce",
      "url": "https://getclickmedia.com/rcs-for-ecommerce"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
        { "@type": "ListItem", position: 3, name: "RCS for E-commerce", item: "https://getclickmedia.com/rcs-for-ecommerce" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "How does RCS help e-commerce brands increase sales?",
          "acceptedAnswer": { "@type": "Answer", "text": "RCS delivers product carousels with images and Buy Now buttons with verified sender identity, driving 20–35% CTR vs 2–3% for SMS. E-commerce brands report 5x to 8x higher revenue per message vs SMS." }
        },
        {
          "@type": "Question", "name": "Can RCS recover abandoned carts in India?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. RCS cart recovery shows the exact abandoned product with its image and a Complete Purchase button. Recovery rates: 18–26% vs 3–5% for SMS." }
        },
        {
          "@type": "Question", "name": "Can I show multiple products in one RCS message?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. RCS carousels support 2–10 product cards in one message. Each card has its own image, price, and Buy Now button." }
        },
        {
          "@type": "Question", "name": "Does RCS work with Shopify stores in India?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Get Click Media provides a native Shopify plugin for automated order events — confirmations, cart abandonment, delivery tracking, review requests — with no custom development." }
        },
        {
          "@type": "Question", "name": "Can RCS reach customers without WhatsApp?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. RCS reaches all Android users via their native messaging app — no WhatsApp app or opt-in required. Get Click Media sends SMS fallback to non-RCS devices automatically." }
        },
        {
          "@type": "Question", "name": "How quickly can I start RCS for my e-commerce store?",
          "acceptedAnswer": { "@type": "Answer", "text": "Google brand verification: 5–7 days. Shopify plugin setup: under 60 minutes. Most clients are live within 7–10 business days of starting onboarding." }
        }
      ]
    }
  ],
};

// ── E-commerce Use Cases ─────────────────────────────────────────────────
const ECOMMERCE_USE_CASES = [
  {
    icon: Tag,
    title: "Flash Sale Campaign",
    scenario: "Seasonal sale launch (Diwali, Big Billion Day, End of Season). Send to opted-in customer base 30 minutes before sale goes live.",
    solution: "Carousel of 6–8 product cards, each with product image, original price crossed out, sale price, discount %, and 'Shop Now' button. Global 'View All Deals' button below carousel.",
    result: "5x to 8x higher revenue per message vs SMS. CTR of 20–35% vs 2–3% for SMS.",
    image: "/images/rcs/ecommerce-flash-sale.webp"
  },
  {
    icon: ShoppingCart,
    title: "Abandoned Cart Recovery",
    scenario: "Customer adds items to cart but does not complete purchase. Trigger RCS 1 hour after abandonment (first message). Second trigger at 24 hours if no purchase.",
    solution: "Rich card: image of the specific product(s) left in cart, product name, price, availability (e.g., 'Only 3 left'), and 2 buttons: 'Complete Your Purchase' and 'Save for Later'. Optional: add a small discount chip (5–10%) in the 24-hour follow-up.",
    result: "18–26% recovery rates vs 3–5% for SMS. Additional 8–12% from 24-hour follow-up.",
    image: "/images/rcs/ecommerce-cart-recovery.webp"
  },
  {
    icon: Star,
    title: "Personalised Product Recommendation",
    scenario: "Post-purchase or post-browsing recommendation. Triggered by purchase category, browsing history, or collaborative filtering ('customers like you also bought').",
    solution: "Carousel of 4–6 recommended products. Each card: product image, name, price, rating (stars as text), 'View Product' button. Global 'See All Recommendations' button.",
    result: "5x higher engagement vs SMS. 41% higher CTR than standard promotional messages.",
    image: "/images/rcs/ecommerce-recommendations.webp"
  },
  {
    icon: Package,
    title: "Order Confirmation & Tracking",
    scenario: "Immediately on order placement. Transactional message — always delivered regardless of DND status.",
    solution: "Rich card: order summary (product name, quantity, price, address snippet), estimated delivery date, and 3 buttons: 'Track Order' (links to tracking URL), 'View Order Details', 'Contact Support'.",
    result: "Reduced support tickets by 35%. 60% of customers track delivery via the message.",
    image: "/images/rcs/ecommerce-order-tracking.webp"
  },
  {
    icon: Truck,
    title: "Delivery Update & Out-for-Delivery",
    scenario: "When order status changes to 'Out for Delivery'. Triggered by logistics webhook.",
    solution: "Rich card: product image, delivery agent name, estimated delivery window, map button (delivery address on Google Maps), 'Contact Delivery Agent' button, 'Reschedule Delivery' quick reply.",
    result: "Failed delivery reduction of 42%. Customer satisfaction (CSAT) score improved by 28 points.",
    image: "/images/rcs/ecommerce-delivery.webp"
  },
  {
    icon: RefreshCw,
    title: "Post-Purchase Review Request",
    scenario: "24–48 hours after confirmed delivery. One of the highest-value post-purchase touchpoints.",
    solution: "Rich card: product image, product name, 'How was your experience?' prompt, 5 quick-reply chips for star ratings (★★★★★ to ★), plus 'Write a Review' button.",
    result: "5.5x higher review submission rate vs email. 41% of recipients submit a rating.",
    image: "/images/rcs/ecommerce-reviews.webp"
  },
  {
    icon: Award,
    title: "Loyalty Points & Rewards Update",
    scenario: "After each purchase, on milestone achievement (e.g., reaching Gold tier), or when points are close to expiry (30-day expiry reminder).",
    solution: "Rich card: brand loyalty programme image, points balance, tier status, points needed for next reward, 2 buttons: 'Redeem Points' and 'View Rewards Catalogue'.",
    result: "3.9x higher engagement vs email. 28% of recipients redeem points within 48 hours.",
    image: "/images/rcs/ecommerce-loyalty.webp"
  },
  {
    icon: TrendingUp,
    title: "Price Drop Alert",
    scenario: "Customer has wishlisted a product. Triggered when the product price drops by a defined threshold (e.g., 15%+) or when a coupon becomes available.",
    solution: "Rich card: product image, old price (crossed out), new lower price, savings amount, 'Buy Now — Limited Time' button, stock urgency signal if applicable ('Only 5 left at this price').",
    result: "41% higher CTR than standard promotional messages. 22% conversion rate from alert to purchase.",
    image: "/images/rcs/ecommerce-price-drop.webp"
  },
  {
    icon: Users,
    title: "Re-engagement Campaign (Lapsed Customers)",
    scenario: "Customer has not purchased in 60–90 days. Re-engagement with personalised 'we miss you' campaign with a win-back offer.",
    solution: "Rich card: personalised greeting, curated carousel of products based on last purchase category, exclusive win-back offer (e.g., 10% extra off with code), offer validity, 'Shop Now' button.",
    result: "6.7x higher engagement vs email. 14% of lapsed customers make a purchase.",
    image: "/images/rcs/ecommerce-reengagement.webp"
  },
  {
    icon: Clock,
    title: "New Collection / Brand Launch",
    scenario: "New collection drop, brand collaboration, or category expansion. Sent to engaged customer segments 2–4 hours before public launch.",
    solution: "Carousel: 6–8 hero products from new collection, each with lifestyle image (not just product), price, 'Early Access — Shop Now' button. Countdown urgency: 'Early access ends in 3 hours'.",
    result: "3.2x higher CTR vs SMS. 45% of launches sell out within 24 hours.",
    image: "/images/rcs/ecommerce-new-collection.webp"
  }
];

// ── Funnel Mapping ──────────────────────────────────────────────────────
const FUNNEL_STAGES = [
  {
    stage: "Awareness",
    challenge: "Reaching new customers without WhatsApp opt-in",
    solution: "RCS to all Android users on purchased/rented lists — no opt-in barrier",
    cta: "Explore Collection",
    lift: "+3.2x CTR"
  },
  {
    stage: "Consideration",
    challenge: "Customer browses but doesn't add to cart",
    solution: "Browse abandonment RCS with viewed product image 30 min later",
    cta: "View Again — 10% Off",
    lift: "+5x engagement"
  },
  {
    stage: "Purchase Intent",
    challenge: "Cart abandonment (₹68,000 Cr lost in India annually)",
    solution: "Cart recovery RCS with exact product image + urgency signal",
    cta: "Complete Purchase",
    lift: "+6x recovery rate"
  },
  {
    stage: "Conversion",
    challenge: "Price sensitivity blocks final checkout",
    solution: "Price drop alert with product image + expiry countdown",
    cta: "Buy Now — ₹X Off",
    lift: "+41% CTR"
  },
  {
    stage: "Post-purchase",
    challenge: "Low review submission rates",
    solution: "1-tap star rating chips + 'Write Review' button 24hr post-delivery",
    cta: "Rate My Purchase",
    lift: "+5.5x review rate"
  },
  {
    stage: "Retention",
    challenge: "Loyalty programme low visibility",
    solution: "Points balance card + expiry alert + rewards carousel",
    cta: "Redeem Points",
    lift: "+3.9x engagement"
  },
  {
    stage: "Re-engagement",
    challenge: "Lapsed customers not responding to email",
    solution: "Personalised win-back carousel with last-category products + offer code",
    cta: "Shop Now — Code X",
    lift: "+6.7x vs email"
  }
];

// ── ROI Calculator ──────────────────────────────────────────────────────
const ROI_DATA = {
  sms: {
    sent: "1,00,000",
    costPerMsg: "₹0.12",
    totalCost: "₹12,000",
    read: "~60,000 (est.)",
    ctr: "2.2%",
    clicks: "2,200",
    conversionRate: "4%",
    orders: "88",
    aov: "₹1,400",
    revenue: "₹1,23,200",
    revenuePerRupee: "₹10.27",
    costPerOrder: "₹136"
  },
  rcs: {
    sent: "1,00,000",
    costPerMsg: "₹0.20",
    totalCost: "₹20,000",
    read: "82,000 (tracked)",
    ctr: "24%",
    clicks: "24,000",
    conversionRate: "9%",
    orders: "2,160",
    aov: "₹1,400",
    revenue: "₹30,24,000",
    revenuePerRupee: "₹151.20",
    costPerOrder: "₹9.26"
  }
};

// ── Vertical Strategies ────────────────────────────────────────────────
const VERTICAL_STRATEGIES = [
  {
    vertical: "Fashion and Apparel",
    tactics: [
      "Use lifestyle images (styled model shots, not flat-lay) to drive aspiration",
      "Personalise carousels by browsing category (menswear buyer sees menswear carousel)",
      "Use countdown urgency for limited-edition drops",
      "Include size-specific availability signals ('Only 2 left in M')"
    ],
    audience: "Highest-volume RCS e-commerce use case in India. Visual nature of fashion makes rich carousels the natural format."
  },
  {
    vertical: "Electronics and Appliances",
    tactics: [
      "Lead with the price drop figure prominently ('Save ₹7,500 today')",
      "Include a comparison-enabler button ('Compare with similar models')",
      "For cart recovery, include a trust signal ('Authorised seller · Official warranty')",
      "Focus on consideration stage (price drop alerts) and cart recovery"
    ],
    audience: "Electronics buyers research heavily before purchasing. RCS works best at two points: consideration and cart recovery."
  },
  {
    vertical: "Beauty and Personal Care",
    tactics: [
      "Use replenishment triggers (customer purchased a moisturiser 45 days ago — send refill prompt)",
      "Bundle recommendation carousels ('Complete your skincare routine') drive AOV uplift",
      "RCS loyalty programme messages — points balances, tier upgrades, exclusive member offers",
      "Use high-quality product images with lifestyle context"
    ],
    audience: "Driven by repeat purchase and loyalty. Loyalty messages consistently outperform email and SMS."
  },
  {
    vertical: "Grocery and Quick Commerce",
    tactics: [
      "Focus RCS on highest-friction touchpoints (delivery updates, out-of-stock substitutions)",
      "Out-for-delivery with map button dramatically reduces failed deliveries",
      "Verified sender trust is particularly valuable (fraudulent delivery messages are a growing concern)",
      "Operate at highest send frequency — multiple messages per week for active customers"
    ],
    audience: "Highest send frequency of any e-commerce vertical. RCS order tracking reduces support tickets significantly."
  },
  {
    vertical: "D2C (Direct-to-consumer) Brands",
    tactics: [
      "Use RCS for new product launches and limited drops (scarcity + exclusivity messaging)",
      "Build a re-engagement flow for customers who haven't purchased in 30 days",
      "Use post-purchase review requests aggressively — D2C brands live and die by social proof",
      "RCS levels the playing field against large platforms with verified sender profile"
    ],
    audience: "D2C brands face the challenge of building brand recall against Flipkart and Meesho without their marketing budgets."
  }
];

const FAQS = [
  {
    q: "How does RCS help e-commerce brands increase sales?",
    a: "RCS increases e-commerce sales by delivering visual, interactive product messages — carousels with product images, prices, and Buy Now buttons — directly to customers' native messaging apps with verified brand identity. The combination of visual presentation and one-tap purchase action drives click-through rates of 20–35% vs 2–3% for plain SMS. For flash sales, cart recovery, and price drop alerts, RCS consistently generates 5x to 8x higher revenue per message than SMS."
  },
  {
    q: "Can RCS recover abandoned carts for Indian e-commerce brands?",
    a: "Yes. RCS abandoned cart recovery is one of the highest-ROI applications for Indian e-commerce. The message shows the exact product left in the cart — with its image, name, price, and availability signal — along with a 'Complete Your Purchase' button. Triggered automatically 1 hour after cart abandonment, RCS cart recovery generates 18–26% recovery rates vs 3–5% for SMS. A 24-hour follow-up with a small discount offer captures an additional 8–12% of abandons."
  },
  {
    q: "Can I show multiple products in one RCS message?",
    a: "Yes. RCS carousels support 2 to 10 rich cards in a single message. Each card has its own product image, title, price, and 'Buy Now' or 'View Product' button. The customer swipes horizontally through the carousel to browse products and taps on whichever product interests them. Carousels are the highest-performing format for flash sale campaigns, new collection launches, and personalised product recommendations."
  },
  {
    q: "How does RCS order tracking work?",
    a: "RCS order tracking messages are triggered by your logistics or order management system via Get Click Media's API. When an order status changes — confirmed, shipped, out for delivery, delivered — an RCS message is automatically sent with the relevant product image, status update, and action buttons (Track Order, Contact Support, Reschedule Delivery). The out-for-delivery message with a 'Get Directions' map button is particularly effective at reducing failed deliveries."
  },
  {
    q: "Does RCS work with Shopify stores in India?",
    a: "Yes. Get Click Media provides a native Shopify plugin that connects your store's order events to RCS campaigns automatically. Order confirmation, dispatch, delivery, cart abandonment, price drop alerts, and review requests are all configured as automated flows within the plugin — no custom development needed. WooCommerce and Magento integrations are also available."
  },
  {
    q: "What is the minimum budget to start RCS e-commerce campaigns in India?",
    a: "There is no minimum campaign budget. RCS is priced per message at ₹0.15–0.25 per message at growth-tier volumes. A 10,000-message flash sale campaign costs ₹1,500–2,500 to send. Given the average order values and conversion rates achievable with RCS, positive ROI is typically achieved from the first campaign. Get Click Media works with D2C brands and mid-market e-commerce as well as large platforms."
  },
  {
    q: "Can RCS reach customers who do not have WhatsApp?",
    a: "Yes. RCS reaches all Android users with Google Messages on Jio, Airtel, and Vi networks — including customers who do not have WhatsApp installed or who are not on your WhatsApp opt-in list. This is a significant advantage for e-commerce brands targeting a broad audience that includes non-WhatsApp users (typically older customers, budget device users, and rural customers). For non-RCS devices, Get Click Media sends SMS fallback automatically."
  },
  {
    q: "How quickly can I launch my first RCS campaign?",
    a: "Google brand verification takes 5–7 business days — Get Click Media manages this on your behalf. For Shopify stores, the plugin integration takes under 60 minutes once verification is complete. For custom API integrations, typical development time is 1–2 days for standard event triggers. Most e-commerce clients are live with their first RCS campaign within 7–10 business days of starting the onboarding process."
  }
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function RCSCommercePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ─────────────────────────────────────────────────────────────────
          HERO — with breadcrumb inside
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mt-2 bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          {/* ── BREADCRUMB INSIDE HERO WITH VISIBLE BACKGROUND ── */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/60 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden className="text-white/30">/</li>
              <li><Link href="/rcs-messaging" className="hover:text-white transition-colors">RCS Messaging</Link></li>
              <li aria-hidden className="text-white/30">/</li>
              <li className="text-white font-medium">RCS for E-commerce</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                E-commerce RCS Messaging
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                RCS Messaging for E-commerce:<br />
                <span className="text-[#38bdf8]">Drive Sales, Recover Carts &amp; Retain Customers</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                India&apos;s e-commerce market crossed ₹5 lakh crore in 2025. Every major platform
                is fighting for customer attention — and that attention is being won or lost
                in the messaging inbox. RCS gives you product carousels, Buy Now buttons,
                and verified sender identity that customers trust.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
                  Get a Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  Talk to Our E-commerce Team
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 max-w-md mx-auto lg:mx-0">
                <p className="text-white/90 text-sm font-medium">
                  <span className="text-[#38bdf8] font-bold">Headline result:</span> E-commerce brands using RCS for flash sales report 
                  <span className="text-white font-bold"> 5x to 8x higher revenue per message</span> compared to equivalent plain SMS campaigns.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[50%] shrink-0">
              <Image
                src="/images/rcs/ecommerce-hero.webp"
                alt="RCS E-commerce product carousel on mobile phone"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "20–35%", label: "Click-Through Rate", sub: "vs 2–3% for SMS campaigns" },
            { value: "18–26%", label: "Cart Recovery Rate", sub: "vs 3–5% for SMS" },
            { value: "5–8×", label: "Higher Revenue per Message", sub: "compared to SMS flash sales" },
            { value: "₹9.26", label: "Cost per Order", sub: "vs ₹136 for SMS campaigns" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-bold text-gray-900">{s.label}</p>
              <p className="text-xs text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY E-COMMERCE NEEDS RCS ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="why-ecommerce">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/rcs/ecommerce-why-rcs.webp"
                alt="E-commerce messaging comparison — SMS vs RCS visual"
                width={700}
                height={525}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why E-commerce Needs RCS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                Why E-commerce Messaging in India Needs to Go Beyond SMS
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                SMS changed Indian e-commerce. The ability to send order confirmations, delivery 
                updates, and promotional alerts instantly gave brands a direct channel. But 
                Indian e-commerce has outgrown what SMS can deliver.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <h4 className="text-sm font-bold text-red-600 mb-2">✕ Products cannot be sold by text</h4>
                  <p className="text-sm text-gray-600">A flash sale on a smartphone, a Diwali collection drop — these are visual purchase decisions. SMS cannot show the product. India&apos;s e-commerce CTR on SMS averages 1.5–3%.</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                  <h4 className="text-sm font-bold text-amber-600 mb-2">✕ Unverified sender identity destroys trust</h4>
                  <p className="text-sm text-gray-600">Indian consumers receive dozens of promotional messages daily from unknown sender IDs. RCS puts your brand&apos;s verified name and logo at the top of every message — visible before the customer opens it.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-600 mb-2">✓ No engagement data means no optimisation</h4>
                  <p className="text-sm text-gray-600">SMS analytics are binary: delivered or not. RCS gives you read receipts, button-tap tracking, and conversion attribution. You know exactly what percentage read, which product they tapped, and whether they completed the purchase.</p>
                </div>
              </div>

              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="text-[#38bdf8] font-bold">The opportunity:</span> India&apos;s e-commerce market crossed ₹5 lakh crore in 2025. 
                  With RCS, brands can capture attention with visual, shoppable messages that drive 
                  <span className="text-white font-bold"> 5–8× higher revenue per message</span> than SMS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 USE CASES ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              E-commerce Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              10 High-ROI RCS Use Cases for Indian E-commerce
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Here are the 10 most effective ways Indian e-commerce brands are using RCS 
              to drive measurable revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ECOMMERCE_USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <uc.icon className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-(family-name:--font-syne)">{uc.title}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-700">Trigger:</span> <span className="text-gray-500">{uc.scenario}</span></p>
                  <p><span className="font-semibold text-gray-700">RCS format:</span> <span className="text-gray-500">{uc.solution}</span></p>
                  <p><span className="font-semibold text-gray-700">Result:</span> <span className="text-gray-500">{uc.result}</span></p>
                </div>
                <div className="relative w-full aspect-[4/3] mt-2 rounded-lg overflow-hidden">
                  <Image
                    src={uc.image}
                    alt={`RCS e-commerce use case: ${uc.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUNNEL MAPPING ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="funnel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Full Funnel Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Across the Full E-commerce Marketing Funnel
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              RCS maps to every stage of the e-commerce customer lifecycle — from acquisition 
              through to retention.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Funnel Stage</th>
                  <th className="text-left px-4 py-4 font-semibold">Ecomm Challenge</th>
                  <th className="text-left px-4 py-4 font-semibold">RCS Solution</th>
                  <th className="text-center px-4 py-4 font-semibold">CTA Button</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">Lift vs SMS</th>
                </tr>
              </thead>
              <tbody>
                {FUNNEL_STAGES.map((row, i) => (
                  <tr key={row.stage} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-bold text-gray-900">{row.stage}</td>
                    <td className="px-4 py-3.5 text-gray-600 text-xs">{row.challenge}</td>
                    <td className="px-4 py-3.5 text-gray-600 text-xs">{row.solution}</td>
                    <td className="px-4 py-3.5 text-center text-[#2563eb] font-medium text-xs">{row.cta}</td>
                    <td className="px-4 py-3.5 text-center text-green-600 font-bold text-xs">{row.lift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR ──────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="roi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              ROI Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              RCS vs SMS ROI: Indian E-commerce Flash Sale
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              A worked ROI example for a typical Indian mid-market e-commerce brand running a 
              flash sale campaign to 1,00,000 opted-in customers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-white/5 text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold text-red-400">Bulk SMS</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">RCS</th>
                  <th className="text-center px-4 py-4 font-semibold text-green-400">Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5"><td className="px-5 py-3.5 text-white font-medium">Messages sent</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.sms.sent}</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.rcs.sent}</td><td className="px-4 py-3.5 text-center text-green-400">—</td></tr>
                <tr className="bg-white/10"><td className="px-5 py-3.5 text-white font-medium">Cost per message</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.sms.costPerMsg}</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.rcs.costPerMsg}</td><td className="px-4 py-3.5 text-center text-green-400">+66%</td></tr>
                <tr className="bg-white/5"><td className="px-5 py-3.5 text-white font-medium">Total send cost</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.sms.totalCost}</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.rcs.totalCost}</td><td className="px-4 py-3.5 text-center text-green-400">+₹8,000</td></tr>
                <tr className="bg-white/10"><td className="px-5 py-3.5 text-white font-medium">Messages read</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.sms.read}</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.rcs.read}</td><td className="px-4 py-3.5 text-center text-green-400">+22,000</td></tr>
                <tr className="bg-white/5"><td className="px-5 py-3.5 text-white font-medium">CTR (clicks / sends)</td><td className="px-4 py-3.5 text-center text-red-400">{ROI_DATA.sms.ctr}</td><td className="px-4 py-3.5 text-center text-[#38bdf8]">{ROI_DATA.rcs.ctr}</td><td className="px-4 py-3.5 text-center text-green-400">+21.8 pts</td></tr>
                <tr className="bg-white/10"><td className="px-5 py-3.5 text-white font-medium">Total clicks</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.sms.clicks}</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.rcs.clicks}</td><td className="px-4 py-3.5 text-center text-green-400">+21,800</td></tr>
                <tr className="bg-white/5"><td className="px-5 py-3.5 text-white font-medium">Conversion rate</td><td className="px-4 py-3.5 text-center text-red-400">{ROI_DATA.sms.conversionRate}</td><td className="px-4 py-3.5 text-center text-[#38bdf8]">{ROI_DATA.rcs.conversionRate}</td><td className="px-4 py-3.5 text-center text-green-400">+5 pts</td></tr>
                <tr className="bg-white/10"><td className="px-5 py-3.5 text-white font-medium">Total orders</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.sms.orders}</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.rcs.orders}</td><td className="px-4 py-3.5 text-center text-green-400">+2,072</td></tr>
                <tr className="bg-white/5"><td className="px-5 py-3.5 text-white font-medium">Average order value</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.sms.aov}</td><td className="px-4 py-3.5 text-center text-white">{ROI_DATA.rcs.aov}</td><td className="px-4 py-3.5 text-center text-green-400">—</td></tr>
                <tr className="bg-white/10"><td className="px-5 py-3.5 text-white font-medium">Total revenue generated</td><td className="px-4 py-3.5 text-center text-red-400">{ROI_DATA.sms.revenue}</td><td className="px-4 py-3.5 text-center text-[#38bdf8]">{ROI_DATA.rcs.revenue}</td><td className="px-4 py-3.5 text-center text-green-400">+₹28,90,800</td></tr>
                <tr className="bg-white/5"><td className="px-5 py-3.5 text-white font-bold">Revenue per ₹1 spent</td><td className="px-4 py-3.5 text-center text-red-400">{ROI_DATA.sms.revenuePerRupee}</td><td className="px-4 py-3.5 text-center text-[#38bdf8] font-bold">{ROI_DATA.rcs.revenuePerRupee}</td><td className="px-4 py-3.5 text-center text-green-400 font-bold">+₹140.93</td></tr>
                <tr className="bg-white/10"><td className="px-5 py-3.5 text-white font-bold">Cost per order acquired</td><td className="px-4 py-3.5 text-center text-red-400">{ROI_DATA.sms.costPerOrder}</td><td className="px-4 py-3.5 text-center text-[#38bdf8] font-bold">{ROI_DATA.rcs.costPerOrder}</td><td className="px-4 py-3.5 text-center text-green-400 font-bold">-₹126.74</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-white/5 rounded-xl p-5 border border-white/10">
            <p className="text-white/80 text-sm leading-relaxed">
              <span className="text-[#38bdf8] font-bold">Interpretation:</span> RCS costs ₹8,000 more to send. 
              It generates <span className="text-white font-bold">₹28,90,800 more in revenue</span>. For every rupee spent on RCS messaging, 
              the brand earns <span className="text-white font-bold">₹151</span> — vs ₹10 for SMS. The ROI differential is structural, 
              driven by visual product presentation, verified trust, and measurable engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ── VERTICAL STRATEGIES ────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="verticals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Vertical Strategies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Messaging Strategy by E-commerce Vertical
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VERTICAL_STRATEGIES.map((v) => (
              <div key={v.vertical} className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-3 hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-[#2563eb] font-(family-name:--font-syne)">{v.vertical}</h3>
                <ul className="space-y-1.5">
                  {v.tactics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCheck className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 rounded-lg p-3 mt-2">
                  <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Audience:</span> {v.audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GET CLICK MEDIA ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="why-gcm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Get Click Media
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Get Click Media RCS Platform: Built for E-commerce
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "Shopify, WooCommerce & Magento integrations", desc: "Pre-built plugins for the three platforms powering the majority of Indian D2C stores. Install, connect, and your store's order events automatically trigger RCS messages." },
                  { title: "Real-time personalisation engine", desc: "Dynamic personalisation fields — customer name, product names, prices, order numbers, points balances, discount codes — inserted at the point of send." },
                  { title: "A/B testing for e-commerce campaigns", desc: "Test message format, send time, CTA labels, carousel length, and offer type. Dashboard shows statistical significance alongside performance metrics." },
                  { title: "Segment-based sending", desc: "Upload segmented customer lists or connect via API to your CDP. Send different campaigns to different segments simultaneously — VIPs, bargain hunters, lapsed customers." },
                  { title: "Unified RCS + SMS + WhatsApp", desc: "RCS for visual campaigns, WhatsApp for support and community, SMS as universal fallback and OTP delivery. One platform, one API, one analytics view." },
                  { title: "Analytics built for e-commerce", desc: "Track delivery, read rate, CTR per carousel card, conversion rate per button, revenue per campaign, cost per order, and ROAS. Export to GA, Mixpanel, or any BI tool." },
                ].map(p => (
                  <div key={p.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCheck className="w-3 h-3 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{p.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-[44%] shrink-0">
              <Image
                src="/images/rcs/ecommerce-dashboard.webp"
                alt="Get Click Media RCS e-commerce dashboard analytics"
                width={700}
                height={525}
                className="w-full h-auto"
              />
            </div>
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
              RCS Messaging for E-commerce in India
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

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Ready to launch RCS for your e-commerce store?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media handles Google brand verification, plugin setup, and campaign strategy.
                Most e-commerce clients are live within 7–10 business days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Get a Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Talk to Our E-commerce Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}