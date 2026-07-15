import type { Metadata } from "next";
import {
  Car,
  Sparkles,
  Wrench,
  Star,
  CreditCard,
  Key,
  Database,
  Globe,
  Camera,
  Shield,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Automobile Dealers — Test Drive Booking, Service Reminders and Lead Nurture India | Get Click Media",
  description:
    "WhatsApp Business API for automobile dealers and OEMs enables automated test drive booking, service appointment reminders, EMI pre-approval alerts, new model launch campaigns, and post-sales relationship management.",
  keywords:
    "WhatsApp API for Automobile India, WhatsApp Automobile India, WhatsApp Car Dealer India, Test Drive Booking WhatsApp, Auto Service Reminder WhatsApp India, WhatsApp API Automotive India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-automobile" },
  openGraph: {
    title: "WhatsApp API for Automobile Dealers — Test Drive Booking, Service Reminders and Lead Nurture India",
    description:
      "WhatsApp Business API for automobile dealers and OEMs enables automated test drive booking, service appointment reminders, EMI pre-approval alerts, new model launch campaigns, and post-sales relationship management.",
    url: "https://getclickmedia.com/whatsapp-api-automobile",
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
      name: "WhatsApp API for Automobile Dealers India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-automobile",
      description:
        "WhatsApp Business API for automobile dealers and OEMs enables automated test drive booking, service appointment reminders, EMI pre-approval alerts, new model launch campaigns, and post-sales relationship management.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Automobile Dealers India", item: "https://getclickmedia.com/whatsapp-api-automobile" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does WhatsApp improve test drive bookings for car dealers in India?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp chatbot responds to car enquiries within seconds — sending the relevant model brochure, variant comparison, and available test drive slots instantly. Portal leads that are responded to within 5 minutes convert at 3x the rate of leads followed up after an hour. The [Book Test Drive] button in the WhatsApp message makes booking instant — no phone tag, no email chains." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp API integrate with automobile DMS platforms?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media integrates with Automate, CDK Global, and custom dealer management systems. Service due dates from the DMS trigger WhatsApp service reminders automatically. Purchase events create loyalty relationship sequences. Portal enquiries are routed to the WhatsApp chatbot via API connection." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp reduce service no-shows at automobile dealerships?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp service appointment reminders — 48 hours before, morning of — with [Confirm], [Reschedule], and [Cancel] buttons reduce no-shows by 40% compared to no-reminder or SMS reminder. When a customer reschedules, the slot is immediately available for another customer — improving workshop utilisation." },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp suitable for OEM (car manufacturer) direct customer communication in India?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Several Indian automotive OEMs use WhatsApp for direct owner communication — warranty alerts, recall notices, software update notifications, and anniversary offers. OEM WhatsApp implementations require Green Tick verification, which Get Click Media manages for automotive brands. OEM deployments integrate with dealership DMS systems to maintain a consistent customer journey from manufacturer to dealer." },
        },
      ],
    },
  ],
};

