import type { Metadata } from "next";
import {
  Shirt,
  Factory,
  Home,
  Stethoscope,
  Gem,
  Languages,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Ahmedabad- Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business Solution Provider. 3-5 day onboarding with Gujarati and Hindi chatbot support for Ahmedabad's textile, MSME, real estate, and diamond businesses.",
  keywords:
    "WhatsApp Business API Ahmedabad, whatsapp api provider ahmedabad, whatsapp business api ahmedabad, whatsapp marketing ahmedabad, whatsapp chatbot gujarat, whatsapp api service ahmedabad gujarat",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-ahmedabad" },
  openGraph: {
    title: "WhatsApp Business API in Ahmedabad- Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business Solution Provider, with Gujarati and Hindi language chatbot capabilities.",
    url: "https://getclickmedia.com/whatsapp-api-ahmedabad",
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
      name: "WhatsApp Business API Provider in Ahmedabad",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Ahmedabad", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-ahmedabad",
      description:
        "Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business Solution Provider. Ahmedabad's trading and MSME sector, textile and diamond industry, manufacturing, real estate, and healthcare are the primary WhatsApp API adopters.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Ahmedabad", item: "https://getclickmedia.com/whatsapp-api-ahmedabad" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media support Gujarati-language WhatsApp chatbots?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media supports Gujarati-language chatbots- understanding messages in Gujarati script and Gujarati-romanised text, and responding in Gujarati. For Ahmedabad's trading and MSME businesses where Gujarati is the primary business communication language, GCM configures bilingual Gujarati-Hindi or Gujarati-English chatbots." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API help Ahmedabad's MSME and manufacturing sector?",
          acceptedAnswer: { "@type": "Answer", text: "Ahmedabad's MSMEs use WhatsApp API for dealer and distributor communication (order confirmation, dispatch alert, payment reminder), supplier coordination (material availability, delivery schedule), GST invoice and payment confirmation delivery, and B2B customer support. GCM's manufacturing flows are built for the B2B communication patterns of Gujarat's industrial sector." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API suitable for textile traders in Ahmedabad?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Ahmedabad's textile trading community- one of the most WhatsApp-active B2B segments in India- uses WhatsApp API for fabric availability alerts to regular buyers, order confirmation and dispatch notification, payment reminder for credit buyers, new collection announcement with product images, and customer support for export inquiries. GCM has pre-built textile trade templates for Ahmedabad." },
        },
        {
          "@type": "Question",
          name: "Which Navratri campaign approach works best for Ahmedabad retail brands on WhatsApp?",
          acceptedAnswer: { "@type": "Answer", text: "Navratri is Ahmedabad's highest-revenue retail period. The most effective WhatsApp Navratri campaign approach: pre-Navratri teaser 3 days before with exclusive early access, Day 1 launch with full product carousel and offer, Day 5 mid-campaign update with bestsellers, Day 9 final push with countdown, and a post-Navratri thank you with next festival preview. GCM clients report 3x Navratri footfall vs non-campaign comparison." },
        },
      ],
    },
  ],
};

