import type { Metadata } from "next";
import Link from "next/link";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import HeroLeadForm from "@/app/components/HeroLeadForm";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { MarketingCta } from "@/components/ui/marketing-cta";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";
import {
  Target,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Repeat,
  Percent,
  Tag,
  Bell,
  Gift,
  CalendarClock,
  Users,
  FileCheck,
  BarChart3,
} from "lucide-react";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "WhatsApp Marketing Services in India — Campaigns, Automation & ROI | Get Click Media",
  description:
    "End-to-end WhatsApp marketing services in India — campaign strategy, template creation, broadcast management, chatbot automation, and performance reporting. Official Meta BSP based in Noida. Go live in 5 days.",
  keywords:
    "WhatsApp Marketing Services India, whatsapp marketing api, whatsapp marketing company india, whatsapp marketing agency india, bulk whatsapp marketing india, whatsapp marketing platform india, whatsapp campaign management india",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-marketing-services" },
  openGraph: {
    title: "WhatsApp Marketing Services in India — Campaigns, Automation & ROI | Get Click Media",
    description:
      "Campaign strategy, template management, broadcast execution, chatbot automation, and analytics — the complete WhatsApp marketing service from an official Meta BSP.",
    url: "https://getclickmedia.com/whatsapp-marketing-services",
    type: "website",
  },
};

