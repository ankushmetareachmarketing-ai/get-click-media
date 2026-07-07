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
  GraduationCap,
  BookOpen,
  Calendar,
  FileText,
  Bell,
  TrendingUp,
  MessageSquare,
  Settings,
  Database,
  Globe,
  Languages,
  CreditCard,
  Award,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Education — Admissions, Fee Reminders & Student Engagement India | Get Click Media",
  description:
    "WhatsApp Business API for education enables Indian schools, coaching institutes, and EdTech platforms to automate admission enquiry handling, fee payment reminders, exam schedule notifications, course updates, and parent communication.",
  keywords:
    "WhatsApp API for Education India, WhatsApp for EdTech India, WhatsApp Admission Automation, WhatsApp Coaching Institute India, WhatsApp API School India, Education WhatsApp Chatbot India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-education" },
  openGraph: {
    title: "WhatsApp API for Education — Admissions, Fee Reminders & Student Engagement India",
    description:
      "WhatsApp Business API for education enables Indian schools, coaching institutes, and EdTech platforms to automate admission enquiry handling, fee payment reminders, exam schedule notifications, and parent communication.",
    url: "https://getclickmedia.com/whatsapp-api-education",
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
      name: "WhatsApp API for Education India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-education",
      description:
        "WhatsApp Business API for education enables Indian schools, coaching institutes, and EdTech platforms to automate admission enquiry handling, fee payment reminders, exam schedule notifications, course updates, and parent communication.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Education India", item: "https://getclickmedia.com/whatsapp-api-education" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does WhatsApp API improve admissions for coaching institutes?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp chatbot responds to admission enquiries instantly — 24/7 including weekends and late evenings when students and parents are most active. The chatbot qualifies the lead (course, class, location, budget), shares the appropriate course details PDF, and books a counselling appointment. This reduces the time between enquiry and counselling contact from hours to minutes — the single most important factor in admission conversion rates." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp be used for fee collection reminders in India?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. WhatsApp fee reminders with embedded payment links (Razorpay, PayU, CCAvenue) have consistently outperformed email and SMS for on-time fee collection in Indian schools and coaching institutes. The sequence of reminders at Day -7, -3, due date, and +1 reduces manual collection calls and improves cash flow predictability." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API suitable for communicating with parents of school students?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — and parent WhatsApp communication is one of the highest-engagement use cases in Indian education. Parents open school WhatsApp notifications at 85%+ rates. Attendance confirmation, homework notification, and school circular distribution via WhatsApp is replacing paper circulars and email communication across Indian schools." },
        },
        {
          "@type": "Question",
          name: "Does Get Click Media integrate WhatsApp with LeadSquared for admissions?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. GCM's LeadSquared integration is bi-directional — leads from WhatsApp chatbot are automatically created in LeadSquared with full qualification data. Counsellor follow-up actions in LeadSquared trigger WhatsApp messages. Admission stage changes in LeadSquared trigger appropriate WhatsApp templates." },
        },
      ],
    },
  ],
};

