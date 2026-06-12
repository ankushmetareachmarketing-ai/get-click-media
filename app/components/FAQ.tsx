"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    category: "Platform",
    items: [
      {
        q: "What is Get Click Media?",
        a: "Get Click Media is an AI-powered customer communication platform that lets businesses engage customers across WhatsApp, RCS, SMS, Voice, and Email — all from one unified dashboard. We help you automate campaigns, deliver OTPs, manage conversations, and drive conversions at scale.",
      },
      {
        q: "Which communication channels does Get Click Media support?",
        a: "We support WhatsApp Business API, RCS Business Messaging, Bulk SMS, OTP & Transactional SMS, Voice & IVR, Toll Free Numbers, Email Marketing, and AI Chatbots — giving you complete omnichannel coverage from a single platform.",
      },
      {
        q: "Is Get Click Media suitable for small businesses or only enterprises?",
        a: "Get Click Media is built to scale with you. Small businesses can start with our free trial and basic plans, while enterprises get dedicated infrastructure, SLAs, and custom integrations. We serve 10,000+ businesses across all sizes.",
      },
    ],
  },
  {
    category: "WhatsApp & Messaging",
    items: [
      {
        q: "How do I get a WhatsApp Business API account?",
        a: "As an official Meta Business Solution Provider, we handle the entire onboarding process for you — including business verification, phone number registration, and template approval. Most accounts go live within 2–3 business days.",
      },
      {
        q: "What is RCS Business Messaging and how is it different from SMS?",
        a: "RCS (Rich Communication Services) is the next-generation upgrade to SMS. Unlike plain SMS, RCS supports rich media (images, carousels, videos), read receipts, quick-reply buttons, and verified sender branding — all delivered natively inside the default messaging app on Android.",
      },
      {
        q: "Can I send bulk SMS without DLT registration?",
        a: "No. TRAI mandates DLT registration for all businesses sending commercial SMS in India. We guide you through the full DLT registration process and ensure your headers and templates are compliant before your first campaign goes out.",
      },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      {
        q: "What can the AI Chatbot do?",
        a: "Our AI Chatbot handles end-to-end conversations — answering FAQs, qualifying leads, booking appointments, processing orders, and escalating to human agents when needed. It works 24×7 across WhatsApp, web chat, and other channels without any coding.",
      },
      {
        q: "Can I build automated workflows without coding?",
        a: "Yes. Our visual Flow Builder lets you design complex multi-step journeys — from welcome sequences to cart recovery to appointment reminders — using a drag-and-drop interface. No developer needed.",
      },
      {
        q: "Does the platform support AI-generated campaign content?",
        a: "Yes. Our AI Campaign Generator creates personalised message templates, subject lines, and call-to-action copy based on your audience segment and campaign goal — cutting campaign creation time by up to 80%.",
      },
    ],
  },
  {
    category: "Pricing & Support",
    items: [
      {
        q: "Is there a free trial?",
        a: "Yes — you can start a free trial with no credit card required. The trial includes access to core messaging features, the chatbot builder, and the analytics dashboard so you can experience the platform before committing.",
      },
      {
        q: "What kind of support do you offer?",
        a: "We provide 24×7 multi-channel support via WhatsApp, email, and phone for all paid plans. Enterprise customers get a dedicated account manager and priority SLA with guaranteed response times.",
      },
      {
        q: "How does pricing work?",
        a: "Pricing is flexible — you pay based on the channels you use and the volume of messages sent. We offer monthly and annual plans. WhatsApp conversations are billed per the Meta conversation pricing model, and we pass through those costs transparently with zero markup.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggle = (key: string) =>
    setOpenIndex(prev => (prev === key ? null : key));

  return (
    <section className="py-20 px-4 lg:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <SectionHeading
            eyebrow="FAQ"
            title="Everything you need to know"
            highlight="to know"
            description="Can't find your answer? Email us at hello@getclickmedia.com — we reply within a few hours."
            align="left"
            size="lg"
          />
        </div>

        {/* FAQ grid — 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {FAQS.map((group, gi) => (
            <div key={group.category}>
              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-1.5 h-5 rounded-full"
                  style={{ background: "linear-gradient(to bottom,#2563eb,#38bdf8)" }}
                />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2563eb" }}>
                  {group.category}
                </p>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-2">
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      style={{
                        borderRadius: 16,
                        border: isOpen ? "1.5px solid #bfdbfe" : "1.5px solid #e2e8f0",
                        background: isOpen ? "#f0f7ff" : "#f8fafc",
                        transition: "border-color 0.2s, background 0.2s",
                        overflow: "hidden",
                      }}
                    >
                      {/* Question row */}
                      <button
                        onClick={() => toggle(key)}
                        className="w-full text-left flex items-center justify-between gap-4 cursor-pointer"
                        style={{ padding: "16px 20px", background: "transparent", border: "none", fontFamily: "inherit" }}
                      >
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: isOpen ? "#1d4ed8" : "#0f172a",
                            lineHeight: 1.45,
                            flex: 1,
                            transition: "color 0.2s",
                          }}
                        >
                          {item.q}
                        </span>
                        <span
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            background: isOpen
                              ? "linear-gradient(135deg,#1e3a8a,#2563eb)"
                              : "#e2e8f0",
                            transition: "background 0.2s",
                          }}
                        >
                          {isOpen
                            ? <Minus size={14} color="#fff" />
                            : <Plus size={14} color="#64748b" />
                          }
                        </span>
                      </button>

                      {/* Answer — height-based smooth expand */}
                      <div
                        style={{
                          maxHeight: isOpen ? 300 : 0,
                          overflow: "hidden",
                          transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            padding: "0 20px 18px",
                            fontSize: 13.5,
                            color: "#475569",
                            lineHeight: 1.7,
                          }}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8"
          style={{
            background: "linear-gradient(135deg,#1e3a8a 0%,#2563eb 60%,#38bdf8 100%)",
          }}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Still have questions?</h3>
            <p className="text-blue-100 text-sm">
              Our team is available 24×7 — talk to an expert and get answers in minutes.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="mailto:hello@getclickmedia.com"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              Email Us
            </a>
            <a
              href="#"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "#fff", color: "#1d4ed8" }}
            >
              Book a Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
