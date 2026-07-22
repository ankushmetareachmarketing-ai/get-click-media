import type { Metadata } from "next";
import {
  Plane,
  Ticket,
  BellRing,
  MapPin,
  Wallet,
  Luggage,
  Database,
  ShieldCheck,
  Globe,
  Clock,
  BadgeCheck,
  Bell,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

export const metadata: Metadata = {
  title: "Bulk SMS for Travel Agencies — Booking & Itinerary Alerts India | Get Click Media",
  description:
    "Bulk SMS for travel agencies and tour operators in India automates booking confirmations, e-ticket delivery, flight and train delay alerts, itinerary reminders, and off-season offers.",
  keywords:
    "bulk sms for travel agencies, sms for tour operators india, booking confirmation sms, flight delay alert sms, travel itinerary sms, pnr sms service",
  alternates: { canonical: "https://getclickmedia.com/bulk-sms-for-travel-industry" },
  openGraph: {
    title: "Bulk SMS for Travel Agencies — Booking & Itinerary Alerts India",
    description:
      "Automate booking confirmations, e-ticket delivery, delay alerts, and itinerary reminders with DLT-compliant bulk SMS for travel agencies.",
    url: "https://getclickmedia.com/bulk-sms-for-travel-industry",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://getclickmedia.com/#org",
      name: "Get Click Media",
      url: "https://getclickmedia.com",
      logo: { "@type": "ImageObject", url: "https://getclickmedia.com/images/gcm-logo.png" },
      address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    },
    {
      "@type": "Service",
      name: "Bulk SMS for Travel Industry India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/bulk-sms-for-travel-industry",
      description:
        "Bulk SMS for travel agencies and tour operators automates booking confirmations, e-ticket delivery, flight and train delay alerts, itinerary reminders, and off-season offers with DLT-compliant delivery.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Bulk SMS Services", item: "https://getclickmedia.com/bulk-sms-service-provider-india" },
        { "@type": "ListItem", position: 3, name: "Bulk SMS for Travel Agencies", item: "https://getclickmedia.com/bulk-sms-for-travel-industry" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do travel agencies send PNR and e-ticket details by SMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A booking or PNR confirmation SMS reaches the traveller instantly and stays accessible in their inbox even without internet access at the airport or station counter — which matters because email can be missed or land in spam, and app notifications require the traveller to have installed and logged into the agency's app. SMS remains the most dependable fallback for must-have travel documents.",
          },
        },
        {
          "@type": "Question",
          name: "Can travel agencies send flight or train delay alerts automatically?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — when integrated with a flight-status or railway-status API, a delay, gate-change, or cancellation event can trigger an SMS to the affected traveller within moments of the update being published, rather than the traveller finding out only at the airport. This is one of the highest-value automations for agencies managing group or corporate travel bookings.",
          },
        },
        {
          "@type": "Question",
          name: "Is off-season offer SMS effective for travel agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Promotional SMS to a consented, non-DND customer database works well for time-boxed travel offers — early-bird packages, off-season destination deals, and group tour openings — because travel purchase decisions are often price-and-timing triggered, and an SMS with a clear deadline creates urgency an email newsletter usually doesn't. It must run on the promotional route, separate from booking-related transactional SMS.",
          },
        },
        {
          "@type": "Question",
          name: "How does bulk SMS help reduce no-shows for guided tours?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A reminder sent the evening before a tour departure — with meeting point, time, and guide contact number — reduces late arrivals and no-shows that disrupt group schedules. Agencies running this reminder alongside the booking confirmation see fewer missed departures on multi-traveller group tours.",
          },
        },
      ],
    },
  ],
};

const USE_CASES = [
  {
    icon: Ticket,
    title: "Booking Confirmation & E-Ticket Delivery",
    trigger: "Flight, train, bus, or package booking confirmed",
    message: "PNR/booking reference, traveller name, and a link to the e-ticket or itinerary PDF.",
    result: "Instant, always-accessible booking proof — no dependency on email or app login.",
  },
  {
    icon: BellRing,
    title: "Flight & Train Delay Alert",
    trigger: "Flight-status or railway-status API reports a delay, gate change, or cancellation",
    message: "Real-time update with the new time or gate, sent directly to the affected traveller.",
    result: "Travellers informed before reaching the airport or station, reducing missed connections.",
  },
  {
    icon: MapPin,
    title: "Tour Departure Reminder",
    trigger: "Guided tour or group departure scheduled for the next day",
    message: "Meeting point, reporting time, and guide contact number sent the evening before.",
    result: "Fewer late arrivals and no-shows disrupting group tour schedules.",
  },
  {
    icon: Wallet,
    title: "Payment Due & Balance Reminder",
    trigger: "Package balance payment due date approaching",
    message: "Amount due, due date, and payment link sent ahead of the deadline.",
    result: "Fewer last-minute cancellations from unpaid balances before departure.",
  },
  {
    icon: Luggage,
    title: "Pre-Departure Checklist & Document Reminder",
    trigger: "A few days before international or long-distance departure",
    message: "Document checklist — passport, visa, boarding time — and a baggage-allowance reminder.",
    result: "Fewer departure-day document issues for international travellers.",
  },
  {
    icon: Plane,
    title: "Off-Season & Early-Bird Offer Blast",
    trigger: "Off-season destination promotion or early-bird package launch",
    message: "Time-boxed offer with a deadline and callback link, sent to the opted-in database.",
    result: "Stronger booking velocity during traditionally slow booking periods.",
  },
];

