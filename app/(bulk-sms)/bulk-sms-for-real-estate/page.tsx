import type { Metadata } from "next";
import {
  Home,
  Calendar,
  Wallet,
  FileText,
  Users,
  Key,
  Database,
  ShieldCheck,
  Globe,
  Clock,
  MapPin,
  BadgeCheck,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

export const metadata: Metadata = {
  title: "Bulk SMS for Real Estate- Site Visit & Payment Reminders India | Get Click Media",
  description:
    "Bulk SMS for real estate developers and brokers in India automates site-visit reminders, payment due alerts, possession updates, and lead follow-up- with DLT-compliant transactional and promotional routes.",
  keywords:
    "bulk sms for real estate, sms marketing for real estate india, real estate sms service, property sms alerts, site visit reminder sms, real estate lead sms",
  alternates: { canonical: "https://getclickmedia.com/bulk-sms-for-real-estate" },
  openGraph: {
    title: "Bulk SMS for Real Estate- Site Visit & Payment Reminders India",
    description:
      "Automate site-visit reminders, payment due alerts, possession updates, and lead follow-up with DLT-compliant bulk SMS for real estate.",
    url: "https://getclickmedia.com/bulk-sms-for-real-estate",
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
      name: "Bulk SMS for Real Estate India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/bulk-sms-for-real-estate",
      description:
        "Bulk SMS for real estate developers and brokers automates site-visit reminders, payment due alerts, possession updates, and lead follow-up sequences with DLT-compliant delivery.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Bulk SMS Services", item: "https://getclickmedia.com/bulk-sms-service-provider-india" },
        { "@type": "ListItem", position: 3, name: "Bulk SMS for Real Estate", item: "https://getclickmedia.com/bulk-sms-for-real-estate" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does bulk SMS help real estate site-visit conversions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 3-message SMS sequence- confirmation right after booking, a reminder the evening before, and a location-pin reminder 2 hours before the visit- cuts no-shows significantly because SMS is read within minutes even when a prospect ignores calls from an unknown number. Confirmed site visits are the single biggest lever on a real estate sales funnel, so reducing no-shows directly lifts closing rate.",
          },
        },
        {
          "@type": "Question",
          name: "Can real estate SMS alerts go out even to DND-registered numbers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, for transactional content- payment receipt confirmations, possession-date updates, RERA-mandated disclosures, and site-visit confirmations for a lead who has already engaged with your project are typically sent on the transactional (DND-exempt) route once consent exists. Promotional project launch blasts to a cold database must go through the promotional route to DND-off numbers only, per TRAI regulations. Get Click Media configures both routes correctly under your DLT entity.",
          },
        },
        {
          "@type": "Question",
          name: "Is bulk SMS still effective for real estate compared to WhatsApp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SMS remains the most reliable channel for time-critical, must-see real estate alerts- EMI due dates, possession notices, and RERA disclosures- because it doesn't depend on a working data connection or an opted-in WhatsApp number, and it lands in the phone's native inbox with no app required. Most developers run SMS for critical/legal-adjacent alerts and pair it with WhatsApp or RCS for richer project brochures and image-led nurture, rather than choosing one over the other.",
          },
        },
        {
          "@type": "Question",
          name: "How is DLT registration handled for a real estate SMS campaign?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every sender ID and message template used for real estate SMS- site-visit reminders, payment alerts, project launch promos- must be registered against your entity on the TRAI DLT platform before it can be sent. Get Click Media's onboarding team handles entity registration, header (sender ID) approval, and template registration for both transactional and promotional content, typically completed within 2-4 working days.",
          },
        },
      ],
    },
  ],
};

const USE_CASES = [
  {
    icon: Calendar,
    title: "Site Visit Reminder Sequence",
    trigger: "Site visit booked via CRM, website form, or channel partner",
    message: "Confirmation SMS at booking, reminder the evening before, and a location-pin nudge 2 hours before the slot.",
    result: "No-show rate down significantly. Sales team time saved on manual follow-up calls.",
  },
  {
    icon: Wallet,
    title: "Installment & EMI Due Alert",
    trigger: "Construction-linked or possession-linked payment milestone approaching",
    message: "Due amount, due date, unit number, and payment link- sent 7 days, 2 days, and on the due date.",
    result: "Fewer delayed payments. Reduced calls to the accounts team chasing overdue installments.",
  },
  {
    icon: Key,
    title: "Possession & Handover Update",
    trigger: "Occupancy certificate received or possession date finalised",
    message: "Formal possession-ready notice with next steps- document checklist and handover appointment link.",
    result: "Cleaner handover scheduling and fewer buyer disputes over communication gaps.",
  },
  {
    icon: FileText,
    title: "RERA & Legal Disclosure Alerts",
    trigger: "Project registration renewal, RERA update, or mandatory buyer disclosure",
    message: "Time-stamped compliance notice sent to every registered buyer on the transactional route.",
    result: "A documented, auditable communication trail for RERA compliance reviews.",
  },
  {
    icon: Users,
    title: "Lead Nurture Drip for Cold Enquiries",
    trigger: "Website enquiry or property portal lead that hasn't converted to a site visit",
    message: "A spaced 4-message drip- project USP, price benefit window, testimonial, limited-inventory nudge.",
    result: "Higher re-engagement from database leads that would otherwise go cold within 30 days.",
  },
  {
    icon: Home,
    title: "New Project Launch Blast",
    trigger: "New project or new phase launch to an opted-in broker/buyer database",
    message: "Launch announcement with price band, location, and a callback-request short link- promotional route.",
    result: "Fast initial enquiry volume for launch inventory without relying solely on paid ads.",
  },
];

