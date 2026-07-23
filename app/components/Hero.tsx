"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Magnetic } from "@/components/motion/Magnetic";

const Hero: React.FC = () => {
  return (
    <section
      className="m-1 sm:m-2 pb-0 sm:pb-0 border-0 sm:border rounded-2xl overflow-hidden relative"
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

      {/* -- Content with side shapes -- */}
      <div className="relative w-full pt-28 sm:pt-32 lg:pt-40 pb-4 sm:pb-6 lg:pb-8">

        {/* Left shape — hidden on mobile */}
        <div className="absolute left-0 sm:left-[4%] lg:left-[18%] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden sm:block">
          <Image
            src="/images/hero/right-shape.png"
            alt=""
            width={220}
            height={320}
            className="h-auto w-10 sm:w-20 lg:w-35 xl:w-45"
            priority
          />
        </div>

        {/* Right shape — hidden on mobile */}
        <div className="absolute right-0 sm:right-[4%] lg:right-[18%] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden sm:block">
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

          {/* Badge
              Mobile : compact single-line pill — "What's New · Official CPaaS Platform"
              Desktop: full two-part badge (unchanged)
          */}
          {/* Mobile badge */}
          <div data-reveal="fade-down" className="flex sm:hidden items-center gap-2 px-3 py-1.5 rounded-full border border-[#b8c8f0] bg-white/70 backdrop-blur-sm">
            <span className="bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
              What&apos;s New
            </span>
            <span className="text-gray-500 text-[10px] font-medium whitespace-nowrap">
              Official CPaaS Platform
            </span>
          </div>

          {/* Desktop badge */}
          <div data-reveal="fade-down" className="hidden sm:flex flex-row items-center gap-2 px-3 py-1 rounded-full border border-[#b8c8f0] bg-white/70 backdrop-blur-sm">
            <span className="bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
              What&apos;s New
            </span>
            <span className="text-gray-500 text-[11px] leading-snug">
              Official. Scalable. Built for businesses that want conversations to convert.
            </span>
          </div>

          {/* Heading */}
          <h1
            data-reveal="fade-up"
            data-reveal-delay="0.1"
            className="text-[1.35rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3rem] leading-[1.15] tracking-[-0.02em]"
          >
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

          {/* Description — shorter on mobile */}
          <p
            data-reveal="fade-up"
            data-reveal-delay="0.2"
            className="text-gray-500 text-[11px] sm:text-sm lg:text-[15px] leading-relaxed max-w-65 sm:max-w-md lg:max-w-lg"
          >
            {/* Mobile text */}
            <span className="sm:hidden">
              WhatsApp, RCS, SMS &amp; Voice — all from one unified platform.
            </span>
            {/* Desktop text */}
            <span className="hidden sm:inline">
              WhatsApp, RCS, SMS, Voice &amp; Email — automated campaigns, OTP delivery,
              AI chatbots and deep analytics from one unified platform built for modern businesses.
            </span>
          </p>

          {/* CTA buttons */}
          <div
            data-reveal="fade-up"
            data-reveal-delay="0.3"
            data-reveal-stagger="0.08"
            className="flex items-center justify-center gap-2 sm:gap-3 mt-1"
          >
            <Magnetic strength={0.25}>
              <button className="inline-flex items-center gap-1.5 sm:gap-2 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 h-9 sm:h-10 lg:h-11 rounded-full bg-gray-900 text-white text-[11px] sm:text-sm font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-200 cursor-pointer">
                <span>Let&apos;s Connect</span>
                <span className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ChevronRight size={11} className="text-gray-900" />
                </span>
              </button>
            </Magnetic>

            <button className="inline-flex items-center gap-1.5 sm:gap-2 pl-3.5 sm:pl-5 pr-1 sm:pr-1.5 h-9 sm:h-10 lg:h-11 rounded-full bg-white border border-gray-200 text-gray-900 text-[11px] sm:text-sm font-semibold hover:border-gray-400 hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm">
              <span>Book a Demo</span>
              <span className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <ChevronRight size={11} className="text-gray-700" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* -- Dashboard image -- */}

      {/* Mobile image — wider + bottom fade shadow */}
      <div data-reveal="scale-in" data-reveal-delay="0.35" className="relative sm:hidden mt-2 overflow-hidden">
        <Image
          src="/images/hero-mob.webp"
          alt="Get Click Media platform on mobile"
            width={900}
            height={800}
            className="w-[200%] mb-12 relative left-1/2 -translate-x-1/2 h-auto"
          priority
          unoptimized
        />
        {/* Bottom fade — matches section gradient end colour */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #f5f7ff 0%, #eef1ff 40%, transparent 100%)",
          }}
        />
      </div>

      {/* Desktop image — home-page.png (unchanged) */}
      <div data-reveal="scale-in" data-reveal-delay="0.35" className="hidden sm:flex sm:mt-0 justify-center">
        <Image
          src="/images/hero/home-page.png"
          alt="Get Click Media unified communication platform dashboard"
          width={1400}
          height={800}
          className="w-full sm:w-[80%] lg:w-[72%] h-auto block"
          quality={100}
          priority={false}
        />
      </div>
    </section>
  );
};

export default Hero;
