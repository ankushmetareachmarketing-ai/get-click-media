import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  Zap,
  Shield,
  BarChart3,
  MessageSquare,
  Layers,
  Globe,
  Bot,
  Users,
  Workflow,
  ChevronDown,
  Landmark,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Building2,
  Plane,
  Truck,
  ShieldCheck,
  Store,
  Car,
} from "lucide-react";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Business API — Official Provider in India | Get Click Media",
  description:
    "Get Click Media is an official Meta Business Solution Provider offering WhatsApp Business API to 10,000+ Indian businesses. 3–5 day setup, chatbot automation, CRM integration, broadcast & analytics. Pricing from ₹0.40/conversation.",
  keywords:
    "WhatsApp Business API, whatsapp api, meta whatsapp api, waba whatsapp, official whatsapp api, whatsapp business api india, whatsapp api solution, whatsapp business api provider",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-business-api" },
  openGraph: {
    title:
      "WhatsApp Business API — Official Provider in India | Get Click Media",
    description:
      "Official Meta BSP. Automated, rich, interactive WhatsApp messaging at scale — chatbots, broadcast, CRM integration & analytics. 10,000+ businesses served. Setup in 3–5 days.",
    url: "https://getclickmedia.com/whatsapp-business-api",
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
      logo: {
        "@type": "ImageObject",
        url: "https://getclickmedia.com/images/gcm-logo.png",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      knowsAbout: [
        "WhatsApp Business API",
        "RCS Messaging",
        "Bulk SMS India",
        "Meta BSP India",
        "WhatsApp Chatbot",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://getclickmedia.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "WhatsApp Business API",
          item: "https://getclickmedia.com/whatsapp-business-api",
        },
      ],
    },
    {
      "@type": "Service",
      name: "WhatsApp Business API",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "WhatsApp Business Solution Provider",
      url: "https://getclickmedia.com/whatsapp-business-api",
      description:
        "Official Meta BSP providing WhatsApp Business API to Indian businesses. Setup in 3-5 days. 10,000+ businesses served.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is WhatsApp Business API and how is it different from WhatsApp Business App?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp Business API is Meta's enterprise messaging platform for large-scale, automated business communication. Unlike the free WhatsApp Business App — built for small businesses on a single device — the API supports unlimited messages, full automation, multi-agent inboxes, CRM integration, and chatbot flows. It requires a Meta-authorised provider (BSP) like Get Click Media to access.",
          },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp Business API free in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — but the first 1,000 service conversations per month are free. Beyond that, Meta charges per 24-hour conversation session: marketing ₹0.80–0.90, utility and authentication ₹0.40–0.50. Get Click Media charges a platform fee on top of Meta's rates.",
          },
        },
        {
          "@type": "Question",
          name: "How long does WhatsApp Business API setup take in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With Get Click Media managing onboarding, most businesses go live in 3 to 5 business days — covering Meta Business Manager verification, WhatsApp Business Account setup, phone number registration, and template approval, run in parallel.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need TRAI DLT registration for WhatsApp API messages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. WhatsApp Business API is not regulated under TRAI's commercial communication rules, so no DLT entity or template registration is required for WhatsApp messages. You still need customer opt-in for marketing messages.",
          },
        },
        {
          "@type": "Question",
          name: "Can I send WhatsApp messages to DND-registered numbers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WhatsApp Business API is not subject to TRAI DND restrictions. You can message opted-in customers on WhatsApp regardless of their DND registry status — a key advantage over promotional SMS.",
          },
        },
        {
          "@type": "Question",
          name: "What is a WhatsApp Business Solution Provider (BSP)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A BSP is a company authorised by Meta to provide WhatsApp Business API access to other businesses, handling account setup, verification, template submission, and infrastructure. Get Click Media is an official Meta BSP based in Noida, India.",
          },
        },
      ],
    },
  ],
};

