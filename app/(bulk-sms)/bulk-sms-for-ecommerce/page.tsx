import type { Metadata } from "next";
import {
  ShoppingCart,
  Package,
  KeyRound,
  Truck,
  RotateCcw,
  Tag,
  Database,
  ShieldCheck,
  Globe,
  Clock,
  BadgeCheck,
  Bell,
} from "lucide-react";
import { IndustryPageTemplate } from "../_templates/industry-page-template";

export const metadata: Metadata = {
  title: "Bulk SMS for Ecommerce- Order & Delivery Alerts India | Get Click Media",
  description:
    "Bulk SMS for ecommerce brands in India automates order confirmations, checkout OTPs, shipping and delivery updates, COD verification, and cart abandonment reminders- DLT compliant.",
  keywords:
    "bulk sms for ecommerce, sms for online store india, order confirmation sms, delivery update sms, cart abandonment sms, cod verification sms",
  alternates: { canonical: "https://getclickmedia.com/bulk-sms-for-ecommerce" },
  openGraph: {
    title: "Bulk SMS for Ecommerce- Order & Delivery Alerts India",
    description:
      "Automate order confirmations, checkout OTPs, delivery updates, and cart abandonment reminders with DLT-compliant bulk SMS for ecommerce.",
    url: "https://getclickmedia.com/bulk-sms-for-ecommerce",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://getclickmedia.com/#org",
      name: "Get Click Media",
      url: "https://getclickmedia.com",
      logo: { "@type": "ImageObject", url: "https://getclickmedia.com/images/gcm-logo.png" },
      address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    },
    {
      "@type": "Service",
      name: "Bulk SMS for Ecommerce India",
      provider: { "@id": "https://getclickmedia.com/#org" },
      areaServed: { "@type": "Country", name: "India" },
      url: "https://getclickmedia.com/bulk-sms-for-ecommerce",
      description:
        "Bulk SMS for ecommerce brands automates order confirmations, checkout OTPs, shipping and delivery updates, COD verification, and cart abandonment reminders with DLT-compliant delivery.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
        { "@type": "ListItem", position: 2, name: "Bulk SMS Services", item: "https://getclickmedia.com/bulk-sms-service-provider-india" },
        { "@type": "ListItem", position: 3, name: "Bulk SMS for Ecommerce", item: "https://getclickmedia.com/bulk-sms-for-ecommerce" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does SMS reduce COD order return rates for ecommerce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A COD confirmation SMS sent right after checkout- asking the customer to reply or click a link to confirm the order- filters out fake, mistaken, or impulse COD orders before they enter the fulfilment pipeline. Sellers running COD confirmation SMS see fewer RTO (return-to-origin) shipments, since unconfirmed orders can be flagged or held before a courier is dispatched.",
          },
        },
        {
          "@type": "Question",
          name: "Is cart abandonment SMS allowed under Indian SMS regulations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cart abandonment reminders are promotional/marketing content, so they must be sent on the promotional SMS route to numbers not registered on DND, with prior consent captured at checkout or account signup. This is different from an order-confirmation or shipping-update SMS, which is transactional and can reach DND numbers. Get Click Media configures both routes correctly so cart-recovery campaigns stay compliant.",
          },
        },
        {
          "@type": "Question",
          name: "Why use SMS for order updates when the marketplace app already sends notifications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not every ecommerce buyer has the seller's own app installed- many shop through marketplaces, WhatsApp catalogues, or a website checkout with no app at all. SMS order-confirmation and delivery-update alerts reach every buyer regardless of which app (if any) they used to purchase, which is why most D2C and marketplace sellers run SMS as their baseline order-communication channel.",
          },
        },
        {
          "@type": "Question",
          name: "Can ecommerce brands send checkout OTPs by SMS at scale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes- checkout and login OTPs are high-volume, latency-sensitive transactional SMS, and Get Click Media routes them over direct operator connections for fast, reliable delivery even during flash-sale traffic spikes when OTP volume can jump sharply within minutes.",
          },
        },
      ],
    },
  ],
};

const USE_CASES = [
  {
    icon: KeyRound,
    title: "Checkout & Login OTP",
    trigger: "Customer initiates checkout, login, or account verification",
    message: "OTP with a short expiry window, delivered over a direct operator route built for traffic spikes.",
    result: "Reliable OTP delivery even during flash sales, when volume can spike within minutes.",
  },
  {
    icon: ShoppingCart,
    title: "Order Confirmation & COD Verification",
    trigger: "Order placed, especially cash-on-delivery orders",
    message: "Order summary with a confirm-order link or reply-to-confirm prompt for COD orders.",
    result: "Fewer fake or mistaken COD orders reaching the fulfilment pipeline, lower RTO rate.",
  },
  {
    icon: Truck,
    title: "Shipping & Delivery Update Sequence",
    trigger: "Order shipped, out for delivery, or delivered",
    message: "Status update with tracking link at each stage, plus a delivery-day heads-up SMS.",
    result: "Fewer 'where is my order' support tickets and missed-delivery reattempts.",
  },
  {
    icon: RotateCcw,
    title: "Return & Refund Status Alert",
    trigger: "Return initiated, pickup scheduled, or refund processed",
    message: "Status update at each step, including refund amount and expected credit timeline.",
    result: "Reduced support load from customers checking on return or refund status.",
  },
  {
    icon: Tag,
    title: "Cart Abandonment Recovery",
    trigger: "Cart left inactive for a set period without checkout completion",
    message: "Reminder with the cart item and an incentive link, sent on the promotional route to consented, non-DND numbers.",
    result: "Recovered revenue from carts that would otherwise convert to zero.",
  },
  {
    icon: Package,
    title: "Flash Sale & Restock Alert",
    trigger: "Flash sale launch or back-in-stock event for a wishlisted item",
    message: "Time-boxed offer or restock alert sent to the opted-in customer database.",
    result: "Faster initial sales velocity at the start of a sale window.",
  },
];

