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
  Users,
  LayoutTemplate,
  CalendarClock,
  BarChart3,
  Sparkles,
  UserX,
  FlaskConical,
  ShoppingCart,
  Landmark,
  HeartPulse,
  Building2,
  GraduationCap,
  Store,
  Megaphone,
  Settings,
  ShieldCheck,
} from "lucide-react";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "WhatsApp Broadcast API — Send Bulk Messages to Thousands Instantly | Get Click Media",
  description:
    "WhatsApp Broadcast API lets you send approved template messages to unlimited opted-in customers at once — beyond the 256-contact limit of the free app. Segmented targeting, analytics, and template management from an official Meta BSP.",
  keywords:
    "WhatsApp Broadcast API, whatsapp bulk messaging, whatsapp broadcast message, whatsapp marketing campaigns India, whatsapp broadcast list",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-broadcast" },
  openGraph: {
    title: "WhatsApp Broadcast API — Send Bulk Messages to Thousands Instantly | Get Click Media",
    description:
      "Segmented audience targeting, approved templates, and delivery analytics for marketing, utility, and authentication campaigns at scale.",
    url: "https://getclickmedia.com/whatsapp-broadcast",
    type: "website",
  },
};

/* -- JSON-LD Schema -------------------------------------------------------- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "WhatsApp Broadcast API",
      provider: { "@type": "Organization", "@id": "https://getclickmedia.com/#org", name: "Get Click Media" },
      areaServed: "India",
      serviceType: "WhatsApp Bulk Messaging",
      url: "https://getclickmedia.com/whatsapp-broadcast",
      description:
        "Bulk WhatsApp messaging via WhatsApp Business API, supporting segmented audience targeting, approved message templates, and delivery analytics for marketing, utility, and authentication campaigns.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com/" },
        { "@type": "ListItem", position: 2, name: "WhatsApp Business API", item: "https://getclickmedia.com/whatsapp-business-api" },
        { "@type": "ListItem", position: 3, name: "WhatsApp Broadcast API", item: "https://getclickmedia.com/whatsapp-broadcast" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is WhatsApp Broadcast API?",
          acceptedAnswer: { "@type": "Answer", text: "A WhatsApp Business API feature that lets businesses send one approved template message to a large list of opted-in customers in a single campaign." },
        },
        {
          "@type": "Question",
          name: "How many people can I send a WhatsApp broadcast to?",
          acceptedAnswer: { "@type": "Answer", text: "Unlike the free Business App's 256-contact limit, Broadcast API has no practical recipient cap, depending on your messaging tier." },
        },
      ],
    },
  ],
};

const COMPARISON = [
  { aspect: "Max recipients per broadcast", app: "256 contacts", api: "Unlimited (tier-dependent)" },
  { aspect: "Recipient must have your number saved", app: "Yes", api: "No" },
  { aspect: "Message format", app: "Free text", api: "Meta-approved template only" },
  { aspect: "Automation / CRM integration", app: "No", api: "Yes" },
  { aspect: "Analytics", app: "Basic", api: "Delivery, read rate, click tracking" },
  { aspect: "Best suited for", app: "Very small businesses", api: "Businesses sending at scale" },
];

const FEATURES = [
  { icon: Users, title: "Segmented Audience Targeting", description: "Send to specific customer groups based on behavior or CRM data.", accent: "blue" },
  { icon: LayoutTemplate, title: "Template Message Library", description: "Pre-approved marketing, utility, and authentication templates.", accent: "orange", href: "/whatsapp-template-messages" },
  { icon: CalendarClock, title: "Scheduled Campaigns", description: "Plan and queue broadcasts in advance.", accent: "cyan" },
  { icon: BarChart3, title: "Delivery & Read-Rate Analytics", description: "Track sent, delivered, read, and replied metrics per campaign.", accent: "purple" },
  { icon: Sparkles, title: "Personalization Variables", description: "Insert customer name, order ID, or other dynamic fields.", accent: "pink" },
  { icon: UserX, title: "Opt-Out Handling", description: "Automatic suppression of unsubscribed contacts.", accent: "red" },
  { icon: FlaskConical, title: "A/B Template Testing", description: "Compare performance across message variants.", accent: "indigo" },
] as const;

const PRICING_CATEGORIES = [
  { icon: Megaphone, name: "Marketing", desc: "Promotional offers, campaigns, product announcements", tier: "Highest cost tier" },
  { icon: Settings, name: "Utility", desc: "Order updates, delivery notifications, account alerts", tier: "Mid cost tier" },
  { icon: ShieldCheck, name: "Authentication", desc: "OTPs and login verification codes", tier: "Lowest cost tier" },
];

const HOW_TO = [
  { n: "01", title: "Build or select a customer list", body: "Import contacts with valid opt-in consent." },
  { n: "02", title: "Create or choose an approved template", body: "Follow Meta-approved message template guidelines.", href: "/whatsapp-template-messages" },
  { n: "03", title: "Segment your audience", body: "Optional — by location, purchase history, or engagement." },
  { n: "04", title: "Schedule or send immediately", body: "Via Get Click Media's broadcast dashboard." },
  { n: "05", title: "Track performance", body: "Delivery rate, read rate, replies, and conversions in real time." },
];

const USE_CASES = [
  { icon: ShoppingCart, name: "E-commerce", body: "Flash sale announcements, cart recovery, restock alerts" },
  { icon: Landmark, name: "BFSI", body: "Payment due reminders, EMI notifications, policy renewal alerts" },
  { icon: HeartPulse, name: "Healthcare", body: "Appointment reminders, health camp announcements" },
  { icon: Building2, name: "Real Estate", body: "New project launches, site visit invitations" },
  { icon: GraduationCap, name: "Education", body: "Admission open alerts, fee due reminders" },
  { icon: Store, name: "Retail", body: "Seasonal offers, loyalty program updates" },
];

const FAQS = [
  { q: "What is WhatsApp Broadcast API?", a: "A WhatsApp Business API feature that lets businesses send one approved template message to a large list of opted-in customers in a single campaign." },
  { q: "How many people can I send a WhatsApp broadcast to?", a: "Unlike the free Business App's 256-contact limit, Broadcast API has no practical recipient cap — it depends on your messaging tier." },
  { q: "Do recipients need to save my business number to receive a broadcast?", a: "No — unlike the free app, Broadcast API doesn't require recipients to have your number saved." },
  { q: "Can I send any message as a broadcast?", a: "No — broadcasts must use a Meta-approved template. Free-form text broadcasts aren't permitted.", link: { text: "See template message guidelines", href: "/whatsapp-template-messages" } },
  { q: "How is WhatsApp broadcast messaging priced?", a: "Per conversation window opened, based on template category — marketing, utility, or authentication.", link: { text: "See full WhatsApp API pricing", href: "/blog/whatsapp-api-pricing-india" } },
  { q: "Can I track how many people read my broadcast?", a: "Yes — Get Click Media's dashboard provides delivery, read, and reply analytics per campaign." },
  { q: "Is WhatsApp broadcast messaging compliant with Indian regulations?", a: "Yes, when sent to properly opted-in customers using approved templates; Get Click Media ensures campaigns follow Meta's commerce and messaging policies." },
  { q: "Can I personalize broadcast messages for each customer?", a: "Yes — templates support dynamic variables like customer name, order ID, and other personalization fields." },
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
export default function WhatsAppBroadcastPage() {
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
          { label: "WhatsApp Broadcast API" },
        ]}
        eyebrow="No 256-Contact Limit"
        title="WhatsApp Broadcast API"
        highlight="Send Bulk Messages to Thousands Instantly"
        description={
          <>
            Send a single approved template message to thousands of
            customers simultaneously — with segmented targeting, delivery
            analytics, and no recipient-saved-your-number requirement.
            <strong className="text-gray-900"> Billed per conversation, by template category.</strong>
          </>
        }
        primaryCta={{ label: "Start a Broadcast Campaign" }}
        secondaryCta={{ label: "Book a Free Demo", href: "#how-to" }}
        tertiaryCta={{ label: "View Pricing", href: "#pricing" }}
        imageSrc="/images/whatsapp/whatsapp-broadcast-api.webp"
        imageAlt="WhatsApp broadcast campaign dashboard preview on a phone"
        trustLine="Official Meta BSP · Unlimited Recipients · Segmented Targeting · Noida, India"
        stats={[
          { value: "Unlimited", label: "Broadcast Recipients" },
          { value: "0", label: "Number-Save Requirement" },
          { value: "3", label: "Message Categories" },
          { value: "24×7", label: "Support" },
        ]}
      />

      {/* -- TRUST LOGOS ------------------------------------------------------ */}
      <ClientMarquee />

      {/* -- DIRECT ANSWER / AEO BLOCK --------------------------------------- */}
      <section className="relative overflow-hidden py-10 bg-white">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base text-gray-700 leading-[1.7]">
              WhatsApp Broadcast API lets businesses send a single template
              message to thousands of customers simultaneously through the{" "}
              <Link href="/whatsapp-business-api" className="text-[#2563eb] underline underline-offset-2">
                WhatsApp Business API
              </Link>{" "}
              — unlike the free WhatsApp Business App, which limits
              broadcasts to 256 contacts who must have your number saved.
              Broadcast messages require Meta-approved templates and are
              billed per conversation based on category (marketing, utility,
              or authentication). Get Click Media, an official Meta Business
              Solution Provider in Noida, provides WhatsApp Broadcast API with
              segmented audience targeting, delivery and read-rate analytics,
              and template management — helping Indian businesses run
              compliant, high-reach WhatsApp campaigns at scale.
            </p>
          </div>
        </div>
      </section>

      {/* -- WHAT IS BROADCAST API — deeper "what is this" ------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="what-is-broadcast">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-10 space-y-4">
            <span className={EYEBROW_LIGHT}>What Is WhatsApp Broadcast API?</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Bulk messaging, without the free app&apos;s limits
            </h2>
          </div>
          <p className="text-gray-500 text-base leading-[1.7] mb-6">
            WhatsApp Broadcast API is the bulk-messaging capability of
            WhatsApp Business API. It allows a business to send one approved
            template message to a large list of opted-in customers in a
            single campaign — order updates, promotional offers, payment
            reminders, or event notifications — without the recipient limit
            or opt-in restrictions of the free Business App.
          </p>
          <ul className="space-y-3">
            {[
              "Sent to customers who have opted in (via DLT-style consent or existing relationship)",
              "Must use a Meta-approved message template — free-form text broadcasts aren't allowed",
              "Billed per 24-hour conversation window opened, based on template category",
              "No practical limit on recipient list size (subject to your messaging tier and quality rating)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-gray-700">
                <CheckCheck className="w-4 h-4 text-[#2563eb] shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -- COMPARISON -------------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-gray-50")} id="comparison">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Broadcast vs Business App</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              WhatsApp Broadcast API vs Business App broadcast
            </h2>
          </div>
          <ResponsiveTable
            caption="WhatsApp Broadcast API vs Business App broadcast"
            highlightColumnKey="api"
            columns={[
              { key: "aspect", label: "Aspect" },
              { key: "app", label: "WhatsApp Business App", align: "center" },
              { key: "api", label: "WhatsApp Broadcast API", align: "center" },
            ]}
            rows={COMPARISON}
          />
        </div>
      </section>

      {/* -- FEATURES — "What do I get?" ---------------------------------------- */}
      <PremiumFeatureGrid
        id="features"
        badge="Broadcast API Features"
        heading={["Everything you need to run", "broadcast campaigns"]}
        description="Segmented targeting, approved templates, and full delivery analytics on every send."
        features={FEATURES.map((f) => ({
          icon: <f.icon className="h-6 w-6" aria-hidden="true" />,
          title: f.title,
          description: f.description,
          accent: f.accent,
        }))}
      />

      {/* -- PRICING LOGIC — "How much?" ---------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="pricing">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Pricing Logic</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Broadcast message categories &amp; pricing
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-[1.7]">
              Meta bills broadcast messages by conversation category, opened
              per 24-hour window.
            </p>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {PRICING_CATEGORIES.map((c) => (
              <BentoCard
                key={c.name}
                icon={c.icon}
                name={c.name}
                description={c.desc}
                className="lg:min-h-[200px]"
              />
            ))}
          </BentoGrid>
          <p className="text-center text-base text-gray-400 mt-8">
            See the{" "}
            <Link href="/blog/whatsapp-api-pricing-india" className="text-[#2563eb] font-semibold underline underline-offset-2">
              full WhatsApp Business API pricing breakdown
            </Link>
            .
          </p>
        </div>
      </section>

      {/* -- HOW TO SEND A BROADCAST — "How do I start?" ------------------------ */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-gray-50")} id="how-to">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>How to Send a Broadcast</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              5 steps to launch your WhatsApp broadcast campaign
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HOW_TO.map((s) => {
              const Card = (
                <div className="relative h-full rounded-2xl border-2 border-blue-100 bg-white p-7 space-y-3">
                  <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center" style={SYNE_FONT}>
                    {s.n}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 pt-2">{s.title}</h3>
                  <p className="text-base text-gray-500 leading-[1.7]">{s.body}</p>
                </div>
              );
              return s.href ? (
                <Link key={s.n} href={s.href}>
                  {Card}
                </Link>
              ) : (
                <div key={s.n}>{Card}</div>
              );
            })}
          </div>

          <div className="mt-16">
            <GlowCtaBanner
              title="We protect your number's quality rating"
              description="Get Click Media manages template approval, audience segmentation, delivery optimization, and quality rating monitoring — so your broadcasts reach customers reliably without risking your number's messaging tier or quality score."
              ctaLabel="Start a Broadcast Campaign"
            />
          </div>
        </div>
      </section>

      {/* -- USE CASES — "Why should I care?" (relevance) ----------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="use-cases">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>Use Cases</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              WhatsApp Broadcast across every industry
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <BentoCard key={u.name} icon={u.icon} name={u.name} description={u.body} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- WHY GET CLICK MEDIA — "Can I trust this?" -------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-[#0f172a]")} id="why-gcm">
        <SectionPattern tone="green" opacity={0.08} />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="flex flex-col lg:flex-row items-start gap-14">
            <div className="flex-1 text-center lg:text-left space-y-5">
              <span className={EYEBROW_DARK}>Why Choose Get Click Media</span>
              <h2 className={H2_DARK} style={SYNE_FONT}>
                We protect your number&apos;s quality rating
              </h2>
              <p className="text-white/60 text-base leading-[1.7]">
                Get Click Media is an official Meta Business Solution
                Provider based in Noida, running WhatsApp Broadcast campaigns
                for 10,000+ Indian businesses. We manage template approval,
                audience segmentation, delivery optimization, and quality
                rating monitoring — so your broadcasts reach customers
                reliably without risking your number&apos;s messaging tier or
                quality score.
              </p>
            </div>
            <div className="w-full lg:w-[44%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                <Image
                  src="/images/whatsapp/meta-business-solution-provider.webp"
                  alt="WhatsApp Broadcast campaign message on a phone"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
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
              { label: "WhatsApp Message Templates", href: "/whatsapp-template-messages" },
              { label: "WhatsApp API Pricing India", href: "/blog/whatsapp-api-pricing-india" },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              { label: "WhatsApp Green Tick Verification", href: "/blog/whatsapp-green-tick-verification" },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
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
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Frequently Asked Questions</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Questions about WhatsApp Broadcast API
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl aspect-4/5">
                <Image
                  src="/images/whatsapp/ahatsapp-broadcast-api-service.webp"
                  alt="Ask a question about WhatsApp Broadcast API"
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
      <section className="py-20 bg-gray-50">
        <div className={CONTAINER}>
          <GlowCtaBanner
            title="Ready to reach thousands of customers at once?"
            description="Get Click Media sets up your broadcast dashboard, templates, and audience segments — start sending compliant, high-reach campaigns today."
            ctaLabel="Start a Broadcast Campaign"
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
