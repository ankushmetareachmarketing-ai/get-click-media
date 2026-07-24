import type { Metadata } from "next";
import {
  MessageSquare,
  CreditCard,
  Calendar,
  TrendingUp,
  Award,
  Bell,
  Database,
  Settings,
  Languages,
  ShieldCheck,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Education- Admissions, Fee Reminders & Student Engagement India | Get Click Media",
  description:
    "WhatsApp Business API for education enables Indian schools, coaching institutes, and EdTech platforms to automate admission enquiry handling, fee payment reminders, exam schedule notifications, course updates, and parent communication.",
  keywords:
    "WhatsApp API for Education India, WhatsApp for EdTech India, WhatsApp Admission Automation, WhatsApp Coaching Institute India, WhatsApp API School India, Education WhatsApp Chatbot India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-education" },
  openGraph: {
    title: "WhatsApp API for Education- Admissions, Fee Reminders & Student Engagement India",
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
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp chatbot responds to admission enquiries instantly- 24/7 including weekends and late evenings when students and parents are most active. The chatbot qualifies the lead (course, class, location, budget), shares the appropriate course details PDF, and books a counselling appointment. This reduces the time between enquiry and counselling contact from hours to minutes- the single most important factor in admission conversion rates." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp be used for fee collection reminders in India?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. WhatsApp fee reminders with embedded payment links (Razorpay, PayU, CCAvenue) have consistently outperformed email and SMS for on-time fee collection in Indian schools and coaching institutes. The sequence of reminders at Day -7, -3, due date, and +1 reduces manual collection calls and improves cash flow predictability." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API suitable for communicating with parents of school students?",
          acceptedAnswer: { "@type": "Answer", text: "Yes- and parent WhatsApp communication is one of the highest-engagement use cases in Indian education. Parents open school WhatsApp notifications at 85%+ rates. Attendance confirmation, homework notification, and school circular distribution via WhatsApp is replacing paper circulars and email communication across Indian schools." },
        },
        {
          "@type": "Question",
          name: "Does Get Click Media integrate WhatsApp with LeadSquared for admissions?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. GCM's LeadSquared integration is bi-directional- leads from WhatsApp chatbot are automatically created in LeadSquared with full qualification data. Counsellor follow-up actions in LeadSquared trigger WhatsApp messages. Admission stage changes in LeadSquared trigger appropriate WhatsApp templates." },
        },
      ],
    },
  ],
};

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
    trigger: "Fee due date approaching- Day -7, -3, 0, +1",
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
    title: "Parent Daily Communication- School Updates",
    trigger: "Daily schedule trigger- morning attendance, afternoon updates, dismissal",
    message: "Attendance confirmation, homework, circular notifications, event reminders via structured daily WhatsApp message",
    result: "Parent satisfaction +30 points. Parent inquiry calls to school -50%. Communication compliance improved.",
  },
];

const PERFORMANCE_DATA = [
  { metric: "Admission enquiry response time", before: "4-8 hours (manual)", after: "Under 30 seconds (WhatsApp chatbot)", source: "GCM education client data" },
  { metric: "Enquiry-to-enrolment conversion", before: "8-12%", after: "22-28%", source: "GCM coaching institute clients India" },
  { metric: "Fee payment on-time rate", before: "55%", after: "78%", source: "GCM school client post-deployment" },
  { metric: "Course completion (EdTech)", before: "34%", after: "58%", source: "GCM EdTech platform client" },
  { metric: "Parent satisfaction (NPS)", before: "42", after: "67", source: "GCM school client survey" },
];

const CAPABILITIES = [
  { icon: Database, title: "LeadSquared integration", desc: "Bi-directional CRM sync- admission leads, chatbot qualification data, counsellor assignment" },
  { icon: Settings, title: "LMS integration", desc: "Moodle, CampusCare, Extramarks, custom LMS- course progress triggers, completion nudges" },
  { icon: CreditCard, title: "Fee management integration", desc: "ERP webhook- fee due date triggers, payment link generation (Razorpay, PayU)" },
  { icon: Languages, title: "Multilingual support", desc: "Hindi, English, Tamil, Telugu, Kannada for regional coaching institutes" },
  { icon: MessageSquare, title: "Parent communication portal", desc: "Dedicated WhatsApp number for parent queries with chatbot + teacher escalation" },
  { icon: ShieldCheck, title: "DPDP compliance", desc: "Student data (minors) handled per DPDP 2023 enhanced protections for children's data" },
];

const FAQS = [
  {
    q: "How does WhatsApp API improve admissions for coaching institutes?",
    a: "WhatsApp chatbot responds to admission enquiries instantly- 24/7 including weekends and late evenings when students and parents are most active. The chatbot qualifies the lead (course, class, location, budget), shares the appropriate course details PDF, and books a counselling appointment. This reduces the time between enquiry and counselling contact from hours to minutes- the single most important factor in admission conversion rates.",
  },
  {
    q: "Can WhatsApp be used for fee collection reminders in India?",
    a: "Yes. WhatsApp fee reminders with embedded payment links (Razorpay, PayU, CCAvenue) have consistently outperformed email and SMS for on-time fee collection in Indian schools and coaching institutes. The sequence of reminders at Day -7, -3, due date, and +1 reduces manual collection calls and improves cash flow predictability.",
  },
  {
    q: "Is WhatsApp API suitable for communicating with parents of school students?",
    a: "Yes- and parent WhatsApp communication is one of the highest-engagement use cases in Indian education. Parents open school WhatsApp notifications at 85%+ rates. Attendance confirmation, homework notification, and school circular distribution via WhatsApp is replacing paper circulars and email communication across Indian schools.",
  },
  {
    q: "Does Get Click Media integrate WhatsApp with LeadSquared for admissions?",
    a: "Yes. GCM's LeadSquared integration is bi-directional- leads from WhatsApp chatbot are automatically created in LeadSquared with full qualification data. Counsellor follow-up actions in LeadSquared trigger WhatsApp messages. Admission stage changes in LeadSquared trigger appropriate WhatsApp templates.",
  },
];

