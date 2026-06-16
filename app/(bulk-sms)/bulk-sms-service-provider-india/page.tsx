import PageHero from "@/app/components/PageHero";
import BulkSmsTrustBar from "@/app/components/bulk-sms/BulkSmsTrustBar";
import WhatIsBulkSMS from "@/app/components/bulk-sms/WhatIsBulkSMS";
import BulkSmsFeatures from "@/app/components/bulk-sms/BulkSmsFeatures";
import BulkSmsUseCases from "@/app/components/bulk-sms/BulkSmsUseCases";
import BulkSmsHowItWorks from "@/app/components/bulk-sms/BulkSmsHowItWorks";
import BulkSmsPricing from "@/app/components/bulk-sms/BulkSmsPricing";
import BulkSmsDLTCompliance from "@/app/components/bulk-sms/BulkSmsDLTCompliance";
import BulkSmsFAQ from "@/app/components/bulk-sms/BulkSmsFAQ";
import BulkSmsFinalCTA from "@/app/components/bulk-sms/BulkSmsFinalCTA";
import BulkSmsBrandsStrip from "@/app/components/bulk-sms/BulkSmsBrandsStrip";

export const metadata = {
  title: "Bulk SMS Service Provider in India | Get Click Media",
  description:
    "India's most reliable bulk SMS platform. Send OTPs, promotional & transactional SMS at scale with 99.9% delivery uptime, TRAI DLT compliance support, and 24/7 expert assistance. Trusted by 10,000+ businesses.",
  keywords:
    "bulk sms service provider india, bulk sms india, transactional sms, promotional sms, dlt registration, otp sms service india",
  openGraph: {
    title: "Bulk SMS Service Provider in India | Get Click Media",
    description:
      "Send OTPs, campaigns and alerts at scale. 99.9% uptime, TRAI DLT compliant, trusted by 10,000+ Indian businesses.",
    type: "website",
    url: "https://getclickmedia.com/bulk-sms-service-provider-india",
    siteName: "Get Click Media",
    images: [
      {
        url: "https://getclickmedia.com/images/bulk-sms/bulk-sms-service-provider-india-hero.webp",
        width: 1200,
        height: 630,
        alt: "Bulk SMS Service Provider in India — Get Click Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk SMS Service Provider in India | Get Click Media",
    description:
      "Send OTPs, campaigns and alerts at scale. 99.9% uptime, TRAI DLT compliant, trusted by 10,000+ Indian businesses.",
  },
  alternates: {
    canonical: "https://getclickmedia.com/bulk-sms-service-provider-india",
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
  name: "Bulk SMS Service Provider in India",
  provider: {
    "@type": "Organization",
    name: "Get Click Media",
    url: "https://getclickmedia.com",
    logo: "https://getclickmedia.com/images/gcm-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7669999219",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  },
  areaServed: { "@type": "Country", name: "India" },
  serviceType: "Bulk SMS",
  description:
    "Reliable bulk SMS service for transactional and promotional messaging in India with TRAI DLT compliance support, 99.9% delivery rate, real-time reports, and 24/7 support.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "0.09",
    description: "Bulk SMS starting at ₹0.09 per SMS",
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
      name: "Bulk SMS Service Provider in India",
      item: "https://getclickmedia.com/bulk-sms-service-provider-india",
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Get Click Media",
  url: "https://getclickmedia.com",
  logo: "https://getclickmedia.com/images/gcm-logo.png",
  telephone: "+91-7669999219",
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

export default function BulkSmsPage() {
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
        eyebrow="Bulk SMS Services"
        title="Best Bulk SMS Service Provider in India"
        highlight="Bulk SMS Service Provider"
        description="Reach millions of customers instantly. Deliver OTPs, promotional campaigns, and transactional alerts with 99.9% uptime and real-time delivery reports."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Bulk SMS Service Provider in India" },
        ]}
        primaryCta="Request a Demo"
        secondaryCta="Explore SMS Plans"
        imageSrc="/images/bulk-sms/bulk-sms-service-provider-india-hero.webp"
        imageAlt="Bulk SMS Service Provider in India — Get Click Media platform dashboard"
      />
      <BulkSmsBrandsStrip />
      
      <WhatIsBulkSMS />
      <BulkSmsFeatures />
      <BulkSmsUseCases />
      <BulkSmsHowItWorks />
      <BulkSmsPricing />
      <BulkSmsTrustBar />
      <BulkSmsDLTCompliance />
      <BulkSmsFAQ />
      <BulkSmsFinalCTA />
    </div>
  );
}
