import type { Metadata } from "next";
import DarkHero from "@/app/components/DarkHero";
import ContactFormSection from "./ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Get Click Media",
  description:
    "Talk to Get Click Media about WhatsApp, RCS, or SMS Business Messaging. Book a free demo- our team replies within 24 hours.",
  alternates: { canonical: "https://getclickmedia.com/contact" },
  openGraph: {
    title: "Contact Get Click Media",
    description:
      "Talk to our team about WhatsApp, RCS, or SMS Business Messaging. Book a free demo- replies within 24 hours.",
    url: "https://getclickmedia.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <DarkHero
        theme="gradient"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Talk to Get Click Media"
        title="Book a Free Demo"
        highlight="with Our Team"
        description="Tell us what you're trying to achieve on WhatsApp, RCS, or SMS- a specialist will follow up with a tailored walkthrough and pricing."
        primaryCta={{ label: "Fill the Form Below", href: "#contact-form" }}
        imageSrc="/images/ask-question-whatsapp-api.png"
        imageAlt="Get Click Media team ready to help with your messaging campaign"
        trustLine="Trusted by 10,000+ businesses across India"
      />
      <ContactFormSection />
    </>
  );
}
