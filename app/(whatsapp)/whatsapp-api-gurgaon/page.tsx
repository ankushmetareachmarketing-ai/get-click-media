import type { Metadata } from "next";
import {
  Building2,
  Home,
  Stethoscope,
  Briefcase,
  Landmark,
  Cpu,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Gurgaon- Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta Business Solution Provider. 3-5 day onboarding with full CRM and OMS integration for Gurgaon's startups, corporates, and premium businesses.",
  keywords:
    "WhatsApp Business API Gurgaon, whatsapp api gurgaon, whatsapp business api gurugram, whatsapp marketing gurgaon, whatsapp chatbot gurugram, best whatsapp api provider gurgaon",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-gurgaon" },
  openGraph: {
    title: "WhatsApp Business API in Gurgaon- Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta Business Solution Provider with 3-5 day onboarding and full CRM/OMS integration.",
    url: "https://getclickmedia.com/whatsapp-api-gurgaon",
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
      name: "WhatsApp Business API Provider in Gurgaon",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Gurgaon", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-gurgaon",
      description:
        "Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta Business Solution Provider. GCM delivers 3 to 5 day onboarding for Gurgaon businesses with full CRM and OMS integration capabilities.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Gurgaon", item: "https://getclickmedia.com/whatsapp-api-gurgaon" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best WhatsApp API provider in Gurgaon?",
          acceptedAnswer: { "@type": "Answer", text: "Get Click Media is among the most established WhatsApp API providers serving Gurgaon- as an official Meta BSP with India-based support and enterprise integration capabilities. GCM's strength in B2B WhatsApp automation and CRM integration makes it particularly suitable for Gurgaon's corporate and startup ecosystem." },
        },
        {
          "@type": "Question",
          name: "Can Gurgaon startups use WhatsApp API for B2B lead generation?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. WhatsApp B2B lead generation works well for SaaS, fintech, and professional services companies in Gurgaon. The most common approach: CTWA (Click-to-WhatsApp) LinkedIn or Facebook ads drive prospects into a WhatsApp chatbot that qualifies budget, timeline, and company size- routing sales-ready leads to a sales rep. Get Click Media has deployed this flow for multiple Gurgaon B2B companies." },
        },
        {
          "@type": "Question",
          name: "Does WhatsApp API work for luxury real estate in Gurgaon?",
          acceptedAnswer: { "@type": "Answer", text: "Yes- and it works particularly well. Gurgaon's high-net-worth buyers and NRI investors are highly active on WhatsApp. WhatsApp enables instant property enquiry response, virtual tour video delivery, payment milestone reminders for Rs 3-10 crore transactions, and NRI documentation support. GCM's Sell.do CRM integration is used by multiple Golf Course Road developers." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API pricing compare between Gurgaon and other cities?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp API pricing is uniform across India- the same Meta conversation rates apply in Gurgaon, Delhi, Mumbai, or any other city. Get Click Media's platform fee is also India-wide. There is no city-specific surcharge for Gurgaon." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Landmark,
    title: "Fintech and Banking",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Gurgaon houses major fintech headquarters and hundreds of fintech startups- all heavy WhatsApp API users.",
    useCase: "Loan pre-approval campaigns, insurance renewal, investment portfolio alerts, EMI collection.",
    image: "/images/rcs/banking-hero.webp",
  },
  {
    icon: Home,
    title: "Luxury Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Golf Course Road, DLF 5, and Sohna Road are among India's most expensive residential addresses.",
    useCase: "High-value buyer qualification, virtual tour delivery, NRI buyer management, payment milestone reminders.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: Briefcase,
    title: "Corporate HR and Staffing",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Gurgaon is India's HR tech capital, home to major job platforms and hundreds of RPO companies.",
    useCase: "Candidate sourcing chatbot, interview scheduling, offer letter delivery, onboarding communication.",
    image: "/images/dashboard.png",
  },
  {
    icon: Stethoscope,
    title: "Premium Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Gurgaon's premium hospital chains carry high patient expectations for responsiveness and convenience.",
    useCase: "Appointment automation, priority booking, health check package promotion, post-procedure follow-up.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Cpu,
    title: "SaaS and B2B Tech",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Gurgaon's MG Road-Golf Course Road belt houses India's highest density of SaaS companies.",
    useCase: "Product trial onboarding, renewal reminders, upsell automation, B2B support chatbot.",
    image: "/images/rcs/ecommerce-dashboard.png",
  },
];