/* -- JSON-LD Schema -------------------------------------------------------- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "WhatsApp Marketing Services India",
      provider: { "@type": "Organization", "@id": "https://getclickmedia.com/#org", name: "Get Click Media" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "WhatsApp Marketing Platform",
      url: "https://getclickmedia.com/whatsapp-marketing-services",
      description:
        "End-to-end WhatsApp marketing services in India — campaign strategy, template management, broadcast execution, chatbot automation, and analytics. Official Meta BSP.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp Marketing Services", item: "https://getclickmedia.com/whatsapp-marketing-services" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is WhatsApp marketing?", acceptedAnswer: { "@type": "Answer", text: "WhatsApp marketing uses WhatsApp Business API to send promotional campaigns, transactional notifications, and automated journeys to opted-in customers. India average: 98% open rate, 20-28% CTR." } },
        { "@type": "Question", name: "Is WhatsApp marketing legal in India?", acceptedAnswer: { "@type": "Answer", text: "Yes, when you have explicit opt-in consent, use Meta-approved templates, honour opt-outs, and comply with DPDP 2023." } },
        { "@type": "Question", name: "Can I send WhatsApp marketing to DND numbers?", acceptedAnswer: { "@type": "Answer", text: "Yes. WhatsApp API is not subject to TRAI DND restrictions. Opted-in customers can be messaged regardless of DND status." } },
        { "@type": "Question", name: "What is the difference between WhatsApp broadcast and WhatsApp marketing API?", acceptedAnswer: { "@type": "Answer", text: "WhatsApp broadcast is limited to 256 contacts and requires mutual contacts. WhatsApp API has no contact limit, full automation, personalisation, and analytics." } },
        { "@type": "Question", name: "How many customers can I message at once?", acceptedAnswer: { "@type": "Answer", text: "Starting at 1,000/day (Tier 1), scaling to 10,000 (Tier 2), 1,00,000 (Tier 3), and unlimited based on quality and volume history." } },
      ],
    },
  ],
};

const WHY_DIFFERENT = [
  {
    icon: MessageCircle,
    title: "It lands where your customers already are",
    body: "Indian consumers check WhatsApp 25+ times daily. Unlike email or a competitive social feed, messages land in a personal, distraction-free inbox.",
  },
  {
    icon: Target,
    title: "It enables two-way conversations",
    body: "Customers can reply, ask questions, tap buttons, and complete transactions in the same thread — driving 5x–8x higher conversion than SMS.",
  },
  {
    icon: ShieldCheck,
    title: "Verified sender identity builds instant trust",
    body: "Your brand name, logo, and Green Tick appear on every message — WhatsApp campaigns see 60–70% lower opt-out rates than SMS.",
  },
];

const MARKETING_TYPES = [
  { type: "Promotional / Campaign Marketing", what: "Business-initiated messages to opted-in customers — offers, launches, events. Uses Marketing-category templates.", best: "Flash sales, festive campaigns, launches, re-engagement, loyalty rewards" },
  { type: "Transactional / Utility Marketing", what: "Automated messages triggered by customer actions. Uses Utility-category templates.", best: "Order flows, appointments, payments, delivery updates, OTPs" },
  { type: "Conversational Marketing", what: "Two-way engagement, chatbot-handled, escalating to agents for complex cases.", best: "Lead qualification, support, product discovery, feedback collection" },
];

const CAMPAIGNS = [
  { icon: Tag, name: "Flash Sale & Seasonal Campaign", when: "Sale launch day, festive season", kpi: "Open rate 96% · CTR 22–30% · 5x–8x revenue vs SMS" },
  { icon: Repeat, name: "Abandoned Cart Recovery", when: "1 hour + 24 hours after abandonment", kpi: "18–26% recovery rate vs 4–6% for email" },
  { icon: Sparkles, name: "New Product / Collection Launch", when: "Early access, 2–4 hrs before public launch", kpi: "78% open rate · 3x first-hour conversion" },
  { icon: Percent, name: "Price Drop & Wishlist Alert", when: "15%+ price drop on wishlisted item", kpi: "41% CTR — highest of any e-commerce campaign" },
  { icon: Gift, name: "Loyalty & Rewards Update", when: "Post-purchase, tier upgrade, points expiry", kpi: "31% engagement vs 8% via email" },
  { icon: Bell, name: "Win-Back / Re-engagement", when: "Customer inactive 60–90 days", kpi: "12% win-back rate vs 2.5% email, 1.8% SMS" },
  { icon: CalendarClock, name: "Event & Webinar Registration", when: "14 days, 3 days, and morning-of reminders", kpi: "+30% attendance vs email · -40% no-show" },
  { icon: Users, name: "Referral Programme", when: "3–7 days post-delivery, at peak NPS", kpi: "5x referral awareness vs email" },
] as const;

const LIFECYCLE = [
  { stage: "Awareness", problem: "High paid ad costs for new customers", solution: "Click-to-WhatsApp ads on Meta — direct into conversation", result: "Cost per lead 40–60% lower" },
  { stage: "Consideration", problem: "Leads go cold after first enquiry", solution: "Automated follow-up: product info + comparison + offer", result: "3x lead-to-sale vs email" },
  { stage: "Purchase", problem: "70% of Indian e-commerce carts abandoned", solution: "Cart recovery with product image + urgency + discount", result: "18–26% recovery vs 4–6% email" },
  { stage: "Onboarding", problem: "New customers confused, high early churn", solution: "Welcome sequence: tips, how-to, exclusive offer", result: "Early churn -35%, NPS +12 pts" },
  { stage: "Retention", problem: "Customers stop buying after 1–2 purchases", solution: "Replenishment, new arrivals, loyalty updates", result: "Repeat purchase +24%" },
  { stage: "Advocacy", problem: "Satisfied customers not referring/reviewing", solution: "Review request + referral invite at peak NPS", result: "Review volume 5x, referral 4.7x" },
  { stage: "Win-back", problem: "Lapsed customers unresponsive to email/SMS", solution: "Personalised re-engagement carousel + offer", result: "12% win-back vs 2.5% email" },
];

const SERVICES = [
  { icon: Target, title: "Campaign Strategy & Audience Segmentation", body: "Define your WhatsApp marketing calendar, segment your database by behaviour, and plan the right campaign type per segment." },
  { icon: FileCheck, title: "Template Creation & Meta Approval Management", body: "We draft templates in the correct Meta format, review for policy compliance, and manage submission and approval.", href: "/whatsapp-template-messages" },
  { icon: CalendarClock, title: "Campaign Execution — Broadcast & Scheduling", body: "List upload, variable personalisation, send-time optimisation, and real-time delivery monitoring.", href: "/whatsapp-broadcast" },
  { icon: MessageCircle, title: "WhatsApp Chatbot Automation", body: "Chatbot flows that qualify leads, answer FAQs, book appointments, and escalate complex queries.", href: "/whatsapp-chatbot" },
  { icon: BarChart3, title: "Performance Analytics & Reporting", body: "Delivery, read rate, CTR per button, conversion, revenue attributed, and cost per conversion — tracked end-to-end." },
  { icon: ShieldCheck, title: "Compliance & Opt-in Management", body: "Opt-in database management, automated opt-outs, and audit-ready DPDP 2023 records." },
];

const COMPARISON = [
  { metric: "Average open rate India", wa: "98%", email: "20–25%", sms: "30–35%", ads: "Impressions-based" },
  { metric: "Average CTR", wa: "20–28%", email: "3–5%", sms: "1.5–2%", ads: "1–3%" },
  { metric: "Cost per 1,000 messages", wa: "₹790–910", email: "₹50–200", sms: "₹120–180", ads: "₹3,000–15,000 CPM" },
  { metric: "Two-way conversation", wa: "Yes — native", email: "No", sms: "No", ads: "No" },
  { metric: "DND restriction", wa: "No", email: "No", sms: "Yes (promo)", ads: "No" },
  { metric: "Best use case", wa: "Conversational, opted-in base", email: "Newsletter, long-form", sms: "Universal reach, OTP", ads: "New audience acquisition" },
];

const FAQS = [
  { q: "What is WhatsApp marketing and how does it work in India?", a: "WhatsApp marketing is the use of WhatsApp Business API to send promotional campaigns, transactional notifications, and automated customer journeys to opted-in customers. It works by sending Meta-approved templates via the API — delivering rich media messages with verified sender identity. India consistently sees 98% open rates and 20–28% click-through rates." },
  { q: "Is WhatsApp marketing legal in India?", a: "Yes, when done correctly: you need explicit opt-in consent, all promotional messages must use Meta-approved Marketing-category templates, opt-outs must be honoured immediately, and you must comply with India's DPDP Act 2023 for data handling." },
  { q: "How many customers can I message on WhatsApp at once?", a: "There's no absolute cap, but throughput is governed by your messaging tier — starting at 1,000/day (Tier 1), scaling to 10,000 (Tier 2), 1,00,000 (Tier 3), and unlimited based on quality and volume history." },
  { q: "Can I send WhatsApp marketing messages to customers on the DND list?", a: "Yes. WhatsApp Business API is not classified as commercial SMS under TRAI's regulations, so it's not subject to DND restrictions — as long as customers have given explicit opt-in consent." },
  { q: "What is the difference between WhatsApp broadcast and WhatsApp marketing?", a: "WhatsApp broadcast via the consumer app is limited to 256 mutual contacts with no automation or analytics. WhatsApp marketing via the Business API has no contact limit and supports full automation, personalisation, and analytics.", link: { text: "See WhatsApp Broadcast API", href: "/whatsapp-broadcast" } },
  { q: "How do I collect WhatsApp opt-ins for marketing?", a: "Through website opt-in forms, Click-to-WhatsApp ads, WhatsApp Flows, SMS opt-in campaigns, offline point-of-sale consent, and in-app prompts. Get Click Media's onboarding includes an opt-in strategy review." },
  { q: "Can WhatsApp marketing messages include images and buttons?", a: "Yes — JPEG/PNG images, animated GIFs, video thumbnails, up to 3 interactive buttons, quick-reply chips, and product carousels of 2–10 cards." },
  { q: "How does Get Click Media measure WhatsApp marketing performance?", a: "Delivery rate, read rate, CTR per button, conversion rate, revenue per campaign, cost per conversion, and opt-out rate — with monthly reports benchmarked against industry data." },
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
export default function WhatsAppMarketingServicesPage() {
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
          { label: "WhatsApp Marketing Services" },
        ]}
        eyebrow="Official Meta BSP · Full-Service Marketing"
        title="WhatsApp Marketing Services in India"
        highlight="Campaigns, Automation & ROI"
        description={
          <>
            Campaign strategy, message templates, broadcast management, chatbot
            automation, and performance reporting — the complete WhatsApp
            marketing service for Indian businesses.
          </>
        }
        primaryCta={{ label: "Start WhatsApp Marketing" }}
        secondaryCta={{ label: "See Pricing", href: "/blog/whatsapp-api-pricing-india" }}
        imageSrc="/images/whatsapp/whatsapp-marketing-service-provider.png"
        imageAlt="WhatsApp marketing campaign message shown on a phone"
        trustLine="Official Meta BSP · No-code Campaign Builder · Industry Templates Ready · Go Live in 5 Days"
        stats={[
          { value: "98%", label: "Avg. Message Open Rate" },
          { value: "20–28%", label: "Avg. Click-Through Rate" },
          { value: "8", label: "Campaign Types Covered" },
          { value: "5 Days", label: "Go-Live Timeline" },
        ]}
      />

      {/* -- TRUST LOGOS ------------------------------------------------------ */}
      <ClientMarquee />

      {/* -- DIRECT ANSWER ---------------------------------------------------- */}
      <section className="relative overflow-hidden py-10 bg-white">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base text-gray-700 leading-[1.7]">
              WhatsApp marketing services involve using{" "}
              <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">
                WhatsApp Business API
              </Link>{" "}
              to run promotional campaigns, transactional communications, and
              automated customer journeys at scale. Get Click Media provides
              end-to-end WhatsApp marketing services in India — including
              campaign strategy, message template creation, broadcast
              management, chatbot automation, and performance reporting — for
              businesses across banking, e-commerce, education, healthcare,
              and real estate.
            </p>
          </div>
        </div>
      </section>

      {/* -- WHY WHATSAPP MARKETING IS DIFFERENT — "What is this?" ----------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="what-is-whatsapp-marketing">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="flex flex-col lg:flex-row items-center gap-14 mb-14">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className={EYEBROW_LIGHT}>What Is WhatsApp Marketing?</span>
              <h2 className={H2_LIGHT} style={SYNE_FONT}>
                India&apos;s highest-ROI marketing channel
              </h2>
              <p className="text-gray-500 text-base leading-[1.7]">
                WhatsApp marketing puts your campaigns in the one app Indian
                consumers check dozens of times a day — rich media, verified
                sender identity, and two-way replies, all in a single thread.
              </p>
              <div className="pt-2 flex justify-center lg:justify-start">
                <MarketingCta label="Get a WhatsApp Marketing Plan" />
              </div>
            </div>
            <div className="w-full lg:w-[46%] shrink-0 flex justify-center">
              <video
                src="/images/video/whatsapp-manage.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="w-auto h-auto max-w-full rounded-2xl "
              />
            </div>
          </div>
          <BentoGrid className="max-w-6xl mx-auto lg:grid-cols-3">
            {WHY_DIFFERENT.map((w) => (
              <BentoCard key={w.title} icon={w.icon} name={w.title} description={w.body} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- 3 TYPES — "How does it work" ------------------------------------ */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-gray-50")} id="types">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>3 Types of WhatsApp Marketing</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Which does your business need?
            </h2>
          </div>
          <ResponsiveTable
            caption="3 types of WhatsApp marketing"
            columns={[
              { key: "type", label: "Type" },
              { key: "what", label: "What It Is" },
              { key: "best", label: "Best For" },
            ]}
            rows={MARKETING_TYPES}
          />
          <p className="text-center text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
            Most mature programmes run all three simultaneously — promotional
            for acquisition, transactional for retention, and conversational
            for support and upsell.
          </p>
        </div>
      </section>

      {/* -- 8 CAMPAIGN TYPES — "What do I get?" ------------------------------ */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-[#0f172a]")} id="campaigns">
        <SectionPattern tone="green" opacity={0.08} />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_DARK}>High-ROI Campaign Types</span>
            <h2 className={H2_DARK} style={SYNE_FONT}>
              8 campaign types built for the Indian market
            </h2>
          </div>
          <BentoGrid className="sm:grid-cols-2 lg:grid-cols-4">
            {CAMPAIGNS.map((c) => (
              <BentoCard
                key={c.name}
                icon={c.icon}
                name={c.name}
                description={`${c.when}. ${c.kpi}`}
                tone="dark"
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- LIFECYCLE --------------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="lifecycle">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Full Customer Lifecycle</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              From first touch to loyal advocate
            </h2>
          </div>
          <ResponsiveTable
            caption="WhatsApp marketing across the full customer lifecycle"
            highlightColumnKey="result"
            columns={[
              { key: "stage", label: "Stage" },
              { key: "problem", label: "Common Problem" },
              { key: "solution", label: "WhatsApp Solution" },
              { key: "result", label: "Result" },
            ]}
            rows={LIFECYCLE}
          />
        </div>
      </section>

      {/* -- WHAT YOU GET ------------------------------------------------------ */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-gray-50")} id="services">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>What You Get</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              End-to-end management, not just API access
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {SERVICES.map((s) => (
              <BentoCard
                key={s.title}
                icon={s.icon}
                name={s.title}
                description={s.body}
                href={s.href}
                cta={s.href ? "Learn more" : undefined}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- COMPARISON --------------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="comparison">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Channel Comparison</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              WhatsApp vs{" "}
              <Link href="/whatsapp-vs-email-marketing" className="hover:underline underline-offset-4">
                Email
              </Link>{" "}
              vs{" "}
              <Link href="/whatsapp-vs-sms" className="hover:underline underline-offset-4">
                SMS
              </Link>{" "}
              vs Meta Ads
            </h2>
          </div>
          <ResponsiveTable
            caption="WhatsApp vs Email vs SMS vs Meta/Google Ads"
            highlightColumnKey="wa"
            columns={[
              { key: "metric", label: "Metric" },
              { key: "wa", label: "WhatsApp" },
              { key: "email", label: "Email" },
              { key: "sms", label: "Bulk SMS" },
              { key: "ads", label: "Meta / Google Ads" },
            ]}
            rows={COMPARISON}
          />
          <p className="text-center text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
            Use WhatsApp marketing for your opted-in customer base and warm
            lead nurturing; use Meta or Google Ads for new audience
            acquisition, with{" "}
            <Link href="/whatsapp-click-to-whatsapp-ads" className="text-[#2563eb] underline underline-offset-2">
              Click-to-WhatsApp ads
            </Link>{" "}
            as the bridge.
          </p>
        </div>
      </section>

      {/* -- COMPLIANCE — "Can I trust this?" ----------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-[#0f172a]")} id="compliance">
        <SectionPattern tone="green" opacity={0.08} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_DARK}>
              <ShieldCheck className="w-3.5 h-3.5" /> Compliance
            </span>
            <h2 className={H2_DARK} style={SYNE_FONT}>
              What you must know about WhatsApp marketing compliance
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7 space-y-3">
              <h3 className="text-base font-bold text-white">Meta&apos;s WhatsApp Business Messaging Policy</h3>
              <ul className="space-y-2.5">
                {[
                  "Opt-in mandatory — no cold contacts or purchased lists",
                  "Marketing templates require Meta approval before use",
                  "Quality rating monitors opt-out and report rates",
                  "Prohibited categories — gambling, alcohol, adult content, misleading claims",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <FileCheck className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7 space-y-3">
              <h3 className="text-base font-bold text-white">India&apos;s DPDP Act 2023</h3>
              <ul className="space-y-2.5">
                {[
                  "Documented consent required before marketing messages",
                  "Every message must include a clear opt-out mechanism",
                  "Personal data cannot be retained beyond its collection purpose",
                  "No cross-border transfer without appropriate safeguards",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <FileCheck className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-white/40 mt-8 max-w-2xl mx-auto">
            Get Click Media reviews all marketing templates for policy
            compliance before submission, with automated opt-out management
            and DPDP-aligned data handling built into the platform.
          </p>
        </div>
      </section>

      {/* -- RELATED LINKS -------------------------------------------------- */}
      <section className="relative overflow-hidden py-16 bg-gray-50">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={SYNE_FONT}>
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
              { label: "WhatsApp API Pricing India", href: "/blog/whatsapp-api-pricing-india" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp Broadcast", href: "/whatsapp-broadcast" },
              { label: "WhatsApp Message Templates", href: "/whatsapp-template-messages" },
              { label: "Click to WhatsApp Ads", href: "/whatsapp-click-to-whatsapp-ads" },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
              { label: "WhatsApp API Delhi", href: "/whatsapp-api-delhi" },
              { label: "WhatsApp API Noida", href: "/whatsapp-api-noida" },
              { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
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
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="faq">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Frequently Asked Questions</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Questions about WhatsApp Marketing in India
            </h2>
          </div>
          <AccordionList
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
      </section>

      {/* -- BOTTOM CTA ------------------------------------------------------ */}
      <section className="py-20 bg-white">
        <div className={CONTAINER}>
          <GlowCtaBanner
            title="Launch Your WhatsApp Marketing Campaign Today"
            description="Official Meta BSP · No-code campaign builder · Industry templates ready · Go live in 5 days."
            ctaLabel="Start WhatsApp Marketing"
          />
          <p className="text-center text-sm text-gray-400 mt-6">
            See the full breakdown:{" "}
            <Link href="/blog/whatsapp-api-pricing-india" className="text-[#2563eb] underline underline-offset-2">
              WhatsApp API pricing in India
            </Link>
          </p>
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
