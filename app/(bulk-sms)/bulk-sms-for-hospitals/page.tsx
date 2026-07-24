import type { Metadata } from "next";
import {
  HeartPulse,
  CalendarClock,
  FileText,
  Pill,
  ClipboardList,
  Bell,
  Database,
  ShieldCheck,
  Globe,
  Clock,
  Users,
  BadgeCheck,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

export const metadata: Metadata = {
  title: "Bulk SMS for Hospitals- Appointment & Lab Report Alerts India | Get Click Media",
  description:
    "Bulk SMS for hospitals and clinics in India automates appointment reminders, lab report ready alerts, OPD token updates, medicine refill reminders, and health camp notifications- DLT compliant.",
  keywords:
    "bulk sms for hospitals, sms for hospitals india, appointment reminder sms, lab report sms alert, hospital sms service, patient sms notification system",
  alternates: { canonical: "https://getclickmedia.com/bulk-sms-for-hospitals" },
  openGraph: {
    title: "Bulk SMS for Hospitals- Appointment & Lab Report Alerts India",
    description:
      "Automate appointment reminders, lab report alerts, OPD token updates, and medicine refill reminders with DLT-compliant bulk SMS for hospitals.",
    url: "https://getclickmedia.com/bulk-sms-for-hospitals",
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
      name: "Bulk SMS for Hospitals India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/bulk-sms-for-hospitals",
      description:
        "Bulk SMS for hospitals and clinics automates appointment reminders, lab report ready alerts, OPD token updates, medicine refill reminders, and health camp notifications with DLT-compliant delivery.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Bulk SMS Services", item: "https://getclickmedia.com/bulk-sms-service-provider-india" },
        { "@type": "ListItem", position: 3, name: "Bulk SMS for Hospitals", item: "https://getclickmedia.com/bulk-sms-for-hospitals" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does SMS reduce OPD appointment no-shows for hospitals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A reminder sent the day before and again a few hours before the scheduled slot gives patients enough notice to reschedule if they can't make it, instead of simply not showing up. Hospitals running this two-message sequence see meaningfully fewer no-shows than relying on the appointment being noted only at booking time, which frees up doctor slots for other patients.",
          },
        },
        {
          "@type": "Question",
          name: "Is it safe to send lab report alerts by SMS given patient privacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hospitals should send a results-ready notification rather than clinical values in the SMS body- the message tells the patient their report is available and links to a secure, authenticated patient portal to view it. This keeps sensitive health data off the SMS itself while still giving patients an immediate, universal notification that doesn't depend on them opening an app.",
          },
        },
        {
          "@type": "Question",
          name: "Can hospitals send medicine refill reminders automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes- for chronic-condition patients on a known prescription cycle, an SMS reminder timed to when their current supply is expected to run out prompts a pharmacy refill or a follow-up consultation before they lapse on medication. This is commonly used by diabetes, cardiac, and dialysis care programs to support medication adherence.",
          },
        },
        {
          "@type": "Question",
          name: "Do hospital SMS alerts need TRAI DLT registration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes- appointment reminders, lab alerts, and refill notifications are transactional healthcare communication and must be sent through a DLT-registered entity and template, same as any other business SMS in India. Get Click Media handles entity registration, sender ID approval, and template registration so hospital communication is compliant from day one.",
          },
        },
      ],
    },
  ],
};

const USE_CASES = [
  {
    icon: CalendarClock,
    title: "Appointment Reminder Sequence",
    trigger: "OPD or specialist appointment booked in HMS",
    message: "Confirmation at booking, reminder the day before, and a final nudge a few hours before the slot with doctor and room number.",
    result: "Fewer missed appointments. More slots reused for walk-in or waitlisted patients.",
  },
  {
    icon: FileText,
    title: "Lab Report Ready Alert",
    trigger: "Diagnostic report uploaded to the lab information system",
    message: "Results-ready SMS with a secure patient-portal link- no clinical values sent in the message body.",
    result: "Faster patient awareness without waiting for a phone call from the lab desk.",
  },
  {
    icon: ClipboardList,
    title: "OPD Token & Queue Update",
    trigger: "Patient checks in; token number issued or queue position changes",
    message: "Token number and estimated wait time, with an update if the queue shifts significantly.",
    result: "Reduced crowding at the OPD counter as patients time their arrival better.",
  },
  {
    icon: Pill,
    title: "Medicine Refill Reminder",
    trigger: "Chronic-condition patient's prescription cycle nearing renewal date",
    message: "Refill due reminder with pharmacy contact or online refill link, timed to the prescription cycle.",
    result: "Better medication adherence for chronic-care patients between visits.",
  },
  {
    icon: HeartPulse,
    title: "Health Camp & Vaccination Drive Alert",
    trigger: "Upcoming health camp, vaccination drive, or seasonal advisory",
    message: "Camp date, location, and registration link sent to the opted-in patient database.",
    result: "Higher walk-in registration for preventive-care and outreach camps.",
  },
  {
    icon: Users,
    title: "Post-Discharge Follow-up",
    trigger: "Patient discharged from IPD",
    message: "Follow-up appointment reminder and a discharge-instructions recap link a few days after discharge.",
    result: "Improved follow-up visit compliance and early flagging of post-discharge issues.",
  },
];

