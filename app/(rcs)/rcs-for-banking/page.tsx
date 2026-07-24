import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCheck,
  Shield,
  Zap,
  BarChart3,
  MessageSquare,
  Layers,
  Globe,
  PhoneCall,
  MapPin,
  Star,
  ChevronDown,
  Building2,
  Landmark,
  CreditCard,
  Wallet,
  PiggyBank,
  ShieldCheck,
  Bell,
  Clock,
  Users,
  FileText,
  Award,
  TrendingUp,
  Home,
} from "lucide-react";

/* -- SEO Metadata ---------------------------------------------------------- */
export const metadata: Metadata = {
  title:
    "RCS Messaging for Banking & Financial Services in India | Get Click Media",
  description:
    "RCS messaging for Indian banks and NBFCs- verified sender identity, credit card campaigns, EMI reminders, fraud alerts, and loan offers. Compliant, scalable, and higher-ROI than SMS.",
  keywords:
    "RCS for Banking, RCS Banking Messages, RCS Banking Notifications, RCS for Financial Services India, RCS BFSI India, Banking RCS Messaging",
  alternates: { canonical: "https://getclickmedia.com/rcs-for-banking" },
  openGraph: {
    title:
      "RCS Messaging for Banking & Financial Services in India | Get Click Media",
    description:
      "RCS messaging for Indian banks and NBFCs- verified sender identity, credit card campaigns, EMI reminders, fraud alerts, and loan offers. Compliant, scalable, and higher-ROI than SMS.",
    url: "https://getclickmedia.com/rcs-for-banking",
    type: "website",
  },
};

/* -- JSON-LD Schema -------------------------------------------------------- */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RCS Messaging for Banking and Financial Services",
      description:
        "RCS Business Messaging service for Indian banks, NBFCs, and financial services companies. Verified sender identity, fraud alerts, loan campaigns, EMI reminders, and insurance renewals.",
      provider: {
        "@type": "Organization",
        name: "Get Click Media",
        url: "https://getclickmedia.com",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceType: "RCS Business Messaging- Banking and Financial Services",
      url: "https://getclickmedia.com/rcs-for-banking",
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
          name: "RCS Messaging",
          item: "https://getclickmedia.com/rcs-messaging",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "RCS for Banking",
          item: "https://getclickmedia.com/rcs-for-banking",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does RCS help Indian banks reduce fraud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RCS eliminates spoofed Sender ID attacks with Google-verified brand identity on every message. Banks report 43% reductions in phishing-related support calls within 6 months of RCS launch.",
          },
        },
        {
          "@type": "Question",
          name: "Do banks need TRAI DLT registration for RCS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. RCS is not classified as commercial SMS under TRAI regulations. Banks need Google brand verification instead, which Get Click Media handles as part of onboarding.",
          },
        },
        {
          "@type": "Question",
          name: "Can banks send RCS to DND-registered customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. RCS is not subject to TRAI DND restrictions. Banks can send marketing RCS to DND-registered customers with standard marketing consent in place.",
          },
        },
        {
          "@type": "Question",
          name: "Can RCS be used for real-time fraud alerts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Get Click Media's API supports sub-second trigger-to-delivery for fraud alerts. Two-way RCS fraud alerts achieve 68% customer response rates vs 11% for SMS.",
          },
        },
        {
          "@type": "Question",
          name: "Does RCS work for NBFCs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Any licensed financial services company- bank, NBFC, insurer, or fintech- can use RCS through Get Click Media. NBFCs often achieve higher ROI than banks due to higher acquisition cost environments.",
          },
        },
      ],
    },
  ],
};

