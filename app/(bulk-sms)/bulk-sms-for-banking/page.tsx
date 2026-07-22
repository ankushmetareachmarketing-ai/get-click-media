import type { Metadata } from "next";
import {
  Landmark,
  ShieldAlert,
  Wallet,
  CreditCard,
  FileText,
  KeyRound,
  Database,
  ShieldCheck,
  Globe,
  Clock,
  BadgeCheck,
  Bell,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

export const metadata: Metadata = {
  title: "Bulk SMS for Banks & NBFCs — OTP, EMI & Fraud Alerts India | Get Click Media",
  description:
    "Bulk SMS for banks, NBFCs, and fintechs in India delivers OTPs, EMI reminders, low-balance alerts, and fraud notifications on a DND-exempt transactional route with 99.9% delivery uptime.",
  keywords:
    "bulk sms for banking, sms for banks india, bank sms alert service, emi reminder sms, otp sms for banking, nbfc sms service provider",
  alternates: { canonical: "https://getclickmedia.com/bulk-sms-for-banking" },
  openGraph: {
    title: "Bulk SMS for Banks & NBFCs — OTP, EMI & Fraud Alerts India",
    description:
      "Deliver OTPs, EMI reminders, low-balance alerts, and fraud notifications on a DND-exempt transactional SMS route for banks and NBFCs.",
    url: "https://getclickmedia.com/bulk-sms-for-banking",
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
      "@type": "Service",
      name: "Bulk SMS for Banking and NBFC India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/bulk-sms-for-banking",
      description:
        "Bulk SMS for banks, NBFCs, and fintechs delivers OTPs, EMI reminders, low-balance alerts, and fraud notifications on a DND-exempt transactional route with DLT-compliant delivery.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Bulk SMS Services", item: "https://getclickmedia.com/bulk-sms-service-provider-india" },
        { "@type": "ListItem", position: 3, name: "Bulk SMS for Banking", item: "https://getclickmedia.com/bulk-sms-for-banking" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do banks in India still depend on SMS for OTPs instead of app notifications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SMS OTP delivery doesn't depend on the customer having the bank's app installed, being logged in, or having a data connection at the moment of the transaction — it works on any handset over the basic cellular network. That universal reach, combined with the transactional route being exempt from DND filtering, is why SMS remains the primary OTP channel for net banking, UPI, and card transactions across Indian banks and NBFCs.",
          },
        },
        {
          "@type": "Question",
          name: "Can EMI reminder SMS be sent to customers on the DND registry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — EMI due-date reminders, payment confirmations, and account alerts to an existing customer are transactional service messages and are sent on the DND-exempt transactional SMS route, not the promotional route. This is distinct from a marketing offer SMS, which does require the recipient to be off the DND registry. Get Click Media configures templates on the correct route so critical alerts are never blocked.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can a fraud alert SMS reach a bank customer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On a properly configured transactional SMS route with a direct operator connection, a fraud or unusual-transaction alert can reach the customer within seconds of the trigger firing from the bank's fraud management system — fast enough for the customer to respond before further transactions go through. Delivery speed depends on route quality, which is why banks work with providers offering direct-to-operator SMS routes rather than shared low-priority ones.",
          },
        },
        {
          "@type": "Question",
          name: "What compliance does a bank need for SMS communication in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every sender ID and message template a bank or NBFC uses must be registered on the TRAI DLT platform against the entity, with transactional and promotional content kept on separate registered routes. Get Click Media additionally supports audit-trail logging and India-hosted delivery infrastructure so banking SMS communication has a documented, reviewable record for compliance audits.",
          },
        },
      ],
    },
  ],
};

const USE_CASES = [
  {
    icon: KeyRound,
    title: "OTP Delivery for Authentication",
    trigger: "Net banking login, UPI transaction, or card payment requiring 2FA",
    message: "Transaction OTP with amount, masked beneficiary, and a 5-minute expiry notice on the DND-exempt route.",
    result: "Sub-second-to-a-few-seconds delivery on a direct operator route, keeping transaction flows uninterrupted.",
  },
  {
    icon: Wallet,
    title: "EMI Due & Payment Reminder Sequence",
    trigger: "EMI due date approaching in the loan management system",
    message: "Due amount, due date, and account number (masked) sent at 7 days, 2 days, and on the due date.",
    result: "Higher on-time payment rate. Fewer manual collections calls before the due date.",
  },
  {
    icon: ShieldAlert,
    title: "Fraud & Unusual Transaction Alert",
    trigger: "Fraud management system flags an unusual transaction attempt",
    message: "Immediate alert with transaction details and a customer-service callback number for disputes.",
    result: "Faster customer response window, reducing potential fraud exposure.",
  },
  {
    icon: CreditCard,
    title: "Low Balance & Account Alert",
    trigger: "Account balance drops below a set threshold, or a large debit posts",
    message: "Balance alert with current balance and a top-up or transfer reminder where applicable.",
    result: "Fewer failed auto-debits and bounced ECS/NACH mandates.",
  },
  {
    icon: FileText,
    title: "KYC Renewal & Document Reminder",
    trigger: "KYC expiry approaching — 60, 30, and 7 days out",
    message: "Renewal notice with branch or online-update instructions ahead of the compliance deadline.",
    result: "Higher on-time KYC completion, fewer accounts frozen for non-compliance.",
  },
  {
    icon: Landmark,
    title: "Loan Disbursement & Statement Alert",
    trigger: "Loan disbursed or a statement cycle closes",
    message: "Disbursement confirmation with loan account number and first-EMI date, or a mini-statement summary.",
    result: "Fewer confusion-driven calls to the branch after disbursement or statement generation.",
  },
];

