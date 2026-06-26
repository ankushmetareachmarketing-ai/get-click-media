"use client";

import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";

const Star = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2s.6 5.4 2.2 7.8C16.6 13 22 12 22 12s-5.4.5-7.8 2.2C12 16.6 12 22 12 22s-.5-5.4-2.2-7.8C7.4 12 2 12 2 12s5.4-.6 7.8-2.2C12 7.4 12 2 12 2Z" />
  </svg>
);

const CTABanner: React.FC = () => {
  const { openModal } = useModalStore();
  const ref = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  return (
    <section
      ref={ref}
      onMouseMove={e => {
        const r = ref.current?.getBoundingClientRect();
        if (r) setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setMouse({ x: -9999, y: -9999 })}
      className="relative overflow-hidden mx-1 sm:mx-2 my-6 rounded-2xl sm:rounded-3xl py-16 sm:py-20 px-4"
    >
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0%,   0%)   scale(1);    }
          30%      { transform: translate(35%,  -25%) scale(1.15); }
          65%      { transform: translate(-15%, 30%)  scale(0.9);  }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0%,   0%)   scale(1);    }
          35%      { transform: translate(-30%, 20%)  scale(1.1);  }
          70%      { transform: translate(25%, -30%)  scale(0.92); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0%,   0%)   scale(1);    }
          40%      { transform: translate(20%,  30%)  scale(1.08); }
          75%      { transform: translate(-25%,-15%)  scale(0.95); }
        }
      `}</style>

      {/* ── Base gradient — brand navy → blue ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(125deg, #0c1a3a 0%, #1e3a8a 50%, #1e40af 100%)",
        }}
      />

      {/* ── Auto-moving colour blobs — brand blue + sky cyan ── */}
      {/* Blob 1 — sky cyan, top-left */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-10%", left: "-5%",
          width: "55%", height: "160%",
          background: "radial-gradient(ellipse, rgba(56,189,248,0.28) 0%, transparent 65%)",
          animation: "blob1 12s ease-in-out infinite",
          filter: "blur(48px)",
        }}
      />
      {/* Blob 2 — brand blue, bottom-right */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%", right: "-10%",
          width: "60%", height: "180%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.32) 0%, transparent 65%)",
          animation: "blob2 16s ease-in-out infinite",
          filter: "blur(52px)",
        }}
      />
      {/* Blob 3 — light sky blue, center drift */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "20%", left: "30%",
          width: "45%", height: "130%",
          background: "radial-gradient(ellipse, rgba(96,165,250,0.20) 0%, transparent 65%)",
          animation: "blob3 10s ease-in-out infinite",
          filter: "blur(44px)",
        }}
      />

      {/* ── Hexagon pattern ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/curve.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />

      {/* ── Cursor glow (bonus — follows mouse) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(380px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.07) 0%, transparent 60%)`,
          transition: "background 80ms linear",
        }}
      />

      {/* ── Sparkles ── */}
      <span className="absolute top-8 left-[14%] text-indigo-200/70 pointer-events-none"><Star size={30} /></span>
      <span className="absolute top-16 left-[21%] text-indigo-200/35 pointer-events-none"><Star size={14} /></span>
      <span className="absolute bottom-9 left-[44%] text-indigo-200/45 pointer-events-none"><Star size={18} /></span>
      <span className="absolute top-8 right-[12%] text-indigo-200/65 pointer-events-none"><Star size={26} /></span>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-5">

        <h2
          className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-white leading-snug tracking-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Built for Smooth Transitions. Designed for Long-Term Growth.
        </h2>

        <p className="text-white/60 text-sm sm:text-[15px] max-w-2xl leading-relaxed">
          Activate the official WhatsApp Business API with Get Click Media and start
          automating customer conversations instantly. From onboarding to go-live.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
          {/* Primary — white bg */}
          <button
            onClick={openModal}
            className="group inline-flex items-center gap-2.5 pl-5 pr-1.5 h-11 rounded-full font-semibold text-sm text-[#1e3a8a] bg-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            Contact Us
            <span className="w-7 h-7 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={14} className="text-white" />
            </span>
          </button>

          {/* Secondary — outlined */}
          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 px-5 h-11 rounded-full font-semibold text-sm text-white border border-white/30 bg-black/20 transition-all duration-200 hover:bg-white/10 hover:border-white/50 hover:scale-105 cursor-pointer"
          >
            Request A Call Back
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;
