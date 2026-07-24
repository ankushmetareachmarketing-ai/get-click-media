import type { Metadata } from "next";
import {
  Tag,
  Gift,
  Bell,
  Heart,
  Sparkles,
  Users,
  Database,
  Store,
  Calendar,
  MapPin,
  Building2,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

/* ── SEO Metadata ────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title:
    "WhatsApp API for Retail- Festive Campaigns, Loyalty and Customer Engagement India | Get Click Media",
  description:
    "WhatsApp Business API for retail enables Indian retailers- from large format stores to kirana chains- to automate festive sale campaigns, loyalty programme updates, stock availability alerts, and customer re-engagement.",
  keywords:
    "WhatsApp API for Retail India, WhatsApp Retail India, WhatsApp Loyalty Programme, WhatsApp Festive Sale India, Retail WhatsApp Automation India, WhatsApp for Kiranas India",
  alternates: { canonical: "https://getclickmedia.com/whatsapp-api-retail" },
  openGraph: {
    title:
      "WhatsApp API for Retail- Festive Campaigns, Loyalty and Customer Engagement India",
    description:
      "WhatsApp Business API for retail enables Indian retailers- from large format stores to kirana chains- to automate festive sale campaigns, loyalty programme updates, stock availability alerts, and customer re-engagement.",
    url: "https://getclickmedia.com/whatsapp-api-retail",
    type: "website",
  },
};

/* ── JSON-LD Schema ──────────────────────────────────────────────────────── */
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
    },
    {
      "@type": "Service",
      name: "WhatsApp API for Retail India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/whatsapp-api-retail",
      description:
        "WhatsApp Business API for retail enables Indian retailers- from large format stores to kirana chains- to automate festive sale campaigns, loyalty programme updates, stock availability alerts, and customer re-engagement.",
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
          name: "WhatsApp API for Retail India",
          item: "https://getclickmedia.com/whatsapp-api-retail",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does WhatsApp API improve festive sales for Indian retailers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp festive campaigns deliver product carousels with offer images, discount percentages, and one-tap links to product pages or store directions to opted-in customers. WhatsApp's 98% open rate and 22% CTR dramatically outperform SMS (2-3% CTR) and email (3-5% CTR) for festive announcements. GCM's retail clients consistently achieve 3x festive revenue from WhatsApp campaigns vs single-blast SMS.",
          },
        },
        {
          "@type": "Question",
          name: "Can WhatsApp integrate with retail POS systems in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Get Click Media integrates with Marg ERP, Posist, Lightspeed, and custom POS systems. Every purchase triggers a loyalty points update WhatsApp message. POS inventory triggers new arrival alerts. Billing data enables personalised campaign targeting based on past purchase categories.",
          },
        },
        {
          "@type": "Question",
          name: "How does WhatsApp loyalty programme communication work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every time a customer earns loyalty points (via purchase, referral, or special event), a WhatsApp message is automatically sent with: points earned, total balance, points monetary value, and a [View and Redeem] button. This keeps customers aware of their balance and incentivises return visits. WhatsApp loyalty notifications achieve 60% higher programme awareness than app-based loyalty notifications.",
          },
        },
        {
          "@type": "Question",
          name: "Is WhatsApp suitable for kirana and small retail stores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes- WhatsApp Business API is cost-effective even for kirana chains and small retailers. For a neighbourhood store with 2,000 customers: a single Diwali campaign WhatsApp send costs approximately Rs 1,700 (at Rs 0.85 per conversation) but drives Rs 15,000-25,000 in incremental footfall if well-executed. GCM's Starter plan is designed for small and mid-size retailers entering WhatsApp API for the first time.",
          },
        },
      ],
    },
  ],
};