// -- Banking Use Cases -----------------------------------------------------
const BANKING_USE_CASES = [
  {
    icon: CreditCard,
    title: "Credit Card Offer Campaign",
    scenario:
      "Targeted offer to pre-qualified customers based on credit score, income, and transaction history. Sent Monday-Wednesday, 7–9 PM.",
    solution:
      "Rich card with card image, card name, key benefits, joining fee, welcome bonus, and 2 buttons: 'Apply Now', 'See All Benefits'.",
    result:
      "Application rate: 6.2% vs SMS 1.1%. Cost per application: ₹38 vs ₹210 via SMS. Apply Now CTR: 31%.",
    image: "/images/rcs/banking-credit-card.webp",
  },
  {
    icon: Wallet,
    title: "EMI & Loan Repayment Reminder",
    scenario:
      "3 days before EMI due date for personal loans, home loans, auto loans, credit card outstanding. Transactional communication- no DND restriction.",
    solution:
      "Rich card: bank logo + verified, loan/card type, EMI amount, due date, masked account number, 2 buttons: 'Pay Now' (links to payment portal), 'Set Up Auto-Pay'.",
    result:
      "On-time payment rate: +24% vs SMS reminder. 'Pay Now' button resolves 71% of cases without agent call. Delinquency reduction: 18% in 90-day cohorts.",
    image: "/images/rcs/banking-emi-reminder.webp",
  },
  {
    icon: TrendingUp,
    title: "Personal Loan Pre-Approval Alert",
    scenario:
      "Pre-qualified customers identified by credit model. Highest conversion window: within 48 hours of salary credit or large incoming transfer.",
    solution:
      "Rich card: bank logo + verified, pre-approved loan amount, interest rate, tenure options, EMI preview, 2 buttons: 'Apply in 2 Minutes', 'Calculate EMI'.",
    result:
      "Conversion rate: 8.4% vs SMS 1.9%. Disbursal rate within 24 hours: 62%. Cost per disbursed loan (RCS): 67% lower than branch-led acquisition.",
    image: "/images/rcs/banking-personal-loan.webp",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Alert with Two-Way Verification",
    scenario:
      "Real-time trigger: unusual transaction detected. Immediate automated send- sub-30 seconds from trigger.",
    solution:
      "Rich card: bank logo + verified, transaction details (merchant, amount, time, location), 3 quick-reply chips: 'Yes, this was me', 'No, block this transaction', 'Call Fraud Team'.",
    result:
      "Customer response rate: 67% vs SMS fraud alerts 12%. False positive friction reduced 44%. Fraud loss reduction: 29% for participating banks.",
    image: "/images/rcs/banking-fraud-alert.webp",
  },
  {
    icon: PiggyBank,
    title: "Fixed Deposit & Investment Offer",
    scenario:
      "Triggered by large balance sitting idle in savings account, FD maturity approaching, or quarterly investment campaign.",
    solution:
      "Rich card: bank/product logo, investment type (FD, RD, SGB, mutual fund), interest rate, minimum amount, tenure options, 2 buttons: 'Invest Now', 'Talk to RM'.",
    result:
      "FD booking rate via RCS: 4.1% vs email 0.8%. 'Talk to RM' chip generates 2.8x more RM-initiated conversations than cold calls.",
    image: "/images/rcs/banking-fd-offer.webp",
  },
  {
    icon: Shield,
    title: "Insurance Renewal Reminder",
    scenario:
      "30 days, 15 days, 7 days, and 1 day before policy expiry. Sent by insurer or bancassurance partner.",
    solution:
      "Carousel: Card 1- policy summary (coverage, premium, expiry), Card 2- what you lose if lapsed, Card 3- renew now + new plan upgrade options. Buttons: 'Renew Now', 'View Policy', 'Compare Plans'.",
    result:
      "Renewal rate: +31% vs SMS reminder. 'Compare Plans' button drives 18% upgrade rate. Policy lapse rate: -29% for customers receiving RCS renewal series.",
    image: "/images/rcs/banking-insurance-renewal.webp",
  },
  {
    icon: BarChart3,
    title: "Credit Score Update & Credit Health Alert",
    scenario:
      "Monthly credit score update notification. Triggered by score change >10 points. High-engagement touchpoint.",
    solution:
      "Rich card: credit score gauge image, score change indicator (+/-), score category, 2 buttons: 'View Full Credit Report', 'Tips to Improve Score'.",
    result:
      "Open rate: 91% (highest of any banking RCS message type). CTR to credit report: 48%. Credit-score-linked loan offer conversion: 3.2x higher than non-personalised campaigns.",
    image: "/images/rcs/banking-credit-score.webp",
  },
  {
    icon: Clock,
    title: "Savings Account / Dormant Account Reactivation",
    scenario:
      "Account dormant for 6+ months or zero transaction in last 90 days. Reactivation campaign with incentive.",
    solution:
      "Rich card: bank logo + verified, account balance, dormancy status, reactivation incentive, 2 buttons: 'Reactivate My Account', 'Contact Branch'. Include Google Maps branch locator button.",
    result:
      "Reactivation rate via RCS: 14% vs email 2.3%. 'Find Branch' map button: 38% of reactivation visits use the map button. Cost per reactivated account: 76% lower than branch outreach.",
    image: "/images/rcs/banking-dormant-account.webp",
  },
  {
    icon: Award,
    title: "Wealth Management & HNI Communication",
    scenario:
      "High Net Worth Individual (HNI) and Ultra HNI segment. Quarterly portfolio review reminder, exclusive product pre-launch.",
    solution:
      "Single premium rich card (not carousel- exclusivity signal). Personalised: client name, portfolio value, performance summary, exclusive offer. Buttons: 'Schedule Portfolio Review', 'Call My RM Now'.",
    result:
      "RM meeting scheduling rate: +3.8x vs email. Revenue per HNI RCS touchpoint: ₹18,000 (attributed product purchase). HNI engagement score: highest channel for relationship maintenance.",
    image: "/images/rcs/banking-wealth-management.webp",
  },
  {
    icon: FileText,
    title: "KYC Update & Compliance Communication",
    scenario:
      "Annual KYC renewal reminder, document expiry alert, or regulatory compliance communication from bank.",
    solution:
      "Rich card: bank logo + verified, KYC status, what needs updating, deadline, 2 buttons: 'Update KYC Online' (links to video KYC or e-KYC portal), 'Visit Branch'. SMS fallback ensures 100% compliance reach.",
    result:
      "KYC completion rate via RCS: 61% vs SMS 22%. 'Update Online' button reduces branch load by 47%. Non-compliant account freeze rate: reduced 38% in pilot branches.",
    image: "/images/rcs/banking-kyc-update.webp",
  },
];

