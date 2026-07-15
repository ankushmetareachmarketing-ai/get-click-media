import type { Metadata } from "next";
import {
  Building2,
  Home,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Truck,
  Users,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Delhi — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution Provider. 3-5 day onboarding, India-based support from Noida, and full Delhi NCR coverage for retail, healthcare, real estate, EdTech, and financial services.",
  keywords:
    "WhatsApp Business API Delhi, whatsapp api provider delhi, whatsapp business api delhi ncr, whatsapp marketing services delhi, whatsapp chatbot delhi, whatsapp api cost delhi",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-delhi" },
  openGraph: {
    title: "WhatsApp Business API in Delhi — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution Provider, with onboarding in 3-5 business days and full Delhi NCR coverage.",
    url: "https://getclickmedia.com/whatsapp-api-delhi",
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
      name: "WhatsApp Business API Provider in Delhi",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Delhi", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-delhi",
      description:
        "Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution Provider. Delhi businesses use GCM's WhatsApp API for lead generation, customer support automation, and marketing campaigns.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "Delhi", item: "https://getclickmedia.com/whatsapp-api-delhi" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Get Click Media available in Delhi?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media is headquartered in Noida and serves the entire Delhi NCR region. Onboarding is fully remote — you can start from anywhere in Delhi. For clients who prefer an in-person consultation, our Noida office is 30 minutes from most Delhi locations." },
        },
        {
          "@type": "Question",
          name: "What is the cost of WhatsApp Business API for a Delhi business?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp API pricing is the same across India. Meta charges marketing conversations at Rs 0.79-0.91 each, utility conversations at Rs 0.14-0.17 each, with the first 1,000 service conversations free per month. Get Click Media charges a platform fee based on your volume. Contact us for a custom quote for your Delhi business." },
        },
        {
          "@type": "Question",
          name: "How quickly can a Delhi business go live on WhatsApp API?",
          acceptedAnswer: { "@type": "Answer", text: "3 to 5 business days with Get Click Media managing the setup. The timeline depends on Meta's business verification (1-3 days) and template approval (1-3 days), which run in parallel — most Delhi businesses go live within 4 days." },
        },
        {
          "@type": "Question",
          name: "Which industries in Delhi use WhatsApp API the most?",
          acceptedAnswer: { "@type": "Answer", text: "Real estate (Delhi NCR property developers and brokers), EdTech and coaching institutes, healthcare (hospital chains and clinics), retail (Chandni Chowk, Karol Bagh, Lajpat Nagar traders), and NBFCs and microfinance companies." },
        },
      ],
    },
  ],
};

// ── Top Industries ──────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Delhi NCR is India's largest real estate market. Property enquiry volumes from portals are massive — a WhatsApp chatbot qualifies and routes leads instantly.",
    useCase: "Builders and brokers across Delhi NCR use WhatsApp for instant lead response and site visit booking.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Delhi has 50+ major hospital groups. Appointment management at this scale requires WhatsApp automation.",
    useCase: "Appointment reminders, lab report delivery, and prescription refills — all automated via WhatsApp.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: GraduationCap,
    title: "EdTech and Coaching",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Delhi is India's coaching capital (Karol Bagh, Rajinder Nagar, Mukherjee Nagar), with 1,000+ admission enquiries per institute daily.",
    useCase: "Instant admission chatbot, fee reminders, and exam schedules — GCM's most common Delhi use case.",
    image: "/images/industries/edtech.webp",
  },
  {
    icon: ShoppingBag,
    title: "Retail and Fashion",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Chandni Chowk, Karol Bagh, and Lajpat Nagar are major retail hubs with lakhs of customer touchpoints.",
    useCase: "Festive sale campaigns, loyalty updates, and new arrival alerts — a 3x footfall lift reported by Delhi retail clients.",
    image: "/images/industries/fashion.webp",
  },
  {
    icon: Truck,
    title: "Logistics and Courier",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Delhi is India's largest logistics hub, and last-mile delivery challenges are acute in the dense urban geography.",
    useCase: "Pre-delivery WhatsApp alerts reduce failed deliveries by 34% in Delhi operations.",
    image: "/images/rcs/ecommerce-delivery.webp",
  },
];

// ── GCM Capability Table ────────────────────────────────────────────────
const CAPABILITIES = [
  { label: "Onboarding timeline", value: "3 to 5 business days from consultation to first live WhatsApp message" },
  { label: "Meta BSP status", value: "Official Meta Business Solution Provider — GCM manages your full WhatsApp Business Account registration" },
  { label: "Local support", value: "India-based support team available 9 AM to 7 PM IST, Monday to Saturday. WhatsApp support available." },
  { label: "Pricing", value: "Same as national rates — marketing Rs 0.79-0.91/conv, utility Rs 0.14-0.17/conv. Platform fee based on volume." },
  { label: "Languages supported", value: "Hindi + English + regional language chatbot flows as required by your customer base" },
  { label: "Integration partners", value: "Shopify, WooCommerce, Salesforce, HubSpot, Zoho, LeadSquared, and custom systems" },
];