// ── Retail Use Cases ──────────────────────────────────────────────────────
const USE_CASES = [
  {
    icon: Tag,
    title: "Festive Sale Campaign Launch",
    trigger: "Campaign scheduled 3-5 days before festival date",
    message:
      "Offer image carousel with product categories, discount percentages, validity date, and [Shop Now] or [Visit Store] button with Google Maps link",
    result: "Festive revenue 3x vs single SMS. CTR 22%. Store footfall +35%.",
  },
  {
    icon: Gift,
    title: "Loyalty Programme Points Update",
    trigger: "Purchase completed- points credited to loyalty account",
    message:
      "Points earned this transaction, total balance, points value, redemption threshold, and [View Rewards] button",
    result:
      "Loyalty programme awareness +60%. Points redemption rate +45%. Return visit +28%.",
  },
  {
    icon: Bell,
    title: "New Arrival and Restock Alert",
    trigger: "New product category added to POS inventory or restocked item",
    message:
      "New arrival image, product name, price, and [Reserve Now] or [Visit Store] button. Limited to customers who bought from that category previously.",
    result:
      "New product trial rate 2x vs walk-in only. Targeted relevance reduces opt-out.",
  },
  {
    icon: Heart,
    title: "Birthday and Anniversary Personalised Offer",
    trigger:
      "Customer birthday or shopping anniversary (1 year since first purchase)",
    message:
      "Personalised birthday greeting with exclusive discount code valid for 7 days",
    result:
      "Birthday offer redemption rate 38%. Customer satisfaction +25 points. Brand affinity increased.",
  },
  {
    icon: Sparkles,
    title: "Stock Clearance and Flash Sale",
    trigger: "Excess inventory identified in POS- clearance campaign trigger",
    message:
      "Flash sale: product name, original price, sale price, validity (24 hours), [Buy Now] button. Creates urgency with countdown.",
    result:
      "Clearance sell-through rate +65%. Markdown loss minimised. Cash flow improved.",
  },
  {
    icon: Users,
    title: "Win-Back Campaign- Lapsed Customers",
    trigger: "Customer has not visited or purchased in 90 days",
    message:
      "We miss you message + personalised offer based on past purchase category + [Claim Offer] button",
    result:
      "Lapsed customer reactivation rate 18%. Cost of reactivation 70% lower than new customer acquisition.",
  },
];

// ── Performance Data ──────────────────────────────────────────────────────
const PERFORMANCE_DATA = [
  {
    metric: "Festive campaign CTR",
    before: "2% (SMS)",
    after: "22% (WhatsApp product carousel)",
    source: "GCM retail client India",
  },
  {
    metric: "Loyalty programme engagement",
    before: "15% (email + app)",
    after: "42% (WhatsApp)",
    source: "GCM loyalty integration client",
  },
  {
    metric: "New arrival announcement open rate",
    before: "25% (email)",
    after: "96% (WhatsApp)",
    source: "GCM retail client data",
  },
  {
    metric: "Birthday offer redemption",
    before: "12% (email)",
    after: "38% (WhatsApp personalised)",
    source: "GCM retail client",
  },
  {
    metric: "Lapsed customer reactivation",
    before: "8% (email win-back)",
    after: "18% (WhatsApp win-back)",
    source: "GCM retail client",
  },
];

