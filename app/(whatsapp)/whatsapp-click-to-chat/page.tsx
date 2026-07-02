import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  MousePointerClick,
  MonitorSmartphone,
  BarChart3,
  Home,
  MessageCircleQuestion,
  ShoppingBag,
  Tag,
  Instagram,
  MapPin,
  Mail,
  CreditCard,
  PartyPopper,
  Megaphone,
} from "lucide-react";
import LinkGenerator from "./LinkGenerator";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "WhatsApp Click to Chat — Generate Your wa.me Link | Get Click Media",
  description:
    "Free WhatsApp Click to Chat (wa.me) link generator with pre-filled messages and QR code. Learn URL formats, where to place your link for maximum conversions, and how to connect it to WhatsApp Business API for automation.",
  keywords:
    "Click to WhatsApp, WhatsApp Link, click to chat whatsapp, wa.me link, whatsapp link generator india, whatsapp chat link, whatsapp direct link, click to whatsapp button website, whatsapp link generator free",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-click-to-chat" },
  openGraph: {
    title:
      "WhatsApp Click to Chat — Generate Your wa.me Link | Get Click Media",
    description:
      "Generate a free wa.me Click to Chat link with a pre-filled message and QR code, then connect it to WhatsApp Business API with chatbot automation.",
    url: "https://getclickmedia.com/whatsapp-click-to-chat",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to create a WhatsApp Click to Chat link",
      totalTime: "PT5M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Get your phone number",
          text: "Use your WhatsApp Business number with country code. Example: +91 98765 43210.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Format the URL",
          text: "https://wa.me/[country code][number] — e.g. https://wa.me/919876543210. No spaces, dashes, or + sign.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Add pre-filled message (optional)",
          text: "Append ?text=[URL-encoded message] — e.g. ?text=I%20want%20to%20enquire",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Test the link",
          text: "Click the link on your phone to verify it opens WhatsApp correctly.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Place on your website",
          text: "Add as button, floating widget, or inline text link on website, bio, email signature.",
        },
      ],
    },
    {
      "@type": "Service",
      name: "WhatsApp Click to Chat Link Generator",
      provider: { "@id": "https://getclickmedia.com/#org" },
      url: "https://getclickmedia.com/whatsapp-click-to-chat",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "WhatsApp Click to Chat",
          item: "https://getclickmedia.com/whatsapp-click-to-chat",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a WhatsApp Click to Chat link?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A wa.me URL that opens WhatsApp with a specific number pre-addressed — without the customer saving the number. Format: https://wa.me/[countrycode][number]",
          },
        },
        {
          "@type": "Question",
          name: "How do I create a WhatsApp Click to Chat link?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Format: https://wa.me/919876543210 for Indian number +91 98765 43210. Add ?text= for pre-filled message. No spaces or + signs.",
          },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp Click to Chat free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — creating wa.me links is free. API conversations from the link are charged at standard WhatsApp conversation rates.",
          },
        },
        {
          "@type": "Question",
          name: "Does Click to Chat work on desktop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — opens WhatsApp Web or desktop app. Use QR code alongside link button for best cross-device experience.",
          },
        },
      ],
    },
  ],
};

const PLACEMENTS = [
  {
    icon: Home,
    place: "Website Homepage — Floating Button",
    lift: "+35–50% enquiries vs contact form alone",
  },
  {
    icon: MessageCircleQuestion,
    place: "Contact Us Page",
    lift: "Contact rate +60% vs form-only pages",
  },
  {
    icon: ShoppingBag,
    place: "Product Pages — E-commerce",
    lift: "Product page conversion +22%",
  },
  { icon: Tag, place: "Pricing Page", lift: "Pricing page lead rate +40%" },
  {
    icon: Instagram,
    place: "Instagram & Facebook Bio",
    lift: "15–25% of bio clicks go to WhatsApp",
  },
  {
    icon: MapPin,
    place: "Google Business Profile",
    lift: "GBP message CTR +3x vs phone-only CTA",
  },
  {
    icon: Mail,
    place: "Email Signature",
    lift: "10–15% of recipients use WhatsApp link",
  },
  {
    icon: CreditCard,
    place: "Business Card & Print Materials",
    lift: "QR scans convert at 40–60% at events",
  },
  {
    icon: PartyPopper,
    place: "Thank You / Confirmation Pages",
    lift: "WhatsApp opt-in rate 45–65%",
  },
  {
    icon: Megaphone,
    place: "Digital Ads — Meta & Google",
    lift: "Lead cost 40–60% lower vs form CTA",
  },
];

