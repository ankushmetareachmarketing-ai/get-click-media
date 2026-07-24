import type { Metadata } from "next";
import {
  IndianRupee,
  Layers,
  Zap,
  ShieldAlert,
  FileText,
  CalendarClock,
  ShieldCheck,
  Headset,
  BarChart3,
  Webhook,
  RadioTower,
  UserCog,
} from "lucide-react";
import { PricingPageTemplate } from "../_templates/pricing-page-template";

export const metadata: Metadata = {
  title: "OTP SMS Cost in India 2026- Per-OTP Pricing & Plans | Get Click Media",
  description:
    "OTP SMS pricing in India starts at ₹0.09 per OTP on the Growth plan. Compare Starter, Growth, and Enterprise plans, volume-based rates, and see how OTP SMS cost compares to WhatsApp OTP delivery.",
  keywords:
    "otp sms cost india, otp sms pricing india, otp sms price per message, sms otp api pricing, cheapest otp sms provider india, otp gateway pricing india",
  alternates: { canonical: "https://getclickmedia.com/otp-sms-pricing" },
  openGraph: {
    title: "OTP SMS Cost in India 2026- Per-OTP Pricing & Plans",
    description:
      "OTP SMS pricing in India starts at ₹0.09 per OTP. Compare plans, volume-based rates, and channel cost comparisons.",
    url: "https://getclickmedia.com/otp-sms-pricing",
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
      name: "OTP SMS Service- Get Click Media",
      description: "OTP SMS service for transactional one-time-password delivery in India with TRAI DLT compliance support and 99.9% delivery uptime.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "0.065",
        highPrice: "0.12",
        offerCount: "3",
        url: "https://getclickmedia.com/otp-sms-pricing",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Bulk SMS Services", item: "https://getclickmedia.com/bulk-sms-service-provider-india" },
        { "@type": "ListItem", position: 3, name: "OTP SMS Cost in India", item: "https://getclickmedia.com/otp-sms-pricing" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does OTP SMS cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OTP SMS in India typically costs between ₹0.065 and ₹0.12 per OTP, depending on monthly volume. Get Click Media's Growth plan starts at ₹0.09 per OTP for up to 1,00,000 OTPs/month, with rates dropping toward ₹0.065-0.07 per OTP at high volumes above 5,00,000/month.",
          },
        },
        {
          "@type": "Question",
          name: "Is OTP SMS more expensive than regular promotional SMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OTP SMS runs on the transactional (DND-exempt) route, which prioritises delivery speed and reliability over the shared promotional route- that priority routing can carry a modest premium in some providers' pricing structures. Get Click Media prices OTP and promotional SMS at the same per-message rate across all plans, so businesses don't pay extra simply for choosing the transactional route.",
          },
        },
        {
          "@type": "Question",
          name: "Does OTP SMS pricing include DLT and sender ID registration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Get Click Media includes DLT entity, sender ID, and OTP template registration assistance at no extra platform fee across all plans. TRAI/DLT operator-set registration charges, where applicable, are passed through separately and are not part of the per-OTP rate.",
          },
        },
        {
          "@type": "Question",
          name: "How is OTP SMS priced compared to WhatsApp OTP delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SMS OTP is generally cheaper per message than WhatsApp authentication-template OTP delivery, which is billed per conversation under Meta's India conversation-based pricing (indicatively ₹0.30-0.90 depending on category) rather than per message. SMS also doesn't require the recipient to have WhatsApp installed and opted in, which is why SMS remains the default OTP channel even for businesses that also offer WhatsApp OTP as an alternative.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a faster or priority OTP delivery option at extra cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Growth and Enterprise plans include a priority delivery queue and direct operator routing for OTP traffic at no additional per-message surcharge- this is built into the plan rather than sold as a separate add-on, since OTP delivery speed is treated as a core requirement, not a premium feature.",
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
    unit: "/ OTP",
    volume: "Up to 10,000 OTPs/month",
    features: [
      "Transactional OTP Route",
      "DLT Registration Support",
      "Basic Analytics Dashboard",
      "Email Support",
      "REST API Access",
    ],
    ctaLabel: "Get Started",
    ctaHref: "/otp-sms-service-provider",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹0.09",
    unit: "/ OTP",
    volume: "Up to 1,00,000 OTPs/month",
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
    volume: "Above 1,00,000 OTPs/month",
    features: [
      "Everything in Growth",
      "Rates as low as ₹0.065/OTP at scale",
      "Custom SLA & Uptime Guarantee",
      "Automatic Failover Routes",
      "On-site Integration Support",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/otp-sms-service-provider",
    highlighted: false,
  },
];