const PERFORMANCE_DATA = [
  { metric: "Site visit no-show rate", before: "38% (call-only reminders)", after: "19% (3-message SMS sequence)", source: "GCM real estate client data" },
  { metric: "On-time installment payments", before: "61%", after: "79% (SMS due-date sequence)", source: "GCM developer client billing data" },
  { metric: "Accounts team payment-follow-up calls", before: "Baseline", after: "34% reduction", source: "GCM client operations data" },
  { metric: "Cold-lead re-engagement rate", before: "4-6% (email only)", after: "13-15% (SMS nurture drip)", source: "GCM CRM integration data" },
  { metric: "SMS delivery rate to registered buyers", before: "—", after: "99.9% (transactional route)", source: "GCM platform delivery reports" },
];

const CAPABILITIES = [
  { icon: Database, title: "CRM & ERP integration", desc: "Native webhook and API integration with real estate CRMs- Sell.Do, LeadSquared, Salesforce, and custom in-house systems" },
  { icon: ShieldCheck, title: "DLT-registered templates", desc: "Site-visit, payment, and possession templates pre-registered against your entity ID- no delivery delays from unapproved content" },
  { icon: Globe, title: "PAN-India delivery network", desc: "Multi-operator routing across all Indian telecom circles for consistent delivery even in Tier 2/3 project locations" },
  { icon: Clock, title: "Scheduled & triggered sends", desc: "Time-zone aware scheduling for reminder sequences plus real-time triggered sends from CRM stage changes" },
  { icon: MapPin, title: "Location-linked messaging", desc: "Google Maps pin links embedded directly in site-visit SMS for one-tap navigation to the project site" },
  { icon: BadgeCheck, title: "Sender ID approval support", desc: "GCM manages 6-character sender ID (header) approval on DLT so every SMS shows your brand, not a generic number" },
];

const FAQS = [
  {
    q: "How does bulk SMS help real estate site-visit conversions?",
    a: "A 3-message SMS sequence- confirmation right after booking, a reminder the evening before, and a location-pin reminder 2 hours before the visit- cuts no-shows significantly because SMS is read within minutes even when a prospect ignores calls from an unknown number. Confirmed site visits are the single biggest lever on a real estate sales funnel, so reducing no-shows directly lifts closing rate.",
  },
  {
    q: "Can real estate SMS alerts go out even to DND-registered numbers?",
    a: "Yes, for transactional content- payment receipt confirmations, possession-date updates, RERA-mandated disclosures, and site-visit confirmations for a lead who has already engaged with your project are typically sent on the transactional (DND-exempt) route once consent exists. Promotional project launch blasts to a cold database must go through the promotional route to DND-off numbers only, per TRAI regulations. Get Click Media configures both routes correctly under your DLT entity.",
  },
  {
    q: "Is bulk SMS still effective for real estate compared to WhatsApp?",
    a: "SMS remains the most reliable channel for time-critical, must-see real estate alerts- EMI due dates, possession notices, and RERA disclosures- because it doesn't depend on a working data connection or an opted-in WhatsApp number, and it lands in the phone's native inbox with no app required. Most developers run SMS for critical/legal-adjacent alerts and pair it with WhatsApp or RCS for richer project brochures and image-led nurture, rather than choosing one over the other.",
  },
  {
    q: "How is DLT registration handled for a real estate SMS campaign?",
    a: "Every sender ID and message template used for real estate SMS- site-visit reminders, payment alerts, project launch promos- must be registered against your entity on the TRAI DLT platform before it can be sent. Get Click Media's onboarding team handles entity registration, header (sender ID) approval, and template registration for both transactional and promotional content, typically completed within 2-4 working days.",
  },
];

const RELATED_LINKS = [
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "Transactional SMS Service", href: "/transactional-sms-service" },
  { label: "OTP SMS Service Provider", href: "/otp-sms-service-provider" },
  { label: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
  { label: "Transactional SMS Pricing", href: "/transactional-sms-pricing" },
  { label: "RCS for Real Estate", href: "/rcs-for-real-estate" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "Bulk SMS for Banking", href: "/bulk-sms-for-banking" },
];

