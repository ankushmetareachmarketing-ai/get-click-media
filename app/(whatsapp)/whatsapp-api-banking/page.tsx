import type { Metadata } from "next";
import {
  CreditCard,
  Wallet,
  Shield,
  FileText,
  ShieldCheck,
  Bell,
  Database,
  Globe,
  PhoneCall,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Banking and NBFCs- EMI Alerts, OTP and Loan Servicing India | Get Click Media",
  description:
    "WhatsApp Business API for banking and NBFCs enables automated EMI payment reminders, loan disbursement alerts, account statements, OTP delivery, and fraud notifications through WhatsApp.",
  keywords:
    "WhatsApp API for Banking India, WhatsApp Banking India, WhatsApp API NBFC India, WhatsApp Loan Servicing, WhatsApp EMI Reminder India, Bank WhatsApp API India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-banking" },
  openGraph: {
    title: "WhatsApp API for Banking and NBFCs- EMI Alerts, OTP and Loan Servicing India",
    description:
      "WhatsApp Business API for banking and NBFCs enables automated EMI payment reminders, loan disbursement alerts, account statements, OTP delivery, and fraud notifications through WhatsApp.",
    url: "https://getclickmedia.com/whatsapp-api-banking",
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
      name: "WhatsApp API for Banking and NBFC India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-banking",
      description:
        "WhatsApp Business API for banking and NBFCs enables automated EMI payment reminders, loan disbursement alerts, account statements, OTP delivery, and fraud notifications through WhatsApp.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Banking and NBFC India", item: "https://getclickmedia.com/whatsapp-api-banking" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is WhatsApp API approved for banking communication in India?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp Business API is not explicitly regulated by RBI for banking communication- it falls under general digital communication guidelines. Banks and NBFCs use WhatsApp API for customer communication with appropriate safeguards: verified sender identity (Green Tick), explicit customer consent, India-hosted data, and complete audit trails. RBI's digital communication guidelines require authenticated sender identity and opt-out mechanisms- both of which WhatsApp API provides." },
        },
        {
          "@type": "Question",
          name: "Can banks send OTPs via WhatsApp in India?",
          acceptedAnswer: { "@type": "Answer", text: "Yes- WhatsApp authentication-category templates are designed for OTP delivery. WhatsApp OTPs offer higher delivery rates (99.1% vs 97.2% for SMS) and stronger sender identity verification (Meta-verified business name + Green Tick) compared to SMS. Several Indian digital lenders and neo-banks use WhatsApp as their primary OTP channel. Get Click Media manages the authentication template setup and delivery infrastructure." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API improve EMI collection for NBFCs?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp EMI reminders achieve 98% open rates compared to 35% for SMS, and include a Pay Now button that links directly to the payment gateway- reducing the steps from reminder to payment from 4+ (SMS > open > search payment app > pay) to 2 (open WhatsApp message > tap Pay Now > complete UPI payment). The 5-message reminder sequence starting 7 days before due date catches at-risk customers before they become delinquent." },
        },
        {
          "@type": "Question",
          name: "Is customer banking data safe on WhatsApp?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp messages are end-to-end encrypted in delivery. Get Click Media's infrastructure for banking clients includes: India-hosted data processing (AWS Mumbai), no storage of sensitive financial data in message logs, masked account numbers in templates, and DPDP 2023-compliant consent and data handling. We conduct security reviews for all banking integrations." },
        },
      ],
    },
  ],
};

