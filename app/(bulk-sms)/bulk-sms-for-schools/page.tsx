import type { Metadata } from "next";
import {
  GraduationCap,
  Bell,
  Wallet,
  BusFront,
  ClipboardCheck,
  CalendarClock,
  Database,
  ShieldCheck,
  Globe,
  Users,
  MessageSquareText,
  BadgeCheck,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

export const metadata: Metadata = {
  title: "Bulk SMS for Schools — Fee, Attendance & Exam Alerts India | Get Click Media",
  description:
    "Bulk SMS for schools and educational institutes in India automates fee reminders, student absence alerts to parents, exam result notifications, PTM reminders, and bus tracking updates — DLT compliant.",
  keywords:
    "bulk sms for schools, sms for schools india, school fee reminder sms, student absence sms alert, school management sms service, attendance sms for parents",
  alternates: { canonical: "https://getclickmedia.com/bulk-sms-for-schools" },
  openGraph: {
    title: "Bulk SMS for Schools — Fee, Attendance & Exam Alerts India",
    description:
      "Automate fee reminders, absence alerts to parents, exam results, and PTM reminders with DLT-compliant bulk SMS for schools.",
    url: "https://getclickmedia.com/bulk-sms-for-schools",
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
      name: "Bulk SMS for Schools India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/bulk-sms-for-schools",
      description:
        "Bulk SMS for schools automates fee reminders, student absence alerts, exam result notifications, PTM reminders, and bus tracking updates for parents with DLT-compliant delivery.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Bulk SMS Services", item: "https://getclickmedia.com/bulk-sms-service-provider-india" },
        { "@type": "ListItem", position: 3, name: "Bulk SMS for Schools", item: "https://getclickmedia.com/bulk-sms-for-schools" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do Indian schools still rely on SMS instead of an app for parent alerts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not every parent has a smartphone with the school's app installed, and app push notifications get missed or disabled. SMS reaches every registered parent number — smartphone or feature phone — without requiring an app download or a data connection, which is why absence alerts and fee reminders are still sent by SMS even at schools that also run a parent app.",
          },
        },
        {
          "@type": "Question",
          name: "Is a same-day absence alert SMS possible for schools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — when attendance is marked in the school management system by the first period, an API trigger can send a same-day absence SMS to the registered parent number within minutes, rather than the parent finding out at pickup time or the next PTM. This is one of the most-requested automations from CBSE and state-board schools using Get Click Media's SMS API.",
          },
        },
        {
          "@type": "Question",
          name: "Can schools send exam results and report cards by SMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Schools typically send a results-ready SMS notification with a secure link to the report card rather than the full marksheet in the message body, since SMS has a 160-character-per-segment limit and results data needs to stay behind a parent login. The notification SMS itself is sent on the transactional route so it reaches every parent, including those on DND.",
          },
        },
        {
          "@type": "Question",
          name: "How much does bulk SMS cost for a school with a few thousand students?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most schools fall into the mid-volume slab — roughly 10,000 to 1,00,000 SMS a month once fee reminders, absence alerts, and circulars are combined — which typically prices around ₹0.09 per SMS on Get Click Media's Growth plan. Actual cost depends on message mix (transactional vs promotional) and total monthly volume; see full bulk SMS pricing for exact slabs.",
          },
        },
      ],
    },
  ],
};

const USE_CASES = [
  {
    icon: ClipboardCheck,
    title: "Same-Day Student Absence Alert",
    trigger: "Attendance marked absent in school ERP by first period",
    message: "Parent gets an SMS naming the student, date, and a callback number for the class teacher — sent within minutes.",
    result: "Faster parent awareness of unexplained absences. Fewer end-of-day surprise pickups.",
  },
  {
    icon: Wallet,
    title: "Fee Due Reminder Sequence",
    trigger: "Term fee due date approaching in accounts system",
    message: "Due amount, due date, and payment link sent 7 days before, 2 days before, and on the due date.",
    result: "Fewer late-fee escalations. Reduced front-office queries about due amounts.",
  },
  {
    icon: GraduationCap,
    title: "Exam Result & Report Card Alert",
    trigger: "Term results published in the school ERP",
    message: "Results-ready notification with a secure parent-portal link to view the report card.",
    result: "Immediate, universal notification to every parent regardless of app usage.",
  },
  {
    icon: CalendarClock,
    title: "PTM & Circular Reminders",
    trigger: "Parent-teacher meeting scheduled or a new circular published",
    message: "Date, time, and venue for PTMs; summary line and portal link for circulars and holiday notices.",
    result: "Higher PTM attendance. Fewer 'I didn't see the circular' conversations at the gate.",
  },
  {
    icon: BusFront,
    title: "Transport & Bus Delay Alerts",
    trigger: "Bus running late or route change reported by transport in-charge",
    message: "Real-time delay or route-change alert to all parents on the affected route.",
    result: "Reduced anxious calls to the transport desk during delays.",
  },
  {
    icon: Users,
    title: "Admission Enquiry OTP & Follow-up",
    trigger: "Prospective parent submits an admission enquiry form",
    message: "OTP verification for the enquiry, followed by a counsellor callback confirmation SMS.",
    result: "Verified, spam-free enquiry database for the admissions team to work.",
  },
];

