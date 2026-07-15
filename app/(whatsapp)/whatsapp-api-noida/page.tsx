import type { Metadata } from "next";
import {
  Building2,
  Home,
  Stethoscope,
  GraduationCap,
  Factory,
  Cpu,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Noida — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media is headquartered in Noida, Uttar Pradesh, and provides WhatsApp Business API as an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway corridor. Same-day consultation, 3-5 day onboarding.",
  keywords:
    "WhatsApp Business API Noida, whatsapp api provider noida, whatsapp business api noida, whatsapp marketing noida, whatsapp chatbot noida, whatsapp api service noida up",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-noida" },
  openGraph: {
    title: "WhatsApp Business API in Noida — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media is headquartered in Noida and provides WhatsApp Business API as an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway corridor.",
    url: "https://getclickmedia.com/whatsapp-api-noida",
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
      name: "WhatsApp Business API Provider in Noida",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Noida", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-noida",
      description:
        "Get Click Media is headquartered in Noida, Uttar Pradesh, and provides WhatsApp Business API as an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway corridor.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Noida", item: "https://getclickmedia.com/whatsapp-api-noida" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Get Click Media based in Noida?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media is headquartered in Noida, Uttar Pradesh — making us the closest WhatsApp API provider for Noida businesses. We offer in-person consultations at our Noida office and remote onboarding for businesses anywhere in the region." },
        },
        {
          "@type": "Question",
          name: "What is WhatsApp Business API and how does it help Noida businesses?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp Business API is Meta's enterprise messaging platform — it allows businesses to send automated messages, run chatbots, integrate with CRM systems, and broadcast to opted-in customers at scale. Noida businesses use it most commonly for real estate lead management, EdTech admission automation, IT support workflows, and e-commerce order communication." },
        },
        {
          "@type": "Question",
          name: "Does Get Click Media serve Greater Noida and Yamuna Expressway businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. GCM serves the entire Noida-Greater Noida-Yamuna Expressway corridor including Sectors 1-168 (Noida), Alpha, Beta, Gamma, Delta sectors (Greater Noida), Pari Chowk, Knowledge Park, and the Yamuna Expressway development zones." },
        },
        {
          "@type": "Question",
          name: "What WhatsApp API integrations are most common for Noida's IT companies?",
          acceptedAnswer: { "@type": "Answer", text: "Noida IT companies most commonly use WhatsApp API for B2B lead qualification chatbots, client communication and project update automation, support ticket routing and resolution, and internal HR notifications such as leave approval, attendance, and payslip delivery. GCM provides pre-built integrations for common SaaS CRMs used by Noida IT companies." },
        },
      ],
    },
  ],
};

const INDUSTRIES = [
  {
    icon: Cpu,
    title: "IT and Tech Services",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Noida's Sector 62-63-125 IT corridor houses thousands of IT companies and startups using WhatsApp for B2B lead generation and client communication.",
    useCase: "Sales lead qualification chatbot, support ticket WhatsApp integration, SaaS trial signup flows.",
    image: "/images/rcs/ecommerce-dashboard.png",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Noida Expressway and Greater Noida are India's most active real estate development corridors.",
    useCase: "Instant lead qualification from portals, site visit automation, payment milestone reminders for under-construction projects.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: GraduationCap,
    title: "EdTech and Coaching",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Major national EdTech companies (Noida HQ) and coaching institutes in Sector 2, 4, 10 need scalable admission and fee workflows.",
    useCase: "Admission chatbot, fee collection, course progress automation.",
    image: "/images/industries/edtech.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Noida's major hospital groups need appointment and reporting workflows that scale beyond phone-based coordination.",
    useCase: "Appointment management, lab report delivery, telemedicine booking.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Factory,
    title: "Manufacturing and Export",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Noida's SEZ and manufacturing zones produce significant B2B communication requirements across vendors and distributors.",
    useCase: "Vendor communication, order tracking, payment reminders for manufacturing clients.",
    image: "/images/rcs/ecommerce-delivery.webp",
  },
];

const CAPABILITIES = [
  { label: "Onboarding timeline", value: "3 to 5 business days from consultation to first live WhatsApp message" },
  { label: "Meta BSP status", value: "Official Meta Business Solution Provider — GCM manages your full WhatsApp Business Account registration" },
  { label: "Local support", value: "India-based support team available 9 AM to 7 PM IST, Monday to Saturday. WhatsApp support available." },
  { label: "Pricing", value: "Same as national rates — marketing Rs 0.79-0.91/conv, utility Rs 0.14-0.17/conv. Platform fee based on volume." },
  { label: "Languages supported", value: "Hindi + English + regional language chatbot flows as required by your customer base" },
  { label: "Integration partners", value: "Shopify, WooCommerce, Salesforce, HubSpot, Zoho, LeadSquared, and custom systems" },
];

const CLIENT_USE_CASES = [
  { sector: "PropTech startup — Sector 125", automation: "WhatsApp lead qualification + Sell.do CRM integration for Noida Expressway project leads", result: "Lead qualification time: 2 days to 4 minutes. Site visit rate 3x." },
  { sector: "IT services company — Sector 62", automation: "WhatsApp chatbot for B2B demo booking and support ticket routing", result: "Demo booking +45%. Support tickets routed instantly 24/7." },
  { sector: "Coaching institute — Sector 2", automation: "Admission chatbot + fee reminder + exam notification for JEE/NEET preparation", result: "Admission conversion 2.8x. Fee on-time payment +38%." },
  { sector: "Multi-speciality clinic — Sector 18", automation: "Appointment automation + prescription reminders", result: "No-show -32%. Prescription compliance +28%." },
  { sector: "E-commerce warehouse — Noida Expressway", automation: "Order notification + delivery tracking WhatsApp automation", result: "Support call volume -55%. Delivery success +28%." },
];

