import type { Metadata } from "next";
import {
  Layers,
  MessageSquare,
  BarChart3,
  Repeat,
  CalendarClock,
  Percent,
  ShieldCheck,
  Code2,
  Headset,
} from "lucide-react";
import { PricingPageTemplate } from "@/app/(bulk-sms)/_templates/pricing-page-template";

export const metadata: Metadata = {
  title: "RCS Messaging Pricing in India (2026) | Get Click Media",
  description:
    "RCS Business Messaging pricing in India explained — conversation-based charges, rich card costs & ROI vs SMS. Transparent guidance, no hidden fees. Get a custom quote.",
  keywords:
    "RCS pricing India, RCS cost India, RCS messaging cost, RCS conversation pricing, RCS per message cost, RCS API pricing, RCS messaging rates India, RCS vs SMS cost",
  alternates: { canonical: "https://getclickmedia.com/rcs-pricing-india" },
  openGraph: {
    title: "RCS Messaging Pricing in India (2026 Guide)",
    description:
      "Understand RCS conversation-based pricing, rich card costs, and ROI compared to SMS — with transparent guidance from Get Click Media.",
    url: "https://getclickmedia.com/rcs-pricing-india",
    type: "website",
  },
};

const TIERS = [
  {
    name: "Starter",
    price: "Custom",
    volume: "For businesses sending low RCS volume",
    features: [
      "Rich cards, carousels & action buttons",
      "Automatic SMS fallback",
      "Delivery & read reporting",
      "Email support",
      "REST API access",
    ],
    ctaLabel: "Get a Quote",
    ctaHref: "/rcs-service-provider-india",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "Custom",
    volume: "For growing campaigns and transactional flows",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Priority delivery queue",
      "Advanced analytics & reports",
      "Dedicated account manager",
      "24×7 phone support",
    ],
    ctaLabel: "Get Free Demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    volume: "For high-volume, multi-brand senders",
    features: [
      "Everything in Growth",
      "Custom SLA & uptime guarantee",
      "Dedicated infrastructure",
      "On-site integration support",
    ],
    ctaLabel: "Contact Sales",
    ctaHref: "/rcs-service-provider-india",
    highlighted: false,
  },
];

const CATEGORY_ROWS = [
  { category: "Authentication / OTP", use: "Login verification", basis: "Per-conversation, custom quote" },
  { category: "Transactional", use: "Order & delivery updates", basis: "Per-conversation, custom quote" },
  { category: "Promotional", use: "Marketing campaigns", basis: "Per-conversation, custom quote" },
];

const COMPARISON_ROWS = [
  { channel: "Bulk SMS", cost: "₹0.06 – ₹0.12 / SMS", bestFor: "OTPs, alerts, high-volume campaigns" },
  { channel: "RCS Messaging", cost: "~₹0.15 – ₹0.35 / message*", bestFor: "Branded, interactive rich-card campaigns" },
  { channel: "WhatsApp Business API", cost: "~₹0.30 – ₹0.90 / conversation*", bestFor: "Rich media, two-way chat, support" },
];

const FACTORS = [
  { icon: Layers, title: "Message category", desc: "Authentication/OTP, transactional, and promotional messages are typically priced differently within a conversation-based model." },
  { icon: BarChart3, title: "Monthly conversation volume", desc: "Higher monthly volume generally unlocks better per-conversation rates — worth revisiting your plan as volume grows." },
  { icon: Repeat, title: "SMS fallback rate", desc: "How often messages fall back to SMS (non-RCS devices) affects your blended cost, since fallback sends are billed at SMS rates." },
  { icon: MessageSquare, title: "Rich media complexity", desc: "Carousels and multi-button rich cards may be priced differently from simple text-plus-image messages depending on your plan." },
  { icon: CalendarClock, title: "Contract term", desc: "Annual commitments and prepaid volume typically unlock better rates than pay-as-you-go billing." },
  { icon: Percent, title: "Bundled channels", desc: "Running RCS alongside SMS and WhatsApp from one platform can improve your overall blended messaging cost." },
];

