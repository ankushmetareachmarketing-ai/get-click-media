import type { Metadata } from "next";
import {
  IndianRupee,
  Layers,
  ShieldOff,
  Route,
  FileText,
  CalendarClock,
  ShieldCheck,
  Headset,
  BarChart3,
  Webhook,
  Ban,
  UserCog,
} from "lucide-react";
import { PricingPageTemplate } from "../_templates/pricing-page-template";

export const metadata: Metadata = {
  title: "Transactional SMS Pricing in India 2026 — DND-Exempt SMS Rates | Get Click Media",
  description:
    "Transactional SMS pricing in India starts at ₹0.09 per SMS on the Growth plan. Compare Starter, Growth, and Enterprise plans for DND-exempt SMS delivery of OTPs, alerts, and service messages.",
  keywords:
    "transactional sms pricing india, transactional sms cost, dnd exempt sms price, transactional sms rate per message, transactional sms plans india",
  alternates: { canonical: "https://getclickmedia.com/transactional-sms-pricing" },
  openGraph: {
    title: "Transactional SMS Pricing in India 2026 — DND-Exempt SMS Rates",
    description:
      "Transactional SMS pricing in India starts at ₹0.09 per SMS. Compare plans, volume-based rates, and DND-exempt delivery.",
    url: "https://getclickmedia.com/transactional-sms-pricing",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://getclickmedia.com/#org",
      name: "Get Click Media",
      url: "https://getclickmedia.com",
      logo: { "@type": "ImageObject", url: "https://getclickmedia.com/images/gcm-logo.png" },
      address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    },
    {
      "@type": "Product",
      name: "Transactional SMS Service — Get Click Media",
      description: "Transactional SMS service for DND-exempt OTPs, alerts, and service messages in India with TRAI DLT compliance support and 99.9% delivery uptime.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "0.065",
        highPrice: "0.12",
        offerCount: "3",
        url: "https://getclickmedia.com/transactional-sms-pricing",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Bulk SMS Services", item: "https://getclickmedia.com/bulk-sms-service-provider-india" },
        { "@type": "ListItem", position: 3, name: "Transactional SMS Pricing", item: "https://getclickmedia.com/transactional-sms-pricing" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does transactional SMS cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Transactional SMS in India typically costs between ₹0.065 and ₹0.12 per SMS, depending on monthly volume. Get Click Media's Growth plan starts at ₹0.09 per SMS for up to 1,00,000 SMS/month on the DND-exempt transactional route, with rates dropping toward ₹0.065-0.07 per SMS at volumes above 5,00,000/month.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between transactional and promotional SMS pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Transactional SMS reaches DND-registered numbers because it's service or account-related communication — OTPs, alerts, confirmations — while promotional SMS can only reach numbers not registered on DND and is used for marketing content. Get Click Media prices both routes identically per SMS across all plans; the difference is regulatory (which numbers each route may legally reach), not a price premium.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a separate DLT template for transactional SMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — transactional SMS templates are registered separately from promotional templates on the TRAI DLT platform, under the same entity ID, and must match the exact message format that will be sent (with variable fields marked). Get Click Media's onboarding team handles this registration as part of every plan at no extra platform fee.",
          },
        },
        {
          "@type": "Question",
          name: "Is transactional SMS pricing the same for OTPs and other alerts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — OTPs, payment confirmations, delivery alerts, and account notifications are all transactional content billed at the same per-SMS rate on Get Click Media's plans. There's no separate 'OTP-only' pricing tier; the transactional route pricing applies uniformly to all DND-exempt service messages.",
          },
        },
        {
          "@type": "Question",
          name: "Can transactional SMS volume be mixed with promotional SMS on the same plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Starter and Growth plans support both transactional and promotional SMS from the same account, billed at the same per-SMS rate, with the platform automatically routing each message correctly based on its registered template category so DND compliance is handled without manual selection.",
          },
        },
      ],
    },
  ],
};

