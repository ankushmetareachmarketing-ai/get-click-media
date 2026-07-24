import type { Metadata } from "next";
import {
  MessageSquare,
  Plane,
  Compass,
  FileText,
  Bell,
  Star,
  Database,
  Headphones,
  Globe,
  CreditCard,
  Camera,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Travel and Tourism- Booking Confirmation, Itinerary and Support India | Get Click Media",
  description:
    "WhatsApp Business API for travel enables Indian tour operators, OTAs, and travel agencies to automate booking confirmations, itinerary delivery, visa document collection, pre-trip briefings, and in-trip support.",
  keywords:
    "WhatsApp API for Travel India, WhatsApp Travel Agency India, WhatsApp Booking Confirmation Travel, WhatsApp Tour Operator India, Travel WhatsApp Automation India, WhatsApp Itinerary India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-travel" },
  openGraph: {
    title: "WhatsApp API for Travel and Tourism- Booking Confirmation, Itinerary and Support India",
    description:
      "WhatsApp Business API for travel enables Indian tour operators, OTAs, and travel agencies to automate booking confirmations, itinerary delivery, visa document collection, pre-trip briefings, and in-trip support.",
    url: "https://getclickmedia.com/whatsapp-api-travel",
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
      name: "WhatsApp API for Travel India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-travel",
      description:
        "WhatsApp Business API for travel enables Indian tour operators, OTAs, and travel agencies to automate booking confirmations, itinerary delivery, visa document collection, pre-trip briefings, and in-trip support.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp API for Travel India", item: "https://getclickmedia.com/whatsapp-api-travel" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does WhatsApp improve travel booking conversion in India?",
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp responds to travel enquiries instantly- within seconds of a prospect submitting a form or clicking a WhatsApp ad. The chatbot captures destination interest, sends relevant package options with images and pricing, and routes the prospect to a consultant for personalised assistance. This immediate engagement- vs the 4-6 hour email response common in Indian travel agencies- increases enquiry-to-booking conversion by 2.5x." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp send flight and hotel booking confirmations?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media integrates with your booking system- when a booking is confirmed, WhatsApp automatically sends a comprehensive confirmation including: booking reference, passenger names, flight details, hotel name and address, check-in and check-out dates, and a complete document checklist for the trip." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp support work for travellers during a trip?",
          acceptedAnswer: { "@type": "Answer", text: "A dedicated WhatsApp number (or your existing business number) acts as the in-trip support channel. Common queries- hotel directions, local transport, restaurant recommendations- are handled by a chatbot FAQ. Emergencies- medical, lost documents, flight changes- are immediately escalated to a live agent. WhatsApp enables 24/7 support without requiring 24/7 staffing." },
        },
        {
          "@type": "Question",
          name: "Does Get Click Media support WhatsApp for international tour operators?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. GCM supports multi-language WhatsApp communication (Hindi, English, and regional languages) for India-bound international visitors and India-origin international travellers. Currency, timezone, and language settings are configured per deployment." },
        },
      ],
    },
  ],
};