const PERFORMANCE_DATA = [
  { metric: "OTP delivery rate", before: "—", after: "99.9% (direct operator transactional route)", source: "GCM banking platform data" },
  { metric: "On-time EMI payment rate", before: "67%", after: "84% (SMS reminder sequence)", source: "GCM NBFC client billing data" },
  { metric: "Pre-delinquency collections calls", before: "100% manual outreach", after: "38% reduction", source: "GCM collections automation data" },
  { metric: "KYC renewal completion rate", before: "41%", after: "68% (SMS reminder sequence)", source: "GCM bank client data" },
  { metric: "Fraud alert delivery time", before: "Minutes (call-based)", after: "Seconds (SMS trigger)", source: "GCM fraud-alert integration data" },
];

const CAPABILITIES = [
  { icon: Database, title: "Core banking & loan system integration", desc: "API and file-based integration with core banking systems and NBFC loan management platforms for real-time triggers" },
  { icon: ShieldCheck, title: "DLT-registered, DND-exempt routing", desc: "Transactional templates registered on TRAI DLT with confirmed DND-exempt routing for OTPs and service alerts" },
  { icon: Globe, title: "India-hosted infrastructure", desc: "Delivery infrastructure hosted in India with audit-trail logging for compliance and regulatory review" },
  { icon: Clock, title: "Direct operator routes", desc: "Priority, direct-to-operator connectivity for OTP and fraud-alert SMS to minimise delivery latency" },
  { icon: Bell, title: "Real-time fraud-alert webhook", desc: "Fraud management system integration for alerts within seconds of a flagged transaction" },
  { icon: BadgeCheck, title: "Sender ID approval support", desc: "GCM manages your bank or NBFC's approved sender ID so every SMS is instantly recognisable and trusted" },
];

const FAQS = [
  {
    q: "Why do banks in India still depend on SMS for OTPs instead of app notifications?",
    a: "SMS OTP delivery doesn't depend on the customer having the bank's app installed, being logged in, or having a data connection at the moment of the transaction — it works on any handset over the basic cellular network. That universal reach, combined with the transactional route being exempt from DND filtering, is why SMS remains the primary OTP channel for net banking, UPI, and card transactions across Indian banks and NBFCs.",
  },
  {
    q: "Can EMI reminder SMS be sent to customers on the DND registry?",
    a: "Yes — EMI due-date reminders, payment confirmations, and account alerts to an existing customer are transactional service messages and are sent on the DND-exempt transactional SMS route, not the promotional route. This is distinct from a marketing offer SMS, which does require the recipient to be off the DND registry. Get Click Media configures templates on the correct route so critical alerts are never blocked.",
  },
  {
    q: "How fast can a fraud alert SMS reach a bank customer?",
    a: "On a properly configured transactional SMS route with a direct operator connection, a fraud or unusual-transaction alert can reach the customer within seconds of the trigger firing from the bank's fraud management system — fast enough for the customer to respond before further transactions go through. Delivery speed depends on route quality, which is why banks work with providers offering direct-to-operator SMS routes rather than shared low-priority ones.",
  },
  {
    q: "What compliance does a bank need for SMS communication in India?",
    a: "Every sender ID and message template a bank or NBFC uses must be registered on the TRAI DLT platform against the entity, with transactional and promotional content kept on separate registered routes. Get Click Media additionally supports audit-trail logging and India-hosted delivery infrastructure so banking SMS communication has a documented, reviewable record for compliance audits.",
  },
];

const RELATED_LINKS = [
  { label: "OTP SMS Service Provider", href: "/otp-sms-service-provider" },
  { label: "Transactional SMS Service", href: "/transactional-sms-service" },
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "OTP SMS Pricing", href: "/otp-sms-pricing" },
  { label: "Transactional SMS Pricing", href: "/transactional-sms-pricing" },
  { label: "RCS for Banking", href: "/rcs-for-banking" },
  { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
  { label: "Bulk SMS for Ecommerce", href: "/bulk-sms-for-ecommerce" },
];

