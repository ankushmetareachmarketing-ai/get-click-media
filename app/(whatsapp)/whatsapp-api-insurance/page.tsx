import type { Metadata } from "next";
import {
  ShieldCheck,
  Shield,
  FileText,
  Calendar,
  MessageSquare,
  Database,
  Globe,
  CreditCard,
  Users,
  Umbrella,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Insurance- Policy Renewal, Claims and Customer Engagement India | Get Click Media",
  description:
    "WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech platforms to automate policy renewal reminders, premium due alerts, claims status updates, and new policy issuance.",
  keywords:
    "WhatsApp API for Insurance India, WhatsApp Insurance India, WhatsApp Policy Renewal Reminder, Insurance Chatbot WhatsApp India, WhatsApp Claims India, Insurance WhatsApp Automation India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-insurance" },
  openGraph: {
    title: "WhatsApp API for Insurance- Policy Renewal, Claims and Customer Engagement India",
    description:
      "WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech platforms to automate policy renewal reminders, premium due alerts, claims status updates, and new policy issuance.",
    url: "https://getclickmedia.com/whatsapp-api-insurance",
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
      name: "WhatsApp API for Insurance India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-insurance",
      description:
        "WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech platforms to automate policy renewal reminders, premium due alerts, claims status updates, and new policy issuance.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Insurance India", item: "https://getclickmedia.com/whatsapp-api-insurance" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is WhatsApp API compliant with IRDAI guidelines for insurance communication?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp Business API is not directly regulated by IRDAI, but insurance communication via WhatsApp must comply with IRDAI's broader communication guidelines- including fair practice code, policyholder communication standards, and claims intimation procedures. Get Click Media reviews all insurance templates for IRDAI alignment before submission to Meta. Our insurance implementations include compliant disclosure language and opt-out mechanisms." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp improve insurance renewal rates in India?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp renewal reminders achieve 85%+ open rates compared to 35% for SMS and 22% for email. The key differentiator is the embedded Renew Now button- clicking it takes the customer directly to the payment gateway with policy details pre-filled, reducing the renewal journey from 6+ steps to 2 taps. The 5-message sequence (60/30/7/3/due date days) catches customers at multiple touchpoints." },
        },
        {
          "@type": "Question",
          name: "Can insurance claims be filed via WhatsApp in India?",
          acceptedAnswer: { "@type": "Answer", text: "Yes- WhatsApp can be the channel for claims notification and document submission. The customer messages your WhatsApp number with CLAIM or taps a claims button. The chatbot collects the claim type, policy number, and incident details. A WhatsApp Flow requests document uploads (photos, FIR copy, medical reports). The claim is registered in your claims management system automatically. Status updates are sent via WhatsApp throughout the claims process." },
        },
        {
          "@type": "Question",
          name: "How does Get Click Media handle sensitive insurance data on WhatsApp?",
          acceptedAnswer: { "@type": "Answer", text: "Get Click Media's insurance implementations use: India-hosted infrastructure (AWS Mumbai), no storage of sensitive policy or financial data in message logs beyond retention requirements, masked policy numbers in WhatsApp messages, secure document upload via WhatsApp Flows with direct transfer to your document management system, and DPDP 2023-compliant consent and data handling. Security reviews are conducted for all insurance deployments." },
        },
      ],
    },
  ],
};

