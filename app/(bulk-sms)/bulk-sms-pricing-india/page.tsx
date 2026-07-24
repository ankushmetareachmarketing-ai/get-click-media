import type { Metadata } from "next";
import {
  IndianRupee,
  Layers,
  FileCheck2,
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
  title: "Bulk SMS Pricing in India 2026- Per-SMS Rates & Plans | Get Click Media",
  description:
    "Bulk SMS pricing in India starts at ₹0.09 per SMS on the Growth plan. Compare Starter, Growth, and Enterprise plans, volume-based rates, and see how SMS pricing compares to WhatsApp, RCS, and voice.",
  keywords:
    "bulk sms pricing india, bulk sms rates india, bulk sms cost per sms, sms pricing plans india, cheapest bulk sms provider india, sms api pricing india",
  alternates: { canonical: "https://getclickmedia.com/bulk-sms-pricing-india" },
  openGraph: {
    title: "Bulk SMS Pricing in India 2026- Per-SMS Rates & Plans",
    description:
      "Bulk SMS pricing in India starts at ₹0.09 per SMS. Compare plans, volume-based rates, and channel cost comparisons.",
    url: "https://getclickmedia.com/bulk-sms-pricing-india",
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
      name: "Bulk SMS Service- Get Click Media",
      description: "Bulk SMS service for promotional and transactional messaging in India with TRAI DLT compliance support and 99.9% delivery uptime.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "0.06",
        highPrice: "0.12",
        offerCount: "3",
        url: "https://getclickmedia.com/bulk-sms-pricing-india",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Bulk SMS Services", item: "https://getclickmedia.com/bulk-sms-service-provider-india" },
        { "@type": "ListItem", position: 3, name: "Bulk SMS Pricing in India", item: "https://getclickmedia.com/bulk-sms-pricing-india" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does bulk SMS cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bulk SMS in India typically costs between ₹0.06 and ₹0.12 per SMS, depending on monthly volume and route. Low-volume senders (under 10,000 SMS/month) pay closer to ₹0.12/SMS, while high-volume senders (above 5,00,000 SMS/month) can bring the rate down to roughly ₹0.06-0.07/SMS. Get Click Media's Growth plan, the most common choice for growing businesses, starts at ₹0.09 per SMS for up to 1,00,000 SMS/month.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a minimum purchase requirement for bulk SMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No fixed minimum purchase is required to start- pricing scales with your monthly volume across Starter, Growth, and Enterprise tiers, and you can begin on the Starter plan with as few as a few hundred SMS. There is no setup fee on any plan; DLT registration assistance is included.",
          },
        },
        {
          "@type": "Question",
          name: "Why does transactional SMS sometimes cost more than promotional SMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Transactional SMS runs on a DND-exempt route with priority delivery and typically routes through more direct, higher-reliability operator connections- that extra reliability and DND-exempt access carries a modest premium over standard promotional routing in some pricing structures. Get Click Media prices both routes at the same per-SMS rate across its Starter, Growth, and Enterprise plans, so there's no separate markup for transactional delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Are there hidden charges in bulk SMS pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get Click Media's published per-SMS rate is exclusive of GST, and DLT-related charges (entity registration, header, and template registration fees set by TRAI/DLT operators, not by Get Click Media) may apply separately as per TRAI guidelines. There is no platform setup fee, no minimum monthly commitment on Starter and Growth plans, and no charge for undelivered messages.",
          },
        },
        {
          "@type": "Question",
          name: "How does bulk SMS pricing compare to WhatsApp and RCS pricing in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bulk SMS is generally the lowest per-message cost among business messaging channels in India- roughly ₹0.06-0.12 per SMS versus an indicative ₹0.30-0.90 per conversation for WhatsApp Business API (Meta's conversation-based pricing varies by category) and ₹0.15-0.35 per message for RCS. SMS trades richer media and two-way chat for universal reach and the lowest cost per send, which is why most businesses run SMS as the baseline channel and layer WhatsApp or RCS on top for richer engagement.",
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
      "Transactional & Promotional SMS",
      "DLT Registration Support",
      "Basic Analytics Dashboard",
      "Email Support",
      "REST API Access",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/bulk-sms-service-provider-india",
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
      "Advanced Analytics & Reports",
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
      "Rates as low as ₹0.06/SMS at scale",
      "Custom SLA & Uptime Guarantee",
      "Dedicated Infrastructure",
      "On-site Integration Support",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/bulk-sms-service-provider-india",
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
  { channel: "Bulk SMS (Get Click Media)", cost: "₹0.06 – ₹0.12 / SMS", reach: "Every mobile number, no app or data needed", bestFor: "OTPs, alerts, reminders, high-volume campaigns" },
  { channel: "WhatsApp Business API", cost: "~₹0.30 – ₹0.90 / conversation*", reach: "Opted-in smartphone users with WhatsApp", bestFor: "Rich media, two-way chat, support" },
  { channel: "RCS Messaging", cost: "~₹0.15 – ₹0.35 / message*", reach: "Android users on supporting operators", bestFor: "Branded, interactive rich-card campaigns" },
  { channel: "Voice Call / IVR", cost: "~₹0.40 – ₹0.80 / minute*", reach: "Any phone, requires the call to be answered", bestFor: "Urgent, high-stakes confirmations" },
  { channel: "Email", cost: "~₹0.01 – ₹0.03 / email*", reach: "Requires an active, checked inbox", bestFor: "Detailed content, non-urgent updates" },
];

