import type { Metadata } from "next";
import {
  Calendar,
  FileText,
  Pill,
  HeartPulse,
  Activity,
  PhoneCall,
  Database,
  Settings,
  ShieldCheck,
  Languages,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Healthcare- Appointments, Reports & Patient Engagement India | Get Click Media",
  description:
    "WhatsApp Business API for healthcare enables Indian hospitals, clinics, and diagnostic labs to automate appointment reminders, lab report delivery, prescription reminders, and patient follow-ups. Reduce no-shows by 38%.",
  keywords:
    "WhatsApp API for Healthcare India, WhatsApp for Hospitals India, WhatsApp Appointment Booking, WhatsApp Patient Engagement, WhatsApp API Clinic India, Healthcare WhatsApp Automation India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-healthcare" },
  openGraph: {
    title: "WhatsApp API for Healthcare- Appointments, Reports & Patient Engagement India",
    description:
      "WhatsApp Business API for healthcare enables Indian hospitals, clinics, and diagnostic labs to automate appointment reminders, lab report delivery, prescription reminders, and patient follow-ups.",
    url: "https://getclickmedia.com/whatsapp-api-healthcare",
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
      name: "WhatsApp API for Healthcare India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-healthcare",
      description:
        "WhatsApp Business API for healthcare enables Indian hospitals, clinics, and diagnostic labs to automate appointment reminders, lab report delivery, prescription reminders, and patient follow-ups.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Healthcare India", item: "https://getclickmedia.com/whatsapp-api-healthcare" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does WhatsApp API reduce appointment no-shows for hospitals?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp appointment reminders achieve 90%+ open rates compared to 30-35% for SMS. The automated sequence- confirmation immediately after booking, reminder 48 hours before, and day-of reminder- gives patients multiple touchpoints to confirm or reschedule rather than simply not showing up. The reschedule button in the WhatsApp message makes rescheduling instant- increasing rescheduled slots that can be filled by other patients." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp send lab reports directly to patients?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp can send a secure notification that a report is ready with a link to a secure patient portal for report download. Sending the report directly as a WhatsApp attachment is possible for non-sensitive reports. For reports containing sensitive diagnostic information, Get Click Media recommends the notification-plus-secure-link approach for DPDP compliance." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API suitable for NABH-accredited hospitals?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. WhatsApp Business API is used by several NABH-accredited hospitals in India. The key requirements are: patient consent for WhatsApp communication, secure data handling per DPDP 2023, and audit trails for all patient communications. Get Click Media's healthcare implementation includes all three." },
        },
        {
          "@type": "Question",
          name: "What HMS systems does Get Click Media integrate with?",
          acceptedAnswer: { "@type": "Answer", text: "GCM integrates with Practo, eHospital, Meddbase, and custom hospital management systems via REST API webhooks or HL7 FHIR interfaces. Integration setup typically takes 5-7 business days after WhatsApp API onboarding is complete." },
        },
      ],
    },
  ],
};