const INDUSTRIES = [
  {
    icon: Shirt,
    title: "Textiles and Apparel",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Kankaria, Sindhi Market, and Narol anchor India's textile trading hub.",
    useCase: "B2B buyer communication, fabric availability alerts, order confirmation, payment reminders for fabric traders.",
    image: "/images/industries/retail.webp",
  },
  {
    icon: Factory,
    title: "Manufacturing and MSME",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "GIDC Vatva, Naroda, and Odhav are major industrial areas driving Gujarat's manufacturing economy.",
    useCase: "Supplier order tracking, quality report delivery, dealer communication, GST invoice WhatsApp.",
    image: "/images/rcs/ecommerce-delivery.webp",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "SG Highway, Prahlad Nagar, and Satellite are seeing rapid residential and commercial growth.",
    useCase: "Lead qualification (Gujarati), site visit automation, payment milestone communication.",
    image: "/images/rcs/rcs-for-real-estate.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Major hospital groups in Ahmedabad need Gujarati-first communication for their broad patient base.",
    useCase: "Appointment management, lab reports, Gujarati-language patient communication.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Gem,
    title: "Diamond and Gems",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "The Surat-Ahmedabad corridor forms the world's diamond capital, processing the majority of global diamonds.",
    useCase: "International buyer communication, diamond parcel tracking, auction notification, trade communication.",
    image: "/images/industries/fashion.webp",
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
  { sector: "Textile trader- Kankaria", automation: "B2B WhatsApp for fabric availability + order confirmation + payment reminder", result: "Order query calls -55%. Payment default -28%." },
  { sector: "MSME manufacturer- Vatva", automation: "Dealer WhatsApp communication + payment reminders in Gujarati", result: "Dealer engagement +45%. Payment on-time +38%." },
  { sector: "Real estate developer- SG Highway", automation: "Gujarati-language lead qualification + site visit automation", result: "Site visit rate 3x. No-show -35%." },
  { sector: "Multi-speciality hospital- Satellite", automation: "Gujarati appointment reminders + lab report delivery", result: "No-show -35%. Lab call volume -60%." },
  { sector: "D2C brand- Prahlad Nagar", automation: "Cart recovery + festive campaign (Navratri, Diwali)", result: "Navratri campaign ROAS 24x. Cart recovery 21%." },
];

const FAQS = [
  {
    q: "Does Get Click Media support Gujarati-language WhatsApp chatbots?",
    a: "Yes. Get Click Media supports Gujarati-language chatbots- understanding messages in Gujarati script and Gujarati-romanised text, and responding in Gujarati. For Ahmedabad's trading and MSME businesses where Gujarati is the primary business communication language, GCM configures bilingual Gujarati-Hindi or Gujarati-English chatbots.",
  },
  {
    q: "How does WhatsApp API help Ahmedabad's MSME and manufacturing sector?",
    a: "Ahmedabad's MSMEs use WhatsApp API for: dealer and distributor communication (order confirmation, dispatch alert, payment reminder), supplier coordination (material availability, delivery schedule), GST invoice and payment confirmation delivery, and B2B customer support. GCM's manufacturing flows are built for the B2B communication patterns of Gujarat's industrial sector.",
  },
  {
    q: "Is WhatsApp API suitable for textile traders in Ahmedabad?",
    a: "Yes. Ahmedabad's textile trading community- one of the most WhatsApp-active B2B segments in India- uses WhatsApp API for: fabric availability alerts to regular buyers, order confirmation and dispatch notification, payment reminder for credit buyers, new collection announcement with product images, and customer support for export inquiries. GCM has pre-built textile trade templates for Ahmedabad.",
  },
  {
    q: "Which Navratri campaign approach works best for Ahmedabad retail brands on WhatsApp?",
    a: "Navratri is Ahmedabad's highest-revenue retail period. The most effective WhatsApp Navratri campaign approach: (1) Pre-Navratri teaser 3 days before (exclusive early access), (2) Day 1 launch with full product carousel and offer, (3) Day 5 mid-campaign update with bestsellers, (4) Day 9 final push with countdown, (5) Post-Navratri thank you with next festival preview. GCM clients report 3x Navratri footfall vs non-campaign comparison.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Mumbai", href: "/whatsapp-api-mumbai" },
  { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIAhmedabadPage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Ahmedabad"
      heroEyebrow="WhatsApp Business API Ahmedabad"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Ahmedabad- Official Meta BSP"
      heroDescription={
        <>
          Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business
          Solution Provider. Ahmedabad&apos;s trading and MSME sector, textile and diamond industry,
          manufacturing, real estate, and healthcare are the primary WhatsApp API adopters.
          <strong className="text-gray-900"> GCM delivers 3 to 5 day onboarding with Gujarati and Hindi chatbot capabilities.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Ahmedabad businesses- rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · Gujarati & Hindi chatbot support · India-based support"
      stats={[
        { value: "#1", label: "India's fastest-growing major city" },
        { value: "World's largest", label: "Diamond processing cluster (Surat-Ahmedabad)" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "Gujarati", label: "Chatbot support for Ahmedabad's trading community" },
      ]}
      aeoParagraphs={[
        "Get Click Media provides WhatsApp Business API in Ahmedabad as an official Meta Business Solution Provider. Ahmedabad's trading and MSME sector, textile and diamond industry, manufacturing, real estate, and healthcare are the primary WhatsApp API adopters. GCM delivers 3 to 5 day onboarding for Ahmedabad businesses with Gujarati and Hindi language chatbot capabilities.",
        "Ahmedabad is India's fastest-growing major city and Gujarat's commercial capital- home to one of India's most vibrant MSME sectors, the world's largest diamond processing cluster (Surat-Ahmedabad corridor), India's largest textile market (Kankaria Textiles, Sindhi Market), and a growing startup ecosystem in areas like SG Highway and Prahlad Nagar.",
        "Gujarat's business community is among India's most entrepreneurial- Ahmedabad businesses adopt WhatsApp Business API faster than the national average, driven by the state's digital-forward business culture and strong trading community that has historically adopted communication tools early.",
      ]}
      whyCity={{
        eyebrow: "Why Ahmedabad Businesses Choose WhatsApp API",
        title: "A trading-and-MSME-driven market built for WhatsApp automation",
        description:
          "Ahmedabad's business landscape is shaped by a digital-first consumer base- smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Ahmedabad report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Factory, title: "One of India's most vibrant MSME sectors", desc: "GIDC Vatva, Naroda, and Odhav drive heavy B2B WhatsApp adoption for dealer and supplier communication." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Ahmedabad businesses." },
          { icon: Languages, title: "Gujarati-language chatbot support", desc: "Essential for Ahmedabad's trading and MSME community, where business communication happens in Gujarati." },
          { icon: MapPinned, title: "World's largest diamond processing cluster", desc: "The Surat-Ahmedabad corridor drives international buyer and trade communication via WhatsApp." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Ahmedabad",
        title: "Get Click Media's WhatsApp API Service in Ahmedabad",
        description: (
          <>
            Get Click Media provides WhatsApp API to Ahmedabad businesses with
            <strong className="text-gray-900"> Gujarati-language chatbot support</strong>- essential for
            the city&apos;s trading and MSME community where business communication happens in Gujarati.
            GCM&apos;s B2B and manufacturing WhatsApp flows are specifically designed for Gujarat&apos;s
            trade-heavy business culture.
          </>
        ),
        image: "/images/rcs/banking-credit-score.webp",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Surat", "Vadodara", "Rajkot", "Gandhinagar", "Anand", "Nadiad", "Mehsana", "SG Highway", "Prahlad Nagar", "Satellite", "Narol", "Vatva", "Naroda"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Ahmedabad business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and Gujarati-language chatbot setup- fully remote, no in-person visit required."
      schema={schema}
    />
  );
}