const FACTORS = [
  { icon: Layers, title: "Monthly SMS volume", desc: "Price per SMS drops as your monthly volume slab increases- from ₹0.12 at low volume to ₹0.06-0.07 at 5,00,000+ SMS/month" },
  { icon: Route, title: "Route type", desc: "Transactional (DND-exempt) and promotional routes are priced identically on Get Click Media plans, but route quality (direct vs shared operator) affects enterprise-tier pricing" },
  { icon: FileCheck2, title: "DLT registration status", desc: "TRAI-mandated entity, sender ID (header), and template registration are one-time setup steps; GCM includes assistance at no extra platform fee" },
  { icon: FileText, title: "Message content & length", desc: "Unicode SMS (regional languages, emoji) counts as multiple segments per message compared to plain-text English, affecting per-send cost" },
  { icon: CalendarClock, title: "Contract term & commitment", desc: "Prepaid credit purchases and annual commitments typically unlock better per-SMS rates than pay-as-you-go top-ups" },
  { icon: IndianRupee, title: "GST & regulatory charges", desc: "Published per-SMS rates are exclusive of GST; DLT-related charges set by TRAI/DLT operators may apply separately" },
];

const CAPABILITIES = [
  { icon: ShieldCheck, title: "DLT registration support", desc: "Entity, header, and template registration assistance included at no extra platform fee on every plan" },
  { icon: BarChart3, title: "Real-time delivery reports", desc: "Live delivery, read, and failure-rate dashboards so you always know exactly what you're paying for" },
  { icon: Webhook, title: "REST API & webhooks", desc: "Full API access for sending, scheduling, and receiving delivery-status callbacks- no extra integration fee" },
  { icon: Ban, title: "No hidden charges", desc: "No platform setup fee, no charge for undelivered messages, and no minimum commitment on Starter and Growth plans" },
  { icon: Headset, title: "24×7 support (Growth & Enterprise)", desc: "Phone and priority ticket support for time-critical delivery issues, with a dedicated account manager" },
  { icon: UserCog, title: "Custom SLA (Enterprise)", desc: "Guaranteed uptime SLA, dedicated infrastructure, and on-site integration support for high-volume senders" },
];

const FAQS = [
  {
    q: "How much does bulk SMS cost in India?",
    a: "Bulk SMS in India typically costs between ₹0.06 and ₹0.12 per SMS, depending on monthly volume and route. Low-volume senders (under 10,000 SMS/month) pay closer to ₹0.12/SMS, while high-volume senders (above 5,00,000 SMS/month) can bring the rate down to roughly ₹0.06-0.07/SMS. Get Click Media's Growth plan, the most common choice for growing businesses, starts at ₹0.09 per SMS for up to 1,00,000 SMS/month.",
  },
  {
    q: "Is there a minimum purchase requirement for bulk SMS?",
    a: "No fixed minimum purchase is required to start- pricing scales with your monthly volume across Starter, Growth, and Enterprise tiers, and you can begin on the Starter plan with as few as a few hundred SMS. There is no setup fee on any plan; DLT registration assistance is included.",
  },
  {
    q: "Why does transactional SMS sometimes cost more than promotional SMS?",
    a: "Transactional SMS runs on a DND-exempt route with priority delivery and typically routes through more direct, higher-reliability operator connections- that extra reliability and DND-exempt access carries a modest premium over standard promotional routing in some pricing structures. Get Click Media prices both routes at the same per-SMS rate across its Starter, Growth, and Enterprise plans, so there's no separate markup for transactional delivery.",
  },
  {
    q: "Are there hidden charges in bulk SMS pricing?",
    a: "Get Click Media's published per-SMS rate is exclusive of GST, and DLT-related charges (entity registration, header, and template registration fees set by TRAI/DLT operators, not by Get Click Media) may apply separately as per TRAI guidelines. There is no platform setup fee, no minimum monthly commitment on Starter and Growth plans, and no charge for undelivered messages.",
  },
  {
    q: "How does bulk SMS pricing compare to WhatsApp and RCS pricing in India?",
    a: "Bulk SMS is generally the lowest per-message cost among business messaging channels in India- roughly ₹0.06-0.12 per SMS versus an indicative ₹0.30-0.90 per conversation for WhatsApp Business API (Meta's conversation-based pricing varies by category) and ₹0.15-0.35 per message for RCS. SMS trades richer media and two-way chat for universal reach and the lowest cost per send, which is why most businesses run SMS as the baseline channel and layer WhatsApp or RCS on top for richer engagement.",
  },
];

