import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DarkHero from "@/app/components/DarkHero";
import HeroLeadForm from "@/app/components/HeroLeadForm";
import { PremiumFeatureGrid } from "@/components/ui/premium-feature-grid";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { MarketingCta } from "@/components/ui/marketing-cta";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AccordionList } from "@/components/ui/accordion-list";
import { SectionPattern } from "@/components/ui/section-pattern";
import ClientMarquee from "@/app/components/ClientMarquee";
import {
  CheckCheck,
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
  PiggyBank,
  Zap,
  TrendingUp,
  Layers,
  ShieldCheck,
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
  { icon: Workflow, title: "Visual Flow Builder", description: "Build conversation flows without writing a single line of code.", accent: "orange" },
  { icon: MousePointerClick, title: "Interactive Buttons & Lists", description: "Up to 3 quick-reply buttons or 10-item lists per message.", accent: "pink" },
  { icon: Brain, title: "NLP / AI Intent Recognition", description: "Understands typos, synonyms, and casual language automatically.", accent: "blue" },
  { icon: Languages, title: "Multi-Language Support", description: "Respond in Hindi, English, and regional languages.", accent: "cyan" },
  { icon: Database, title: "CRM & Order-System Integration", description: "Pull real-time order status, account balance, or appointment slots.", accent: "indigo", href: "/blog/whatsapp-crm-integration" },
  { icon: UserCheck, title: "Human Handoff", description: "Seamless escalation to a live agent with full chat context preserved.", accent: "green" },
  { icon: Radio, title: "Broadcast + Chatbot Combo", description: "Trigger automated flows directly from broadcast campaigns.", accent: "purple", href: "/whatsapp-broadcast" },
  { icon: ImageIcon, title: "Rich Media Support", description: "Images, PDFs, location pins, and product catalogs in-chat.", accent: "red" },
  { icon: BarChart3, title: "Session & Conversation Analytics", description: "Track drop-offs, response time, and resolution rate.", accent: "blue" },
] as const;