const PERFORMANCE_DATA = [
  { metric: "COD RTO (return-to-origin) rate", before: "22%", after: "13% (COD confirmation SMS)", source: "GCM ecommerce client data" },
  { metric: "'Where is my order' support tickets", before: "Baseline", after: "35% reduction (SMS tracking updates)", source: "GCM client support data" },
  { metric: "Cart abandonment recovery rate", before: "2-3% (email only)", after: "8-10% (SMS + email)", source: "GCM cart-recovery campaign data" },
  { metric: "OTP delivery during flash-sale traffic spikes", before: "—", after: "99.9% (direct operator route)", source: "GCM platform delivery reports" },
  { metric: "Missed-delivery reattempts", before: "18%", after: "9% (delivery-day heads-up SMS)", source: "GCM logistics partner data" },
];

const CAPABILITIES = [
  { icon: Database, title: "Ecommerce platform integration", desc: "Native plugins and API integration with Shopify, WooCommerce, Magento, and custom checkout stacks" },
  { icon: ShieldCheck, title: "DLT-registered dual-route templates", desc: "Transactional templates for order and OTP alerts, promotional templates for cart recovery and offers- both DLT-registered" },
  { icon: Globe, title: "PAN-India delivery network", desc: "Multi-operator routing for consistent delivery to buyers across metro and Tier 2/3 pin codes" },
  { icon: Clock, title: "Flash-sale-ready OTP routing", desc: "Direct operator connectivity built to handle sharp OTP volume spikes during sale events without delivery lag" },
  { icon: Bell, title: "Logistics partner webhooks", desc: "Real-time integration with courier and 3PL tracking APIs for shipped, out-for-delivery, and delivered triggers" },
  { icon: BadgeCheck, title: "Sender ID approval support", desc: "GCM manages your brand's approved sender ID so order updates are instantly recognisable to customers" },
];

const FAQS = [
  {
    q: "How does SMS reduce COD order return rates for ecommerce?",
    a: "A COD confirmation SMS sent right after checkout- asking the customer to reply or click a link to confirm the order- filters out fake, mistaken, or impulse COD orders before they enter the fulfilment pipeline. Sellers running COD confirmation SMS see fewer RTO (return-to-origin) shipments, since unconfirmed orders can be flagged or held before a courier is dispatched.",
  },
  {
    q: "Is cart abandonment SMS allowed under Indian SMS regulations?",
    a: "Cart abandonment reminders are promotional/marketing content, so they must be sent on the promotional SMS route to numbers not registered on DND, with prior consent captured at checkout or account signup. This is different from an order-confirmation or shipping-update SMS, which is transactional and can reach DND numbers. Get Click Media configures both routes correctly so cart-recovery campaigns stay compliant.",
  },
  {
    q: "Why use SMS for order updates when the marketplace app already sends notifications?",
    a: "Not every ecommerce buyer has the seller's own app installed- many shop through marketplaces, WhatsApp catalogues, or a website checkout with no app at all. SMS order-confirmation and delivery-update alerts reach every buyer regardless of which app (if any) they used to purchase, which is why most D2C and marketplace sellers run SMS as their baseline order-communication channel.",
  },
  {
    q: "Can ecommerce brands send checkout OTPs by SMS at scale?",
    a: "Yes- checkout and login OTPs are high-volume, latency-sensitive transactional SMS, and Get Click Media routes them over direct operator connections for fast, reliable delivery even during flash-sale traffic spikes when OTP volume can jump sharply within minutes.",
  },
];