// ── Banking Use Cases ──────────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: CreditCard,
    title: "EMI Payment Reminder Sequence",
    trigger: "EMI due date- automated at Day -7, -3, 0, +1, +3",
    message: "EMI amount, due date, account number (masked), and [Pay Now] button. Escalating urgency at each stage. Final notice before collections flag.",
    result: "On-time payment +28%. Collections escalation -45%. Customer dispute calls -22%.",
  },
  {
    icon: Wallet,
    title: "Loan Disbursement Notification",
    trigger: "Loan disbursed in CBS- amount credited to account",
    message: "Loan disbursement confirmation with amount, loan account number, first EMI date, and repayment schedule PDF",
    result: "Customer confusion calls -80%. Loan account activation rate +15%.",
  },
  {
    icon: Shield,
    title: "OTP Delivery- Authentication",
    trigger: "Customer initiates net banking login, NEFT, UPI, or card transaction requiring 2FA",
    message: "Transaction OTP with amount, beneficiary (masked), and 5-minute expiry notice. Clear fraud warning.",
    result: "OTP delivery rate 99.1% vs 97.2% SMS. Phishing susceptibility lower with verified WA sender.",
  },
  {
    icon: FileText,
    title: "Account Statement on Demand",
    trigger: "Customer messages STATEMENT or taps quick-reply button",
    message: "Mini statement (last 5 transactions) inline + [Download Full Statement] PDF button + [Email Statement] option",
    result: "Branch visit for statement -55%. Call centre statement queries -40%.",
  },
  {
    icon: ShieldCheck,
    title: "KYC Renewal Alert and Document Collection",
    trigger: "KYC expiry date approaching- 60 days, 30 days, 7 days",
    message: "KYC renewal required notice with [Upload Documents] WhatsApp Flow button- captures Aadhaar, PAN, selfie in-chat",
    result: "KYC renewal completion rate +3.2x. Branch visit for KYC -65%.",
  },
  {
    icon: Bell,
    title: "Fraud Alert and Account Security Notification",
    trigger: "Unusual transaction detected by fraud management system",
    message: "Immediate alert: transaction attempt details. [This Was Me] / [Block Immediately] interactive buttons. 24/7 response.",
    result: "Fraud transaction reversal speed 4x faster. Customer trust score +15 points.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "EMI on-time payment rate", before: "67% (SMS reminder baseline)", after: "86% (WhatsApp 5-message sequence)", source: "GCM NBFC client data" },
  { metric: "Collections team call volume", before: "100% manual outreach", after: "45% reduction- WhatsApp handles pre-delinquency", source: "GCM collections automation" },
  { metric: "KYC completion rate", before: "38% (email and SMS)", after: "72% (WhatsApp Flow document upload)", source: "GCM bank client deployment" },
  { metric: "OTP delivery rate", before: "97.2% (SMS)", after: "99.1% (WhatsApp API)", source: "GCM authentication platform data" },
  { metric: "Customer service call volume", before: "Baseline", after: "28% reduction with WhatsApp self-service", source: "GCM bank contact centre data" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "CBS integration", desc: "Finacle, Temenos, Oracle FLEXCUBE, and custom CBS via API webhook or file-based trigger" },
  { icon: ShieldCheck, title: "RBI compliance", desc: "Audit trail for all customer communications. Opt-in consent management. 2-year message retention for regulatory review." },
  { icon: Globe, title: "India data residency", desc: "All customer financial data processed and stored on India-hosted infrastructure (AWS Mumbai)" },
  { icon: Bell, title: "Fraud alert integration", desc: "Fraud management system webhook- real-time WhatsApp alert within 10 seconds of flag" },
  { icon: PhoneCall, title: "Collections workflow", desc: "Pre-delinquency WhatsApp sequence before traditional collections escalation" },
  { icon: Shield, title: "Verified Green Tick", desc: "GCM manages Green Tick application- critical for banking trust in India" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is WhatsApp API approved for banking communication in India?",
    a: "WhatsApp Business API is not explicitly regulated by RBI for banking communication- it falls under general digital communication guidelines. Banks and NBFCs use WhatsApp API for customer communication with appropriate safeguards: verified sender identity (Green Tick), explicit customer consent, India-hosted data, and complete audit trails. RBI's digital communication guidelines require authenticated sender identity and opt-out mechanisms- both of which WhatsApp API provides.",
  },
  {
    q: "Can banks send OTPs via WhatsApp in India?",
    a: "Yes- WhatsApp authentication-category templates are designed for OTP delivery. WhatsApp OTPs offer higher delivery rates (99.1% vs 97.2% for SMS) and stronger sender identity verification (Meta-verified business name + Green Tick) compared to SMS. Several Indian digital lenders and neo-banks use WhatsApp as their primary OTP channel. Get Click Media manages the authentication template setup and delivery infrastructure.",
  },
  {
    q: "How does WhatsApp API improve EMI collection for NBFCs?",
    a: "WhatsApp EMI reminders achieve 98% open rates compared to 35% for SMS, and include a Pay Now button that links directly to the payment gateway- reducing the steps from reminder to payment from 4+ (SMS > open > search payment app > pay) to 2 (open WhatsApp message > tap Pay Now > complete UPI payment). The 5-message reminder sequence starting 7 days before due date catches at-risk customers before they become delinquent.",
  },
  {
    q: "Is customer banking data safe on WhatsApp?",
    a: "WhatsApp messages are end-to-end encrypted in delivery. Get Click Media's infrastructure for banking clients includes: India-hosted data processing (AWS Mumbai), no storage of sensitive financial data in message logs, masked account numbers in templates, and DPDP 2023-compliant consent and data handling. We conduct security reviews for all banking integrations.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
  { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
  { label: "WhatsApp API Security", href: "/whatsapp-api-security" },
  { label: "WhatsApp Green Tick Verification", href: "/whatsapp-green-tick-verification" },
  { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
  { label: "WhatsApp API for NBFC", href: "/whatsapp-api-nbfc" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIBankingPage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Banking & NBFC"
      heroEyebrow="Banking & NBFC WhatsApp API"
      heroTitle="WhatsApp Business API for Banking and NBFCs"
      heroHighlight="EMI Alerts, OTP and Loan Servicing India"
      heroDescription={
        <>
          Automate EMI payment reminders, loan disbursement alerts, account statements, OTP delivery,
          and fraud notifications through WhatsApp Business API integrated with your core banking system.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with core banking systems and NBFC loan management systems in India- improving on-time EMI payment rates by 28% and reducing collections team workload by 45%.</strong>
        </>
      }
      heroImage="/images/whatsapp/banking/whatsaap-bussiness-api-for-banking.png"
      heroImageAlt="WhatsApp Business API for Banking and NBFCs"
      heroTrustLine="Official Meta BSP · CBS integration (Finacle, Temenos, FLEXCUBE) · RBI-aligned compliance · India-hosted data (AWS Mumbai)"
      stats={[
        { value: "28%", label: "Improvement in on-time EMI payment rate" },
        { value: "45%", label: "Reduction in collections team workload" },
        { value: "3.2x", label: "Faster KYC completion via WhatsApp" },
        { value: "99.1%", label: "OTP delivery rate via WhatsApp API" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for banking and NBFCs enables automated EMI payment reminders, loan
          disbursement alerts, account statements, OTP delivery, and fraud notifications through WhatsApp.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with core banking systems</strong> and
          NBFC loan management systems in India- improving on-time EMI payment rates by 28% and
          reducing collections team workload by 45%.
        </>
      }
      insightCallout={
        <>
          Indian banks and NBFCs send millions of transactional messages daily- EMI reminders, payment
          confirmations, KYC alerts, and account updates. SMS achieves 30-35% open rates and has
          declining CTR. WhatsApp achieves <strong>98% open rates</strong> and enables two-way
          interaction- a customer can confirm a payment, raise a dispute, or request a statement
          directly in the chat.
        </>
      }
      whyIndustryTitle="Why Banking and NBFC Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Indian banks and NBFCs face a critical challenge: the collections-to-EMI ratio is worsening
          as manual calling becomes less effective. Customers ignore unknown calls but respond to
          WhatsApp from a verified, named institution.
        </>,
        <>
          The verified Green Tick on WhatsApp creates trust that SMS sender IDs cannot match- critical
          for financial communication where fraud is a significant concern. With{" "}
          <strong>28% improvement in on-time EMI payments</strong> and{" "}
          <strong>45% reduction in collections team workload</strong>, WhatsApp is rapidly becoming the
          standard for banking communication in India.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> SMS achieves 30-35% open rates with declining CTR. WhatsApp
          achieves 98% open rates and enables two-way interaction- a customer can confirm a payment,
          raise a dispute, or request a statement directly in the chat.
        </>
      }
      imageSections={[
        {
          eyebrow: "Banking Communication Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for banks and NBFCs</span>
            </>
          ),
          description:
            "Manage all customer communication from a single dashboard- EMI reminders, loan disbursements, OTP delivery, KYC collection, account statements, and fraud alerts- with full integration to your core banking system.",
          bullets: [
            "Automated EMI reminder sequence with Pay Now button",
            "Real-time fraud alerts with interactive buttons",
            "KYC document collection via WhatsApp Flow",
            "India-hosted data with full RBI compliance",
          ],
          image: "/images/whatsapp/banking/whatsapp-for-banking.webp",
          imageAlt: "WhatsApp API Banking dashboard- EMI reminders, loan disbursements, OTP delivery, KYC collection, and fraud alerts",
        },
        {
          eyebrow: "EMI Collection Automation",
          title: (
            <>
              WhatsApp EMI reminders <span className="text-[#2563eb]">with one-tap payment</span>
            </>
          ),
          description:
            "Interactive WhatsApp EMI reminders with Pay Now buttons linked directly to payment gateways. A 5-message sequence starting 7 days before due date catches at-risk customers before they become delinquent- reducing collections escalations by 45%.",
          bullets: [
            "98% open rate vs 35% for SMS reminders",
            "Pay Now button links directly to payment gateway",
            "5-message sequence with escalating urgency",
            "Reduces collection calls and improves cash flow",
          ],
          image: "/images/whatsapp/banking/whatsApp-for-banking-and-fintech.webp",
          imageAlt: "WhatsApp EMI reminder message preview- EMI amount, due date, and Pay Now button with one-tap payment",
          imageSide: "left",
        },
        {
          eyebrow: "Core Banking Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">your core banking system</span>
            </>
          ),
          description:
            "Get Click Media integrates with leading core banking systems- Finacle, Temenos, and Oracle FLEXCUBE- enabling real-time WhatsApp communication triggered by customer events like EMI due dates, loan disbursements, and KYC expiry. RBI-compliant with full audit trails and 2-year message retention.",
          bullets: ["Finacle", "Temenos", "Oracle FLEXCUBE", "Custom CBS", "API webhook", "File-based trigger"],
          image: "/images/whatsapp/banking/best-whatsapp-api-service-provider-in-india.webp",
          imageAlt: "WhatsApp API CBS integration- Finacle, Temenos, Oracle FLEXCUBE integration for banking communication",
          imageSide: "left",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for Banking and NBFC- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for Banking and NBFC"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform banking communication with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for banking and NBFCs with CBS integration, RBI compliance, and India-hosted data infrastructure."
      schema={schema}
    />
  );
}