const FEATURES = [
  {
    icon: Shield,
    title: "Verified Business Identity (Green Tick)",
    desc: "Your business name appears with Meta's verified checkmark on every message — not a random number. Reduces message ignore rates by 60%+ versus unverified senders.",
    href: "/blog/whatsapp-green-tick-verification",
  },
  {
    icon: Layers,
    title: "Rich Media Messages",
    desc: "Send images, PDFs, videos, and documents natively in the chat — a product photo, policy document, or payment receipt, without an external link.",
  },
  {
    icon: MessageSquare,
    title: "Interactive Message Buttons",
    desc: "Up to 3 CTA buttons or 10 quick-reply chips per message. 'Buy Now', 'Track Order', 'Pay Now' — one tap, dramatically higher conversion vs plain text.",
  },
  {
    icon: Bot,
    title: "WhatsApp Chatbot Automation",
    desc: "Multi-step conversational flows that qualify leads, take orders, book appointments, and resolve support tickets 24/7 — escalating to a live agent when needed.",
    href: "/whatsapp-chatbot",
  },
  {
    icon: Zap,
    title: "WhatsApp Broadcast (Bulk Messaging)",
    desc: "Send personalised messages to thousands of opted-in customers at once — flash sales, reminders, and shipment updates, all in a single send.",
    href: "/whatsapp-broadcast",
  },
  {
    icon: BarChart3,
    title: "Message Templates",
    desc: "WhatsApp requires pre-approved templates for outbound messages. Get Click Media submits and manages utility, marketing, and authentication templates on your behalf.",
    href: "/whatsapp-template-messages",
  },
  {
    icon: Workflow,
    title: "WhatsApp Flows & Product Catalog",
    desc: "In-chat forms for bookings and lead capture, plus a full product catalogue customers can browse and buy from — without leaving WhatsApp.",
    href: "/whatsapp-catalog",
  },
  {
    icon: Globe,
    title: "CRM & Platform Integration",
    desc: "Connect WhatsApp to Salesforce, HubSpot, Zoho, Freshdesk, Shopify, or any custom system via REST API and webhooks.",
    href: "/blog/whatsapp-crm-integration",
  },
  {
    icon: Users,
    title: "Multi-Agent Shared Inbox",
    desc: "Multiple agents handle conversations from one shared inbox — with routing rules, agent assignment, and SLA tracking.",
  },
];

const COMPARISON_APP_API = [
  {
    feature: "Who it is for",
    app: "Small businesses — 1–5 people",
    api: "Medium and large businesses",
  },
  {
    feature: "Message volume",
    app: "Limited — manual sending",
    api: "Unlimited — fully automated",
  },
  {
    feature: "Automation",
    app: "Basic quick replies only",
    api: "Full chatbot + workflow automation",
  },
  {
    feature: "Multiple agents",
    app: "Not supported",
    api: "Unlimited agents via inbox",
  },
  {
    feature: "CRM integration",
    app: "Not supported",
    api: "Salesforce, HubSpot, Zoho & more",
  },
  { feature: "API access", app: "No", api: "Yes — REST API + webhooks" },
  {
    feature: "Broadcast limit",
    app: "256 contacts per list",
    api: "Unlimited — to opted-in users",
  },
  {
    feature: "Green tick verification",
    app: "Not available",
    api: "Available after Meta verification",
  },
  { feature: "Price", app: "Free", api: "Pay per conversation" },
  {
    feature: "Setup time",
    app: "Minutes",
    api: "3–5 business days via Get Click Media",
  },
];

const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Meta Platform",
    body: "Meta owns and operates the WhatsApp network. Every message is routed through Meta's servers, and Meta approval is required before your business account can send messages.",
  },
  {
    n: "02",
    title: "Get Click Media (BSP)",
    body: "As an official Meta BSP, we handle account setup, verification, and template submission. You never need to interact with Meta directly — we're your single point of contact.",
  },
  {
    n: "03",
    title: "Your Application",
    body: "You send messages via our REST API for programmatic triggers, or the no-code campaign dashboard for bulk sends. Your CRM or e-commerce platform connects here.",
  },
  {
    n: "04",
    title: "WhatsApp Delivery",
    body: "Messages reach the customer's WhatsApp app on any device or carrier — showing your verified business name and logo, with tap-to-act buttons.",
  },
  {
    n: "05",
    title: "Webhook Events",
    body: "Delivery, read, click, and reply events push to your webhook in real time. Your CRM updates and your dashboard populates live — no custom dev needed.",
  },
];

