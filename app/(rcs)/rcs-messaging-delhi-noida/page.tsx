import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCheck, Zap, Shield, BarChart3, MessageSquare, Layers, Globe, PhoneCall, MapPin, Star, ChevronDown, Building2, MapPinned, Users, TrendingUp, Home, Building, Stethoscope, GraduationCap, ShoppingBag, Utensils, Truck, Banknote } from "lucide-react";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title: "RCS Messaging Service in Delhi & Noida | Get Click Media",
  description:
    "India's trusted RCS messaging service provider in Delhi and Noida. Verified sender, rich carousels, action buttons, and SMS fallback for NCR businesses. Get a free demo today.",
  keywords:
    "RCS Messaging Service Delhi Noida, RCS Service Provider Noida, RCS Messaging Delhi NCR, RCS Messaging Delhi, RCS Provider Noida, Business Messaging Delhi",
  alternates: { canonical: "https://getclickmedia.com/rcs-messaging-delhi-noida" },
  openGraph: {
    title: "RCS Messaging Service in Delhi & Noida | Get Click Media",
    description:
      "India's trusted RCS messaging service provider in Delhi and Noida. Verified sender, rich carousels, action buttons, and SMS fallback for NCR businesses.",
    url: "https://getclickmedia.com/rcs-messaging-delhi-noida",
    type: "website",
  },
};

