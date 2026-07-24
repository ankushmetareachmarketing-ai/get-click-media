"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is transactional SMS and how is it different from promotional SMS?",
    answer:
      "Transactional SMS delivers critical, service-related information- OTPs, account alerts, order updates, appointment reminders- and can be sent to all numbers including DND-registered ones, 24×7. Promotional SMS delivers marketing offers and can only reach non-DND numbers between 9 AM and 9 PM. Both require TRAI DLT registration.",
  },
  {
    question: "Can transactional SMS be sent to DND numbers in India?",
    answer:
      "Yes. Transactional SMS travels via a DND-exempt route approved by TRAI, meaning recipients on the Do Not Disturb registry still receive your messages. This is essential for OTPs, banking alerts, and service notifications where delivery to every user is critical.",
  },
  {
    question: "Is DLT registration mandatory for transactional SMS?",
    answer:
      "Yes. TRAI mandates DLT registration for all commercial SMS senders, including transactional ones, effective March 2021. Your entity, sender ID (header), and each message template must be pre-registered and approved on a TRAI DLT portal. Get Click Media handles the entire process.",
  },
  {
    question: "What types of messages qualify as transactional SMS in India?",
    answer:
      "TRAI defines transactional SMS as messages triggered by a customer action or a service obligation- OTPs, bank transaction alerts, order confirmations, appointment reminders, delivery updates, policy renewal notices, and flight status updates. Marketing offers, sale announcements, and promotional content do not qualify.",
  },
  {
    question: "How quickly can I go live with transactional SMS?",
    answer:
      "If you already have DLT registration, you can start sending transactional SMS within hours of completing onboarding. If you need DLT registration, our team typically completes entity and template approval within 1–3 business days. The entire onboarding, including API integration, is designed to be completed in under 24 hours.",
  },
  {
    question: "Does Get Click Media provide a transactional SMS API?",
    answer:
      "Yes. Get Click Media provides a RESTful transactional SMS API with SDKs for Node.js, Python, PHP, and Java. The API supports single and batch sends, delivery webhooks, message status queries, and template management. Full API documentation is available after signup.",
  },
  {
    question: "What delivery rate can I expect for transactional SMS?",
    answer:
      "Get Click Media delivers transactional SMS via carrier-grade infrastructure with a 99.9% delivery uptime SLA. Messages are routed through redundant connections to all major Indian telecom operators- Airtel, Jio, Vi, and BSNL- with automatic failover if a primary route is congested.",
  },
  {
    question: "How much does transactional SMS cost in India?",
    answer:
      "Transactional SMS pricing at Get Click Media starts from ₹0.09 per SMS for high-volume plans. Starter plans are available from ₹0.12/SMS for volumes up to 10,000 messages per month. Enterprise pricing is custom-negotiated based on volume and SLA requirements. All plans include DLT registration assistance.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function TransactionalSmsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-label="Transactional SMS FAQ" className="py-20 sm:py-28 bg-(--surface-0)">
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
            Frequently Asked Questions about Transactional SMS in India
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
                  <span className="font-semibold text-(--ink-1) text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`shrink-0 w-5 h-5 text-(--ink-4) transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-(--ink-3) text-sm leading-relaxed pb-5">
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