const TIERS = [
  {
    name: "Starter",
    price: "₹0.12",
    unit: "/ SMS",
    volume: "Up to 10,000 SMS/month",
    features: [
      "Transactional Route (DND-exempt)",
      "DLT Registration Support",
      "Basic Analytics Dashboard",
      "Email Support",
      "REST API Access",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/transactional-sms-service",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹0.09",
    unit: "/ SMS",
    volume: "Up to 1,00,000 SMS/month",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Priority Delivery Queue",
      "Webhook Delivery Reports",
      "Dedicated Account Manager",
      "24×7 Phone Support",
    ],
    ctaLabel: "Get Free Demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    volume: "Above 1,00,000 SMS/month",
    features: [
      "Everything in Growth",
      "Rates as low as ₹0.065/SMS at scale",
      "Custom SLA & Uptime Guarantee",
      "Automatic Failover Routes",
      "On-site Integration Support",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/transactional-sms-service",
    highlighted: false,
  },
];

const SLAB_ROWS = [
  { volume: "1 – 10,000", price: "₹0.12 / SMS", plan: "Starter" },
  { volume: "10,001 – 50,000", price: "₹0.10 / SMS", plan: "Growth" },
  { volume: "50,001 – 1,00,000", price: "₹0.09 / SMS", plan: "Growth" },
  { volume: "1,00,001 – 5,00,000", price: "₹0.075 / SMS", plan: "Enterprise" },
  { volume: "5,00,001 – 10,00,000", price: "₹0.065 / SMS", plan: "Enterprise" },
  { volume: "10,00,000+", price: "Custom quote", plan: "Enterprise" },
];

const COMPARISON_ROWS = [
  { channel: "Transactional SMS (Get Click Media)", cost: "₹0.065 – ₹0.12 / SMS", dnd: "Reaches DND-registered numbers", bestFor: "OTPs, alerts, confirmations, account updates" },
  { channel: "Promotional SMS", cost: "₹0.06 – ₹0.12 / SMS", dnd: "Non-DND numbers only", bestFor: "Marketing campaigns, offers" },
  { channel: "WhatsApp Utility Template", cost: "~₹0.30 – ₹0.90 / conversation*", dnd: "Reaches opted-in WhatsApp users", bestFor: "Rich-media service notifications" },
  { channel: "Voice Call / IVR Alert", cost: "~₹0.40 – ₹0.80 / minute*", dnd: "Reaches any phone if answered", bestFor: "High-urgency confirmations" },
];

const FACTORS = [
  { icon: Layers, title: "Monthly transactional SMS volume", desc: "Price per SMS drops as your monthly volume slab increases — from ₹0.12 at low volume to ₹0.065-0.07 at 5,00,000+ SMS/month" },
  { icon: ShieldOff, title: "DND-exempt route access", desc: "Transactional routing that legally reaches DND-registered numbers is included at the standard per-SMS rate, not sold as a premium add-on" },
  { icon: Route, title: "Route priority & reliability", desc: "Direct operator connections for time-critical alerts are included on Growth and Enterprise plans for consistent low-latency delivery" },
  { icon: FileText, title: "Template registration", desc: "Every transactional template must be pre-registered on TRAI DLT with exact message format; GCM includes this in onboarding" },
  { icon: CalendarClock, title: "Contract term & commitment", desc: "Prepaid credit purchases and annual commitments typically unlock better per-SMS rates than pay-as-you-go top-ups" },
  { icon: IndianRupee, title: "GST & regulatory charges", desc: "Published per-SMS rates are exclusive of GST; DLT-related charges set by TRAI/DLT operators may apply separately" },
];

const CAPABILITIES = [
  { icon: ShieldCheck, title: "DLT-registered transactional templates", desc: "Entity, header, and transactional template registration assistance included at no extra platform fee" },
  { icon: Webhook, title: "Webhook delivery reports", desc: "Real-time delivery-status callbacks so your systems know instantly whether a service alert landed" },
  { icon: BarChart3, title: "Live delivery dashboard", desc: "Real-time transactional SMS delivery and failure-rate reporting across every integration" },
  { icon: Ban, title: "No hidden charges", desc: "No platform setup fee, no charge for undelivered messages, and no minimum commitment on Starter and Growth plans" },
  { icon: Headset, title: "24×7 support (Growth & Enterprise)", desc: "Phone and priority ticket support for time-critical transactional delivery issues" },
  { icon: UserCog, title: "Automatic failover routes (Enterprise)", desc: "Secondary route failover to keep transactional delivery consistent during primary-route congestion" },
];

const FAQS = [
  {
    q: "How much does transactional SMS cost in India?",
    a: "Transactional SMS in India typically costs between ₹0.065 and ₹0.12 per SMS, depending on monthly volume. Get Click Media's Growth plan starts at ₹0.09 per SMS for up to 1,00,000 SMS/month on the DND-exempt transactional route, with rates dropping toward ₹0.065-0.07 per SMS at volumes above 5,00,000/month.",
  },
  {
    q: "What's the difference between transactional and promotional SMS pricing?",
    a: "Transactional SMS reaches DND-registered numbers because it's service or account-related communication — OTPs, alerts, confirmations — while promotional SMS can only reach numbers not registered on DND and is used for marketing content. Get Click Media prices both routes identically per SMS across all plans; the difference is regulatory (which numbers each route may legally reach), not a price premium.",
  },
  {
    q: "Do I need a separate DLT template for transactional SMS?",
    a: "Yes — transactional SMS templates are registered separately from promotional templates on the TRAI DLT platform, under the same entity ID, and must match the exact message format that will be sent (with variable fields marked). Get Click Media's onboarding team handles this registration as part of every plan at no extra platform fee.",
  },
  {
    q: "Is transactional SMS pricing the same for OTPs and other alerts?",
    a: "Yes — OTPs, payment confirmations, delivery alerts, and account notifications are all transactional content billed at the same per-SMS rate on Get Click Media's plans. There's no separate 'OTP-only' pricing tier; the transactional route pricing applies uniformly to all DND-exempt service messages.",
  },
  {
    q: "Can transactional SMS volume be mixed with promotional SMS on the same plan?",
    a: "Yes — Starter and Growth plans support both transactional and promotional SMS from the same account, billed at the same per-SMS rate, with the platform automatically routing each message correctly based on its registered template category so DND compliance is handled without manual selection.",
  },
];

const RELATED_LINKS = [
  { label: "Transactional SMS Service", href: "/transactional-sms-service" },
  { label: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
  { label: "OTP SMS Pricing", href: "/otp-sms-pricing" },
  { label: "OTP SMS Service Provider", href: "/otp-sms-service-provider" },
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "Bulk SMS for Banking", href: "/bulk-sms-for-banking" },
  { label: "Bulk SMS for Ecommerce", href: "/bulk-sms-for-ecommerce" },
];

export default function TransactionalSmsPricingPage() {
  return (
    <PricingPageTemplate
      breadcrumbLabel="Transactional SMS Pricing"
      heroEyebrow="Transactional SMS Pricing"
      heroTitle="Transactional SMS Pricing in India"
      heroHighlight="DND-Exempt SMS Rates"
      heroDescription={
        <>
          Transparent, volume-based transactional SMS pricing for Indian businesses — starting at{" "}
          <strong className="text-gray-900">₹0.09 per SMS</strong> on a DND-exempt route, with
          DLT registration support included on every plan.
        </>
      }
      heroImage="/images/bulk-sms/transactional-sms-service-provider.webp"
      heroImageAlt="Transactional SMS pricing in India — plan comparison dashboard"
      heroTrustLine="DND-exempt route · DLT registration included · GST-exclusive, transparent per-SMS rates"
      stats={[
        { value: "₹0.09", label: "Starting price per SMS (Growth plan)" },
        { value: "₹0.065", label: "Lowest rate at 5,00,000+ SMS/month" },
        { value: "0", label: "Platform setup fee" },
        { value: "99.9%", label: "Delivery uptime" },
      ]}
      aeoParagraph={
        <>
          Transactional SMS pricing in India ranges from ₹0.065 to ₹0.12 per SMS depending on
          monthly volume, with{" "}
          <strong className="text-gray-900">Get Click Media's Growth plan starting at ₹0.09 per SMS</strong>{" "}
          for up to 1,00,000 SMS/month on the DND-exempt transactional route. Pricing is identical
          to the promotional route — the difference is regulatory reach, not cost.
        </>
      }
      insightCallout={
        <>
          A common misconception is that transactional SMS costs more than promotional SMS
          because it reaches DND numbers. In practice, most providers — Get Click Media included
          — price both routes the same per SMS. What actually varies is route quality: whether
          you're on a shared queue or a direct operator connection, which affects delivery speed
          more than price.
        </>
      }
      tiersTitle="Transactional SMS Pricing Plans for Indian Businesses"
      tiersSubtitle="No hidden charges. DND-exempt routing and DLT assistance included in every plan."
      tiers={TIERS}
      tiersDisclaimer="Prices shown are indicative and exclusive of GST. Final pricing depends on volume, route, and contract terms. DLT-related charges set by TRAI/DLT operators may apply separately."
      slabTitle="Transactional SMS Rate Card by Monthly Volume"
      slabSubtitle="Your effective per-SMS rate drops automatically as your monthly volume crosses each slab."
      slabCaption="Transactional SMS pricing by monthly volume slab"
      slabColumns={[
        { key: "volume", label: "Monthly SMS Volume" },
        { key: "price", label: "Price per SMS", align: "center" },
        { key: "plan", label: "Plan", align: "center" },
      ]}
      slabRows={SLAB_ROWS}
      comparisonTitle="Transactional SMS Cost vs. Other Service-Alert Channels in India"
      comparisonSubtitle="Indicative market ranges for India — transactional SMS is the only channel that reliably reaches DND-registered numbers at this cost."
      comparisonCaption="Cost comparison of transactional/service-alert channels in India"
      comparisonColumns={[
        { key: "channel", label: "Channel" },
        { key: "cost", label: "Indicative Cost", align: "center" },
        { key: "dnd", label: "DND Reach" },
        { key: "bestFor", label: "Best For" },
      ]}
      comparisonRows={COMPARISON_ROWS}
      comparisonHighlightKey="cost"
      factorsTitle="What Determines Your Transactional SMS Price"
      factors={FACTORS}
      capabilitiesTitle="What's Included in Every Get Click Media Transactional Plan"
      capabilities={CAPABILITIES}
      faqHeading="Transactional SMS Pricing in India — FAQs"
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to see your exact transactional SMS rate?"
      bottomCtaDescription="Get Click Media provides transparent, volume-based transactional SMS pricing for Indian businesses with DND-exempt routing and DLT support included."
      schema={schema}
    />
  );
}
