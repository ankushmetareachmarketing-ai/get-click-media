import React from 'react'
import PageHero from '../components/PageHero'

const page = () => {
  return (
    <div>
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
    </div>
  )
}

export default page
