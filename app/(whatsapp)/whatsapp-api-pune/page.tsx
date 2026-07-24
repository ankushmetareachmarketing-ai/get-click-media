import type { Metadata } from "next";
import {
  Code2,
  Car,
  GraduationCap,
  Stethoscope,
  Home,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Pune- Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution Provider. 3-5 day onboarding with Salesforce, HubSpot, and custom CRM integrations for Pune's IT, automotive, education, and healthcare businesses.",
  keywords:
    "WhatsApp Business API Pune, whatsapp api provider pune, whatsapp business api pune, whatsapp marketing pune, whatsapp chatbot pune, whatsapp api service pune maharashtra",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-pune" },
  openGraph: {
    title: "WhatsApp Business API in Pune- Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution Provider, with 3-5 day onboarding for Pune's IT, automotive, education, and healthcare businesses.",
    url: "https://getclickmedia.com/whatsapp-api-pune",
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
      name: "WhatsApp Business API Provider in Pune",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Pune", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-pune",
      description:
        "Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution Provider. Pune's IT and manufacturing industries, education sector, real estate growth, and healthcare network are the primary WhatsApp API segments in the city.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Pune", item: "https://getclickmedia.com/whatsapp-api-pune" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Get Click Media offer WhatsApp API in Pune?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media provides WhatsApp Business API across Pune including Hinjewadi, Magarpatta, Kharadi, Wakad, Baner, Koregaon Park, Viman Nagar, Kothrud, and Pimpri-Chinchwad. All onboarding is remote- no in-person requirement." },
        },
        {
          "@type": "Question",
          name: "What are the most common WhatsApp API use cases for Pune's IT companies?",
          acceptedAnswer: { "@type": "Answer", text: "Pune's IT companies use WhatsApp API most commonly for B2B lead qualification (chatbot on website or CTWA ads), candidate sourcing and interview scheduling for HR, client project milestone updates, and employee communication (leave approval, attendance, payslip). GCM integrates with Salesforce, HubSpot, and Zoho- the CRM platforms most used by Pune IT companies." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API benefit automotive dealers in Pune?",
          acceptedAnswer: { "@type": "Answer", text: "Pune's automotive dealers (two-wheelers and four-wheelers- Chakan is India's automotive hub) use WhatsApp for test drive booking, service reminders, new model launch campaigns, and vehicle delivery notifications. GCM's DMS integration connects with Automate and custom dealer management systems common in Pune's automotive dealerships." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp API used by Pune's educational institutions?",
          acceptedAnswer: { "@type": "Answer", text: "Yes- Pune's high density of engineering colleges, MBA institutions, and coaching institutes makes education one of the top WhatsApp API use cases in the city. Admission chatbot, fee reminders, exam schedule, and campus placement notifications via WhatsApp are common GCM deployments for Pune educational institutions." },
        },
      ],
    },
  ],
};

