import type { Metadata } from "next";
import {
  Palmtree,
  Gem,
  Home,
  Stethoscope,
  ShoppingBag,
  Languages,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Jaipur- Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business Solution Provider. 3-5 day onboarding with Hindi-language chatbot support for Jaipur's tourism, jewellery, real estate, and healthcare businesses.",
  keywords:
    "WhatsApp Business API Jaipur, whatsapp api provider jaipur, whatsapp business api jaipur, whatsapp marketing jaipur, whatsapp chatbot jaipur, whatsapp api service rajasthan",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-jaipur" },
  openGraph: {
    title: "WhatsApp Business API in Jaipur- Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business Solution Provider, with Hindi-language chatbot support for Jaipur businesses.",
    url: "https://getclickmedia.com/whatsapp-api-jaipur",
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
      name: "WhatsApp Business API Provider in Jaipur",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Jaipur", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-jaipur",
      description:
        "Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business Solution Provider. Jaipur's tourism and hospitality sector, jewellery and handicraft exports, real estate market, and growing IT presence are the primary WhatsApp API use cases in the city.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Jaipur", item: "https://getclickmedia.com/whatsapp-api-jaipur" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media support Hindi-language WhatsApp chatbots for Jaipur businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Hindi is GCM's primary non-English chatbot language- essential for Jaipur's broad consumer market. GCM's chatbot platform processes Hindi messages naturally (Devanagari script and Hinglish) and responds in Hindi. For tourism businesses, bilingual Hindi-English chatbots are configured for domestic and international tourist segments." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API help Jaipur's tourism and hospitality businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Jaipur receives 2 crore+ tourists annually- and WhatsApp is the primary communication channel for tourism businesses. Hotels use WhatsApp for booking confirmation delivery, check-in instructions, local experience recommendations, sightseeing booking, and post-stay review requests. Travel agencies use WhatsApp for tour enquiry handling, itinerary delivery, and in-trip support. GCM has pre-built tourism industry templates for Jaipur hotels and travel agencies." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp API be used for Jaipur's jewellery export business?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Jaipur's jewellery exporters use WhatsApp for international buyer communication (order status, shipment tracking, quality report delivery), domestic retailer communication (new collection alerts, scheme announcements), and custom jewellery design consultation (image-based WhatsApp consultation). GCM provides both English (for international buyers) and Hindi (for domestic retailers) WhatsApp communication flows." },
        },
        {
          "@type": "Question",
          name: "What is WhatsApp API pricing for Jaipur businesses?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp API pricing is uniform across India- Jaipur, Delhi, Mumbai, and all other cities have the same rates: marketing Rs 0.79-0.91 per conversation, utility Rs 0.14-0.17 per conversation, first 1,000 service conversations free. Get Click Media's platform fee is based on volume. Contact for a custom quote for your Jaipur business." },
        },
      ],
    },
  ],
};

