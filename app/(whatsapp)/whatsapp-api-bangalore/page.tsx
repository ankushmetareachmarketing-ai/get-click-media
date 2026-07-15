import type { Metadata } from "next";
import {
  Building2,
  Code2,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Users,
  MapPinned,
  TrendingUp,
} from "lucide-react";
import { CityPageTemplate } from "../_templates/city-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API in Bangalore — Official Meta BSP | Get Click Media",
  description:
    "Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business Solution Provider. 3-5 day onboarding with full REST API, webhook, and SDK access for Bangalore's startups, IT companies, and D2C brands.",
  keywords:
    "WhatsApp Business API Bangalore, whatsapp api provider bangalore, whatsapp business api bengaluru, whatsapp marketing bangalore, whatsapp chatbot bangalore, whatsapp api startup bangalore",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-bangalore" },
  openGraph: {
    title: "WhatsApp Business API in Bangalore — Official Meta BSP | Get Click Media",
    description:
      "Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business Solution Provider, with full API and integration access for Bangalore's tech ecosystem.",
    url: "https://getclickmedia.com/whatsapp-api-bangalore",
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
      name: "WhatsApp Business API Provider in Bangalore",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "City", name: "Bangalore", addressCountry: "IN" },
      serviceType: "WhatsApp Business API",
      url: "https://getclickmedia.com/whatsapp-api-bangalore",
      description:
        "Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business Solution Provider. Bangalore's tech startups, IT companies, healthcare providers, and D2C brands use GCM's WhatsApp API for customer onboarding, support automation, campaign management, and B2B lead generation.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API Bangalore", item: "https://getclickmedia.com/whatsapp-api-bangalore" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is WhatsApp Business API popular among Bangalore startups?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — Bangalore has among the highest WhatsApp API adoption rates among Indian startups. The developer-heavy culture means integrations are deeper and more custom than in other cities. Common Bangalore startup use cases include product onboarding chatbot, trial-to-paid conversion automation, B2B sales qualification, and customer support automation." },
        },
        {
          "@type": "Question",
          name: "Can developers in Bangalore integrate WhatsApp API with custom systems?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media provides full REST API access, webhook event documentation, code samples in Node.js, Python, PHP, and Java, and developer support for custom integrations. GCM's API is designed for developer-led implementations common in Bangalore's startup ecosystem." },
        },
        {
          "@type": "Question",
          name: "What WhatsApp API use cases are most common for Bangalore's EdTech companies?",
          acceptedAnswer: { "@type": "Answer", text: "EdTech companies in Bangalore most commonly use WhatsApp for course onboarding and first-week engagement, completion nudges for inactive learners, live class reminders, fee collection automation, and placement notification for job-focused programmes. GCM integrates with Moodle, Canvas, and custom LMS platforms used by Bangalore EdTech companies." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp API work for B2B sales in Bangalore's SaaS ecosystem?",
          acceptedAnswer: { "@type": "Answer", text: "Bangalore SaaS companies use WhatsApp for the full B2B sales cycle: CTWA LinkedIn ads drive trial signups, a chatbot qualifies company size, role, and use case, personalised demo booking follows, onboarding communication continues after trial signup, and renewal reminders use usage data. GCM deploys this flow with Salesforce, HubSpot, and custom CRM integrations." },
        },
      ],
    },
  ],
};