const USE_CASES = [
  {
    scenario: "Real Estate — Property Enquiry",
    message:
      "Hi, I am interested in the 3 BHK property at Sector 150 Noida. Budget: ₹80L.",
    result: "Lead response <60s. Chatbot qualifies budget & timeline.",
  },
  {
    scenario: "EdTech — Admission Enquiry",
    message:
      "Hi, I want to know about the JEE 2027 batch — fee, schedule, admission.",
    result: "Chatbot collects student details, routes to counsellor.",
  },
  {
    scenario: "Healthcare — Appointment Request",
    message:
      "I want to book an appointment with a cardiologist. Preferred date: this week.",
    result: "Chatbot shows slots, confirms, sends calendar invite.",
  },
  {
    scenario: "E-commerce — Product Enquiry",
    message:
      "Hi, I want to know more about the Galaxy S24 Ultra. Is it available?",
    result: "Chatbot answers availability, delivery, EMI options instantly.",
  },
  {
    scenario: "Financial Services — Loan Enquiry",
    message:
      "Hi, I want to check my eligibility for a Personal Loan of ₹5 lakhs.",
    result: "Chatbot pre-qualifies in 2 minutes, connects to loan officer.",
  },
  {
    scenario: "Travel — Package Enquiry",
    message:
      "Hi, I am interested in the Bali 7-night package for 2 adults + 1 child.",
    result: "Chatbot confirms availability, sends itinerary PDF.",
  },
  {
    scenario: "B2B SaaS — Demo Request",
    message: "Hi, I want to request a demo of your WhatsApp API platform.",
    result: "Sales team receives a qualified demo request instantly.",
  },
  {
    scenario: "Restaurant — Table Booking",
    message: "Hi, I want to reserve a table for 4 on Saturday 26 July at 8 PM.",
    result: "Hostess or chatbot confirms availability, books table.",
  },
];

const WITH_WITHOUT = [
  {
    scenario: "Customer clicks link at 11 PM",
    without: "Message sits unread until morning.",
    with: "Chatbot responds instantly and qualifies the lead overnight.",
  },
  {
    scenario: "100 customers click simultaneously",
    without: "Team overwhelmed, response time degrades.",
    with: "All 100 conversations handled at once by the chatbot.",
  },
  {
    scenario: "Customer asks about pricing",
    without: "Someone manually replies whenever they see it.",
    with: "Chatbot gives live pricing and creates a CRM lead automatically.",
  },
  {
    scenario: "Customer drops off mid-conversation",
    without: "Conversation lost — no re-engagement.",
    with: "CRM records the drop-off and triggers re-engagement in 24 hrs.",
  },
];

const VS_ADS = [
  {
    aspect: "What it is",
    chat: "A URL you create and place anywhere",
    ads: "A Meta ad format with WhatsApp as the CTA",
  },
  {
    aspect: "Cost",
    chat: "Free — no ad spend required",
    ads: "Paid — you pay for impressions/clicks",
  },
  {
    aspect: "Lead quality",
    chat: "Warm — already engaged with your brand",
    ads: "Variable — depends on targeting",
  },
  {
    aspect: "Free 72-hour conversation",
    chat: "No — normal charges apply",
    ads: "Yes — free for 72 hours",
  },
  {
    aspect: "Scale",
    chat: "Limited to your organic traffic",
    ads: "Unlimited — paid reach",
  },
];

