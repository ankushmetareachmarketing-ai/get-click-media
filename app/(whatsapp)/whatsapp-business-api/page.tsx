import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DarkHero from "@/app/components/DarkHero";
import { GradientCardCarousel } from "@/components/ui/gradient-card-carousel";
import { PremiumFeatureGrid } from "@/components/ui/premium-feature-grid";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { MarketingCta } from "@/components/ui/marketing-cta";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AccordionList } from "@/components/ui/accordion-list";
import { TestimonialsGrid } from "@/components/ui/testimonials-grid";
import { SectionPattern } from "@/components/ui/section-pattern";
import ClientMarquee from "@/app/components/ClientMarquee";
import WhatsappStatBand from "@/app/components/whatsapp/WhatsappStatBand";
import {
  CheckCheck,
  BarChart3,
  Bot,
  Megaphone,
  LayoutTemplate,
  MousePointerClick,
  Inbox,
  ShoppingBag,
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
  TrendingUp,
  MessageSquareText,
  Clock,
  MessagesSquare,
  PiggyBank,
} from "lucide-react";
import HeroLeadForm from "@/app/components/HeroLeadForm";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "WhatsApp Business API- Official Provider in India | Get Click Media",
  description:
    "Get Click Media is an official Meta Business Solution Provider offering WhatsApp Business API to 10,000+ Indian businesses. 3–5 day setup, chatbot automation, CRM integration, broadcast & analytics. Pricing from ₹0.40/conversation.",
  keywords:
    "WhatsApp Business API, whatsapp api, meta whatsapp api, waba whatsapp, official whatsapp api, whatsapp business api india, whatsapp api solution, whatsapp business api provider",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-business-api" },
  openGraph: {
    title:
      "WhatsApp Business API- Official Provider in India | Get Click Media",
    description:
      "Official Meta BSP. Automated, rich, interactive WhatsApp messaging at scale- chatbots, broadcast, CRM integration & analytics. 10,000+ businesses served. Setup in 3–5 days.",
    url: "https://getclickmedia.com/whatsapp-business-api",
    type: "website",
  },
};

/* -- JSON-LD Schema -------------------------------------------------------- */
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
            text: "WhatsApp Business API is Meta's enterprise messaging platform for large-scale, automated business communication. Unlike the free WhatsApp Business App- built for small businesses on a single device- the API supports unlimited messages, full automation, multi-agent inboxes, CRM integration, and chatbot flows. It requires a Meta-authorised provider (BSP) like Get Click Media to access.",
          },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp Business API free in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No- but the first 1,000 service conversations per month are free. Beyond that, Meta charges per 24-hour conversation session: marketing ₹0.80–0.90, utility and authentication ₹0.40–0.50. Get Click Media charges a platform fee on top of Meta's rates.",
          },
        },
        {
          "@type": "Question",
          name: "How long does WhatsApp Business API setup take in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With Get Click Media managing onboarding, most businesses go live in 3 to 5 business days- covering Meta Business Manager verification, WhatsApp Business Account setup, phone number registration, and template approval, run in parallel.",
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
            text: "Yes. WhatsApp Business API is not subject to TRAI DND restrictions. You can message opted-in customers on WhatsApp regardless of their DND registry status- a key advantage over promotional SMS.",
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
    icon: Bot,
    title: "WhatsApp Chatbot Automation",
    description: "Automate FAQs, lead qualification and support with intelligent conversational flows.",
    accent: "orange",
  },
  {
    icon: Megaphone,
    title: "Bulk Broadcast Messaging",
    description: "Reach thousands of opted-in customers instantly with personalised, high-deliverability campaigns.",
    accent: "pink",
  },
  {
    icon: LayoutTemplate,
    title: "Message Templates",
    description: "Pre-approved utility, marketing and OTP templates- submitted and managed on your behalf.",
    accent: "blue",
  },
  {
    icon: MousePointerClick,
    title: "Click-to-WhatsApp Ads",
    description: "Turn Meta ad clicks straight into WhatsApp conversations that convert far faster than landing pages.",
    accent: "cyan",
  },
  {
    icon: Inbox,
    title: "Shared Team Inbox",
    description: "Multiple agents, one inbox- with routing rules, assignment and SLA tracking built in.",
    accent: "indigo",
  },
  {
    icon: ShoppingBag,
    title: "WhatsApp Catalog",
    description: "A full product catalogue customers can browse, ask about and buy- without leaving the chat.",
    accent: "green",
  },
  {
    icon: BarChart3,
    title: "Campaign Analytics",
    description: "Delivery, read and click data on every message, so every campaign gets measurably better.",
    accent: "purple",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "End-to-end encryption, role-based access and audit logs that satisfy enterprise compliance.",
    accent: "red",
  },
] as const;