const INDUSTRIES = [
  {
    icon: Code2,
    title: "Tech Startups and SaaS",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    why: "India's startup capital — thousands of SaaS companies use WhatsApp for product onboarding, trial conversion, and customer support.",
    useCase: "Product trial chatbot, onboarding drip sequence, renewal automation, support ticket routing.",
    image: "/images/rcs/ecommerce-dashboard.png",
  },
  {
    icon: Building2,
    title: "IT Services and Outsourcing",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    why: "Bangalore's IT companies use WhatsApp for talent acquisition, client communication, and project management.",
    useCase: "Candidate screening chatbot, interview scheduling, client project update automation.",
    image: "/images/dashboard.png",
  },
  {
    icon: Stethoscope,
    title: "Healthcare and Biotech",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    why: "Major hospital chains and a thriving health-tech startup ecosystem drive Bangalore's WhatsApp healthcare adoption.",
    useCase: "Appointment management, health report delivery, pharma patient communication.",
    image: "/images/rcs/rcs-for-healthcare.webp",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    why: "Major national EdTech companies headquartered in Bangalore, plus hundreds of local coaching institutes, need scalable learner communication.",
    useCase: "Course onboarding, completion nudges, fee collection, instructor-student communication.",
    image: "/images/rcs/education-dashboard.webp",
  },
  {
    icon: ShoppingBag,
    title: "Retail and Food Delivery",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    why: "Bangalore's D2C brands, food tech companies, and premium retail rely on WhatsApp for order and loyalty communication.",
    useCase: "Order updates, cart recovery, restaurant order management, loyalty programmes.",
    image: "/images/industries/retail.webp",
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
  { sector: "SaaS startup — Koramangala", automation: "B2B trial onboarding chatbot + renewal reminder", result: "Trial-to-paid +35%. Churn reduced 28%." },
  { sector: "EdTech platform — Whitefield", automation: "Course completion nudge + fee collection automation", result: "Completion rate +45%. Fee on-time +42%." },
  { sector: "Healthcare tech company — HSR Layout", automation: "Patient engagement WhatsApp integration for partner hospitals", result: "No-show -32%. Patient satisfaction +20 points." },
  { sector: "D2C food brand — Indiranagar", automation: "Order tracking + cart recovery + replenishment", result: "Cart recovery 23%. Repeat purchase +32%." },
  { sector: "IT staffing company — Electronic City", automation: "Candidate sourcing chatbot + interview automation", result: "Sourcing time -50%. Interview show rate +38%." },
];

const FAQS = [
  {
    q: "Is WhatsApp Business API popular among Bangalore startups?",
    a: "Yes — Bangalore has among the highest WhatsApp API adoption rates among Indian startups. The developer-heavy culture means integrations are deeper and more custom than in other cities. Common Bangalore startup use cases include: product onboarding chatbot, trial-to-paid conversion automation, B2B sales qualification, and customer support automation.",
  },
  {
    q: "Can developers in Bangalore integrate WhatsApp API with custom systems?",
    a: "Yes. Get Click Media provides full REST API access, webhook event documentation, code samples in Node.js, Python, PHP, and Java, and developer support for custom integrations. GCM's API is designed for developer-led implementations common in Bangalore's startup ecosystem.",
  },
  {
    q: "What WhatsApp API use cases are most common for Bangalore's EdTech companies?",
    a: "EdTech companies in Bangalore most commonly use WhatsApp for: (1) course onboarding and first-week engagement, (2) completion nudges for inactive learners, (3) live class reminders, (4) fee collection automation, (5) placement notification for job-focused programmes. GCM integrates with Moodle, Canvas, and custom LMS platforms used by Bangalore EdTech companies.",
  },
  {
    q: "How does WhatsApp API work for B2B sales in Bangalore's SaaS ecosystem?",
    a: "Bangalore SaaS companies use WhatsApp for the full B2B sales cycle: (1) CTWA LinkedIn ads drive trial signups, (2) chatbot qualifies company size, role, and use case, (3) personalised demo booking, (4) onboarding communication after trial signup, (5) renewal reminders with usage data. GCM deploys this flow with Salesforce, HubSpot, and custom CRM integrations.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Business API Provider India", href: "/whatsapp-business-api-provider-india" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API Mumbai", href: "/whatsapp-api-mumbai" },
  { label: "WhatsApp API Hyderabad", href: "/whatsapp-api-hyderabad" },
  { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
  { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIBangalorePage() {
  return (
    <CityPageTemplate
      breadcrumbLabel="Bangalore"
      heroEyebrow="WhatsApp Business API Bangalore"
      heroTitle="WhatsApp Business API"
      heroHighlight="in Bangalore — Official Meta BSP"
      heroDescription={
        <>
          Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business
          Solution Provider. Bangalore&apos;s tech startups, IT companies, healthcare providers, and
          D2C brands are among India&apos;s most sophisticated WhatsApp API adopters — using it for
          customer onboarding, support automation, campaign management, and B2B lead generation.
          <strong className="text-gray-900"> Onboarding in 3 to 5 business days with full API and integration access.</strong>
        </>
      }
      heroImage="/images/whatsapp/whatsapp-bussiness-api.webp"
      heroImageAlt="WhatsApp Business API for Bangalore businesses — rich message preview on a phone"
      heroTrustLine="Official Meta BSP · 3–5 Day Setup · Full REST API & SDK access · India-based support"
      stats={[
        { value: "30,000+", label: "Tech companies headquartered in Bangalore" },
        { value: "10,000+", label: "Active startups — India's largest ecosystem" },
        { value: "3–5 days", label: "Onboarding timeline" },
        { value: "Full API", label: "REST API, webhooks, and SDK access" },
      ]}
      aeoParagraphs={[
        "Get Click Media provides WhatsApp Business API in Bangalore as an official Meta Business Solution Provider. Bangalore's tech startups, IT companies, healthcare providers, and D2C brands are among India's most sophisticated WhatsApp API adopters — using it for customer onboarding, support automation, campaign management, and B2B lead generation. Onboarding in 3 to 5 business days with full API and integration access.",
        "Bangalore is India's technology capital — home to 30,000+ tech companies, India's largest startup ecosystem (over 10,000 active startups), and a developer-heavy population that is among the earliest adopters of business WhatsApp API. The city's business landscape spans IT services, product startups, healthcare tech, EdTech, and a rapidly growing D2C brand ecosystem.",
        "Bangalore developers are disproportionately represented among the first adopters of WhatsApp Business API in India — the technical familiarity with API integrations, chatbot development, and CRM platforms in Bangalore's business community makes adoption faster and integrations deeper than in most other Indian cities.",
      ]}
      whyCity={{
        eyebrow: "Why Bangalore Businesses Choose WhatsApp API",
        title: "India's most developer-fluent market for WhatsApp automation",
        description:
          "Bangalore's business landscape is shaped by a digital-first consumer base — smartphone penetration, WhatsApp usage rates, and e-commerce adoption are all above India's national average. Businesses that deploy WhatsApp Business API in Bangalore report faster lead conversion, higher customer retention, and lower support costs compared to SMS and email alternatives.",
        image: "/images/whatsapp/direct-meta-partner.webp",
        points: [
          { icon: Code2, title: "India's technology capital", desc: "30,000+ tech companies and 10,000+ active startups make Bangalore India's largest and most sophisticated WhatsApp API market." },
          { icon: TrendingUp, title: "Faster lead conversion, lower support cost", desc: "WhatsApp automation consistently outperforms SMS and email on response time and retention for Bangalore businesses." },
          { icon: Users, title: "Developer-heavy business culture", desc: "Deeper, more custom API integrations than in most Indian cities, thanks to Bangalore's technical talent base." },
          { icon: MapPinned, title: "Full API and SDK access", desc: "REST API, webhook documentation with code samples, and pre-built SDKs for Node.js, Python, and Java." },
        ],
      }}
      industries={INDUSTRIES}
      gcmService={{
        eyebrow: "GCM in Bangalore",
        title: "Get Click Media's WhatsApp API Service in Bangalore",
        description: (
          <>
            Get Click Media&apos;s WhatsApp API platform is purpose-built for the technical requirements
            of Bangalore&apos;s API-first business community. GCM provides
            <strong className="text-gray-900"> full REST API access, webhook documentation with code
            samples, and pre-built SDKs</strong> for Node.js, Python, and Java — the languages most
            commonly used in Bangalore&apos;s startup ecosystem. Onboarding is fully remote. Developer
            support is available via WhatsApp and email.
          </>
        ),
        image: "/images/rcs/banking-dashboard.webp",
        capabilities: CAPABILITIES,
      }}
      clientUseCases={CLIENT_USE_CASES}
      areasServed={["Electronic City", "Whitefield", "Koramangala", "HSR Layout", "Indiranagar", "Sarjapur Road", "Yelahanka", "Marathahalli", "Mysore Road", "Tumkur Road", "Domlur"]}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to launch WhatsApp API for your Bangalore business?"
      bottomCtaDescription="Get Click Media manages Meta business verification, template approval, and full API access — built for Bangalore's developer-led implementations."
      schema={schema}
    />
  );
}