const FAQS = [
  {
    q: "What is a WhatsApp Click to Chat link?",
    a: "A WhatsApp Click to Chat link (wa.me link) is a URL that opens a WhatsApp conversation with a specific phone number when clicked — without the customer needing to save the number first. On desktop, it prompts the user to open WhatsApp Web or the desktop app.",
  },
  {
    q: "How do I create a WhatsApp Click to Chat link for my business?",
    a: "The basic format is https://wa.me/[country code][phone number] — e.g. https://wa.me/919876543210. To add a pre-filled message, append ?text= followed by the URL-encoded message. Use the generator above to build yours automatically.",
  },
  {
    q: "Is WhatsApp Click to Chat free?",
    a: "Yes — creating and sharing a wa.me link is completely free. For WhatsApp Business API accounts, conversations that begin from the link are charged at standard conversation rates (service conversations are free for the first 1,000 per month).",
    link: {
      text: "See WhatsApp API pricing",
      href: "/blog/whatsapp-api-pricing-india",
    },
  },
  {
    q: "Can I use Click to Chat links without WhatsApp Business API?",
    a: "Yes — Click to Chat works with any WhatsApp number. Without the API you lose automation: no chatbot, no CRM integration, no after-hours responses, no analytics. Past 50 enquiries a day, the API becomes essential.",
    link: { text: "See WhatsApp Chatbot", href: "/whatsapp-chatbot" },
  },
  {
    q: "How do I track conversions from my Click to Chat link?",
    a: "For API accounts, configure your chatbot to capture the entry point using different pre-filled messages per placement — 'Website Homepage Enquiry' vs 'Instagram Bio Enquiry'. The chatbot logs the entry message and your CRM records the source.",
  },
  {
    q: "What should I write in the pre-filled message?",
    a: "Specific enough to give context, short enough that customers send it without editing. Good examples: 'Website Enquiry', 'Enquiry from Instagram'. Keep it under 10 words.",
  },
  {
    q: "Can I use a Click to Chat link for multiple departments?",
    a: "Yes — create separate links with different pre-filled messages per department. The same number receives all of them, and your chatbot routes each based on the pre-filled keyword. This requires WhatsApp Business API with chatbot routing.",
  },
  {
    q: "Does Click to Chat work on desktop/PC?",
    a: "Yes. Clicking a wa.me link on a desktop browser opens WhatsApp Web or the desktop app if installed, with the pre-filled message ready to send. For websites, pair a QR code alongside the link button.",
  },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppClickToChatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2"
      >
        <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
          <li>
            <Link href="/" className="hover:text-[#2563eb] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link
              href="/whatsapp-business-api"
              className="hover:text-[#2563eb] transition-colors"
            >
              WhatsApp Business API
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-[#2563eb] font-medium">Click to Chat</li>
        </ol>
      </nav>

      {/* ── HERO + GENERATOR ─────────────────────────────────────────────── */}
      <section
        id="link-generator"
        className="relative overflow-hidden bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl"
      >
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <MousePointerClick className="w-3.5 h-3.5 text-[#38bdf8]" />
                Free Link Generator
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
                WhatsApp Click to Chat
                <br />
                <span className="text-[#38bdf8]">Generate Your wa.me Link</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                A wa.me link opens a WhatsApp conversation with your business —
                no number saving, no searching, no friction. One tap and the
                customer is talking to you.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  Get WhatsApp API <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[46%] shrink-0">
              <LinkGenerator />
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER ────────────────────────────────────────────────── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              WhatsApp Click to Chat (also called a wa.me link or WhatsApp
              direct link) is a URL that opens a WhatsApp conversation with a
              specific phone number when clicked — without the sender needing to
              save the number first. The link format is https://wa.me/[phone
              number] and can include a pre-filled message. Click to Chat links
              can be placed on websites, in emails, in social media bios, on
              business cards, and in QR codes.
            </p>
          </div>
        </div>
      </section>

      {/* ── URL FORMAT ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="url-format">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              URL Format
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              How to create a WhatsApp Click to Chat link
            </h2>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl bg-[#0f172a] p-6">
              <p className="text-xs text-white/40 mb-2">Basic format</p>
              <pre className="text-xs sm:text-sm text-green-300 overflow-x-auto">{`https://wa.me/[country_code][phone_number]
// Example — Indian number +91 98765 43210:
https://wa.me/919876543210
// No spaces, dashes, or plus sign in the URL`}</pre>
            </div>
            <div className="rounded-2xl bg-[#0f172a] p-6">
              <p className="text-xs text-white/40 mb-2">
                With pre-filled message
              </p>
              <pre className="text-xs sm:text-sm text-green-300 overflow-x-auto">{`https://wa.me/919876543210?text=I%20am%20interested%20in%20WhatsApp%20API
// URL encoding: Space = %20 | Comma = %2C | Apostrophe = %27`}</pre>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-8 leading-relaxed">
            <strong className="text-gray-800">WhatsApp QR Code:</strong> useful
            for business cards, packaging, and desktop placement. Generate the
            official version in WhatsApp Business App → Settings → Business
            Tools → Short Link, or via Meta Business Manager for API accounts —
            or just use the generator at the top of this page.
          </p>
        </div>
      </section>

      {/* ── CLICK TO CHAT VS SAVE NUMBER ─────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="vs-save-number">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Why It Matters
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Click to Chat vs asking customers to &ldquo;save our number&rdquo;
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Method</th>
                  <th className="text-left px-4 py-4 font-semibold">
                    Customer Effort
                  </th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">
                    Drop-off Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-5 py-3.5 text-gray-700 font-medium">
                    Ask customer to save number
                  </td>
                  <td className="px-4 py-3.5 text-gray-500">
                    High — save, find, open chat
                  </td>
                  <td className="px-4 py-3.5 text-red-500 font-semibold">
                    Very high — 60–80% never do it
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-5 py-3.5 text-gray-700 font-medium">
                    wa.me Click to Chat link
                  </td>
                  <td className="px-4 py-3.5 text-gray-500">
                    Zero — one click opens chat
                  </td>
                  <td className="px-4 py-3.5 text-green-600 font-semibold">
                    Very low — under 5%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PLACEMENTS ───────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white" id="placements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              10 High-Impact Placements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Where to place your Click to Chat link
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLACEMENTS.map((p) => (
              <div
                key={p.place}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-2"
              >
                <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-[#2563eb]" />
                </span>
                <h3 className="text-sm font-bold text-gray-900">{p.place}</h3>
                <p className="text-xs text-green-600 font-semibold">{p.lift}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Pre-Filled Message Examples
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              8 use cases across industries
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {USE_CASES.map((u) => (
              <div
                key={u.scenario}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-2"
              >
                <h3 className="text-sm font-bold text-white">{u.scenario}</h3>
                <p className="text-xs text-white/50 italic">
                  &ldquo;{u.message}&rdquo;
                </p>
                <p className="text-xs text-green-400 font-semibold">
                  {u.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WITH VS WITHOUT API ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white" id="with-api">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              The Powerful Combination
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Click to Chat +{" "}
              <Link
                href="/whatsapp-business-api"
                className="hover:underline underline-offset-4"
              >
                WhatsApp Business API
              </Link>
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">
                    Scenario
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    Without API
                  </th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">
                    With API +{" "}
                    <Link
                      href="/whatsapp-chatbot"
                      className="hover:underline underline-offset-4"
                    >
                      Chatbot
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {WITH_WITHOUT.map((row, i) => (
                  <tr
                    key={row.scenario}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 text-gray-900 font-bold">
                      {row.scenario}
                    </td>
                    <td className="px-4 py-3.5 text-gray-500">{row.without}</td>
                    <td className="px-4 py-3.5 text-gray-800 font-medium">
                      {row.with}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
            The complete stack: Click to Chat link → customer clicks → chatbot
            responds instantly → lead captured in{" "}
            <Link
              href="/blog/whatsapp-crm-integration"
              className="text-[#2563eb] underline underline-offset-2"
            >
              CRM
            </Link>{" "}
            → automated follow-up begins → human agent handles when qualified.
          </p>
        </div>
      </section>

      {/* ── VS CLICK TO WHATSAPP ADS ─────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gray-50" id="vs-ads">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Click to Chat vs Ads
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Click to Chat vs{" "}
              <Link
                href="/whatsapp-click-to-whatsapp-ads"
                className="hover:underline underline-offset-4"
              >
                Click to WhatsApp Ads
              </Link>
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Aspect</th>
                  <th className="text-left px-4 py-4 font-semibold">
                    Click to Chat
                  </th>
                  <th className="text-left px-4 py-4 font-semibold text-[#38bdf8]">
                    Click to WhatsApp Ads
                  </th>
                </tr>
              </thead>
              <tbody>
                {VS_ADS.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 text-gray-700 font-medium">
                      {row.aspect}
                    </td>
                    <td className="px-4 py-3.5 text-gray-500">{row.chat}</td>
                    <td className="px-4 py-3.5 text-gray-800 font-medium">
                      {row.ads}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Recommended: run Click to Chat everywhere on your organic presence,
            and Click to WhatsApp ads to reach new audiences — both feed into
            one unified conversation inbox.
          </p>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 font-(family-name:--font-syne)">
            Related WhatsApp Business API resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              {
                label: "WhatsApp Business API",
                href: "/whatsapp-business-api",
              },
              {
                label: "Click to WhatsApp Ads",
                href: "/whatsapp-click-to-whatsapp-ads",
              },
              { label: "WhatsApp Chatbot", href: "/whatsapp-chatbot" },
              {
                label: "WhatsApp CRM Integration",
                href: "/blog/whatsapp-crm-integration",
              },
              {
                label: "WhatsApp Marketing Services",
                href: "/whatsapp-marketing-services",
              },
              {
                label: "WhatsApp API Pricing India",
                href: "/blog/whatsapp-api-pricing-india",
              },
              {
                label: "WhatsApp API Integration",
                href: "/blog/whatsapp-api-integration",
              },
              { label: "WhatsApp Automation", href: "/whatsapp-automation" },
              {
                label: "WhatsApp API for E-commerce",
                href: "/whatsapp-api-ecommerce",
              },
              {
                label: "WhatsApp API for Real Estate",
                href: "/whatsapp-api-real-estate",
              },
              {
                label: "WhatsApp API for Healthcare",
                href: "/whatsapp-api-healthcare",
              },
              {
                label: "WhatsApp API for Education",
                href: "/whatsapp-api-education",
              },
              {
                label: "WhatsApp Green Tick Verification",
                href: "/blog/whatsapp-green-tick-verification",
              },
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

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Questions about WhatsApp Click to Chat
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-gray-100 shadow-sm open:shadow-md transition-shadow"
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
                Add Click to Chat to Your Website Today
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Free link generator · Pre-filled messages · Chatbot automation ·
                CRM integration.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Generate My WhatsApp Link <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Get WhatsApp API
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