// -- Compliance Table ------------------------------------------------------
const COMPLIANCE_TABLE = [
  {
    regulation: "TRAI DLT",
    covers: "Entity registration, Sender ID, SMS template pre-approval",
    applies: "No- RCS is not regulated as commercial SMS",
    handled:
      "RCS bypasses DLT entirely. SMS fallback uses DLT-compliant templates.",
  },
  {
    regulation: "TRAI DND",
    covers: "Do Not Disturb registry- limits promotional SMS reach and timing",
    applies: "No- RCS not classified as commercial SMS",
    handled: "RCS reaches DND-registered customers. No time restriction.",
  },
  {
    regulation: "RBI Guidelines on Digital Comms",
    covers:
      "Fraud disclosure, customer consent, data security for banking comms",
    applies: "Partial- consent and data security apply",
    handled:
      "GCM provides consent management, encrypted data, India-hosted infrastructure.",
  },
  {
    regulation: "Google RBM Policy",
    covers: "Brand verification, prohibited content (gambling, alcohol, adult)",
    applies: "Yes- all senders must comply",
    handled:
      "GCM reviews all banking templates for RBM policy compliance before submission.",
  },
  {
    regulation: "IT Act / DPDP 2023",
    covers: "Personal data handling, consent, right to erasure",
    applies: "Yes- applies to all digital comms",
    handled:
      "GCM platform includes opt-out management and data deletion on request.",
  },
  {
    regulation: "PCI DSS",
    covers: "Payment card data security for card-related messaging",
    applies: "Partial- no card data in RCS messages",
    handled:
      "GCM never transmits card numbers. Payment links go to bank's PCI-compliant portal.",
  },
  {
    regulation: "SEBI (for investment messaging)",
    covers: "Disclosure requirements for mutual fund/stock messaging",
    applies: "Yes- for investment product messaging",
    handled:
      "GCM provides disclosure text insertion in templates for SEBI-regulated products.",
  },
];