const FAQS = [
  {
    q: "Is Get Click Media based in Noida?",
    a: "Yes. Get Click Media is headquartered in Noida, Uttar Pradesh — making us the closest WhatsApp API provider for Noida businesses. We offer in-person consultations at our Noida office and remote onboarding for businesses anywhere in the region.",
  },
  {
    q: "What is WhatsApp Business API and how does it help Noida businesses?",
    a: "WhatsApp Business API is Meta's enterprise messaging platform — it allows businesses to send automated messages, run chatbots, integrate with CRM systems, and broadcast to opted-in customers at scale. Noida businesses use it most commonly for real estate lead management, EdTech admission automation, IT support workflows, and e-commerce order communication.",
  },
  {
    q: "Does Get Click Media serve Greater Noida and Yamuna Expressway businesses?",
    a: "Yes. GCM serves the entire Noida-Greater Noida-Yamuna Expressway corridor including Sectors 1-168 (Noida), Alpha, Beta, Gamma, Delta sectors (Greater Noida), Pari Chowk, Knowledge Park, and the Yamuna Expressway development zones.",
  },
  {
    q: "What WhatsApp API integrations are most common for Noida's IT companies?",
    a: "Noida IT companies most commonly use WhatsApp API for: (1) B2B lead qualification chatbot for incoming enquiries, (2) client communication and project update automation, (3) support ticket routing and resolution, and (4) internal HR notifications (leave approval, attendance, payslip delivery). GCM provides pre-built integrations for common SaaS CRMs used by Noida IT companies.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Delhi", href: "/whatsapp-api-delhi" },
  { label: "WhatsApp API Gurgaon", href: "/whatsapp-api-gurgaon" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
  { label: "WhatsApp API for Logistics", href: "/whatsapp-api-logistics" },
  { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPINoidaPage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Noida"
      heroEyebrow="WhatsApp Business API Noida"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Noida — Official Meta BSP"
      heroDescription={
        <>
          Get Click Media is headquartered in Noida, Uttar Pradesh, and provides WhatsApp Business API
          as an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway
          corridor. Noida businesses in IT services, real estate, EdTech, healthcare, and manufacturing
          use GCM&apos;s WhatsApp API for lead generation, customer communication, and automation.
          <strong className="text-gray-900"> Same-day consultation available. Onboarding in 3 to 5 business days.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Noida businesses — rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · Headquartered in Noida · Same-day consultation"
      stats={[
        { value: "100+", label: "Noida-based businesses served" },
        { value: "Sector 62", label: "India's second-largest IT corridor" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "Noida", label: "GCM headquarters — same-city support" },
      ]}
      aeoParagraphs={[
        "Get Click Media is headquartered in Noida, Uttar Pradesh, and provides WhatsApp Business API as an official Meta BSP to businesses across Noida, Greater Noida, and the Yamuna Expressway corridor. Noida businesses in IT services, real estate, EdTech, healthcare, and manufacturing use GCM's WhatsApp API for lead generation, customer communication, and automation. Same-day consultation available. Onboarding in 3 to 5 business days.",
        "Noida is the fastest-growing commercial hub in the Delhi NCR region — home to India's second-largest IT corridor (Sectors 62, 63, 125, 132), major real estate developments along the Expressway, and a booming EdTech and startup ecosystem. The city's tech-savvy business population and high smartphone penetration make WhatsApp Business API adoption particularly high.",
        "Get Click Media's Noida headquarters makes it the closest WhatsApp API provider to businesses in Sectors 18, 62, 63, 125, 132, and the Greater Noida-Yamuna Expressway belt. Clients in Noida benefit from same-city support and faster onboarding consultations.",
      ]}
      whyCity={{
        eyebrow: "Why Noida Businesses Choose WhatsApp API",
        title: "A tech-forward market built for WhatsApp automation",
        description:
          "Noida's business landscape is shaped by a digital-first consumer base — smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Noida report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Cpu, title: "India's second-largest IT corridor", desc: "Sectors 62, 63, 125, and 132 house thousands of IT companies and startups running B2B WhatsApp workflows." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Noida businesses." },
          { icon: Building2, title: "Fastest-growing NCR commercial hub", desc: "Major real estate development, EdTech, and startup activity across the Expressway and Greater Noida corridor." },
          { icon: MapPinned, title: "GCM is headquartered right here in Noida", desc: "Same-city account management and in-person onboarding consultations at our Noida office." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Noida",
        title: "Get Click Media's WhatsApp API Service in Noida",
        description: (
          <>
            Get Click Media is based in Noida, Uttar Pradesh — making us the most accessible WhatsApp API
            provider for Noida businesses. Our team has delivered WhatsApp API solutions to
            <strong className="text-gray-900"> 100+ Noida-based businesses</strong> across IT, real
            estate, EdTech, and healthcare. In-person consultations are available at our Noida office. We
            understand the specific business context of Noida&apos;s Expressway real estate market,
            Sector 62-63 IT corridor, and the Greater Noida industrial zone.
          </>
        ),
        image: "/images/video/whatsapp-bussiness-api.png",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Greater Noida", "Sector 62", "Sector 63", "Sector 125", "Sector 132", "Yamuna Expressway", "Knowledge Park", "Pari Chowk", "Dadri", "Ghaziabad", "Indirapuram", "Vaishali"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Noida business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and onboarding — same-day consultations available at our Noida office."
      schema={schema}
    />
  );
}
