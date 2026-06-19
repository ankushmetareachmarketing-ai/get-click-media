"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an OTP SMS service and how does it work in India?",
    answer:
      "An OTP SMS service sends One-Time Passwords to users' mobile numbers for authentication — login, payment confirmation, account verification, etc. In India, OTP SMS travels via the transactional route under TRAI's DLT framework. The sending entity, sender ID, and message template must all be pre-registered on a TRAI DLT portal before any OTP can be delivered.",
  },
  {
    question: "Can OTP SMS reach DND-registered numbers in India?",
    answer:
      "Yes. OTP SMS is classified as a transactional message and is exempt from DND (Do Not Disturb) filtering. This means your OTPs will be delivered to all recipients — including those on the DND registry — 24 hours a day, 7 days a week, provided your DLT registration is in place.",
  },
  {
    question: "Is DLT registration mandatory for sending OTPs in India?",
    answer:
      "Yes. TRAI mandates DLT registration for all commercial SMS senders, including OTP providers, effective March 2021. Without a registered entity, sender ID, and approved OTP template, telecom operators will scrub your messages before they reach recipients. Get Click Media provides end-to-end DLT registration assistance.",
  },
  {
    question: "How fast is OTP SMS delivery through Get Click Media?",
    answer:
      "OTPs sent via Get Click Media's transactional route typically reach recipients in under 3 seconds under normal network conditions. We use priority carrier queues and automatic failover to alternate routes to maintain sub-second delivery even during peak traffic.",
  },
  {
    question: "How much does OTP SMS cost in India?",
    answer:
      "OTP SMS pricing in India typically starts from ₹0.09 to ₹0.15 per SMS depending on volume and contract terms. Get Click Media offers competitive rates starting at ₹0.09/OTP for high-volume plans. Contact us for a custom quote tailored to your monthly OTP volume.",
  },
  {
    question: "Does Get Click Media provide an OTP SMS API?",
    answer:
      "Yes. Get Click Media provides a RESTful OTP SMS API with SDKs for Node.js, Python, PHP, and Java. Triggering an OTP requires a single HTTP POST call. The API also supports delivery webhooks so your backend is notified the moment an OTP is delivered or fails.",
  },
  {
    question: "What happens if an OTP is not delivered?",
    answer:
      "Get Click Media automatically retries failed OTP deliveries across alternate telecom routes. You receive a real-time delivery receipt (via dashboard or webhook) indicating the final delivery status — delivered, failed, or pending — so your application can trigger a resend if needed.",
  },
  {
    question: "How long is an OTP SMS valid?",
    answer:
      "The validity of an OTP is controlled by your application — Get Click Media only handles the delivery. A typical best practice is a 5–10 minute expiry window. The SMS itself is delivered instantly; it is your backend that enforces the time limit and invalidates the code after use or expiry.",
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

export default function OtpSmsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-label="OTP SMS FAQ accordion with FAQPage JSON-LD schema" className="py-20 sm:py-28 bg-(--surface-0)">
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
            Frequently Asked Questions about OTP SMS in India
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
