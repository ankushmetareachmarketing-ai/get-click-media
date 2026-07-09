import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  ShieldCheck,
  Users,
  Clock,
  Headphones,
  Building2,
  ChevronDown,
  AlertTriangle,
  Plane,
  Hotel,
  Calendar,
  FileText,
  Bell,
  TrendingUp,
  MessageSquare,
  Settings,
  Database,
  Globe,
  Camera,
  CreditCard,
  BarChart3,
  MapPin,
  Luggage,
  Compass,
  Star,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp API for Travel and Tourism — Booking Confirmation, Itinerary and Support India | Get Click Media",
  description:
    "WhatsApp Business API for travel enables Indian tour operators, OTAs, and travel agencies to automate booking confirmations, itinerary delivery, visa document collection, pre-trip briefings, and in-trip support.",
  keywords:
    "WhatsApp API for Travel India, WhatsApp Travel Agency India, WhatsApp Booking Confirmation Travel, WhatsApp Tour Operator India, Travel WhatsApp Automation India, WhatsApp Itinerary India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-travel" },
  openGraph: {
    title: "WhatsApp API for Travel and Tourism — Booking Confirmation, Itinerary and Support India",
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
          acceptedAnswer: { "@type": "Answer", text: "WhatsApp responds to travel enquiries instantly — within seconds of a prospect submitting a form or clicking a WhatsApp ad. The chatbot captures destination interest, sends relevant package options with images and pricing, and routes the prospect to a consultant for personalised assistance. This immediate engagement — vs the 4-6 hour email response common in Indian travel agencies — increases enquiry-to-booking conversion by 2.5x." },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp send flight and hotel booking confirmations?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Get Click Media integrates with your booking system — when a booking is confirmed, WhatsApp automatically sends a comprehensive confirmation including: booking reference, passenger names, flight details, hotel name and address, check-in and check-out dates, and a complete document checklist for the trip." },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp support work for travellers during a trip?",
          acceptedAnswer: { "@type": "Answer", text: "A dedicated WhatsApp number (or your existing business number) acts as the in-trip support channel. Common queries — hotel directions, local transport, restaurant recommendations — are handled by a chatbot FAQ. Emergencies — medical, lost documents, flight changes — are immediately escalated to a live agent. WhatsApp enables 24/7 support without requiring 24/7 staffing." },
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
    trigger: "Visa application requirement identified at booking — trigger at Day -45 and -30",
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
  { icon: Database, title: "Booking system integration", desc: "Rezdy, TravelCarma, custom booking engines — confirmation trigger, itinerary generation" },
  { icon: FileText, title: "Document collection", desc: "WhatsApp Flows for passport, visa, insurance document upload — structured data to backend" },
  { icon: Headphones, title: "In-trip support", desc: "24/7 WhatsApp chatbot for common in-trip queries + agent handoff for emergencies" },
  { icon: Globe, title: "Multi-language", desc: "Hindi, English — destination-specific language support for international trips" },
  { icon: CreditCard, title: "Payment integration", desc: "Razorpay, PayU for advance booking payment and balance collection via WhatsApp link" },
  { icon: Camera, title: "CTWA campaigns", desc: "Click-to-WhatsApp ads for holiday package promotions on Facebook and Instagram" },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp improve travel booking conversion in India?",
    a: "WhatsApp responds to travel enquiries instantly — within seconds of a prospect submitting a form or clicking a WhatsApp ad. The chatbot captures destination interest, sends relevant package options with images and pricing, and routes the prospect to a consultant for personalised assistance. This immediate engagement — vs the 4-6 hour email response common in Indian travel agencies — increases enquiry-to-booking conversion by 2.5x.",
  },
  {
    q: "Can WhatsApp send flight and hotel booking confirmations?",
    a: "Yes. Get Click Media integrates with your booking system — when a booking is confirmed, WhatsApp automatically sends a comprehensive confirmation including: booking reference, passenger names, flight details, hotel name and address, check-in and check-out dates, and a complete document checklist for the trip.",
  },
  {
    q: "How does WhatsApp support work for travellers during a trip?",
    a: "A dedicated WhatsApp number (or your existing business number) acts as the in-trip support channel. Common queries — hotel directions, local transport, restaurant recommendations — are handled by a chatbot FAQ. Emergencies — medical, lost documents, flight changes — are immediately escalated to a live agent. WhatsApp enables 24/7 support without requiring 24/7 staffing.",
  },
  {
    q: "Does Get Click Media support WhatsApp for international tour operators?",
    a: "Yes. GCM supports multi-language WhatsApp communication (Hindi, English, and regional languages) for India-bound international visitors and India-origin international travellers. Currency, timezone, and language settings are configured per deployment.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPITravelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── BREADCRUMB ─────────────────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/whatsapp-business-api" className="hover:text-[#2563eb] transition-colors">WhatsApp Business API</Link></li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">Travel & Tourism</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Travel & Tourism WhatsApp API
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Business API for Travel and Tourism<br />
            <span className="text-[#38bdf8]">Booking Confirmation, Itinerary and Support India</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            WhatsApp Business API for travel enables Indian tour operators, OTAs, and travel agencies to
            automate booking confirmations, itinerary delivery, visa document collection, pre-trip briefings,
            and in-trip support. Get Click Media integrates WhatsApp with PMS and booking systems —
            reducing manual communication effort by 65% while increasing booking conversion from enquiry by 2.5x.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/whatsapp-api-pricing-india"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              View Pricing
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
              Start WhatsApp Onboarding
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Business API for travel enables Indian tour operators, OTAs, and travel agencies to
              automate booking confirmations, itinerary delivery, visa document collection, pre-trip briefings,
              and in-trip support.
              <strong className="text-gray-900"> Get Click Media integrates WhatsApp with PMS and booking systems</strong>
              — reducing manual communication effort by 65% while increasing booking conversion from enquiry by 2.5x.
            </p>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-blue-500" />
              Indian travellers book <strong>60% of their travel</strong> on mobile devices — and WhatsApp is
              their primary communication channel. Travel agents and OTAs that respond to enquiries via WhatsApp
              within minutes convert <strong>3x more</strong> than those responding via email hours later.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            The entire travel booking journey — from enquiry to itinerary to in-trip support — is now expected
            on WhatsApp. Get Click Media integrates with property management systems, booking engines, and
            travel CRMs — enabling automated WhatsApp communication at every stage of the traveller journey.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "2.5x", label: "Enquiry-to-booking conversion via WhatsApp" },
            { value: "65%", label: "Reduction in manual communication effort" },
            { value: "₹45K", label: "Average package booking value via WhatsApp" },
            { value: "4.7/5", label: "Customer satisfaction for WA-managed trips" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE SECTION: Travel Dashboard ────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Travel Management Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">for travel operators</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all traveller communication from a single dashboard — booking confirmations,
                itinerary delivery, visa document collection, pre-trip briefings, and in-trip support —
                with full integration to your booking system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Instant enquiry handling with package carousels</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Automated booking confirmation and document checklist</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Itinerary delivery with day-by-day updates</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>24/7 in-trip support with chatbot + agent handoff</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/travel-dashboard.webp"
                  alt="WhatsApp API Travel dashboard — booking confirmations, itinerary delivery, visa collection, and in-trip support"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TRAVEL NEEDS WHATSAPP ───────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="why-travel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Travel Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why Travel and Tourism Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Indian travel agencies handling 50+ enquiries daily cannot personally respond to each one
              fast enough. Slow response loses business to competitors who respond in minutes.
            </p>
            <p>
              WhatsApp chatbot gives every enquirer an instant response with destination information,
              package options, and pricing — keeping the prospect engaged while your consultants focus
              on closing high-value bookings. With <strong>2.5x higher booking conversion</strong> and
              <strong>97% confirmation open rates</strong>, WhatsApp is rapidly becoming the standard
              for travel communication in India.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> Travel agents and OTAs that respond to enquiries via
                WhatsApp within minutes convert 3x more than those responding via email hours later.
                The entire travel booking journey — from enquiry to itinerary to in-trip support —
                is now expected on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API Use Cases for Travel and Tourism — 6 Automations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <uc.icon className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-(family-name:--font-syne)">{uc.title}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-700">Trigger:</span> <span className="text-gray-500">{uc.trigger}</span></p>
                  <p><span className="font-semibold text-gray-700">WhatsApp message sent:</span> <span className="text-gray-500">{uc.message}</span></p>
                  <p><span className="font-semibold text-gray-700">Business result:</span> <span className="text-green-600">{uc.result}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: WhatsApp Itinerary Preview ───────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Itinerary Automation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp itinerary delivery <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">with day-by-day updates</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Automated itinerary delivery 24 hours before departure — day-by-day schedule, hotel
                confirmations, emergency contacts, and local recommendations. Customers arrive prepared,
                reducing support escalations during the trip by 30%.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Day-by-day itinerary PDF with activity details</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Hotel confirmation PDFs and check-in details</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Emergency contact numbers and support channel</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Local SIM and currency exchange recommendations</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 max-w-sm mx-auto">
                <Image
                  src="/images/whatsapp/travel-itinerary.webp"
                  alt="WhatsApp travel itinerary preview — day-by-day schedule, hotel confirmations, and emergency contacts"
                  width={400}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE BENCHMARKS ──────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="performance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Performance Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Real results from Indian travel agencies and OTAs
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold text-red-400">Before WhatsApp API</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">After WhatsApp API</th>
                  <th className="text-left px-4 py-4 font-semibold text-white/60">Source</th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.metric}</td>
                    <td className="px-4 py-3.5 text-center text-red-400">{row.before}</td>
                    <td className="px-4 py-3.5 text-center text-[#38bdf8]">{row.after}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: Booking System Integration ───────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/travel-booking-integration.webp"
                  alt="WhatsApp API travel booking system integration — Rezdy, TravelCarma, and custom booking engines"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
                Booking System Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Connect WhatsApp with <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">your booking and PMS systems</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media integrates with leading travel booking systems — Rezdy, TravelCarma, and
                custom booking engines — enabling automated WhatsApp communication from enquiry to
                post-trip review.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Rezdy", "TravelCarma", "Custom booking engines", "PMS integration", "Itinerary generation"].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Setup takes 3-5 days after WhatsApp API onboarding is complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Get Click Media&apos;s WhatsApp API Capabilities for Travel and Tourism
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map(c => (
              <div key={c.title} className="rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-[#38bdf8]" />
                </span>
                <h3 className="text-sm font-bold text-white leading-snug">{c.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API for Travel and Tourism
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-gray-50 border border-gray-100 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
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
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Ready to transform travel communication with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for travel with booking system integration,
                automated itinerary delivery, and 24/7 in-trip support.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Start Onboarding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}