// ── GCM Capability Table ────────────────────────────────────────────────
const CAPABILITIES = [
  { label: "Onboarding timeline", value: "3 to 5 business days from consultation to first live WhatsApp message" },
  { label: "Meta BSP status", value: "Official Meta Business Solution Provider- GCM manages your full WhatsApp Business Account registration" },
  { label: "Local support", value: "India-based support team available 9 AM to 7 PM IST, Monday to Saturday. WhatsApp support available." },
  { label: "Pricing", value: "Same as national rates- marketing Rs 0.79-0.91/conv, utility Rs 0.14-0.17/conv. Platform fee based on volume." },
  { label: "Languages supported", value: "Hindi + English + regional language chatbot flows as required by your customer base" },
  { label: "Integration partners", value: "Shopify, WooCommerce, Salesforce, HubSpot, Zoho, LeadSquared, and custom systems" },
];

// ── Client Use Cases ─────────────────────────────────────────────────────
const CLIENT_USE_CASES = [
  { sector: "Luxury real estate developer- Golf Course Road", automation: "NRI buyer WhatsApp management + payment milestone automation", result: "NRI conversion 2.5x. Milestone payment on-time +38%." },
  { sector: "InsurTech startup- Cyber City", automation: "Policy renewal WhatsApp sequence + claims chatbot", result: "Renewal rate +28%. Claims initiation time -60%." },
  { sector: "Premium hospital- Sector 44", automation: "Appointment automation for 12 departments + health package promotion", result: "No-show -35%. Health package revenue +22%." },
  { sector: "B2B SaaS company- MG Road", automation: "Trial signup chatbot + renewal reminder + upsell flow", result: "Trial-to-paid conversion +35%. Renewal rate +28%." },
  { sector: "Staffing company- Udyog Vihar", automation: "Candidate sourcing chatbot + interview scheduling automation", result: "Time-to-shortlist -60%. Candidate NPS +25 points." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "What is the best WhatsApp API provider in Gurgaon?",
    a: "Get Click Media is among the most established WhatsApp API providers serving Gurgaon- as an official Meta BSP with India-based support and enterprise integration capabilities. GCM's strength in B2B WhatsApp automation and CRM integration makes it particularly suitable for Gurgaon's corporate and startup ecosystem.",
  },
  {
    q: "Can Gurgaon startups use WhatsApp API for B2B lead generation?",
    a: "Yes. WhatsApp B2B lead generation works well for SaaS, fintech, and professional services companies in Gurgaon. The most common approach: CTWA (Click-to-WhatsApp) LinkedIn or Facebook ads drive prospects into a WhatsApp chatbot that qualifies budget, timeline, and company size- routing sales-ready leads to a sales rep. Get Click Media has deployed this flow for multiple Gurgaon B2B companies.",
  },
  {
    q: "Does WhatsApp API work for luxury real estate in Gurgaon?",
    a: "Yes- and it works particularly well. Gurgaon's high-net-worth buyers and NRI investors are highly active on WhatsApp. WhatsApp enables: instant property enquiry response, virtual tour video delivery, payment milestone reminders for Rs 3-10 crore transactions, and NRI documentation support. GCM's Sell.do CRM integration is used by multiple Golf Course Road developers.",
  },
  {
    q: "How does WhatsApp API pricing compare between Gurgaon and other cities?",
    a: "WhatsApp API pricing is uniform across India- the same Meta conversation rates apply in Gurgaon, Delhi, Mumbai, or any other city. Get Click Media's platform fee is also India-wide. There is no city-specific surcharge for Gurgaon.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Delhi", href: "/whatsapp-api-delhi" },
  { label: "WhatsApp API Noida", href: "/whatsapp-api-noida" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIGurgaonPage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Gurgaon"
      heroEyebrow="WhatsApp Business API Gurgaon"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Gurgaon- Official Meta BSP"
      heroDescription={
        <>
          Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta
          Business Solution Provider. Gurgaon&apos;s startup ecosystem, corporate headquarters, luxury
          real estate market, and premium healthcare providers are the leading WhatsApp API adopters in
          the city.
          <strong className="text-gray-900"> GCM delivers 3 to 5 day onboarding with full CRM and OMS integration.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Gurgaon businesses- rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · Enterprise CRM/OMS integration · India-based support"
      stats={[
        { value: "5,000+", label: "Tech startups headquartered in Gurgaon" },
        { value: "B2B-heavy", label: "Gurgaon's distinctive WhatsApp API profile" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "NCR", label: "GCM base- full Gurgaon coverage" },
      ]}
      aeoParagraphs={[
        "Get Click Media provides WhatsApp Business API in Gurgaon (Gurugram) as an official Meta Business Solution Provider. Gurgaon's startup ecosystem, corporate headquarters, luxury real estate market, and premium healthcare providers are the leading WhatsApp API adopters in the city. GCM delivers 3 to 5 day WhatsApp API onboarding for Gurgaon businesses with full CRM and OMS integration capabilities.",
        "Gurgaon is India's startup capital- home to over 5,000 tech startups, hundreds of Fortune 500 Indian headquarters (Cyber City, DLF buildings, Golf Course Road), and a high-income consumer base that expects digital-first engagement. The city's concentration of fintech, EdTech, SaaS, real estate, and premium retail makes it one of India's most active WhatsApp API markets.",
        "Gurgaon's business profile is distinctly B2B-heavy- a significant proportion of WhatsApp API deployments in Gurgaon involve B2B lead generation, enterprise sales automation, and professional services communication alongside the consumer-facing applications dominant in other Indian cities.",
      ]}
      whyCity={{
        eyebrow: "Why Gurgaon Businesses Choose WhatsApp API",
        title: "A B2B-heavy market built for WhatsApp automation",
        description:
          "Gurgaon's business landscape is shaped by a digital-first consumer base- smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Gurgaon report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Cpu, title: "India's startup capital", desc: "Over 5,000 tech startups headquartered in Gurgaon, running B2B WhatsApp lead generation and sales automation." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Gurgaon businesses." },
          { icon: Building2, title: "Hundreds of corporate headquarters", desc: "Cyber City, DLF buildings, and Golf Course Road house major Indian corporate and MNC offices with high-value B2B audiences." },
          { icon: MapPinned, title: "GCM serves Gurgaon from our NCR base", desc: "The same 3-5 day onboarding and enterprise integration depth larger providers charge a premium for." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Gurgaon",
        title: "Get Click Media's WhatsApp API Service in Gurgaon",
        description: (
          <>
            Get Click Media serves Gurgaon businesses from our NCR base- providing the same 3-5 day
            onboarding, India-based support, and enterprise integration capabilities that larger WhatsApp
            API providers offer at premium pricing. Gurgaon clients particularly value GCM&apos;s
            <strong className="text-gray-900"> depth in B2B WhatsApp automation and CRM integration</strong>-
            the dominant use cases for Gurgaon&apos;s corporate and startup ecosystem.
          </>
        ),
        image: "/images/rcs/rcs-service-provider-india.png",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Faridabad", "Manesar", "Sohna", "Palwal", "Rewari", "Golf Course Road", "DLF Phase 1-5", "Cyber City", "Udyog Vihar", "Palam Vihar", "South City"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Gurgaon business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and enterprise CRM integration- most Gurgaon businesses go live within 3 to 5 business days."
      schema={schema}
    />
  );
}