const CONVERSATION_TYPES = [
  {
    cat: "Marketing",
    when: "Promotional campaigns, offers, re-engagement",
    who: "Business",
    price: "₹0.80–0.90 / conversation",
  },
  {
    cat: "Utility",
    when: "Order updates, booking confirmations, alerts",
    who: "Business",
    price: "₹0.40–0.50 / conversation",
  },
  {
    cat: "Authentication",
    when: "OTP delivery, login, security verification",
    who: "Business",
    price: "₹0.40–0.50 / conversation",
  },
  {
    cat: "Service",
    when: "Customer-initiated queries — free 24-hr window",
    who: "Customer",
    price: "Free (first 1,000/mo)",
  },
];

const INDUSTRIES = [
  {
    icon: Landmark,
    name: "Banking & Finance",
    body: "Loan pre-approval, EMI reminders, fraud alerts, credit card offers.",
    result: "4x–6x conversion vs SMS",
    href: "/whatsapp-api-banking",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    body: "Order confirmation, delivery updates, cart recovery, review requests.",
    result: "5x–8x revenue per message",
    href: "/whatsapp-api-ecommerce",
  },
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    body: "Admission follow-ups, fee reminders, exam schedules, result alerts.",
    result: "22% trial-to-enrolment rate",
    href: "/whatsapp-api-education",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    body: "Appointment reminders, lab reports, prescription refills.",
    result: "38% fewer no-shows",
  },
  {
    icon: Building2,
    name: "Real Estate",
    body: "Site visit booking, property carousels, payment reminders.",
    result: "3x–5x site visit rate",
    href: "/whatsapp-api-real-estate",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    body: "Booking confirmations, check-in reminders, upsell offers.",
    result: "60% fewer support calls",
  },
  {
    icon: Truck,
    name: "Logistics",
    body: "Shipment updates, delivery confirmation, delay alerts.",
    result: "34% fewer failed deliveries",
  },
  {
    icon: ShieldCheck,
    name: "Insurance",
    body: "Policy renewal, premium reminders, claims updates.",
    result: "31% higher renewal rate",
  },
  {
    icon: Store,
    name: "Retail & FMCG",
    body: "In-store offers, loyalty points, festive campaigns.",
    result: "18% repeat purchase uplift",
  },
  {
    icon: Car,
    name: "Automobile",
    body: "Test drive booking, service reminders, EMI alerts.",
    result: "3x booking rate vs SMS",
  },
];

const WHY_GCM = [
  {
    title: "Official Meta Business Solution Provider",
    body: "We have direct access to the WhatsApp Business API platform with Meta's official authorisation — not a reseller arrangement.",
  },
  {
    title: "Noida-based — local support in your timezone",
    body: "Your account manager works in IST, understands the Indian business calendar, and responds in English or Hindi.",
  },
  {
    title: "10,000+ businesses already served",
    body: "Across banking, e-commerce, education, healthcare, real estate, and logistics — with pre-built templates and CRM connectors ready to go.",
  },
  {
    title: "Unified platform — WhatsApp, RCS, and SMS",
    body: "One dashboard, one API, one analytics view. Add RCS messaging or bulk SMS anytime with zero migration.",
  },
  {
    title: "No hidden charges — transparent pricing",
    body: "WhatsApp API access, template management, and CRM integration assistance are all included. No setup fees, no lock-in for growth-tier clients.",
  },
  {
    title: "24×7 technical support",
    body: "Sub-30-minute SLA for P1 incidents on OTP and payment-critical integrations, by phone, WhatsApp, or email.",
  },
];

const PROVIDER_COMPARISON = [
  {
    feature: "Meta BSP status",
    gcm: "Official BSP",
    others: "Official BSP / Reseller",
  },
  {
    feature: "India HQ",
    gcm: "Noida, UP",
    others: "Bangalore / US-based / Varies",
  },
  { feature: "Hindi support", gcm: "Yes", others: "Limited / No" },
  {
    feature: "RCS + SMS on same platform",
    gcm: "Yes — unified",
    others: "No / Limited",
  },
  {
    feature: "Template approval SLA",
    gcm: "1–3 business days",
    others: "2–7 business days",
  },
  { feature: "Setup time", gcm: "3–5 days", others: "5–10 days" },
];

