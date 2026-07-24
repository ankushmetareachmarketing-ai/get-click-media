import type { Metadata } from "next";
import {
  Package,
  ShoppingCart,
  Star,
  Repeat,
  Tag,
  RefreshCw,
  Database,
  Settings,
  CreditCard,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for E-commerce- Order Updates, Cart Recovery & D2C Growth India | Get Click Media",
  description:
    "WhatsApp Business API for e-commerce enables Indian online retailers and D2C brands to automate order confirmations, shipping updates, cart abandonment recovery, product recommendations, and review collection.",
  keywords:
    "WhatsApp API for E-commerce India, WhatsApp E-commerce India, WhatsApp Order Notification, WhatsApp Cart Recovery India, WhatsApp D2C India, E-commerce WhatsApp API India 2026",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-ecommerce" },
  openGraph: {
    title: "WhatsApp API for E-commerce- Order Updates, Cart Recovery & D2C Growth India",
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
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media's native Shopify plugin connects your Shopify store to WhatsApp in real time- product catalog syncs automatically, orders trigger WhatsApp notifications, and customer interactions from WhatsApp are synced back to Shopify customer profiles. Setup takes 1-2 hours after WhatsApp API onboarding." },
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
  { icon: Database, title: "Shopify integration", desc: "Native Shopify plugin- catalog sync, order trigger automation, customer data sync" },
  { icon: Settings, title: "WooCommerce integration", desc: "WooCommerce plugin- same capabilities as Shopify integration" },
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
    a: "Yes. Get Click Media's native Shopify plugin connects your Shopify store to WhatsApp in real time- product catalog syncs automatically, orders trigger WhatsApp notifications, and customer interactions from WhatsApp are synced back to Shopify customer profiles. Setup takes 1-2 hours after WhatsApp API onboarding.",
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

const RELATED_LINKS = [
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
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIEcommercePage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="E-commerce"
      heroEyebrow="E-commerce WhatsApp API"
      heroTitle="WhatsApp Business API for E-commerce"
      heroHighlight="Order Updates, Cart Recovery & D2C Growth India"
      heroDescription={
        <>
          WhatsApp Business API for e-commerce enables Indian online retailers and D2C brands to
          automate order confirmations, shipping updates, cart abandonment recovery, product
          recommendations, and review collection.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with Shopify, WooCommerce, and custom OMS platforms- reducing cart abandonment by 18-26% and increasing repeat purchase rates by 35%.</strong>
        </>
      }
      heroImage="/images/whatsapp/ecommerce/whatsapp-bussiness-api-for-ecommerce.png"
      heroImageAlt="WhatsApp Business API for E-commerce- order updates, cart recovery, and D2C growth dashboard"
      heroTrustLine="Official Meta BSP · Native Shopify & WooCommerce integration · Razorpay, PayU & UPI payments · India-based support"
      stats={[
        { value: "98%", label: "Order notification open rate vs 22% email" },
        { value: "26%", label: "Cart recovery rate via WhatsApp vs 6% email" },
        { value: "35%", label: "Increase in repeat purchase rate" },
        { value: "60%", label: "Reduction in order-related support tickets" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for e-commerce enables Indian online retailers and D2C brands to automate
          order confirmations, shipping updates, cart abandonment recovery, product recommendations, and
          review collection.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with Shopify, WooCommerce,</strong> and
          custom OMS platforms- reducing cart abandonment by 18-26% and increasing repeat purchase rates by 35%.
        </>
      }
      insightCallout={
        <>
          Indian e-commerce brands lose an estimated <strong>₹95,000 crore annually</strong> to cart
          abandonment. Traditional cart recovery channels- email (4-6% recovery) and retargeting ads
          (2-3% conversion)- leave significant revenue on the table. WhatsApp cart recovery messages
          with product images, prices, and one-tap checkout links achieve{" "}
          <strong>18-26% recovery rates</strong>- 4x to 6x higher than email.
        </>
      }
      whyIndustryTitle="Why E-commerce and D2C Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Indian e-commerce brands lose an estimated <strong>₹95,000 crore annually</strong> to cart
          abandonment. Traditional cart recovery channels- email (4-6% recovery) and retargeting ads
          (2-3% conversion)- leave significant revenue on the table.
        </>,
        <>
          WhatsApp cart recovery messages with product images, prices, and one-tap checkout links
          achieve <strong>18-26% recovery rates</strong>- 4x to 6x higher than email. With{" "}
          <strong>98% order notification open rates</strong> and{" "}
          <strong>35% increase in repeat purchases</strong>, WhatsApp is rapidly becoming the standard
          for e-commerce customer communication in India.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Order communication via email achieves 20-25% open rates-
          meaning 75-80% of customers do not see their order updates. WhatsApp achieves 98% open rates.
          For Indian D2C brands, the difference is not incremental- it is transformational.
        </>
      }
      imageSections={[
        {
          eyebrow: "Order Management Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for e-commerce brands</span>
            </>
          ),
          description:
            "Manage all customer communication from a single dashboard- order confirmations, shipping updates, cart recovery, review collection, and replenishment reminders- with full integration to your e-commerce platform.",
          bullets: [
            "Automated order confirmation and tracking updates",
            "Cart recovery sequence with product images and discounts",
            "Post-purchase review collection with star ratings",
            "Replenishment reminders for repeat purchases",
          ],
          image: "/images/whatsapp/ecommerce/whatsapp-bussiness-api-for-ecommerce-dashboard.webp",
          imageAlt: "WhatsApp API E-commerce dashboard- order confirmations, cart recovery, review collection, and replenishment reminders",
        },
        {
          eyebrow: "Cart Recovery Automation",
          title: (
            <>
              WhatsApp cart recovery <span className="text-[#2563eb]">that actually recovers revenue</span>
            </>
          ),
          description:
            "Interactive WhatsApp cart recovery messages with product images, prices, and one-tap checkout links. A 3-message sequence (1hr, 24hr, 48hr) with escalating urgency and discount offers achieves 18-26% recovery rates- 4x to 6x higher than email.",
          bullets: [
            "Product image and price in every recovery message",
            "Social proof- how many people bought this item",
            "Discount offer escalation at 48 hours",
            "One-tap checkout link directly to cart",
          ],
          image: "/images/whatsapp/ecommerce/whatsapp-cart-recovery-message-preview.webp",
          imageAlt: "WhatsApp cart recovery message preview- product image, price, discount offer, and one-tap checkout link",
          imageSide: "left",
        },
        {
          eyebrow: "Native Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">Shopify and WooCommerce</span>
            </>
          ),
          description:
            "Get Click Media's native plugins for Shopify and WooCommerce connect your store to WhatsApp in real time- product catalog syncs automatically, orders trigger WhatsApp notifications, and customer interactions are synced back to your e-commerce platform. Setup takes 1-2 hours after WhatsApp API onboarding is complete.",
          bullets: ["Shopify native plugin", "WooCommerce plugin", "Custom OMS API", "Product catalog sync", "Order trigger automation"],
          image: "/images/whatsapp/ecommerce/whatsapp-api-shopify-woocommerce-integration.webp",
          imageAlt: "WhatsApp API Shopify and WooCommerce integration- native plugin for order sync, catalog sync, and customer data sync",
          imageSide: "left",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for E-commerce- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for E-commerce"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform e-commerce communication with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for e-commerce with Shopify, WooCommerce, and custom OMS integration- automated order updates, cart recovery, and review collection."
      schema={schema}
    />
  );
}
