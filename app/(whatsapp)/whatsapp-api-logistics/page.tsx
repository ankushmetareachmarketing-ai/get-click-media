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
  Truck,
  Package,
  MapPin,
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
  Warehouse,
  Route,
} from "lucide-react";

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

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPILogisticsPage() {
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
          <li className="text-[#2563eb] font-medium">Logistics</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Logistics WhatsApp API
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Business API for Logistics<br />
            <span className="text-[#38bdf8]">Shipment Tracking, Delivery Alerts and Fleet India</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            WhatsApp Business API for logistics enables Indian courier companies, 3PL providers, and
            fleet operators to automate shipment tracking updates, delivery notifications, failed
            delivery recovery, and customer delivery preference collection. Get Click Media integrates
            WhatsApp with TMS and WMS platforms — reducing failed delivery rates by 34% and customer
            support calls by 55%.
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
              WhatsApp Business API for logistics enables Indian courier companies, 3PL providers, and
              fleet operators to automate shipment tracking updates, delivery notifications, failed
              delivery recovery, and customer delivery preference collection.
              <strong className="text-gray-900"> Get Click Media integrates WhatsApp with TMS and WMS platforms</strong>
              — reducing failed delivery rates by 34% and customer support calls by 55%.
            </p>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
            <p className="text-sm text-red-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-red-500" />
              India processes over <strong>25 million daily shipments</strong> through e-commerce, B2B
              logistics, and direct courier services. Failed deliveries cost the industry
              <strong> ₹45 per failed attempt</strong> in re-delivery and reverse logistics costs.
              WhatsApp delivery management — real-time updates, customer confirmation before delivery,
              and instant rescheduling — is the most effective tool Indian logistics companies have to
              reduce failed deliveries.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Get Click Media integrates with leading Indian TMS platforms and custom logistics systems —
            enabling end-to-end WhatsApp communication from pickup confirmation to final delivery.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "34%", label: "Reduction in failed delivery attempts" },
            { value: "55%", label: "Fewer customer service calls on delivery status" },
            { value: "2.1x", label: "Faster delivery dispute resolution" },
            { value: "92%", label: "Customer satisfaction with WhatsApp updates" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE SECTION: Logistics Dashboard ────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Shipment Management Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">for logistics operators</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all shipment communication from a single dashboard — pickup confirmation,
                out-for-delivery alerts, failed delivery recovery, proof of delivery, and B2B
                shipment updates — with full integration to your TMS and WMS systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Automated pickup and dispatch notifications</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Out-for-delivery alerts with confirmation buttons</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Failed delivery recovery with instant rescheduling</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Proof of delivery with photo and timestamp</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/logistics-dashboard.webp"
                  alt="WhatsApp API Logistics dashboard — shipment tracking, delivery alerts, failed delivery recovery, and POD automation"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY LOGISTICS NEEDS WHATSAPP ───────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="why-logistics">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Logistics Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why Logistics Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Indian customers track their shipments <strong>3-5 times per day</strong> via IVR or
              website — each call or visit represents a cost to the logistics provider and frustration
              for the customer.
            </p>
            <p>
              WhatsApp proactive updates eliminate this behaviour — customers receive updates before
              they need to search for them, and can reschedule delivery with a single button tap.
              With <strong>34% reduction in failed deliveries</strong> and <strong>55% fewer customer
              support calls</strong>, WhatsApp is rapidly becoming the standard for logistics
              communication in India.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> Failed deliveries cost the industry ₹45 per failed
                attempt in re-delivery and reverse logistics costs. WhatsApp delivery management —
                real-time updates, customer confirmation before delivery, and instant rescheduling —
                is the most effective tool to reduce failed deliveries.
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
              WhatsApp API Use Cases for Logistics — 6 Automations
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

      {/* ── IMAGE SECTION: WhatsApp Delivery Alert Preview ──────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Delivery Alert Automation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp delivery alerts <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">with one-tap rescheduling</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Automated out-for-delivery alerts with confirm, reschedule, and delivery instruction
                buttons. Customers can choose a time that works for them — reducing failed first-attempt
                deliveries by 28-34% compared to no pre-notification.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Out-for-delivery alert with agent name and contact</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Confirm delivery timing button</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Reschedule delivery with preferred time selection</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Delivery instructions for agent (gate code, floor)</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 max-w-sm mx-auto">
                <Image
                  src="/images/whatsapp/logistics-delivery-alert.webp"
                  alt="WhatsApp delivery alert preview — out-for-delivery with confirm, reschedule, and delivery instructions buttons"
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
              Real results from Indian logistics companies
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

      {/* ── IMAGE SECTION: TMS Integration ──────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/logistics-tms-integration.webp"
                  alt="WhatsApp API TMS integration — FarEye, Locus, Shiprocket, and custom TMS platforms"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
                TMS & WMS Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Connect WhatsApp with <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">your TMS and WMS systems</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media integrates with leading logistics platforms — FarEye, Locus, Shiprocket,
                and custom TMS systems — enabling automated WhatsApp communication at every shipment
                milestone from pickup to final delivery.
              </p>
              <div className="flex flex-wrap gap-3">
                {["FarEye", "Locus", "Shiprocket", "Custom TMS", "WMS integration", "REST API webhooks"].map((item) => (
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
              Get Click Media&apos;s WhatsApp API Capabilities for Logistics
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
              WhatsApp API for Logistics
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
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
              { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
              { label: "WhatsApp API for Logistics", href: "/whatsapp-api-logistics" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Travel", href: "/whatsapp-api-travel" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
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
                Ready to transform logistics communication with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for logistics with TMS and WMS integration,
                automated delivery alerts, and proof of delivery automation.
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