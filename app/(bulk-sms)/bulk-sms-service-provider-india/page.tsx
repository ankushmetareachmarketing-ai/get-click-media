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

export const metadata = {
  title: "Bulk SMS Service Provider in India | Get Click Media",
  description:
    "India's most reliable bulk SMS platform. Send OTPs, promotional & transactional SMS at scale with 99.9% delivery uptime. Trusted by 25K+ businesses.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bulk SMS Service Provider in India",
  "provider": { "@type": "Organization", "name": "Get Click Media", "url": "https://getclickmedia.com" },
  "areaServed": { "@type": "Country", "name": "India" },
  "serviceType": "Bulk SMS",
  "description": "Reliable bulk SMS service for transactional and promotional messaging in India with TRAI DLT compliance support, 99.9% delivery rate, and 24/7 support.",
};

export default function BulkSmsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
        imageSrc="https://exotel-strapi-s3-bucket.s3.ap-south-1.amazonaws.com/bulk_sms_service_providers_188957f37d.jpg"
        imageAlt="Bulk SMS Service Provider in India"
      />
      <BulkSmsTrustBar />
      <WhatIsBulkSMS />
      <BulkSmsFeatures />
      <BulkSmsUseCases />
      <BulkSmsHowItWorks />
      <BulkSmsPricing />
      <BulkSmsDLTCompliance />
      <BulkSmsFAQ />
      <BulkSmsFinalCTA />
    </div>
  );
}