// ── Education Use Cases ──────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: MessageSquare,
    title: "Admission Enquiry Qualification and Follow-Up",
    trigger: "New lead from website form, CTWA ad, or missed call",
    message: "Chatbot collects: course interest, current class/qualification, city, budget. Sends course details PDF. Books counselling slot. Routes hot leads to admission counsellor.",
    result: "Enquiry-to-counselling conversion 3x. Counsellor time on cold leads -60%.",
  },
  {
    icon: CreditCard,
    title: "Fee Payment Reminder Sequence",
    trigger: "Fee due date approaching — Day -7, -3, 0, +1",
    message: "Soft reminder with amount + due date + [Pay Now] button linked to payment gateway",
    result: "On-time fee payment +42%. Manual fee collection calls -55%. Default rate -30%.",
  },
  {
    icon: Calendar,
    title: "Exam Schedule and Admit Card Notification",
    trigger: "Exam schedule published in ERP or LMS",
    message: "Exam timetable with dates, timings, centre address, and [Download Admit Card] button",
    result: "Exam attendance +12%. Student satisfaction +25 points. Parent anxiety calls -40%.",
  },
  {
    icon: TrendingUp,
    title: "Course Progress and Assignment Nudge",
    trigger: "Student inactive for 72 hours in LMS",
    message: "Personalised nudge: pending module name, completion percentage, and [Continue Learning] button",
    result: "Course completion rate +45%. Dropout rate -35%. LMS daily active users +28%.",
  },
  {
    icon: Award,
    title: "Result and Report Card Delivery",
    trigger: "Results published in ERP system",
    message: "Result notification with marks summary. Detailed report card PDF link. Parent counselling booking for below-average performers.",
    result: "Parent engagement +60%. Below-average student support intervention rate +3x.",
  },
  {
    icon: Bell,
    title: "Parent Daily Communication — School Updates",
    trigger: "Daily schedule trigger — morning attendance, afternoon updates, dismissal",
    message: "Attendance confirmation, homework, circular notifications, event reminders via structured daily WhatsApp message",
    result: "Parent satisfaction +30 points. Parent inquiry calls to school -50%. Communication compliance improved.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "Admission enquiry response time", before: "4-8 hours (manual)", after: "Under 30 seconds (WhatsApp chatbot)", source: "GCM education client data" },
  { metric: "Enquiry-to-enrolment conversion", before: "8-12%", after: "22-28%", source: "GCM coaching institute clients India" },
  { metric: "Fee payment on-time rate", before: "55%", after: "78%", source: "GCM school client post-deployment" },
  { metric: "Course completion (EdTech)", before: "34%", after: "58%", source: "GCM EdTech platform client" },
  { metric: "Parent satisfaction (NPS)", before: "42", after: "67", source: "GCM school client survey" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "LeadSquared integration", desc: "Bi-directional CRM sync — admission leads, chatbot qualification data, counsellor assignment" },
  { icon: Settings, title: "LMS integration", desc: "Moodle, CampusCare, Extramarks, custom LMS — course progress triggers, completion nudges" },
  { icon: CreditCard, title: "Fee management integration", desc: "ERP webhook — fee due date triggers, payment link generation (Razorpay, PayU)" },
  { icon: Languages, title: "Multilingual support", desc: "Hindi, English, Tamil, Telugu, Kannada for regional coaching institutes" },
  { icon: MessageSquare, title: "Parent communication portal", desc: "Dedicated WhatsApp number for parent queries with chatbot + teacher escalation" },
  { icon: ShieldCheck, title: "DPDP compliance", desc: "Student data (minors) handled per DPDP 2023 enhanced protections for children's data" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp API improve admissions for coaching institutes?",
    a: "WhatsApp chatbot responds to admission enquiries instantly — 24/7 including weekends and late evenings when students and parents are most active. The chatbot qualifies the lead (course, class, location, budget), shares the appropriate course details PDF, and books a counselling appointment. This reduces the time between enquiry and counselling contact from hours to minutes — the single most important factor in admission conversion rates.",
  },
  {
    q: "Can WhatsApp be used for fee collection reminders in India?",
    a: "Yes. WhatsApp fee reminders with embedded payment links (Razorpay, PayU, CCAvenue) have consistently outperformed email and SMS for on-time fee collection in Indian schools and coaching institutes. The sequence of reminders at Day -7, -3, due date, and +1 reduces manual collection calls and improves cash flow predictability.",
  },
  {
    q: "Is WhatsApp API suitable for communicating with parents of school students?",
    a: "Yes — and parent WhatsApp communication is one of the highest-engagement use cases in Indian education. Parents open school WhatsApp notifications at 85%+ rates. Attendance confirmation, homework notification, and school circular distribution via WhatsApp is replacing paper circulars and email communication across Indian schools.",
  },
  {
    q: "Does Get Click Media integrate WhatsApp with LeadSquared for admissions?",
    a: "Yes. GCM's LeadSquared integration is bi-directional — leads from WhatsApp chatbot are automatically created in LeadSquared with full qualification data. Counsellor follow-up actions in LeadSquared trigger WhatsApp messages. Admission stage changes in LeadSquared trigger appropriate WhatsApp templates.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIEducationPage() {
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
          <li className="text-[#2563eb] font-medium">Education</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Education WhatsApp API
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Business API for Education<br />
            <span className="text-[#38bdf8]">Admissions, Fee Reminders &amp; Student Engagement India</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            WhatsApp Business API for education enables Indian schools, coaching institutes, and EdTech platforms
            to automate admission enquiry handling, fee payment reminders, exam schedule notifications, course
            updates, and parent communication. Get Click Media integrates WhatsApp with LeadSquared, CampusCare,
            and custom LMS platforms — reducing manual admission effort by 60% and improving fee collection rates.
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
              WhatsApp Business API for education enables Indian schools, coaching institutes, and EdTech platforms
              to automate admission enquiry handling, fee payment reminders, exam schedule notifications, course
              updates, and parent communication.
              <strong className="text-gray-900"> Get Click Media integrates WhatsApp with LeadSquared, CampusCare,</strong>
              and custom LMS platforms — reducing manual admission effort by 60% and improving fee collection rates.
            </p>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-blue-500" />
              India's education sector handles millions of admission enquiries, fee transactions, and daily parent
              communications across schools, colleges, and coaching institutes. Traditional communication through
              phone calls and SMS is inefficient, expensive, and fails to capture the attention of India's
              WhatsApp-first generation of students and parents.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Get Click Media's WhatsApp API for education integrates with leading Indian education CRMs including
            LeadSquared, CampusCare, and Extramarks — enabling automated student lifecycle communication from
            first enquiry to alumni engagement.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "3x", label: "Higher admission enquiry-to-enrolment conversion" },
            { value: "45%", label: "Improvement in course completion rates" },
            { value: "62%", label: "Reduction in fee payment delay with WA reminders" },
            { value: "85%", label: "Parent WhatsApp open rate for school notifications" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE SECTION: Education Dashboard ─────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Student Communication Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">for education providers</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all student and parent communication from a single dashboard — admission enquiry handling,
                fee reminders, exam notifications, course progress tracking, and daily school updates — with full
                integration to your existing CRM or LMS.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Instant admission enquiry qualification with chatbot</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Automated fee reminder sequences with payment links</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Exam schedule and admit card delivery via WhatsApp</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Parent daily communication — attendance, homework, circulars</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/education-dashboard.webp"
                  alt="WhatsApp API Education dashboard — admission enquiries, fee reminders, exam notifications, and parent communication"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EDUCATION NEEDS WHATSAPP ───────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="why-education">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Education Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why Education Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Indian coaching institutes and schools generate thousands of admission enquiries monthly that their
              admission teams cannot manually follow up with fast enough. A lead that does not receive a response
              within 10 minutes has a <strong>78% lower chance</strong> of converting.
            </p>
            <p>
              WhatsApp chatbot automation responds instantly, qualifies the lead, shares course details, and books
              a counselling call — all without human intervention. With <strong>85% parent open rates</strong> for
              school notifications and <strong>3x higher admission conversion</strong>, WhatsApp is rapidly becoming
              the standard for education communication in India.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> A lead that does not receive a response within 10 minutes has a
                78% lower chance of converting. WhatsApp chatbot automation responds instantly, qualifies the lead,
                shares course details, and books a counselling call — all without human intervention.
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
              WhatsApp API Use Cases for Education — 6 Automations
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

      {/* ── IMAGE SECTION: WhatsApp Education Message Preview ───────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Interactive Student & Parent Messaging
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp messages <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">that drive action</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Interactive WhatsApp templates with buttons for fee payment, exam schedule download, course
                continuation, and admission enquiry — students and parents can take action directly from the
                message without calling the front desk.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>One-tap fee payment with Pay Now button</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Exam admit card download with View button</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Course progress tracking with Continue button</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Daily attendance confirmation with quick replies</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 max-w-sm mx-auto">
                <Image
                  src="/images/whatsapp/education-message-preview.webp"
                  alt="WhatsApp education message preview — fee reminder with Pay Now button, exam admit card, and parent communication"
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
              Real results from Indian education providers
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
                  src="/images/whatsapp/education-integration.webp"
                  alt="WhatsApp API education integration architecture — LeadSquared, LMS, and ERP integration with student communication"
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
                <span className="text-[#2563eb]">your existing education systems</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media integrates with your CRM, LMS, and ERP — enabling automated student lifecycle
                communication from first enquiry to alumni engagement without disrupting existing workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                {["LeadSquared", "CampusCare", "Extramarks", "Moodle", "Custom LMS", "ERP webhook"].map((item) => (
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
              Get Click Media&apos;s WhatsApp API Capabilities for Education
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
              WhatsApp API for Education
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
              { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
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
                Ready to transform education communication with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for education with CRM, LMS, and ERP integration,
                automated student communication, and full DPDP compliance.
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