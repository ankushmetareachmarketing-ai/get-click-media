import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquareText,
  Bot,
  ListChecks,
  Workflow,
  ShoppingBag,
  Headset,
  Radio,
  MessageSquare,
  Hash,
  Layers,
  GitBranch,
  UserCheck,
} from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";

export const metadata: Metadata = {
  title: "Conversational Messaging Platform India | Get Click Media",
  description:
    "Two-way conversational messaging across RCS, WhatsApp, and SMS- chatbots, suggested replies, and automated customer conversations on one platform.",
  keywords:
    "conversational messaging platform, conversational messaging india, two way messaging platform, conversational commerce platform india, chatbot messaging platform, rcs chatbot, automated messaging platform, conversational ai messaging india",
  alternates: { canonical: "https://getclickmedia.com/conversational-messaging-platform" },
  openGraph: {
    title: "Conversational Messaging Platform India",
    description:
      "Two-way conversational messaging across RCS, WhatsApp, and SMS- chatbots, suggested replies, and automated customer conversations on one platform.",
    url: "https://getclickmedia.com/conversational-messaging-platform",
    type: "website",
  },
};

const LAST_UPDATED = "July 2026";

const CONVERSATIONAL_FEATURES = [
  { icon: ListChecks, title: "Suggested replies", desc: "Tappable quick-reply chips on RCS and WhatsApp let customers respond with one tap instead of typing- higher response rates, less typing friction." },
  { icon: Bot, title: "Chatbot & flow automation", desc: "Rule-based or NLP-driven flows handle common questions- order status, appointment booking, FAQs- before handing off to a human when needed." },
  { icon: GitBranch, title: "Branching conversation flows", desc: "Build multi-step flows that branch based on customer response, across channels, without separate logic per channel." },
  { icon: UserCheck, title: "Human handoff with context", desc: "When a flow can't resolve a query, it escalates to a live agent with the full conversation history intact- no repeating yourself." },
];

const CHANNEL_CAPABILITY = [
  { icon: Radio, title: "RCS", desc: "Suggested replies and action buttons built into rich cards, delivered natively in Google Messages with a verified sender badge.", href: "/rcs-messaging" },
  { icon: MessageSquare, title: "WhatsApp", desc: "Full chatbot flows, NLP intent recognition, and rich media- WhatsApp's own dedicated chatbot deep-dive covers this in depth.", href: "/whatsapp-chatbot" },
  { icon: Hash, title: "SMS", desc: "Keyword-based two-way SMS (reply STOP, reply YES) for the universal fallback channel, when richer interactivity isn't supported." },
];

const USE_CASES = [
  { icon: ShoppingBag, title: "Conversational commerce", desc: "Browse a product carousel, ask a follow-up question, and complete a purchase- all inside the same chat thread on RCS or WhatsApp." },
  { icon: Headset, title: "Automated support triage", desc: "A flow handles order-status and FAQ queries automatically, escalating only the queries that genuinely need a human." },
  { icon: Workflow, title: "Guided lead qualification", desc: "A branching flow asks qualifying questions before routing a lead to sales- replacing a static contact form with an actual conversation." },
  { icon: MessageSquareText, title: "Post-purchase engagement", desc: "A follow-up flow checks in after delivery, collects feedback, and offers support- without a person having to initiate each conversation." },
];