const SLAB_ROWS = [
  { volume: "1 – 10,000", price: "₹0.12 / OTP", plan: "Starter" },
  { volume: "10,001 – 50,000", price: "₹0.10 / OTP", plan: "Growth" },
  { volume: "50,001 – 1,00,000", price: "₹0.09 / OTP", plan: "Growth" },
  { volume: "1,00,001 – 5,00,000", price: "₹0.075 / OTP", plan: "Enterprise" },
  { volume: "5,00,001 – 10,00,000", price: "₹0.065 / OTP", plan: "Enterprise" },
  { volume: "10,00,000+", price: "Custom quote", plan: "Enterprise" },
];

const COMPARISON_ROWS = [
  { channel: "SMS OTP (Get Click Media)", cost: "₹0.065 – ₹0.12 / OTP", speed: "Seconds, on direct operator routes", bestFor: "Login, checkout, and transaction 2FA" },
  { channel: "WhatsApp Authentication OTP", cost: "~₹0.30 – ₹0.90 / conversation*", speed: "Seconds, requires WhatsApp opt-in", bestFor: "Apps with a verified, active WhatsApp user base" },
  { channel: "Voice OTP (IVR call)", cost: "~₹0.40 – ₹0.80 / minute*", speed: "Requires the call to be answered", bestFor: "Fallback when SMS delivery is uncertain" },
  { channel: "Email OTP", cost: "~₹0.01 – ₹0.03 / email*", speed: "Minutes, depends on inbox checking habit", bestFor: "Low-urgency account verification" },
];

const FACTORS = [
  { icon: Layers, title: "Monthly OTP volume", desc: "Price per OTP drops as your monthly volume slab increases- from ₹0.12 at low volume to ₹0.065-0.07 at 5,00,000+ OTPs/month" },
  { icon: Zap, title: "Route priority", desc: "Direct operator routing for faster, more reliable OTP delivery is included on Growth and Enterprise plans at no separate surcharge" },
  { icon: ShieldAlert, title: "Traffic spike handling", desc: "Businesses with sharp OTP volume spikes (flash sales, app launches) may need Enterprise-tier failover routing for consistent delivery" },
  { icon: FileText, title: "Template & DLT registration", desc: "OTP templates must be pre-registered on TRAI DLT; GCM includes registration assistance in the platform fee" },
  { icon: CalendarClock, title: "Contract term & commitment", desc: "Prepaid credit purchases and annual commitments typically unlock better per-OTP rates than pay-as-you-go top-ups" },
  { icon: IndianRupee, title: "GST & regulatory charges", desc: "Published per-OTP rates are exclusive of GST; DLT-related charges set by TRAI/DLT operators may apply separately" },
];

const CAPABILITIES = [
  { icon: ShieldCheck, title: "DLT-registered OTP templates", desc: "Entity, header, and OTP template registration assistance included at no extra platform fee on every plan" },
  { icon: RadioTower, title: "Direct operator routing", desc: "Priority OTP delivery over direct-to-operator connections on Growth and Enterprise plans for consistent sub-few-second delivery" },
  { icon: Webhook, title: "Webhook delivery reports", desc: "Real-time delivery-status callbacks so your application knows instantly whether an OTP landed" },
  { icon: BarChart3, title: "Live delivery dashboard", desc: "Real-time OTP delivery and failure-rate reporting across every campaign and integration" },
  { icon: Headset, title: "24×7 support (Growth & Enterprise)", desc: "Phone and priority ticket support for time-critical OTP delivery issues" },
  { icon: UserCog, title: "Automatic failover routes (Enterprise)", desc: "Secondary route failover to keep OTP delivery consistent during primary-route congestion or outages" },
];

const FAQS = [
  {
    q: "How much does OTP SMS cost in India?",
    a: "OTP SMS in India typically costs between ₹0.065 and ₹0.12 per OTP, depending on monthly volume. Get Click Media's Growth plan starts at ₹0.09 per OTP for up to 1,00,000 OTPs/month, with rates dropping toward ₹0.065-0.07 per OTP at high volumes above 5,00,000/month.",
  },
  {
    q: "Is OTP SMS more expensive than regular promotional SMS?",
    a: "OTP SMS runs on the transactional (DND-exempt) route, which prioritises delivery speed and reliability over the shared promotional route- that priority routing can carry a modest premium in some providers' pricing structures. Get Click Media prices OTP and promotional SMS at the same per-message rate across all plans, so businesses don't pay extra simply for choosing the transactional route.",
  },
  {
    q: "Does OTP SMS pricing include DLT and sender ID registration?",
    a: "Get Click Media includes DLT entity, sender ID, and OTP template registration assistance at no extra platform fee across all plans. TRAI/DLT operator-set registration charges, where applicable, are passed through separately and are not part of the per-OTP rate.",
  },
  {
    q: "How is OTP SMS priced compared to WhatsApp OTP delivery?",
    a: "SMS OTP is generally cheaper per message than WhatsApp authentication-template OTP delivery, which is billed per conversation under Meta's India conversation-based pricing (indicatively ₹0.30-0.90 depending on category) rather than per message. SMS also doesn't require the recipient to have WhatsApp installed and opted in, which is why SMS remains the default OTP channel even for businesses that also offer WhatsApp OTP as an alternative.",
  },
  {
    q: "Is there a faster or priority OTP delivery option at extra cost?",
    a: "Growth and Enterprise plans include a priority delivery queue and direct operator routing for OTP traffic at no additional per-message surcharge- this is built into the plan rather than sold as a separate add-on, since OTP delivery speed is treated as a core requirement, not a premium feature.",
  },
];