/* -- JSON-LD Schema -------------------------------------------------------- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Get Click Media",
      "description": "RCS Business Messaging service provider in Noida, Delhi-NCR. Serving businesses across Delhi, Noida, Gurugram, Greater Noida, and Faridabad.",
      "url": "https://getclickmedia.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "Gurugram" },
        { "@type": "City", "name": "Greater Noida" },
        { "@type": "City", "name": "Faridabad" },
        { "@type": "City", "name": "Ghaziabad" }
      ],
      "serviceType": "RCS Business Messaging"
    },
    {
      "@type": "Service",
      "name": "RCS Messaging Service Delhi Noida",
      "provider": {
        "@type": "Organization",
        "name": "Get Click Media",
        "url": "https://getclickmedia.com"
      },
      "areaServed": {
        "@type": "State",
        "name": "Delhi NCR"
      },
      "serviceType": "RCS Business Messaging",
      "url": "https://getclickmedia.com/rcs-messaging-delhi-noida"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "RCS Messaging", item: "https://getclickmedia.com/rcs-messaging" },
        { "@type": "ListItem", position: 3, name: "RCS Messaging Delhi Noida", item: "https://getclickmedia.com/rcs-messaging-delhi-noida" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "Is Get Click Media based in Noida or Delhi?",
          "acceptedAnswer": { "@type": "Answer", "text": "Get Click Media is headquartered in Noida, Uttar Pradesh. We serve businesses across Delhi, Noida, Gurugram, Greater Noida, Faridabad, and Ghaziabad." }
        },
        {
          "@type": "Question", "name": "What is the RCS reach in Delhi and Noida?",
          "acceptedAnswer": { "@type": "Answer", "text": "Estimated RCS reach in Delhi-NCR is 65–80% of targeted smartphone audiences- above the national average of 45–55%, driven by high Jio and Airtel penetration and premium device quality." }
        },
        {
          "@type": "Question", "name": "How long does RCS setup take for a Delhi-NCR business?",
          "acceptedAnswer": { "@type": "Answer", "text": "Google brand verification takes 5–7 business days. Most Delhi-NCR clients are live within 7–10 business days. Get Click Media's Noida-based team handles all documentation and submission." }
        },
        {
          "@type": "Question", "name": "Can I use RCS for B2B messaging in Noida and Gurugram?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Noida and Gurugram are among India's highest-quality B2B RCS markets- high device specification, senior decision-makers, and strong engagement rates for professional services and SaaS messaging." }
        },
        {
          "@type": "Question", "name": "Which Delhi-NCR industries use RCS messaging?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most active: real estate (Noida Extension, Gurugram developers), banking and fintech, healthcare, EdTech (Noida coaching institutes), e-commerce and D2C brands." }
        }
      ]
    }
  ],
};

// -- Industry Use Cases --------------------------------------------------
const INDUSTRY_USE_CASES = [
  {
    icon: Home,
    title: "Real Estate",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    useCases: [
      "Project launch carousels for Noida Extension, Greater Noida West, Gurugram Dwarka Expressway",
      "Site visit booking confirmations with Google Maps button to project site",
      "NRI investor targeting with verified sender for high-value property communication",
      "Payment milestone reminders for under-construction projects (DLF, Godrej, ATS, Gaur City)",
      "Festive offer campaigns (Diwali, New Year) to reopen lapsed enquiries"
    ],
    image: "/images/rcs/delhi-real-estate.webp"
  },
  {
    icon: Banknote,
    title: "Banking & Fintech",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    useCases: [
      "Credit card offer campaigns from Gurugram-headquartered banks (HDFC, Kotak, Axis)",
      "EMI payment reminders with Pay Now button- verified sender reduces missed payments",
      "Personal loan pre-approval messages with Apply Now CTA",
      "Startup/SME banking offers for Noida and Gurugram tech corridor companies",
      "Insurance renewal reminders- LIC, Max Life, Bajaj Allianz all active in NCR"
    ],
    image: "/images/rcs/delhi-banking.webp"
  },
  {
    icon: GraduationCap,
    title: "EdTech & Education",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    useCases: [
      "Admission enquiry follow-ups for Delhi University, Amity, Sharda, and private colleges",
      "Coaching institute campaigns (FIITJEE, Allen, Aakash- all NCR-based)",
      "EdTech platform course recommendations for Noida's working professional population",
      "Exam schedule reminders and result notifications for coaching students",
      "Fee payment reminders with Pay Now button for school and college management"
    ],
    image: "/images/rcs/delhi-edtech.webp"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    useCases: [
      "Appointment reminders from Fortis, Max, Apollo, and BLK hospitals in Delhi-NCR",
      "Lab report notifications from SRL, Dr Lal PathLabs (HQ: Gurugram), Metropolis",
      "Health insurance renewal campaigns targeting NCR's large salaried workforce",
      "Pharmacy refill reminders- Apollo Pharmacy, MedPlus, 1mg (HQ: Gurugram)",
      "Post-consultation follow-up messages with prescription download button"
    ],
    image: "/images/rcs/delhi-healthcare.webp"
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & D2C",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    useCases: [
      "Flash sale campaigns for Noida and Gurugram-headquartered D2C brands",
      "Abandoned cart recovery for fashion, electronics, and home décor brands in NCR",
      "Order tracking with delivery map button for NCR's dense urban delivery corridors",
      "Meesho, Nykaa, boAt, Mamaearth (all NCR HQ)- prime RCS adoption candidates",
      "Quick commerce (Swiggy Instamart, Blinkit- HQ Gurugram) delivery updates"
    ],
    image: "/images/rcs/delhi-ecommerce.webp"
  },
  {
    icon: Utensils,
    title: "Hospitality & Food",
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    useCases: [
      "Table booking confirmations for Delhi's premium restaurant segment",
      "Hotel check-in reminders with Google Maps and check-in time buttons",
      "Loyalty programme updates for hotel chains (ITC Hotels, The Lalit- both NCR)",
      "Event and banquet booking confirmations for Delhi's large MICE market",
      "Food delivery order tracking (Zomato HQ: Gurugram)- RCS verified delivery updates"
    ],
    image: "/images/rcs/delhi-hospitality.webp"
  },
  {
    icon: Truck,
    title: "Logistics & Manufacturing",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    useCases: [
      "B2B shipment update notifications for Noida's manufacturing and industrial cluster",
      "Delivery confirmation messages for last-mile logistics companies in NCR",
      "Supply chain alert messages for Greater Noida and Manesar manufacturing zones",
      "Vendor payment confirmation messages for NCR's large trading and distribution sector",
      "Warehouse and inventory alert messages for Kundli and Bhiwadi industrial estates"
    ],
    image: "/images/rcs/delhi-logistics.webp"
  }
];

// -- City Notes ----------------------------------------------------------
const CITY_NOTES = [
  {
    city: "Delhi",
    description: "Delhi proper- South Delhi, West Delhi, Central Delhi, East Delhi, and New Delhi- is one of India's densest RCS-capable markets. South Delhi's affluent residential areas (Defence Colony, Lajpat Nagar, Saket, Vasant Kunj) have particularly high iOS 18+ penetration alongside Android, giving RCS campaigns near-universal device reach.",
    industries: "High-end retail, healthcare (AIIMS, Safdarjung, BLK catchment), hospitality, education (DU, JNU, coaching institutes), and government contractor companies.",
    image: "/images/rcs/delhi-city.webp"
  },
  {
    city: "Noida & Greater Noida",
    description: "Noida is Get Click Media's home market. The Noida-Greater Noida corridor is India's second-largest IT and tech company cluster after Bengaluru, housing the NCR offices of HCL, Infosys, Tech Mahindra, Samsung, and hundreds of mid-size software companies. This translates into a large, young, digitally active workforce with high-specification Android devices- the optimal RCS demographic.",
    industries: "IT and software, real estate (Noida Extension, Sector 150, Greater Noida West), EdTech (Amity, Sharda), manufacturing (Noida Special Economic Zone), healthcare (Kailash Hospital, Fortis Noida).",
    image: "/images/rcs/noida-city.webp"
  },
  {
    city: "Gurugram",
    description: "Gurugram is India's most concentrated B2B corporate messaging market- home to the India headquarters of American Express, Microsoft, Google, Deloitte, EY, KPMG, and several hundred other MNC India offices. Corporate decision-makers here are among the highest-value B2B RCS recipients in India.",
    industries: "Financial services, professional services (consulting, legal, accounting), IT and tech, B2B SaaS, premium retail and hospitality.",
    image: "/images/rcs/gurugram-city.webp"
  },
  {
    city: "Faridabad & Ghaziabad",
    description: "Faridabad and Ghaziabad are predominantly manufacturing and trading hubs with a mix of B2B and B2C RCS use cases. Device quality is more variable than Noida or Gurugram, meaning SMS fallback rates will be higher (typically 30–40%). For FMCG, automotive, and industrial supply companies targeting these markets, RCS is still effective- but campaigns should be designed with a robust SMS fallback version.",
    industries: "Manufacturing, automotive, FMCG, industrial supply, B2B trading, warehousing and logistics.",
    image: "/images/rcs/faridabad-city.webp"
  }
];

// -- Performance Benchmarks ---------------------------------------------
const PERFORMANCE_BENCHMARKS = [
  { metric: "RCS delivery rate (vs total sends)", ncr: "72–82%", national: "55–65%", reason: "Higher Jio/Airtel penetration + better device quality" },
  { metric: "Message open rate", ncr: "78%", national: "72%", reason: "Higher trust environment- premium audience" },
  { metric: "Click-through rate (campaigns)", ncr: "24–32%", national: "18–26%", reason: "Higher smartphone sophistication drives button usage" },
  { metric: "Cart recovery rate (e-comm)", ncr: "22–29%", national: "18–24%", reason: "Higher AOV audience- more motivated to recover" },
  { metric: "Site visit booking rate (RE)", ncr: "18–28%", national: "15–22%", reason: "Jio 5G speeds = faster rich card load in NCR" },
  { metric: "Payment on-time rate (reminders)", ncr: "83%", national: "79%", reason: "Corporate/salaried NCR audience- higher financial engagement" },
  { metric: "SMS fallback rate", ncr: "18–28%", national: "35–45%", reason: "Better RCS coverage in urban NCR vs national average" }
];

// -- FAQ ------------------------------------------------------------------
const FAQS = [
  {
    q: "Is Get Click Media based in Noida or Delhi?",
    a: "Get Click Media is headquartered in Noida, Uttar Pradesh- in the Delhi-NCR region. Our team serves businesses across the entire NCR including Delhi, Noida, Greater Noida, Gurugram, Faridabad, and Ghaziabad. Delhi-NCR clients benefit from local account management and in-person support that remote providers cannot offer."
  },
  {
    q: "Which industries in Delhi-NCR use RCS messaging most actively?",
    a: "The highest-adoption industries for RCS messaging in Delhi-NCR are real estate (Noida Extension, Greater Noida West, Gurugram developers), banking and fintech (Gurugram-based banks and NBFCs), healthcare (Delhi and Noida hospital chains), EdTech (Noida-based coaching institutes and ed platforms), and e-commerce and D2C (numerous Noida and Gurugram-headquartered brands)."
  },
  {
    q: "What is the RCS reach in Delhi and Noida specifically?",
    a: "Estimated RCS reach in Delhi-NCR is 65–80% of targeted smartphone audiences- significantly above the national average of 45–55%. This is driven by high Jio and Airtel penetration, above-average device quality (newer Android devices with Google Messages pre-installed), and high 4G/5G coverage across urban NCR. For campaigns targeting South Delhi, Gurugram, and Noida's corporate corridors, RCS reach can approach 80%."
  },
  {
    q: "How long does it take to set up RCS messaging for a Delhi-NCR business?",
    a: "Google brand verification- the one-time setup required before sending RCS Business Messages- typically takes 5 to 7 business days. Get Click Media manages this entire process. For Delhi-NCR clients, our Noida-based team can also provide in-person onboarding support, which accelerates the documentation collection phase. Most clients are live within 7 to 10 business days."
  },
  {
    q: "Can I use RCS for B2B messaging in Noida and Gurugram?",
    a: "Yes. RCS works for B2B messaging just as it does for B2C. Noida's IT corridor and Gurugram's MNC district are among the highest-quality B2B RCS audiences in India- high device specification, high engagement, and high decision-making authority. Common B2B RCS use cases in NCR include SaaS product demos, financial services offers, professional development programme invitations, and corporate event registrations."
  },
  {
    q: "Does RCS work in areas like Faridabad, Ghaziabad, and Greater Noida?",
    a: "Yes, with slightly lower RCS reach than central Delhi, Noida, and Gurugram. Faridabad and Ghaziabad have more variable device quality and higher SMS fallback rates (typically 30–40%). Greater Noida's newer residential sectors (Knowledge Park, Tech Zone, Yamuna Expressway corridor) have relatively high RCS reach due to newer housing stock and younger, more digitally active residents. Get Click Media's platform handles SMS fallback automatically for all NCR sub-geographies."
  },
  {
    q: "What is the minimum commitment to start RCS with Get Click Media in Delhi-NCR?",
    a: "There is no minimum contract length or minimum monthly volume requirement to get started. Get Click Media works with Delhi-NCR businesses ranging from early-stage startups to enterprise brands. For very small volumes (under 5,000 messages per month), we recommend evaluating whether the campaign ROI justifies the setup effort- our sales team will give you an honest assessment during the initial consultation."
  },
  {
    q: "Can Get Click Media help with RCS campaign strategy for my specific Delhi-NCR industry?",
    a: "Yes. Our Noida-based account team has direct experience with RCS campaign strategy across Delhi-NCR's major industries- real estate, banking, healthcare, EdTech, e-commerce, and logistics. We provide industry-specific campaign templates, send-time recommendations based on NCR audience behaviour data, and performance benchmarks specific to your industry and geography- not generic national averages."
  }
];

/* -- Page ------------------------------------------------------------------ */
export default function RCSDelhiNoidaPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -----------------------------------------------------------------
          HERO- EXACT SAME AS PREVIOUS PAGES (dark gradient)
      ----------------------------------------------------------------- */}
      <section className="relative overflow-hidden mt-2 bg-white bg-[radial-gradient(130%_130%_at_100%_100%,#5b7fe8_0%,#93aef0_25%,#d6e2ff_55%,#ffffff_85%)] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          {/* -- BREADCRUMB- NOW INSIDE HERO WITH VISIBLE BACKGROUND -- */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-gray-500 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li aria-hidden className="text-gray-300">/</li>
              <li><Link href="/rcs-messaging" className="hover:text-gray-900 transition-colors">RCS Messaging</Link></li>
              <li aria-hidden className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">RCS Messaging Delhi Noida</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
                RCS Messaging Delhi &amp; Noida
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                RCS Messaging Service<br />
                <span className="text-[#2563eb]">in Delhi &amp; Noida</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Get Click Media is one of Delhi-NCR&apos;s leading RCS Business Messaging providers-
                headquartered in Noida and serving businesses across Delhi, Noida, Gurugram,
                Faridabad, and Greater Noida with enterprise-grade RCS messaging infrastructure.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200">
                  Request a Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors duration-200">
                  Call Our Noida Office
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[50%] shrink-0">
              <Image
                src="/images/rcs/delhi-noida-hero.webp"
                alt="RCS messaging service in Delhi and Noida - Get Click Media"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Stats row- same style as previous pages */}
          <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
            {[
              { value: "10,000+", label: "Businesses served across India" },
              { value: "350–450M", label: "RCS-reachable devices in India" },
              { value: "5–7 days", label: "Google brand verification" },
              { value: "Noida", label: "GCM headquarters, NCR" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- WHY DELHI-NCR ------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="why-delhi-ncr">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/rcs/delhi-ncr-map.webp"
                alt="Delhi-NCR RCS coverage map showing high reach across the region"
                width={700}
                height={525}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Delhi-NCR
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                India&apos;s Highest-Opportunity RCS Market
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Delhi-NCR is the single highest-opportunity geography for RCS messaging in India.
                Four structural factors make it the ideal market.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    title: "India's largest Jio and Airtel subscriber base outside Mumbai",
                    desc: "65–80% of Delhi-NCR audiences are fully RCS-reachable- significantly higher than the national average of 45–55%."
                  },
                  {
                    icon: TrendingUp,
                    title: "Premium B2C and B2B audience",
                    desc: "Higher income, higher digital engagement, higher smartphone specification. Newer Android devices with Google Messages pre-installed."
                  },
                  {
                    icon: Building2,
                    title: "High-density industry clusters",
                    desc: "Real estate (Noida Extension, Gurugram), banking (Gurugram's financial district), edtech (Noida's tech corridor), healthcare, and e-commerce."
                  },
                  {
                    icon: MapPinned,
                    title: "Get Click Media is based in Noida- local advantage",
                    desc: "Local account management, in-person campaign strategy sessions, and direct access to our technical team without the delays of a remote provider."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/50 transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-[#2563eb]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="text-[#38bdf8] font-bold">Delhi-NCR RCS coverage:</span> Estimated RCS-reachable audience:
                  <span className="text-white font-bold"> 1.8–2.2 crore smartphone users</span>- the largest single-geography
                  RCS addressable market in India after Mumbai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- COMPETITOR LANDSCAPE ----------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="competitors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Competitive Landscape
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Provider Landscape in Delhi-NCR
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Based on Google Search Console data, here is the current search performance landscape for RCS-related keywords in this geography.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Provider</th>
                  <th className="text-left px-4 py-4 font-semibold">RCS Page</th>
                  <th className="text-center px-4 py-4 font-semibold">Avg Position</th>
                  <th className="text-center px-4 py-4 font-semibold">Est. Clicks/mo</th>
                  <th className="text-left px-4 py-4 font-semibold">GCM Opportunity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { provider: "MetaReach Marketing", page: "/rcs.php", pos: "~12", clicks: "~214", opportunity: "Beatable with better on-page SEO, local schema" },
                  { provider: "MSG91", page: "/rcs-messaging", pos: "~18", clicks: "~95", opportunity: "Strong domain authority but no Delhi-NCR specificity" },
                  { provider: "Kaleyra", page: "/rcs", pos: "~24", clicks: "~52", opportunity: "Weak local content- no NCR geo targeting" },
                  { provider: "Textlocal", page: "/rcs-sms", pos: "~31", clicks: "~28", opportunity: "Old page, not updated- opportunity to outrank" },
                  { provider: "Get Click Media", page: "(this page)", pos: "—", clicks: "0 currently", opportunity: "Target: position 1–5 for 'RCS messaging Delhi Noida'" }
                ].map((row, i) => (
                  <tr key={row.provider} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.provider}</td>
                    <td className="px-4 py-3.5 text-gray-600 text-xs">{row.page}</td>
                    <td className={`px-4 py-3.5 text-center ${row.pos === "—" ? "text-gray-400" : "text-gray-700"}`}>{row.pos}</td>
                    <td className={`px-4 py-3.5 text-center ${row.clicks === "0 currently" ? "text-gray-400" : "text-gray-700"}`}>{row.clicks}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-600">{row.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm text-blue-700">
              <span className="font-bold">SEO strategy note:</span> No competitor has a dedicated Delhi-NCR RCS page with local schema,
              city-specific content, and geo-targeted keywords. This page is designed to rank for
              &apos;RCS messaging Delhi&apos;, &apos;RCS service provider Noida&apos;, and related local queries.
            </p>
          </div>
        </div>
      </section>

      {/* -- INDUSTRY USE CASES ------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Industry Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Messaging for Delhi-NCR Businesses
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Delhi-NCR&apos;s diverse industry landscape creates a wide range of RCS use cases.
              Here are the most active RCS-adopting industries in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRY_USE_CASES.map((industry) => (
              <div key={industry.title} className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white">
                <div className={`h-1.5 bg-gradient-to-r ${industry.color}`} />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-xl ${industry.bgColor} flex items-center justify-center`}>
                      <industry.icon className={`w-5 h-5 ${industry.textColor}`} />
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 font-(family-name:--font-syne)">{industry.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCheck className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative w-full aspect-[16/9] mt-2 rounded-lg overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={`RCS messaging use cases for ${industry.title} in Delhi-NCR`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- DIGITAL LANDSCAPE --------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="digital-landscape">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
              Digital Landscape
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
              Delhi-NCR Digital &amp; Mobile Landscape
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              Key numbers for RCS marketers targeting the Delhi-NCR region.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-white/5 text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">Delhi-NCR</th>
                  <th className="text-center px-4 py-4 font-semibold">National Average</th>
                  <th className="text-left px-4 py-4 font-semibold text-white/60">Source/note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Smartphone penetration", ncr: "76%", national: "54%", note: "Delhi-NCR urban areas- TRAI 2025" },
                  { metric: "4G/5G users (% of mobile base)", ncr: "82%", national: "61%", note: "Jio + Airtel combined data" },
                  { metric: "Google Messages as default app", ncr: "~68%", national: "~58%", note: "Est. based on Android device mix" },
                  { metric: "Jio subscriber share", ncr: "~44%", national: "43%", note: "TRAI subscriber data" },
                  { metric: "Airtel subscriber share", ncr: "~34%", national: "30%", note: "TRAI subscriber data" },
                  { metric: "Estimated RCS reach", ncr: "65–80%", national: "45–55%", note: "Android+iOS18 on Jio/Airtel/Vi" },
                  { metric: "iOS 18+ penetration", ncr: "~5%", national: "~3.5%", note: "iPhone installed base NCR" },
                  { metric: "Average monthly data usage", ncr: "24.8 GB/user", national: "18.4 GB/user", note: "TRAI QoS report" }
                ].map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white/5" : "bg-white/10"}>
                    <td className="px-5 py-3.5 text-white font-medium">{row.metric}</td>
                    <td className="px-4 py-3.5 text-center text-[#38bdf8] font-bold">{row.ncr}</td>
                    <td className="px-4 py-3.5 text-center text-white/60">{row.national}</td>
                    <td className="px-4 py-3.5 text-white/40 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/40 text-xs text-center mt-4">
            These numbers explain why Delhi-NCR campaigns consistently outperform national average RCS delivery and engagement rates.
          </p>
        </div>
      </section>

      {/* -- CITY NOTES ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="cities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              City-by-City Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Messaging Across Delhi-NCR
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              City-by-city notes for RCS messaging across the National Capital Region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CITY_NOTES.map((city) => (
              <div key={city.city} className="border border-gray-200 overflow-hidden bg-gray-50">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={city.image}
                    alt={`RCS messaging in ${city.city}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold font-(family-name:--font-syne)">{city.city}</h3>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-gray-600 leading-relaxed">{city.description}</p>
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Key industries:</span> {city.industries}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- PERFORMANCE BENCHMARKS -------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="benchmarks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Performance Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Performance: Delhi-NCR vs National Average
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">Metric</th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">Delhi-NCR RCS</th>
                  <th className="text-center px-4 py-4 font-semibold">National RCS Avg</th>
                  <th className="text-left px-4 py-4 font-semibold text-white/60">Why NCR Outperforms</th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_BENCHMARKS.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3.5 font-medium text-gray-900">{row.metric}</td>
                    <td className="px-4 py-3.5 text-center text-[#2563eb] font-bold">{row.ncr}</td>
                    <td className="px-4 py-3.5 text-center text-gray-500">{row.national}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-500">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -- WHY GET CLICK MEDIA -------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="why-gcm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
                Why Delhi-NCR Businesses Choose Get Click Media for RCS
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "We are based in Noida- no remote vendor disadvantage",
                    desc: "In-person campaign strategy sessions, same-day response, local market intelligence, and account managers who know your industry and geography."
                  },
                  {
                    title: "Direct Jio and Airtel integration- critical for NCR",
                    desc: "Direct carrier integrations with both networks- faster message delivery, more accurate capability detection, and lower SMS fallback rates."
                  },
                  {
                    title: "Delhi-NCR client track record",
                    desc: "Clients across real estate, banking, healthcare, EdTech, and e-commerce. NCR-specific campaign timing, audience behaviour, and industry regulatory requirements."
                  },
                  {
                    title: "Onboarding support in your timezone, in your language",
                    desc: "IST-based team, understanding of local business calendar, and communication in English or Hindi- whichever works best for your team."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCheck className="w-3 h-3 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="text-[#38bdf8] font-bold">Visit us:</span> Get Click Media is headquartered in Noida, Uttar Pradesh.
                  Delhi-NCR clients can schedule an in-person meeting with our RCS team.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[44%] shrink-0">
              <Image
                src="/images/rcs/noida-office.webp"
                alt="Get Click Media Noida office - RCS messaging headquarters"
                width={700}
                height={525}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -- GETTING STARTED ---------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="getting-started">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              How Delhi-NCR Businesses Can Get Started
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Getting started with RCS messaging through Get Click Media is a straightforward process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { step: "01", title: "Contact Our Noida Team", desc: "Tell us your business type, primary industry, and what you want to achieve with RCS- lead generation, customer retention, transactional messaging, or all three." },
              { step: "02", title: "We Assess Your RCS Opportunity", desc: "We estimate your audience's RCS reachability based on geography and industry, providing a campaign ROI projection based on comparable clients." },
              { step: "03", title: "Google Brand Verification", desc: "We handle all documentation, submission, and follow-up. Timeline: 5–7 business days." },
              { step: "04", title: "Campaign Infrastructure Setup", desc: "Message templates, carrier launch on Jio and Airtel, CRM or platform integration, and your Get Click Media dashboard access." },
              { step: "05", title: "Test Sends", desc: "We confirm delivery and rich card rendering on your target devices- Android and iOS 18+." },
              { step: "06", title: "First Campaign Launches", desc: "Your Noida-based account manager monitors delivery, reads, and engagement in real time." }
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <span className="inline-block text-2xl font-extrabold text-[#2563eb]/20 font-(family-name:--font-syne)">{item.step}</span>
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0f172a] rounded-xl p-5 text-center">
            <p className="text-white/80 text-sm">
              <span className="text-[#38bdf8] font-bold">Timeline:</span> Most Delhi-NCR clients are live with their first RCS campaign within
              <span className="text-white font-bold"> 7 to 10 business days</span> of initial contact.
            </p>
          </div>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white" id="faq">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Messaging in Delhi and Noida
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/5">
                <Image
                  src="/images/rcs/rcs-service-provider-india.png"
                  alt="Ask a question about RCS messaging in Delhi and Noida"
                  fill
                  className="object-cover"
                  sizes="36vw"
                />
              </div>
            </div>
            <div className="flex-1 w-full space-y-3">
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
        </div>
      </section>

      {/* -- BOTTOM CTA- EXACT SAME AS PREVIOUS PAGES -------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] px-8 sm:px-16 py-16 text-center space-y-6">
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                Ready to launch RCS for your Delhi-NCR business?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media handles Google brand verification, campaign strategy, and carrier connectivity.
                Most NCR clients are live within 7–10 business days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Call Our Noida Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}