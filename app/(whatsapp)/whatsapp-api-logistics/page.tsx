import type { Metadata } from "next";
import {
  Truck,
  Package,
  MapPin,
  Clock,
  MessageSquare,
  Database,
  Camera,
  Building2,
  Warehouse,
  Route,
  Headphones,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Logistics — Shipment Tracking, Delivery Alerts and Fleet India | Get Click Media",
  description:
    "WhatsApp Business API for logistics enables Indian courier companies, 3PL providers, and fleet operators to automate shipment tracking updates, delivery notifications, failed delivery recovery, and customer delivery preference collection.",
  keywords:
    "WhatsApp API for Logistics India, WhatsApp Logistics India, WhatsApp Delivery Notification, WhatsApp Shipment Tracking India, Logistics WhatsApp Automation, WhatsApp Courier India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-logistics" },
  openGraph: {
    title: "WhatsApp API for Logistics — Shipment Tracking, Delivery Alerts and Fleet India",
    description:
      "WhatsApp Business API for logistics enables Indian courier companies, 3PL providers, and fleet operators to automate shipment tracking updates, delivery notifications, failed delivery recovery, and customer delivery preference collection.",
    url: "https://getclickmedia.com/whatsapp-api-logistics",
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
      name: "WhatsApp API for Logistics India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-logistics",
      description:
        "WhatsApp Business API for logistics enables Indian courier companies, 3PL providers, and fleet operators to automate shipment tracking updates, delivery notifications, failed delivery recovery, and customer delivery preference collection.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Logistics India", item: "https://getclickmedia.com/whatsapp-api-logistics" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does WhatsApp reduce failed deliveries for Indian courier companies?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp pre-delivery confirmation — sent when the shipment is out for delivery — allows customers to confirm they will be available, reschedule to a preferred time, or provide specific delivery instructions (gate code, floor number, neighbour delivery). This proactive communication reduces failed first-attempt deliveries by 28-34% compared to no pre-notification. The rescheduling button within the WhatsApp message makes it frictionless for customers to choose a time they can receive." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp API integrate with TMS platforms used by Indian logistics companies?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media integrates with FarEye, Locus, Ezyslips, Shiprocket, and custom TMS platforms via REST API webhooks. Each milestone event in the TMS — pickup, in-transit, out for delivery, delivered, failed — triggers an appropriate WhatsApp message to the consignee automatically." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp help with delivery dispute resolution?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp Proof of Delivery (POD) — a delivery confirmation message with photo evidence and timestamp sent immediately on delivery — reduces dispute rates by 60%. When a dispute does arise, the WhatsApp delivery confirmation record with photo provides unambiguous evidence of delivery completion, reducing resolution time from 4-5 days to under 2 days." },
        },
        {
          "@type": "Question",
          name: "Can B2B logistics clients receive WhatsApp shipment updates?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. For B2B enterprise clients, GCM configures WhatsApp updates for their designated contacts — every shipment milestone, exception alert, and ETA update is sent to the appropriate account manager or warehouse team WhatsApp number automatically. B2B clients consistently rate WhatsApp shipment communication higher than portal-based tracking." },
        },
      ],
    },
  ],
};

