"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is bulk SMS service and how does it work in India?",
    answer:
      "Bulk SMS service allows businesses to send thousands of text messages simultaneously through telecom operator gateways. In India, bulk SMS operates under TRAI's DLT framework, requiring all commercial senders to register their entity, sender ID, and message templates before sending.",
  },
  {
    question: "Is DLT registration mandatory for bulk SMS in India?",
    answer:
      "Yes, DLT registration is mandatory for all bulk SMS senders in India as per TRAI regulations effective March 2021. Without DLT registration, messages are blocked by telecom operators before reaching recipients. Get Click Media provides end-to-end DLT registration assistance.",
  },
  {
    question: "What is the difference between transactional and promotional SMS?",
    answer:
      "Transactional SMS (OTPs, account alerts, order updates) can be sent 24×7 to all numbers including DND-registered numbers. Promotional SMS (marketing offers, campaigns) can only be sent to non-DND numbers between 9 AM and 9 PM. Both require DLT registration.",
  },
  {
    question: "How much does bulk SMS cost in India?",
    answer:
      "Bulk SMS pricing in India typically starts from ₹0.09 to ₹0.15 per SMS depending on volume, route (transactional or promotional), and telecom operator. Get Click Media offers competitive rates starting at ₹0.09/SMS for high-volume plans. Contact us for a custom quote.",
  },
  {
    question: "How quickly can I start sending bulk SMS with Get Click Media?",
    answer:
      "You can go live within 24 hours of completing onboarding. If you already have DLT registration, setup takes even less time. If you need DLT registration, our team handles it within 1–3 business days.",
  },
  {
    question: "Does Get Click Media provide a bulk SMS API?",
    answer:
      "Yes, Get Click Media provides a RESTful bulk SMS API with SDKs for Node.js, Python, PHP, and Java. The API supports sending single or bulk messages, checking delivery reports, managing contacts, and scheduling campaigns.",
  },
  {
    question: "What is the character limit for a bulk SMS in India?",
    answer:
      "A standard SMS in India supports 160 characters (GSM-7 encoding) or 70 characters (Unicode, for regional language SMS). Longer messages are sent as multi-part SMS and billed per part. All common Indian languages including Hindi, Tamil, Telugu, and Marathi are supported via Unicode.",
  },
  {
    question: "Can I send bulk SMS to DND (Do Not Disturb) numbers?",
    answer:
      "Promotional SMS cannot be sent to DND-registered numbers- telecom operators block such messages automatically. However, transactional SMS (OTPs, alerts, service messages) are exempt from DND filtering and can be delivered to all numbers, provided the sender has valid DLT registration.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BulkSmsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-label="FAQ accordion with FAQPage JSON-LD schema" className="py-20 sm:py-28 bg-(--surface-0)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-primary">
            FAQ
          </span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1) max-w-2xl">
            Frequently Asked Questions about Bulk SMS in India
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-(--border-subtle)">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center py-5 text-left gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-(--ink-1) text-sm sm:text-base leading-snug transition-colors duration-150">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`shrink-0 w-5 h-5 text-(--ink-4) transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-(--ink-3) text-sm leading-relaxed pb-5 transition-all duration-200">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