const BENEFITS = [
  { icon: Clock, title: "24/7 availability", body: "Customers get instant answers even outside working hours." },
  { icon: PiggyBank, title: "Lower support costs", body: "Automate up to 70–80% of repetitive queries, freeing agents for complex cases." },
  { icon: Zap, title: "Faster response time", body: "Instant replies improve customer satisfaction and reduce drop-off." },
  { icon: TrendingUp, title: "Higher lead conversion", body: "Chatbots qualify and route leads to sales in real time." },
  { icon: Layers, title: "Scalability", body: "Handle thousands of simultaneous conversations without hiring more agents." },
  { icon: ShieldCheck, title: "Consistent brand experience", body: "Every customer gets the same accurate information every time." },
  { icon: Database, title: "Data capture", body: "Every conversation becomes structured data for your CRM." },
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

/* -- Shared layout tokens --------------------------------------------------- */
const CONTAINER = "max-w-7xl mx-auto px-6 sm:px-12 lg:px-20";
const SECTION_PADDING = "py-16 sm:py-20 lg:py-[100px]";
const H2_LIGHT = "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight";
const H2_DARK = "text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight";
const SYNE_FONT: React.CSSProperties = { fontFamily: "var(--font-syne)" };
const EYEBROW_LIGHT = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest";
const EYEBROW_DARK = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest";

/* -- Page ------------------------------------------------------------------ */
export default function WhatsAppChatbotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -----------------------------------------------------------------
          HERO — "What is this?"
      ----------------------------------------------------------------- */}
      <DarkHero
        theme="light"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
          { label: "WhatsApp Chatbot" },
        ]}
        eyebrow="AI + Rule-Based Automation"
        title="WhatsApp Chatbot"
        highlight="AI-Powered Automation for Your Business"
        description={
          <>
            A WhatsApp chatbot handles customer conversations using rule-based
            flows, AI/NLP, or a hybrid of both — without a human agent on
            every message. It answers FAQs, qualifies leads, takes orders,
            and escalates complex queries automatically.
            <strong className="text-gray-900"> Go-live typically within 5–7 business days.</strong>
          </>
        }
        primaryCta={{ label: "Get a WhatsApp Chatbot" }}
        secondaryCta={{ label: "Book a Free Demo", href: "#setup" }}
        tertiaryCta={{ label: "View Pricing", href: "#pricing" }}
        imageSrc="/images/whatsapp/whatsapp-api-chatbot.png"
        imageAlt="WhatsApp chatbot automated conversation preview on a phone"
        trustLine="Official Meta BSP · 5–7 Day Go-Live · Drag-and-Drop Flow Builder · Noida, India"
        stats={[
          { value: "70–80%", label: "Queries Automated" },
          { value: "<2s", label: "Bot Response Time" },
          { value: "5–7 Days", label: "Go-Live Timeline" },
          { value: "24×7", label: "Availability" },
        ]}
      />

      {/* -- TRUST LOGOS ------------------------------------------------------ */}
      <ClientMarquee />

      {/* -- DIRECT ANSWER / AEO BLOCK --------------------------------------- */}
      <section className="relative py-10">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base text-gray-700 leading-[1.7]">
              A WhatsApp chatbot is an automated messaging system built on{" "}
              <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">
                WhatsApp Business API
              </Link>{" "}
              that handles customer conversations using rule-based flows,
              AI/NLP, or a hybrid of both — without a human agent on every
              message. It can answer FAQs, qualify leads, take orders, send
              order updates, and escalate complex queries to a live agent
              automatically. Get Click Media, an official Meta Business
              Solution Provider headquartered in Noida, builds and deploys
              WhatsApp chatbots for businesses across banking, e-commerce,
              healthcare, education, and real estate — with go-live typically
              within 5–7 business days.
            </p>
          </div>
        </div>
      </section>

      {/* -- WHAT IS A WHATSAPP CHATBOT — deeper "what is this" -------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="what-is-a-chatbot">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="flex flex-col lg:flex-row items-center gap-14 mb-16">
            <div className="flex-1 text-center lg:text-left space-y-4">
              <span className={EYEBROW_LIGHT}>What Is a WhatsApp Chatbot?</span>
              <h2 className={H2_LIGHT} style={SYNE_FONT}>
                Instant, automatic replies — day or night
              </h2>
              <p className="text-gray-500 text-base leading-[1.7]">
                A WhatsApp chatbot sits on top of the WhatsApp Business API and
                automatically responds to incoming customer messages. Instead
                of a support agent manually replying to every &ldquo;What are
                your store hours?&rdquo; or &ldquo;Where is my order?&rdquo;,
                the chatbot recognizes the intent and responds instantly.
              </p>
            </div>
            <div className="w-full lg:w-[42%] shrink-0">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="/images/whatsapp/whatsapp-chatbot-automatic-replies.webp"
                  alt="WhatsApp chatbot conversation on a phone"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 42vw"
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
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-gray-50 border border-gray-100 p-5 text-base text-gray-700">
                  <CheckCheck className="w-4 h-4 text-[#2563eb] shrink-0 mt-1" />
                  {item}
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-5 text-center" style={SYNE_FONT}>
              Rule-Based vs AI WhatsApp Chatbots
            </h3>
            <ResponsiveTable
              caption="Rule-based vs AI vs hybrid WhatsApp chatbots"
              highlightColumnKey="best"
              columns={[
                { key: "type", label: "Type" },
                { key: "how", label: "How It Works" },
                { key: "best", label: "Best For" },
              ]}
              rows={BOT_TYPES}
            />
          </div>
        </div>
      </section>

      {/* -- FEATURES — "What do I get?" -------------------------------------- */}
      <PremiumFeatureGrid
        id="features"
        badge="WhatsApp Chatbot Features"
        heading={["Everything you need to automate", "customer conversations"]}
        description="From drag-and-drop flow building to AI intent recognition and CRM integration."
        features={FEATURES.map((f) => ({
          icon: <f.icon className="h-6 w-6" aria-hidden="true" />,
          title: f.title,
          description: f.description,
          accent: f.accent,
        }))}
      />

      {/* -- BENEFITS — "Why should I care?" ---------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="benefits">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>Benefits</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Why businesses automate with a WhatsApp chatbot
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <BentoCard key={b.title} icon={b.icon} name={b.title} description={b.body} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- USE CASES BY INDUSTRY — "Why should I care?" (relevance) -------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="use-cases">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>Use Cases by Industry</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              WhatsApp chatbot use cases across every industry
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <BentoCard key={ind.name} icon={ind.icon} name={ind.name} description={ind.uses} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- HOW IT WORKS — mechanism ----------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="how-it-works">
        <SectionPattern tone="green" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4 mx-auto lg:w-[50%]">
            <span className={EYEBROW_DARK}>How It Works</span>
            <h2 className={H2_DARK} style={SYNE_FONT}>
              From incoming message to resolved query — in under 2 seconds
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[4%] right-[4%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {HOW_IT_WORKS.map((s) => (
                <div key={s.n} className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-lg shadow-blue-900/40" style={SYNE_FONT}>
                    {s.n}
                  </div>
                  <h3 className="text-sm font-bold text-white">{s.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-white/40 mt-10 max-w-2xl mx-auto">
            This entire flow typically resolves in under 2 seconds, and can
            run in parallel across unlimited conversations — something a
            human team simply cannot do at scale.
          </p>
        </div>
      </section>

      {/* -- PRICING — "How much?" --------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="pricing">
        <SectionPattern tone="gold" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center space-y-5">
          <span className={EYEBROW_LIGHT}>
            <Clock className="w-3.5 h-3.5" /> WhatsApp Chatbot Pricing
          </span>
          <h2 className={H2_LIGHT} style={SYNE_FONT}>
            What does a WhatsApp chatbot cost?
          </h2>
          <p className="text-gray-500 text-base leading-[1.7] max-w-2xl mx-auto">
            Chatbot cost typically depends on the number of monthly active
            conversations, the complexity of flows (rule-based vs AI/NLP),
            and whether CRM integration is required. Meta&apos;s
            per-conversation charges apply on top of the chatbot platform fee.
          </p>
          <div className="pt-2 flex justify-center">
            <MarketingCta label="See Full WhatsApp API Pricing" href="/blog/whatsapp-api-pricing-india" />
          </div>
        </div>
      </section>

      {/* -- SETUP PROCESS — "How do I start?" --------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="setup">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>How to Get a WhatsApp Chatbot</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              5 steps from consultation to go-live
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SETUP_STEPS.map((s) => (
              <div key={s.n} className="relative rounded-2xl border-2 border-blue-100 bg-white p-7 space-y-3">
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center" style={SYNE_FONT}>
                  {s.n}
                </span>
                <h3 className="text-base font-bold text-gray-900 pt-2">{s.title}</h3>
                <p className="text-base text-gray-500 leading-[1.7]">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <GlowCtaBanner
              title="No-code flow building, backed by AI and CRM integration"
              description="Get Click Media is an official Meta Business Solution Provider based in Noida, serving 10,000+ Indian businesses with WhatsApp Business API, chatbot automation, RCS messaging, and bulk SMS — with dedicated onboarding support."
              ctaLabel="Get a WhatsApp Chatbot"
            />
          </div>
        </div>
      </section>

      {/* -- WHY GET CLICK MEDIA — "Can I trust this?" ------------------------ */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="why-gcm">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="flex flex-col lg:flex-row items-start gap-14">
            <div className="flex-1 text-center lg:text-left space-y-5">
              <span className={EYEBROW_LIGHT}>Why Choose Get Click Media</span>
              <h2 className={H2_LIGHT} style={SYNE_FONT}>
                No-code flow building, backed by AI and CRM integration
              </h2>
              <p className="text-gray-500 text-base leading-[1.7]">
                Get Click Media is an official{" "}
                <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">
                  Meta Business Solution Provider
                </Link>{" "}
                based in Noida, serving 10,000+ Indian businesses with
                WhatsApp Business API, chatbot automation,{" "}
                <Link href="/rcs-messaging" className="text-[#2563eb] underline underline-offset-2">
                  RCS messaging
                </Link>
                , and{" "}
                <Link href="/bulk-sms-service-provider-india" className="text-[#2563eb] underline underline-offset-2">
                  bulk SMS
                </Link>
                . Our chatbot platform combines no-code flow building with
                AI/NLP, native CRM integration, and dedicated onboarding
                support — so your bot goes live fast and keeps improving with
                real conversation data.
              </p>
            </div>
            <div className="w-full lg:w-[44%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-(--shadow-elevated)">
                <Image
                  src="/images/whatsapp/platform-combines-no-code-flowwhatsapp-api.png"
                  alt="Get Click Media WhatsApp chatbot flow-builder dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- RELATED LINKS ---------------------------------------------------- */}
      <section className="relative py-16">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={SYNE_FONT}>
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
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HeroLeadForm />

      {/* -- FAQ ---------------------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="faq">
        <SectionPattern tone="gold" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Frequently Asked Questions</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Questions about WhatsApp chatbots
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl aspect-[4/5]">
                <Image
                  src="/images/whatsapp/ask-question-whatsapp-api.png"
                  alt="Ask a question about WhatsApp chatbots"
                  fill
                  className="object-contain"
                  sizes="36vw"
                />
              </div>
            </div>
            <AccordionList
              className="flex-1 w-full"
              items={FAQS.map((faq) => ({
                question: faq.q,
                answer: (
                  <p className="text-base text-gray-500 leading-[1.7]">
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
                ),
              }))}
            />
          </div>
        </div>
      </section>

      {/* -- BOTTOM CTA ----------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className={CONTAINER}>
          <GlowCtaBanner
            title="Ready to automate your WhatsApp conversations?"
            description="Get Click Media designs, builds, and deploys your WhatsApp chatbot — go-live typically within 5–7 business days."
            ctaLabel="Get a WhatsApp Chatbot"
          />
        </div>
      </section>
    </>
  );
}

/** Tiny local join helper — avoids importing `cn` just for two-string concatenation
 *  in the many inline `className={cnJoin(...)}` spots above. */
function cnJoin(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}