export default function BulkSmsForRealEstatePage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Real Estate"
      heroEyebrow="Real Estate Bulk SMS"
      heroTitle="Bulk SMS for Real Estate Developers and Brokers"
      heroHighlight="Site Visit & Payment Reminders India"
      heroDescription={
        <>
          Automate site-visit reminders, installment due alerts, possession updates, and lead
          nurture sequences with DLT-compliant bulk SMS built for the Indian property market.{" "}
          <strong className="text-gray-900">
            Get Click Media helps developers and brokerages cut site-visit no-shows and keep
            payment collections on schedule, with delivery that reaches buyers even without a
            data connection.
          </strong>
        </>
      }
      heroImage="/images/bulk-sms/transactional-sms-service-provider.webp"
      heroImageAlt="Bulk SMS for Real Estate- site visit and payment reminder dashboard"
      heroTrustLine="TRAI DLT registered · CRM & ERP integration · PAN-India delivery · 99.9% uptime"
      stats={[
        { value: "99.9%", label: "SMS delivery uptime" },
        { value: "19%", label: "Average site-visit no-show rate (post-SMS)" },
        { value: "79%", label: "On-time installment payment rate" },
        { value: "₹0.09", label: "Starting price per SMS" },
      ]}
      aeoParagraph={
        <>
          Bulk SMS for real estate automates site-visit reminders, payment due alerts, possession
          updates, and lead follow-up sequences for developers and brokers.{" "}
          <strong className="text-gray-900">Get Click Media integrates bulk SMS with real estate CRMs</strong>{" "}
          such as Sell.Do and LeadSquared in India- reducing site-visit no-shows and improving
          on-time installment collection.
        </>
      }
      insightCallout={
        <>
          A real estate sales cycle lives or dies on show-up rate. Cold-calling a prospect who
          doesn't recognise the number rarely gets picked up- but an SMS with a location pin
          lands in the inbox and is read within minutes. That single habit shift is why SMS
          remains the backbone channel for site-visit logistics even as developers add WhatsApp
          and RCS for richer nurture content.
        </>
      }
      whyIndustryTitle="Why Real Estate Businesses in India Need Bulk SMS"
      whyIndustryParagraphs={[
        <>
          Real estate sales cycles run on logistics as much as persuasion- a confirmed site
          visit that doesn't happen is a lead wasted, and a missed installment reminder is a
          collections problem waiting to surface at possession. Both are timing failures, and
          SMS is still the most dependable way to land a time-critical message on any phone in
          India, smartphone or feature phone, data connection or none.
        </>,
        <>
          RERA compliance adds a second reason: certain buyer disclosures and project updates
          need a documented, time-stamped communication trail. A transactional SMS log gives
          developers exactly that- an auditable record that a specific number was notified at a
          specific time, which email opens and app notifications can't always prove.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Developers running a 3-message site-visit SMS sequence
          (confirmation, evening-before reminder, day-of location pin) consistently see fewer
          no-shows than call-only follow-up- because SMS doesn't require the prospect to answer
          an unknown number to receive the reminder.
        </>
      }
      imageSections={[
        {
          eyebrow: "Sales & Collections Hub",
          title: (
            <>
              One dashboard for site visits, <span className="text-[#2563eb]">payments and possession updates</span>
            </>
          ),
          description:
            "Manage every buyer touchpoint- site-visit reminders, installment alerts, possession notices, and RERA disclosures- from a single SMS dashboard connected to your sales CRM and accounts system.",
          bullets: [
            "Triggered SMS from CRM stage changes",
            "Payment due-date sequences with links",
            "RERA-compliant disclosure logs",
            "Real-time delivery and read-rate reports",
          ],
          image: "/images/bulk-sms/what-is-transactional-sms-service.webp",
          imageAlt: "Bulk SMS dashboard for real estate- site visit, payment, and possession alerts",
        },
        {
          eyebrow: "Site Visit Automation",
          title: (
            <>
              A 3-message sequence <span className="text-[#2563eb]">that cuts no-shows</span>
            </>
          ),
          description:
            "Every booked site visit triggers a confirmation SMS, an evening-before reminder, and a location-pin nudge two hours before the slot- no manual follow-up call required from your sales team.",
          bullets: [
            "Instant booking confirmation",
            "Evening-before reminder",
            "Google Maps pin for one-tap navigation",
            "Auto-reschedule link on no-response",
          ],
          image: "/images/bulk-sms/small_Covering_All_Your_SMS_Needs_Be_It_Promotional_Or_Transactional_85a655ff7b.webp",
          imageAlt: "Real estate site visit SMS reminder sequence preview",
          imageSide: "left",
        },
      ]}
      useCasesTitle="Bulk SMS Use Cases for Real Estate- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's Bulk SMS Capabilities for Real Estate"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to reduce site-visit no-shows with bulk SMS?"
      bottomCtaDescription="Get Click Media provides DLT-compliant bulk SMS for real estate developers and brokers with CRM integration and PAN-India delivery."
      schema={schema}
    />
  );
}