// ── Automobile Use Cases ──────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: Car,
    title: "New Car Enquiry and Test Drive Booking",
    trigger: "Portal lead (CarDekho, CarWale), CTWA ad click, or website form",
    message: "Instant response: confirm model interest. Variant comparison card. EMI calculator link. Available test drive slots. [Book Test Drive] button.",
    result: "Test drive booking 3x. Portal lead-to-visit 22% vs 8% with phone follow-up.",
  },
  {
    icon: Sparkles,
    title: "Model Launch Campaign",
    trigger: "New model launch — campaign send to opted-in enquiry database",
    message: "Launch video link, key highlights, introductory price, and [Book Test Drive] or [Contact Dealer] button. Personalised by last enquired model segment.",
    result: "Launch day test drive bookings 4x vs SMS announcement. Walk-in footfall +55%.",
  },
  {
    icon: Wrench,
    title: "Service Appointment Reminder",
    trigger: "Next service due (based on last service date + 6 months or 10,000 km)",
    message: "Service reminder with vehicle registration, last service date, next due mileage, and [Book Service Appointment] button",
    result: "Service retention rate +32%. No-show rate -40%. Revenue per customer +18%.",
  },
  {
    icon: Star,
    title: "Post-Service Follow-Up and CSAT",
    trigger: "Service completed — vehicle delivered to customer",
    message: "Service completion summary: work done, parts replaced, amount paid. [Rate Your Experience 1-5] buttons. 1-3: escalate to service manager. 4-5: Google review link.",
    result: "Service CSAT +22 points. Google reviews +400%. Service dispute reduction -35%.",
  },
  {
    icon: CreditCard,
    title: "Finance Pre-Approval and EMI Offer",
    trigger: "Enquiry qualifies for finance (based on chatbot income capture)",
    message: "Pre-approval offer: loan amount, interest rate, EMI, and [Proceed with Finance] button. Direct connection to finance executive.",
    result: "Finance attach rate +28%. Loan disbursement speed +2x. Customer satisfaction +15 points.",
  },
  {
    icon: Key,
    title: "Trade-In and Exchange Offer",
    trigger: "Customer service inquiry or 3-year anniversary of vehicle purchase",
    message: "Upgrade offer: current model trade-in value estimate, exchange offer on new model, and [Get Valuation] button for photos-based quick valuation",
    result: "Trade-in enquiry conversion 2.5x. Exchange bookings +35% vs outbound calling.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "Portal lead-to-test-drive rate", before: "8% (phone follow-up)", after: "22% (WhatsApp chatbot)", source: "GCM dealer client data" },
  { metric: "Service appointment no-show", before: "35%", after: "21% (WhatsApp reminder sequence)", source: "GCM dealership client" },
  { metric: "Service CSAT score", before: "68/100", after: "82/100 with WhatsApp post-service flow", source: "GCM auto client" },
  { metric: "Finance attachment rate", before: "32%", after: "45% with WhatsApp pre-approval offer", source: "GCM dealer finance client" },
  { metric: "Launch day test drive bookings", before: "Baseline", after: "4x with WhatsApp launch campaign", source: "GCM OEM India campaign" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "DMS integration", desc: "Automate, CDK Global, custom DMS — enquiry routing, service due triggers, purchase events" },
  { icon: Globe, title: "CarDekho/CarWale integration", desc: "Portal lead API routing to WhatsApp chatbot within 30 seconds of lead submission" },
  { icon: Camera, title: "CTWA ads management", desc: "Click-to-WhatsApp Facebook and Instagram ads for new model launches and offers" },
  { icon: CreditCard, title: "EMI calculator", desc: "In-chat interactive EMI calculator — loan amount, tenure, interest rate, monthly EMI" },
  { icon: Wrench, title: "Service management", desc: "Service due triggers, appointment booking, reminder sequence, post-service CSAT" },
  { icon: Shield, title: "Verified Green Tick", desc: "Dealer or OEM brand verification — critical for purchase-decision trust in India" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp improve test drive bookings for car dealers in India?",
    a: "WhatsApp chatbot responds to car enquiries within seconds — sending the relevant model brochure, variant comparison, and available test drive slots instantly. Portal leads that are responded to within 5 minutes convert at 3x the rate of leads followed up after an hour. The [Book Test Drive] button in the WhatsApp message makes booking instant — no phone tag, no email chains.",
  },
  {
    q: "Can WhatsApp API integrate with automobile DMS platforms?",
    a: "Yes. Get Click Media integrates with Automate, CDK Global, and custom dealer management systems. Service due dates from the DMS trigger WhatsApp service reminders automatically. Purchase events create loyalty relationship sequences. Portal enquiries are routed to the WhatsApp chatbot via API connection.",
  },
  {
    q: "How does WhatsApp reduce service no-shows at automobile dealerships?",
    a: "WhatsApp service appointment reminders — 48 hours before, morning of — with [Confirm], [Reschedule], and [Cancel] buttons reduce no-shows by 40% compared to no-reminder or SMS reminder. When a customer reschedules, the slot is immediately available for another customer — improving workshop utilisation.",
  },
  {
    q: "Is WhatsApp suitable for OEM (car manufacturer) direct customer communication in India?",
    a: "Yes. Several Indian automotive OEMs use WhatsApp for direct owner communication — warranty alerts, recall notices, software update notifications, and anniversary offers. OEM WhatsApp implementations require Green Tick verification, which Get Click Media manages for automotive brands. OEM deployments integrate with dealership DMS systems to maintain a consistent customer journey from manufacturer to dealer.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "Click to WhatsApp Ads", href: "/whatsapp-click-to-whatsapp-ads" },
  { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API for Automobile", href: "/whatsapp-api-automobile" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
  { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIAutomobilePage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Automobile"
      heroEyebrow="Automobile WhatsApp API"
      heroTitle="WhatsApp Business API for Automobile Dealers"
      heroHighlight="Test Drive Booking, Service Reminders and Lead Nurture India"
      heroDescription={
        <>
          Automate test drive bookings, service reminders, EMI updates, and customer support with
          WhatsApp Business API integrated with your CRM or DMS.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with DMS platforms and automotive CRMs — tripling test drive conversions and reducing service no-shows by 40%.</strong>
        </>
      }
      heroImage="/images/whatsapp/automobile/whatsapp-api-for-automotive.webp"
      heroImageAlt="WhatsApp Business API for Automobile Dealers"
      heroTrustLine="Official Meta BSP · DMS integration (Automate, CDK Global) · Green Tick verified · India-based support"
      stats={[
        { value: "3x", label: "Test drive booking rate vs phone follow-up" },
        { value: "40%", label: "Reduction in service no-shows" },
        { value: "₹18L", label: "Average purchase value per converted WA lead" },
        { value: "88%", label: "Service reminder open rate via WhatsApp" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for automobile dealers and OEMs enables automated test drive booking,
          service appointment reminders, EMI pre-approval alerts, new model launch campaigns, and
          post-sales relationship management.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with DMS platforms</strong> and
          automotive CRMs — tripling test drive conversions and reducing service no-shows by 40%.
        </>
      }
      insightCallout={
        <>
          India is the <strong>third-largest automobile market</strong> globally, selling 4+ million
          passenger vehicles annually. Modern car buyers research online, compare models on YouTube,
          and expect instant engagement on WhatsApp. Dealers who respond to car enquiries within
          minutes via WhatsApp convert <strong>3x more test drives</strong> than those responding the
          next day via phone.
        </>
      }
      whyIndustryTitle="Why Automobile Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Automobile dealers receive enquiries from multiple channels — manufacturer website, car
          portals (CarDekho, CarWale), CTWA ads, and walk-ins. Without instant WhatsApp follow-up,
          portal leads go cold within 30 minutes.
        </>,
        <>
          WhatsApp chatbot responds immediately to every enquiry with model brochure, EMI calculator,
          and test drive booking — converting expensive portal leads into showroom visits. With{" "}
          <strong>3x test drive bookings</strong> and <strong>40% reduction in service no-shows</strong>,
          WhatsApp is rapidly becoming the standard for automotive customer engagement in India.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Modern car buyers research online, compare models on
          YouTube, and expect instant engagement on WhatsApp. Dealers who respond to car enquiries
          within minutes via WhatsApp convert 3x more test drives than those responding the next day
          via phone.
        </>
      }
      imageSections={[
        {
          eyebrow: "Dealership Management Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for automobile dealers</span>
            </>
          ),
          description:
            "Manage all customer communication from a single dashboard — test drive booking, model launch campaigns, service reminders, finance pre-approval, and trade-in offers — with full integration to your DMS and CRM systems.",
          bullets: [
            "Instant test drive booking with slot selection",
            "Automated service reminders with confirm/reschedule",
            "EMI pre-approval offers with finance attach",
            "Post-service CSAT and Google review collection",
          ],
          image: "/images/whatsapp/automobile/automobile-dashboard.png",
          imageAlt: "WhatsApp API Automobile dashboard — test drive booking, service reminders, model launch campaigns, and finance pre-approval",
        },
        {
          eyebrow: "Test Drive Automation",
          title: (
            <>
              WhatsApp test drive booking <span className="text-[#2563eb]">with one-tap confirmation</span>
            </>
          ),
          description:
            "Automated test drive booking with model brochure, variant comparison, and available slots. Portal leads responded to within 5 minutes convert at 3x the rate of leads followed up after an hour.",
          bullets: [
            "Instant model brochure and variant comparison",
            "Available test drive slots with selection",
            "EMI calculator in-chat for finance pre-approval",
            "Dealer location and directions via Google Maps",
          ],
          image: "/images/whatsapp/automobile/automobile-test-drive.webp",
          imageAlt: "WhatsApp test drive booking preview — model brochure, variant comparison, and one-tap test drive booking",
          imageSide: "left",
        },
        {
          eyebrow: "DMS Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">your DMS and automotive CRM</span>
            </>
          ),
          description:
            "Get Click Media integrates with leading automotive DMS platforms — Automate, CDK Global, and custom dealer management systems — enabling automated WhatsApp communication from first enquiry to annual service reminder. Setup takes 3-5 days after WhatsApp API onboarding is complete.",
          bullets: ["Automate", "CDK Global", "Custom DMS", "CarDekho leads", "CarWale leads", "Service triggers"],
          image: "/images/whatsapp/automobile/automobile-dms-integration.webp",
          imageAlt: "WhatsApp API DMS integration — Automate, CDK Global for automobile dealer management",
          imageSide: "left",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for Automobile — 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for Automobile"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform automotive sales and service with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for automobile dealers with DMS integration, automated test drive booking, service reminders, and finance pre-approval."
      schema={schema}
    />
  );
}
