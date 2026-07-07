import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ShieldCheck,
  Users,
  Clock,
  Headphones,
  Building2,
  ChevronDown,
  AlertTriangle,
  Calendar,
  FileText,
  Pill,
  HeartPulse,
  Stethoscope,
  PhoneCall,
  BarChart3,
  Activity,
  MessageSquare,
  Settings,
  Database,
  Globe,
  Languages,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Healthcare — Appointments, Reports & Patient Engagement India | Get Click Media",
  description:
    "WhatsApp Business API for healthcare enables Indian hospitals, clinics, and diagnostic labs to automate appointment reminders, lab report delivery, prescription reminders, and patient follow-ups. Reduce no-shows by 38%.",
  keywords:
    "WhatsApp API for Healthcare India, WhatsApp for Hospitals India, WhatsApp Appointment Booking, WhatsApp Patient Engagement, WhatsApp API Clinic India, Healthcare WhatsApp Automation India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-healthcare" },
  openGraph: {
    title: "WhatsApp API for Healthcare — Appointments, Reports & Patient Engagement India",
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
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp appointment reminders achieve 90%+ open rates compared to 30-35% for SMS. The automated sequence — confirmation immediately after booking, reminder 48 hours before, and day-of reminder — gives patients multiple touchpoints to confirm or reschedule rather than simply not showing up. The reschedule button in the WhatsApp message makes rescheduling instant — increasing rescheduled slots that can be filled by other patients." },
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
    message: "Your report is ready. Tap to view — [View Report] button. Reply CALLBACK for doctor consultation.",
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
    trigger: "Patient discharge from HMS — trigger at 48 hours post-discharge",
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
  { metric: "Lab report collection time", before: "3-5 days average", after: "Same day notification + 94% collected within 24hr", source: "GCM client — diagnostic chain" },
  { metric: "Prescription refill compliance", before: "52% (chronic disease patients)", after: "71%", source: "India pharma adherence study" },
  { metric: "Patient satisfaction score (CSAT)", before: "68/100 average", after: "84/100 with WhatsApp engagement", source: "GCM post-deployment survey" },
  { metric: "OPD front desk call volume", before: "100% manual", after: "35% reduction with WhatsApp automation", source: "GCM India hospital client" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "HMS integration", desc: "Practo, eHospital, Meddbase, custom HMS via HL7 FHIR or REST API webhook" },
  { icon: Settings, title: "LIS integration", desc: "Lab Information System webhook — triggers report notification on report finalisation" },
  { icon: Calendar, title: "Appointment flow", desc: "Automated confirmation + 48hr + day-of reminder sequence with confirm/reschedule/cancel buttons" },
  { icon: ShieldCheck, title: "DPDP compliance", desc: "Patient data handled per India's Digital Personal Data Protection Act 2023 — India-hosted infrastructure" },
  { icon: Languages, title: "Multilingual support", desc: "Hindi, Tamil, Telugu, Kannada, Marathi, Bengali — AI language detection in single conversation" },
  { icon: PhoneCall, title: "Telemedicine integration", desc: "Video consultation link delivery + waiting room notifications" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp API reduce appointment no-shows for hospitals?",
    a: "WhatsApp appointment reminders achieve 90%+ open rates compared to 30-35% for SMS. The automated sequence — confirmation immediately after booking, reminder 48 hours before, and day-of reminder — gives patients multiple touchpoints to confirm or reschedule rather than simply not showing up. The reschedule button in the WhatsApp message makes rescheduling instant — increasing rescheduled slots that can be filled by other patients.",
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

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIHealthcarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── BREADCRUMB ─────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/whatsapp-business-api" className="hover:text-[#2563eb] transition-colors">WhatsApp Business API</Link></li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">Healthcare</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Healthcare WhatsApp API
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Business API for Healthcare<br />
            <span className="text-[#38bdf8]">Appointments, Reports &amp; Patient Engagement India</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            WhatsApp Business API for healthcare enables Indian hospitals, clinics, and diagnostic labs to
            automate appointment reminders, lab report delivery, prescription reminders, and patient follow-ups.
            Get Click Media integrates WhatsApp with HMS, LIS, and CRM systems used by Indian healthcare providers,
            reducing no-shows by up to 38% and improving patient satisfaction scores.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/whatsapp-api-pricing-india"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              View Pricing
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Start WhatsApp Onboarding
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Business API for healthcare enables Indian hospitals, clinics, and diagnostic labs to
              automate appointment reminders, lab report delivery, prescription reminders, and patient follow-ups.
              <strong className="text-gray-900"> Get Click Media integrates WhatsApp with HMS, LIS, and CRM systems</strong>,
              reducing no-shows by up to 38% and improving patient satisfaction scores.
            </p>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
            <p className="text-sm text-red-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-red-500" />
              The Indian healthcare sector loses an estimated <strong>₹1,200 crore annually</strong> to appointment
              no-shows. Phone call reminders are expensive, frequently ignored, and inefficient at scale.
              WhatsApp appointment reminders with confirm or reschedule buttons have consistently reduced no-show
              rates by 30-40% across Indian hospital and clinic deployments.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Get Click Media&apos;s WhatsApp API for healthcare integrates with leading Indian HMS platforms including
            Practo, eHospital, Meddbase, and custom hospital management systems — enabling automated patient
            communication without disrupting existing clinical workflows.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "38%", label: "Reduction in appointment no-shows" },
            { value: "4.2x", label: "Faster lab report delivery vs SMS" },
            { value: "92%", label: "Patient WhatsApp open rate for health alerts" },
            { value: "28%", label: "Increase in prescription refill rate" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE SECTION: Healthcare Dashboard ────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Patient Communication Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">for healthcare providers</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all patient communication from a single dashboard — appointment reminders, lab reports,
                prescription refills, and post-discharge follow-ups — with full integration to your existing
                hospital management system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Automated appointment confirmation and reminder sequences</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Secure lab report delivery with patient portal links</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Multilingual support — Hindi, Tamil, Telugu, Kannada, Marathi, Bengali</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>DPDP 2023 compliant with India-hosted data infrastructure</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/healthcare-dashboard.webp"
                  alt="WhatsApp API Healthcare dashboard — patient appointment reminders, lab report notifications, and prescription refill automation"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY HEALTHCARE NEEDS WHATSAPP ──────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="why-healthcare">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Healthcare Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why Healthcare Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Indian hospitals and clinics manage thousands of patient interactions daily — appointment booking,
              reminders, lab results, discharge summaries, follow-up scheduling, and payment collection. These are
              handled by phone calls and SMS — expensive, low-response, and creating significant administrative
              overhead.
            </p>
            <p>
              WhatsApp automation handles the majority of these touchpoints at a fraction of the cost with
              dramatically higher patient engagement. With <strong>92% patient open rates</strong> for health
              alerts and <strong>4.2x faster</strong> lab report delivery compared to SMS, WhatsApp is rapidly
              becoming the standard for patient communication in Indian healthcare.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> The Indian healthcare sector loses an estimated ₹1,200 crore
                annually to appointment no-shows. WhatsApp appointment reminders with confirm or reschedule
                buttons have consistently reduced no-show rates by 30-40% across Indian hospital and clinic
                deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API Use Cases for Healthcare — 6 Automations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <uc.icon className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-(family-name:--font-syne)">{uc.title}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-700">Trigger:</span> <span className="text-gray-500">{uc.trigger}</span></p>
                  <p><span className="font-semibold text-gray-700">WhatsApp message sent:</span> <span className="text-gray-500">{uc.message}</span></p>
                  <p><span className="font-semibold text-gray-700">Business result:</span> <span className="text-green-600">{uc.result}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: WhatsApp Message Preview ────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Interactive Patient Messaging
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp messages <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">that patients actually respond to</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Interactive WhatsApp templates with confirm, reschedule, and cancel buttons — patients can manage
                appointments, access lab reports, and request prescription refills directly from the message,
                without calling the front desk.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>One-tap appointment confirmation and rescheduling</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Secure lab report access with view and download buttons</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Prescription refill requests with home delivery options</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Post-discharge follow-ups with symptom reporting</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 max-w-sm mx-auto">
                <Image
                  src="/images/whatsapp/healthcare-message-preview.webp"
                  alt="WhatsApp healthcare message preview — appointment reminder with confirm, reschedule buttons and lab report notification"
                  width={400}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE BENCHMARKS ──────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="performance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Performance Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Real results from Indian healthcare providers
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold text-red-400">Before WhatsApp API</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">After WhatsApp API</th>
                  <th className="text-left px-4 py-4 font-semibold text-white/60">Source</th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.metric}</td>
                    <td className="px-4 py-3.5 text-center text-red-400">{row.before}</td>
                    <td className="px-4 py-3.5 text-center text-[#38bdf8]">{row.after}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: Integration Architecture ────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/healthcare-integration.webp"
                  alt="WhatsApp API healthcare integration architecture — HMS, LIS, and CRM integration with patient communication"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
                Seamless Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Connect WhatsApp with <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">your existing healthcare systems</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media integrates with your Hospital Management System (HMS), Lab Information System (LIS),
                and patient CRM — enabling automated patient communication without disrupting existing clinical
                workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Practo", "eHospital", "Meddbase", "HMS via HL7 FHIR", "LIS webhook", "Custom REST API"].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Integration setup typically takes 5-7 business days after WhatsApp API onboarding is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Get Click Media&apos;s WhatsApp API Capabilities for Healthcare
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map(c => (
              <div key={c.title} className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-[#38bdf8]" />
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">{c.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API for Healthcare
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-gray-50 border border-gray-100 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
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
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Ready to transform patient communication with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for healthcare with HMS integration, automated patient
                communication, and full DPDP compliance. Our team responds within 2 hours on business days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Start Onboarding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}