const PERFORMANCE_DATA = [
  { metric: "Traveller awareness of flight/train delays", before: "At airport/station", after: "Before departure (SMS alert)", source: "GCM travel agency client data" },
  { metric: "Guided tour no-show rate", before: "16%", after: "8% (departure reminder SMS)", source: "GCM tour operator client data" },
  { metric: "Package balance on-time payment", before: "63%", after: "80% (SMS reminder sequence)", source: "GCM travel agency billing data" },
  { metric: "Booking confirmation support queries", before: "Baseline", after: "29% reduction", source: "GCM client operations data" },
  { metric: "SMS delivery rate to traveller numbers", before: "—", after: "99.9% (transactional route)", source: "GCM platform delivery reports" },
];

const CAPABILITIES = [
  { icon: Database, title: "Booking engine & GDS integration", desc: "API integration with booking engines, GDS systems, and flight/railway status feeds for real-time triggers" },
  { icon: ShieldCheck, title: "DLT-registered dual-route templates", desc: "Transactional templates for bookings and alerts, promotional templates for offers — both DLT-registered" },
  { icon: Globe, title: "PAN-India delivery network", desc: "Multi-operator routing for reliable delivery to travellers across every Indian telecom circle" },
  { icon: Clock, title: "Real-time status-triggered alerts", desc: "Instant SMS on delay, gate-change, or cancellation events pulled from flight and railway status APIs" },
  { icon: Bell, title: "Group & corporate booking support", desc: "Bulk-trigger SMS for group tours and corporate travel bookings from a single itinerary update" },
  { icon: BadgeCheck, title: "Sender ID approval support", desc: "GCM manages your agency's approved sender ID so every travel SMS is instantly recognisable" },
];

const FAQS = [
  {
    q: "Why do travel agencies send PNR and e-ticket details by SMS?",
    a: "A booking or PNR confirmation SMS reaches the traveller instantly and stays accessible in their inbox even without internet access at the airport or station counter — which matters because email can be missed or land in spam, and app notifications require the traveller to have installed and logged into the agency's app. SMS remains the most dependable fallback for must-have travel documents.",
  },
  {
    q: "Can travel agencies send flight or train delay alerts automatically?",
    a: "Yes — when integrated with a flight-status or railway-status API, a delay, gate-change, or cancellation event can trigger an SMS to the affected traveller within moments of the update being published, rather than the traveller finding out only at the airport. This is one of the highest-value automations for agencies managing group or corporate travel bookings.",
  },
  {
    q: "Is off-season offer SMS effective for travel agencies?",
    a: "Promotional SMS to a consented, non-DND customer database works well for time-boxed travel offers — early-bird packages, off-season destination deals, and group tour openings — because travel purchase decisions are often price-and-timing triggered, and an SMS with a clear deadline creates urgency an email newsletter usually doesn't. It must run on the promotional route, separate from booking-related transactional SMS.",
  },
  {
    q: "How does bulk SMS help reduce no-shows for guided tours?",
    a: "A reminder sent the evening before a tour departure — with meeting point, time, and guide contact number — reduces late arrivals and no-shows that disrupt group schedules. Agencies running this reminder alongside the booking confirmation see fewer missed departures on multi-traveller group tours.",
  },
];

const RELATED_LINKS = [
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "Transactional SMS Service", href: "/transactional-sms-service" },
  { label: "OTP SMS Service Provider", href: "/otp-sms-service-provider" },
  { label: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
  { label: "Transactional SMS Pricing", href: "/transactional-sms-pricing" },
  { label: "WhatsApp API for Travel", href: "/whatsapp-api-travel" },
  { label: "Bulk SMS for Ecommerce", href: "/bulk-sms-for-ecommerce" },
  { label: "Bulk SMS for Real Estate", href: "/bulk-sms-for-real-estate" },
];

