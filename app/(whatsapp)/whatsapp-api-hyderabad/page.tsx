import type { Metadata } from "next";
import {
  Building2,
  Code2,
  Pill,
  Home,
  Stethoscope,
  Gem,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Hyderabad- Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business Solution Provider. 3-5 day onboarding for Hyderabad's IT, pharma, real estate, and healthcare businesses across HITEC City, Gachibowli, and beyond.",
  keywords:
    "WhatsApp Business API Hyderabad, whatsapp api provider hyderabad, whatsapp business api hyderabad, whatsapp marketing hyderabad, whatsapp chatbot hyderabad, whatsapp api telangana",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-hyderabad" },
  openGraph: {
    title: "WhatsApp Business API in Hyderabad- Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business Solution Provider with 3-5 day onboarding for Hyderabad's tech-heavy business ecosystem.",
    url: "https://getclickmedia.com/whatsapp-api-hyderabad",
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
      name: "WhatsApp Business API Provider in Hyderabad",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Hyderabad", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-hyderabad",
      description:
        "Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business Solution Provider. Hyderabad's IT and pharma industries, real estate market, and healthcare sector are the primary WhatsApp API adopters in the city.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Hyderabad", item: "https://getclickmedia.com/whatsapp-api-hyderabad" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media serve Hyderabad businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media provides WhatsApp Business API across Hyderabad and Secunderabad- covering HITEC City, Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Shamshabad, and old Hyderabad. All onboarding is remote with no requirement for in-person meetings." },
        },
        {
          "@type": "Question",
          name: "What WhatsApp API use cases are most common for Hyderabad's pharmaceutical companies?",
          acceptedAnswer: { "@type": "Answer", text: "Pharmaceutical companies in Hyderabad use WhatsApp API for patient medication adherence reminders, pharmacy order management (prescription refill alerts), clinical trial participant communication, and HCP (healthcare professional) engagement for detailing and product launches. GCM implements DPDP-compliant patient communication flows for pharma clients." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API help real estate developers in Hyderabad's HITEC City corridor?",
          acceptedAnswer: { "@type": "Answer", text: "HITEC City's rapid real estate growth generates thousands of monthly enquiries from IT professionals. WhatsApp chatbot responds instantly to portal leads, qualifies budget and possession timeline, and books site visits. The tech-savvy buyer segment in HITEC City has above-average WhatsApp engagement rates- making it an ideal channel for property communication." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API cost-effective for small Hyderabad businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. For small businesses with modest message volumes, WhatsApp API is very affordable. Service conversations- where the customer messages first- are free for the first 1,000 per month. Utility conversations cost Rs 0.14-0.17 each. For a local Hyderabad business sending 500 messages per month, total Meta charges might be Rs 500-800. GCM's Starter plan is designed for small businesses." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Code2,
    title: "IT and Technology",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "HITEC City and Gachibowli house major global tech companies plus thousands of IT service companies.",
    useCase: "B2B sales chatbot, client project updates, IT support automation, developer community engagement.",
    image: "/images/rcs/banking-dashboard.webp",
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Genome Valley is India's pharma hub, home to major domestic pharmaceutical manufacturers.",
    useCase: "Patient adherence communication, pharmacy order management, clinical trial participant communication.",
    image: "/images/industries/finance.webp",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "The HITEC City corridor, Gachibowli, and Shamshabad are seeing rapid commercial and residential growth.",
    useCase: "Lead qualification, site visit automation, payment milestone communication.",
    image: "/images/rcs/rcs-for-real-estate.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Major hospital groups in Hyderabad need appointment and reporting workflows that scale beyond phone coordination.",
    useCase: "Appointment management, lab report delivery, patient follow-up automation.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Gem,
    title: "Jewellery and Traditional Retail",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Laad Bazaar and Abids are major traditional retail hubs with loyal, high-frequency customer bases.",
    useCase: "Festive campaigns, loyalty updates, product availability alerts, special occasion offers.",
    image: "/images/industries/fashion.webp",
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
  { sector: "IT services company- HITEC City", automation: "B2B lead qualification chatbot + client communication automation", result: "Demo bookings +50%. Client NPS +18 points." },
  { sector: "Pharma company- Genome Valley", automation: "Patient medication reminder + pharmacy order management", result: "Adherence rate +32%. Pharmacy reorder +28%." },
  { sector: "Real estate developer- Gachibowli", automation: "Lead qualification + payment milestone automation for IT corridor projects", result: "Site visit conversion 3x. Payment default -30%." },
  { sector: "Multi-speciality hospital- Banjara Hills", automation: "Appointment automation for 15 departments", result: "No-show -38%. Department utilisation +22%." },
  { sector: "Jewellery chain- Abids", automation: "Festive campaign + new collection alert + loyalty programme", result: "Festive revenue 2.8x. Loyalty engagement +55%." },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Does Get Click Media serve Hyderabad businesses?",
    a: "Yes. Get Click Media provides WhatsApp Business API across Hyderabad and Secunderabad- covering HITEC City, Gachibowli, Banjara Hills, Jubilee Hills, Madhapur, Shamshabad, and old Hyderabad. All onboarding is remote with no requirement for in-person meetings.",
  },
  {
    q: "What WhatsApp API use cases are most common for Hyderabad's pharmaceutical companies?",
    a: "Pharmaceutical companies in Hyderabad use WhatsApp API for: patient medication adherence reminders, pharmacy order management (prescription refill alerts), clinical trial participant communication, and HCP (healthcare professional) engagement for detailing and product launches. GCM implements DPDP-compliant patient communication flows for pharma clients.",
  },
  {
    q: "How does WhatsApp API help real estate developers in Hyderabad's HITEC City corridor?",
    a: "HITEC City's rapid real estate growth generates thousands of monthly enquiries from IT professionals. WhatsApp chatbot responds instantly to portal leads, qualifies budget and possession timeline, and books site visits. The tech-savvy buyer segment in HITEC City has above-average WhatsApp engagement rates- making it an ideal channel for property communication.",
  },
  {
    q: "Is WhatsApp API cost-effective for small Hyderabad businesses?",
    a: "Yes. For small businesses with modest message volumes, WhatsApp API is very affordable. Service conversations- where the customer messages first- are free for the first 1,000 per month. Utility conversations (transactional notifications) cost Rs 0.14-0.17 each. For a local Hyderabad business sending 500 messages per month, total Meta charges might be Rs 500-800. GCM's Starter plan is designed for small businesses.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Bangalore", href: "/whatsapp-api-bangalore" },
  { label: "WhatsApp API Chennai", href: "/whatsapp-api-chennai" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIHyderabadPage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Hyderabad"
      heroEyebrow="WhatsApp Business API Hyderabad"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Hyderabad- Official Meta BSP"
      heroDescription={
        <>
          Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business
          Solution Provider. Hyderabad&apos;s IT and pharma industries, real estate market (HITEC City
          to Shamshabad corridor), and healthcare sector are the primary WhatsApp API adopters in the
          city.
          <strong className="text-gray-900"> GCM delivers 3 to 5 day onboarding with integration support.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Hyderabad businesses- rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · HITEC City to Shamshabad coverage · India-based support"
      stats={[
        { value: "#2", label: "India's second-fastest-growing tech city" },
        { value: "Genome Valley", label: "India's pharmaceutical hub" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "100%", label: "Remote onboarding- no in-person visit required" },
      ]}
      aeoParagraphs={[
        "Get Click Media provides WhatsApp Business API in Hyderabad as an official Meta Business Solution Provider. Hyderabad's IT and pharma industries, real estate market (HITEC City to Shamshabad corridor), and healthcare sector are the primary WhatsApp API adopters in the city. GCM delivers 3 to 5 day onboarding with integration support for Hyderabad's tech-heavy business ecosystem.",
        "Hyderabad is India's second-fastest-growing tech city- HITEC City, Gachibowli, and Madhapur form a major IT corridor housing Microsoft India, Google India, Amazon, and thousands of IT companies. The city is also India's pharmaceutical hub (Genome Valley) and home to a rapidly growing startup ecosystem.",
        "Hyderabad's dual identity- traditional commerce in the old city (Charminar, Laad Bazaar) and modern tech in HITEC City- creates diverse WhatsApp API use cases from luxury real estate communication to pharma patient engagement and IT B2B sales automation.",
      ]}
      whyCity={{
        eyebrow: "Why Hyderabad Businesses Choose WhatsApp API",
        title: "A dual-identity market built for WhatsApp automation",
        description:
          "Hyderabad's business landscape is shaped by a digital-first consumer base- smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Hyderabad report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Code2, title: "Major IT and pharma hub", desc: "HITEC City's global tech companies and Genome Valley's pharma majors both run at-scale WhatsApp deployments." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Hyderabad businesses." },
          { icon: Building2, title: "Dual traditional and modern economy", desc: "From Laad Bazaar's traditional retail to HITEC City's B2B tech sales- WhatsApp adapts to both ends of Hyderabad's business spectrum." },
          { icon: MapPinned, title: "Fully remote onboarding", desc: "GCM delivers the same enterprise-grade WhatsApp API capabilities to Hyderabad clients with zero in-person meetings required." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Hyderabad",
        title: "Get Click Media's WhatsApp API Service in Hyderabad",
        description: (
          <>
            Get Click Media serves Hyderabad businesses remotely from our NCR headquarters- providing
            the same enterprise-grade WhatsApp API capabilities and integration depth that
            Hyderabad&apos;s tech-heavy businesses require. GCM&apos;s platform is trusted by
            <strong className="text-gray-900"> HITEC City IT companies for B2B automation</strong> and by
            Hyderabad&apos;s pharmaceutical companies for patient engagement communication.
          </>
        ),
        image: "/images/rcs/ecommerce-why-rcs.webp",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Secunderabad", "HITEC City", "Gachibowli", "Madhapur", "Banjara Hills", "Jubilee Hills", "Kondapur", "Kukatpally", "Miyapur", "LB Nagar", "Shamshabad", "Warangal"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Hyderabad business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and onboarding- fully remote, tailored to Hyderabad's IT and pharma-heavy business ecosystem."
      schema={schema}
    />
  );
}
