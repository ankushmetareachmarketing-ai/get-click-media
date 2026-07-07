import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Workflow,
  MousePointerClick,
  Brain,
  Languages,
  Database,
  UserCheck,
  Radio,
  Image as ImageIcon,
  BarChart3,
  Clock,
  ShoppingCart,
  Landmark,
  HeartPulse,
  GraduationCap,
  Building2,
  Plane,
  Truck,
} from "lucide-react";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "WhatsApp Chatbot — AI-Powered Automation for Your Business | Get Click Media",
  description:
    "Build a WhatsApp chatbot with drag-and-drop flows, AI/NLP, and CRM integration. Automate FAQs, lead qualification, orders, and support 24/7. Official Meta BSP, go-live in 5–7 business days.",
  keywords:
    "WhatsApp Chatbot, WhatsApp bot India, AI WhatsApp chatbot, WhatsApp chatbot for business, WhatsApp automation, WhatsApp chatbot pricing",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-chatbot" },
  openGraph: {
    title: "WhatsApp Chatbot — AI-Powered Automation for Your Business | Get Click Media",
    description:
      "Rule-based, AI/NLP, or hybrid WhatsApp chatbots — CRM integration, human handoff, and 24/7 automated support. Go-live in 5–7 business days.",
    url: "https://getclickmedia.com/whatsapp-chatbot",
    type: "website",
  },
};