export default function BulkSmsForTravelIndustryPage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Travel & Tourism"
      heroEyebrow="Travel & Tourism Bulk SMS"
      heroTitle="Bulk SMS for Travel Agencies and Tour Operators"
      heroHighlight="Booking & Itinerary Alerts India"
      heroDescription={
        <>
          Automate booking confirmations, e-ticket delivery, flight and train delay alerts,
          itinerary reminders, and off-season offers with DLT-compliant bulk SMS built for Indian
          travel businesses.{" "}
          <strong className="text-gray-900">
            Get Click Media connects bulk SMS to your booking engine and flight/railway status
            feeds — keeping travellers informed before they reach the airport or station.
          </strong>
        </>
      }
      heroImage="/images/bulk-sms/transactional-sms-service-provider.webp"
      heroImageAlt="Bulk SMS for Travel Agencies — booking and itinerary alert dashboard"
      heroTrustLine="TRAI DLT registered · Booking engine & GDS integration · Real-time status alerts · 99.9% uptime"
      stats={[
        { value: "99.9%", label: "SMS delivery uptime" },
        { value: "8%", label: "Average tour no-show rate (post-SMS)" },
        { value: "80%", label: "On-time balance payment rate" },
        { value: "₹0.09", label: "Starting price per SMS" },
      ]}
      aeoParagraph={
        <>
          Bulk SMS for travel agencies automates booking confirmations, e-ticket delivery, flight
          and train delay alerts, tour departure reminders, and off-season offer blasts for
          travellers.{" "}
          <strong className="text-gray-900">Get Click Media integrates bulk SMS with booking engines and flight/railway status APIs</strong>{" "}
          in India — reducing tour no-shows and improving on-time balance payments.
        </>
      }
      insightCallout={
        <>
          Travel communication has a hard deadline built in: a delay alert that arrives after the
          traveller has already left for the airport is useless. SMS's near-instant delivery,
          combined with no dependency on data or app installs, makes it the most dependable way
          to reach a traveller wherever their journey has taken them.
        </>
      }
      whyIndustryTitle="Why Travel Agencies in India Need Bulk SMS"
      whyIndustryParagraphs={[
        <>
          Travellers are, by definition, often away from familiar networks and Wi-Fi — roaming
          data can be patchy, and a travel agency's own app is rarely something a customer keeps
          open mid-journey. SMS works over the basic cellular network almost anywhere, which
          makes it the most reliable channel for anything a traveller genuinely can't miss:
          booking references, gate changes, and delay alerts.
        </>,
        <>
          Group and package travel adds a coordination layer — a departure reminder that reaches
          every traveller in a tour group the evening before does more to prevent a late start
          than any amount of pre-trip briefing. SMS's universal reach makes that kind of
          group-wide reminder simple to run at scale.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Agencies that connect SMS to a live flight or railway
          status feed can alert travellers to a delay or gate change within moments of the
          airline or railway publishing it — often before the traveller sees it on the airport
          display board themselves.
        </>
      }
      imageSections={[
        {
          eyebrow: "Traveller Communication Hub",
          title: (
            <>
              One dashboard for bookings, alerts <span className="text-[#2563eb]">and itinerary reminders</span>
            </>
          ),
          description:
            "Manage every traveller touchpoint — booking confirmations, delay alerts, departure reminders, and payment reminders — from a single SMS dashboard connected to your booking engine and status feeds.",
          bullets: [
            "Triggered SMS from booking engine events",
            "Real-time flight/railway status alerts",
            "Group-wide departure reminders",
            "Real-time delivery and read-rate reports",
          ],
          image: "/images/bulk-sms/transactional-sms-india.webp",
          imageAlt: "Bulk SMS dashboard for travel agencies — booking and delay alerts",
        },
        {
          eyebrow: "Delay Alert Automation",
          title: (
            <>
              Status-triggered alerts <span className="text-[#2563eb]">that reach travellers first</span>
            </>
          ),
          description:
            "Connected to live flight and railway status feeds, a delay, gate-change, or cancellation event fires an SMS to the affected traveller within moments — often before they'd otherwise notice at the airport or station.",
          bullets: [
            "Delay and gate-change alerts",
            "Cancellation and rebooking notice",
            "Group-booking bulk trigger",
            "Departure-day checklist reminder",
          ],
          image: "/images/bulk-sms/bulk-sms-service-provider-india-hero.webp",
          imageAlt: "Travel delay alert SMS sequence preview",
          imageSide: "left",
        },
      ]}
      useCasesTitle="Bulk SMS Use Cases for Travel Agencies — 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's Bulk SMS Capabilities for Travel Agencies"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to keep travellers informed with bulk SMS?"
      bottomCtaDescription="Get Click Media provides DLT-compliant bulk SMS for travel agencies and tour operators with booking engine and status-feed integration."
      schema={schema}
    />
  );
}