const FAQS = [
  {
    q: "What is WhatsApp Business API and how is it different from WhatsApp Business App?",
    a: "WhatsApp Business API is Meta's enterprise messaging platform for large-scale, automated business communication. Unlike the free WhatsApp Business App — designed for small businesses managing conversations manually on a single device — the API supports unlimited messages, full automation, multi-agent inboxes, CRM integration, and chatbot flows. The API requires a Meta-authorised provider (BSP) like Get Click Media to access, whereas the App can be downloaded directly by anyone. See our full ",
    link: {
      text: "WhatsApp Business API vs WhatsApp Business App",
      href: "/whatsapp-api-vs-whatsapp-business-app",
    },
  },
  {
    q: "Is WhatsApp Business API free in India?",
    a: "No — but the first 1,000 service conversations per month are free. Beyond that, Meta charges per 24-hour conversation session. Marketing conversations cost approximately ₹0.80–0.90; utility and authentication conversations cost ₹0.40–0.50. Get Click Media charges a platform fee on top of Meta's rates.",
    link: {
      text: "See our full pricing breakdown",
      href: "/blog/whatsapp-api-pricing-india",
    },
  },
  {
    q: "How long does WhatsApp Business API setup take in India?",
    a: "With Get Click Media managing your onboarding, most businesses go live in 3 to 5 business days. This includes Meta Business Manager verification (1–3 days), WhatsApp Business Account setup (1 day), phone number registration (1 day), and template approval (1–3 days) — run in parallel to minimise total time.",
  },
  {
    q: "Do I need TRAI DLT registration for WhatsApp API messages?",
    a: "No. WhatsApp Business API is not regulated under TRAI's Telecom Commercial Communications Customer Preference Regulations. You do not need DLT entity registration, Sender ID registration, or template approval with TRAI for WhatsApp messages. You must still have marketing consent from customers before sending marketing-category messages.",
  },
  {
    q: "Can I send WhatsApp messages to DND-registered numbers?",
    a: "Yes. WhatsApp Business API is not subject to TRAI DND restrictions. You can send WhatsApp messages — including marketing messages — to customers on the DND registry, as long as they've given explicit opt-in consent. This is a significant advantage over promotional SMS.",
  },
  {
    q: "What is a WhatsApp Business Solution Provider (BSP)?",
    a: "A WhatsApp BSP is a company authorised by Meta to provide WhatsApp Business API access to other businesses. BSPs handle account setup, Meta verification, template submission, API infrastructure, and ongoing support. Businesses cannot access the WhatsApp API directly from Meta — they must go through a BSP like Get Click Media.",
  },
  {
    q: "Can I use WhatsApp Business API for OTP delivery?",
    a: "Yes. WhatsApp authentication-category messages are designed for OTP delivery and benefit from verified sender identity and higher open rates than SMS OTPs. Since WhatsApp needs internet connectivity, we recommend keeping SMS OTP as a fallback for customers with poor connectivity — Get Click Media supports both from one platform.",
  },
  {
    q: "What is the difference between WhatsApp Cloud API and on-premise API?",
    a: "WhatsApp Cloud API is hosted on Meta's cloud — faster to set up, always current, no infrastructure management. On-premise API requires you to host it yourself with significantly higher overhead. Meta has deprecated on-premise for new registrations, so Get Click Media's platform uses WhatsApp Cloud API exclusively.",
  },
  {
    q: "How many messages can I send per day with WhatsApp Business API?",
    a: "WhatsApp uses a tiered messaging limit system. New accounts start at Tier 1 (1,000 business-initiated conversations per 24 hours) and automatically upgrade to Tier 2 (10,000/day), Tier 3 (1,00,000/day), and beyond with consistent sending quality. Get Click Media helps clients warm up accounts properly to reach higher tiers quickly.",
  },
  {
    q: "What happens if WhatsApp is not installed on the customer's phone?",
    a: "Your message won't be delivered — WhatsApp has no SMS fallback. For critical communications like OTPs and payment alerts, Get Click Media recommends WhatsApp as the primary channel with SMS as a fallback, both available from our unified platform.",
    link: { text: "Compare WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppBusinessAPIPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── BREADCRUMB ─────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2"
      >
        <ol className="flex items-center gap-2 text-xs text-gray-400">
          <li>
            <Link href="/" className="hover:text-[#2563eb] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">WhatsApp Business API</li>
        </ol>
      </nav>

      {/* ─────────────────────────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                Official Meta Business Solution Provider
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Business API
                <br />
                <span className="text-[#38bdf8]">
                  Official Provider in India
                </span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media is an official Meta BSP headquartered in Noida,
                offering WhatsApp Business API to over 10,000 businesses across
                India — automated, rich, interactive messaging at scale,
                delivered straight to any WhatsApp user.
                <strong className="text-white">
                  {" "}
                  Setup takes 3–5 business days. Pricing starts at ₹0.40 per
                  conversation.
                </strong>
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  Get WhatsApp API <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View Pricing
                </Link>
              </div>

              <p className="text-white/40 text-xs">
                Official Meta BSP · 3–5 Day Setup · 10,000+ Businesses Served ·
                Noida, India
              </p>
            </div>

            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API rich message on a phone"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER / AEO BLOCK ────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <strong className="text-gray-900">WhatsApp Business API</strong>{" "}
              is Meta&apos;s enterprise messaging platform that lets businesses
              send automated, rich, interactive messages at scale via WhatsApp —
              including text, images, carousels, action buttons, and chatbot
              flows — delivered to any WhatsApp user without requiring a
              separate app install. Get Click Media, an official Meta Business
              Solution Provider based in Noida, sets up WhatsApp Business API
              for Indian businesses in 3 to 5 business days, with pricing
              starting at ₹0.40 per conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            {
              value: "98%",
              label: "Message Open Rate",
              sub: "vs 20–25% for email, 30–35% for SMS",
            },
            {
              value: "10,000+",
              label: "Businesses Served",
              sub: "across banking, e-commerce, healthcare & more",
            },
            {
              value: "3–5 days",
              label: "Go-Live Timeline",
              sub: "from onboarding start to first live message",
            },
          ].map((s) => (
            <div key={s.value} className="space-y-1">
              <p className="text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">
                {s.value}
              </p>
              <p className="text-base font-bold text-gray-900">{s.label}</p>
              <p className="text-sm text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEE IT IN ACTION ─────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="see-it-in-action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                See It In Action
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                One shared inbox for every WhatsApp conversation
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Every inbound message — from a chatbot escalation, a broadcast reply, or a direct customer
                query — lands in a single team inbox. Agents see full conversation history, assign chats,
                and reply with templates or free text, all synced back to your CRM in real time.
              </p>
              <ul className="space-y-2 pt-2">
                {[
                  "Shared inbox for your entire team",
                  "Smart routing & agent assignment",
                  "Quick-reply & canned responses",
                  "Full chat history synced to CRM",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCheck className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-[54%] shrink-0">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/10 border border-gray-200">
                <video
                  src="/images/video/whatsapp-chat.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS WHATSAPP BUSINESS API ───────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="what-is-whatsapp-api">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What Is WhatsApp Business API?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne) max-w-3xl mx-auto">
              The backbone behind every automated WhatsApp message you receive
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              WhatsApp Business API — also called the WhatsApp Business Platform
              or WABA — is Meta&apos;s official enterprise-grade solution for
              businesses that need to talk to customers at scale on WhatsApp.
              It&apos;s what powers every automated message you get from banks,
              e-commerce platforms, airlines, and healthcare providers in India.
              Unlike the free WhatsApp Business App, the API has no device
              limit, no manual messaging requirement, and no cap on messages
              sent. If the App is a bicycle, the API is a truck built for a
              national logistics operation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[34%]">
                    Feature
                  </th>
                  <th className="text-center px-4 py-4 font-semibold">
                    WhatsApp Business App
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">
                    WhatsApp Business API
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_APP_API.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3.5 text-center text-gray-500">
                      {row.app}
                    </td>
                    <td className="px-4 py-3.5 text-center text-gray-800 font-medium">
                      {row.api}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            See the full breakdown:{" "}
            <Link
              href="/whatsapp-api-vs-whatsapp-business-app"
              className="text-[#2563eb] underline underline-offset-2"
            >
              WhatsApp Business API vs WhatsApp Business App
            </Link>
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              How a message travels from your app to your customer
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              Understanding the architecture helps you plan your integration
              correctly.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {HOW_IT_WORKS.map((s) => (
                <div key={s.n} className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white font-extrabold text-lg flex items-center justify-center mx-auto font-(family-name:--font-syne) shadow-lg shadow-blue-900/40">
                    {s.n}
                  </div>
                  <h3 className="text-sm font-bold text-white">{s.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              WhatsApp Business API Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Everything your business needs to run WhatsApp at scale
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Card = (
                <div className="h-full rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all p-6 space-y-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
              return f.href ? (
                <Link key={f.title} href={f.href}>
                  {Card}
                </Link>
              ) : (
                <div key={f.title}>{Card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#0f172a]" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Why WhatsApp API for Indian Businesses
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              10,000+ Indian businesses already use it — here&apos;s why
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Highest open rates of any channel in India",
                body: "WhatsApp achieves 98% open rates in India, versus 20–25% for email and 30–35% for SMS — your customers open every message.",
              },
              {
                title: "Rich, trusted communication that converts",
                body: "A verified message with your logo, product image, and a 'Buy Now' button outperforms a plain SMS link by 5x to 8x on click-through rate.",
              },
              {
                title: "No DND or time restrictions for service messages",
                body: "Service-category messages like OTPs and appointment reminders can be sent any time — no TRAI DND filtering for non-promotional content.",
              },
              {
                title: "Two-way conversations at scale",
                body: "Customers can reply, ask questions, or place orders in the same thread — with chatbot automation scaling this to thousands of conversations.",
              },
              {
                title: "Lower cost per conversion than paid ads",
                body: "Indian businesses report cost-per-conversion 60–80% lower than equivalent Google or Meta ad campaigns for WhatsApp-led nurturing.",
              },
              {
                title: "Complete analytics visibility",
                body: "Delivery, read, and click tracking on every message — data that email, SMS, and phone calls simply cannot provide.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-2"
              >
                <h3 className="text-base font-bold text-white">{b.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONVERSATION CATEGORIES / PRICING ───────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="conversation-types">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Conversation Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp API pricing in India — by conversation type
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Pricing is based on 24-hour conversation sessions, not individual
              messages. Meta provides 1,000 free service conversations per month
              to every account.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">
                    Category
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    When It&apos;s Used
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    Who Initiates
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    India Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {CONVERSATION_TYPES.map((row, i) => (
                  <tr
                    key={row.cat}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 text-gray-900 font-bold">
                      {row.cat}
                    </td>
                    <td className="px-4 py-3.5 text-gray-600">{row.when}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.who}</td>
                    <td className="px-4 py-3.5 text-[#2563eb] font-semibold whitespace-nowrap">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Get Click Media charges a platform fee on top of Meta&apos;s
            conversation charges for API access, campaign management, and
            support. See the full breakdown — including volume tiers and a cost
            comparison with SMS and RCS — on our{" "}
            <Link
              href="/blog/whatsapp-api-pricing-india"
              className="text-[#2563eb] font-semibold underline underline-offset-2"
            >
              WhatsApp Business API pricing India
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* ── USE CASES BY INDUSTRY ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Industry Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp Business API across every industry
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => {
              const Card = (
                <div className="h-full rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all p-6 space-y-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <ind.icon className="w-5 h-5 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {ind.body}
                  </p>
                  <p className="text-xs font-bold text-green-600">
                    {ind.result}
                  </p>
                </div>
              );
              return ind.href ? (
                <Link key={ind.name} href={ind.href}>
                  {Card}
                </Link>
              ) : (
                <div key={ind.name}>{Card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW TO GET WHATSAPP API ──────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              How to Get WhatsApp Business API
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              3 steps with Get Click Media — you never talk to Meta directly
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                n: "01",
                title: "Business Verification",
                body: "We guide you through Meta Business Manager verification — submitting your registration documents and website. Most businesses finish in 1–3 business days.",
              },
              {
                n: "02",
                title: "WABA Setup",
                body: "We create your WhatsApp Business Account, link your phone number, submit your brand assets, and get your initial templates approved by Meta.",
              },
              {
                n: "03",
                title: "Platform Access & First Campaign",
                body: "You get dashboard or REST API access. Our onboarding team configures your webhook and supports your first live send.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border-2 border-blue-100 bg-blue-50/40 p-7 space-y-4"
              >
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center font-(family-name:--font-syne)">
                  {s.n}
                </span>
                <h3 className="text-base font-bold text-gray-900 pt-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mb-16">
            Read the detailed walkthrough:{" "}
            <Link
              href="/how-to-get-whatsapp-business-api"
              className="text-[#2563eb] font-semibold underline underline-offset-2"
            >
              How to get WhatsApp Business API
            </Link>
          </p>

          <div className="rounded-2xl bg-[#0f172a] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">
                Flexible pricing for every business size
              </h3>
              <p className="text-white/50 text-sm max-w-lg">
                Per-conversation pricing based on category and volume. All plans
                include template management, CRM integration assistance, and
                24×7 support.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold hover:scale-105 transition-transform shadow-md"
            >
              Talk to Sales <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY GET CLICK MEDIA ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="why-gcm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Choose Get Click Media?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                A direct Meta partner.
                <br />
                Not a reseller.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Get Click Media is an authorised{" "}
                <strong className="text-gray-800">
                  WhatsApp Business API provider
                </strong>{" "}
                — we have direct access to the platform and onboard your
                business with Meta&apos;s official authorisation.
              </p>
              {WHY_GCM.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCheck className="w-3.5 h-3.5 text-white" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{p.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[44%] shrink-0">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
                <Image
                  src="/images/whatsapp/direct-meta-partner.webp"
                  alt="Get Click Media WhatsApp Business API dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVIDER COMPARISON ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="comparison">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Full Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Get Click Media vs Other WhatsApp API Providers in India
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[40%]">
                    Feature
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">
                    Get Click Media
                  </th>
                  <th className="text-center px-4 py-4 font-semibold">
                    WATI / Twilio / Reseller
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROVIDER_COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3.5 text-center text-[#2563eb] font-bold">
                      {row.gcm}
                    </td>
                    <td className="px-4 py-3.5 text-center text-gray-500 text-xs">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            Get Click Media is the only provider in NCR offering{" "}
            <Link
              href="/whatsapp-vs-rcs"
              className="text-[#2563eb] underline underline-offset-2"
            >
              WhatsApp
            </Link>
            ,{" "}
            <Link
              href="/rcs-messaging"
              className="text-[#2563eb] underline underline-offset-2"
            >
              RCS Business Messaging
            </Link>
            , and{" "}
            <Link
              href="/bulk-sms-service-provider-india"
              className="text-[#2563eb] underline underline-offset-2"
            >
              Bulk SMS
            </Link>{" "}
            from a single unified platform.
          </p>
        </div>
      </section>

      {/* ── RELATED GUIDES / INTERNAL LINKS ─────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Explore the WhatsApp Business API guide
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp Broadcast", href: "/whatsapp-broadcast" },
              {
                label: "WhatsApp Message Templates",
                href: "/whatsapp-template-messages",
              },
              {
                label: "WhatsApp API Integration",
                href: "/blog/whatsapp-api-integration",
              },
              {
                label: "WhatsApp CRM Integration",
                href: "/blog/whatsapp-crm-integration",
              },
              {
                label: "WhatsApp Green Tick Verification",
                href: "/blog/whatsapp-green-tick-verification",
              },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              { label: "WhatsApp Catalog", href: "/whatsapp-catalog" },
              {
                label: "Click to WhatsApp Ads",
                href: "/whatsapp-click-to-whatsapp-ads",
              },
              { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
              { label: "WhatsApp vs RCS", href: "/whatsapp-vs-rcs" },
              { label: "RCS Messaging Service", href: "/rcs-messaging" },
              {
                label: "Bulk SMS Service Provider India",
                href: "/bulk-sms-service-provider-india",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                {l.label}
              </Link>
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
              Got questions about WhatsApp Business API in India?
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-gray-50 border border-gray-100 shadow-sm open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                    {faq.link && (
                      <>
                        {" "}
                        <Link
                          href={faq.link.href}
                          className="text-[#2563eb] underline underline-offset-2"
                        >
                          {faq.link.text}
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </details>
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
                Ready to get WhatsApp Business API?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Official Meta BSP · 3–5 Day Setup · 10,000+ Businesses Served ·
                Noida, India. Our team responds within 2 hours on business days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Get WhatsApp API <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Request a Free Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
