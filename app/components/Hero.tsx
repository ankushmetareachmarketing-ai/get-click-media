"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      className="m-1 border-1 pb-8 sm:pb-0 sm:m-2 rounded-2xl overflow-hidden relative"
      style={{
        background:
          "linear-gradient(160deg, #c7d4f8 0%, #dce6ff 30%, #eef1ff 60%, #f5f7ff 100%)",
      }}
    >
      <style>{`
        .hero-gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* ── Content with side shapes ── */}
      <div className="relative w-full pt-24 sm:pt-20 lg:pt-30 pb-4 sm:pb-6 lg:pb-8">

        {/* Left shape */}
        <div className="absolute left-0 sm:left-[4%] lg:left-[18%] top-1/2 -translate-y-1/2 pointer-events-none select-none">
          <Image
            src="/images/hero/right-shape.png"
            alt=""
            width={220}
            height={320}
            className="h-auto w-10 sm:w-20 lg:w-35 xl:w-45"
            priority
          />
        </div>

        {/* Right shape */}
        <div className="absolute right-0 sm:right-[4%] lg:right-[18%] top-1/2 -translate-y-1/2 pointer-events-none select-none">
          <Image
            src="/images/hero/left-shape.png"
            alt=""
            width={220}
            height={320}
            className="h-auto w-10 sm:w-20 lg:w-35 xl:w-45"
            priority
          />
        </div>

        {/* Center content */}
        <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center gap-2.5 sm:gap-3.5 text-center">

          {/* Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 px-3 sm:px-3 py-1.5 sm:py-1 rounded-2xl sm:rounded-full border border-[#b8c8f0] bg-white/70 backdrop-blur-sm w-[88vw] sm:w-auto text-center sm:text-left">
            <span className="bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
              What's New
            </span>
            <span className="text-gray-500 text-[10px] sm:text-[11px] leading-snug">
              Official. Scalable. Built for businesses that want conversations to convert.
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[1.3rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3rem] leading-[1.12] tracking-[-0.02em]">
            <span className="font-bold text-gray-900 [font-family:var(--font-syne)]">Next-Gen </span>
            <em style={{ fontStyle: "italic", fontFamily: "Georgia,'Times New Roman',serif", fontWeight: 300, color: "#6b7280" }}>
              CPaaS Platform for
            </em>
            <br />
            <span className="font-extrabold text-gray-900 [font-family:var(--font-syne)]">High-Impact </span>
            <span className="font-extrabold [font-family:var(--font-syne)] hero-gradient-text">
              Customer Communications
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-[11px] sm:text-sm lg:text-[15px] max-w-[280px] sm:max-w-md lg:max-w-lg leading-relaxed">
            WhatsApp, RCS, SMS, Voice &amp; Email — automated campaigns, OTP delivery,
            AI chatbots and deep analytics from one unified platform built for modern businesses.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-1">
            <button className="inline-flex items-center gap-1.5 sm:gap-2 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 h-8 sm:h-10 lg:h-11 rounded-full bg-gray-900 text-white text-[11px] sm:text-sm font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-200 cursor-pointer">
              <span>Let's Connect</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                <ChevronRight size={11} className="text-gray-900" />
              </span>
            </button>

            <button className="inline-flex items-center gap-1.5 sm:gap-2 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 h-8 sm:h-10 lg:h-11 rounded-full bg-white border border-gray-200 text-gray-900 text-[11px] sm:text-sm font-semibold hover:border-gray-400 hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm">
              <span>Book a Demo</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <ChevronRight size={11} className="text-gray-700" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Dashboard image ── */}
      <div className="flex sm:mt-0 mt-4 justify-center ">
        <Image
          src="/images/hero/home-page.png"
          alt="Get Click Media unified communication platform dashboard"
          width={1400}
          height={800}
          className="w-[100%] sm:w-[80%] lg:w-[72%] h-auto block"
          quality={100}
          priority={false}
        />
      </div>
    </section>
  );
};

export default Hero;
