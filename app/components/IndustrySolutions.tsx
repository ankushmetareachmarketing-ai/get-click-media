"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building2, ShoppingBag, Landmark, ShoppingCart,
  GraduationCap, ArrowRight, CheckCircle2,
} from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import { image } from "motion/react-client";

// -- Tab data ------------------------------------------------------------------

const TABS = [
  {
    label: "Hospitality",
    Icon: Building2,
    industry: "Hospitality & Hotels",
    headline: "Drive bookings, delight guests, build loyalty.",
    description:
      "Get Click Media helps hospitality brands deliver instant booking confirmations, personalised offers and post-stay follow-ups across WhatsApp, SMS and RCS- all from one unified platform.",
    highlights: [
      "Booking confirmation in under 2 seconds",
      "WhatsApp check-in & upsell alerts",
      "Post-stay review automation",
    ],
    clientName: "Aphrodite Buddha Spa",
    clientLogo: "/images/our-clients/logo/aphroditebuddhaspa.png",
    tag: "Hospitality Industry",
    image: "/images/industries/hospitality.webp",
  },
  {
    label: "Fashion",
    Icon: ShoppingBag,
    industry: "Fashion & Lifestyle",
    headline: "Turn browsers into buyers with smart messaging.",
    description:
      "Send flash-sale alerts, abandoned-cart recovery messages and loyalty reward nudges through WhatsApp and SMS. Reach shoppers at exactly the right moment- every time.",
    highlights: [
      "Abandoned cart recovery campaigns",
      "Flash sale broadcasts at scale",
      "Loyalty point & reward updates",
    ],
    clientName: "Brinda Collections",
    clientLogo: "/images/our-clients/logo/brinda.webp",
    tag: "Fashion Industry",
    image: "/images/industries/fashion.webp",
  },
  {
    label: "Finance",
    Icon: Landmark,
    industry: "Finance & Fintech",
    headline: "Secure, compliant communication at scale.",
    description:
      "Deliver OTPs, fraud alerts, EMI reminders and account updates instantly to millions of customers with a 99.9% uptime SLA and DLT compliance built right in- no extra setup needed.",
    highlights: [
      "Sub-second OTP & 2FA delivery",
      "DLT-compliant transactional routes",
      "Real-time fraud & balance alerts",
    ],
    clientName: "NexusPay",
    clientLogo: "/images/our-clients/logo/nexuspay.png",
    tag: "Finance Industry",
    image: "/images/industries/finance.webp",
  },
  {
    label: "Retail",
    Icon: ShoppingCart,
    industry: "Retail & E-Commerce",
    headline: "From browse to buy- messaging that converts.",
    description:
      "Automate order confirmations, delivery tracking, flash sale blasts and review collection across every channel. Scale to millions of messages with zero infrastructure headaches.",
    highlights: [
      "Order & live delivery tracking",
      "Broadcast campaigns to millions",
      "Automated review collection",
    ],
    clientName: "Bada Business",
    clientLogo: "/images/our-clients/logo/bada-bussiness.png",
    tag: "Retail Industry",
    image: "/images/industries/retail.webp",
  },
  {
    label: "Education",
    Icon: GraduationCap,
    industry: "Education & Ed-Tech",
    headline: "Keep students, parents and faculty in the loop.",
    description:
      "Send exam schedules, result announcements, attendance alerts and fee reminders via WhatsApp, SMS and RCS. Build a connected campus community effortlessly- at any scale.",
    highlights: [
      "Exam schedule & result alerts",
      "Fee payment reminders & receipts",
      "Parent-teacher communication",
    ],
    clientName: "GD Goenka",
    clientLogo: "/images/our-clients/logo/gdgoenka.png",
    tag: "Education Industry",
    image: "/images/industries/education.webp",
  },
];

// -- Component -----------------------------------------------------------------

const IndustrySolutions: React.FC = () => {
  const [active, setActive] = useState(2); // Finance selected by default
  const { openModal } = useModalStore();
  const tab = TABS[active];

  return (
    <section
      className="relative py-14 sm:py-20 px-4 overflow-hidden rounded-tl-4xl rounded-tr-4xl"
      style={{
        background:
          "linear-gradient(145deg, #0c1a3a 0%, #0f2356 35%, #0d3b6e 65%, #0a5272 100%)",
      }}
    >
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ind-sol-card { animation: fadeSlideUp 0.35s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      {/* Curvy lines pattern overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* -- Header -- */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 gap-3">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            Craft Your Perfect Brand Experience
          </span>

          {/* Heading */}
          <h2
            className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Your Industry. Your Challenges.{" "}
            <em
              style={{
                fontStyle: "italic",
                fontFamily: "Georgia,'Times New Roman',serif",
                fontWeight: 400,
                color: "#38bdf8",
              }}
            >
              Your Custom Solution.
            </em>
          </h2>

          {/* Subtitle */}
          <p className="text-white/60 text-sm sm:text-base max-w-xl leading-relaxed">
            Our platform adapts to every sector with tailored automation,
            varied integrations, and customer engagement workflows.
          </p>
        </div>

        {/* -- Tabs -- */}
        <div className="flex items-center justify-center mb-8 overflow-x-auto">
          <div className="flex gap-0 border-b border-white/15 min-w-max">
            {TABS.map(({ label, Icon }, i) => {
              const isActive = i === active;
              return (
                <button
                  key={label}
                  onClick={() => setActive(i)}
                  className="relative flex items-center gap-2 px-5 sm:px-7 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap"
                  style={{ color: isActive ? "#38bdf8" : "rgba(255,255,255,0.5)" }}
                >
                  <Icon
                    size={15}
                    style={{ color: isActive ? "#38bdf8" : "rgba(255,255,255,0.4)" }}
                  />
                  {label}
                  {/* Underline indicator */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full"
                      style={{ background: "#38bdf8" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* -- Content card -- */}
        <div
          key={active}
          className="ind-sol-card relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white"
        >
          

          <div className="relative z-10 flex flex-col lg:flex-row">

            {/* Left- text content */}
            <div className="flex-1 p-7 sm:p-10 flex flex-col justify-between gap-6 lg:max-w-[52%]">

              {/* Client identity */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center bg-white overflow-hidden shrink-0">
                  <Image
                    src={tab.clientLogo}
                    alt={tab.clientName}
                    width={36}
                    height={36}
                    className="w-auto h-6 object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{tab.clientName}</p>
                  <span className="text-[11px] text-[#2563eb] font-semibold">{tab.tag}</span>
                </div>
              </div>

              {/* Headline */}
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-3"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {tab.headline}
                </h3>
                <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                  {tab.description}
                </p>
              </div>

              {/* Highlights */}
              <ul className="flex flex-col gap-2.5">
                {tab.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: "#2563eb" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div>
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2.5 pl-5 pr-2 h-11 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
                    boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
                  }}
                >
                  Get A Tailored Demo
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                    <ArrowRight size={14} style={{ color: "#2563eb" }} />
                  </span>
                </button>
              </div>
            </div>

            {/* Right- product image */}
            <div
              className="flex-1 relative flex items-end justify-center lg:justify-end overflow-hidden min-h-[220px] sm:min-h-[300px] lg:min-h-0"

            >
              <Image
                src={tab.image || "/images/industries/hospitality.webp"}
                alt={`${tab.industry}- Get Click Media platform`}
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustrySolutions;