// -- Performance Benchmarks ------------------------------------------------
const PERFORMANCE_DATA = [
  {
    metric: "Credit card application rate",
    sms: "0.9–1.3%",
    rcs: "5.5–7.2%",
    uplift: "5–6x higher",
  },
  {
    metric: "Personal loan conversion rate",
    sms: "1.7–2.1%",
    rcs: "7.8–9.4%",
    uplift: "4–5x higher",
  },
  {
    metric: "EMI on-time payment rate",
    sms: "61%",
    rcs: "82%",
    uplift: "+21 percentage points",
  },
  {
    metric: "Fraud alert response rate",
    sms: "11%",
    rcs: "68%",
    uplift: "6x higher",
  },
  {
    metric: "FD/investment booking rate",
    sms: "0.7%",
    rcs: "3.8–4.5%",
    uplift: "5x higher",
  },
  {
    metric: "Insurance renewal rate",
    sms: "54%",
    rcs: "81%",
    uplift: "+27 percentage points",
  },
  {
    metric: "KYC completion rate",
    sms: "20–24%",
    rcs: "58–64%",
    uplift: "3x higher",
  },
  {
    metric: "Account reactivation rate",
    sms: "2.1%",
    rcs: "12–16%",
    uplift: "6–7x higher",
  },
  {
    metric: "Phishing support calls (6mo)",
    sms: "Baseline",
    rcs: "-43%",
    uplift: "Significant reduction",
  },
  {
    metric: "Read rate (overall banking RCS)",
    sms: "~35% est.",
    rcs: "89% tracked",
    uplift: "2.5x higher",
  },
];

// -- BFSI Segment Strategies ----------------------------------------------
const SEGMENT_STRATEGIES = [
  {
    segment: "Private Sector Banks",
    useCases:
      "Credit card acquisition campaigns, pre-approved loan offers targeted by credit score band, investment product cross-sell, HNI relationship management.",
    priority:
      "Build RCS into CRM triggered-communication stack- not treat as separate blast channel.",
  },
  {
    segment: "Public Sector Banks",
    useCases:
      "KYC compliance communication, dormant account reactivation, Jan Dhan and PM scheme-linked communication, loan EMI reminders for rural and semi-urban borrowers.",
    priority:
      "Robust SMS fallback for 2G/3G customers. Focus on compliance and customer outreach.",
  },
  {
    segment: "NBFCs and Digital Lending",
    useCases:
      "Pre-approved loan offers, EMI reminders, collections communication (verified sender adds seriousness), insurance cross-sell bundled with loan products.",
    priority:
      "High acquisition cost environment- clear ROI advantage of RCS-driven loan conversion over SMS.",
  },
  {
    segment: "Insurance Companies",
    useCases:
      "Multi-touch renewal reminder series (30/15/7/1 day), lapse reactivation campaigns, annual premium payment reminders, health policy renewal with sum insured enhancement.",
    priority:
      "3-card carousel (policy summary / lapse risk / renew now) is the highest-converting format.",
  },
  {
    segment: "Wealth Management & Stockbroking",
    useCases:
      "Quarterly portfolio performance cards, exclusive product pre-launch invitations, SIP reminder and top-up nudges, RM-initiated relationship touchpoints.",
    priority:
      "Verified sender identity is particularly important- HNI clients have high fraud sensitivity.",
  },
];

// -- Customer Lifecycle -----------------------------------------------------
const LIFECYCLE_STAGES = [
  {
    stage: "Acquisition",
    type: "Pre-approved offer card",
    content: "Product, rate, USPs, eligibility",
    cta: "Apply Now",
    goal: "New product activation",
  },
  {
    stage: "Onboarding",
    type: "Welcome + setup guide",
    content: "Account details, digital banking steps",
    cta: "Complete Setup",
    goal: "Activate digital banking",
  },
  {
    stage: "Early engagement",
    type: "Product recommendation",
    content: "Cards/loans/investments suited to profile",
    cta: "Explore Products",
    goal: "Cross-sell in first 90 days",
  },
  {
    stage: "Active usage",
    type: "Transaction alerts",
    content: "Verified transaction details, balance",
    cta: "Confirm / Block",
    goal: "Real-time fraud prevention",
  },
  {
    stage: "Cross-sell",
    type: "Investment/insurance offer",
    content: "Product benefits, returns, premium",
    cta: "Invest Now / Insure",
    goal: "Revenue per customer increase",
  },
  {
    stage: "EMI servicing",
    type: "Payment reminder",
    content: "Amount due, due date, account details",
    cta: "Pay Now",
    goal: "Reduce delinquency",
  },
  {
    stage: "Renewal",
    type: "Insurance/FD renewal",
    content: "Policy/FD details, renewal benefit",
    cta: "Renew Now",
    goal: "Prevent lapse",
  },
  {
    stage: "Problem resolution",
    type: "Fraud alert",
    content: "Transaction details, location, time",
    cta: "Confirm / Block",
    goal: "Reduce fraud loss",
  },
  {
    stage: "Dormancy",
    type: "Reactivation offer",
    content: "Balance, incentive, deadline",
    cta: "Reactivate",
    goal: "Reduce dormancy rate",
  },
  {
    stage: "Relationship",
    type: "HNI portfolio review",
    content: "Performance, exclusive access, RM contact",
    cta: "Schedule Review",
    goal: "Deepen HNI relationship",
  },
];