const PERFORMANCE_DATA = [
  { metric: "Parent awareness of same-day absence", before: "Next-day (diary/app)", after: "Within minutes (SMS)", source: "GCM school client data" },
  { metric: "On-time fee collection", before: "58%", after: "76% (SMS due-date sequence)", source: "GCM school accounts data" },
  { metric: "Front-office fee-related calls", before: "Baseline", after: "31% reduction", source: "GCM client operations data" },
  { metric: "PTM attendance rate", before: "62%", after: "80% (SMS reminder sequence)", source: "GCM school client data" },
  { metric: "SMS delivery rate to parent numbers", before: "—", after: "99.9% (transactional route)", source: "GCM platform delivery reports" },
];

const CAPABILITIES = [
  { icon: Database, title: "School ERP integration", desc: "API and webhook integration with leading school management systems for attendance, fees, and exam modules" },
  { icon: ShieldCheck, title: "DLT-registered templates", desc: "Absence, fee, and exam templates pre-approved on TRAI DLT under your school's registered entity" },
  { icon: Globe, title: "PAN-India delivery network", desc: "Multi-operator routing so alerts reach parents reliably across metro and Tier 2/3 towns alike" },
  { icon: MessageSquareText, title: "Regional language support", desc: "Unicode SMS templates in Hindi and regional languages for parent communication beyond English" },
  { icon: Bell, title: "Instant triggered alerts", desc: "Real-time API triggers for absence and transport alerts — no batch delay between event and SMS" },
  { icon: BadgeCheck, title: "Sender ID approval support", desc: "GCM manages your school's approved sender ID so every SMS is instantly recognisable to parents" },
];

const FAQS = [
  {
    q: "Why do Indian schools still rely on SMS instead of an app for parent alerts?",
    a: "Not every parent has a smartphone with the school's app installed, and app push notifications get missed or disabled. SMS reaches every registered parent number — smartphone or feature phone — without requiring an app download or a data connection, which is why absence alerts and fee reminders are still sent by SMS even at schools that also run a parent app.",
  },
  {
    q: "Is a same-day absence alert SMS possible for schools?",
    a: "Yes — when attendance is marked in the school management system by the first period, an API trigger can send a same-day absence SMS to the registered parent number within minutes, rather than the parent finding out at pickup time or the next PTM. This is one of the most-requested automations from CBSE and state-board schools using Get Click Media's SMS API.",
  },
  {
    q: "Can schools send exam results and report cards by SMS?",
    a: "Schools typically send a results-ready SMS notification with a secure link to the report card rather than the full marksheet in the message body, since SMS has a 160-character-per-segment limit and results data needs to stay behind a parent login. The notification SMS itself is sent on the transactional route so it reaches every parent, including those on DND.",
  },
  {
    q: "How much does bulk SMS cost for a school with a few thousand students?",
    a: "Most schools fall into the mid-volume slab — roughly 10,000 to 1,00,000 SMS a month once fee reminders, absence alerts, and circulars are combined — which typically prices around ₹0.09 per SMS on Get Click Media's Growth plan. Actual cost depends on message mix (transactional vs promotional) and total monthly volume; see full bulk SMS pricing for exact slabs.",
  },
];