const COMPARISON_APP_API = [
  {
    feature: "Who it is for",
    app: "Small businesses- 1–5 people",
    api: "Medium and large businesses",
  },
  {
    feature: "Message volume",
    app: "Limited- manual sending",
    api: "Unlimited- fully automated",
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
  { feature: "API access", app: "No", api: "Yes- REST API + webhooks" },
  {
    feature: "Broadcast limit",
    app: "256 contacts per list",
    api: "Unlimited- to opted-in users",
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
    body: "As an official Meta BSP, we handle account setup, verification, and template submission. You never need to interact with Meta directly- we're your single point of contact.",
  },
  {
    n: "03",
    title: "Your Application",
    body: "You send messages via our REST API for programmatic triggers, or the no-code campaign dashboard for bulk sends. Your CRM or e-commerce platform connects here.",
  },
  {
    n: "04",
    title: "WhatsApp Delivery",
    body: "Messages reach the customer's WhatsApp app on any device or carrier- showing your verified business name and logo, with tap-to-act buttons.",
  },
  {
    n: "05",
    title: "Webhook Events",
    body: "Delivery, read, click, and reply events push to your webhook in real time. Your CRM updates and your dashboard populates live- no custom dev needed.",
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
    when: "Customer-initiated queries- free 24-hr window",
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
    body: "We have direct access to the WhatsApp Business API platform with Meta's official authorisation- not a reseller arrangement.",
  },
  {
    title: "Noida-based- local support in your timezone",
    body: "Your account manager works in IST, understands the Indian business calendar, and responds in English or Hindi.",
  },
  {
    title: "10,000+ businesses already served",
    body: "Across banking, e-commerce, education, healthcare, real estate, and logistics- with pre-built templates and CRM connectors ready to go.",
  },
  {
    title: "Unified platform- WhatsApp, RCS, and SMS",
    body: "One dashboard, one API, one analytics view. Add RCS messaging or bulk SMS anytime with zero migration.",
  },
  {
    title: "No hidden charges- transparent pricing",
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
    gcm: "Yes- unified",
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
    a: "WhatsApp Business API is Meta's enterprise messaging platform for large-scale, automated business communication. Unlike the free WhatsApp Business App- designed for small businesses managing conversations manually on a single device- the API supports unlimited messages, full automation, multi-agent inboxes, CRM integration, and chatbot flows. The API requires a Meta-authorised provider (BSP) like Get Click Media to access, whereas the App can be downloaded directly by anyone. See our full ",
    link: {
      text: "WhatsApp Business API vs WhatsApp Business App",
      href: "/whatsapp-api-vs-whatsapp-business-app",
    },
  },
  {
    q: "Is WhatsApp Business API free in India?",
    a: "No- but the first 1,000 service conversations per month are free. Beyond that, Meta charges per 24-hour conversation session. Marketing conversations cost approximately ₹0.80–0.90; utility and authentication conversations cost ₹0.40–0.50. Get Click Media charges a platform fee on top of Meta's rates.",
    link: {
      text: "See our full pricing breakdown",
      href: "/blog/whatsapp-api-pricing-india",
    },
  },
  {
    q: "How long does WhatsApp Business API setup take in India?",
    a: "With Get Click Media managing your onboarding, most businesses go live in 3 to 5 business days. This includes Meta Business Manager verification (1–3 days), WhatsApp Business Account setup (1 day), phone number registration (1 day), and template approval (1–3 days)- run in parallel to minimise total time.",
  },
  {
    q: "Do I need TRAI DLT registration for WhatsApp API messages?",
    a: "No. WhatsApp Business API is not regulated under TRAI's Telecom Commercial Communications Customer Preference Regulations. You do not need DLT entity registration, Sender ID registration, or template approval with TRAI for WhatsApp messages. You must still have marketing consent from customers before sending marketing-category messages.",
  },
  {
    q: "Can I send WhatsApp messages to DND-registered numbers?",
    a: "Yes. WhatsApp Business API is not subject to TRAI DND restrictions. You can send WhatsApp messages- including marketing messages- to customers on the DND registry, as long as they've given explicit opt-in consent. This is a significant advantage over promotional SMS.",
  },
  {
    q: "What is a WhatsApp Business Solution Provider (BSP)?",
    a: "A WhatsApp BSP is a company authorised by Meta to provide WhatsApp Business API access to other businesses. BSPs handle account setup, Meta verification, template submission, API infrastructure, and ongoing support. Businesses cannot access the WhatsApp API directly from Meta- they must go through a BSP like Get Click Media.",
  },
  {
    q: "Can I use WhatsApp Business API for OTP delivery?",
    a: "Yes. WhatsApp authentication-category messages are designed for OTP delivery and benefit from verified sender identity and higher open rates than SMS OTPs. Since WhatsApp needs internet connectivity, we recommend keeping SMS OTP as a fallback for customers with poor connectivity- Get Click Media supports both from one platform.",
  },
  {
    q: "What is the difference between WhatsApp Cloud API and on-premise API?",
    a: "WhatsApp Cloud API is hosted on Meta's cloud- faster to set up, always current, no infrastructure management. On-premise API requires you to host it yourself with significantly higher overhead. Meta has deprecated on-premise for new registrations, so Get Click Media's platform uses WhatsApp Cloud API exclusively.",
  },
  {
    q: "How many messages can I send per day with WhatsApp Business API?",
    a: "WhatsApp uses a tiered messaging limit system. New accounts start at Tier 1 (1,000 business-initiated conversations per 24 hours) and automatically upgrade to Tier 2 (10,000/day), Tier 3 (1,00,000/day), and beyond with consistent sending quality. Get Click Media helps clients warm up accounts properly to reach higher tiers quickly.",
  },
  {
    q: "What happens if WhatsApp is not installed on the customer's phone?",
    a: "Your message won't be delivered- WhatsApp has no SMS fallback. For critical communications like OTPs and payment alerts, Get Click Media recommends WhatsApp as the primary channel with SMS as a fallback, both available from our unified platform.",
    link: { text: "Compare WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
  },
];

const WHATSAPP_TESTIMONIALS = [
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Ananya Iyer",
    role: "Head of Growth, UrbanCart",
    text: "Our WhatsApp chatbot now handles 70% of order-status queries automatically- support tickets dropped by half in the first month.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Karthik Rao",
    role: "Marketing Lead, FreshMart Foods",
    text: "Broadcast campaigns on WhatsApp get us 40% higher click-through than our email newsletter ever did, at a fraction of the cost.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Simran Kaur",
    role: "Ops Manager, QuickLoan Finance",
    text: "Get Click Media got our OTP and utility templates approved in under two days. Onboarding was the smoothest API integration we've done.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Vikram Desai",
    role: "Support Lead, TechFix Solutions",
    text: "The shared inbox means our whole team sees full conversation history- no more asking customers to repeat themselves after a handoff.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Neha Bhatt",
    role: "Performance Marketing, StyleHub",
    text: "Click-to-WhatsApp ads convert almost twice as well as our landing pages. Customers chat instead of bouncing off a form.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    name: "Arjun Nair",
    role: "Founder, LocalBazaar",
    text: "Customers now browse and buy straight from our WhatsApp catalog- no separate app, no friction, just a chat.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    name: "Dr. Meera Pillai",
    role: "Clinic Director, CarePlus Wellness",
    text: "Appointment reminders on WhatsApp cut our no-show rate noticeably within weeks- patients simply engage with it more than SMS.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    name: "Rajesh Kumar",
    role: "Collections Head, SafeLoan NBFC",
    text: "EMI reminder delivery and read-rates on WhatsApp are far better than SMS ever gave us- collections follow-up got measurably easier.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Divya Menon",
    role: "CMO, TravelNest",
    text: "Delivery and read analytics on every campaign gives us real ROI data we never had with SMS. Budget conversations are so much easier now.",
  },
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
export default function WhatsAppBusinessAPIPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* -----------------------------------------------------------------
          HERO- "What is this?"
      ----------------------------------------------------------------- */}
      <DarkHero
        theme="light"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "WhatsApp Business API" },
        ]}
        eyebrow="Official Meta Business Solution Provider"
        title="WhatsApp Business API"
        highlight="Official Provider in India"
        description={
          <>
            Get Click Media is an official Meta BSP headquartered in Noida,
            offering WhatsApp Business API to over 10,000 businesses across
            India- automated, rich, interactive messaging at scale,
            delivered straight to any WhatsApp user.
            <strong className="text-gray-900">
              {" "}
              Setup takes 3–5 business days. Pricing starts at ₹0.40 per
              conversation.
            </strong>
          </>
        }
        primaryCta={{ label: "Get WhatsApp API" }}
        secondaryCta={{ label: "View Pricing", href: "#pricing" }}
        imageSrc="/images/whatsapp/whatsapp-business-api-provider-india.png"
        imageAlt="WhatsApp Business API rich message preview on a phone, showing interactive buttons and carousel"
        trustLine="Official Meta BSP · 3–5 Day Setup · 10,000+ Businesses Served · Noida, India"
        stats={[
          { value: "98%", label: "Message Open Rate" },
          { value: "10,000+", label: "Businesses Served" },
          { value: "3–5 Days", label: "Go-Live Timeline" },
          { value: "24×7", label: "Support" },
        ]}
      />

      {/* -- TRUST LOGOS ------------------------------------------------------ */}
      <ClientMarquee />

      {/* -- TRUST STAT BAND- icons + key numbers, right under the hero ---- */}
      <WhatsappStatBand />

      {/* -- SEE IT IN ACTION- concrete "what is this" proof --------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="see-it-in-action">
        <SectionPattern tone="gold" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-[54%] shrink-0">
              <div className="relative w-full rounded-2xl aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/whatsapp/whatsapp-business-api-provider.webp"
                  alt="WhatsApp Business API shared inbox screenshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 54vw"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className={EYEBROW_LIGHT}>See It In Action</span>
              <h2 className={H2_LIGHT} style={SYNE_FONT}>
                One shared inbox for every WhatsApp conversation
              </h2>
              <p className="text-gray-500 text-base leading-[1.7]">
                Every inbound message- from a chatbot escalation, a broadcast
                reply, or a direct customer query- lands in a single team
                inbox. Agents see full conversation history, assign chats, and
                reply with templates or free text, all synced back to your CRM
                in real time.
              </p>
              <ul className="space-y-2 pt-2">
                {[
                  "Shared inbox for your entire team",
                  "Smart routing & agent assignment",
                  "Quick-reply & canned responses",
                  "Full chat history synced to CRM",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-700"
                  >
                    <CheckCheck className="w-4 h-4 text-[#2563eb] shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <MarketingCta label="See How It Works" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- WHAT IS WHATSAPP BUSINESS API- deeper "what is this" ---------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="what-is-whatsapp-api">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>What Is WhatsApp Business API?</span>
            <h2 className={cnJoin(H2_LIGHT, "max-w-3xl mx-auto")} style={SYNE_FONT}>
              The backbone behind every automated WhatsApp message you receive
            </h2>
            <p className="text-gray-500 text-base max-w-[680px] mx-auto leading-[1.7]">
              WhatsApp Business API (or WABA) is Meta&apos;s enterprise platform
              for messaging customers at scale- it powers every automated
              message you get from banks, e-commerce, and healthcare providers
              in India, with no device limit or message cap.
            </p>
          </div>

          <ResponsiveTable
            caption="WhatsApp Business App vs WhatsApp Business API"
            highlightColumnKey="api"
            columns={[
              { key: "feature", label: "Feature" },
              { key: "app", label: "WhatsApp Business App", align: "center" },
              { key: "api", label: "WhatsApp Business API", align: "center" },
            ]}
            rows={COMPARISON_APP_API}
          />
          <p className="text-center text-sm text-gray-400 mt-4">
            See the full breakdown:{" "}
            <Link
              href="/blog/whatsapp-api-vs-whatsapp-business-app"
              className="text-[#2563eb] underline underline-offset-2"
            >
              WhatsApp Business API vs WhatsApp Business App
            </Link>
          </p>
        </div>
      </section>

      {/* -- BENEFITS- "Why should I care?" --------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="benefits">
        <SectionPattern tone="gold" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>Why WhatsApp API for Indian Businesses</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              10,000+ Indian businesses already use it- here&apos;s why
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3 lg:auto-rows-[minmax(11rem,auto)]">
            <BentoCard
              icon={TrendingUp}
              name="Highest open rates of any channel in India"
              description="WhatsApp achieves 98% open rates in India, versus 20–25% for email and 30–35% for SMS- your customers open every message."
              className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3"
              image={
                <Image
                  src="/images/whatsapp/whatsapp-bussiness-api.webp"
                  alt="WhatsApp Business API broadcast and catalog messages shown on a phone"
                  fill
                  className="object-contain object-bottom"
                />
              }
            />
            <BentoCard
              icon={MessageSquareText}
              name="Rich, trusted communication that converts"
              description="A verified message with your logo, product image, and a 'Buy Now' button outperforms a plain SMS link by 5x to 8x on click-through rate."
              className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
            />
            <BentoCard
              icon={Clock}
              name="No DND or time restrictions for service messages"
              description="Service-category messages like OTPs and appointment reminders can be sent any time- no TRAI DND filtering for non-promotional content."
              className="lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3"
            />
            <BentoCard
              icon={MessagesSquare}
              name="Two-way conversations at scale"
              description="Customers can reply, ask questions, or place orders in the same thread- with chatbot automation scaling this to thousands of conversations."
              className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
            />
            <BentoCard
              icon={PiggyBank}
              name="Lower cost per conversion than paid ads"
              description="Indian businesses report cost-per-conversion 60–80% lower than equivalent Google or Meta ad campaigns for WhatsApp-led nurturing."
              className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"
            />
            <BentoCard
              icon={BarChart3}
              name="Complete analytics visibility"
              description="Delivery, read, and click tracking on every message- data that email, SMS, and phone calls simply cannot provide."
              className="lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4"
            />
          </BentoGrid>
        </div>
      </section>

      {/* -- USE CASES BY INDUSTRY- "Why should I care?" (relevance) ------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="use-cases">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>Industry Use Cases</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              WhatsApp Business API across every industry
            </h2>
          </div>
          <GradientCardCarousel
            cards={INDUSTRIES.map((ind) => ({
              icon: <ind.icon className="w-7 h-7" />,
              title: ind.name,
              description: ind.body,
              footnote: ind.result,
              href: ind.href,
            }))}
          />
        </div>
      </section>

      {/* -- HOW IT WORKS- mechanism ---------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="how-it-works">
        <SectionPattern tone="green" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4 mx-auto lg:w-[40%]">
            <span className={EYEBROW_DARK}>How It Works</span>
            <h2 className={H2_DARK} style={SYNE_FONT}>
              How a message travels from your app to your customer
            </h2>
            <p className="text-white/50 text-base leading-[1.7]">
              Understanding the architecture helps you plan your integration
              correctly.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {HOW_IT_WORKS.map((s) => (
                <div key={s.n} className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-lg shadow-blue-900/40" style={SYNE_FONT}>
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

      {/* -- FEATURES- "What do I get?" -------------------------------------- */}
      <PremiumFeatureGrid
        id="features"
        badge="WhatsApp Business API Features"
        heading={["Everything your business needs", "to grow on WhatsApp"]}
        description="Automate customer conversations, marketing and support from one platform."
        features={FEATURES.map((f) => ({
          icon: <f.icon className="h-6 w-6" aria-hidden="true" />,
          title: f.title,
          description: f.description,
          accent: f.accent,
        }))}
      />

      {/* -- WHY GET CLICK MEDIA- "Can I trust this?" ----------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="why-gcm">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="flex flex-col lg:flex-row lg:items-start gap-14">
            <div className="flex-1 space-y-6">
              <span className={EYEBROW_LIGHT}>Why Choose Get Click Media?</span>
              <h2 className={H2_LIGHT} style={SYNE_FONT}>
                A direct Meta partner.
                <br />
                Not a reseller.
              </h2>
              <p className="text-gray-500 text-base leading-[1.7]">
                Get Click Media is an authorised{" "}
                <strong className="text-gray-800">
                  WhatsApp Business API provider
                </strong>{" "}
               - we have direct access to the platform and onboard your
                business with Meta&apos;s official authorisation.
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {["Official Meta BSP", "Noida, India", "24×7 Support"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border border-(--border-subtle) bg-white px-3.5 py-1.5 text-xs font-semibold text-(--ink-2)"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    {b}
                  </span>
                ))}
              </div>
              {WHY_GCM.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCheck className="w-3.5 h-3.5 text-white" />
                  </span>
                  <div>
                    <p className="text-base font-bold text-gray-900">{p.title}</p>
                    <p className="text-base text-gray-500 mt-0.5 leading-[1.7]">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[44%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3 shadow-(--shadow-elevated)">
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

      {/* -- CUSTOMER REVIEWS- "Can I trust this?" -------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="testimonials">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Customer Stories</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Trusted by businesses running WhatsApp API at scale
            </h2>
          </div>
          <TestimonialsGrid testimonials={WHATSAPP_TESTIMONIALS} maxDisplayed={6} />
        </div>
      </section>

      {/* -- PROVIDER COMPARISON- "Can I trust this?" ----------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="comparison">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Full Comparison</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Get Click Media vs Other WhatsApp API Providers in India
            </h2>
          </div>
          <ResponsiveTable
            caption="Get Click Media vs other WhatsApp API providers in India"
            highlightColumnKey="gcm"
            columns={[
              { key: "feature", label: "Feature" },
              { key: "gcm", label: "Get Click Media", align: "center" },
              { key: "others", label: "WATI / Twilio / Reseller", align: "center" },
            ]}
            rows={PROVIDER_COMPARISON}
          />
          <p className="text-center text-sm text-gray-400 mt-4">
            Get Click Media is the only provider in NCR offering{" "}
            <Link
              href="/blog/whatsapp-vs-rcs"
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

      {/* -- CONVERSATION CATEGORIES / PRICING- "How much?" ----------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="pricing">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Conversation Categories</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              WhatsApp API pricing in India- by conversation type
            </h2>
            <p className="text-gray-500 text-base max-w-[680px] mx-auto leading-[1.7]">
              Pricing is based on 24-hour conversation sessions, not individual
              messages. Meta provides 1,000 free service conversations per month
              to every account.
            </p>
          </div>
          <ResponsiveTable
            caption="WhatsApp API pricing in India by conversation type"
            highlightColumnKey="price"
            columns={[
              { key: "cat", label: "Category" },
              { key: "when", label: "When It's Used" },
              { key: "who", label: "Who Initiates" },
              { key: "price", label: "India Rate" },
            ]}
            rows={CONVERSATION_TYPES}
          />
          <p className="text-center text-base text-gray-400 mt-6">
            Get Click Media charges a platform fee on top of Meta&apos;s
            conversation charges for API access, campaign management, and
            support. See the full breakdown- including volume tiers and a cost
            comparison with SMS and RCS- on our{" "}
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

      {/* -- HOW TO GET WHATSAPP API- "How do I start?" --------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="get-started">
        <SectionPattern tone="gold" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>How to Get WhatsApp Business API</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              3 steps with Get Click Media- you never talk to Meta directly
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                n: "01",
                title: "Business Verification",
                body: "We guide you through Meta Business Manager verification- submitting your registration documents and website. Most businesses finish in 1–3 business days.",
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
                className="relative rounded-2xl border-2 border-blue-100 bg-white p-7 space-y-4"
              >
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center" style={SYNE_FONT}>
                  {s.n}
                </span>
                <h3 className="text-base font-bold text-gray-900 pt-2">
                  {s.title}
                </h3>
                <p className="text-base text-gray-500 leading-[1.7]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mb-16">
            Read the detailed walkthrough:{" "}
            <Link
              href="/blog/how-to-get-whatsapp-business-api"
              className="text-[#2563eb] font-semibold underline underline-offset-2"
            >
              How to get WhatsApp Business API
            </Link>
          </p>

          <GlowCtaBanner
            title="Flexible pricing for every business size"
            description="Per-conversation pricing based on category and volume. All plans include template management, CRM integration assistance, and 24×7 support."
            ctaLabel="Talk to Sales"
          />
        </div>
      </section>

      {/* -- RELATED GUIDES / INTERNAL LINKS ------------------------------- */}
      <section className="relative py-16">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={SYNE_FONT}>
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
      <HeroLeadForm />

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="faq">
        <SectionPattern tone="gold" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Frequently Asked Questions</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Got questions about WhatsApp Business API in India?
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl aspect-[4/5]">
                <Image
                  src="/images/whatsapp/ask-question-whatsapp-api.png"
                  alt="WhatsApp Business API rich message preview on a phone"
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
                ),
              }))}
            />
          </div>
        </div>
      </section>


    </>
  );
}

/** Tiny local join helper- avoids importing `cn` just for two-string concatenation
 *  in the many inline `className={cnJoin(...)}` spots above. */
function cnJoin(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}
