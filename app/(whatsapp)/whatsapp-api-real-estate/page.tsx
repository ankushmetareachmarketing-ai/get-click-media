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
  Home,
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
} from "lucide-react";

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

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIRealEstatePage() {
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
          <li className="text-[#2563eb] font-medium">Real Estate</li>
        </ol>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Real Estate WhatsApp API
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
            WhatsApp Business API for Real Estate<br />
            <span className="text-[#38bdf8]">Lead Qualification, Site Visits and Booking India</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            WhatsApp Business API for real estate enables Indian property developers, brokers, and PropTech
            platforms to automate property enquiry handling, site visit booking, payment milestone alerts,
            and post-booking documentation. Get Click Media integrates WhatsApp with Sell.do and custom
            real estate CRM platforms — tripling site visit conversion rates and reducing lead response
            time from hours to seconds.
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
              WhatsApp Business API for real estate enables Indian property developers, brokers, and PropTech
              platforms to automate property enquiry handling, site visit booking, payment milestone alerts,
              and post-booking documentation.
              <strong className="text-gray-900"> Get Click Media integrates WhatsApp with Sell.do</strong>
              and custom real estate CRM platforms — tripling site visit conversion rates and reducing lead
              response time from hours to seconds.
            </p>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
            <p className="text-sm text-red-800 leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline mr-2 text-red-500" />
              Indian real estate receives millions of property enquiries annually through portals like
              99acres, MagicBricks, and Housing. The average enquiry response time from real estate companies
              is <strong>4-6 hours</strong>. Research shows that a lead not responded to within 5 minutes has
              a <strong>78% lower chance</strong> of converting. WhatsApp chatbot responds in <strong>5 seconds</strong>.
            </p>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mt-6">
            Get Click Media integrates with Sell.do — India's leading real estate CRM — as well as custom
            builder portals, enabling end-to-end WhatsApp automation from first enquiry to booking confirmation
            and payment milestones.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "3x", label: "Higher site visit booking rate vs phone follow-up" },
            { value: "78%", label: "Lower conversion if not responded within 5 min" },
            { value: "₹1.2L", label: "Average cost of a real estate portal lead" },
            { value: "92%", label: "Enquiry acknowledgement open rate via WhatsApp" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── IMAGE SECTION: Real Estate Dashboard ────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Lead Management Hub
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Complete WhatsApp API platform <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">for real estate developers</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Manage all lead and customer communication from a single dashboard — instant lead
                qualification, site visit booking, brochure delivery, payment milestone reminders, and
                post-booking documentation — with full integration to your real estate CRM.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Instant lead acknowledgement and qualification</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Automated site visit booking and confirmation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Property brochure and virtual tour delivery</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Payment milestone reminders with Pay Now button</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/realestate-dashboard.webp"
                  alt="WhatsApp API Real Estate dashboard — lead qualification, site visit booking, brochure delivery, and payment milestone reminders"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY REAL ESTATE NEEDS WHATSAPP ───────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="why-realestate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why Real Estate Needs WhatsApp
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why Real Estate Businesses in India Need WhatsApp API
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Real estate developers and brokers pay <strong>₹50,000 to ₹2,00,000 per qualified lead</strong>
              from property portals. These expensive leads are wasted when sales teams cannot follow up
              within minutes.
            </p>
            <p>
              WhatsApp chatbot eliminates this problem — acknowledging every lead instantly, qualifying
              budget and timeline, sending relevant property brochures, and booking site visits automatically.
              With <strong>3x higher site visit conversion</strong> and <strong>92% enquiry open rates</strong>,
              WhatsApp is rapidly becoming the standard for real estate communication in India.
            </p>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <p className="text-sm text-blue-800 font-medium">
                💡 <strong>Key insight:</strong> Research shows that a lead not responded to within 5 minutes
                has a 78% lower chance of converting. WhatsApp chatbot responds in 5 seconds — ensuring
                100% of leads are followed up regardless of team availability.
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
              WhatsApp API Use Cases for Real Estate — 6 Automations
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

      {/* ── IMAGE SECTION: WhatsApp Site Visit Booking Preview ───────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest">
                Site Visit Automation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                WhatsApp site visit booking <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">with one-tap confirmation</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Interactive WhatsApp site visit booking with slot selection, confirmation, and reminder
                sequences. A 3-message reminder sequence (48hr, morning-of, post-visit) reduces no-shows
                from 45% to 18% in typical Indian real estate deployments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Available slot selection in-chat</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Google Maps link for directions</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>48-hour reminder with all visit details</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <span>Morning-of reminder with sales person contact</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 max-w-sm mx-auto">
                <Image
                  src="/images/whatsapp/realestate-site-visit.webp"
                  alt="WhatsApp site visit booking preview — slot selection, confirmation, and reminder with Google Maps link"
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
              Real results from Indian real estate developers
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

      {/* ── IMAGE SECTION: Sell.do Integration ───────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/whatsapp/realestate-sell-do-integration.webp"
                  alt="WhatsApp API Sell.do integration — bi-directional CRM sync for real estate lead management"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-widest">
                CRM Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Connect WhatsApp with <br className="hidden sm:inline" />
                <span className="text-[#2563eb]">Sell.do and custom real estate CRM</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Get Click Media's bi-directional Sell.do integration — WhatsApp enquiries automatically
                create leads in Sell.do with qualification data. Stage changes in Sell.do trigger WhatsApp
                messages. Sales team activities are logged in both systems.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Sell.do integration", "99acres lead routing", "MagicBricks lead routing", "Housing lead routing", "Custom CRM API"].map((item) => (
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
              Get Click Media&apos;s WhatsApp API Capabilities for Real Estate
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
              WhatsApp API for Real Estate
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
              { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
              { label: "Click to WhatsApp Ads", href: "/whatsapp-click-to-whatsapp-ads" },
              { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
              { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
              { label: "WhatsApp API for Education", href: "/whatsapp-api-education" },
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
                Ready to transform real estate lead management with WhatsApp?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media provides WhatsApp API for real estate with Sell.do integration, portal
                lead routing, and automated site visit booking.
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