const RELATED_LINKS = [
  { label: "Transactional SMS Service", href: "/transactional-sms-service" },
  { label: "OTP SMS Service Provider", href: "/otp-sms-service-provider" },
  { label: "Bulk SMS Service Provider India", href: "/bulk-sms-service-provider-india" },
  { label: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
  { label: "OTP SMS Pricing", href: "/otp-sms-pricing" },
  { label: "RCS for E-commerce", href: "/rcs-for-ecommerce" },
  { label: "WhatsApp API for E-commerce", href: "/whatsapp-api-ecommerce" },
  { label: "Bulk SMS for Travel Agencies", href: "/bulk-sms-for-travel-industry" },
];

export default function BulkSmsForEcommercePage() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Ecommerce"
      heroEyebrow="Ecommerce Bulk SMS"
      heroTitle="Bulk SMS for Ecommerce and D2C Brands"
      heroHighlight="Order & Delivery Alerts India"
      heroDescription={
        <>
          Automate order confirmations, checkout OTPs, shipping and delivery updates, COD
          verification, and cart abandonment reminders with DLT-compliant bulk SMS built for
          Indian online sellers.{" "}
          <strong className="text-gray-900">
            Get Click Media connects bulk SMS to your ecommerce platform and logistics partners-
            cutting COD returns and 'where is my order' support tickets.
          </strong>
        </>
      }
      heroImage="/images/bulk-sms/small_Covering_All_Your_SMS_Needs_Be_It_Promotional_Or_Transactional_85a655ff7b.webp"
      heroImageAlt="Bulk SMS for Ecommerce- order and delivery alert dashboard"
      heroTrustLine="TRAI DLT registered · Ecommerce platform integration · Logistics partner webhooks · 99.9% uptime"
      stats={[
        { value: "99.9%", label: "SMS delivery uptime" },
        { value: "13%", label: "Average COD RTO rate (post-SMS)" },
        { value: "35%", label: "Fewer order-status support tickets" },
        { value: "₹0.09", label: "Starting price per SMS" },
      ]}
      aeoParagraph={
        <>
          Bulk SMS for ecommerce automates order confirmations, checkout OTPs, shipping and
          delivery updates, COD verification, and cart abandonment reminders for online buyers.{" "}
          <strong className="text-gray-900">Get Click Media integrates bulk SMS with Shopify, WooCommerce, and courier tracking APIs</strong>{" "}
          in India- reducing COD return rates and order-status support volume.
        </>
      }
      insightCallout={
        <>
          Ecommerce buyers in India span every kind of shopper- app users, marketplace
          browsers, and COD-first buyers who've never entered a card number online. SMS is the
          one channel that reaches every one of them at each order milestone, without depending
          on which app or platform they used to check out.
        </>
      }
      whyIndustryTitle="Why Ecommerce Brands in India Need Bulk SMS"
      whyIndustryParagraphs={[
        <>
          Cash-on-delivery still accounts for a large share of Indian ecommerce orders, which
          means order confirmation can't be assumed- it has to be verified. A quick COD
          confirmation SMS catches fake and mistaken orders before a courier is dispatched,
          directly cutting the return-to-origin shipments that erode seller margins.
        </>,
        <>
          Beyond COD, delivery anxiety drives a large share of ecommerce support volume. A simple
          shipped-out-for-delivery-delivered SMS sequence answers the "where is my order"
          question before the customer has to ask it, freeing support teams to handle actual
          issues instead of status lookups.
        </>,
      ]}
      whyIndustryInsight={
        <>
          💡 <strong>Key insight:</strong> Sellers running a COD confirmation SMS step before
          dispatch consistently see lower RTO rates than sellers who ship every COD order as
          placed- because unconfirmed or accidental orders get caught before they cost a courier
          run.
        </>
      }
      imageSections={[
        {
          eyebrow: "Order Communication Hub",
          title: (
            <>
              One dashboard for orders, OTPs <span className="text-[#2563eb]">and delivery updates</span>
            </>
          ),
          description:
            "Manage every buyer touchpoint- checkout OTPs, order confirmations, COD verification, shipping updates, and cart recovery- from a single SMS dashboard connected to your store and logistics partners.",
          bullets: [
            "Triggered SMS from platform order events",
            "COD confirmation before dispatch",
            "Courier webhook integration for tracking updates",
            "Real-time delivery and read-rate reports",
          ],
          image: "/images/bulk-sms/bulk-sms-service-provider-india-hero.webp",
          imageAlt: "Bulk SMS dashboard for ecommerce- order, OTP, and delivery alerts",
        },
        {
          eyebrow: "Delivery Update Automation",
          title: (
            <>
              A tracking sequence <span className="text-[#2563eb]">that cuts support tickets</span>
            </>
          ),
          description:
            "Every order triggers a shipped alert, an out-for-delivery notice on delivery day, and a delivered confirmation- each with a live tracking link- so customers stop messaging support to ask where their order is.",
          bullets: [
            "Shipped confirmation with tracking link",
            "Delivery-day heads-up SMS",
            "Delivered confirmation",
            "Missed-delivery reattempt alert",
          ],
          image: "/images/bulk-sms/transactional-sms-india.webp",
          imageAlt: "Ecommerce delivery update SMS sequence preview",
          imageSide: "left",
        },
      ]}
      useCasesTitle="Bulk SMS Use Cases for Ecommerce- 6 Automations"
      useCases={USE_CASES}
      performanceData={PERFORMANCE_DATA}
      capabilitiesTitle="Get Click Media's Bulk SMS Capabilities for Ecommerce"
      capabilities={CAPABILITIES}
      faqs={FAQS}
      relatedLinks={RELATED_LINKS}
      bottomCtaTitle="Ready to cut RTO and support tickets with bulk SMS?"
      bottomCtaDescription="Get Click Media provides DLT-compliant bulk SMS for ecommerce brands with platform integration and logistics partner webhooks."
      schema={schema}
    />
  );
}