// ── Capabilities ──────────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    icon: Database,
    title: "POS integration",
    desc: "Marg ERP, Posist, Lightspeed, custom POS- purchase trigger, loyalty credit events",
  },
  {
    icon: Gift,
    title: "Loyalty platform integration",
    desc: "LoyLap, Capillary, custom loyalty- points update triggers, tier upgrade notifications",
  },
  {
    icon: Store,
    title: "Product catalog",
    desc: "Retail product catalog sync- category-based personalised campaign targeting",
  },
  {
    icon: Calendar,
    title: "Festive campaign management",
    desc: "Pre-built festive campaign templates for all major Indian festivals",
  },
  {
    icon: MapPin,
    title: "Store visit attribution",
    desc: "WhatsApp offer code redemption tracking in POS- campaign ROI measurement",
  },
  {
    icon: Building2,
    title: "Kirana chain support",
    desc: "Multi-location WhatsApp management with location-specific offers and inventory",
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "How does WhatsApp API improve festive sales for Indian retailers?",
    a: "WhatsApp festive campaigns deliver product carousels with offer images, discount percentages, and one-tap links to product pages or store directions to opted-in customers. WhatsApp's 98% open rate and 22% CTR dramatically outperform SMS (2-3% CTR) and email (3-5% CTR) for festive announcements. GCM's retail clients consistently achieve 3x festive revenue from WhatsApp campaigns vs single-blast SMS.",
  },
  {
    q: "Can WhatsApp integrate with retail POS systems in India?",
    a: "Yes. Get Click Media integrates with Marg ERP, Posist, Lightspeed, and custom POS systems. Every purchase triggers a loyalty points update WhatsApp message. POS inventory triggers new arrival alerts. Billing data enables personalised campaign targeting based on past purchase categories.",
  },
  {
    q: "How does WhatsApp loyalty programme communication work?",
    a: "Every time a customer earns loyalty points (via purchase, referral, or special event), a WhatsApp message is automatically sent with: points earned, total balance, points monetary value, and a [View and Redeem] button. This keeps customers aware of their balance and incentivises return visits. WhatsApp loyalty notifications achieve 60% higher programme awareness than app-based loyalty notifications.",
  },
  {
    q: "Is WhatsApp suitable for kirana and small retail stores?",
    a: "Yes- WhatsApp Business API is cost-effective even for kirana chains and small retailers. For a neighbourhood store with 2,000 customers: a single Diwali campaign WhatsApp send costs approximately Rs 1,700 (at Rs 0.85 per conversation) but drives Rs 15,000-25,000 in incremental footfall if well-executed. GCM's Starter plan is designed for small and mid-size retailers entering WhatsApp API for the first time.",
  },
];