// ── Insurance Use Cases ──────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: Calendar,
    title: "Policy Renewal Reminder Sequence",
    trigger: "Policy expiry approaching- Day -60, -30, -7, -3, 0",
    message: "Premium amount, coverage summary, renewal benefits, and [Renew Now] button linking to payment gateway. Escalating urgency. Final notice includes coverage gap warning.",
    result: "Renewal rate +31%. Manual renewal calls -50%. Lapse rate -28%.",
  },
  {
    icon: CreditCard,
    title: "Premium Due and Payment Confirmation",
    trigger: "Premium due date for life insurance or regular premium policies",
    message: "Premium amount due, due date, policy number, and [Pay Premium] button. Payment confirmation with receipt PDF.",
    result: "On-time premium payment +25%. Policy lapse due to non-payment -30%.",
  },
  {
    icon: FileText,
    title: "Claims Registration and Status Updates",
    trigger: "Claim filed in claims management system OR customer messages CLAIM",
    message: "Claim registration confirmation with claim number. Document checklist via WhatsApp Flow. Status updates at each stage. Final settlement notification.",
    result: "Claim initiation 2.8x faster. Claims call centre volume -40%. Customer satisfaction during claims +22 points.",
  },
  {
    icon: MessageSquare,
    title: "Document Collection via WhatsApp Flows",
    trigger: "Policy issuance or claims requiring KYC/document submission",
    message: "Document upload flow- structured form captures: ID proof, address proof, income proof, photo. Secure upload confirmation.",
    result: "Document collection time -60%. NIGO (Not in Good Order) rejection rate -45%.",
  },
  {
    icon: Users,
    title: "New Product Cross-Sell and Upsell",
    trigger: "Policy anniversary or trigger event (new car registered, new home bought)",
    message: "Personalised recommendation: existing customer + relevant product. Coverage gap analysis. [Get a Quote] button → chatbot qualification → agent connection",
    result: "Cross-sell conversion 2x vs cold outreach. Premium per customer +18%.",
  },
  {
    icon: Umbrella,
    title: "Monsoon and Seasonal Alert Campaigns",
    trigger: "Pre-monsoon (May-June) or weather alert",
    message: "Car/home insurance renewal reminder with monsoon-specific messaging. Flood cover addition offer. [Renew Now] [Add Cover] buttons.",
    result: "Monsoon campaign renewal uplift +22%. Flood cover attachment rate +35%.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "Policy renewal rate (general insurance)", before: "61% (SMS + email baseline)", after: "80% (WhatsApp sequence)", source: "GCM insurance client data" },
  { metric: "Premium payment reminder open rate", before: "35% (SMS)", after: "85% (WhatsApp)", source: "GCM insurance deployment data" },
  { metric: "Claim initiation time", before: "3-5 days (branch/phone)", after: "Same day (WhatsApp chatbot)", source: "GCM InsurTech client" },
  { metric: "Document submission NIGO rate", before: "28%", after: "15% (WhatsApp Flow structured upload)", source: "GCM insurance client" },
  { metric: "Claims call centre volume", before: "Baseline", after: "40% reduction with WhatsApp status updates", source: "GCM insurance client" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "Policy management integration", desc: "Majesco, custom PMS- renewal trigger, premium due, claims status webhook" },
  { icon: ShieldCheck, title: "IRDAI-compliant templates", desc: "All templates reviewed for IRDAI communication guidelines before Meta submission" },
  { icon: FileText, title: "Claims document collection", desc: "WhatsApp Flows for structured document upload- ID, address, income proof, photos" },
  { icon: CreditCard, title: "Payment gateway", desc: "Razorpay, BillDesk, Paytm for premium and renewal payment via WhatsApp link" },
  { icon: Globe, title: "Multilingual", desc: "Hindi, Tamil, Telugu for pan-India insurance customer communication" },
  { icon: Shield, title: "Verified Green Tick", desc: "Critical for insurance trust- GCM manages Green Tick application for insurance clients" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is WhatsApp API compliant with IRDAI guidelines for insurance communication?",
    a: "WhatsApp Business API is not directly regulated by IRDAI, but insurance communication via WhatsApp must comply with IRDAI's broader communication guidelines- including fair practice code, policyholder communication standards, and claims intimation procedures. Get Click Media reviews all insurance templates for IRDAI alignment before submission to Meta. Our insurance implementations include compliant disclosure language and opt-out mechanisms.",
  },
  {
    q: "How does WhatsApp improve insurance renewal rates in India?",
    a: "WhatsApp renewal reminders achieve 85%+ open rates compared to 35% for SMS and 22% for email. The key differentiator is the embedded Renew Now button- clicking it takes the customer directly to the payment gateway with policy details pre-filled, reducing the renewal journey from 6+ steps to 2 taps. The 5-message sequence (60/30/7/3/due date days) catches customers at multiple touchpoints.",
  },
  {
    q: "Can insurance claims be filed via WhatsApp in India?",
    a: "Yes- WhatsApp can be the channel for claims notification and document submission. The customer messages your WhatsApp number with CLAIM or taps a claims button. The chatbot collects the claim type, policy number, and incident details. A WhatsApp Flow requests document uploads (photos, FIR copy, medical reports). The claim is registered in your claims management system automatically. Status updates are sent via WhatsApp throughout the claims process.",
  },
  {
    q: "How does Get Click Media handle sensitive insurance data on WhatsApp?",
    a: "Get Click Media's insurance implementations use: India-hosted infrastructure (AWS Mumbai), no storage of sensitive policy or financial data in message logs beyond retention requirements, masked policy numbers in WhatsApp messages, secure document upload via WhatsApp Flows with direct transfer to your document management system, and DPDP 2023-compliant consent and data handling. Security reviews are conducted for all insurance deployments.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp Green Tick Verification", href: "/whatsapp-green-tick-verification" },
  { label: "WhatsApp API for Insurance", href: "/whatsapp-api-insurance" },
  { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
  { label: "WhatsApp API for NBFC", href: "/whatsapp-api-nbfc" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIInsurancePage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Insurance"
      heroEyebrow="Insurance WhatsApp API"
      heroTitle="WhatsApp Business API for Insurance"
      heroHighlight="Policy Renewal, Claims and Customer Engagement India"
      heroDescription={
        <>
          WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech
          platforms to automate policy renewal reminders, premium due alerts, claims status updates,
          and new policy issuance.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with insurance CRMs and policy management systems- improving renewal rates by 31% and reducing claims call centre volume by 40%.</strong>
        </>
      }
      heroImage="/images/whatsapp/insurance/whatsapp-api-insurance.webp"
      heroImageAlt="WhatsApp API for Insurance- policy renewal reminders, premium alerts, and claims status updates dashboard"
      heroTrustLine="Official Meta BSP · Policy management system integration · IRDAI-aligned templates · India-based support"
      stats={[
        { value: "31%", label: "Improvement in policy renewal rate" },
        { value: "40%", label: "Reduction in claims call centre volume" },
        { value: "2.8x", label: "Faster claim initiation via WhatsApp" },
        { value: "85%", label: "Premium reminder open rate vs 35% SMS" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for insurance enables Indian insurers, brokers, and InsurTech
          platforms to automate policy renewal reminders, premium due alerts, claims status updates,
          and new policy issuance.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with insurance CRMs</strong>
          and policy management systems- improving renewal rates by 31% and reducing claims call
          centre volume by 40%.
        </>
      }
      insightCallout={
        <>
          India&apos;s insurance industry has a renewal lapse problem- <strong>35-40% of general insurance
          policies lapse</strong> at renewal due to insufficient customer engagement. WhatsApp
          renewal reminder sequences with embedded payment links have consistently improved
          renewal rates by <strong>28-35%</strong> across Indian insurance deployments.
        </>
      }
      whyIndustryTitle="Why Insurance Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Insurance customers are accustomed to ignoring renewal notices- email goes unread,
          SMS is dismissed, and phone calls are often missed or rejected.
        </>,
        <>
          WhatsApp renewal reminders from a verified insurer identity achieve <strong>85%+ open
          rates</strong> and include a direct payment link- reducing the steps from awareness to
          renewal payment from 6+ to 2. With <strong>31% improvement in renewal rates</strong> and{" "}
          <strong>40% reduction in claims call centre volume</strong>, WhatsApp is rapidly becoming
          the standard for insurance communication in India.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> 35-40% of general insurance policies lapse at renewal
          due to insufficient customer engagement. WhatsApp renewal reminder sequences with
          embedded payment links have consistently improved renewal rates by 28-35% across
          Indian insurance deployments.
        </>
      }
      imageSections={[
        {
          eyebrow: "Policy Management Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for insurers and brokers</span>
            </>
          ),
          description:
            "Manage all policyholder communication from a single dashboard- renewal reminders, premium due alerts, claims registration, document collection, and cross-sell campaigns- with full integration to your policy management system.",
          bullets: [
            "Automated renewal reminder sequence with Pay Now button",
            "Claims registration and status updates via WhatsApp",
            "Secure document collection via WhatsApp Flows",
            "IRDAI-compliant templates with disclosure language",
          ],
          image: "/images/whatsapp/insurance/whatsapp-api-service-insurance.webp",
          imageAlt: "WhatsApp API Insurance dashboard- policy renewal reminders, premium due alerts, claims status, and document collection",
        },
        {
          eyebrow: "Renewal Automation",
          title: (
            <>
              WhatsApp renewal reminders <span className="text-[#2563eb]">with one-tap payment</span>
            </>
          ),
          description:
            "Automated renewal reminder sequence with embedded Renew Now button. Customers can renew their policy directly from WhatsApp- reducing the renewal journey from 6+ steps to 2 taps and improving renewal rates by up to 35%.",
          bullets: [
            "85%+ open rate vs 35% for SMS reminders",
            "Renew Now button links directly to payment gateway",
            "5-message sequence (60/30/7/3/due date days)",
            "Coverage gap warning in final notice",
          ],
          image: "/images/whatsapp/insurance/whatsapp-insurance-renewal-preview.webp",
          imageAlt: "WhatsApp insurance renewal reminder preview- policy details, premium amount, and Renew Now button with one-tap payment",
          imageSide: "left",
        },
        {
          eyebrow: "Policy System Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">your policy management system</span>
            </>
          ),
          description:
            "Get Click Media integrates with leading insurance systems- Majesco and custom PMS- enabling automated WhatsApp communication for renewal triggers, premium due alerts, and claims status updates. IRDAI-compliant with full audit trails and disclosure language.",
          bullets: ["Majesco", "Custom PMS", "Renewal triggers", "Premium due alerts", "Claims status webhooks"],
          image: "/images/whatsapp/insurance/whatsapp-api-insurance-integration.png",
          imageAlt: "WhatsApp API policy management system integration- Majesco, custom PMS for insurance communication",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for Insurance- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for Insurance"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform insurance communication with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for insurance with policy management integration, IRDAI-compliant templates, and automated claims communication."
      schema={schema}
    />
  );
}