// -- FAQ ------------------------------------------------------------------
const FAQS = [
  {
    q: "How does RCS help Indian banks reduce fraud?",
    a: "RCS Business Messaging eliminates the spoofed Sender ID attack vector that drives most banking SMS fraud in India. Every RCS message is sent through Google's verified RBM platform with the bank's verified name, logo, and a verification indicator- which cannot be replicated by fraudsters. Banks report 43% reductions in phishing-related support calls within 6 months of RCS launch as customers learn to distinguish verified RCS messages from fraudulent SMS.",
  },
  {
    q: "Do banks need TRAI DLT registration for RCS messaging?",
    a: "No. RCS Business Messaging is not classified as commercial SMS under TRAI's Telecom Commercial Communications Customer Preference Regulations. Banks do not need DLT entity registration, Sender ID registration, or template pre-approval with TRAI for RCS messages. Banks must complete Google's brand verification process instead- which Get Click Media handles as part of onboarding. If banks also send SMS (for fallback or other use cases), DLT registration remains mandatory for those SMS messages.",
  },
  {
    q: "Can banks send RCS messages to DND-registered customers?",
    a: "Yes. RCS is not subject to TRAI's DND (Do Not Disturb) restrictions that limit promotional SMS. Banks can send marketing RCS messages to DND-registered customers- including credit card offers, loan campaigns, and investment product promotions- as long as standard marketing consent is in place. This is a significant regulatory advantage over promotional SMS, which cannot legally reach DND-registered numbers.",
  },
  {
    q: "Can RCS be used for real-time fraud alerts in banking?",
    a: "Yes. Real-time fraud alerts are one of RCS's highest-value banking applications. Get Click Media's API supports sub-second trigger-to-delivery for transaction-triggered messages. A fraud alert RCS message with quick-reply chips ('Yes, this was me' / 'No, block this transaction') achieves 68% customer response rates vs 11% for equivalent SMS alerts- dramatically improving fraud detection speed and reducing false positive freezes.",
  },
  {
    q: "Is RCS compliant with RBI guidelines for digital banking communication?",
    a: "RCS messaging, when properly implemented, aligns with RBI's digital communication guidelines for financial services. Key compliance requirements that apply to RCS include: customer consent for marketing communication, opt-out management, no transmission of sensitive payment card data in messages, and data security for personal financial information. Get Click Media's platform addresses all of these requirements, with India-hosted infrastructure and DPDP 2023-aligned data handling.",
  },
  {
    q: "How does RCS handle SMS fallback for rural banking customers?",
    a: "For banking customers in rural and semi-urban areas- who may be on BSNL, on 2G connectivity, or using feature phones- RCS automatically falls back to SMS. Get Click Media's platform detects device capability in real time and routes to SMS when RCS is unavailable. Banks define both the RCS version and the SMS fallback version in a single campaign setup. The SMS fallback is billed at standard SMS rates. This ensures that compliance-critical communication (KYC reminders, EMI alerts) reaches 100% of customers regardless of device or network.",
  },
  {
    q: "What is the typical ROI for a bank deploying RCS?",
    a: "ROI varies by use case. Credit card acquisition campaigns typically show 4x to 6x higher application rates vs SMS at comparable cost per message- translating to 70–80% lower cost per activated card. Personal loan campaigns show similar conversion improvement. EMI reminder campaigns improve on-time payment rates by 20+ percentage points, directly reducing provisioning costs. For a mid-size Indian private bank sending 50 lakh messages per month, switching from SMS to RCS typically delivers ₹2–5 crore per month in improved conversion value.",
  },
  {
    q: "Does RCS work for NBFCs as well as banks?",
    a: "Yes. Any Indian financial services company- bank, NBFC, insurance company, stockbroker, wealth manager, or fintech- can use RCS Business Messaging through Get Click Media. The Google brand verification process requires a legitimate registered business entity, which all licensed BFSI companies have. NBFCs often achieve higher RCS ROI than banks because their cost of customer acquisition is higher and the uplift from verified, visual messaging is proportionally more valuable.",
  },
];