const RELATED_LINKS = [
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
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIEducationPage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Education"
      heroEyebrow="Education WhatsApp API"
      heroTitle="WhatsApp Business API for Education"
      heroHighlight="Admissions, Fee Reminders & Student Engagement India"
      heroDescription={
        <>
          WhatsApp Business API for education enables Indian schools, coaching institutes, and EdTech
          platforms to automate admission enquiry handling, fee payment reminders, exam schedule
          notifications, course updates, and parent communication.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with LeadSquared, CampusCare, and custom LMS platforms- reducing manual admission effort by 60%.</strong>
        </>
      }
      heroImage="/images/rcs/education-hero.webp"
      heroImageAlt="WhatsApp API Education dashboard- admission enquiries, fee reminders, and parent communication"
      heroTrustLine="Official Meta BSP · LeadSquared & LMS integration · DPDP compliant · India-based support"
      stats={[
        { value: "3x", label: "Higher admission enquiry-to-enrolment conversion" },
        { value: "45%", label: "Improvement in course completion rates" },
        { value: "62%", label: "Reduction in fee payment delay with WA reminders" },
        { value: "85%", label: "Parent WhatsApp open rate for school notifications" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for education enables Indian schools, coaching institutes, and EdTech
          platforms to automate admission enquiry handling, fee payment reminders, exam schedule
          notifications, course updates, and parent communication.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with LeadSquared, CampusCare,</strong> and
          custom LMS platforms- reducing manual admission effort by 60% and improving fee collection rates.
        </>
      }
      insightCallout={
        <>
          India&apos;s education sector handles millions of admission enquiries, fee transactions, and daily
          parent communications across schools, colleges, and coaching institutes. Traditional communication
          through phone calls and SMS is inefficient, expensive, and fails to capture the attention of
          India&apos;s WhatsApp-first generation of students and parents.
        </>
      }
      whyIndustryTitle="Why Education Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Indian coaching institutes and schools generate thousands of admission enquiries monthly that
          their admission teams cannot manually follow up with fast enough. A lead that does not receive a
          response within 10 minutes has a <strong>78% lower chance</strong> of converting.
        </>,
        <>
          WhatsApp chatbot automation responds instantly, qualifies the lead, shares course details, and
          books a counselling call- all without human intervention. With <strong>85% parent open rates</strong>{" "}
          for school notifications and <strong>3x higher admission conversion</strong>, WhatsApp is rapidly
          becoming the standard for education communication in India.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> A lead that does not receive a response within 10 minutes has a 78%
          lower chance of converting. WhatsApp chatbot automation responds instantly, qualifies the lead,
          shares course details, and books a counselling call- all without human intervention.
        </>
      }
      imageSections={[
        {
          eyebrow: "Student Communication Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for education providers</span>
            </>
          ),
          description:
            "Manage all student and parent communication from a single dashboard- admission enquiry handling, fee reminders, exam notifications, course progress tracking, and daily school updates- with full integration to your existing CRM or LMS.",
          bullets: [
            "Instant admission enquiry qualification with chatbot",
            "Automated fee reminder sequences with payment links",
            "Exam schedule and admit card delivery via WhatsApp",
            "Parent daily communication- attendance, homework, circulars",
          ],
          image: "/images/rcs/education-dashboard.webp",
          imageAlt: "WhatsApp API Education dashboard- admission enquiries, fee reminders, exam notifications, and parent communication",
        },
        {
          eyebrow: "Interactive Student & Parent Messaging",
          title: (
            <>
              WhatsApp messages <span className="text-[#2563eb]">that drive action</span>
            </>
          ),
          description:
            "Interactive WhatsApp templates with buttons for fee payment, exam schedule download, course continuation, and admission enquiry- students and parents can take action directly from the message without calling the front desk.",
          bullets: [
            "One-tap fee payment with Pay Now button",
            "Exam admit card download with View button",
            "Course progress tracking with Continue button",
            "Daily attendance confirmation with quick replies",
          ],
          image: "/images/rcs/education-why-rcs.webp",
          imageAlt: "WhatsApp education message preview- fee reminder with Pay Now button, exam admit card, and parent communication",
          imageSide: "left",
        },
        {
          eyebrow: "Seamless Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">your existing education systems</span>
            </>
          ),
          description:
            "Get Click Media integrates with your CRM, LMS, and ERP- enabling automated student lifecycle communication from first enquiry to alumni engagement without disrupting existing workflows.",
          bullets: ["LeadSquared", "CampusCare", "Extramarks", "Moodle", "Custom LMS", "ERP webhook"],
          image: "/images/rcs/rcs-for-education.webp",
          imageAlt: "WhatsApp API education integration architecture- LeadSquared, LMS, and ERP integration with student communication",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for Education- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for Education"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform education communication with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for education with CRM, LMS, and ERP integration, automated student communication, and full DPDP compliance."
      schema={schema}
    />
  );
}
