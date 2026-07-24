import PageHero from "@/app/components/PageHero";
import TransactionalSmsTrustBar from "@/app/components/transactional-sms/TransactionalSmsTrustBar";
import WhatIsTransactionalSMS from "@/app/components/transactional-sms/WhatIsTransactionalSMS";
import TransactionalSmsFeatures from "@/app/components/transactional-sms/TransactionalSmsFeatures";
import TransactionalSmsUseCases from "@/app/components/transactional-sms/TransactionalSmsUseCases";
import TransactionalSmsHowItWorks from "@/app/components/transactional-sms/TransactionalSmsHowItWorks";
import TransactionalSmsPricing from "@/app/components/transactional-sms/TransactionalSmsPricing";
import TransactionalSmsDLTCompliance from "@/app/components/transactional-sms/TransactionalSmsDLTCompliance";
import TransactionalSmsFAQ from "@/app/components/transactional-sms/TransactionalSmsFAQ";
import TransactionalSmsFinalCTA from "@/app/components/transactional-sms/TransactionalSmsFinalCTA";
import BulkSmsBrandsStrip from "@/app/components/bulk-sms/BulkSmsBrandsStrip";

export const metadata = {
  title: "Transactional SMS Service in India | Get Click Media",
  description:
    "India's most reliable transactional SMS service. Deliver OTPs, alerts, and service messages to DND and non-DND numbers with 99.9% uptime, TRAI DLT compliance, and 24/7 support. Trusted by 10,000+ businesses.",
  keywords:
    "transactional sms service india, transactional sms provider, transactional sms gateway india, otp sms india, dnd exempt sms, trai dlt transactional sms",
  openGraph: {
    title: "Transactional SMS Service in India | Get Click Media",
    description:
      "DND-exempt transactional SMS for OTPs, alerts & service messages. 99.9% uptime, TRAI DLT compliant, trusted by 10,000+ Indian businesses.",
    type: "website",
    url: "https://getclickmedia.com/transactional-sms-service",
    siteName: "Get Click Media",
    images: [
      {
        url: "https://getclickmedia.com/images/bulk-sms/bulk-sms-service-provider-india-hero.webp",
        width: 1200,
        height: 630,
        alt: "Transactional SMS Service in India- Get Click Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transactional SMS Service in India | Get Click Media",
    description:
      "DND-exempt transactional SMS for OTPs, alerts & service messages. 99.9% uptime, TRAI DLT compliant, trusted by 10,000+ Indian businesses.",
  },
  alternates: {
    canonical: "https://getclickmedia.com/transactional-sms-service",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Transactional SMS Service in India",
  provider: {
    "@type": "Organization",
    name: "Get Click Media",
    url: "https://getclickmedia.com",
    logo: "https://getclickmedia.com/images/gcm-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9667694088",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  },
  areaServed: { "@type": "Country", name: "India" },
  serviceType: "Transactional SMS",
  description:
    "Reliable transactional SMS service for OTPs, alerts, and critical service messages in India. DND-exempt delivery, TRAI DLT compliance support, 99.9% uptime, and 24/7 expert assistance.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "0.09",
    description: "Transactional SMS starting at ₹0.09 per SMS",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://getclickmedia.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Transactional SMS Service in India",
      item: "https://getclickmedia.com/transactional-sms-service",
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Get Click Media",
  url: "https://getclickmedia.com",
  logo: "https://getclickmedia.com/images/gcm-logo.png",
  telephone: "+91-9667694088",
  email: "hello@getclickmedia.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/getclickmedia",
    "https://twitter.com/getclickmedia",
  ],
};

export default function TransactionalSmsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <PageHero
        eyebrow="Transactional SMS Services"
        title="Best Transactional SMS Service Provider in India"
        highlight="Transactional SMS Service Provider"
        description="Send OTPs, account alerts, and critical service messages to every customer- DND or not- with 99.9% delivery uptime and real-time delivery reports across India."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Transactional SMS Service in India" },
        ]}
        primaryCta="Request a Demo"
        secondaryCta="Explore Plans"
        imageSrc="/images/bulk-sms/transactional-sms-service-provider.webp"
        imageAlt="Transactional SMS Service in India- Get Click Media platform dashboard"
      />
      <BulkSmsBrandsStrip />
      <WhatIsTransactionalSMS />
      <TransactionalSmsFeatures />
      <TransactionalSmsUseCases />
      <TransactionalSmsHowItWorks />
      <TransactionalSmsPricing />
      <TransactionalSmsTrustBar />
      <TransactionalSmsDLTCompliance />
      <TransactionalSmsFAQ />
      <TransactionalSmsFinalCTA />
    </div>
  );
}