// ── Client Use Cases ─────────────────────────────────────────────────────
const CLIENT_USE_CASES = [
  { sector: "Real estate developer — South Delhi", automation: "WhatsApp chatbot for portal lead qualification + site visit booking", result: "Lead-to-visit conversion 3x. No-show rate -42%" },
  { sector: "Multi-speciality hospital — West Delhi", automation: "Appointment reminder + lab report delivery automation", result: "No-show -35%. Lab call volume -65%" },
  { sector: "UPSC coaching institute — Mukherjee Nagar", automation: "Admission enquiry chatbot + fee reminder sequence", result: "Enquiry conversion 3x. Fee collection on time +40%" },
  { sector: "D2C fashion brand — Lajpat Nagar", automation: "Cart recovery + order updates + festive campaigns", result: "Cart recovery 22%. Festive campaign ROAS 26x" },
  { sector: "NBFC — Connaught Place", automation: "EMI reminder sequence with Pay Now button", result: "On-time EMI payment +31%. Collections calls -45%" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is Get Click Media available in Delhi?",
    a: "Yes. Get Click Media is headquartered in Noida and serves the entire Delhi NCR region. Onboarding is fully remote — you can start from anywhere in Delhi. For clients who prefer an in-person consultation, our Noida office is 30 minutes from most Delhi locations.",
  },
  {
    q: "What is the cost of WhatsApp Business API for a Delhi business?",
    a: "WhatsApp API pricing is the same across India. Meta charges: marketing conversations Rs 0.79-0.91 each, utility Rs 0.14-0.17 each, first 1,000 service conversations free per month. Get Click Media charges a platform fee based on your volume. Contact us for a custom quote for your Delhi business.",
  },
  {
    q: "How quickly can a Delhi business go live on WhatsApp API?",
    a: "3 to 5 business days with Get Click Media managing the setup. The timeline depends on Meta's business verification speed (1-3 days) and your template approval (1-3 days). These run in parallel — most Delhi businesses go live within 4 days.",
  },
  {
    q: "Which industries in Delhi use WhatsApp API the most?",
    a: "Real estate (Delhi NCR property developers and brokers), EdTech and coaching institutes (largest coaching market in India), healthcare (large hospital chains and smaller clinics), retail (Chandni Chowk, Karol Bagh, Lajpat Nagar traders), and NBFCs and microfinance (significant financial services presence in Delhi).",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Noida", href: "/whatsapp-api-noida" },
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
export default function WhatsAppAPIDelhiPage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Delhi"
      heroEyebrow="WhatsApp Business API Delhi"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Delhi — Official Meta BSP"
      heroDescription={
        <>
          Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution
          Provider. Delhi businesses — spanning retail, healthcare, real estate, EdTech, and financial
          services — use GCM&apos;s WhatsApp API for lead generation, customer support automation, and
          marketing campaigns.
          <strong className="text-gray-900"> Onboarding takes 3 to 5 business days.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Delhi businesses — rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · Noida-based support · Full Delhi NCR coverage"
      stats={[
        { value: "200+", label: "Delhi NCR businesses served" },
        { value: "95%+", label: "Daily WhatsApp usage in Delhi NCR" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "Noida", label: "GCM headquarters, NCR" },
      ]}
      aeoParagraphs={[
        "Get Click Media provides WhatsApp Business API in Delhi as an official Meta Business Solution Provider. Delhi businesses — spanning retail, healthcare, real estate, EdTech, and financial services — use GCM's WhatsApp API for lead generation, customer support automation, and marketing campaigns. Onboarding takes 3 to 5 business days. GCM's support team is headquartered in Noida with full coverage across Delhi NCR.",
        "Delhi is India's commercial capital — home to over 1.5 lakh registered businesses spanning government, retail, healthcare, education, real estate, and technology sectors. The city's business density and highly connected consumer base make WhatsApp Business API one of the most impactful marketing investments for Delhi businesses of any size.",
        "Delhi NCR's WhatsApp adoption rate is among the highest in India — over 95% of smartphone users in the region use WhatsApp daily. For B2C businesses in Delhi, WhatsApp is not just a communication channel: it is the primary interface between business and customer.",
      ]}
      whyCity={{
        eyebrow: "Why Delhi Businesses Choose WhatsApp API",
        title: "A digital-first market built for WhatsApp automation",
        description:
          "Delhi's business landscape is shaped by a digital-first consumer base — smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Delhi report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Users, title: "95%+ daily WhatsApp usage in Delhi NCR", desc: "Among the highest adoption rates in India — WhatsApp is the primary customer interface for Delhi B2C businesses." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Delhi businesses." },
          { icon: Building2, title: "1.5 lakh+ registered businesses in Delhi", desc: "Spanning government, retail, healthcare, education, real estate, and technology sectors." },
          { icon: MapPinned, title: "GCM is based in nearby Noida", desc: "Local account management and the option of in-person onboarding consultations for Delhi clients." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Delhi",
        title: "Get Click Media's WhatsApp API Service in Delhi",
        description: (
          <>
            Get Click Media is headquartered in Noida, Uttar Pradesh — providing WhatsApp Business API
            services to businesses across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad, and the broader NCR
            region. Our proximity to Delhi gives Delhi clients faster response times and the option of
            in-person onboarding consultations. GCM has served <strong className="text-gray-900">200+ Delhi NCR businesses</strong> across
            retail, healthcare, real estate, EdTech, and financial services.
          </>
        ),
        image: "/images/whatsapp/direct-meta-partner.webp",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Noida", "Gurgaon", "Faridabad", "Ghaziabad", "Greater Noida", "Gurugram", "South Delhi", "West Delhi", "North Delhi", "East Delhi", "Dwarka", "Rohini", "Pitampura"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Delhi business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and onboarding — most Delhi businesses go live within 4 days."
      schema={schema}
    />
  );
}