/* -- JSON-LD Schema -------------------------------------------------------- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "WhatsApp Chatbot",
      provider: { "@type": "Organization", "@id": "https://getclickmedia.com/#org", name: "Get Click Media" },
      areaServed: "India",
      serviceType: "WhatsApp Chatbot Automation",
      url: "https://getclickmedia.com/whatsapp-chatbot",
      description:
        "AI and rule-based WhatsApp chatbot automation for customer support, lead qualification, and order management, built on WhatsApp Business API.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com/" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp Chatbot", item: "https://getclickmedia.com/whatsapp-chatbot" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a WhatsApp chatbot?",
          acceptedAnswer: { "@type": "Answer", text: "An automated messaging system on WhatsApp Business API that handles customer conversations using rule-based flows, AI, or both." },
        },
        {
          "@type": "Question",
          name: "How long does it take to launch a WhatsApp chatbot?",
          acceptedAnswer: { "@type": "Answer", text: "Typically 5–7 business days, depending on flow complexity and integrations required." },
        },
        {
          "@type": "Question",
          name: "Do I need coding knowledge to build a WhatsApp chatbot?",
          acceptedAnswer: { "@type": "Answer", text: "No — Get Click Media's flow builder is drag-and-drop; no coding is required for standard flows." },
        },
        {
          "@type": "Question",
          name: "Can a WhatsApp chatbot integrate with my CRM?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, our chatbot integrates with major CRMs and order/database systems to pull real-time data mid-conversation." },
        },
        {
          "@type": "Question",
          name: "How much does a WhatsApp chatbot cost in India?",
          acceptedAnswer: { "@type": "Answer", text: "Cost depends on conversation volume and flow complexity, plus Meta's per-conversation charges." },
        },
      ],
    },
  ],
};

const BOT_TYPES = [
  { type: "Rule-based (menu-driven)", how: "Customer selects from button/list options; bot follows a fixed decision tree", best: "FAQs, order status, appointment booking" },
  { type: "AI / NLP-based", how: "Bot understands free-text messages using natural language processing", best: "Complex queries, lead qualification, support triage" },
  { type: "Hybrid", how: "Starts with a menu, falls back to AI for anything outside the flow", best: "Most businesses — balances cost and flexibility" },
];

const FEATURES = [
  { icon: Workflow, title: "Visual Flow Builder", desc: "Build conversation flows without writing a single line of code." },
  { icon: MousePointerClick, title: "Interactive Buttons & Lists", desc: "Up to 3 quick-reply buttons or 10-item lists per message." },
  { icon: Brain, title: "NLP / AI Intent Recognition", desc: "Understands typos, synonyms, and casual language automatically." },
  { icon: Languages, title: "Multi-Language Support", desc: "Respond in Hindi, English, and regional languages." },
  { icon: Database, title: "CRM & Order-System Integration", desc: "Pull real-time order status, account balance, or appointment slots.", href: "/blog/whatsapp-crm-integration" },
  { icon: UserCheck, title: "Human Handoff", desc: "Seamless escalation to a live agent with full chat context preserved." },
  { icon: Radio, title: "Broadcast + Chatbot Combo", desc: "Trigger automated flows directly from broadcast campaigns.", href: "/whatsapp-broadcast" },
  { icon: ImageIcon, title: "Rich Media Support", desc: "Images, PDFs, location pins, and product catalogs in-chat." },
  { icon: BarChart3, title: "Session & Conversation Analytics", desc: "Track drop-offs, response time, and resolution rate." },
];

const BENEFITS = [
  { title: "24/7 availability", body: "Customers get instant answers even outside working hours." },
  { title: "Lower support costs", body: "Automate up to 70–80% of repetitive queries, freeing agents for complex cases." },
  { title: "Faster response time", body: "Instant replies improve customer satisfaction and reduce drop-off." },
  { title: "Higher lead conversion", body: "Chatbots qualify and route leads to sales in real time." },
  { title: "Scalability", body: "Handle thousands of simultaneous conversations without hiring more agents." },
  { title: "Consistent brand experience", body: "Every customer gets the same accurate information every time." },
  { title: "Data capture", body: "Every conversation becomes structured data for your CRM." },
];

const INDUSTRIES = [
  { icon: ShoppingCart, name: "E-commerce", uses: "Order tracking, abandoned cart recovery, product recommendations, return/refund flows" },
  { icon: Landmark, name: "Banking & Financial Services", uses: "Balance inquiry, EMI reminders, KYC status, loan pre-qualification" },
  { icon: HeartPulse, name: "Healthcare", uses: "Appointment booking, prescription reminders, lab report delivery" },
  { icon: GraduationCap, name: "Education", uses: "Admission inquiries, fee reminders, exam result delivery" },
  { icon: Building2, name: "Real Estate", uses: "Property inquiries, site visit scheduling, brochure delivery" },
  { icon: Plane, name: "Travel & Hospitality", uses: "Booking confirmations, itinerary updates, check-in reminders" },
  { icon: Truck, name: "Logistics", uses: "Shipment tracking, delivery scheduling, proof-of-delivery sharing" },
];

const HOW_IT_WORKS = [
  { n: "01", title: "Customer sends a message", body: "A message arrives on your WhatsApp Business number." },
  { n: "02", title: "Webhook receives it", body: "The message hits your WhatsApp Business API webhook instantly." },
  { n: "03", title: "Intent matching", body: "The chatbot engine matches the message via keyword/button match or NLP." },
  { n: "04", title: "Live data lookup", body: "If needed, the bot queries your CRM, database, or order system." },
  { n: "05", title: "Bot responds", body: "Text, buttons, lists, or rich media are sent back in under 2 seconds." },
  { n: "06", title: "Human handoff if needed", body: "Out-of-scope queries route to a live agent with full context preserved." },
];

const SETUP_STEPS = [
  { n: "01", title: "Consultation", body: "We map your top customer queries and use cases." },
  { n: "02", title: "Flow design", body: "We build your conversation flows — menu-based, AI, or hybrid." },
  { n: "03", title: "Integration", body: "Connect to your CRM, order system, or database." },
  { n: "04", title: "Testing", body: "Sandbox testing across real customer scenarios." },
  { n: "05", title: "Go-live", body: "Deploy on your verified WhatsApp Business number — 5–7 business days." },
];

const FAQS = [
  { q: "What is a WhatsApp chatbot?", a: "An automated messaging system on WhatsApp Business API that handles customer conversations using rule-based flows, AI, or both." },
  { q: "How is a WhatsApp chatbot different from the WhatsApp Business App auto-reply?", a: "The free Business App only supports basic greeting/away messages. A chatbot on the API can hold multi-step conversations, pull live data, and integrate with a CRM.", link: { text: "See WhatsApp Business API vs App", href: "/whatsapp-api-vs-whatsapp-business-app" } },
  { q: "Do I need coding knowledge to build a WhatsApp chatbot?", a: "No — Get Click Media's flow builder is drag-and-drop; no coding is required for standard flows." },
  { q: "Can a WhatsApp chatbot integrate with my CRM?", a: "Yes, our chatbot integrates with major CRMs and order/database systems to pull real-time data mid-conversation.", link: { text: "See WhatsApp CRM integration", href: "/blog/whatsapp-crm-integration" } },
  { q: "How long does it take to launch a WhatsApp chatbot?", a: "Typically 5–7 business days, depending on flow complexity and integrations required." },
  { q: "Can the chatbot hand off to a human agent?", a: "Yes — the bot can escalate to a live agent at any point, with full conversation history preserved." },
  { q: "Does the chatbot support Hindi and regional languages?", a: "Yes, our chatbots support Hindi, English, and major regional languages." },
  { q: "What industries use WhatsApp chatbots the most?", a: "E-commerce, banking, healthcare, education, real estate, travel, and logistics are the top adopters in India." },
  { q: "Is there a limit to how many conversations a chatbot can handle?", a: "No — the chatbot can run unlimited concurrent conversations, unlike a human agent team." },
  { q: "How much does a WhatsApp chatbot cost in India?", a: "Cost depends on conversation volume and flow complexity, plus Meta's per-conversation charges.", link: { text: "See full WhatsApp Business API pricing", href: "/blog/whatsapp-api-pricing-india" } },
];

/* -- Page ------------------------------------------------------------------ */
export default function WhatsAppChatbotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -- BREADCRUMB --------------------------------------------------- */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/whatsapp-business-api" className="hover:text-[#2563eb] transition-colors">WhatsApp Business API</Link></li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">WhatsApp Chatbot</li>
        </ol>
      </nav>

      {/* -- HERO ----------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                AI + Rule-Based Automation
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Chatbot<br />
                <span className="text-[#38bdf8]">AI-Powered Automation for Your Business</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                A WhatsApp chatbot handles customer conversations using rule-based flows, AI/NLP, or a hybrid of
                both — without a human agent on every message. It answers FAQs, qualifies leads, takes orders, and
                escalates complex queries automatically.
                <strong className="text-white"> Go-live typically within 5–7 business days.</strong>
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
                  Get a WhatsApp Chatbot <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  Book a Free Demo
                </Link>
                <Link href="/blog/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[50%] shrink-0">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/40 border border-white/10">
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

      {/* -- DIRECT ANSWER / AEO BLOCK -------------------------------------- */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              A WhatsApp chatbot is an automated messaging system built on{" "}
              <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">WhatsApp Business API</Link> that
              handles customer conversations using rule-based flows, AI/NLP, or a hybrid of both — without a
              human agent on every message. It can answer FAQs, qualify leads, take orders, send order updates,
              and escalate complex queries to a live agent automatically. Get Click Media, an official Meta
              Business Solution Provider headquartered in Noida, builds and deploys WhatsApp chatbots for
              businesses across banking, e-commerce, healthcare, education, and real estate — with go-live
              typically within 5–7 business days.
            </p>
          </div>
        </div>
      </section>

      {/* -- WHAT IS A WHATSAPP CHATBOT ------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="what-is-a-chatbot">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14 mb-16">
            <div className="flex-1 text-center lg:text-left space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                What Is a WhatsApp Chatbot?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Instant, automatic replies — day or night
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                A WhatsApp chatbot sits on top of the WhatsApp Business API and automatically responds to incoming
                customer messages. Instead of a support agent manually replying to every &ldquo;What are your store
                hours?&rdquo; or &ldquo;Where is my order?&rdquo;, the chatbot recognizes the intent and responds instantly.
              </p>
            </div>
            <div className="w-full lg:w-[42%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp chatbot conversation on a phone"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {[
                "Understand and respond to open-ended customer questions",
                "Guide users through multi-step flows (booking, ordering, KYC)",
                "Pull live data from a CRM, order system, or database mid-conversation",
                "Hand off to a human agent seamlessly when needed",
                "Operate across unlimited concurrent conversations at once",
              ].map(item => (
                <div key={item} className="rounded-xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-700">
                  {item}
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">Rule-Based vs AI WhatsApp Chatbots</h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                    <th className="text-left px-5 py-4 font-semibold w-[24%]">Type</th>
                    <th className="text-left px-4 py-4 font-semibold">How It Works</th>
                    <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {BOT_TYPES.map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3.5 text-gray-900 font-bold">{row.type}</td>
                      <td className="px-4 py-3.5 text-gray-500">{row.how}</td>
                      <td className="px-4 py-3.5 text-gray-800 font-medium">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* -- FEATURES ------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              WhatsApp Chatbot Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Everything you need to automate customer conversations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => {
              const Card = (
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-6 space-y-3">
                  <span className="w-10 h-10 rounded-xl bg-[#2563eb]/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-[#38bdf8]" />
                  </span>
                  <h3 className="text-base font-bold text-white">{f.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
                </div>
              );
              return f.href ? <Link key={f.title} href={f.href}>{Card}</Link> : <div key={f.title}>{Card}</div>;
            })}
          </div>
        </div>
      </section>

      {/* -- BENEFITS ------------------------------------------------------- */}
      <section className="py-20 sm:py-24 bg-white" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why businesses automate with a WhatsApp chatbot
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(b => (
              <div key={b.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-2">
                <h3 className="text-base font-bold text-gray-900">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- USE CASES BY INDUSTRY ------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Use Cases by Industry
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              WhatsApp chatbot use cases across every industry
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map(ind => (
              <div key={ind.name} className="rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <ind.icon className="w-5 h-5 text-[#2563eb]" />
                </span>
                <h3 className="text-base font-bold text-gray-900">{ind.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{ind.uses}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- HOW IT WORKS --------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              From incoming message to resolved query — in under 2 seconds
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[4%] right-[4%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {HOW_IT_WORKS.map(s => (
                <div key={s.n} className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white font-extrabold text-lg flex items-center justify-center mx-auto font-(family-name:--font-syne) shadow-lg shadow-blue-900/40">
                    {s.n}
                  </div>
                  <h3 className="text-sm font-bold text-white">{s.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-white/40 mt-10 max-w-2xl mx-auto">
            This entire flow typically resolves in under 2 seconds, and can run in parallel across unlimited
            conversations — something a human team simply cannot do at scale.
          </p>
        </div>
      </section>

      {/* -- PRICING -------------------------------------------------------- */}
      <section className="py-20 sm:py-24 bg-white" id="pricing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" /> WhatsApp Chatbot Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
            What does a WhatsApp chatbot cost?
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            Chatbot cost typically depends on the number of monthly active conversations, the complexity of
            flows (rule-based vs AI/NLP), and whether CRM integration is required. Meta&apos;s per-conversation
            charges apply on top of the chatbot platform fee.
          </p>
          <Link href="/blog/whatsapp-api-pricing-india"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563eb] text-white text-sm font-bold hover:scale-105 transition-transform shadow-md">
            See Full WhatsApp API Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* -- SETUP PROCESS -------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="setup">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              How to Get a WhatsApp Chatbot
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              5 steps from consultation to go-live
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SETUP_STEPS.map(s => (
              <div key={s.n} className="relative rounded-2xl border-2 border-blue-100 bg-white p-7 space-y-3">
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center font-(family-name:--font-syne)">
                  {s.n}
                </span>
                <h3 className="text-base font-bold text-gray-900 pt-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- WHY GET CLICK MEDIA -------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="why-gcm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
            Why Choose Get Click Media
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
            No-code flow building, backed by AI and CRM integration
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Get Click Media is an official <Link href="/whatsapp-business-api-provider-india" className="text-[#2563eb] underline underline-offset-2">Meta Business Solution Provider</Link> based
            in Noida, serving 10,000+ Indian businesses with WhatsApp Business API, chatbot automation,{" "}
            <Link href="/rcs-messaging" className="text-[#2563eb] underline underline-offset-2">RCS messaging</Link>, and{" "}
            <Link href="/bulk-sms-service-provider-india" className="text-[#2563eb] underline underline-offset-2">bulk SMS</Link>. Our
            chatbot platform combines no-code flow building with AI/NLP, native CRM integration, and dedicated
            onboarding support — so your bot goes live fast and keeps improving with real conversation data.
          </p>
        </div>
      </section>

      {/* -- RELATED LINKS -------------------------------------------------- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
              { label: "WhatsApp API Integration", href: "/blog/whatsapp-api-integration" },
              { label: "WhatsApp CRM Integration", href: "/blog/whatsapp-crm-integration" },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              { label: "WhatsApp API Pricing India", href: "/blog/whatsapp-api-pricing-india" },
              { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
              { label: "WhatsApp API for Banking", href: "/whatsapp-api-banking" },
              { label: "WhatsApp API for Healthcare", href: "/whatsapp-api-healthcare" },
              { label: "RCS Messaging Service", href: "/rcs-messaging" },
              { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Questions about WhatsApp chatbots
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
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                    {faq.link && (
                      <>
                        {" "}
                        <Link href={faq.link.href} className="text-[#2563eb] underline underline-offset-2">
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

      {/* -- BOTTOM CTA ----------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Ready to automate your WhatsApp conversations?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media designs, builds, and deploys your WhatsApp chatbot — go-live typically within
                5–7 business days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Get a WhatsApp Chatbot <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Book a Free Demo
                </Link>
                <Link href="/blog/whatsapp-api-pricing-india"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
