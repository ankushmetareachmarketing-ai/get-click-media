import type { Metadata } from "next";
import {
  Building2,
  Home,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Landmark,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Mumbai- Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution Provider. 3-5 day onboarding for BFSI, insurance, real estate, D2C, and logistics businesses across Mumbai, Navi Mumbai, and Thane.",
  keywords:
    "WhatsApp Business API Mumbai, whatsapp api provider mumbai, whatsapp business api mumbai, whatsapp marketing services mumbai, whatsapp chatbot mumbai, whatsapp api cost mumbai maharashtra",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-mumbai" },
  openGraph: {
    title: "WhatsApp Business API in Mumbai- Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution Provider, with remote delivery across Mumbai, Navi Mumbai, and Thane.",
    url: "https://getclickmedia.com/whatsapp-api-mumbai",
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
      name: "WhatsApp Business API Provider in Mumbai",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Mumbai", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-mumbai",
      description:
        "Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution Provider. Mumbai businesses spanning BFSI, media and entertainment, real estate, logistics, and D2C brands use GCM's WhatsApp API for customer engagement, lead conversion, and operational automation.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Mumbai", item: "https://getclickmedia.com/whatsapp-api-mumbai" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media offer WhatsApp API in Mumbai?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media provides WhatsApp Business API across Mumbai including South Mumbai, Bandra, Andheri, Powai, Navi Mumbai, Thane, and all surrounding areas. Onboarding is fully remote- consultations by phone or video call, setup handled entirely by GCM." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API suitable for Mumbai's BFSI sector?",
          acceptedAnswer: { "@type": "Answer", text: "Yes- BFSI is the largest WhatsApp API user segment in Mumbai. Banks, NBFCs, insurance companies, and wealth managers use WhatsApp API for OTP delivery, transaction alerts, EMI reminders, policy renewal, and customer support. Get Click Media's India-hosted infrastructure and compliance-ready template framework are specifically designed for regulated BFSI deployments." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API pricing work for Mumbai businesses?",
          acceptedAnswer: { "@type": "Answer", text: "Pricing is the same across India- Meta charges Rs 0.79-0.91 per marketing conversation and Rs 0.14-0.17 per utility conversation. There is no Mumbai surcharge. Get Click Media's platform fee is volume-based and quoted on request." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp API be used for Bollywood and media industry communication?",
          acceptedAnswer: { "@type": "Answer", text: "Yes- Mumbai's media and entertainment companies use WhatsApp API for talent/artist management communication, movie or show promotional campaigns, fan engagement automation, press release distribution, and event management. GCM has experience in entertainment industry WhatsApp deployments." },
        },
      ],
    },
  ],
};