export default function BulkSmsForBankingPage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Banking & NBFC"
      heroEyebrow="Banking & NBFC Bulk SMS"
      heroTitle="Bulk SMS for Banks, NBFCs and Fintechs"
      heroHighlight="OTP, EMI & Fraud Alerts India"
      heroDescription={
        <>
          Deliver OTPs, EMI reminders, low-balance alerts, and fraud notifications on a DND-exempt
          transactional route built for regulated financial communication in India.{" "}
          <strong className="text-gray-900">
            Get Click Media provides direct-operator SMS routing for banks and NBFCs — improving
            on-time EMI payments and cutting fraud-alert delivery time to seconds.
          </strong>
        </>
      }
      heroImage="/images/bulk-sms/what-is-transactional-sms-service.webp"
      heroImageAlt="Bulk SMS for Banking and NBFC — OTP and EMI alert dashboard"
      heroTrustLine="TRAI DLT registered · DND-exempt transactional route · India-hosted infrastructure · 99.9% uptime"
      stats={[
        { value: "99.9%", label: "OTP delivery rate" },
        { value: "84%", label: "On-time EMI payment rate (post-SMS)" },
        { value: "38%", label: "Reduction in manual collections calls" },
        { value: "₹0.09", label: "Starting price per SMS" },
      ]}
      aeoParagraph={
        <>
          Bulk SMS for banking delivers OTPs, EMI due reminders, low-balance alerts, KYC renewal
          notices, and fraud alerts to customers on a DND-exempt transactional route.{" "}
          <strong className="text-gray-900">Get Click Media integrates bulk SMS with core banking and NBFC loan systems</strong>{" "}
          in India — improving on-time EMI payments and reducing collections team workload.
        </>
      }
      insightCallout={
        <>
          Financial communication has zero tolerance for delay or drop — an OTP that arrives late
          fails a transaction, and a fraud alert that arrives late is too late to help. SMS on a
          DND-exempt transactional route with a direct operator connection is still the fastest,
          most universal way to guarantee that critical banking messages land on time.
        </>
      }
      whyIndustryTitle="Why Banks and NBFCs in India Need Bulk SMS"
      whyIndustryParagraphs={[
        <>
          Indian banks and NBFCs send millions of time-critical messages daily — OTPs, EMI
          reminders, fraud alerts, and account updates — to a customer base that spans every kind
          of phone and every level of digital comfort. SMS is the one channel guaranteed to work
          across all of them, with no app, login, or data connection required.
        </>,
        <>
          The DND-exempt transactional route matters specifically because regulatory and service
          communication — OTPs, payment confirmations, fraud alerts — must never be filtered the
          way a promotional message legitimately can be. Getting that routing right is as much a
          compliance requirement as a delivery-performance one.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Banks and NBFCs running a 3-message EMI reminder
          sequence (7 days, 2 days, due date) see meaningfully higher on-time payment rates than a
          single-reminder workflow, because each message catches a different segment of customers
          based on when they typically act.
        </>
      }
      imageSections={[
        {
          eyebrow: "Financial Communication Hub",
          title: (
            <>
              One dashboard for OTPs, EMI reminders <span className="text-[#2563eb]">and fraud alerts</span>
            </>
          ),
          description:
            "Manage every customer touchpoint — OTP delivery, EMI reminders, low-balance alerts, KYC renewals, and fraud notifications — from a single SMS dashboard connected to your core banking or loan management system.",
          bullets: [
            "Direct-operator OTP routing",
            "EMI due-date reminder sequences",
            "Real-time fraud-alert webhook integration",
            "Audit-trail logging for compliance review",
          ],
          image: "/images/bulk-sms/transactional-sms-service-provider.webp",
          imageAlt: "Bulk SMS dashboard for banking — OTP, EMI, and fraud alerts",
        },
        {
          eyebrow: "EMI Collection Automation",
          title: (
            <>
              A 3-message sequence <span className="text-[#2563eb]">that improves on-time payment</span>
            </>
          ),
          description:
            "Every upcoming EMI due date triggers a reminder 7 days before, 2 days before, and on the due date itself — masked account number, amount, and due date in every message — reducing pre-delinquency collections workload.",
          bullets: [
            "7-day and 2-day advance reminders",
            "Due-date-of final reminder",
            "Masked account number for security",
            "Automatic escalation flag for missed payments",
          ],
          image: "/images/bulk-sms/bulk-sms-service-provider-india-hero.webp",
          imageAlt: "Bank EMI reminder SMS sequence preview",
          imageSide: "left",
        },
      ]}
      useCasesTitle="Bulk SMS Use Cases for Banking and NBFC — 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's Bulk SMS Capabilities for Banking and NBFC"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to strengthen banking communication with bulk SMS?"
      bottomCtaDescription="Get Click Media provides DND-exempt transactional bulk SMS for banks and NBFCs with core banking integration and India-hosted infrastructure."
      schema={schema}
    />
  );
}