const FAQS = [
  {
    q: "What is conversational messaging?",
    a: "Conversational messaging is two-way, interactive communication- using chatbots, suggested replies, and automated flows- instead of one-way broadcast messages that only push information out.",
  },
  {
    q: "Does Get Click Media support chatbots on RCS and WhatsApp?",
    a: "Yes- both channels support suggested-reply and chatbot-driven conversational flows through Get Click Media. RCS supports suggested replies and action buttons built into rich cards; WhatsApp supports full chatbot flows with NLP intent recognition, covered in depth on our dedicated WhatsApp chatbot page.",
  },
  {
    q: "How is this different from the WhatsApp chatbot page?",
    a: "This page covers conversational capability at the platform level- suggested replies and flow logic across RCS, WhatsApp, and SMS. Our WhatsApp chatbot page is the channel-specific deep dive into WhatsApp's own chatbot features- visual flow builder, NLP intent recognition, multi-language support, and CRM integration. Start here for the cross-channel picture, then go to the WhatsApp chatbot page for WhatsApp-specific detail.",
  },
  {
    q: "Can the same conversational flow work across RCS and WhatsApp?",
    a: "The underlying flow logic- the branching questions and outcomes- can be reused across channels, but the interactive elements differ: RCS offers suggested replies and action buttons within rich cards, while WhatsApp supports a broader set of interactive components. Get Click Media's platform lets you design the flow once and adapt the interactive elements per channel.",
  },
  {
    q: "What happens when a chatbot flow can't answer a customer's question?",
    a: "The flow escalates to a live agent with the full conversation history preserved, so the customer doesn't have to repeat context that's already in the chat thread.",
  },
];

