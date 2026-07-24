import type { Metadata } from "next";
import {
  Car,
  Code2,
  Stethoscope,
  Factory,
  GraduationCap,
  Languages,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Chennai- Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business Solution Provider. 3-5 day onboarding with Tamil-language chatbot support for Chennai's automotive, IT, healthcare, and manufacturing businesses.",
  keywords:
    "WhatsApp Business API Chennai, whatsapp api provider chennai, whatsapp business api chennai, whatsapp marketing chennai, whatsapp chatbot chennai, whatsapp api tamil nadu",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-chennai" },
  openGraph: {
    title: "WhatsApp Business API in Chennai- Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business Solution Provider, with Tamil-language chatbot support for Chennai businesses.",
    url: "https://getclickmedia.com/whatsapp-api-chennai",
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
      name: "WhatsApp Business API Provider in Chennai",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Chennai", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-chennai",
      description:
        "Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business Solution Provider. Chennai's automotive and manufacturing industry, IT sector, healthcare network, and Tamil Nadu's large educational institutions are the primary WhatsApp API adopters.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Chennai", item: "https://getclickmedia.com/whatsapp-api-chennai" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media support Tamil-language WhatsApp chatbots for Chennai businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. GCM's chatbot platform supports Tamil language- both understanding Tamil messages from customers and responding in Tamil. For Chennai B2C businesses (healthcare, retail, education) where customers communicate in Tamil, GCM configures bilingual chatbots that detect the customer's language and respond accordingly." },
        },
        {
          "@type": "Question",
          name: "What is WhatsApp API used for in Chennai's automotive industry?",
          acceptedAnswer: { "@type": "Answer", text: "Chennai's automotive sector uses WhatsApp API across the value chain: OEM dealer communication (spare parts availability, service campaigns, model launch announcements in Tamil), dealer-to-customer communication (service reminders, appointment booking, vehicle delivery), and manufacturing B2B (supplier order tracking, production schedule updates, payment reminders). GCM integrates with automotive DMS systems used by Chennai dealers." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API suitable for medical tourism facilitation in Chennai?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Chennai is a major medical tourism destination for patients from South Asia, Middle East, and Africa. WhatsApp API for medical tourism enables pre-arrival consultation coordination, visa and documentation assistance via chatbot, appointment scheduling for international patients, treatment plan delivery, and post-treatment follow-up. GCM configures multi-language WhatsApp flows (English, Arabic, Sinhala, Bahasa as required) for Chennai hospitals' international patient departments." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API help manufacturing companies in Chennai?",
          acceptedAnswer: { "@type": "Answer", text: "Chennai's manufacturing companies use WhatsApp for B2B communication: supplier order confirmations, production milestone updates, quality report delivery, payment reminders for distributors, and employee communication. GCM's manufacturing integration supports ERP systems common in Chennai's industrial sector." },
        },
      ],
    },
  ],
};

const INDUSTRIES = [
  {
    icon: Car,
    title: "Automotive Manufacturing",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Sriperumbudur is home to major global automotive manufacturers- Chennai is often called India's Detroit.",
    useCase: "Dealer communication automation, service reminder (Tamil), parts supply chain WhatsApp.",
    image: "/images/dashboard.png",
  },
  {
    icon: Code2,
    title: "IT and Software Services",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "OMR, also called the IT Highway, is India's second-largest IT services corridor.",
    useCase: "B2B delivery communication, employee communication, support chatbot for software products.",
    image: "/images/rcs/ecommerce-dashboard.png",
  },
  {
    icon: Stethoscope,
    title: "Healthcare and Medical Tourism",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Chennai is one of India's top medical tourism destinations, drawing patients from across South Asia and beyond.",
    useCase: "International patient coordination, appointment automation, Tamil-language patient communication.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Factory,
    title: "Manufacturing and Exports",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Factories across Chennai's suburbs- textiles, electronics, and auto parts- drive heavy B2B communication needs.",
    useCase: "B2B order tracking, supplier communication, payment reminder WhatsApp flows.",
    image: "/images/rcs/ecommerce-delivery.webp",
  },
  {
    icon: GraduationCap,
    title: "Education",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Major educational institutions across Chennai and Tamil Nadu need scalable, bilingual admissions communication.",
    useCase: "Admission chatbot (Tamil + English), fee automation, placement communication.",
    image: "/images/rcs/rcs-for-education.webp",
  },
];

