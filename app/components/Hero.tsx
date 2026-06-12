"use client";

import React from "react";
import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const logos = ["Notion", "mailchimp", "Airtable", "GLITFOOD"];

const Hero: React.FC = () => {
  return (
    <section
      className="m-1 sm:m-2 rounded-2xl overflow-hidden relative"
      style={{
        background:
          "linear-gradient(130deg, #c7d4f8 0%, #dce6ff 35%, #eef1ff 65%, #f5f7ff 100%)",
        minHeight: "calc(100vh - 1rem)",
      }}
    >
      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(0);   opacity: 1; }
          60%  { transform: translateY(8px); opacity: 0.15; }
          100% { transform: translateY(0);   opacity: 1; }
        }
        @keyframes chevronFade {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 1; }
        }
        .chev-1 { animation: chevronFade 1.6s ease-in-out 0s   infinite; }
        .chev-2 { animation: chevronFade 1.6s ease-in-out 0.22s infinite; }
        .chev-3 { animation: chevronFade 1.6s ease-in-out 0.44s infinite; }
      `}</style>

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 pt-24 sm:pt-32 pb-24 sm:pb-32 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 min-h-[calc(100vh-1rem)]">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-5 sm:gap-6 z-10">
         

          <SectionHeading
            eyebrow="AI-Powered Communication Platform"
            title="Engage Every Customer, Across Every Channel"
            highlight="Across Every Channel"
            description="WhatsApp, RCS, SMS, Voice & Email — automated campaigns, OTP delivery, AI chatbots and deep analytics from one unified platform built for modern businesses."
            align="left"
            size="lg"
          />

          <div className="flex flex-row items-center gap-2 sm:gap-3">
            {/* Button 1 */}
            <button className="px-3 sm:px-6 h-9 sm:h-14 sm:min-w-55 cursor-pointer rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-xs sm:text-[16px] font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-1.5 sm:gap-2">
              <span>Request a demo</span>
              <span className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                <ChevronRight size={11} className="sm:hidden" />
                <ChevronRight size={15} className="hidden sm:block" />
              </span>
            </button>

            {/* Button 2 */}
            <button className="px-3 sm:px-6 h-9 sm:h-14 sm:min-w-55 cursor-pointer rounded-full bg-white text-black text-xs sm:text-[16px] font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 border border-border">
              <span>Explore our services</span>
            </button>
          </div>
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/60">
            <p className="text-xs text-gray-400 mb-3 sm:mb-4">
              Trusted by 10,000+ businesses
            </p>
            <div className="flex items-center gap-4 sm:gap-8 flex-wrap">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="text-xs sm:text-sm font-semibold text-gray-400 tracking-tight"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center items-center relative w-full">
          <Image
            src="/images/heros.png"
            alt="Phone Mockup"
            width={400}
            height={400}
            className="relative z-10 w-52 sm:w-72 md:w-80 lg:w-100 h-auto"
          />
        </div>
      </div>

      {/* ── White wave ───────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: 100 }}
        >
          <path
            d="M0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1320,80 1400,30 1440,50 L1440,100 L0,100 Z"
            fill="#F8FAFC"
          />
        </svg>

        {/* Scroll down indicator — sits centered above wave crest */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-30 flex flex-col items-center gap-1 pointer-events-auto">
          <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-indigo-400/80 mb-0.5">
            Scroll
          </span>

          {/* mouse */}
          <div
            className="w-[22px] h-[34px] rounded-full border-2 border-indigo-300 flex items-start justify-center pt-[5px]"
            style={{ background: "rgba(255,255,255,0.75)" }}
          >
            <div
              className="w-[5px] h-[7px] rounded-full bg-indigo-500"
              style={{ animation: "scrollDot 1.5s ease-in-out infinite" }}
            />
          </div>

          {/* cascading chevrons */}
          <div className="flex flex-col items-center" style={{ gap: 0 }}>
            {(["chev-1", "chev-2", "chev-3"] as const).map((cls) => (
              <svg
                key={cls}
                className={cls}
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
              >
                <path
                  d="M1 1.5l5.5 5 5.5-5"
                  stroke="#6366f1"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