const INDUSTRIES = [
  {
    icon: Code2,
    title: "IT and Technology",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "Hinjewadi, Magarpatta, and Kharadi form major IT corridors housing global tech companies and hundreds more.",
    useCase: "B2B sales automation, support chatbot, HR communication, client project updates.",
    image: "/images/rcs/banking-dashboard.webp",
  },
  {
    icon: Car,
    title: "Automotive and Manufacturing",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Chakan and Pimpri-Chinchwad anchor India's automotive manufacturing corridor.",
    useCase: "Dealer communication, service reminder, parts inventory alerts, B2B supplier communication.",
    image: "/images/dashboard.png",
  },
  {
    icon: GraduationCap,
    title: "Education",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Pune has the highest engineering college density in India, alongside major universities and MBA institutions.",
    useCase: "Admission automation, fee reminders, exam notifications, campus placement WhatsApp flows.",
    image: "/images/rcs/education-hero.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Pune's major hospital groups need appointment and reporting workflows that scale beyond phone coordination.",
    useCase: "Appointment management, health check promotions, post-procedure follow-up.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    why: "Hinjewadi, Wakad, and Baner are seeing rapid residential development to house the growing IT workforce.",
    useCase: "Lead qualification, site visit booking, payment milestone communication.",
    image: "/images/rcs/real-estate-why-rcs.webp",
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
  { sector: "IT company- Hinjewadi", automation: "B2B lead qualification chatbot + Salesforce integration", result: "MQL-to-SQL 2.5x. Sales cycle -25%." },
  { sector: "Automotive dealer- Pimpri-Chinchwad", automation: "Test drive automation + service reminder", result: "Test drive +2.8x. Service retention +32%." },
  { sector: "Engineering college- Shivajinagar", automation: "Admission chatbot + fee collection + placement notification", result: "Admission conversion 3x. Fee on-time +40%." },
  { sector: "Multi-speciality hospital- Baner", automation: "Appointment automation + health check campaigns", result: "No-show -35%. Package revenue +28%." },
  { sector: "D2C startup- Koregaon Park", automation: "Cart recovery + festive campaign + loyalty", result: "Cart recovery 22%. Repeat purchase +35%." },
];

const FAQS = [
  {
    q: "Does Get Click Media offer WhatsApp API in Pune?",
    a: "Yes. Get Click Media provides WhatsApp Business API across Pune including Hinjewadi, Magarpatta, Kharadi, Wakad, Baner, Koregaon Park, Viman Nagar, Kothrud, and Pimpri-Chinchwad. All onboarding is remote- no in-person requirement.",
  },
  {
    q: "What are the most common WhatsApp API use cases for Pune's IT companies?",
    a: "Pune's IT companies use WhatsApp API most commonly for: B2B lead qualification (chatbot on website or CTWA ads), candidate sourcing and interview scheduling for HR, client project milestone updates, and employee communication (leave approval, attendance, payslip). GCM integrates with Salesforce, HubSpot, and Zoho- the CRM platforms most used by Pune IT companies.",
  },
  {
    q: "How does WhatsApp API benefit automotive dealers in Pune?",
    a: "Pune's automotive dealers (two-wheelers and four-wheelers- Chakan is India's automotive hub) use WhatsApp for test drive booking, service reminders, new model launch campaigns, and vehicle delivery notifications. GCM's DMS integration connects with Automate and custom dealer management systems common in Pune's automotive dealerships.",
  },
  {
    q: "Is WhatsApp API used by Pune's educational institutions?",
    a: "Yes- Pune's high density of engineering colleges, MBA institutions (Symbiosis, IIPM Pune), and coaching institutes makes education one of the top WhatsApp API use cases in the city. Admission chatbot, fee reminders, exam schedule, and campus placement notifications via WhatsApp are common GCM deployments for Pune educational institutions.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Mumbai", href: "/whatsapp-api-mumbai" },
  { label: "WhatsApp API Bangalore", href: "/whatsapp-api-bangalore" },
  { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
  { label: "WhatsApp API for Automobile", href: "/whatsapp-api-automobile" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIPunePage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Pune"
      heroEyebrow="WhatsApp Business API Pune"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Pune- Official Meta BSP"
      heroDescription={
        <>
          Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution
          Provider. Pune&apos;s IT and manufacturing industries, education sector, real estate growth, and
          healthcare network are the primary WhatsApp API segments in the city.
          <strong className="text-gray-900"> GCM delivers 3 to 5 day onboarding with Salesforce, HubSpot, and custom CRM integrations.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Pune businesses- rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · Salesforce & HubSpot ready · India-based support"
      stats={[
        { value: "#1", label: "Highest engineering college density in India" },
        { value: "3 corridors", label: "Hinjewadi, Magarpatta, Kharadi IT hubs" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "100%", label: "Remote onboarding- no in-person visit required" },
      ]}
      aeoParagraphs={[
        "Get Click Media provides WhatsApp Business API in Pune as an official Meta Business Solution Provider. Pune's IT and manufacturing industries, education sector (home to India's highest density of engineering colleges), real estate growth, and healthcare network are the primary WhatsApp API segments in the city. GCM delivers 3 to 5 day onboarding for Pune businesses with Salesforce, HubSpot, and custom CRM integrations.",
        "Pune is Maharashtra's second-largest city and one of India's fastest-growing IT destinations- with Hinjewadi, Magarpatta, and Kharadi forming major IT corridors housing TCS, Infosys, Wipro, and hundreds of tech companies. The city is also India's automotive hub (Chakan, Pimpri-Chinchwad) and has the highest density of engineering and management colleges in any Indian city.",
        "Pune's cosmopolitan, educated, and digitally active population makes it an ideal market for WhatsApp Business API- consumer engagement rates in Pune consistently match or exceed Mumbai and Bangalore for equivalent campaigns.",
      ]}
      whyCity={{
        eyebrow: "Why Pune Businesses Choose WhatsApp API",
        title: "A cosmopolitan, education-driven market for WhatsApp automation",
        description:
          "Pune's business landscape is shaped by a digital-first consumer base- smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Pune report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Code2, title: "Major IT and automotive hub", desc: "Hinjewadi, Magarpatta, and Kharadi's IT corridors alongside Chakan and Pimpri-Chinchwad's automotive manufacturing base drive heavy WhatsApp adoption." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Pune businesses." },
          { icon: GraduationCap, title: "India's highest engineering college density", desc: "COEP, PICT, Symbiosis, and Pune University drive one of the country's largest EdTech and admissions WhatsApp use cases." },
          { icon: MapPinned, title: "Fully remote onboarding", desc: "GCM delivers the same enterprise-grade WhatsApp API capabilities to Pune clients with zero in-person meetings required." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Pune",
        title: "Get Click Media's WhatsApp API Service in Pune",
        description: (
          <>
            Get Click Media provides WhatsApp API to Pune businesses remotely- full onboarding without
            in-person requirement. Pune&apos;s IT companies appreciate GCM&apos;s
            <strong className="text-gray-900"> developer-friendly API, comprehensive documentation, and
            pre-built integrations with Salesforce and HubSpot</strong>- the dominant CRM platforms in
            Pune&apos;s enterprise IT market.
          </>
        ),
        image: "/images/rcs/education-why-rcs.webp",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Hinjewadi", "Magarpatta", "Kharadi", "Wakad", "Baner", "Viman Nagar", "Kothrud", "Pimpri", "Chinchwad", "Chakan", "Lonavala", "Nashik", "Satara"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Pune business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and CRM integration- fully remote, no in-person visit required."
      schema={schema}
    />
  );
}