const PERFORMANCE_DATA = [
  { metric: "OPD appointment no-show rate", before: "27%", after: "14% (2-message SMS sequence)", source: "GCM hospital client data" },
  { metric: "Patient awareness of lab results", before: "Next-visit or call-based", after: "Within minutes (SMS)", source: "GCM diagnostics partner data" },
  { metric: "OPD counter queue-related calls", before: "Baseline", after: "26% reduction", source: "GCM client operations data" },
  { metric: "Chronic-care refill adherence", before: "64%", after: "81% (SMS refill reminders)", source: "GCM chronic-care program data" },
  { metric: "SMS delivery rate to patient numbers", before: "—", after: "99.9% (transactional route)", source: "GCM platform delivery reports" },
];

const CAPABILITIES = [
  { icon: Database, title: "HMS & LIS integration", desc: "API and webhook integration with hospital management and lab information systems for appointments, reports, and discharge triggers" },
  { icon: ShieldCheck, title: "DLT-registered templates", desc: "Appointment, report, and refill templates pre-approved on TRAI DLT under your hospital's registered entity" },
  { icon: Globe, title: "PAN-India delivery network", desc: "Multi-operator routing for reliable delivery to patients across metro hospitals and district-level clinics" },
  { icon: Clock, title: "Real-time triggered alerts", desc: "Instant SMS on report upload, discharge, or queue change- no batch delay between clinical event and patient notification" },
  { icon: Bell, title: "Two-way opt-out handling", desc: "Automatic STOP/unsubscribe handling for camp and outreach promotional SMS, kept separate from clinical transactional alerts" },
  { icon: BadgeCheck, title: "Sender ID approval support", desc: "GCM manages your hospital's approved sender ID so patients instantly recognise who the SMS is from" },
];

const FAQS = [
  {
    q: "How does SMS reduce OPD appointment no-shows for hospitals?",
    a: "A reminder sent the day before and again a few hours before the scheduled slot gives patients enough notice to reschedule if they can't make it, instead of simply not showing up. Hospitals running this two-message sequence see meaningfully fewer no-shows than relying on the appointment being noted only at booking time, which frees up doctor slots for other patients.",
  },
  {
    q: "Is it safe to send lab report alerts by SMS given patient privacy?",
    a: "Hospitals should send a results-ready notification rather than clinical values in the SMS body- the message tells the patient their report is available and links to a secure, authenticated patient portal to view it. This keeps sensitive health data off the SMS itself while still giving patients an immediate, universal notification that doesn't depend on them opening an app.",
  },
  {
    q: "Can hospitals send medicine refill reminders automatically?",
    a: "Yes- for chronic-condition patients on a known prescription cycle, an SMS reminder timed to when their current supply is expected to run out prompts a pharmacy refill or a follow-up consultation before they lapse on medication. This is commonly used by diabetes, cardiac, and dialysis care programs to support medication adherence.",
  },
  {
    q: "Do hospital SMS alerts need TRAI DLT registration?",
    a: "Yes- appointment reminders, lab alerts, and refill notifications are transactional healthcare communication and must be sent through a DLT-registered entity and template, same as any other business SMS in India. Get Click Media handles entity registration, sender ID approval, and template registration so hospital communication is compliant from day one.",
  },
];

const RELATED_LINKS = [
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "Transactional SMS Service", href: "/transactional-sms-service" },
  { label: "OTP SMS Service Provider", href: "/otp-sms-service-provider" },
  { label: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
  { label: "Transactional SMS Pricing", href: "/transactional-sms-pricing" },
  { label: "RCS for Banking", href: "/rcs-for-banking" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "Bulk SMS for Schools", href: "/bulk-sms-for-schools" },
];