const INDUSTRIES = [
  {
    icon: Palmtree,
    title: "Tourism and Hospitality",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Heritage hotels, travel agencies, and RTDC serve the 2 crore+ tourists Jaipur receives annually.",
    useCase: "Tourist enquiry chatbot, hotel booking confirmation, sightseeing itinerary delivery, TripAdvisor review collection.",
    image: "/images/industries/hospitality.webp",
  },
  {
    icon: Gem,
    title: "Jewellery and Gems",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Johri Bazaar and Sireh Deori anchor the world's largest gemstone cutting and polishing hub.",
    useCase: "International buyer communication, order status updates, custom jewellery design consultation via WhatsApp.",
    image: "/images/industries/fashion.webp",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Vaishali Nagar, Jagatpura, and the Ajmer Road corridor are seeing rapid residential growth.",
    useCase: "Portal lead qualification in Hindi, site visit booking, payment milestone reminders.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Major healthcare providers in Jaipur need Hindi-first communication for their broad patient base.",
    useCase: "Hindi appointment reminders, lab reports, prescription refills for Hindi-speaking patients.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: ShoppingBag,
    title: "Retail and Handicrafts",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Bapu Bazaar and Johari Bazaar serve both domestic and international handicraft buyers.",
    useCase: "Festival offer campaigns in Hindi, new collection alerts, export buyer communication in English.",
    image: "/images/industries/retail.webp",
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
  { sector: "Heritage hotel- Civil Lines", automation: "Tourist enquiry chatbot + booking confirmation + itinerary delivery", result: "Booking conversion 2.8x. TripAdvisor reviews +400%." },
  { sector: "Jewellery exporter- Johri Bazaar", automation: "International buyer order tracking + WhatsApp design consultation", result: "Order queries -50%. International buyer satisfaction +35%." },
  { sector: "Real estate developer- Vaishali Nagar", automation: "Hindi-language lead qualification + site visit automation", result: "Lead response time: hours to 2 min. Conversion 3x." },
  { sector: "Multi-speciality hospital- MI Road", automation: "Hindi appointment reminders + lab report delivery", result: "No-show -38%. Prescription adherence +28%." },
  { sector: "Handicraft exporter- EPIP zone", automation: "B2B order status + payment reminders for export clients", result: "Order query calls -60%. Payment on time +32%." },
];

const FAQS = [
  {
    q: "Does Get Click Media support Hindi-language WhatsApp chatbots for Jaipur businesses?",
    a: "Yes. Hindi is GCM's primary non-English chatbot language- essential for Jaipur's broad consumer market. GCM's chatbot platform processes Hindi messages naturally (Devanagari script and Hinglish) and responds in Hindi. For tourism businesses, bilingual Hindi-English chatbots are configured for domestic and international tourist segments.",
  },
  {
    q: "How does WhatsApp API help Jaipur's tourism and hospitality businesses?",
    a: "Jaipur receives 2 crore+ tourists annually- and WhatsApp is the primary communication channel for tourism businesses. Hotels use WhatsApp for: booking confirmation delivery, check-in instructions, local experience recommendations, sightseeing booking, and post-stay review requests. Travel agencies use WhatsApp for tour enquiry handling, itinerary delivery, and in-trip support. GCM has pre-built tourism industry templates for Jaipur hotels and travel agencies.",
  },
  {
    q: "Can WhatsApp API be used for Jaipur's jewellery export business?",
    a: "Yes. Jaipur's jewellery exporters use WhatsApp for international buyer communication (order status, shipment tracking, quality report delivery), domestic retailer communication (new collection alerts, scheme announcements), and custom jewellery design consultation (image-based WhatsApp consultation). GCM provides both English (for international buyers) and Hindi (for domestic retailers) WhatsApp communication flows.",
  },
  {
    q: "What is WhatsApp API pricing for Jaipur businesses?",
    a: "WhatsApp API pricing is uniform across India- Jaipur, Delhi, Mumbai, and all other cities have the same rates: marketing Rs 0.79-0.91 per conversation, utility Rs 0.14-0.17 per conversation, first 1,000 service conversations free. Get Click Media's platform fee is based on volume. Contact for a custom quote for your Jaipur business.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Delhi", href: "/whatsapp-api-delhi" },
  { label: "WhatsApp API for Travel", href: "/whatsapp-api-travel" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIJaipurPage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Jaipur"
      heroEyebrow="WhatsApp Business API Jaipur"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Jaipur- Official Meta BSP"
      heroDescription={
        <>
          Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business
          Solution Provider. Jaipur&apos;s tourism and hospitality sector, jewellery and handicraft
          exports, real estate market, and growing IT presence are the primary WhatsApp API use cases
          in the city.
          <strong className="text-gray-900"> GCM delivers 3 to 5 day onboarding with Hindi-language chatbot support.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Jaipur businesses- rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · Hindi-language chatbot support · India-based support"
      stats={[
        { value: "2 crore+", label: "Tourists visiting Jaipur annually" },
        { value: "#1", label: "World's largest gemstone cutting hub" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "Hindi", label: "Chatbot support for Jaipur's broad market" },
      ]}
      aeoParagraphs={[
        "Get Click Media provides WhatsApp Business API in Jaipur as an official Meta Business Solution Provider. Jaipur's tourism and hospitality sector, jewellery and handicraft exports, real estate market, and growing IT presence are the primary WhatsApp API use cases in the city. GCM delivers 3 to 5 day onboarding for Jaipur businesses with Hindi-language chatbot support.",
        "Jaipur- the Pink City- is Rajasthan's commercial capital and one of India's most visited tourist destinations. The city's economy is driven by tourism and hospitality, jewellery (Jaipur is the world's largest gemstone cutting and polishing centre), textile exports, and a growing IT and startup ecosystem in areas like Malviya Nagar and EPIP.",
        "Jaipur's business community is increasingly digital- the city's smartphone penetration and WhatsApp adoption have grown rapidly with Rajasthan's improving digital infrastructure. Hindi-language WhatsApp communication is essential for reaching Jaipur's broad consumer base beyond the tourist segment.",
      ]}
      whyCity={{
        eyebrow: "Why Jaipur Businesses Choose WhatsApp API",
        title: "A tourism-and-export-driven market built for WhatsApp automation",
        description:
          "Jaipur's business landscape is shaped by a digital-first consumer base- smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Jaipur report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Palmtree, title: "2 crore+ annual tourists", desc: "Heritage hotels and travel agencies rely on WhatsApp as the primary tourist communication channel." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Jaipur businesses." },
          { icon: Languages, title: "Hindi-language chatbot support", desc: "Essential for reaching Jaipur's broad consumer base beyond the tourist and export segments." },
          { icon: MapPinned, title: "World's largest gemstone hub", desc: "Johri Bazaar's jewellery exporters use WhatsApp for both international buyer and domestic retailer communication." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Jaipur",
        title: "Get Click Media's WhatsApp API Service in Jaipur",
        description: (
          <>
            Get Click Media provides WhatsApp API to Jaipur businesses with strong
            <strong className="text-gray-900"> Hindi-language chatbot capabilities</strong>- essential
            for Jaipur&apos;s broad consumer market. GCM&apos;s tourism industry WhatsApp templates and
            jewellery export communication flows are specifically designed for Jaipur&apos;s unique
            business sectors.
          </>
        ),
        image: "/images/rcs/banking-why-rcs.webp",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Ajmer", "Alwar", "Bhilwara", "Kota", "Sikar", "Jodhpur", "Bikaner", "Vaishali Nagar", "Jagatpura", "Sanganer", "Bagru", "Malviya Nagar"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Jaipur business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and Hindi-language chatbot setup- fully remote, no in-person visit required."
      schema={schema}
    />
  );
}
