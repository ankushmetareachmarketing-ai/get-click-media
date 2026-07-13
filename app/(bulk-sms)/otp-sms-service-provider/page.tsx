import PageHero from "@/app/components/PageHero";
import OtpSmsTrustBar from "@/app/components/otp-sms/OtpSmsTrustBar";
import WhatIsOtpSMS from "@/app/components/otp-sms/WhatIsOtpSMS";
import OtpSmsFeatures from "@/app/components/otp-sms/OtpSmsFeatures";
import OtpSmsUseCases from "@/app/components/otp-sms/OtpSmsUseCases";
import OtpSmsHowItWorks from "@/app/components/otp-sms/OtpSmsHowItWorks";
import OtpSmsPricing from "@/app/components/otp-sms/OtpSmsPricing";
import OtpSmsDLTCompliance from "@/app/components/otp-sms/OtpSmsDLTCompliance";
import OtpSmsFAQ from "@/app/components/otp-sms/OtpSmsFAQ";
import OtpSmsFinalCTA from "@/app/components/otp-sms/OtpSmsFinalCTA";
import BulkSmsBrandsStrip from "@/app/components/bulk-sms/BulkSmsBrandsStrip";

export const metadata = {
  title: "OTP SMS Service Provider in India | Get Click Media",
  description:
    "India's fastest OTP SMS service. Deliver one-time passwords in under 3 seconds with 99.9% uptime, TRAI DLT compliance support, and transactional route that bypasses DND. Trusted by 10,000+ businesses.",
  keywords:
    "otp sms service provider india, otp sms india, otp sms gateway, transactional otp sms, sms otp verification india, otp delivery service",
  openGraph: {
    title: "OTP SMS Service Provider in India | Get Click Media",
    description:
      "Deliver OTPs in under 3 seconds. 99.9% uptime, TRAI DLT compliant, DND-exempt transactional route. Trusted by 10,000+ Indian businesses.",
    type: "website",
    url: "https://getclickmedia.com/otp-sms-service-provider",
    siteName: "Get Click Media",
    images: [
      {
        url: "https://getclickmedia.com/images/bulk-sms/bulk-sms-service-provider-india-hero.webp",
        width: 1200,
        height: 630,
        alt: "OTP SMS Service Provider in India — Get Click Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OTP SMS Service Provider in India | Get Click Media",
    description:
      "Deliver OTPs in under 3 seconds. 99.9% uptime, TRAI DLT compliant, DND-exempt transactional route. Trusted by 10,000+ Indian businesses.",
  },
  alternates: {
    canonical: "https://getclickmedia.com/otp-sms-service-provider",
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
  name: "OTP SMS Service Provider in India",
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
  serviceType: "OTP SMS",
  description:
    "Reliable OTP SMS service for transactional one-time password delivery in India with TRAI DLT compliance support, sub-second delivery, DND-exempt transactional route, and 24/7 support.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "0.09",
    description: "OTP SMS starting at ₹0.09 per SMS",
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
      name: "OTP SMS Service Provider in India",
      item: "https://getclickmedia.com/otp-sms-service-provider",
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

export default function OtpSmsPage() {
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
        eyebrow="OTP SMS Services"
        title="Best OTP SMS Service Provider in India"
        highlight="OTP SMS Service Provider"
        description="Deliver one-time passwords in under 3 seconds. Transactional route bypasses DND filters — every user gets their OTP, every time, with 99.9% delivery uptime."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "OTP SMS Service Provider in India" },
        ]}
        primaryCta="Request a Demo"
        secondaryCta="Explore OTP Plans"
        imageSrc="/images/otp-sms/best-otp-sms-service-provider-india.webp"
        imageAlt="OTP SMS Service Provider in India — Get Click Media platform dashboard"
      />
      <BulkSmsBrandsStrip />

      <WhatIsOtpSMS />
      <OtpSmsFeatures />
      <OtpSmsUseCases />
      <OtpSmsHowItWorks />
      <OtpSmsPricing />
      <OtpSmsTrustBar />
      <OtpSmsDLTCompliance />
      <OtpSmsFAQ />
      <OtpSmsFinalCTA />
    </div>
  );
}