export default function BulkSmsForHospitalsPage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Hospitals & Healthcare"
      heroEyebrow="Hospital & Healthcare Bulk SMS"
      heroTitle="Bulk SMS for Hospitals and Healthcare Providers"
      heroHighlight="Appointment & Lab Report Alerts India"
      heroDescription={
        <>
          Automate appointment reminders, lab report ready alerts, OPD token updates, and medicine
          refill reminders with DLT-compliant bulk SMS built for Indian hospitals and clinics.{" "}
          <strong className="text-gray-900">
            Get Click Media connects bulk SMS to your HMS and lab systems so every patient gets a
            timely alert, without a call or an app in the way.
          </strong>
        </>
      }
      heroImage="/images/bulk-sms/transactional-sms-india.webp"
      heroImageAlt="Bulk SMS for Hospitals- appointment and lab report alert dashboard"
      heroTrustLine="TRAI DLT registered · HMS & LIS integration · Secure report-link delivery · 99.9% uptime"
      stats={[
        { value: "99.9%", label: "SMS delivery uptime" },
        { value: "14%", label: "Average OPD no-show rate (post-SMS)" },
        { value: "81%", label: "Chronic-care refill adherence rate" },
        { value: "₹0.09", label: "Starting price per SMS" },
      ]}
      aeoParagraph={
        <>
          Bulk SMS for hospitals automates appointment reminders, lab report ready alerts, OPD
          token updates, medicine refill reminders, and health camp notifications for patients.{" "}
          <strong className="text-gray-900">Get Click Media integrates bulk SMS with hospital management systems</strong>{" "}
          in India- reducing OPD no-shows and improving chronic-care medication adherence.
        </>
      }
      insightCallout={
        <>
          Healthcare communication has one non-negotiable requirement: it has to reach the
          patient, reliably, without assuming they have data, an app, or time to answer a call.
          SMS meets that bar for appointment reminders, report alerts, and refill nudges- which
          is why it remains the default channel even at hospitals running a full patient app.
        </>
      }
      whyIndustryTitle="Why Hospitals in India Need Bulk SMS"
      whyIndustryParagraphs={[
        <>
          A hospital's patient base includes people who are unwell, anxious, or simply not
          checking an app regularly- appointment day is not the moment to expect proactive
          engagement. SMS removes that burden: the reminder arrives on its own, on any phone,
          without the patient needing to open anything.
        </>,
        <>
          Timing is clinically meaningful too. A lab report alert that's delayed pushes back
          diagnosis and treatment; a missed refill reminder can mean a chronic-care patient
          lapses on medication. SMS's near-instant delivery on the transactional route keeps
          these alerts arriving when they still matter.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Hospitals that pair a day-before and hours-before SMS
          reminder consistently see fewer OPD no-shows than single-reminder or call-only
          workflows- because the second reminder catches patients who forgot the first one, at a
          point where they can still reschedule instead of skipping the visit.
        </>
      }
      imageSections={[
        {
          eyebrow: "Patient Communication Hub",
          title: (
            <>
              One dashboard for appointments, reports <span className="text-[#2563eb]">and refill reminders</span>
            </>
          ),
          description:
            "Manage every patient touchpoint- appointment reminders, lab report alerts, OPD queue updates, and refill nudges- from a single SMS dashboard connected to your hospital management system.",
          bullets: [
            "Triggered SMS from HMS appointment changes",
            "Report-ready alerts with secure portal link",
            "Chronic-care refill reminder scheduling",
            "Real-time delivery and read-rate reports",
          ],
          image: "/images/bulk-sms/transactional-sms-service-provider.webp",
          imageAlt: "Bulk SMS dashboard for hospitals- appointment, report, and refill alerts",
        },
        {
          eyebrow: "Appointment No-Show Reduction",
          title: (
            <>
              A 2-message sequence <span className="text-[#2563eb]">that keeps OPD slots full</span>
            </>
          ),
          description:
            "Every booked appointment triggers a day-before reminder and an hours-before nudge with doctor name, room number, and a reschedule link- cutting no-shows without adding staff workload.",
          bullets: [
            "Day-before reminder with appointment details",
            "Hours-before final nudge",
            "One-tap reschedule link",
            "Automatic waitlist alert on cancellation",
          ],
          image: "/images/bulk-sms/small_Covering_All_Your_SMS_Needs_Be_It_Promotional_Or_Transactional_85a655ff7b.webp",
          imageAlt: "Hospital appointment reminder SMS sequence preview",
          imageSide: "left",
        },
      ]}
      useCasesTitle="Bulk SMS Use Cases for Hospitals- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's Bulk SMS Capabilities for Hospitals"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to reduce no-shows with bulk SMS for your hospital?"
      bottomCtaDescription="Get Click Media provides DLT-compliant bulk SMS for hospitals and clinics with HMS integration and secure report-link delivery."
      schema={schema}
    />
  );
}
