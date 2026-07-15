import type { Metadata } from "next";
import {
  MessageSquare,
  Calendar,
  Home,
  CreditCard,
  FileText,
  Users,
  Database,
  Globe,
  Camera,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Real Estate — Lead Qualification, Site Visits and Booking India | Get Click Media",
  description:
    "WhatsApp Business API for real estate enables Indian property developers, brokers, and PropTech platforms to automate property enquiry handling, site visit booking, payment milestone alerts, and post-booking documentation.",
  keywords:
    "WhatsApp API for Real Estate India, WhatsApp Real Estate India, WhatsApp Property Leads India, WhatsApp API Builder India, Real Estate WhatsApp Automation, WhatsApp Site Visit Booking India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-real-estate" },
  openGraph: {
    title: "WhatsApp API for Real Estate — Lead Qualification, Site Visits and Booking India",
    description:
      "WhatsApp Business API for real estate enables Indian property developers, brokers, and PropTech platforms to automate property enquiry handling, site visit booking, payment milestone alerts, and post-booking documentation.",
    url: "https://getclickmedia.com/whatsapp-api-real-estate",
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
      name: "WhatsApp API for Real Estate India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-real-estate",
      description:
        "WhatsApp Business API for real estate enables Indian property developers, brokers, and PropTech platforms to automate property enquiry handling, site visit booking, payment milestone alerts, and post-booking documentation.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Real Estate India", item: "https://getclickmedia.com/whatsapp-api-real-estate" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does WhatsApp improve real estate lead conversion in India?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp chatbot responds to property enquiries within 5 seconds — critical because 78% of leads are lost if not contacted within 5 minutes. The chatbot qualifies budget, BHK preference, and timeline, sends the relevant project brochure automatically, and books a site visit slot. This entire flow happens without human involvement — ensuring 100% of leads are followed up regardless of team availability." },
        },
        {
          "@type": "Question",
          name: "Does Get Click Media integrate WhatsApp with Sell.do CRM?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. GCM's Sell.do integration is bi-directional — WhatsApp enquiries automatically create leads in Sell.do with qualification data. Stage changes in Sell.do trigger WhatsApp messages. Sales team activities are logged in both systems. Setup takes 3-5 days after WhatsApp API onboarding." },
        },
        {
          "@type": "Question",
          name: "How are property portal leads (99acres, MagicBricks) routed to WhatsApp?",
          acceptedAnswer: { "@type": "Answer", text: "Real estate portals provide lead data via API or email webhooks. Get Click Media connects to these feeds and routes each new enquiry to the WhatsApp chatbot within 30 seconds of receipt — the chatbot sends the first WhatsApp message to the prospect before your sales team has even seen the lead notification." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp handle site visit reminder sequences for real estate?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. After a site visit is booked, GCM's automation sends: booking confirmation (immediately), reminder 48 hours before with all visit details and directions, morning-of reminder with sales person contact, and post-visit follow-up the next day. This sequence reduces site visit no-shows from 45% to 18% in typical Indian real estate deployments." },
        },
      ],
    },
  ],
};