const CAPABILITIES = [
  { icon: ShieldCheck, title: "Verified sender badge", desc: "Google brand verification support included as part of onboarding." },
  { icon: Repeat, title: "Automatic SMS fallback", desc: "Non-RCS devices are covered automatically, so no message is lost." },
  { icon: Layers, title: "Rich cards & carousels", desc: "Build branded, interactive messages without writing code." },
  { icon: BarChart3, title: "Delivery & read reporting", desc: "Real-time engagement data on every campaign and transactional send." },
  { icon: Code2, title: "REST API & webhooks", desc: "Full programmatic access, with delivery-status and read-receipt callbacks." },
  { icon: Headset, title: "Dedicated onboarding support", desc: "A single point of contact through brand verification and your first campaign." },
];

const FAQS = [
  {
    q: "How is RCS messaging priced in India?",
    a: "RCS is typically billed per conversation — a defined messaging window — with rates varying by message category: promotional, transactional, or OTP/authentication. Contact our sales team for a quote based on your expected category mix and volume.",
  },
  {
    q: "Is RCS more expensive than SMS?",
    a: "Per-message, RCS generally costs more than plain SMS, but the rich-media format typically drives materially higher engagement — often improving overall campaign ROI even at a higher per-send cost.",
  },
  {
    q: "What is a 'conversation' in RCS pricing?",
    a: "A conversation is a defined messaging window (commonly 24 hours) during which all messages exchanged between a business and a customer are billed as a single unit, rather than per individual message.",
  },
  {
    q: "Do rich cards and carousels cost extra?",
    a: "Across the industry, rich-card and carousel formatting is commonly bundled into the conversation rate rather than billed as a separate line item. We'll confirm the exact structure for your plan as part of your custom quote.",
  },
  {
    q: "What factors affect my RCS messaging cost?",
    a: "Message category (promotional vs. transactional vs. OTP), monthly conversation volume, and how often messages fall back to SMS all affect your final blended cost.",
  },
  {
    q: "Is there a minimum spend for RCS messaging?",
    a: "Plans scale with your usage rather than a fixed minimum — talk to our sales team and we'll recommend a structure suited to your expected volume.",
  },
  {
    q: "How does RCS pricing compare to WhatsApp Business API pricing?",
    a: "Both are largely conversation-based models with category-specific rates; the right comparison depends on your message mix. See our WhatsApp Business API page for details on that channel, or talk to our team for a side-by-side quote.",
  },
  {
    q: "Can I get a custom RCS pricing plan for high volume?",
    a: "Yes — enterprise and high-volume senders can request custom conversation rates, dedicated infrastructure, and a custom SLA. Contact our team for a tailored quote.",
  },
  {
    q: "Does RCS pricing include brand verification?",
    a: "Brand verification is a one-time setup step handled as part of onboarding. Ask your sales contact whether it's bundled with your specific plan or billed as a separate onboarding step.",
  },
  {
    q: "What happens if RCS delivery fails and falls back to SMS?",
    a: "When a message falls back to SMS because the recipient's device or network doesn't support RCS, it's typically billed at standard SMS rates rather than the RCS conversation rate — we'll confirm the exact structure for your plan.",
  },
];

