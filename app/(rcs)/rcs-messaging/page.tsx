import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCheck, Zap, Shield, BarChart3, MessageSquare, Layers, Globe, PhoneCall, MapPin, Star, ChevronDown } from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import { GradientCardCarousel } from "@/components/ui/gradient-card-carousel";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "RCS Messaging Service for Indian Businesses | Get Click Media",
  description:
    "India's most reliable RCS messaging service provider. Send rich, interactive messages with images, buttons, carousels & verified sender branding. Trusted by 10,000+ businesses. Get a free demo today.",
  keywords:
    "RCS Messaging India, RCS Service Provider India, RCS Business Messaging, Rich Communication Services India, RCS Messaging Service",
  alternates: { canonical: "https://getclickmedia.com/rcs-messaging" },
  openGraph: {
    title: "RCS Messaging Service for Indian Businesses | Get Click Media",
    description:
      "Send rich, interactive RCS messages with images, carousels & action buttons. Verified sender identity. 10,000+ Indian businesses trust Get Click Media.",
    url: "https://getclickmedia.com/rcs-messaging",
    type: "website",
  },
};

/* -- JSON-LD Schema -------------------------------------------------------- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
      ],
    },
    {
      "@type": "Service",
      name: "RCS Messaging Service",
      provider: { "@type": "Organization", name: "Get Click Media", url: "https://getclickmedia.com" },
      areaServed: { "@type": "Country", name: "India" },
      serviceType: "RCS Business Messaging",
      url: "https://getclickmedia.com/rcs-messaging",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question", name: "What is RCS messaging and how is it different from SMS?",
          acceptedAnswer: { "@type": "Answer", text: "RCS (Rich Communication Services) is the next-generation upgrade to standard SMS. While SMS is limited to 160 characters of plain text, RCS lets businesses send rich, interactive messages with images, carousels, action buttons, and verified sender branding — all inside the customer's native messaging app without any app download." }
        },
        {
          "@type": "Question", name: "Does RCS work on all phones in India?",
          acceptedAnswer: { "@type": "Answer", text: "RCS works on Android devices using Google Messages (most Android phones in India) and on iPhones running iOS 18+. For devices that don't support RCS, Get Click Media automatically sends an SMS fallback." }
        },
        {
          "@type": "Question", name: "Is RCS available on Jio, Airtel, and Vi networks?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Jio, Airtel, and Vi all support RCS. Get Click Media has direct carrier integrations with all three for reliable RCS delivery." }
        },
        {
          "@type": "Question", name: "Do I need TRAI DLT registration for RCS?",
          acceptedAnswer: { "@type": "Answer", text: "RCS Business Messaging doesn't require TRAI DLT registration, but does require Google brand verification — a one-time process that Get Click Media handles end-to-end." }
        },
      ],
    },
  ],
};

const FEATURES = [
  { icon: Shield, title: "Verified Sender Identity", desc: "Your brand name, logo, and a verified checkmark appear on every message — customers know it's really you, not a random sender ID they can't place." },
  { icon: Layers, title: "Rich Media Support", desc: "High-res product images, promo banners, GIFs, and video thumbnails delivered natively in the message thread. No 'click here to view image' links." },
  { icon: MessageSquare, title: "Interactive Carousels", desc: "Swipeable horizontal carousels let customers browse multiple products, offers, or locations in a single message. One tap, one action." },
  { icon: Zap, title: "Action Buttons", desc: "Up to three CTA buttons per message — Open URL, Call Now, View Location, or Quick Reply. Cut the funnel from message to conversion." },
  { icon: BarChart3, title: "Read Receipts & Analytics", desc: "Unlike SMS, you see whether each message was delivered, read, and clicked — not just sent. Real data to optimise your next send." },
  { icon: Globe, title: "Intelligent SMS Fallback", desc: "Our platform auto-detects whether each recipient's device supports RCS and falls back to SMS when it doesn't. 100% delivery, always." },
];

const INDUSTRIES = [
  {
    name: "Banking & Finance",
    img: "/images/rcs/rcs-for-finance.webp",
    uses: [
      "Credit card offers with an 'Apply Now' button",
      "EMI reminders with a direct 'Pay Now' CTA",
      "Loan and insurance product launches",
      "Fraud alerts with quick-reply confirmation",
      "Branch locator with embedded Maps button",
    ],
  },
  {
    name: "E-commerce & Retail",
    img: "/images/rcs/rcs-for-retail.webp",
    uses: [
      "Flash sale campaigns with product image carousels",
      "Abandoned cart recovery with product photos",
      "Order confirmation + live tracking button",
      "Post-purchase review requests with star-rating quick replies",
      "Personalised recommendations by browsing history",
    ],
  },
  {
    name: "Education",
    img: "/images/rcs/rcs-for-education.webp",
    uses: [
      "Admission follow-ups with 'Book a Campus Visit'",
      "Exam schedule reminders with downloadable timetable",
      "Fee payment nudges with 'Pay Now' button",
      "Result notifications with 'View Result' link card",
      "Course recommendation carousels",
    ],
  },
  {
    name: "Healthcare",
    img: "/images/rcs/rcs-for-healthcare.webp",
    uses: [
      "Appointment reminders with Confirm / Reschedule / Cancel replies",
      "Lab report ready with 'Download Report' button",
      "Medicine refill reminders + pharmacy locator",
      "Health insurance renewal with 'Renew Now' CTA",
    ],
  },
  {
    name: "Real Estate",
    img: "/images/rcs/rcs-for-real-estate.webp",
    uses: [
      "New project launch with hero property image",
      "Property carousel — multiple units, price and size",
      "'Book a Site Visit' with date-picker quick replies",
      "Payment plan reminders with EMI calculator link",
    ],
  },
];

const FAQS = [
  {
    q: "What is RCS messaging and how is it different from SMS?",
    a: "RCS (Rich Communication Services) is the next-gen upgrade to plain SMS. Instead of 160 characters of boring text, RCS lets you send images, carousels, and action buttons — all inside the customer's native messaging app. No app download needed, no link-click friction.",
  },
  {
    q: "Does RCS work on all phones in India?",
    a: "It works on Android devices running Google Messages (which covers the vast majority of Android phones in India across Jio, Airtel, and Vi). Apple added RCS support in iOS 18, so iPhone users on iOS 18 and above are now included too. For anyone on an older device, our platform automatically falls back to standard SMS.",
  },
  {
    q: "Is RCS available on Jio, Airtel, and Vi networks?",
    a: "Yes — all three major Indian operators support RCS. Get Click Media has direct carrier integrations with Jio, Airtel, and Vi, so you get the fastest possible delivery and accurate capability detection for every recipient.",
  },
  {
    q: "Do I need TRAI DLT registration to send RCS messages?",
    a: "RCS Business Messaging in India doesn't currently require TRAI DLT registration for content. What you do need is Google's RCS brand verification — a one-time process. Get Click Media handles the entire verification, including brand asset submission and business documentation. It typically takes 5–7 business days.",
  },
  {
    q: "How much does RCS messaging cost in India?",
    a: "Pricing is based on message volume and interaction type, and it's customised for each business. Contact our sales team for a quote — we usually respond within 24 hours. All plans include brand verification support, SMS fallback, real-time analytics, and API access.",
  },
  {
    q: "What is RCS brand verification and how long does it take?",
    a: "Google verifies your business identity before allowing branded RCS messages to be sent under your name and logo. Get Click Media manages the full process — brand assets, business registration, template submission. Typical timeline is 5–7 working days.",
  },
  {
    q: "Can I use RCS for OTP delivery?",
    a: "Yes. RCS can deliver OTPs with your verified brand name displayed, which helps customers immediately identify legitimate authentication messages. We configure automatic SMS fallback for every OTP campaign so no customer ever misses their code.",
  },
  {
    q: "How does RCS compare to WhatsApp Business API for Indian businesses?",
    a: "They're complementary, not competing. WhatsApp is strongest for two-way support conversations. RCS reaches all Android (and now iOS 18) users through their native messaging app with no opt-in required — making it stronger for broad outbound campaigns. Get Click Media supports both channels from a single platform.",
  },
];

const COMPARISON = [
  { feature: "Rich media (images, video)", rcs: true, sms: false, wa: true },
  { feature: "Verified sender + brand logo", rcs: true, sms: false, wa: true },
  { feature: "Interactive buttons", rcs: true, sms: false, wa: true },
  { feature: "No character limit", rcs: true, sms: false, wa: true },
  { feature: "Read receipts for business", rcs: true, sms: false, wa: true },
  { feature: "Requires app install", rcs: false, sms: false, wa: true },
  { feature: "Works without internet (fallback)", rcs: true, sms: true, wa: false },
  { feature: "DND restrictions (promo)", rcs: false, sms: true, wa: false },
  { feature: "Reach — India", rcs: "Android + iOS 18+", sms: "All mobiles", wa: "~500M users" },
  { feature: "Best for", rcs: "Rich campaigns", sms: "OTPs, alerts", wa: "Two-way support" },
];

/* -- Page ------------------------------------------------------------------ */
export default function RCSMessagingPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -----------------------------------------------------------------
          HERO
      ----------------------------------------------------------------- */}
      <DarkHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "RCS Messaging" },
        ]}
        eyebrow="Next-Generation Business Messaging"
        title="RCS Messaging Service"
        highlight="for Indian Businesses"
        description={
          <>
            India is moving beyond plain text SMS. With RCS Business Messaging, your brand can send
            rich, interactive messages — images, carousels, action buttons, and a verified sender
            identity — right inside your customer&apos;s default messaging app.
            <strong className="text-white"> No app downloads. No opt-in friction.</strong>
          </>
        }
        primaryCta={{ label: "Request a Free Demo", href: "/contact" }}
        secondaryCta={{ label: "See RCS Pricing", href: "#pricing" }}
        imageSrc="/images/rcs/rcs-service-provider-india.png"
        imageAlt="RCS Business Message on Android phone showing rich cards, carousel, and action buttons"
        trustLine="Trusted by 10,000+ businesses across India"
      />

      {/* -- STATS BAR ------------------------------------------------------ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "70%+", label: "Open Rate", sub: "vs ~20% for plain promotional SMS" },
            { value: "3–5×", label: "Higher Click-Through", sub: "compared to SMS campaigns with the same offer" },
            { value: "5–7 days", label: "Go-Live Timeline", sub: "from sign-up to your first live RCS campaign" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-base font-bold text-gray-900">{s.label}</p>
              <p className="text-sm text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -- WHAT IS RCS ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="what-is-rcs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/rcs/what-is-rcs.png"
                alt="RCS vs SMS visual comparison"
                width={700}
                height={525}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                What Is RCS Messaging?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                Think of it as SMS that finally grew up
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                RCS — Rich Communication Services — is what happens when the telecom industry decides
                plain SMS isn't good enough anymore. Instead of 160 characters and a random 6-digit
                sender ID your customers don't recognise, <a href="/blog/what-is-rcs-messaging" className="text-[#2563eb] underline underline-offset-2">RCS Business Messaging</a> delivers
                a full visual, branded experience right inside the native messaging app on Android
                (and now iPhone) — no app install, no WhatsApp opt-in, nothing extra.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Your verified brand name and logo are shown at the top. The message itself can have
                high-resolution images, swipeable product carousels, and action buttons that link
                directly to your payment page, store location, or booking form. And unlike SMS,
                you can actually see whether the customer read it.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                In India, <a href="/blog/rcs-coverage-india" className="text-[#2563eb] underline underline-offset-2">RCS is live on Jio, Airtel, and Vi networks</a> — covering hundreds of millions
                of Android users. With Apple adding RCS support in iOS 18, the channel now has
                effectively universal reach.
              </p>
              <ul className="space-y-2.5">
                {[
                  "High-res images, GIFs, and video thumbnails",
                  "Swipeable product and offer carousels",
                  "Action buttons: pay, call, navigate, reply",
                  "Verified sender badge — your brand name and logo",
                  "Read receipts and delivery confirmations",
                  "Two-way conversational messaging",
                  "Automatic fallback to SMS for older devices",
                ].map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CheckCheck className="w-3 h-3 text-[#2563eb]" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -- RCS vs SMS: WHY PLAIN SMS FALLS SHORT ------------------------- */}
      <section className="py-20 sm:py-24 bg-[#0f172a]" id="rcs-vs-sms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              <a href="/blog/rcs-vs-sms-india" className="hover:underline">RCS vs SMS</a>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Why plain text SMS is no longer enough
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              Bulk SMS still earns its keep for OTPs and urgent transactional alerts. But for anything
              that's supposed to drive a customer to act — a sale, a booking, a payment — it's fighting
              with one hand tied behind its back.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* SMS limitations */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 space-y-4">
              <h3 className="text-lg font-bold text-red-400">Plain SMS limitations</h3>
              <ul className="space-y-3">
                {[
                  "160-character limit — no room for context or brand story",
                  "No brand name — just a forgettable 6-character sender ID",
                  "No images, video, or interactive elements",
                  "Zero read receipts — you never know if anyone saw it",
                  "Easy to spoof — no verified sender identity",
                  "Shortened URLs look suspicious — customers don't click",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 text-red-400 text-xs">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* RCS solves this */}
            <div className="rounded-2xl bg-[#2563eb]/10 border border-[#2563eb]/20 p-8 space-y-4">
              <h3 className="text-lg font-bold text-[#38bdf8]">RCS solves all of this</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Your customer opens a message that looks like a premium branded card — company logo,
                verified name, product image, one-line offer, and a single 'Buy Now' button.
                One tap. Done. That's why <a href="/blog/rcs-vs-sms-india" className="text-[#38bdf8] underline underline-offset-2">RCS campaigns consistently deliver 3–5× higher
                  click-through rates</a> than plain SMS campaigns carrying the same offer.
              </p>
              <ul className="space-y-3">
                {[
                  "No character limit — say what you need to say",
                  "Your brand name and logo, verified by Google",
                  "Product images and carousels in the message itself",
                  "Read receipts and click tracking per recipient",
                  "Impossible to spoof — cryptographically verified sender",
                  "Action buttons go directly to your URL, call, or map",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 text-green-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -- WHY NOW -------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              The RCS Opportunity in India
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Why 2025–2026 is the right time to start
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Several things have clicked into place at once — and businesses that move now will build
              brand familiarity before the channel gets crowded.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "All three telcos are live", body: "Jio, Airtel, and Vi have enabled RCS on their networks. India has one of the world's largest Android user bases, and most of those devices now support RCS natively through Google Messages." },
              { icon: PhoneCall, title: "Apple finally joined", body: "iOS 18 added RCS support. That was the last barrier to universal reach — and it's gone. You can now run RCS campaigns that reach virtually every smartphone in India." },
              { icon: Star, title: "Competition hasn't arrived yet", body: "RCS is genuinely new in India. Brands that establish their RCS presence now will build customer familiarity and recall before competitors wake up to the channel." },
              { icon: BarChart3, title: "Performance beats the cost", body: "Early data from Indian RCS campaigns shows open rates above 70% and CTRs between 15–35% for well-crafted messages. At pricing comparable to bulk SMS, the cost-per-conversion difference is striking." },
              { icon: MessageSquare, title: "Customers expect more", body: "Indian consumers browse Instagram, YouTube, and WhatsApp all day. When a brand sends a 160-character plain text message in 2025, the contrast feels jarring. RCS meets them where their expectations already are." },
              { icon: Zap, title: "Set up once, scale forever", body: "RCS brand verification is a one-time process. Once your brand is verified, you can send to millions of recipients per day with no additional approvals — just build and launch." },
            ].map(c => (
              <div key={c.title} className="rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-[#2563eb]" />
                </span>
                <h3 className="text-base font-bold text-gray-900">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FEATURES ------------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              RCS Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Everything your business messages can do
            </h2>
          </div>
          <GradientCardCarousel
            cards={FEATURES.map((f) => ({
              icon: <f.icon className="w-7 h-7" />,
              title: f.title,
              description: f.desc,
            }))}
          />
        </div>
      </section>

      {/* -- HOW IT WORKS --------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              From campaign idea to customer's phone in 5 steps
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { n: "01", title: "Build your message", body: "Use our drag-and-drop campaign builder or REST API to create rich cards, carousels, and buttons." },
                { n: "02", title: "Capability check", body: "Our platform silently checks each recipient's device and network for RCS support before sending." },
                { n: "03", title: "Delivery via carrier", body: "RCS messages go through Jio, Airtel, or Vi's RCS gateway straight into Google Messages. No middleman." },
                { n: "04", title: "Customer interacts", body: "The customer sees your branded card, taps a button, or swipes your carousel. Every interaction is logged." },
                { n: "05", title: "Live analytics", body: "Your dashboard updates in real time — delivery, read, click, and conversion data per message." },
              ].map(s => (
                <div key={s.n} className="text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white font-extrabold text-lg flex items-center justify-center mx-auto font-(family-name:--font-syne) shadow-lg shadow-blue-200">
                    {s.n}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{s.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- USE CASES BY INDUSTRY ------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Industry Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Business Messaging across every industry
            </h2>
          </div>
          <div className="space-y-10">
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.name} className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10`}>
                <div className="w-full lg:w-1/2 ">
                  <div className="w-full rounded-2xl overflow-hidden">
                    <Image
                      src={ind.img}
                      alt={`RCS messaging use case for ${ind.name}`}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-5">
                  <h3 className="text-xl font-bold text-gray-900 font-(family-name:--font-syne)">{ind.name}</h3>
                  <ul className="space-y-2.5">
                    {ind.uses.map(u => (
                      <li key={u} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCheck className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
                        {u}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:gap-3 transition-all duration-200">
                    See {ind.name} use cases <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- WHY GET CLICK MEDIA -------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="why-gcm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Get Click Media for RCS?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Direct carrier connectivity.<br />Zero-code setup. Real-time data.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                We're one of India's leading <strong className="text-gray-800">RCS messaging service providers</strong>,
                with direct integrations to Jio, Airtel, and Vi — no third-party aggregators in between.
                That means faster delivery, better reliability, and accurate capability detection for
                every recipient.
              </p>
              {[
                { title: "No-code campaign builder", body: "Your marketing team can design rich cards, carousels, and action buttons without touching a single line of code." },
                { title: "REST API + full SDK support", body: "Node.js, Python, PHP, and Java SDKs. Trigger RCS programmatically for transactional flows, order confirmations, and personalised sequences." },
                { title: "Intelligent fallback engine", body: "RCS capability is checked per recipient. Non-RCS devices automatically get an SMS fallback — in real time, with no extra configuration." },
                { title: "Dedicated onboarding support", body: "We handle the entire Google brand verification process. Most clients go live within 5–7 business days of signing up." },
                { title: "Compliance and data security", body: "All campaigns comply with TRAI regulations. Customer data is processed on secure, India-hosted infrastructure." },
              ].map(p => (
                <div key={p.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
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
                  src="/images/rcs-hover.png"
                  alt="Get Click Media RCS dashboard analytics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- COMPARISON TABLE ----------------------------------------------- */}
      <section className="py-20 sm:py-24 bg-gray-50" id="comparison">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Full Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              <a href="/blog/rcs-vs-whatsapp-india" className="hover:underline underline-offset-4">RCS vs SMS vs WhatsApp</a> Business API
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold w-[40%]">Feature</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">RCS</th>
                  <th className="text-center px-4 py-4 font-semibold">Bulk SMS</th>
                  <th className="text-center px-4 py-4 font-semibold text-green-400">WhatsApp API</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 text-gray-700 font-medium">{row.feature}</td>
                    {[row.rcs, row.sms, row.wa].map((val, j) => (
                      <td key={j} className="px-4 py-3.5 text-center">
                        {typeof val === "boolean" ? (
                          val
                            ? <span className="text-green-500 font-bold">✓</span>
                            : <span className="text-red-400 font-bold">✕</span>
                        ) : (
                          <span className="text-gray-600 text-xs">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            Strategic note: RCS and WhatsApp serve complementary roles. The optimal strategy runs both channels from
            a unified platform — which Get Click Media supports natively.
          </p>
        </div>
      </section>

      {/* -- GET STARTED / PRICING ------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Get Started in 3 Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              From sign-up to your first RCS campaign
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { n: "01", title: "Brand Verification", body: "RCS requires a one-time Google brand verification — your name, logo, and business docs. We handle everything. Typical timeline: 5–7 business days." },
              { n: "02", title: "Campaign Setup", body: "Access our RCS campaign builder. Choose from pre-built templates for flash sales, appointment reminders, order updates, and payment requests — or build from scratch." },
              { n: "03", title: "Launch & Optimise", body: "Go live, watch your dashboard update in real time, and use the engagement data to sharpen your next campaign. Our customer success team is with you 24×7." },
            ].map(s => (
              <div key={s.n} className="relative rounded-2xl border-2 border-blue-100 bg-blue-50/40 p-7 space-y-4">
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#2563eb] text-white text-xs font-black flex items-center justify-center font-(family-name:--font-syne)">
                  {s.n}
                </span>
                <h3 className="text-base font-bold text-gray-900 pt-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          {/* Pricing note */}
          <div className="rounded-2xl bg-[#0f172a] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">Flexible pricing for every business size</h3>
              <p className="text-white/50 text-sm max-w-lg">
                Per-message or per-session pricing based on volume, use case, and industry. All plans include
                brand verification support, SMS fallback, real-time analytics, API access, and 24×7 support.
              </p>
            </div>
            <Link href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold hover:scale-105 transition-transform shadow-md">
              Get a Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              Got questions about RCS messaging in India?
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-gray-100 shadow-sm open:shadow-md transition-shadow"
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

      {/* -- BOTTOM CTA ----------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Ready to move beyond plain SMS?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media handles brand verification, campaign setup, and carrier connectivity end-to-end.
                Most clients send their first RCS campaign within a week.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