// ── Real Estate Use Cases ──────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: MessageSquare,
    title: "Instant Lead Acknowledgement and Qualification",
    trigger: "New lead from 99acres, MagicBricks, Housing, or website form",
    message: "Instant response: property details confirmed, qualification questions (budget, BHK preference, possession timeline, location). Relevant project brochure sent automatically.",
    result: "Lead response time: 4hr to 5 seconds. Site visit conversion 3x. Lead wastage -65%.",
  },
  {
    icon: Calendar,
    title: "Site Visit Booking and Confirmation",
    trigger: "Lead qualifies (budget and timeline match) in chatbot flow",
    message: "Available site visit slots shown. Customer selects. Confirmation sent with: date, time, site address, Google Maps link, sales person contact, parking instructions.",
    result: "Site visit show rate 85% (vs 55% phone-booked). No-show recovery with reminder sequence.",
  },
  {
    icon: Home,
    title: "Property Brochure and Virtual Tour Delivery",
    trigger: "Customer asks about project or types project name keyword",
    message: "Project overview image, master plan, unit plan, pricing sheet PDF, 360-degree virtual tour link, and RERA registration number",
    result: "Engagement with project materials 4x vs email. Informed site visit conversion 2x higher.",
  },
  {
    icon: CreditCard,
    title: "Payment Milestone Reminder",
    trigger: "Payment milestone due date approaching (as per allotment letter schedule)",
    message: "Milestone name, amount due, due date, and [Pay Now] button linked to payment gateway. 30 days, 7 days, and due date reminders.",
    result: "On-time milestone payment +35%. Developer cash flow improved. Legal notices -45%.",
  },
  {
    icon: FileText,
    title: "Post-Booking Documentation",
    trigger: "Booking amount received — trigger from CRM",
    message: "Booking confirmation + next steps checklist: KYC documents required, allotment letter timeline, loan assistance offer, site visit schedule",
    result: "Post-booking anxiety calls -70%. Document submission rate +40% within 7 days.",
  },
  {
    icon: Users,
    title: "Resale and Referral Engagement",
    trigger: "1 year anniversary of possession or key handover",
    message: "Anniversary message + resale assistance offer + referral programme invitation with referral code",
    result: "Referral programme awareness 4x. Resale listings +25%. Customer LTV extended.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "Lead response time", before: "4-6 hours (manual)", after: "Under 5 seconds (WhatsApp chatbot)", source: "GCM real estate client data" },
  { metric: "Site visit conversion rate", before: "18% of qualified leads", after: "54% with WhatsApp booking flow", source: "GCM developer client India" },
  { metric: "Site visit no-show rate", before: "45%", after: "18% with WhatsApp reminder sequence", source: "GCM real estate deployment" },
  { metric: "Payment milestone on-time", before: "62%", after: "84% with WhatsApp reminder sequence", source: "GCM developer client" },
  { metric: "Post-booking document submission (7 days)", before: "38%", after: "71% with WhatsApp checklist", source: "GCM real estate client" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "Sell.do integration", desc: "Bi-directional CRM sync — lead creation, stage updates, task assignments, WhatsApp message logging" },
  { icon: Globe, title: "Portal lead integration", desc: "99acres, MagicBricks, Housing lead auto-routing to WhatsApp chatbot via API" },
  { icon: Camera, title: "CTWA ads integration", desc: "Click-to-WhatsApp Facebook and Instagram ads for real estate — GCM manages full campaign" },
  { icon: FileText, title: "Document delivery", desc: "Brochure PDF, master plan, unit plan, pricing sheet — auto-triggered based on project keyword" },
  { icon: Calendar, title: "Site visit automation", desc: "Slot booking, confirmation, reminder sequence, post-visit follow-up" },
  { icon: CreditCard, title: "Payment gateway", desc: "Razorpay, HDFC PayZapp, and bank transfer for milestone payment collection" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp improve real estate lead conversion in India?",
    a: "WhatsApp chatbot responds to property enquiries within 5 seconds — critical because 78% of leads are lost if not contacted within 5 minutes. The chatbot qualifies budget, BHK preference, and timeline, sends the relevant project brochure automatically, and books a site visit slot. This entire flow happens without human involvement — ensuring 100% of leads are followed up regardless of team availability.",
  },
  {
    q: "Does Get Click Media integrate WhatsApp with Sell.do CRM?",
    a: "Yes. GCM's Sell.do integration is bi-directional — WhatsApp enquiries automatically create leads in Sell.do with qualification data. Stage changes in Sell.do trigger WhatsApp messages. Sales team activities are logged in both systems. Setup takes 3-5 days after WhatsApp API onboarding.",
  },
  {
    q: "How are property portal leads (99acres, MagicBricks) routed to WhatsApp?",
    a: "Real estate portals provide lead data via API or email webhooks. Get Click Media connects to these feeds and routes each new enquiry to the WhatsApp chatbot within 30 seconds of receipt — the chatbot sends the first WhatsApp message to the prospect before your sales team has even seen the lead notification.",
  },
  {
    q: "Can WhatsApp handle site visit reminder sequences for real estate?",
    a: "Yes. After a site visit is booked, GCM's automation sends: booking confirmation (immediately), reminder 48 hours before with all visit details and directions, morning-of reminder with sales person contact, and post-visit follow-up the next day. This sequence reduces site visit no-shows from 45% to 18% in typical Indian real estate deployments.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
  { label: "Click to WhatsApp Ads", href: "/whatsapp-click-to-whatsapp-ads" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
  { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
  { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIRealEstatePage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Real Estate"
      heroEyebrow="Real Estate WhatsApp API"
      heroTitle="WhatsApp Business API for Real Estate"
      heroHighlight="Lead Qualification, Site Visits and Booking India"
      heroDescription={
        <>
          WhatsApp Business API for real estate enables Indian property developers, brokers, and PropTech
          platforms to automate property enquiry handling, site visit booking, payment milestone alerts,
          and post-booking documentation.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with Sell.do</strong> and
          custom real estate CRM platforms — tripling site visit conversion rates and reducing lead response
          time from hours to seconds.
        </>
      }
      heroImage="/images/rcs/real-estate-hero.webp"
      heroImageAlt="WhatsApp API Real Estate — RCS messaging platform with property showcase, site visit bookings, and instant updates"
      heroTrustLine="Official Meta BSP · Sell.do & portal integration · RERA-aware messaging · India-based support"
      stats={[
        { value: "3x", label: "Higher site visit booking rate vs phone follow-up" },
        { value: "78%", label: "Lower conversion if not responded within 5 min" },
        { value: "₹1.2L", label: "Average cost of a real estate portal lead" },
        { value: "92%", label: "Enquiry acknowledgement open rate via WhatsApp" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for real estate enables Indian property developers, brokers, and PropTech
          platforms to automate property enquiry handling, site visit booking, payment milestone alerts,
          and post-booking documentation.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with Sell.do</strong> and
          custom real estate CRM platforms — tripling site visit conversion rates and reducing lead response
          time from hours to seconds.
        </>
      }
      insightCallout={
        <>
          Indian real estate receives millions of property enquiries annually through portals like 99acres,
          MagicBricks, and Housing. The average enquiry response time from real estate companies is{" "}
          <strong>4-6 hours</strong>. Research shows that a lead not responded to within 5 minutes has a{" "}
          <strong>78% lower chance</strong> of converting. WhatsApp chatbot responds in <strong>5 seconds</strong>.
        </>
      }
      whyIndustryTitle="Why Real Estate Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Real estate developers and brokers pay <strong>₹50,000 to ₹2,00,000 per qualified lead</strong> from
          property portals. These expensive leads are wasted when sales teams cannot follow up within minutes.
        </>,
        <>
          WhatsApp chatbot eliminates this problem — acknowledging every lead instantly, qualifying budget and
          timeline, sending relevant property brochures, and booking site visits automatically. With{" "}
          <strong>3x higher site visit conversion</strong> and <strong>92% enquiry open rates</strong>, WhatsApp
          is rapidly becoming the standard for real estate communication in India.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Research shows that a lead not responded to within 5 minutes has a
          78% lower chance of converting. WhatsApp chatbot responds in 5 seconds — ensuring 100% of leads are
          followed up regardless of team availability.
        </>
      }
      imageSections={[
        {
          eyebrow: "Lead Management Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for real estate developers</span>
            </>
          ),
          description:
            "Manage all lead and customer communication from a single dashboard — instant lead qualification, site visit booking, brochure delivery, payment milestone reminders, and post-booking documentation — with full integration to your real estate CRM.",
          bullets: [
            "Instant lead acknowledgement and qualification",
            "Automated site visit booking and confirmation",
            "Property brochure and virtual tour delivery",
            "Payment milestone reminders with Pay Now button",
          ],
          image: "/images/whatsapp/whatsapp-api-for-real-estate.webp",
          imageAlt: "WhatsApp API Real Estate dashboard — lead qualification, site visit booking, brochure delivery, and payment milestone reminders",
        },
        {
          eyebrow: "Site Visit Automation",
          title: (
            <>
              WhatsApp site visit booking <span className="text-[#2563eb]">with one-tap confirmation</span>
            </>
          ),
          description:
            "Interactive WhatsApp site visit booking with slot selection, confirmation, and reminder sequences. A 3-message reminder sequence (48hr, morning-of, post-visit) reduces no-shows from 45% to 18% in typical Indian real estate deployments.",
          bullets: [
            "Available slot selection in-chat",
            "Google Maps link for directions",
            "48-hour reminder with all visit details",
            "Morning-of reminder with sales person contact",
          ],
          image: "/images/whatsapp/whatsapp-site-visit-booking.webp",
          imageAlt: "WhatsApp site visit booking preview — slot selection, confirmation, and reminder with Google Maps link",
          imageSide: "left",
        },
        {
          eyebrow: "CRM Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">Sell.do and custom real estate CRM</span>
            </>
          ),
          description:
            "Get Click Media's bi-directional Sell.do integration — WhatsApp enquiries automatically create leads in Sell.do with qualification data. Stage changes in Sell.do trigger WhatsApp messages. Sales team activities are logged in both systems. Setup takes 3-5 days after WhatsApp API onboarding is complete.",
          bullets: ["Sell.do integration", "99acres lead routing", "MagicBricks lead routing", "Housing lead routing", "Custom CRM API"],
          image: "/images/whatsapp/whatsapp-api-sell-do-integration.png",
          imageAlt: "WhatsApp API Sell.do integration — bi-directional CRM sync for real estate lead management",
          imageSide: "left",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for Real Estate — 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for Real Estate"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform real estate lead management with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for real estate with Sell.do integration, portal lead routing, and automated site visit booking."
      schema={schema}
    />
  );
}