// ── Travel Use Cases ──────────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: MessageSquare,
    title: "Travel Enquiry Handling and Package Delivery",
    trigger: "Website enquiry form, CTWA ad, or inbound WhatsApp message",
    message: "Destination interest captured. Package options carousel sent (3 packages with images, price, highlights). Consultant assigns automatically for high-value enquiries.",
    result: "Enquiry response time: hours to seconds. Package conversion 2.5x. Consultant productivity +3x.",
  },
  {
    icon: Plane,
    title: "Booking Confirmation and Document Checklist",
    trigger: "Booking confirmed in reservation system or payment received",
    message: "Booking confirmation with trip summary. Document checklist: passport validity, visa requirements, travel insurance, health requirements, packing suggestions",
    result: "Pre-trip preparation compliance +45%. Day-of trip issue calls -35%.",
  },
  {
    icon: Compass,
    title: "Itinerary and Day-by-Day Update Delivery",
    trigger: "24 hours before trip departure",
    message: "Day-by-day itinerary PDF. Hotel confirmation PDFs. Emergency contact numbers. Local SIM recommendation. WhatsApp support number for in-trip help.",
    result: "Customer confidence +40%. Support escalations during trip -30%.",
  },
  {
    icon: FileText,
    title: "Visa and Documentation Follow-Up",
    trigger: "Visa application requirement identified at booking- trigger at Day -45 and -30",
    message: "Visa requirement checklist. Embassy appointment booking guidance. Document upload via WhatsApp Flow (passport scan, photo, bank statement).",
    result: "Visa document submission on time +55%. Last-minute visa panic -70%.",
  },
  {
    icon: Bell,
    title: "Pre-Departure Reminder and Weather Briefing",
    trigger: "48 hours before departure",
    message: "Flight timing, terminal, check-in deadline, baggage allowance, destination weather forecast, currency exchange tip, emergency contacts",
    result: "Flight miss rate near zero. Customer preparedness calls -60%.",
  },
  {
    icon: Star,
    title: "Post-Trip Review and Next Trip Recommendation",
    trigger: "Return date + 48 hours",
    message: "Trip feedback with 5-star rating. Personalised next destination recommendation based on trip type. Early bird discount for next booking.",
    result: "Review submission rate 5x vs email. Repeat booking within 12 months +38%.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  { metric: "Enquiry-to-booking conversion", before: "15% (email and phone)", after: "35% (WhatsApp chatbot + consultant)", source: "GCM travel agency client India" },
  { metric: "Booking confirmation open rate", before: "28% (email)", after: "97% (WhatsApp)", source: "GCM travel client data" },
  { metric: "Visa document collection on time", before: "45%", after: "78%", source: "GCM travel agency post-deployment" },
  { metric: "In-trip support queries escalated to call centre", before: "100%", after: "35% (WhatsApp resolves 65%)", source: "GCM tour operator client" },
  { metric: "Post-trip review submission rate", before: "3%", after: "18%", source: "GCM travel client WhatsApp automation" },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  { icon: Database, title: "Booking system integration", desc: "Rezdy, TravelCarma, custom booking engines- confirmation trigger, itinerary generation" },
  { icon: FileText, title: "Document collection", desc: "WhatsApp Flows for passport, visa, insurance document upload- structured data to backend" },
  { icon: Headphones, title: "In-trip support", desc: "24/7 WhatsApp chatbot for common in-trip queries + agent handoff for emergencies" },
  { icon: Globe, title: "Multi-language", desc: "Hindi, English- destination-specific language support for international trips" },
  { icon: CreditCard, title: "Payment integration", desc: "Razorpay, PayU for advance booking payment and balance collection via WhatsApp link" },
  { icon: Camera, title: "CTWA campaigns", desc: "Click-to-WhatsApp ads for holiday package promotions on Facebook and Instagram" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp improve travel booking conversion in India?",
    a: "WhatsApp responds to travel enquiries instantly- within seconds of a prospect submitting a form or clicking a WhatsApp ad. The chatbot captures destination interest, sends relevant package options with images and pricing, and routes the prospect to a consultant for personalised assistance. This immediate engagement- vs the 4-6 hour email response common in Indian travel agencies- increases enquiry-to-booking conversion by 2.5x.",
  },
  {
    q: "Can WhatsApp send flight and hotel booking confirmations?",
    a: "Yes. Get Click Media integrates with your booking system- when a booking is confirmed, WhatsApp automatically sends a comprehensive confirmation including: booking reference, passenger names, flight details, hotel name and address, check-in and check-out dates, and a complete document checklist for the trip.",
  },
  {
    q: "How does WhatsApp support work for travellers during a trip?",
    a: "A dedicated WhatsApp number (or your existing business number) acts as the in-trip support channel. Common queries- hotel directions, local transport, restaurant recommendations- are handled by a chatbot FAQ. Emergencies- medical, lost documents, flight changes- are immediately escalated to a live agent. WhatsApp enables 24/7 support without requiring 24/7 staffing.",
  },
  {
    q: "Does Get Click Media support WhatsApp for international tour operators?",
    a: "Yes. GCM supports multi-language WhatsApp communication (Hindi, English, and regional languages) for India-bound international visitors and India-origin international travellers. Currency, timezone, and language settings are configured per deployment.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "Click to WhatsApp Ads", href: "/whatsapp-click-to-whatsapp-ads" },
  { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
  { label: "WhatsApp API for Travel", href: "/whatsapp-api-travel" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Hospitality", href: "/whatsapp-api-hospitality" },
  { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPITravelPage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Travel & Tourism"
      heroEyebrow="Travel & Tourism WhatsApp API"
      heroTitle="WhatsApp Business API for Travel and Tourism"
      heroHighlight="Booking Confirmation, Itinerary and Support India"
      heroDescription={
        <>
          WhatsApp Business API for travel enables Indian tour operators, OTAs, and travel agencies to
          automate booking confirmations, itinerary delivery, visa document collection, pre-trip briefings,
          and in-trip support.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with PMS and booking systems</strong>{" "}
         - reducing manual communication effort by 65% while increasing booking conversion from enquiry by 2.5x.
        </>
      }
      heroImage="/images/whatsapp/travel/whatsapp-api-for-travel.webp"
      heroImageAlt="WhatsApp API Travel dashboard- booking confirmations, itinerary delivery, and in-trip support messaging"
      heroTrustLine="Official Meta BSP · Booking system & PMS integration · Multi-language support · India-based support"
      stats={[
        { value: "2.5x", label: "Enquiry-to-booking conversion via WhatsApp" },
        { value: "65%", label: "Reduction in manual communication effort" },
        { value: "₹45K", label: "Average package booking value via WhatsApp" },
        { value: "4.7/5", label: "Customer satisfaction for WA-managed trips" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for travel enables Indian tour operators, OTAs, and travel agencies to
          automate booking confirmations, itinerary delivery, visa document collection, pre-trip briefings,
          and in-trip support.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with PMS and booking systems</strong>{" "}
         - reducing manual communication effort by 65% while increasing booking conversion from enquiry by 2.5x.
        </>
      }
      insightCallout={
        <>
          Indian travellers book <strong>60% of their travel</strong> on mobile devices- and WhatsApp is
          their primary communication channel. Travel agents and OTAs that respond to enquiries via WhatsApp
          within minutes convert <strong>3x more</strong> than those responding via email hours later.
        </>
      }
      whyIndustryTitle="Why Travel and Tourism Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Indian travel agencies handling 50+ enquiries daily cannot personally respond to each one fast
          enough. Slow response loses business to competitors who respond in minutes.
        </>,
        <>
          WhatsApp chatbot gives every enquirer an instant response with destination information, package
          options, and pricing- keeping the prospect engaged while your consultants focus on closing
          high-value bookings. With <strong>2.5x higher booking conversion</strong> and{" "}
          <strong>97% confirmation open rates</strong>, WhatsApp is rapidly becoming the standard for travel
          communication in India.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Travel agents and OTAs that respond to enquiries via WhatsApp
          within minutes convert 3x more than those responding via email hours later. The entire travel
          booking journey- from enquiry to itinerary to in-trip support- is now expected on WhatsApp.
        </>
      }
      imageSections={[
        {
          eyebrow: "Travel Management Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for travel operators</span>
            </>
          ),
          description:
            "Manage all traveller communication from a single dashboard- booking confirmations, itinerary delivery, visa document collection, pre-trip briefings, and in-trip support- with full integration to your booking system.",
          bullets: [
            "Instant enquiry handling with package carousels",
            "Automated booking confirmation and document checklist",
            "Itinerary delivery with day-by-day updates",
            "24/7 in-trip support with chatbot + agent handoff",
          ],
          image: "/images/whatsapp/travel/whatsapp-api-for-travel-dashboard.webp",
          imageAlt: "WhatsApp API Travel dashboard- booking confirmations, itinerary delivery, visa collection, and in-trip support",
        },
        {
          eyebrow: "Itinerary Automation",
          title: (
            <>
              WhatsApp itinerary delivery <span className="text-[#2563eb]">with day-by-day updates</span>
            </>
          ),
          description:
            "Automated itinerary delivery 24 hours before departure- day-by-day schedule, hotel confirmations, emergency contacts, and local recommendations. Customers arrive prepared, reducing support escalations during the trip by 30%.",
          bullets: [
            "Day-by-day itinerary PDF with activity details",
            "Hotel confirmation PDFs and check-in details",
            "Emergency contact numbers and support channel",
            "Local SIM and currency exchange recommendations",
          ],
          image: "/images/whatsapp/travel/whatsapp-api-travel-itinerary-preview.webp",
          imageAlt: "WhatsApp travel itinerary preview- day-by-day schedule, hotel confirmations, and emergency contacts",
          imageSide: "left",
        },
        {
          eyebrow: "Booking System Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">your booking and PMS systems</span>
            </>
          ),
          description:
            "Get Click Media integrates with leading travel booking systems- Rezdy, TravelCarma, and custom booking engines- enabling automated WhatsApp communication from enquiry to post-trip review. Setup takes 3-5 days after WhatsApp API onboarding is complete.",
          bullets: ["Rezdy", "TravelCarma", "Custom booking engines", "PMS integration", "Itinerary generation"],
          image: "/images/whatsapp/travel/whatsapp-api-travel-booking-system-integration.webp",
          imageAlt: "WhatsApp API travel booking system integration- Rezdy, TravelCarma, and custom booking engines",
          imageSide: "left",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for Travel and Tourism- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for Travel and Tourism"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform travel communication with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for travel with booking system integration, automated itinerary delivery, and 24/7 in-trip support."
      schema={schema}
    />
  );
}