// ── Healthcare Use Cases ──────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: Calendar,
    title: "Appointment Confirmation and Reminder Sequence",
    trigger: "Appointment booked in HMS (OPD, procedure, or diagnostic)",
    message: "Immediate confirmation + 48hr reminder + day-of reminder with doctor name, OPD number, floor, parking info, and directions link",
    result: "No-show rate -38%. OPD utilisation improved. Front desk call volume -45%.",
  },
  {
    icon: FileText,
    title: "Lab Report Ready Notification",
    trigger: "Lab report finalised in LIS system",
    message: "Your report is ready. Tap to view- [View Report] button. Reply CALLBACK for doctor consultation.",
    result: "Report collection time -60%. Patient satisfaction +22 points. Lab call volume -70%.",
  },
  {
    icon: Pill,
    title: "Prescription Refill Reminder",
    trigger: "Prescription issue date + 25 days (configurable per medication type)",
    message: "Hi [Name], your [Medication] prescription from Dr [Name] is due for refill. Tap to book: [Book Appointment] [Request Home Delivery]",
    result: "Prescription adherence +28%. Return visit rate +22%. Chronic disease management improved.",
  },
  {
    icon: HeartPulse,
    title: "Post-Discharge Follow-Up",
    trigger: "Patient discharge from HMS- trigger at 48 hours post-discharge",
    message: "Recovery check-in message with symptom questions, medication compliance check, and escalation path for complications",
    result: "Readmission rate -15%. Complication detection improved. Patient satisfaction +18 points.",
  },
  {
    icon: Activity,
    title: "Health Package and Preventive Care Promotion",
    trigger: "Patient anniversary (1 year since last visit) or age-based health screening trigger",
    message: "Annual health check-up reminder with package details, price, and [Book Now] button",
    result: "Health package booking +35%. Preventive care revenue increased. Patient lifetime value +2x.",
  },
  {
    icon: PhoneCall,
    title: "Telemedicine Consultation Booking",
    trigger: "Patient reaches out via WhatsApp or website click-to-WhatsApp",
    message: "Chatbot qualifies: symptom, department, preferred doctor, date + time. Books video consultation. Sends join link 15 min before appointment.",
    result: "Telemedicine booking conversion 3x vs phone. No-show for video consult -30%.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "Appointment no-show rate", before: "35-45%", after: "8-15%", source: "GCM India healthcare client data" },
  { metric: "Lab report collection time", before: "3-5 days average", after: "Same day notification + 94% collected within 24hr", source: "GCM client- diagnostic chain" },
  { metric: "Prescription refill compliance", before: "52% (chronic disease patients)", after: "71%", source: "India pharma adherence study" },
  { metric: "Patient satisfaction score (CSAT)", before: "68/100 average", after: "84/100 with WhatsApp engagement", source: "GCM post-deployment survey" },
  { metric: "OPD front desk call volume", before: "100% manual", after: "35% reduction with WhatsApp automation", source: "GCM India hospital client" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "HMS integration", desc: "Practo, eHospital, Meddbase, custom HMS via HL7 FHIR or REST API webhook" },
  { icon: Settings, title: "LIS integration", desc: "Lab Information System webhook- triggers report notification on report finalisation" },
  { icon: Calendar, title: "Appointment flow", desc: "Automated confirmation + 48hr + day-of reminder sequence with confirm/reschedule/cancel buttons" },
  { icon: ShieldCheck, title: "DPDP compliance", desc: "Patient data handled per India's Digital Personal Data Protection Act 2023- India-hosted infrastructure" },
  { icon: Languages, title: "Multilingual support", desc: "Hindi, Tamil, Telugu, Kannada, Marathi, Bengali- AI language detection in single conversation" },
  { icon: PhoneCall, title: "Telemedicine integration", desc: "Video consultation link delivery + waiting room notifications" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp API reduce appointment no-shows for hospitals?",
    a: "WhatsApp appointment reminders achieve 90%+ open rates compared to 30-35% for SMS. The automated sequence- confirmation immediately after booking, reminder 48 hours before, and day-of reminder- gives patients multiple touchpoints to confirm or reschedule rather than simply not showing up. The reschedule button in the WhatsApp message makes rescheduling instant- increasing rescheduled slots that can be filled by other patients.",
  },
  {
    q: "Can WhatsApp send lab reports directly to patients?",
    a: "WhatsApp can send a secure notification that a report is ready with a link to a secure patient portal for report download. Sending the report directly as a WhatsApp attachment is possible for non-sensitive reports. For reports containing sensitive diagnostic information, Get Click Media recommends the notification-plus-secure-link approach for DPDP compliance.",
  },
  {
    q: "Is WhatsApp API suitable for NABH-accredited hospitals?",
    a: "Yes. WhatsApp Business API is used by several NABH-accredited hospitals in India. The key requirements are: patient consent for WhatsApp communication, secure data handling per DPDP 2023, and audit trails for all patient communications. Get Click Media's healthcare implementation includes all three.",
  },
  {
    q: "What HMS systems does Get Click Media integrate with?",
    a: "GCM integrates with Practo, eHospital, Meddbase, and custom hospital management systems via REST API webhooks or HL7 FHIR interfaces. Integration setup typically takes 5-7 business days after WhatsApp API onboarding is complete.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
  { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
  { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
  { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIHealthcarePage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Healthcare"
      heroEyebrow="Healthcare WhatsApp API"
      heroTitle="WhatsApp Business API for Healthcare"
      heroHighlight="Appointments, Reports & Patient Engagement India"
      heroDescription={
        <>
          WhatsApp Business API for healthcare enables Indian hospitals, clinics, and diagnostic labs to
          automate appointment reminders, lab report delivery, prescription reminders, and patient
          follow-ups.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with HMS, LIS, and CRM systems used by Indian healthcare providers, reducing no-shows by up to 38% and improving patient satisfaction scores.</strong>
        </>
      }
      heroImage="/images/whatsapp/healthcare/whatsapp-api-healthcare.webp"
      heroImageAlt="WhatsApp API Healthcare dashboard- patient appointment reminders, lab report notifications, and prescription refill automation"
      heroTrustLine="Official Meta BSP · HMS & LIS integration · DPDP compliant · India-based support"
      stats={[
        { value: "38%", label: "Reduction in appointment no-shows" },
        { value: "4.2x", label: "Faster lab report delivery vs SMS" },
        { value: "92%", label: "Patient WhatsApp open rate for health alerts" },
        { value: "28%", label: "Increase in prescription refill rate" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for healthcare enables Indian hospitals, clinics, and diagnostic labs to
          automate appointment reminders, lab report delivery, prescription reminders, and patient
          follow-ups.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with HMS, LIS, and CRM systems</strong>,
          reducing no-shows by up to 38% and improving patient satisfaction scores.
        </>
      }
      insightCallout={
        <>
          The Indian healthcare sector loses an estimated <strong>₹1,200 crore annually</strong> to appointment
          no-shows. Phone call reminders are expensive, frequently ignored, and inefficient at scale.
          WhatsApp appointment reminders with confirm or reschedule buttons have consistently reduced no-show
          rates by <strong>30-40%</strong> across Indian hospital and clinic deployments.
        </>
      }
      whyIndustryTitle="Why Healthcare Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Indian hospitals and clinics manage thousands of patient interactions daily- appointment booking,
          reminders, lab results, discharge summaries, follow-up scheduling, and payment collection. These are
          handled by phone calls and SMS- expensive, low-response, and creating significant administrative
          overhead.
        </>,
        <>
          WhatsApp automation handles the majority of these touchpoints at a fraction of the cost with
          dramatically higher patient engagement. With <strong>92% patient open rates</strong> for health
          alerts and <strong>4.2x faster</strong> lab report delivery compared to SMS, WhatsApp is rapidly
          becoming the standard for patient communication in Indian healthcare.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> The Indian healthcare sector loses an estimated ₹1,200 crore
          annually to appointment no-shows. WhatsApp appointment reminders with confirm or reschedule
          buttons have consistently reduced no-show rates by 30-40% across Indian hospital and clinic
          deployments.
        </>
      }
      imageSections={[
        {
          eyebrow: "Patient Communication Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for healthcare providers</span>
            </>
          ),
          description:
            "Manage all patient communication from a single dashboard- appointment reminders, lab reports, prescription refills, and post-discharge follow-ups- with full integration to your existing hospital management system.",
          bullets: [
            "Automated appointment confirmation and reminder sequences",
            "Secure lab report delivery with patient portal links",
            "Multilingual support- Hindi, Tamil, Telugu, Kannada, Marathi, Bengali",
            "DPDP 2023 compliant with India-hosted data infrastructure",
          ],
          image: "/images/whatsapp/healthcare/whatsapp-api-platform-healthcare.png",
          imageAlt: "WhatsApp API Healthcare dashboard- patient appointment reminders, lab report notifications, and prescription refill automation",
        },
        {
          eyebrow: "Interactive Patient Messaging",
          title: (
            <>
              WhatsApp messages <span className="text-[#2563eb]">that patients actually respond to</span>
            </>
          ),
          description:
            "Interactive WhatsApp templates with confirm, reschedule, and cancel buttons- patients can manage appointments, access lab reports, and request prescription refills directly from the message, without calling the front desk.",
          bullets: [
            "One-tap appointment confirmation and rescheduling",
            "Secure lab report access with view and download buttons",
            "Prescription refill requests with home delivery options",
            "Post-discharge follow-ups with symptom reporting",
          ],
          image: "/images/whatsapp/healthcare/whatsapp-healthcare-message-preview.png",
          imageAlt: "WhatsApp healthcare message preview- appointment reminder with confirm, reschedule buttons and lab report notification",
          imageSide: "left",
        },
        {
          eyebrow: "Seamless Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">your existing healthcare systems</span>
            </>
          ),
          description:
            "Get Click Media integrates with your Hospital Management System (HMS), Lab Information System (LIS), and patient CRM- enabling automated patient communication without disrupting existing clinical workflows. Integration setup typically takes 5-7 business days after WhatsApp API onboarding is complete.",
          bullets: ["Practo", "eHospital", "Meddbase", "HMS via HL7 FHIR", "LIS webhook", "Custom REST API"],
          image: "/images/whatsapp/healthcare/whatsapp-api-healthcare-integration-architecture.png",
          imageAlt: "WhatsApp API healthcare integration architecture- HMS, LIS, and CRM integration with patient communication",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for Healthcare- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for Healthcare"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform patient communication with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for healthcare with HMS integration, automated patient communication, and full DPDP compliance. Our team responds within 2 hours on business days."
      schema={schema}
    />
  );
}