const CAPABILITIES = [
  { label: "Onboarding timeline", value: "3 to 5 business days from consultation to first live WhatsApp message" },
  { label: "Meta BSP status", value: "Official Meta Business Solution Provider- GCM manages your full WhatsApp Business Account registration" },
  { label: "Local support", value: "India-based support team available 9 AM to 7 PM IST, Monday to Saturday. WhatsApp support available." },
  { label: "Pricing", value: "Same as national rates- marketing Rs 0.79-0.91/conv, utility Rs 0.14-0.17/conv. Platform fee based on volume." },
  { label: "Languages supported", value: "Hindi + English + regional language chatbot flows as required by your customer base" },
  { label: "Integration partners", value: "Shopify, WooCommerce, Salesforce, HubSpot, Zoho, LeadSquared, and custom systems" },
];

const CLIENT_USE_CASES = [
  { sector: "Automotive dealer- Anna Nagar", automation: "Service reminder (Tamil) + new model launch campaign", result: "Service retention +35%. Launch day footfall 3x." },
  { sector: "Multi-speciality hospital- OMR", automation: "Appointment automation + international patient WhatsApp coordination", result: "No-show -32%. International patient satisfaction +28 points." },
  { sector: "IT services company- Tidel Park", automation: "B2B client communication + support ticket automation", result: "Client response time -60%. Support satisfaction +22 points." },
  { sector: "Engineering college- Sriperumbudur", automation: "Tamil-language admission chatbot + fee automation", result: "Admission conversion 2.8x. Fee on-time +40%." },
  { sector: "Textile exporter- Ambattur", automation: "B2B order update + payment reminder automation", result: "Order query calls -55%. Payment default -28%." },
];