// ── Logistics Use Cases ──────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: Package,
    title: "Shipment Pickup and Dispatch Notification",
    trigger: "Pickup completed and shipment scanned at origin hub",
    message: "Pickup confirmed. AWB number. Estimated delivery date. Track shipment button. Customer support WhatsApp number.",
    result: "Inbound tracking queries -40%. Customer confidence from first touchpoint.",
  },
  {
    icon: Truck,
    title: "Out for Delivery Alert and Pre-Delivery Confirmation",
    trigger: "Shipment loaded on delivery vehicle — out for delivery scan",
    message: "Your order is out for delivery today. Delivery agent name and contact. [Confirm delivery timing] or [Reschedule delivery] or [Delivery instructions] buttons.",
    result: "Failed delivery -34%. Delivery success rate first attempt +28%.",
  },
  {
    icon: Clock,
    title: "Failed Delivery Recovery",
    trigger: "Delivery attempt failed — reason code from delivery system",
    message: "We missed you. Your delivery is rescheduled. Tap to choose: [Tomorrow morning] [Tomorrow afternoon] [Day after] [Delivery instructions for agent]",
    result: "Recovery rate for failed deliveries +45%. Re-delivery cost -₹32 per shipment.",
  },
  {
    icon: Camera,
    title: "Delivery Confirmation and Proof of Delivery",
    trigger: "Delivery completed — final scan",
    message: "Your order has been delivered. Delivered to: [Name]. Time: [Timestamp]. Photo of delivery (if configured). Rate delivery [1-5 stars].",
    result: "Delivery dispute rate -60%. CSAT survey response rate 4x vs IVR.",
  },
  {
    icon: Building2,
    title: "B2B Shipment Status for Enterprise Clients",
    trigger: "Status change events from TMS — multiple milestones",
    message: "Shipment milestone update with AWB, origin, destination, current status, ETA, and exception alerts for delays",
    result: "Enterprise client satisfaction +35%. Account renewal rate +22%.",
  },
  {
    icon: Route,
    title: "Reverse Pickup and Return Coordination",
    trigger: "Return pickup request created in OMS or returns portal",
    message: "Return pickup scheduled. Date, time window, agent contact. Packaging instructions. Refund timeline confirmation.",
    result: "Return pickup success rate first attempt +40%. Returns customer satisfaction +28 points.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "Failed delivery rate", before: "18-22% (industry average India)", after: "10-14% with WhatsApp pre-delivery confirmation", source: "GCM logistics client data" },
  { metric: "Customer service calls per 1,000 shipments", before: "180 calls", after: "82 calls (55% reduction)", source: "GCM 3PL client post-deployment" },
  { metric: "Delivery dispute resolution time", before: "4-5 days average", after: "1.9 days with WhatsApp POD", source: "GCM courier client" },
  { metric: "CSAT survey response rate", before: "8% (IVR)", after: "34% (WhatsApp)", source: "GCM logistics client" },
  { metric: "B2B client escalations", before: "Baseline", after: "28% reduction with proactive WhatsApp updates", source: "GCM enterprise logistics client" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "TMS integration", desc: "FarEye, Locus, custom TMS — event webhook triggers at every milestone" },
  { icon: Warehouse, title: "WMS integration", desc: "Warehouse management system — pickup confirmation, dispatch triggers" },
  { icon: MessageSquare, title: "Delivery preference collection", desc: "WhatsApp Flow for delivery time preference, OTP delivery, safe drop instructions" },
  { icon: MapPin, title: "Fleet tracking", desc: "Real-time delivery agent location sharing via WhatsApp link" },
  { icon: Headphones, title: "Customer support chatbot", desc: "Tracking query chatbot + agent handoff for exceptions and disputes" },
  { icon: Camera, title: "POD automation", desc: "Delivery confirmation message with photo proof and digital signature capture" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp reduce failed deliveries for Indian courier companies?",
    a: "WhatsApp pre-delivery confirmation — sent when the shipment is out for delivery — allows customers to confirm they will be available, reschedule to a preferred time, or provide specific delivery instructions (gate code, floor number, neighbour delivery). This proactive communication reduces failed first-attempt deliveries by 28-34% compared to no pre-notification. The rescheduling button within the WhatsApp message makes it frictionless for customers to choose a time they can receive.",
  },
  {
    q: "Can WhatsApp API integrate with TMS platforms used by Indian logistics companies?",
    a: "Yes. Get Click Media integrates with FarEye, Locus, Ezyslips, Shiprocket, and custom TMS platforms via REST API webhooks. Each milestone event in the TMS — pickup, in-transit, out for delivery, delivered, failed — triggers an appropriate WhatsApp message to the consignee automatically.",
  },
  {
    q: "How does WhatsApp help with delivery dispute resolution?",
    a: "WhatsApp Proof of Delivery (POD) — a delivery confirmation message with photo evidence and timestamp sent immediately on delivery — reduces dispute rates by 60%. When a dispute does arise, the WhatsApp delivery confirmation record with photo provides unambiguous evidence of delivery completion, reducing resolution time from 4-5 days to under 2 days.",
  },
  {
    q: "Can B2B logistics clients receive WhatsApp shipment updates?",
    a: "Yes. For B2B enterprise clients, GCM configures WhatsApp updates for their designated contacts — every shipment milestone, exception alert, and ETA update is sent to the appropriate account manager or warehouse team WhatsApp number automatically. B2B clients consistently rate WhatsApp shipment communication higher than portal-based tracking.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
  { label: "WhatsApp API for Logistics", href: "/whatsapp-api-logistics" },
  { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Travel", href: "/whatsapp-api-travel" },
  { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPILogisticsPage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Logistics"
      heroEyebrow="Logistics WhatsApp API"
      heroTitle="WhatsApp Business API for Logistics"
      heroHighlight="Shipment Tracking, Delivery Alerts and Fleet India"
      heroDescription={
        <>
          WhatsApp Business API for logistics enables Indian courier companies, 3PL providers, and
          fleet operators to automate shipment tracking updates, delivery notifications, failed
          delivery recovery, and customer delivery preference collection.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with TMS and WMS platforms — reducing failed delivery rates by 34% and customer support calls by 55%.</strong>
        </>
      }
      heroImage="/images/whatsapp/logistics/whatsapp-api-for-logistics.png"
      heroImageAlt="WhatsApp API for Logistics — shipment tracking, delivery alerts, and fleet management dashboard"
      heroTrustLine="Official Meta BSP · TMS & WMS integration · Real-time tracking · India-based support"
      stats={[
        { value: "34%", label: "Reduction in failed delivery attempts" },
        { value: "55%", label: "Fewer customer service calls on delivery status" },
        { value: "2.1x", label: "Faster delivery dispute resolution" },
        { value: "92%", label: "Customer satisfaction with WhatsApp updates" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for logistics enables Indian courier companies, 3PL providers, and
          fleet operators to automate shipment tracking updates, delivery notifications, failed
          delivery recovery, and customer delivery preference collection.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with TMS and WMS platforms</strong>
          — reducing failed delivery rates by 34% and customer support calls by 55%.
        </>
      }
      insightCallout={
        <>
          India processes over <strong>25 million daily shipments</strong> through e-commerce, B2B
          logistics, and direct courier services. Failed deliveries cost the industry{" "}
          <strong>₹45 per failed attempt</strong> in re-delivery and reverse logistics costs.
          WhatsApp delivery management — real-time updates, customer confirmation before delivery,
          and instant rescheduling — is the most effective tool Indian logistics companies have to
          reduce failed deliveries.
        </>
      }
      whyIndustryTitle="Why Logistics Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Indian customers track their shipments <strong>3-5 times per day</strong> via IVR or
          website — each call or visit represents a cost to the logistics provider and frustration
          for the customer.
        </>,
        <>
          WhatsApp proactive updates eliminate this behaviour — customers receive updates before
          they need to search for them, and can reschedule delivery with a single button tap.
          With <strong>34% reduction in failed deliveries</strong> and <strong>55% fewer customer
          support calls</strong>, WhatsApp is rapidly becoming the standard for logistics
          communication in India.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Failed deliveries cost the industry ₹45 per failed
          attempt in re-delivery and reverse logistics costs. WhatsApp delivery management —
          real-time updates, customer confirmation before delivery, and instant rescheduling —
          is the most effective tool to reduce failed deliveries.
        </>
      }
      imageSections={[
        {
          eyebrow: "Shipment Management Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for logistics operators</span>
            </>
          ),
          description:
            "Manage all shipment communication from a single dashboard — pickup confirmation, out-for-delivery alerts, failed delivery recovery, proof of delivery, and B2B shipment updates — with full integration to your TMS and WMS systems.",
          bullets: [
            "Automated pickup and dispatch notifications",
            "Out-for-delivery alerts with confirmation buttons",
            "Failed delivery recovery with instant rescheduling",
            "Proof of delivery with photo and timestamp",
          ],
          image: "/images/whatsapp/logistics/whatsapp-api-logistics.webp",
          imageAlt: "WhatsApp API Logistics dashboard — shipment tracking, delivery alerts, failed delivery recovery, and POD automation",
        },
        {
          eyebrow: "Delivery Alert Automation",
          title: (
            <>
              WhatsApp delivery alerts <span className="text-[#2563eb]">with one-tap rescheduling</span>
            </>
          ),
          description:
            "Automated out-for-delivery alerts with confirm, reschedule, and delivery instruction buttons. Customers can choose a time that works for them — reducing failed first-attempt deliveries by 28-34% compared to no pre-notification.",
          bullets: [
            "Out-for-delivery alert with agent name and contact",
            "Confirm delivery timing button",
            "Reschedule delivery with preferred time selection",
            "Delivery instructions for agent (gate code, floor)",
          ],
          image: "/images/whatsapp/logistics/whatsapp-logistics-delivery-alert.png",
          imageAlt: "WhatsApp delivery alert preview — out-for-delivery with confirm, reschedule, and delivery instructions buttons",
          imageSide: "left",
        },
        {
          eyebrow: "TMS & WMS Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">your TMS and WMS systems</span>
            </>
          ),
          description:
            "Get Click Media integrates with leading logistics platforms — FarEye, Locus, Shiprocket, and custom TMS systems — enabling automated WhatsApp communication at every shipment milestone from pickup to final delivery. Setup takes 3-5 days after WhatsApp API onboarding is complete.",
          bullets: ["FarEye", "Locus", "Shiprocket", "Custom TMS", "WMS integration", "REST API webhooks"],
          image: "/images/whatsapp/logistics/whatsapp-api-logistics-integration-architecture.webp",
          imageAlt: "WhatsApp API TMS integration — FarEye, Locus, Shiprocket, and custom TMS platforms",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for Logistics — 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for Logistics"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform logistics communication with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for logistics with TMS and WMS integration, automated delivery alerts, and proof of delivery automation."
      schema={schema}
    />
  );
}
