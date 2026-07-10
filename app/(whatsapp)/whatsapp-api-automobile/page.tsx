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
  Car,
  Calendar,
  Tag,
  Bell,
  TrendingUp,
  MessageSquare,
  Settings,
  Database,
  Globe,
  Camera,
  CreditCard,
  BarChart3,
  Heart,
  Sparkles,
  Wrench,
  Key,
  Shield,
  Star,
} from "lucide-react";

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

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIAutomobilePage() {
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
          <li className="text-[#2563eb] font-medium">Automobile</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                Automobile WhatsApp API
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API <br />
                for Automobile Dealers
              </h1>

              <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-xl">
                Automate test drive bookings, service reminders, EMI updates, and customer support with WhatsApp Business API integrated with your CRM or DMS.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Start Onboarding
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/whatsapp/automobile/whatsapp-api-for-automotive.webp"
                alt="WhatsApp Business API for Automobile Dealers"
                className="w-full max-w-lg"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Business API for automobile dealers and OEMs enables automated test drive booking,
              service appointment reminders, EMI pre-approval alerts, new model launch campaigns, and
              post-sales relationship management.
              <strong className="text-gray-900"> Get Click Media integrates WhatsApp with DMS platforms</strong>
              and automotive CRMs — tripling test drive conversions and reducing service no-shows by 40%.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/whatsapp-api-pricing-india"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
            >
              View Pricing
            </Link>
          </div>

          <div className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-blue-500" />
              India is the <strong>third-largest automobile market</strong> globally, selling 4+ million
              passenger vehicles annually. Modern car buyers research online, compare models on YouTube,
              and expect instant engagement on WhatsApp. Dealers who respond to car enquiries within
              minutes via WhatsApp convert <strong>3x more test drives</strong> than those responding
              the next day via phone.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Get Click Media integrates with Automate, CDK Global, and custom dealer management systems —
            enabling end-to-end WhatsApp engagement from first model enquiry to annual service reminder
            and trade-in offer.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "3x", label: "Test drive booking rate vs phone follow-up" },
            { value: "40%", label: "Reduction in service no-shows" },
            { value: "₹18L", label: "Average purchase value per converted WA lead" },
            { value: "88%", label: "Service reminder open rate via WhatsApp" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="pb-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-[#2563eb] font-semibold hover:underline"
          >
            Get these results for your dealership
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── IMAGE SECTION: Automobile Dashboard ────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Dealership Management Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">for automobile dealers</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all customer communication from a single dashboard — test drive booking,
                model launch campaigns, service reminders, finance pre-approval, and trade-in offers
                — with full integration to your DMS and CRM systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Instant test drive booking with slot selection</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Automated service reminders with confirm/reschedule</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>EMI pre-approval offers with finance attach</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Post-service CSAT and Google review collection</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full">
                <Image
                  src="/images/whatsapp/automobile/automobile-dashboard.png"
                  alt="WhatsApp API Automobile dashboard — test drive booking, service reminders, model launch campaigns, and finance pre-approval"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AUTOMOBILE NEEDS WHATSAPP ────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="why-automobile">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Automobile Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why Automobile Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Automobile dealers receive enquiries from multiple channels — manufacturer website,
              car portals (CarDekho, CarWale), CTWA ads, and walk-ins. Without instant WhatsApp
              follow-up, portal leads go cold within 30 minutes.
            </p>
            <p>
              WhatsApp chatbot responds immediately to every enquiry with model brochure, EMI calculator,
              and test drive booking — converting expensive portal leads into showroom visits.
              With <strong>3x test drive bookings</strong> and <strong>40% reduction in service no-shows</strong>,
              WhatsApp is rapidly becoming the standard for automotive customer engagement in India.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> Modern car buyers research online, compare models on
                YouTube, and expect instant engagement on WhatsApp. Dealers who respond to car enquiries
                within minutes via WhatsApp convert 3x more test drives than those responding the next
                day via phone.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Transform Your Dealership
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="use-cases">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API Use Cases for Automobile — 6 Automations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#2563eb] hover:shadow-md transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
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

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Implement These Automations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: WhatsApp Test Drive Preview ───────────────────── */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Test Drive Automation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp test drive booking <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">with one-tap confirmation</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Automated test drive booking with model brochure, variant comparison, and available
                slots. Portal leads responded to within 5 minutes convert at 3x the rate of leads
                followed up after an hour.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Instant model brochure and variant comparison</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Available test drive slots with selection</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>EMI calculator in-chat for finance pre-approval</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Dealer location and directions via Google Maps</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
                >
                  Start Automating Test Drives
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full">
                <Image
                  src="/images/whatsapp/automobile/automobile-test-drive.webp"
                  alt="WhatsApp test drive booking preview — model brochure, variant comparison, and one-tap test drive booking"
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
      <section className="py-20 sm:py-28 bg-white" id="performance">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Performance Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Real results from Indian automobile dealers
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
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Get These Results for Your Dealership
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMAGE SECTION: DMS Integration ──────────────────────────────── */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full">
                <Image
                  src="/images/whatsapp/automobile/automobile-dms-integration.webp"
                  alt="WhatsApp API DMS integration — Automate, CDK Global for automobile dealer management"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
                DMS Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Connect WhatsApp with <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">your DMS and automotive CRM</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media integrates with leading automotive DMS platforms — Automate, CDK Global,
                and custom dealer management systems — enabling automated WhatsApp communication from
                first enquiry to annual service reminder.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Automate", "CDK Global", "Custom DMS", "CarDekho leads", "CarWale leads", "Service triggers"].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-xs font-medium text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Setup takes 3-5 days after WhatsApp API onboarding is complete.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
                >
                  Start DMS Integration
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
              Get Click Media&apos;s WhatsApp API Capabilities for Automobile
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
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0f172a] text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Capabilities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API for Automobile Dealers
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-gray-200 shadow-sm open:shadow-md transition-shadow"
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
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              Still Have Questions? Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
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
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-[#2563eb] font-semibold hover:underline"
            >
              Need help choosing the right solution?
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Ready to transform automotive sales and service with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for automobile dealers with DMS integration,
                automated test drive booking, service reminders, and finance pre-approval.
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