const FAQS = [
  {
    q: "Does Get Click Media support Tamil-language WhatsApp chatbots for Chennai businesses?",
    a: "Yes. GCM's chatbot platform supports Tamil language- both understanding Tamil messages from customers and responding in Tamil. For Chennai B2C businesses (healthcare, retail, education) where customers communicate in Tamil, GCM configures bilingual chatbots that detect the customer's language and respond accordingly.",
  },
  {
    q: "What is WhatsApp API used for in Chennai's automotive industry?",
    a: "Chennai's automotive sector uses WhatsApp API across the value chain: (1) OEM dealer communication- spare parts availability, service campaigns, model launch announcements in Tamil; (2) Dealer-to-customer- service reminders, appointment booking, vehicle delivery; (3) Manufacturing B2B- supplier order tracking, production schedule updates, payment reminders. GCM integrates with automotive DMS systems used by Chennai dealers.",
  },
  {
    q: "Is WhatsApp API suitable for medical tourism facilitation in Chennai?",
    a: "Yes. Chennai is a major medical tourism destination for patients from South Asia, Middle East, and Africa. WhatsApp API for medical tourism enables: pre-arrival consultation coordination, visa and documentation assistance via chatbot, appointment scheduling for international patients, treatment plan delivery, and post-treatment follow-up. GCM configures multi-language WhatsApp flows (English + Arabic + Sinhala + Bahasa as required) for Chennai hospitals' international patient departments.",
  },
  {
    q: "How does WhatsApp API help manufacturing companies in Chennai?",
    a: "Chennai's manufacturing companies use WhatsApp for B2B communication: supplier order confirmations, production milestone updates, quality report delivery, payment reminders for distributors, and employee communication. GCM's manufacturing integration supports ERP systems common in Chennai's industrial sector.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Bangalore", href: "/whatsapp-api-bangalore" },
  { label: "WhatsApp API Hyderabad", href: "/whatsapp-api-hyderabad" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp API for Automobile", href: "/whatsapp-api-automobile" },
  { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIChennaiPage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Chennai"
      heroEyebrow="WhatsApp Business API Chennai"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Chennai- Official Meta BSP"
      heroDescription={
        <>
          Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business
          Solution Provider. Chennai&apos;s automotive and manufacturing industry, IT sector (OMR
          corridor), healthcare network, and Tamil Nadu&apos;s large educational institutions are the
          primary WhatsApp API adopters.
          <strong className="text-gray-900"> GCM delivers 3 to 5 day onboarding with Tamil-language chatbot support.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Chennai businesses- rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · Tamil-language chatbot support · India-based support"
      stats={[
        { value: "India's Detroit", label: "Sriperumbudur automotive manufacturing cluster" },
        { value: "OMR", label: "India's second-largest IT corridor" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "Tamil", label: "Bilingual chatbot support" },
      ]}
      aeoParagraphs={[
        "Get Click Media provides WhatsApp Business API in Chennai as an official Meta Business Solution Provider. Chennai's automotive and manufacturing industry, IT sector (OMR corridor), healthcare network (one of India's top medical tourism destinations), and Tamil Nadu's large educational institutions are the primary WhatsApp API adopters. GCM delivers 3 to 5 day onboarding with Tamil-language chatbot support for Chennai businesses.",
        "Chennai is South India's commercial capital and one of India's four major metros- home to India's second-largest IT corridor (OMR, also called the IT Highway), India's largest automotive manufacturing cluster (Sriperumbudur, Oragadam), and a major healthcare hub known for quality medical services and medical tourism.",
        "Tamil Nadu's business culture and Chennai's consumer base are notably different from North India- regional language communication (Tamil) is essential for many B2C use cases, and the city's manufacturing and B2B heritage creates strong demand for operational WhatsApp API deployments beyond consumer marketing.",
      ]}
      whyCity={{
        eyebrow: "Why Chennai Businesses Choose WhatsApp API",
        title: "A manufacturing-and-B2B-heavy market built for WhatsApp automation",
        description:
          "Chennai's business landscape is shaped by a digital-first consumer base- smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Chennai report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Car, title: "India's largest automotive manufacturing cluster", desc: "Sriperumbudur and Oragadam anchor a deep OEM-to-dealer-to-customer WhatsApp communication chain." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Chennai businesses." },
          { icon: Languages, title: "Tamil-language chatbot support", desc: "Regional language communication is essential for Chennai's B2C use cases- GCM configures bilingual Tamil/English flows." },
          { icon: MapPinned, title: "Strong B2B and manufacturing heritage", desc: "Chennai's operational WhatsApp API deployments go well beyond consumer marketing into supply chain and export communication." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Chennai",
        title: "Get Click Media's WhatsApp API Service in Chennai",
        description: (
          <>
            Get Click Media serves Chennai businesses remotely- providing WhatsApp API with
            <strong className="text-gray-900"> Tamil-language chatbot support</strong>, essential for B2C
            communication with Chennai&apos;s Tamil-speaking consumer base. GCM&apos;s multilingual
            chatbot capability and manufacturing sector integration experience make it particularly
            suitable for Chennai&apos;s automotive and industrial clients.
          </>
        ),
        image: "/images/rcs/ecommerce-why-rcs.png",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Tambaram", "Sriperumbudur", "Oragadam", "Mahindra City", "OMR", "ECR", "Perambur", "Ambattur", "Avadi", "Sholinganallur", "Coimbatore", "Madurai"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Chennai business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and Tamil-language chatbot setup- fully remote, no in-person visit required."
      schema={schema}
    />
  );
}