const RELATED_LINKS = [
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "RCS Service Provider India", href: "/rcs-service-provider-india" },
  { label: "RCS API", href: "/rcs-api" },
  { label: "Google RCS Business Messaging", href: "/google-rcs-business-messaging" },
  { label: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://getclickmedia.com/#org",
      name: "Get Click Media",
      url: "https://getclickmedia.com",
      logo: { "@type": "ImageObject", url: "https://getclickmedia.com/images/gcm-logo.png" },
    },
    {
      "@type": "Service",
      name: "RCS Business Messaging Pricing",
      provider: { "@type": "Organization", name: "Get Click Media", url: "https://getclickmedia.com" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "RCS Business Messaging",
      url: "https://getclickmedia.com/rcs-pricing-india",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
        { "@type": "ListItem", position: 3, name: "RCS Pricing in India", item: "https://getclickmedia.com/rcs-pricing-india" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://getclickmedia.com/rcs-pricing-india",
      url: "https://getclickmedia.com/rcs-pricing-india",
      name: "RCS Messaging Pricing in India (2026) | Get Click Media",
      primaryImageOfPage: { "@type": "ImageObject", url: "https://getclickmedia.com/images/rcs/rcs-service-provider-india.png" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RCSPricingIndiaPage() {
  return (
    <PricingPageTemplate
      breadcrumbLabel="RCS Pricing in India"
      heroEyebrow="RCS Pricing"
      heroTitle="RCS Messaging Pricing in India"
      heroHighlight="Pricing in India"
      heroDescription={
        <>
          Transparent, conversation-based RCS pricing guidance for Indian businesses — with
          category-specific rates for <strong className="text-gray-900">OTP, transactional, and promotional</strong>{" "}
          messaging, and no hidden fees.
        </>
      }
      heroImage="/images/rcs/rcs-service-provider-india.png"
      heroImageAlt="RCS messaging pricing in India — conversation-based rate structure"
      heroTrustLine="Conversation-based pricing · SMS fallback included · Transparent, custom quotes"
      stats={[
        { value: "3", label: "Message categories: OTP, transactional, promotional" },
        { value: "24hr", label: "Typical conversation billing window" },
        { value: "0", label: "Platform setup fee for standard plans" },
        { value: "5–7 days", label: "Typical brand verification timeline" },
      ]}
      aeoParagraph={
        <>
          RCS Business Messaging in India is priced on a{" "}
          <strong className="text-gray-900">conversation-based model</strong> — a defined messaging
          window billed as a single unit — with rates that vary by message category (OTP,
          transactional, or promotional). Exact rates depend on your volume and category mix;{" "}
          <strong className="text-gray-900">contact our team for a custom quote</strong>.
        </>
      }
      insightCallout={
        <>
          The biggest lever on your effective RCS cost isn&apos;t the plan name — it&apos;s your SMS
          fallback rate and category mix. Businesses running mostly transactional flows with a low
          fallback rate typically see a more predictable blended cost than those running broad
          promotional campaigns to a mixed-device audience. Ask your sales contact to model this
          against your own list before you commit to a plan.
        </>
      }
      tiersTitle="RCS Pricing Plans for Indian Businesses"
      tiersSubtitle="Every plan includes SMS fallback and delivery reporting — no hidden charges."
      tiers={TIERS}
      tiersDisclaimer="Pricing is volume- and category-based and quoted per business. Contact our sales team for exact rates — figures shown are illustrative plan tiers, not published rates."
      slabTitle="RCS Conversation Pricing by Message Category"
      slabSubtitle="RCS conversations are typically priced differently depending on category — get an exact quote for your mix."
      slabCaption="RCS pricing by message category"
      slabColumns={[
        { key: "category", label: "Message Category" },
        { key: "use", label: "Typical Use" },
        { key: "basis", label: "Pricing Basis", align: "center" },
      ]}
      slabRows={CATEGORY_ROWS}
      comparisonTitle="RCS Cost vs. Other Business Messaging Channels in India"
      comparisonSubtitle="Indicative market ranges for India — actual Get Click Media rates depend on your volume and category mix."
      comparisonCaption="Cost comparison of business messaging channels in India"
      comparisonColumns={[
        { key: "channel", label: "Channel" },
        { key: "cost", label: "Indicative Cost", align: "center" },
        { key: "bestFor", label: "Best For" },
      ]}
      comparisonRows={COMPARISON_ROWS}
      comparisonHighlightKey="cost"
      factorsTitle="What Determines Your RCS Cost"
      factors={FACTORS}
      capabilitiesTitle="What's Included in Every Get Click Media RCS Plan"
      capabilities={CAPABILITIES}
      faqHeading="RCS Pricing in India — FAQs"
      faqs={FAQS}
      relatedLinksHeading="Related RCS resources"
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to see your exact RCS rate?"
      bottomCtaDescription="Get Click Media provides transparent, conversation-based RCS pricing for Indian businesses with SMS fallback included and no platform setup fee."
      schema={schema}
    />
  );
}