const RELATED_LINKS = [
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "OTP SMS Pricing", href: "/otp-sms-pricing" },
  { label: "Transactional SMS Pricing", href: "/transactional-sms-pricing" },
  { label: "OTP SMS Service Provider", href: "/otp-sms-service-provider" },
  { label: "Transactional SMS Service", href: "/transactional-sms-service" },
  { label: "Bulk SMS for Banking", href: "/bulk-sms-for-banking" },
  { label: "Bulk SMS for Ecommerce", href: "/bulk-sms-for-ecommerce" },
  { label: "Bulk SMS for Real Estate", href: "/bulk-sms-for-real-estate" },
];

export default function BulkSmsPricingIndiaPage() {
  return (
    <PricingPageTemplate
      breadcrumbLabel="Bulk SMS Pricing in India"
      heroEyebrow="Bulk SMS Pricing"
      heroTitle="Bulk SMS Pricing in India"
      heroHighlight="Per-SMS Rates & Plans"
      heroDescription={
        <>
          Transparent, volume-based bulk SMS pricing for Indian businesses- starting at{" "}
          <strong className="text-gray-900">₹0.09 per SMS</strong> with no setup fee and DLT
          registration support included on every plan.
        </>
      }
      heroImage="/images/bulk-sms/bulk-sms-service-provider-india-hero.webp"
      heroImageAlt="Bulk SMS pricing in India- plan comparison dashboard"
      heroTrustLine="No setup fee · DLT registration included · GST-exclusive, transparent per-SMS rates"
      stats={[
        { value: "₹0.09", label: "Starting price per SMS (Growth plan)" },
        { value: "₹0.06", label: "Lowest rate at 5,00,000+ SMS/month" },
        { value: "0", label: "Platform setup fee" },
        { value: "99.9%", label: "Delivery uptime" },
      ]}
      aeoParagraph={
        <>
          Bulk SMS pricing in India ranges from ₹0.06 to ₹0.12 per SMS depending on monthly
          volume, with{" "}
          <strong className="text-gray-900">Get Click Media's Growth plan starting at ₹0.09 per SMS</strong>{" "}
          for up to 1,00,000 SMS/month. Rates drop further at higher volumes, and every plan
          includes DLT registration support with no platform setup fee.
        </>
      }
      insightCallout={
        <>
          The biggest lever on your effective SMS cost isn't the plan name- it's monthly volume.
          Businesses sending under 10,000 SMS/month pay close to ₹0.12/SMS, while those crossing
          5,00,000 SMS/month can bring that down to ₹0.06-0.07/SMS. If your volume is growing
          month over month, it's worth re-checking your slab every quarter rather than staying on
          a plan sized for last year's traffic.
        </>
      }
      tiersTitle="Bulk SMS Pricing Plans for Indian Businesses"
      tiersSubtitle="No hidden charges. DLT registration assistance included in every plan."
      tiers={TIERS}
      tiersDisclaimer="Prices shown are indicative and exclusive of GST. Final pricing depends on volume, route, and contract terms. DLT-related charges set by TRAI/DLT operators may apply separately."
      slabTitle="Bulk SMS Rate Card by Monthly Volume"
      slabSubtitle="Your effective per-SMS rate drops automatically as your monthly volume crosses each slab."
      slabCaption="Bulk SMS pricing by monthly volume slab"
      slabColumns={[
        { key: "volume", label: "Monthly SMS Volume" },
        { key: "price", label: "Price per SMS", align: "center" },
        { key: "plan", label: "Plan", align: "center" },
      ]}
      slabRows={SLAB_ROWS}
      comparisonTitle="Bulk SMS Cost vs. Other Business Messaging Channels in India"
      comparisonSubtitle="Indicative market ranges for India- SMS remains the lowest per-message cost with the widest reach."
      comparisonCaption="Cost comparison of business messaging channels in India"
      comparisonColumns={[
        { key: "channel", label: "Channel" },
        { key: "cost", label: "Indicative Cost", align: "center" },
        { key: "reach", label: "Reach" },
        { key: "bestFor", label: "Best For" },
      ]}
      comparisonRows={COMPARISON_ROWS}
      comparisonHighlightKey="cost"
      factorsTitle="What Determines Your Bulk SMS Price"
      factors={FACTORS}
      capabilitiesTitle="What's Included in Every Get Click Media Plan"
      capabilities={CAPABILITIES}
      faqHeading="Bulk SMS Pricing in India- FAQs"
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to see your exact bulk SMS rate?"
      bottomCtaDescription="Get Click Media provides transparent, volume-based bulk SMS pricing for Indian businesses with DLT support included and no setup fee."
      schema={schema}
    />
  );
}