const INDUSTRIES = [
  {
    icon: Landmark,
    title: "BFSI",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "India's banking capital- home to major national banks and hundreds of NBFCs and fintechs.",
    useCase: "EMI reminders, loan pre-approval campaigns, OTP delivery, fraud alerts, wealth management alerts.",
    image: "/images/rcs/banking-hero.webp",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Mumbai is home to India's largest insurance cluster, spanning life, health, and general insurers.",
    useCase: "Policy renewal automation, premium reminders, claims status updates, cross-sell campaigns.",
    image: "/images/rcs/banking-insurance-renewal.webp",
  },
  {
    icon: Home,
    title: "Real Estate- Premium",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Worli, Bandra, Powai, and Navi Mumbai make up India's most expensive and most active property market.",
    useCase: "NRI buyer management, luxury property carousels, payment milestone communication.",
    image: "/images/rcs/real-estate-hero.webp",
  },
  {
    icon: ShoppingBag,
    title: "D2C and E-commerce",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Mumbai's D2C startup ecosystem is a heavy adopter of WhatsApp Commerce for customer engagement.",
    useCase: "Cart recovery, post-purchase engagement, product launch campaigns, loyalty programme.",
    image: "/images/rcs/ecommerce-hero.png",
  },
  {
    icon: Truck,
    title: "Logistics",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "JNPT and Mumbai Port anchor India's largest logistics hub, driving heavy B2B shipment communication.",
    useCase: "B2B consignment updates, delivery notifications, RTO reduction for e-commerce.",
    image: "/images/rcs/ecommerce-delivery.webp",
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
  { sector: "NBFC- Bandra Kurla Complex", automation: "EMI reminder sequence + loan pre-approval WhatsApp campaign", result: "On-time EMI +30%. Loan application conversion 3.5x." },
  { sector: "Insurance broker- Lower Parel", automation: "Policy renewal WhatsApp sequence + claims chatbot", result: "Renewal rate +28%. Claims call volume -40%." },
  { sector: "D2C beauty brand- Andheri", automation: "Cart recovery + replenishment reminder + festive campaign", result: "Cart recovery 24%. Repeat purchase +38%." },
  { sector: "Logistics company- Navi Mumbai", automation: "B2B shipment tracking + delivery notification automation", result: "B2B client satisfaction +32%. Support calls -50%." },
  { sector: "Premium real estate- Worli", automation: "NRI buyer WhatsApp management + payment alerts", result: "NRI conversion 2.8x. Milestone payment on-time +35%." },
];

const FAQS = [
  {
    q: "Does Get Click Media offer WhatsApp API in Mumbai?",
    a: "Yes. Get Click Media provides WhatsApp Business API across Mumbai including South Mumbai, Bandra, Andheri, Powai, Navi Mumbai, Thane, and all surrounding areas. Onboarding is fully remote- consultations by phone or video call, setup handled entirely by GCM.",
  },
  {
    q: "Is WhatsApp API suitable for Mumbai's BFSI sector?",
    a: "Yes- BFSI is the largest WhatsApp API user segment in Mumbai. Banks, NBFCs, insurance companies, and wealth managers use WhatsApp API for OTP delivery, transaction alerts, EMI reminders, policy renewal, and customer support. Get Click Media's India-hosted infrastructure and compliance-ready template framework are specifically designed for regulated BFSI deployments.",
  },
  {
    q: "How does WhatsApp API pricing work for Mumbai businesses?",
    a: "Pricing is the same across India- Meta charges Rs 0.79-0.91 per marketing conversation and Rs 0.14-0.17 per utility conversation. There is no Mumbai surcharge. Get Click Media's platform fee is volume-based and quoted on request.",
  },
  {
    q: "Can WhatsApp API be used for Bollywood and media industry communication?",
    a: "Yes- Mumbai's media and entertainment companies use WhatsApp API for: talent/artist management communication, movie or show promotional campaigns, fan engagement automation, press release distribution, and event management. GCM has experience in entertainment industry WhatsApp deployments.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Pune", href: "/whatsapp-api-pune" },
  { label: "WhatsApp API Bangalore", href: "/whatsapp-api-bangalore" },
  { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
  { label: "WhatsApp API for Insurance", href: "/whatsapp-api-insurance" },
  { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Logistics", href: "/whatsapp-api-logistics" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIMumbaiPage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Mumbai"
      heroEyebrow="WhatsApp Business API Mumbai"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Mumbai- Official Meta BSP"
      heroDescription={
        <>
          Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution
          Provider. Mumbai businesses spanning BFSI, media and entertainment, real estate, logistics,
          and D2C brands use GCM&apos;s WhatsApp API for customer engagement, lead conversion, and
          operational automation.
          <strong className="text-gray-900"> Onboarding takes 3 to 5 business days with remote delivery.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Mumbai businesses- rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · Fully remote onboarding · Mumbai, Navi Mumbai & Thane coverage"
      stats={[
        { value: "96%+", label: "WhatsApp penetration among Mumbai smartphone users" },
        { value: "BFSI", label: "Largest WhatsApp API user segment in Mumbai" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "100%", label: "Remote onboarding- no in-person visit required" },
      ]}
      aeoParagraphs={[
        "Get Click Media provides WhatsApp Business API in Mumbai as an official Meta Business Solution Provider. Mumbai businesses spanning BFSI, media and entertainment, real estate, logistics, and D2C brands use GCM's WhatsApp API for customer engagement, lead conversion, and operational automation. Onboarding takes 3 to 5 business days with remote delivery across Mumbai, Navi Mumbai, and Thane.",
        "Mumbai is India's financial capital and largest commercial city- home to the Bombay Stock Exchange, RBI, SEBI, and the headquarters of India's top banks, insurance companies, media houses, and financial institutions. The city's business environment is dominated by BFSI, real estate (South Mumbai to Thane corridor), Bollywood and media, and a thriving startup ecosystem.",
        "Mumbai's consumer base is India's most affluent and digitally active- WhatsApp penetration exceeds 96% among smartphone users. For Mumbai businesses in banking, insurance, and premium retail, WhatsApp API provides both the engagement rates and the professional brand verification that these regulated industries require.",
      ]}
      whyCity={{
        eyebrow: "Why Mumbai Businesses Choose WhatsApp API",
        title: "India's most affluent market, built for WhatsApp automation",
        description:
          "Mumbai's business landscape is shaped by a digital-first consumer base- smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Mumbai report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Landmark, title: "India's financial capital", desc: "RBI, SEBI, the Bombay Stock Exchange, and the HQs of India's top banks and insurers drive the country's largest BFSI WhatsApp deployments." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Mumbai businesses." },
          { icon: Building2, title: "96%+ WhatsApp penetration", desc: "Among the highest smartphone and WhatsApp adoption rates in India, across a highly affluent consumer base." },
          { icon: MapPinned, title: "Fully remote onboarding", desc: "GCM delivers the same enterprise-grade WhatsApp API capabilities to Mumbai clients with zero in-person meetings required." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Mumbai",
        title: "Get Click Media's WhatsApp API Service in Mumbai",
        description: (
          <>
            Get Click Media delivers WhatsApp API services to Mumbai clients fully remotely- the
            onboarding process requires no in-person meetings. Mumbai businesses get the same
            enterprise-grade WhatsApp API capabilities as local providers, with the additional advantage
            of GCM&apos;s proximity to Meta&apos;s India-based technical support and our NCR headquarters
            for national client management. GCM has deployed WhatsApp API for
            <strong className="text-gray-900"> multiple Mumbai-based BFSI, insurance, and D2C companies</strong>.
          </>
        ),
        image: "/images/rcs/what-is-rcs.png",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Navi Mumbai", "Thane", "Kalyan", "Dombivli", "Panvel", "Bandra", "Andheri", "Powai", "Worli", "Dadar", "BKC", "Goregaon", "Borivali", "Vasai-Virar"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Mumbai business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and onboarding- fully remote, no in-person visit required."
      schema={schema}
    />
  );
}