const RELATED_LINKS = [
  { label: "RCS Messaging", href: "/rcs-messaging" },
  { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "Business Messaging Platform", href: "/business-messaging-platform" },
  { label: "Customer Engagement Platform", href: "/customer-engagement-platform" },
  { label: "RCS for Ecommerce", href: "/rcs-for-ecommerce" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://getclickmedia.com/#org",
      name: "Get Click Media",
      url: "https://getclickmedia.com",
      logo: { "@type": "ImageObject", url: "https://getclickmedia.com/images/gcm-logo.png" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Conversational Messaging Platform", item: "https://getclickmedia.com/conversational-messaging-platform" },
      ],
    },
    {
      "@type": "Service",
      name: "Conversational Messaging Platform- Get Click Media",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "Two-Way Conversational Messaging (RCS, WhatsApp, SMS)",
      url: "https://getclickmedia.com/conversational-messaging-platform",
    },
    {
      "@type": "WebPage",
      "@id": "https://getclickmedia.com/conversational-messaging-platform",
      url: "https://getclickmedia.com/conversational-messaging-platform",
      name: "Conversational Messaging Platform India | Get Click Media",
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

export default function ConversationalMessagingPlatformPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <DarkHero
        theme="gradient"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Conversational Messaging Platform" },
        ]}
        eyebrow="Two-Way Messaging"
        title="Conversational Messaging Platform for Businesses"
        highlight="for Businesses"
        description={
          <>
            Two-way conversational messaging across{" "}
            <strong className="text-gray-900">RCS, WhatsApp, and SMS</strong>- suggested
            replies, chatbot flows, and automated customer conversations, from one platform.
          </>
        }
        primaryCta={{ label: "Book a Demo" }}
        secondaryCta={{ label: "WhatsApp Chatbot Deep-Dive", href: "/whatsapp-chatbot" }}
        imageSrc="/images/rcs/rcs-service-provider-india.png"
        imageAlt="Conversational messaging platform showing suggested replies and chatbot flow across RCS and WhatsApp"
        trustLine="Suggested replies on RCS · Full chatbot flows on WhatsApp · SMS fallback"
      />

      <div className="bg-white border-b border-gray-100">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 text-center text-xs text-gray-400">
          Written by the Get Click Media Pvt. Ltd. Team · Last updated: {LAST_UPDATED} · Reviewed by the Get Click Media platform team
        </p>
      </div>

      <ClientMarquee />

      {/* -- AEO BLOCK ------------------------------------------------------ */}
      <section className="relative py-10">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="max-w-[680px] mx-auto rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base leading-[1.7] text-gray-700">
              <strong className="text-gray-900">Conversational messaging</strong> is two-way,
              interactive communication- using chatbots, suggested replies, and automated flows
             - instead of one-way broadcast messages. Get Click Media supports conversational
              capability across RCS (suggested replies and action buttons in rich cards),
              WhatsApp (full chatbot flows with NLP), and keyword-based two-way SMS as the
              universal fallback.
            </p>
          </div>
        </div>
      </section>

      {/* -- WHAT IS CONVERSATIONAL MESSAGING --------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="what-is-it">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 space-y-6 text-gray-600 leading-[1.7]">
          <div className="text-center mb-6 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              What Is Conversational Messaging
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              From Broadcast to Actual Conversation
            </h2>
          </div>
          <p>
            A traditional bulk message is one-way: it goes out, and the customer either acts on
            it or doesn't. Conversational messaging adds a reply path- a suggested-reply chip,
            a typed response, or a tapped button- that turns the message into the start of an
            exchange, handled automatically by a flow or chatbot until it needs a human.
          </p>
          <p>
            The interactive elements differ by channel. RCS supports suggested replies and action
            buttons built directly into rich cards. WhatsApp supports a fuller chatbot
            experience, including NLP intent recognition and multi-language support- covered in
            depth on our{" "}
            <Link href="/whatsapp-chatbot" className="text-[#2563eb] underline underline-offset-2">
              dedicated WhatsApp chatbot page
            </Link>
            . SMS, as the universal fallback channel, supports simpler keyword-based two-way
            interactions (reply STOP, reply YES) for when richer channels aren't available.
          </p>
        </div>
      </section>

      {/* -- TWO-WAY MESSAGING FEATURES ----------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="features">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Two-Way Messaging: Chatbots & Suggested Replies
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              What a Conversational Flow Can Do
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-2">
            {CONVERSATIONAL_FEATURES.map((f) => (
              <BentoCard key={f.title} icon={f.icon} name={f.title} description={f.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- RCS AND WHATSAPP FOR CONVERSATIONAL COMMERCE ------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="channel-capability">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              RCS and WhatsApp for Conversational Commerce
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              What Each Channel Supports
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {CHANNEL_CAPABILITY.map((c) =>
              c.href ? (
                <BentoCard key={c.title} icon={c.icon} name={c.title} description={c.desc} href={c.href} cta="Learn more" />
              ) : (
                <BentoCard key={c.title} icon={c.icon} name={c.title} description={c.desc} />
              )
            )}
          </BentoGrid>
        </div>
      </section>

      {/* -- USE CASES ---------------------------------------------------- */}
      <section className="relative py-16 sm:py-20 lg:py-[100px] bg-gray-50" id="use-cases">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Setting Up Conversational Flows
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Where Businesses Use Conversational Flows
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-2">
            {USE_CASES.map((u) => (
              <BentoCard key={u.title} icon={u.icon} name={u.title} description={u.desc} />
            ))}
          </BentoGrid>
          <p className="text-sm text-gray-500 mt-10 text-center max-w-2xl mx-auto">
            <Layers className="inline w-4 h-4 mr-1.5 -mt-0.5 text-[#2563eb]" aria-hidden="true" />
            Flows are built once in Get Click Media's platform and adapted per channel- for a
            no-code visual flow builder and full NLP setup specifically for WhatsApp, see the{" "}
            <Link href="/whatsapp-chatbot" className="text-[#2563eb] underline underline-offset-2">
              WhatsApp chatbot page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className="relative py-16 sm:py-20 lg:py-[100px]" id="faq">
        <SectionPattern tone="gold" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-(family-name:--font-syne)">
              Conversational Messaging Platform FAQs
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/5">
                <Image
                  src="/images/rcs/rcs-service-provider-india.png"
                  alt="Ask a question about the Conversational Messaging Platform"
                  fill
                  className="object-cover"
                  sizes="36vw"
                />
              </div>
            </div>
            <AccordionList
              className="flex-1 w-full"
              items={FAQS.map((f) => ({ question: f.q, answer: <p className="text-base text-gray-500 leading-[1.7]">{f.a}</p> }))}
            />
          </div>
        </div>
      </section>

      {/* -- RELATED LINKS ---------------------------------------------------- */}
      <section className="relative py-16">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related resources
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
            title="Ready to turn broadcasts into conversations?"
            description="Get Click Media supports conversational flows across RCS, WhatsApp, and SMS from one platform."
            ctaLabel="Book a Demo"
          />
        </div>
      </section>
    </>
  );
}