const RELATED_LINKS = [
  { label: "OTP SMS Service Provider", href: "/otp-sms-service-provider" },
  { label: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
  { label: "Transactional SMS Pricing", href: "/transactional-sms-pricing" },
  { label: "Transactional SMS Service", href: "/transactional-sms-service" },
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "Bulk SMS for Banking", href: "/bulk-sms-for-banking" },
  { label: "Bulk SMS for Ecommerce", href: "/bulk-sms-for-ecommerce" },
];

export default function OtpSmsPricingPage() {
  return (
    <PricingPageTemplate
      breadcrumbLabel="OTP SMS Cost in India"
      heroEyebrow="OTP SMS Pricing"
      heroTitle="OTP SMS Cost in India"
      heroHighlight="Per-OTP Pricing & Plans"
      heroDescription={
        <>
          Transparent, volume-based OTP SMS pricing for Indian businesses- starting at{" "}
          <strong className="text-gray-900">₹0.09 per OTP</strong> with direct operator routing
          and DLT registration support included on every plan.
        </>
      }
      heroImage="/images/otp-sms/best-otp-sms-service-provider-india.webp"
      heroImageAlt="OTP SMS pricing in India- plan comparison dashboard"
      heroTrustLine="Direct operator routing · DLT registration included · GST-exclusive, transparent per-OTP rates"
      stats={[
        { value: "₹0.09", label: "Starting price per OTP (Growth plan)" },
        { value: "₹0.065", label: "Lowest rate at 5,00,000+ OTPs/month" },
        { value: "0", label: "Platform setup fee" },
        { value: "99.9%", label: "OTP delivery rate" },
      ]}
      aeoParagraph={
        <>
          OTP SMS pricing in India ranges from ₹0.065 to ₹0.12 per OTP depending on monthly
          volume, with{" "}
          <strong className="text-gray-900">Get Click Media's Growth plan starting at ₹0.09 per OTP</strong>{" "}
          for up to 1,00,000 OTPs/month. Direct operator routing for fast, reliable delivery is
          included at no separate surcharge on Growth and Enterprise plans.
        </>
      }
      insightCallout={
        <>
          For OTP specifically, price is only half the decision- delivery speed is the other
          half. A cheaper OTP that arrives 30 seconds late fails the login or checkout it was
          meant to secure. That's why OTP routing quality (direct operator vs shared route)
          matters as much as the per-message rate when comparing providers.
        </>
      }
      tiersTitle="OTP SMS Pricing Plans for Indian Businesses"
      tiersSubtitle="No hidden charges. Direct operator routing and DLT assistance included in every plan."
      tiers={TIERS}
      tiersDisclaimer="Prices shown are indicative and exclusive of GST. Final pricing depends on volume, route, and contract terms. DLT-related charges set by TRAI/DLT operators may apply separately."
      slabTitle="OTP SMS Rate Card by Monthly Volume"
      slabSubtitle="Your effective per-OTP rate drops automatically as your monthly volume crosses each slab."
      slabCaption="OTP SMS pricing by monthly volume slab"
      slabColumns={[
        { key: "volume", label: "Monthly OTP Volume" },
        { key: "price", label: "Price per OTP", align: "center" },
        { key: "plan", label: "Plan", align: "center" },
      ]}
      slabRows={SLAB_ROWS}
      comparisonTitle="OTP SMS Cost vs. Other OTP Delivery Channels in India"
      comparisonSubtitle="Indicative market ranges for India- SMS remains the fastest, widest-reach OTP channel at the lowest cost."
      comparisonCaption="Cost comparison of OTP delivery channels in India"
      comparisonColumns={[
        { key: "channel", label: "Channel" },
        { key: "cost", label: "Indicative Cost", align: "center" },
        { key: "speed", label: "Delivery Speed" },
        { key: "bestFor", label: "Best For" },
      ]}
      comparisonRows={COMPARISON_ROWS}
      comparisonHighlightKey="cost"
      factorsTitle="What Determines Your OTP SMS Price"
      factors={FACTORS}
      capabilitiesTitle="What's Included in Every Get Click Media OTP Plan"
      capabilities={CAPABILITIES}
      faqHeading="OTP SMS Pricing in India- FAQs"
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to see your exact OTP SMS rate?"
      bottomCtaDescription="Get Click Media provides transparent, volume-based OTP SMS pricing for Indian businesses with direct operator routing and DLT support included."
      schema={schema}
    />
  );
}