const RELATED_LINKS = [
  { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
  { label: "WhatsApp Catalog", href: "/whatsapp-catalog" },
  { label: "WhatsApp Automation", href: "/whatsapp-automation" },
  { label: "WhatsApp Marketing Services", href: "/whatsapp-marketing-services" },
  { label: "WhatsApp API Pricing India", href: "/whatsapp-api-pricing-india" },
  { label: "WhatsApp API for Retail", href: "/whatsapp-api-retail" },
  { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
  { label: "WhatsApp API for Real Estate", href: "/whatsapp-api-real-estate" },
  { label: "WhatsApp API for Travel", href: "/whatsapp-api-travel" },
  { label: "WhatsApp vs SMS", href: "/whatsapp-vs-sms" },
];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function WhatsAppAPIRetailPage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Retail"
      heroEyebrow="Retail WhatsApp API"
      heroTitle="WhatsApp Business API for Retail"
      heroHighlight="Festive Campaigns, Loyalty and Customer Engagement India"
      heroDescription={
        <>
          WhatsApp Business API for retail enables Indian retailers- from large format stores to kirana
          chains- to automate festive sale campaigns, loyalty programme updates, stock availability alerts,
          and customer re-engagement.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with POS systems</strong> and
          loyalty platforms- achieving 3x higher festive campaign revenue and 28% higher repeat visit rates.
        </>
      }
      heroImage="/images/whatsapp/retail/whatsapp-api-for-retail.png"
      heroImageAlt="WhatsApp API Retail- RCS product carousel with festive discount offers for grocery and retail customers"
      heroTrustLine="Official Meta BSP · POS & loyalty platform integration · DPDP compliant · India-based support"
      stats={[
        { value: "3x", label: "Festive campaign revenue vs single SMS blast" },
        { value: "28%", label: "Higher repeat visit rate with WhatsApp loyalty" },
        { value: "₹1,850", label: "Average WhatsApp campaign order value" },
        { value: "22%", label: "CTR on WhatsApp product carousels" },
      ]}
      aeoParagraph={
        <>
          WhatsApp Business API for retail enables Indian retailers- from large format stores to kirana
          chains- to automate festive sale campaigns, loyalty programme updates, stock availability alerts,
          and customer re-engagement.
          <strong className="text-gray-900"> Get Click Media integrates WhatsApp with POS systems</strong> and
          loyalty platforms- achieving 3x higher festive campaign revenue and 28% higher repeat visit rates.
        </>
      }
      insightCallout={
        <>
          Indian retail is deeply seasonal- Diwali, Dussehra, Eid, Christmas, and regional festivals drive{" "}
          <strong>40-60% of annual revenue</strong> for many categories. The retailers who communicate Diwali
          offers to their WhatsApp customer list 3 days before launch consistently outperform competitors who
          rely on print, SMS, and email.
        </>
      }
      whyIndustryTitle="Why Retail Businesses in India Need WhatsApp API"
      whyIndustryParagraphs={[
        <>
          Indian retailers collect customer mobile numbers at billing counters but rarely have an effective
          channel to communicate with them. SMS reaches only non-DND numbers with text-only messages.
        </>,
        <>
          WhatsApp reaches opted-in customers with <strong>rich product carousels</strong>, offer images, and
          one-tap store visit or purchase actions. With <strong>3x festive campaign revenue</strong> and{" "}
          <strong>28% higher repeat visit rates</strong>, WhatsApp is rapidly becoming the standard for retail
          customer engagement in India.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> The retailers who communicate Diwali offers to their WhatsApp
          customer list 3 days before launch consistently outperform competitors who rely on print, SMS, and
          email. WhatsApp&apos;s 98% open rate and 22% CTR vs SMS&apos;s 2-3% CTR drives the difference.
        </>
      }
      imageSections={[
        {
          eyebrow: "Retail Customer Engagement Hub",
          title: (
            <>
              Complete WhatsApp API platform <span className="text-[#2563eb]">for retailers and kirana chains</span>
            </>
          ),
          description:
            "Manage all customer communication from a single dashboard- festive campaigns, loyalty programme updates, new arrival alerts, stock clearance, and win-back campaigns- with full integration to your POS and loyalty systems.",
          bullets: [
            "Automated festive campaign carousels with product images",
            "Real-time loyalty points updates after each purchase",
            "Personalised birthday and anniversary offers",
            "Store visit attribution with offer code tracking",
          ],
          image: "/images/whatsapp/retail/whatsapp-api-retail-dashboard.png",
          imageAlt: "WhatsApp API Retail dashboard- festive campaigns, loyalty updates, new arrivals, and win-back campaigns",
        },
        {
          eyebrow: "Festive Campaign Automation",
          title: (
            <>
              WhatsApp festive campaigns <span className="text-[#2563eb]">with product carousels</span>
            </>
          ),
          description:
            "Automated festive campaign carousels with product images, discount percentages, and one-tap links to product pages or store directions. WhatsApp's 98% open rate and 22% CTR dramatically outperform SMS (2-3% CTR) for festive announcements.",
          bullets: [
            "Product carousel with images and discount percentages",
            "One-tap Shop Now button to product pages",
            "Google Maps link for store visits",
            "Pre-built templates for all major Indian festivals",
          ],
          image: "/images/whatsapp/retail/whatsapp-api-retail-festive-campaign.png",
          imageAlt: "WhatsApp retail festive campaign preview- product carousel with Diwali offers, discount percentages, and Shop Now button",
          imageSide: "left",
        },
        {
          eyebrow: "POS & Loyalty Integration",
          title: (
            <>
              Connect WhatsApp with <span className="text-[#2563eb]">your POS and loyalty systems</span>
            </>
          ),
          description:
            "Get Click Media integrates with leading retail POS and loyalty platforms- Marg ERP, Posist, Lightspeed, LoyLap, and Capillary- enabling automated customer communication at every retail touchpoint. Setup takes 3-5 days after WhatsApp API onboarding is complete.",
          bullets: ["Marg ERP", "Posist", "Lightspeed", "LoyLap", "Capillary", "Custom POS"],
          image: "/images/whatsapp/retail/whatsapp-api-retail-pos-loyalty-integration.png",
          imageAlt: "WhatsApp API POS integration- Marg ERP, Posist, Lightspeed for retail customer engagement",
          imageSide: "left",
        },
      ]}
      useCasesTitle="WhatsApp API Use Cases for Retail- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's WhatsApp API Capabilities for Retail"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to transform retail customer engagement with WhatsApp?"
      bottomCtaDescription="Get Click Media provides WhatsApp API for retail with POS and loyalty integration, automated festive campaigns, and personalised customer engagement."
      schema={schema}
    />
  );
}