/* -- Page ------------------------------------------------------------------ */
export default function RCSBankingPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* -----------------------------------------------------------------
          HERO- with breadcrumb inside
      ----------------------------------------------------------------- */}
      <section className="relative overflow-hidden mt-2 bg-white bg-[radial-gradient(130%_130%_at_100%_100%,#5b7fe8_0%,#93aef0_25%,#d6e2ff_55%,#ffffff_85%)] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          {/* -- BREADCRUMB INSIDE HERO WITH VISIBLE BACKGROUND -- */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-gray-500 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-gray-300">
                /
              </li>
              <li>
                <Link
                  href="/rcs-messaging"
                  className="hover:text-gray-900 transition-colors"
                >
                  RCS Messaging
                </Link>
              </li>
              <li aria-hidden className="text-gray-300">
                /
              </li>
              <li className="text-gray-900 font-medium">RCS for Banking</li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
                Banking &amp; BFSI RCS Messaging
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                RCS Messaging for
                <br />
                <span className="text-[#2563eb]">
                  Banking &amp; Financial Services in India
                </span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Banking and financial services communication in India has a
                trust problem. RCS Business Messaging solves it with
                Google-verified brand identity- your bank&apos;s name, logo,
                and verification checkmark on every message. Anti-phishing built
                into the channel itself.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Talk to Our Banking Team
                </Link>
              </div>

              <div className="bg-blue-50/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100 max-w-md mx-auto lg:mx-0">
                <p className="text-gray-700 text-sm font-medium">
                  <span className="text-[#2563eb] font-bold">Key result:</span>{" "}
                  Banks using RCS report
                  <span className="text-gray-900 font-bold">
                    {" "}
                    43% fewer phishing support calls
                  </span>{" "}
                  and
                  <span className="text-gray-900 font-bold">
                    {" "}
                    4x–6x higher loan application rates
                  </span>{" "}
                  vs SMS.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[50%] shrink-0">
              <div className="w-full">
                <Image
                  src="/images/rcs/banking-hero.png"
                  alt="RCS Banking messaging showing verified bank messages on mobile phone"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
            {[
              { value: "4x–6x", label: "Higher loan application rate vs SMS" },
              { value: "89%", label: "Read rate for banking RCS messages" },
              {
                value: "43%",
                label: "Reduction in phishing-related support calls",
              },
              { value: "0", label: "DND restrictions on RCS vs SMS" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-extrabold text-[#2563eb] font-(family-name:--font-syne)">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- WHY BANKING NEEDS RCS ----------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="why-banking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/rcs/banking-why-rcs.webp"
                alt="Banking messaging comparison- SMS vs RCS visual with verified sender"
                width={700}
                height={525}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
                Why Banking Needs RCS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight font-(family-name:--font-syne)">
                Why Indian Banking Communication Needs to Move to RCS
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <h4 className="text-sm font-bold text-red-600 mb-2">
                    ✕ The SMS trust crisis in Indian banking
                  </h4>
                  <p className="text-sm text-gray-600">
                    India&apos;s banking sector loses an estimated ₹1,000 crore
                    annually to SMS-based financial fraud. Banks have had their
                    Sender IDs spoofed by fraudsters. RCS addresses this with
                    verified sender identity- your bank&apos;s logo, name, and
                    Google-verified checkmark on every message.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <h4 className="text-sm font-bold text-green-600 mb-2">
                    ✓ DND exemption- a regulatory advantage
                  </h4>
                  <p className="text-sm text-gray-600">
                    RCS is not classified as commercial SMS under TRAI
                    regulations. Banks can send pre-approved loan offers at 7 AM
                    to DND-registered customers- with full brand verification.
                    No 9 AM–9 PM window restriction.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-600 mb-2">
                    ✓ The product discovery gap in banking messaging
                  </h4>
                  <p className="text-sm text-gray-600">
                    A 160-character SMS cannot present the features of a
                    financial product. RCS rich cards show the card image,
                    welcome bonus, key benefits, and an Apply Now button-
                    product discovery in the messaging inbox.
                  </p>
                </div>
              </div>

              <div className="bg-[#0f172a] rounded-xl p-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="text-[#38bdf8] font-bold">
                    The opportunity:
                  </span>{" "}
                  Indian banking customers are conditioned to distrust
                  unverified SMS. RCS restores trust through verified sender
                  identity- and delivers
                  <span className="text-white font-bold">
                    {" "}
                    4x–6x higher conversion rates
                  </span>{" "}
                  than SMS for credit cards and loans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- 10 USE CASES ---------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Banking Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              10 High-Impact RCS Use Cases for Indian Banks &amp; BFSI
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Here are the 10 most effective ways Indian banks, NBFCs, and
              financial institutions are using RCS messaging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {BANKING_USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <uc.icon className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <h3 className="text-base font-bold text-gray-900 font-(family-name:--font-syne)">
                    {uc.title}
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-gray-700">
                      Trigger:
                    </span>{" "}
                    <span className="text-gray-500">{uc.scenario}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      RCS format:
                    </span>{" "}
                    <span className="text-gray-500">{uc.solution}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Result:</span>{" "}
                    <span className="text-gray-500">{uc.result}</span>
                  </p>
                </div>
                <div className="relative w-full aspect-[4/3] mt-2 rounded-lg overflow-hidden">
                  <Image
                    src={uc.image}
                    alt={`RCS banking use case: ${uc.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- COMPLIANCE ------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white" id="compliance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Compliance Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Compliance for Indian Banking &amp; BFSI
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              Compliance is non-negotiable for Indian financial services
              communication. Here is the complete regulatory picture for RCS
              messaging in the BFSI sector.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">
                    Regulation
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    What it covers
                  </th>
                  <th className="text-center px-4 py-4 font-semibold">
                    Applies to RCS?
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    GCM handles
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPLIANCE_TABLE.map((row, i) => (
                  <tr
                    key={row.regulation}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      {row.regulation}
                    </td>
                    <td className="px-4 py-3.5 text-gray-600 text-xs">
                      {row.covers}
                    </td>
                    <td
                      className={`px-4 py-3.5 text-center text-xs ${row.applies.includes("No") ? "text-green-600 font-medium" : "text-amber-600"}`}
                    >
                      {row.applies}
                    </td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs">
                      {row.handled}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <p className="text-sm text-blue-700">
              <span className="font-bold">Key compliance insight:</span> RCS
              offers Indian banks a significant compliance advantage over
              promotional SMS: no DLT registration required for RCS message
              content, no DND restrictions, and no 9 AM–9 PM sending window.
              Banks can run pre-approved loan campaigns at 7 AM to customers on
              the DND registry- legally and with full brand verification.
            </p>
          </div>
        </div>
      </section>

      {/* -- ANTI-PHISHING -------------------------------------------------- */}
      <section className="py-20 sm:py-28 bg-[#0f172a]" id="anti-phishing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
                Anti-Phishing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-(family-name:--font-syne)">
                RCS Verified Sender: The Most Powerful Anti-Phishing Tool in
                Indian Banking
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                SMS phishing (smishing) targeting Indian bank customers is a
                ₹1,000+ crore annual problem. RCS eliminates this attack vector
                entirely through Google&apos;s brand verification process.
              </p>
              <ul className="space-y-3">
                {[
                  "Every business must submit identity documentation to Google for explicit approval",
                  "Brand name, logo, and 'verified' indicator appear on every message- impossible to replicate",
                  "Carrier network routes RCS through verified platform- spoofed messages cannot reach customers",
                  "Customers begin to recognise verification signal and become sceptical of unverified communications",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <CheckCheck className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="text-[#38bdf8] font-bold">Result:</span>{" "}
                  Banks running RCS report
                  <span className="text-white font-bold">
                    {" "}
                    43% reductions
                  </span>{" "}
                  in phishing-related inbound support calls within 6 months of
                  RCS launch- as customers learn to distinguish verified RCS
                  messages from fraudulent SMS.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[44%] shrink-0">
              <Image
                src="/images/rcs/banking-anti-phishing.webp"
                alt="RCS verified sender anti-phishing protection for banking"
                width={700}
                height={525}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -- LIFECYCLE ------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white" id="lifecycle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Customer Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Across the Full Banking Customer Lifecycle
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">
                    Lifecycle Stage
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    RCS Message Type
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    Key Content
                  </th>
                  <th className="text-center px-4 py-4 font-semibold">
                    CTA Button
                  </th>
                  <th className="text-left px-4 py-4 font-semibold">
                    Business Goal
                  </th>
                </tr>
              </thead>
              <tbody>
                {LIFECYCLE_STAGES.map((row, i) => (
                  <tr
                    key={row.stage}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      {row.stage}
                    </td>
                    <td className="px-4 py-3.5 text-gray-600 text-xs">
                      {row.type}
                    </td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs">
                      {row.content}
                    </td>
                    <td className="px-4 py-3.5 text-center text-[#2563eb] font-medium text-xs">
                      {row.cta}
                    </td>
                    <td className="px-4 py-3.5 text-gray-500 text-xs">
                      {row.goal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -- PERFORMANCE BENCHMARKS ----------------------------------------- */}
      <section className="py-20 sm:py-28 bg-gray-50" id="performance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Performance Benchmarks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS vs SMS: Banking Campaign Performance Benchmarks
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#0f172a] text-white text-xs uppercase tracking-wider">
                  <th className="text-left px-5 py-4 font-semibold">
                    Campaign Type
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-red-400">
                    SMS Performance
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-[#38bdf8]">
                    RCS Performance
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-green-400">
                    Uplift
                  </th>
                </tr>
              </thead>
              <tbody>
                {PERFORMANCE_DATA.map((row, i) => (
                  <tr
                    key={row.metric}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-5 py-3.5 font-medium text-gray-900">
                      {row.metric}
                    </td>
                    <td className="px-4 py-3.5 text-center text-red-400">
                      {row.sms}
                    </td>
                    <td className="px-4 py-3.5 text-center text-[#38bdf8]">
                      {row.rcs}
                    </td>
                    <td className="px-4 py-3.5 text-center text-green-600 font-medium">
                      {row.uplift}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            Data note: Performance figures are based on aggregated data from
            Indian BFSI RCS deployments. Actual performance varies by product
            type, customer segment, message quality, and send timing.
          </p>
        </div>
      </section>

      {/* -- BFSI SEGMENT STRATEGIES --------------------------------------- */}
      <section className="py-20 sm:py-28 bg-white" id="segments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              BFSI Segment Strategies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Messaging Strategy by BFSI Segment
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SEGMENT_STRATEGIES.map((s) => (
              <div
                key={s.segment}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-3 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-bold text-[#2563eb] font-(family-name:--font-syne)">
                  {s.segment}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="font-semibold">Priority use cases:</span>{" "}
                  {s.useCases}
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold text-gray-700">
                      Key priority:
                    </span>{" "}
                    {s.priority}
                  </p>
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
                Why Indian Banks and NBFCs Choose Get Click Media for RCS
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "RBI-aligned compliance framework",
                    desc: "India-hosted infrastructure, templates reviewed for RBI digital communication guidelines, SEBI-mandated disclosure text insertion for investment products.",
                  },
                  {
                    title: "Direct Jio and Airtel carrier integration",
                    desc: "Fastest delivery, most accurate capability detection, lowest SMS fallback rates- critical for fraud alerts where latency matters in seconds.",
                  },
                  {
                    title: "Real-time API for transaction-triggered messaging",
                    desc: "Sub-second trigger-to-delivery latency. Supports concurrent high-volume API calls with SLAs for financial services.",
                  },
                  {
                    title: "Dedicated BFSI account management",
                    desc: "Account managers with specific financial services experience. Understand regulatory environment, CRM systems, and compliance review processes.",
                  },
                  {
                    title: "Proven performance with Indian financial brands",
                    desc: "Deployed RCS campaigns for banking, NBFC, and insurance clients across India. Anonymised performance benchmarks from comparable institutions.",
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCheck className="w-3 h-3 text-white" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {p.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-[44%] shrink-0">
              <Image
                src="/images/rcs/banking-dashboard.webp"
                alt="Get Click Media RCS banking dashboard analytics"
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              RCS Messaging for Indian Banking
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/5">
                <Image
                  src="/images/rcs/banking-dashboard.webp"
                  alt="Ask a question about RCS messaging for banking"
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
                    <span className="text-sm font-semibold text-gray-900 leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
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
                Ready to deploy RCS for your bank or NBFC?
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Get Click Media handles Google brand verification, compliance
                review, and campaign setup. Most BFSI clients are live within
                7–10 business days.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Talk to Our Banking Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
