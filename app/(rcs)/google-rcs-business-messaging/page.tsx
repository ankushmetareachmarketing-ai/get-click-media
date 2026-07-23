import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  Smartphone,
  LayoutTemplate,
  Layers,
  Reply,
  CheckCheck,
} from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";

export const metadata: Metadata = {
  title: "Google RCS Business Messaging Explained | Get Click Media",
  description:
    "What is Google RCS Business Messaging (RBM)? How it works, verified sender status, Android coverage in India, and how businesses can get started.",
  keywords:
    "Google RCS Business Messaging, Google RBM, RBM messaging, Google Business Messages, Google RCS agent, Google RCS verification, Business Communications Console, Google RCS coverage India",
  alternates: { canonical: "https://getclickmedia.com/google-rcs-business-messaging" },
  openGraph: {
    title: "Google RCS Business Messaging Explained",
    description:
      "A clear guide to Google's RCS Business Messaging (RBM) product — how it works, verification, and how Indian businesses can start using it.",
    url: "https://getclickmedia.com/google-rcs-business-messaging",
    type: "website",
  },
};

const LAST_UPDATED = "July 2026";

const RBM_FEATURES = [
  { icon: LayoutTemplate, title: "Rich cards", desc: "A branded image, headline, description, and up to two action buttons in a single message." },
  { icon: Layers, title: "Carousels", desc: "Multiple rich cards a user can swipe through horizontally — ideal for showcasing several products or offers." },
  { icon: Reply, title: "Suggested replies & actions", desc: "Tappable quick-reply chips and action buttons (call, open URL, view location) that cut the funnel from message to action." },
  { icon: BadgeCheck, title: "Verified sender badge", desc: "Your business name and logo appear on every message once brand verification is complete, in place of a generic phone number." },
  { icon: CheckCheck, title: "Read receipts", desc: "See delivery and read status per message, the way you would in a native chat app — not possible with plain SMS." },
  { icon: Smartphone, title: "Native Google Messages delivery", desc: "Messages arrive in the customer's default Android messaging app — no separate app install required." },
];

const RBM_VS_APPLE_ROWS = [
  { aspect: "Platform", rbm: "Android / Google Messages", apple: "iOS / Apple Messages" },
  { aspect: "Verification", rbm: "Business Communications Console", apple: "Apple Business Register" },
  { aspect: "Rich media", rbm: "Yes", apple: "Yes" },
];

const FAQS = [
  {
    q: "What is Google RCS Business Messaging?",
    a: "It's Google's product implementation of the RCS Business Messaging standard, letting verified businesses send rich, interactive messages through the Google Messages app.",
  },
  {
    q: "What does RBM stand for?",
    a: "RBM stands for Rich Business Messaging — Google's specific branding for its RCS Business Messaging product.",
  },
  {
    q: "How is Google RBM different from generic RCS?",
    a: "RCS is the underlying open, GSMA-standardised protocol; Google RBM is Google's own product built on that standard and delivered specifically through Google Messages.",
  },
  {
    q: "How do I register as a Google RBM agent?",
    a: "Registration happens through Google's Business Communications Console, and requires business verification documents and brand assets such as your logo and business name.",
  },
  {
    q: "Does Google RBM require a verified sender badge?",
    a: "Yes — verification is required before your messages can display your brand name and logo instead of a generic phone number.",
  },
  {
    q: "Is Google RBM available in India?",
    a: "Yes, with coverage on Android devices via Google Messages across major Indian carriers including Jio, Airtel, and Vi. Coverage continues to expand as more devices update to a supporting Google Messages version.",
  },
  {
    q: "How does Google RBM compare to Apple Messages for Business?",
    a: "Both offer rich, branded messaging, but they run on separate platforms — Android/Google Messages versus iOS/iMessage — with different registration processes (Business Communications Console vs. Apple Business Register).",
  },
  {
    q: "Can I use one RCS provider for both Google RBM and general RCS delivery?",
    a: "Yes — providers like Get Click Media handle Google RBM agent registration as part of standard RCS onboarding, so you don't need to manage the Google console relationship separately.",
  },
  {
    q: "What features does Google RBM support?",
    a: "Rich cards, carousels, suggested replies, suggested actions, and read receipts are all supported natively within Google Messages.",
  },
  {
    q: "Is there a cost to register as a Google RBM agent?",
    a: "Registration requirements and any associated costs are set by Google and can change — ask your onboarding contact for the current process when you sign up.",
  },
];