const RELATED_LINKS = [
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "Transactional SMS Service", href: "/transactional-sms-service" },
  { label: "OTP SMS Service Provider", href: "/otp-sms-service-provider" },
  { label: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
  { label: "Transactional SMS Pricing", href: "/transactional-sms-pricing" },
  { label: "RCS for Education", href: "/rcs-for-education" },
  { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
  { label: "Bulk SMS for Hospitals", href: "/bulk-sms-for-hospitals" },
];

export default function BulkSmsForSchoolsPage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Schools & Education"
      heroEyebrow="School & Education Bulk SMS"
      heroTitle="Bulk SMS for Schools and Educational Institutes"
      heroHighlight="Fee, Attendance & Exam Alerts India"
      heroDescription={
        <>
          Automate fee due reminders, same-day absence alerts, exam result notifications, PTM
          reminders, and transport updates with DLT-compliant bulk SMS built for Indian schools.{" "}
          <strong className="text-gray-900">
            Get Click Media connects bulk SMS to your school ERP so every parent — smartphone or
            not — gets time-critical alerts within minutes.
          </strong>
        </>
      }
      heroImage="/images/bulk-sms/bulk-sms-service-provider-india-hero.webp"
      heroImageAlt="Bulk SMS for Schools — fee, attendance and exam alert dashboard"
      heroTrustLine="TRAI DLT registered · School ERP integration · Hindi & regional language support · 99.9% uptime"
      stats={[
        { value: "99.9%", label: "SMS delivery uptime" },
        { value: "76%", label: "On-time fee collection rate (post-SMS)" },
        { value: "80%", label: "PTM attendance rate (post-SMS)" },
        { value: "₹0.09", label: "Starting price per SMS" },
      ]}
      aeoParagraph={
        <>
          Bulk SMS for schools automates fee due reminders, same-day student absence alerts, exam
          result notifications, PTM reminders, and transport delay alerts for parents.{" "}
          <strong className="text-gray-900">Get Click Media integrates bulk SMS with school ERP systems</strong>{" "}
          in India — improving on-time fee collection and cutting front-office call volume.
        </>
      }
      insightCallout={
        <>
          Every school runs on the same communication problem: not every parent opens the school
          app, but almost every parent reads an SMS. That's why absence alerts, fee reminders,
          and exam notifications still travel by SMS first — with the app or WhatsApp group used
          for richer, non-urgent updates.
        </>
      }
      whyIndustryTitle="Why Schools in India Need Bulk SMS"
      whyIndustryParagraphs={[
        <>
          A school's parent base spans every kind of phone and every level of app comfort — from
          a parent who checks the school app daily to one who has never opened it. SMS is the one
          channel that reaches all of them equally, without asking anyone to install anything or
          be online at the right moment.
        </>,
        <>
          Time-sensitivity compounds this: an absence alert that arrives the next day, or a fee
          reminder that arrives after the due date, has already failed at its job. SMS's near-
          instant delivery on the transactional route makes it the default channel for exactly
          the alerts where timing matters most — attendance, fees, transport, and exam results.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Schools running a same-day absence SMS trigger see
          parents respond — a callback or a written note — far faster than schools relying on a
          diary entry or next-day app notification, because the SMS lands while the school day is
          still in progress.
        </>
      }
      imageSections={[
        {
          eyebrow: "Parent Communication Hub",
          title: (
            <>
              One dashboard for attendance, fees <span className="text-[#2563eb]">and exam alerts</span>
            </>
          ),
          description:
            "Manage every parent touchpoint — absence alerts, fee reminders, exam notifications, and transport updates — from a single SMS dashboard connected to your school ERP.",
          bullets: [
            "Same-day absence alert triggers",
            "Fee due-date reminder sequences",
            "Exam result notification with secure link",
            "Real-time delivery and read-rate reports",
          ],
          image: "/images/bulk-sms/transactional-sms-india.webp",
          imageAlt: "Bulk SMS dashboard for schools — attendance, fee, and exam alerts",
        },
        {
          eyebrow: "Fee Collection Automation",
          title: (
            <>
              A 3-message sequence <span className="text-[#2563eb]">that improves on-time payment</span>
            </>
          ),
          description:
            "Every upcoming fee due date triggers a reminder 7 days before, 2 days before, and on the due date itself — with the amount and a payment link in every message, so parents never miss a deadline.",
          bullets: [
            "7-day and 2-day advance reminders",
            "Due-date-of reminder with payment link",
            "Automatic stop once payment is recorded",
            "Late-fee notice for overdue accounts",
          ],
          image: "/images/bulk-sms/what-is-transactional-sms-service.webp",
          imageAlt: "School fee reminder SMS sequence preview",
          imageSide: "left",
        },
      ]}
      useCasesTitle="Bulk SMS Use Cases for Schools — 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's Bulk SMS Capabilities for Schools"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to automate parent communication with bulk SMS?"
      bottomCtaDescription="Get Click Media provides DLT-compliant bulk SMS for schools with ERP integration and regional language support."
      schema={schema}
    />
  );
}
