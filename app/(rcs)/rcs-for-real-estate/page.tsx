import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCheck, Zap, Shield, BarChart3, MessageSquare, Layers, Globe, PhoneCall, MapPin, Star, ChevronDown, Home, DollarSign, Users, Calendar, Bell, TrendingUp } from "lucide-react";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "RCS Messaging for Real Estate: Drive Site Visits & Bookings | Get Click Media",
  description:
    "Use RCS messaging for real estate marketing in India — property carousels, site visit bookings, payment reminders, and verified sender trust. See how it works with Get Click Media.",
  keywords:
    "RCS for Real Estate, Real Estate RCS Messaging, RCS Real Estate India, RCS Property Marketing, RCS for Builders India",
  alternates: { canonical: "https://getclickmedia.com/rcs-for-real-estate" },
  openGraph: {
    title: "RCS Messaging for Real Estate: Drive Site Visits & Bookings | Get Click Media",
    description:
      "Use RCS messaging for real estate marketing in India — property carousels, site visit bookings, payment reminders, and verified sender trust. See how it works with Get Click Media.",
    url: "https://getclickmedia.com/rcs-for-real-estate",
    type: "website",
  },
};

/* -- JSON-LD Schema -------------------------------------------------------- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "RCS Messaging for Real Estate",
      "description": "RCS Business Messaging service for Indian real estate developers and brokers. Property carousels, site visit booking, payment reminders, verified sender identity, and automatic SMS fallback.",
      "provider": {
        "@type": "Organization",
        "name": "Get Click Media",
        "url": "https://getclickmedia.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "RCS Business Messaging — Real Estate",
      "url": "https://getclickmedia.com/rcs-for-real-estate"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
        { "@type": "ListItem", position: 3, name: "RCS for Real Estate", item: "https://getclickmedia.com/rcs-for-real-estate" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "How can RCS messaging help real estate developers in India?",
          "acceptedAnswer": { "@type": "Answer", "text": "RCS helps real estate developers by delivering visually rich, verified property communications that drive higher site visit bookings and lower no-show rates. Developers use RCS for project launch carousels, site visit confirmations, payment reminders, festive offer campaigns, and referral programmes. RCS campaigns consistently generate 3x to 5x higher site visit booking rates compared to equivalent SMS campaigns." }
        },
        {
          "@type": "Question", "name": "Can I show property images in RCS messages?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. RCS supports high-resolution images, GIFs, and video thumbnails natively inside the message — no link, no app switch required. A property developer can send a rich card with the project hero render, floor plan image, or actual site photo, along with a headline, description, and action buttons — all in a single message delivered to the buyer's default messaging app." }
        },
        {
          "@type": "Question", "name": "How does RCS reduce no-shows for site visits?",
          "acceptedAnswer": { "@type": "Answer", "text": "The primary mechanism is the confirmation + reschedule chip. A rich card sent 24 hours before the visit shows the visit details, a 'Confirm' quick-reply chip, and a 'Reschedule' quick-reply chip. Buyers who need to reschedule do so immediately via a tap — rather than simply not showing up. Developers using this flow report no-show rates dropping from 50–55% to 20–25%." }
        },
        {
          "@type": "Question", "name": "Can RCS include a Google Maps link to the project site?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. RCS action buttons support a 'View Location' button type that opens Google Maps directly to a specified latitude/longitude coordinate. Buyers tap the button and get turn-by-turn navigation to the project site immediately — without copying an address or searching manually." }
        },
        {
          "@type": "Question", "name": "Can I integrate RCS with my real estate CRM?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Get Click Media's REST API integrates with major Indian real estate CRMs including Sell.do, LeadSquared, Salesforce, and custom-built CRMs. The integration enables automatic RCS message triggers when a lead is created, when a site visit is booked, when a payment milestone falls due, or on any other CRM event." }
        },
        {
          "@type": "Question", "name": "Does RCS work for NRI real estate buyers outside India?",
          "acceptedAnswer": { "@type": "Answer", "text": "RCS works for NRI buyers if their local carrier supports RCS. In major NRI markets — UAE (Etisalat, du), UK (EE, O2, Vodafone), USA (T-Mobile, Verizon), Singapore (Singtel) — RCS is increasingly available. Get Click Media checks carrier capability for international numbers. Where RCS is not available, SMS fallback delivers the message." }
        },
        {
          "@type": "Question", "name": "Is RCS messaging RERA compliant for real estate in India?",
          "acceptedAnswer": { "@type": "Answer", "text": "RCS Business Messaging is not currently regulated under TRAI's commercial SMS framework. However, all real estate communications — including RCS — must comply with RERA guidelines on advertising and disclosure. Get Click Media's platform includes opt-out management and campaign record retention to support your RERA compliance." }
        },
        {
          "@type": "Question", "name": "What is the minimum volume needed to make RCS worth it for a real estate developer?",
          "acceptedAnswer": { "@type": "Answer", "text": "RCS is cost-effective for real estate developers sending as few as 5,000 to 10,000 messages per month — particularly because the cost per site visit booking from RCS is significantly lower than portal lead costs (₹250–600 per RCS-driven site visit vs ₹1,500–5,000 for a portal lead). For project launches, festive campaigns, and payment milestone reminders, RCS consistently delivers positive ROI even at lower volumes." }
        }
      ]
    }
  ],
};

// -- Real Estate Use Cases ------------------------------------------------
const REAL_ESTATE_USE_CASES = [
  {
    icon: Home,
    title: "New Project Launch Announcement",
    scenario: "Developer launches a new residential project in Noida Extension.",
    solution: "Rich card with project hero image, configuration, price range, key USPs, and 3 buttons: 'View Floor Plans', 'Book Site Visit', 'Call Us'.",
    result: "40–60% open rate. 18–25% site visit booking rate from button taps. Cost per site visit booking 60% lower than paid portal leads.",
    image: "/images/rcs/real-estate-project-launch.webp"
  },
  {
    icon: Layers,
    title: "Property Carousel — Multiple Units",
    scenario: "Broker wants to showcase 6 properties across different budgets and locations.",
    solution: "Carousel of 6 rich cards — each with property image, location, configuration, price, key features, 'Schedule Visit' button. Buyer swipes to compare.",
    result: "Average 2.3 cards viewed per session. 22% tap-through to Schedule Visit on at least one card.",
    image: "/images/rcs/real-estate-carousel.webp"
  },
  {
    icon: Calendar,
    title: "Site Visit Booking & Reminder",
    scenario: "Lead has booked a site visit for Saturday 11 AM. Developer wants to reduce no-shows.",
    solution: "Rich card sent 24 hours before: project image, visit details (date/time/address), 3 chips: 'Confirm Visit', 'Reschedule', 'Get Directions'. Map button opens Google Maps.",
    result: "No-show rate drops from 52% to 22%. Reschedule chip captures leads who would otherwise disappear. Map button increases on-time arrivals.",
    image: "/images/rcs/real-estate-site-visit.webp"
  },
  {
    icon: DollarSign,
    title: "Payment Milestone Reminder",
    scenario: "Developer needs to remind buyers of upcoming payment instalments (construction-linked plan).",
    solution: "Rich card with project name, payment milestone name, amount due, due date, and 2 buttons: 'Pay Now' (links to payment portal) and 'Call Finance Team'. Verified sender builds trust.",
    result: "On-time payment rate improves 28%. Call centre queries drop 35%. Builder trust scores improve.",
    image: "/images/rcs/real-estate-payment.webp"
  },
  {
    icon: Star,
    title: "Festive & Seasonal Offer Campaign",
    scenario: "Developer running a Diwali offer — stamp duty waiver + free parking for bookings in October.",
    solution: "Rich card: festive visual, project image, offer headline, 3 USPs, offer validity countdown, 2 buttons: 'Book Now — Offer Ends 31 Oct' and 'Download Offer Details'.",
    result: "35–50% higher enquiry reopening rate vs plain SMS for re-engagement campaigns. Visual festive card outperforms text-only equivalent 4:1 on click-through.",
    image: "/images/rcs/real-estate-festive.webp"
  },
  {
    icon: Globe,
    title: "NRI Investor Targeting",
    scenario: "Developer wants to reach NRI investors in UAE, UK, and USA for a premium commercial project in Hyderabad's HITEC City.",
    solution: "Rich card: premium project render, international investor USPs (RERA, dollar-denominated yields, NRI-friendly payment plan), 2 buttons: 'Download NRI Investment Guide' and 'Book a Video Call'.",
    result: "NRI segment response rate 3x domestic investor SMS. 'Book Video Call' button drives 40% of NRI conversion conversations.",
    image: "/images/rcs/real-estate-nri.webp"
  },
  {
    icon: Users,
    title: "Referral Programme Campaign",
    scenario: "Developer wants existing buyers to refer friends and family for the second tower launch.",
    solution: "Rich card: referral programme image, reward amount (₹50,000 Amazon voucher per successful referral), 3 buttons: 'Refer a Friend', 'See T&Cs', 'Call Us'. Quick-reply chip: 'I already know someone interested'.",
    result: "Referral programme awareness increases 5x vs email. 'I already know someone interested' chip surfaces warm leads immediately. Cost per referred booking 70% lower than portal leads.",
    image: "/images/rcs/real-estate-referral.webp"
  },
  {
    icon: Bell,
    title: "Post-Possession Move-In Support",
    scenario: "Developer wants to support buyers at possession stage — sharing move-in checklist, utility connection guides, and society contacts.",
    solution: "Rich card series (carousel): Card 1: move-in checklist PDF, Card 2: electricity/water connection guide with utility office map button, Card 3: RWA contact details with Call button, Card 4: developer's next project teaser with 'Register Interest' button.",
    result: "Buyer NPS increases. Utility card map button reduces post-possession call centre load 40%. Next project teaser generates 12% registration rate from satisfied existing buyers.",
    image: "/images/rcs/real-estate-possession.webp"
  }
];

// -- Customer Journey ------------------------------------------------------
const CUSTOMER_JOURNEY = [
  { stage: "Enquiry received (0–5 min)", type: "Rich card", content: "Hero image + USPs + [Book Site Visit] [Call Now] [View Floor Plans]", goal: "Immediate engagement while lead is hottest" },
  { stage: "Site visit booked", type: "Confirmation card", content: "Date, time, address, [Add to Calendar] [Get Directions]", goal: "Reduce no-shows, set expectations" },
  { stage: "24 hrs before visit", type: "Reminder card", content: "Visit details + [Confirm] [Reschedule] [Get Directions]", goal: "Reduce no-shows from 52% to under 25%" },
  { stage: "Post-visit (same day)", type: "Thank you + brochure", content: "Thanks message + PDF brochure card + [Discuss Payment Plan] [Reserve Unit]", goal: "Convert warm visit to EOI/booking" },
  { stage: "EOI/token paid", type: "Booking confirmation", content: "Unit details, payment plan summary, [Download Receipt] [Call RM]", goal: "Reinforce decision, reduce anxiety" },
  { stage: "Payment milestones", type: "Payment reminder", content: "Milestone, amount, due date, [Pay Now] [Call Finance]", goal: "Improve on-time payments" },
  { stage: "Construction updates", type: "Progress update", content: "Site photo (actual progress), milestone achieved, [View Site Webcam]", goal: "Build trust, reduce cancellations" },
  { stage: "Possession approaching", type: "Possession checklist", content: "Carousel: checklist / snag process / utility connections / move-in tips", goal: "Smooth handover, increase NPS" },
  { stage: "Post-possession", type: "Move-in support", content: "Carousel: utility guides, RWA info, next project teaser", goal: "Generate referrals, seed next purchase" },
];

// -- Performance Data ------------------------------------------------------
const PERFORMANCE_DATA = [
  { metric: "Open rate", sms: "32%", rcs: "74%", improvement: "2.3x higher" },
  { metric: "Site visit booking rate (from send)", sms: "4–7%", rcs: "15–25%", improvement: "3–4x higher" },
  { metric: "Enquiry reopen rate (re-engagement)", sms: "6%", rcs: "22%", improvement: "3.7x higher" },
  { metric: "No-show rate (after visit booking)", sms: "50–55%", rcs: "20–25%", improvement: "55% reduction" },
  { metric: "Payment on-time rate", sms: "62%", rcs: "81%", improvement: "19 pts higher" },
  { metric: "Referral programme participation", sms: "3%", rcs: "14%", improvement: "4.7x higher" },
  { metric: "Cost per site visit booking", sms: "₹800–1,500", rcs: "₹250–600", improvement: "60–70% lower" },
  { metric: "Brand recall (7-day post-send)", sms: "18%", rcs: "54%", improvement: "3x higher" },
];

// -- Segment Strategy -----------------------------------------------------
const SEGMENT_STRATEGIES = [
  {
    segment: "Affordable housing (under ₹40 Lakh)",
    strategy: "Lead with the EMI figure prominently (e.g., 'Own your home at ₹18,000/month EMI'). Use a single rich card with project image, location map, and two buttons: 'Check EMI Eligibility' and 'Book Free Site Visit'. Keep the message simple — avoid carousels. Ensure SMS fallback is clean and compelling.",
    audience: "First-time homebuyers, limited digital comfort, entry-level Android devices"
  },
  {
    segment: "Mid-segment housing (₹40 Lakh – ₹1.5 Crore)",
    strategy: "Use a 4–6 card carousel to showcase multiple configurations or phases (2 BHK, 3 BHK, premium floor units). Include lifestyle images alongside unit images (clubhouse, gym, children's play area). Add a 'Compare Configurations' button. Time sends for evenings (7–10 PM) when buyers are researching online.",
    audience: "Largest buyer cohort, digitally active, Jio/Airtel on Android"
  },
  {
    segment: "Premium and luxury (above ₹1.5 Crore)",
    strategy: "Use a single rich card with a high-quality architect render or lifestyle photo — not generic stock. The message should feel exclusive: 'Only 12 units remaining in Tower A' or 'By invitation only — preview on 28 June'. Buttons: 'Reserve Your Preview Slot' and 'Download The Brand Book'. Avoid price — premium buyers respond to exclusivity.",
    audience: "Brand-sensitive, high expectations, discerning buyers"
  },
  {
    segment: "Commercial real estate",
    strategy: "Lead with the investment thesis — expected rental yield, occupancy data for the micro-market, tenant mix if pre-leased. Use a carousel to showcase the building, floor plans, location connectivity (metro, airport, expressway), and amenities. Buttons: 'Download Investment Deck', 'Schedule a Property Walk-through', 'Request Lease Terms'.",
    audience: "Corporate decision-makers, business owners, ROI-focused"
  },
  {
    segment: "Resale and broker-led inventory",
    strategy: "Enable fast, rich showcase messages for newly listed properties to your database of registered buyers. A new 3 BHK listing in a popular Bangalore housing society can be showcased to 2,000 registered buyers within 90 seconds — with full property photo, floor plan, asking price, and 'Schedule Viewing' button — before any portal listing is indexed.",
    audience: "Brokers managing resale inventory, registered buyer database"
  }
];

const FAQS = [
  {
    q: "How can RCS messaging help real estate developers in India?",
    a: "RCS helps real estate developers by delivering visually rich, verified property communications that drive higher site visit bookings and lower no-show rates. Developers use RCS for project launch carousels, site visit confirmations, payment reminders, festive offer campaigns, and referral programmes. RCS campaigns consistently generate 3x to 5x higher site visit booking rates compared to equivalent SMS campaigns."
  },
  {
    q: "Can I show property images in RCS messages?",
    a: "Yes. RCS supports high-resolution images, GIFs, and video thumbnails natively inside the message — no link, no app switch required. A property developer can send a rich card with the project hero render, floor plan image, or actual site photo, along with a headline, description, and action buttons — all in a single message delivered to the buyer's default messaging app."
  },
  {
    q: "How does RCS reduce no-shows for site visits?",
    a: "The primary mechanism is the confirmation + reschedule chip. A rich card sent 24 hours before the visit shows the visit details, a 'Confirm' quick-reply chip, and a 'Reschedule' quick-reply chip. Buyers who need to reschedule do so immediately via a tap — rather than simply not showing up. Developers using this flow report no-show rates dropping from 50–55% to 20–25%."
  },
  {
    q: "Can RCS messages include a Google Maps link to the project site?",
    a: "Yes. RCS action buttons support a 'View Location' button type that opens Google Maps directly to a specified latitude/longitude coordinate. Buyers tap the button and get turn-by-turn navigation to the project site immediately — without copying an address or searching manually. This reduces no-shows by removing the friction of finding the location."
  },
  {
    q: "Does RCS work for NRI real estate buyers outside India?",
    a: "RCS works for NRI buyers if their local carrier supports RCS. In major NRI markets — UAE (Etisalat, du), UK (EE, O2, Vodafone), USA (T-Mobile, Verizon), Singapore (Singtel) — RCS is increasingly available. Get Click Media checks carrier capability for international numbers. Where RCS is not available, SMS fallback delivers the message. The 'Book a Video Call' button is particularly effective for NRI conversion."
  },
  {
    q: "Can I integrate RCS with my real estate CRM?",
    a: "Yes. Get Click Media's REST API integrates with major Indian real estate CRMs including Sell.do, LeadSquared, Salesforce, and custom-built CRMs. The integration enables automatic RCS message triggers when a lead is created, when a site visit is booked, when a payment milestone falls due, or on any other CRM event. Sub-minute automated responses to new enquiries are achievable with a standard API integration."
  },
  {
    q: "Is RCS messaging RERA compliant for real estate in India?",
    a: "RCS Business Messaging is not currently regulated under TRAI's commercial SMS framework, so the specific SMS content regulations do not apply. However, all real estate communications — including RCS — must comply with RERA guidelines on advertising and disclosure. Get Click Media's platform includes opt-out management and campaign record retention to support your RERA and general consumer protection compliance."
  },
  {
    q: "What is the minimum volume needed to make RCS worth it for a real estate developer?",
    a: "RCS is cost-effective for real estate developers sending as few as 5,000 to 10,000 messages per month — particularly because the cost per site visit booking from RCS is significantly lower than portal lead costs (₹250–600 per RCS-driven site visit vs ₹1,500–5,000 for a portal lead). For project launches, festive campaigns, and payment milestone reminders, RCS consistently delivers positive ROI even at lower volumes due to the high value of each conversion."
  }
];

/* -- Page ------------------------------------------------------------------ */
export default function RCSRealEstatePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -----------------------------------------------------------------
          HERO — with breadcrumb inside
      ----------------------------------------------------------------- */}
      <section className="relative overflow-hidden mt-2 bg-white bg-[radial-gradient(130%_130%_at_100%_100%,#5b7fe8_0%,#93aef0_25%,#d6e2ff_55%,#ffffff_85%)] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          {/* -- BREADCRUMB INSIDE HERO WITH VISIBLE BACKGROUND -- */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-gray-500 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li aria-hidden className="text-gray-300">/</li>
              <li><Link href="/rcs-messaging" className="hover:text-gray-900 transition-colors">RCS Messaging</Link></li>
              <li aria-hidden className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">RCS for Real Estate</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
                Real Estate RCS Messaging
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                RCS Messaging for Real Estate:<br />
                <span className="text-[#2563eb]">Convert More Leads into Site Visits</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                In India&apos;s competitive real estate market, the difference between a lead and a site
                visit booking often comes down to how quickly and effectively your brand communicates.
                RCS delivers rich, visual property experiences directly into the customer&apos;s native
                messaging app with Google-verified sender identity.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
                  Request a Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors duration-200">
                  Talk to Our RCS Team
                </Link>
              </div>

              <div className="bg-blue-50/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100 max-w-md mx-auto lg:mx-0">
                <p className="text-gray-700 text-sm font-medium">
                  <span className="text-[#2563eb] font-bold">Quick result:</span> Real estate developers using RCS for site visit campaigns report
                  <span className="text-gray-900 font-bold"> 3x to 5x higher booking rates</span> compared to equivalent plain SMS campaigns.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[50%] shrink-0">
              <Image
                src="/images/rcs/real-estate-hero.webp"
                alt="RCS Real Estate messaging showing property cards on mobile phone"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* -- STATS BAR ------------------------------------------------------ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "74%", label: "Open Rate", sub: "vs 32% for promotional SMS" },
            { value: "15–25%", label: "Site Visit Bookings", sub: "vs 4–7% for SMS campaigns" },
            { value: "₹250–600", label: "Cost per Site Visit", sub: "vs ₹800–1,500 for SMS" },
            { value: "55%", label: "No-Show Reduction", sub: "from 52% down to 22%" },
          ].map(s => (
            <div key={s.value} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{s.value}</p>
              <p className="text-sm font-bold text-gray-900">{s.label}</p>
              <p className="text-xs text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -- WHY REAL ESTATE NEEDS RCS ------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white" id="why-real-estate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/rcs/real-estate-why-rcs.webp"
                alt="Real estate messaging comparison — SMS vs RCS visual"
                width={700}
                height={525}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Real Estate Needs RCS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                Why Real Estate Marketing in India Needs RCS
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Real estate is one of the highest-consideration purchase categories in India. 
                A homebuyer or investor evaluates dozens of properties before deciding to visit one.
                Your first communication after an enquiry shapes whether that visit ever happens.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <h4 className="text-sm font-bold text-red-600 mb-2">✕ Plain SMS cannot show what words cannot sell</h4>
                  <p className="text-sm text-gray-600">A residential property is sold by the image of the swimming pool, the open-plan living room, the location map. Plain SMS gives you 160 characters and a URL that many buyers won&apos;t click. RCS delivers the actual property image with a verified sender badge.</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                  <h4 className="text-sm font-bold text-amber-600 mb-2">✕ WhatsApp opt-in lists miss your most valuable new leads</h4>
                  <p className="text-sm text-gray-600">The highest-value real estate leads are often first-time enquirers who just submitted a form on 99acres, MagicBricks, or Housing.com. These leads haven&apos;t opted into your WhatsApp. RCS reaches them without requiring opt-in — via the carrier network, within seconds.</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-600 mb-2">✓ Trust is the most expensive thing to build — RCS builds it instantly</h4>
                  <p className="text-sm text-gray-600">Your brand name, logo, and Google-verified checkmark appear at the top of every message. The buyer knows exactly who is sending the message before they open it. Verified identity is not a nice-to-have — it&apos;s the prerequisite for engagement.</p>
                </div>
              </div>

              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="text-[#38bdf8] font-bold">India context:</span> India&apos;s residential real estate market sees over 3 lakh new property launches annually. 
                  The average enquiry-to-site-visit conversion via SMS is 4–7%. RCS campaigns consistently achieve 
                  <span className="text-white font-bold"> 15–25% enquiry-to-visit conversion</span> for well-targeted campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- 8 USE CASES ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Real Estate Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              8 High-Impact RCS Use Cases for Indian Real Estate
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Here are the 8 most effective ways Indian real estate developers, builders, and brokers 
              are using RCS messaging.
            </p>
          </div>

          <div className="space-y-8">
            {REAL_ESTATE_USE_CASES.map((uc, i) => (
              <div key={uc.title} className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100`}>
                <div className="w-full lg:w-[40%] shrink-0">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={uc.image}
                      alt={`RCS real estate use case: ${uc.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <uc.icon className="w-4 h-4 text-[#2563eb]" />
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 font-(family-name:--font-syne)">{uc.title}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold text-gray-700">Scenario:</span> <span className="text-gray-500">{uc.scenario}</span></p>
                    <p><span className="font-semibold text-gray-700">RCS solution:</span> <span className="text-gray-500">{uc.solution}</span></p>
                    <p><span className="font-semibold text-gray-700">Expected result:</span> <span className="text-gray-500">{uc.result}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CUSTOMER JOURNEY ---------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="customer-journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Customer Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              The Complete RCS Customer Journey: Enquiry to Possession
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Here is how RCS fits into every stage of the Indian real estate buyer journey — 
              from first enquiry to post-possession engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CUSTOMER_JOURNEY.map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#2563eb] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-sm font-bold text-gray-900">{step.stage}</span>
                </div>
                <div className="space-y-1 text-xs">
                  <p><span className="font-semibold text-gray-700">Type:</span> <span className="text-gray-500">{step.type}</span></p>
                  <p><span className="font-semibold text-gray-700">Content:</span> <span className="text-gray-500 break-words">{step.content}</span></p>
                  <p><span className="font-semibold text-gray-700">Goal:</span> <span className="text-gray-500">{step.goal}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- PERFORMANCE DATA ---------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="performance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Performance Data
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              RCS vs SMS: Real Estate Campaign Performance Comparison
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              Across Indian real estate RCS deployments, these are the consistent performance 
              differentials between RCS and SMS campaigns for comparable audiences and offer types.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-white/5 text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold text-red-400">SMS</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">RCS</th>
                  <th className="text-center px-4 py-4 font-semibold text-green-400">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white/5" : "bg-white/10"}>
                    <td className="px-5 py-3.5 text-white font-medium">{row.metric}</td>
                    <td className="px-4 py-3.5 text-center text-red-400">{row.sms}</td>
                    <td className="px-4 py-3.5 text-center text-[#38bdf8]">{row.rcs}</td>
                    <td className="px-4 py-3.5 text-center text-green-400">{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/40 text-xs text-center mt-4">
            Data note: Figures are based on aggregated performance data from Indian real estate RCS campaigns. 
            Actual results vary based on project type, location, audience quality, message design, and offer strength.
          </p>
        </div>
      </section>

      {/* -- SEGMENT STRATEGIES -------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="segments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Segment Strategies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Messaging Strategy by Real Estate Segment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SEGMENT_STRATEGIES.map((s) => (
              <div key={s.segment} className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-3 hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-[#2563eb] font-(family-name:--font-syne)">{s.segment}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.strategy}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Audience:</span> {s.audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- WHY GET CLICK MEDIA -------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="why-gcm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Get Click Media
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Why Get Click Media for Real Estate RCS Messaging?
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "Real estate campaign templates — ready on day one", desc: "Pre-built RCS campaign templates for project launch, site visit booking, payment reminder, festive offer, referral programme, and possession support. Launch within hours." },
                  { title: "CRM integration for instant enquiry response", desc: "REST API integrates with Sell.do, LeadSquared, Salesforce, and custom CRMs. Sub-minute automated RCS responses to new enquiries." },
                  { title: "Direct Jio and Airtel connectivity", desc: "Direct carrier connectivity with Jio and Airtel — faster delivery, higher reliability, and better capability detection for SMS fallback. No aggregator latency." },
                  { title: "Pan-India reach with local SMS fallback", desc: "Intelligent fallback ensures your message delivers as RCS to urban audiences and as SMS to everyone else — with no manual segmentation required." },
                  { title: "RERA compliance and opt-out management", desc: "Automated opt-out management. Campaign records and opt-out logs are retained for audit purposes — supporting RERA and consumer protection compliance." },
                  { title: "Dedicated real estate account support", desc: "Dedicated account managers with sector-specific experience. Help with message copy, A/B testing, send-time optimisation, and campaign performance review." },
                ].map(p => (
                  <div key={p.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCheck className="w-3 h-3 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{p.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-[44%] shrink-0">
              <Image
                src="/images/rcs/real-estate-dashboard.webp"
                alt="Get Click Media RCS real estate dashboard analytics"
                width={700}
                height={525}
                className="w-full h-auto"
              />
            </div>
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
              RCS Messaging for Real Estate in India
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
                Ready to launch your first real estate RCS campaign?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media handles Google brand verification, CRM integration, and campaign setup.
                Most developers send their first RCS campaign within 7 to 10 business days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Talk to Our RCS Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}