const RELATED_LINKS = [
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "RCS Service Provider India", href: "/rcs-service-provider-india" },
  { label: "RCS Pricing India", href: "/rcs-pricing-india" },
  { label: "RCS API", href: "/rcs-api" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
        { "@type": "ListItem", position: 3, name: "Google RCS Business Messaging", item: "https://getclickmedia.com/google-rcs-business-messaging" },
      ],
    },
    {
      "@type": "Service",
      name: "Google RCS Business Messaging Setup",
      provider: { "@type": "Organization", name: "Get Click Media", url: "https://getclickmedia.com" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "RCS Business Messaging",
      url: "https://getclickmedia.com/google-rcs-business-messaging",
    },
    {
      "@type": "WebPage",
      "@id": "https://getclickmedia.com/google-rcs-business-messaging",
      url: "https://getclickmedia.com/google-rcs-business-messaging",
      name: "Google RCS Business Messaging Explained | Get Click Media",
      primaryImageOfPage: { "@type": "ImageObject", url: "https://getclickmedia.com/images/rcs/rcs-service-provider-india.png" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function GoogleRcsBusinessMessagingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -- HERO ------------------------------------------------------------ */}
      <DarkHero
        theme="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "RCS Messaging", href: "/rcs-messaging" },
          { label: "Google RCS Business Messaging" },
        ]}
        eyebrow="Google's RCS Product, Explained"
        title="Google RCS Business Messaging"
        highlight="Explained"
        description={
          <>
            Google RCS Business Messaging — often shortened to{" "}
            <strong className="text-gray-900">Google RBM</strong> — is Google&apos;s own
            implementation of the RCS standard, delivered natively through Google Messages on
            Android.
          </>
        }
        primaryCta={{ label: "Get Google RBM-Ready", href: "/contact" }}
        secondaryCta={{ label: "See RCS Pricing", href: "/rcs-pricing-india" }}
        imageSrc="/images/rcs/rcs-service-provider-india.png"
        imageAlt="Google Messages app showing a verified business message with rich card"
        trustLine="Google brand verification handled as part of onboarding"
      />

      {/* -- EEAT: last-updated strip ---------------------------------------- */}
      <div className="bg-white border-b border-gray-100">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 text-center text-xs text-gray-400">
          Last updated: {LAST_UPDATED} · Reviewed by the Get Click Media RCS team
        </p>
      </div>

      <ClientMarquee />

      {/* -- WHAT IS GOOGLE RBM / AEO BLOCK ------------------------------------ */}
      <section className="relative py-10">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-[680px] mx-auto rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base leading-[1.7] text-gray-700">
              <strong className="text-gray-900">RBM</strong> stands for Rich Business
              Messaging — it&apos;s Google&apos;s specific product name for its implementation of
              the open RCS Business Messaging standard. Verified businesses use it to send rich
              cards, carousels, and suggested-action messages to Android users through the
              Google Messages app, with a verified sender badge in place of a generic number.
            </p>
          </div>
        </div>
      </section>

      {/* -- HOW GOOGLE RBM WORKS --------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="how-it-works">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 space-y-6 text-gray-600 leading-[1.7]">
          <div className="text-center mb-6 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              How Google RBM Works
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              From Verified Agent to Customer&apos;s Phone
            </h2>
          </div>
          <p>
            <strong className="text-gray-900">Google Messages app delivery.</strong> Once a
            business is registered and verified as an RBM agent, its messages are delivered
            natively inside Google Messages — the default messaging app on most Android phones
            in India — with no separate app download required by the customer.
          </p>
          <p>
            <strong className="text-gray-900">Verified sender status.</strong> Before a business
            can send branded messages, Google verifies its identity through the{" "}
            <a
              href="https://developers.google.com/business-communications"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563eb] underline underline-offset-2"
            >
              Business Communications Console
            </a>
            . Once approved, the business name and logo appear at the top of every message,
            replacing a generic phone number.
          </p>
        </div>
      </section>

      {/* -- GOOGLE RBM FEATURES ------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="features">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Google RBM Features
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              What You Can Send with Google RBM
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Agent setup happens once, inside Google&apos;s Business Communications Console —
              after that, every feature below is available to your verified sender identity.
            </p>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {RBM_FEATURES.map((f) => (
              <BentoCard key={f.title} icon={f.icon} name={f.title} description={f.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- COVERAGE IN INDIA ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="coverage">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 space-y-4 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
            Google RBM Coverage in India
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
            Reaching Android Users Across India
          </h2>
          <p className="text-gray-500 text-base leading-[1.7] max-w-2xl mx-auto">
            Google RBM messages reach Android devices running Google Messages, across major
            Indian carriers including Jio, Airtel, and Vi. For devices or networks where RCS
            isn&apos;t supported, Get Click Media automatically falls back to SMS so delivery
            is never lost.
          </p>
        </div>
      </section>

      {/* -- GOOGLE RBM VS APPLE MESSAGES ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="vs-apple">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Google RBM vs Apple Messages
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Google RBM vs. Apple Messages for Business
            </h2>
          </div>
          <ResponsiveTable
            caption="Google RBM vs Apple Messages for Business"
            columns={[
              { key: "aspect", label: "Aspect" },
              { key: "rbm", label: "Google RBM", align: "center" },
              { key: "apple", label: "Apple Messages for Business", align: "center" },
            ]}
            rows={RBM_VS_APPLE_ROWS}
            highlightColumnKey="rbm"
          />
        </div>
      </section>

      {/* -- HOW TO REGISTER ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="register">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              How to Register
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              How to Register as a Google RBM Agent
            </h2>
          </div>
          <ol className="space-y-4">
            {[
              { title: "Submit business verification documents", body: "Business registration documents, brand assets (logo, display name), and contact details are submitted through Google's Business Communications Console." },
              { title: "Google reviews your agent", body: "Google verifies your business identity before approving your agent for a verified sender badge." },
              { title: "Go live with a verified sender", body: "Once approved, your messages display your business name and logo instead of a generic phone number." },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-4 items-start rounded-2xl border border-gray-100 bg-white shadow-(--shadow-card) p-6">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#2563eb] text-white text-sm font-bold flex items-center justify-center font-(family-name:--font-syne)">
                  {i + 1}
                </span>
                <div>
                  <p className="text-base font-bold text-gray-900">{step.title}</p>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Get Click Media handles this entire process as part of standard RCS onboarding —{" "}
            <Link href="/rcs-service-provider-india" className="text-[#2563eb] underline underline-offset-2">
              see our RCS service provider page
            </Link>{" "}
            for details.
          </p>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="faq">
        <SectionPattern tone="gold" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Google RCS Business Messaging FAQs
            </h2>
          </div>
          <AccordionList items={FAQS.map((f) => ({ question: f.q, answer: <p className="text-base text-gray-500 leading-[1.7]">{f.a}</p> }))} />
        </div>
      </section>

      {/* -- RELATED LINKS ---------------------------------------------------- */}
      <section className="relative py-16">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related RCS resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {RELATED_LINKS.map((l) => (
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

      {/* -- BOTTOM CTA ------------------------------------------------------ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <GlowCtaBanner
            title="Ready to get Google RBM-ready?"
            description="Get Click Media handles Google brand verification, agent setup, and carrier connectivity end-to-end."
            ctaLabel="Book a Free RCS Demo"
          />
        </div>
      </section>
    </>
  );
}
