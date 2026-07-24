"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModalStore } from "@/store/useModalStore";

const Star = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2s.6 5.4 2.2 7.8C16.6 13 22 12 22 12s-5.4.5-7.8 2.2C12 16.6 12 22 12 22s-.5-5.4-2.2-7.8C7.4 12 2 12 2 12s5.4-.6 7.8-2.2C12 7.4 12 2 12 2Z" />
  </svg>
);

export interface GlowCtaBannerProps {
  title: string;
  description: string;
  ctaLabel: string;
  /** Omit to open the sitewide lead-capture modal instead of navigating. */
  ctaHref?: string;
  className?: string;
}

/**
 * The animated navy-glow CTA treatment from `CTABanner.tsx` (blobs, cursor
 * glow, sparkles, arrow-in-circle button), extracted into a parameterized,
 * reusable piece- `CTABanner` itself keeps its own fixed homepage copy
 * untouched, this is for any section that needs the same look with its own
 * title/description/CTA.
 */
export function GlowCtaBanner({ title, description, ctaLabel, ctaHref, className }: GlowCtaBannerProps) {
  const openModal = useModalStore((s) => s.openModal);
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (r) setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setMouse({ x: -9999, y: -9999 })}
      className={cn("relative overflow-hidden rounded-2xl p-8 sm:p-10", className)}
    >
      <style>{`
        @keyframes glow-cta-blob1 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          30%      { transform: translate(35%,-25%) scale(1.15); }
          65%      { transform: translate(-15%,30%) scale(0.9); }
        }
        @keyframes glow-cta-blob2 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          35%      { transform: translate(-30%,20%) scale(1.1); }
          70%      { transform: translate(25%,-30%) scale(0.92); }
        }
        @keyframes glow-cta-blob3 {
          0%,100% { transform: translate(0%,0%) scale(1); }
          40%      { transform: translate(20%,30%) scale(1.08); }
          75%      { transform: translate(-25%,-15%) scale(0.95); }
        }
      `}</style>

      {/* Base gradient */}
      <div className="absolute inset-0 [background:linear-gradient(125deg,#0c1a3a_0%,#1e3a8a_50%,#1e40af_100%)]" />

      {/* Blob 1- sky cyan, top-left */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none top-[-20%] left-[-5%] w-[45%] h-[180%] blur-[44px] [background:radial-gradient(ellipse,rgba(56,189,248,0.28)_0%,transparent_65%)] animate-[glow-cta-blob1_12s_ease-in-out_infinite]"
      />
      {/* Blob 2- brand blue, bottom-right */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none bottom-[-25%] right-[-10%] w-[50%] h-[190%] blur-[48px] [background:radial-gradient(ellipse,rgba(37,99,235,0.32)_0%,transparent_65%)] animate-[glow-cta-blob2_16s_ease-in-out_infinite]"
      />
      {/* Blob 3- light blue, centre drift */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none top-[10%] left-[35%] w-[35%] h-[140%] blur-[40px] [background:radial-gradient(ellipse,rgba(96,165,250,0.20)_0%,transparent_65%)] animate-[glow-cta-blob3_10s_ease-in-out_infinite]"
      />

      {/* Hexagon / curve pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[url('/images/curve.webp')] bg-contain bg-center opacity-[0.15]"
      />

      {/* Cursor glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(320px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.07) 0%, transparent 60%)`,
          transition: "background 80ms linear",
        }}
      />

      {/* Sparkles */}
      <span className="absolute top-6 left-[12%] text-indigo-200/60 pointer-events-none"><Star size={22} /></span>
      <span className="absolute bottom-7 right-[15%] text-indigo-200/45 pointer-events-none"><Star size={18} /></span>

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-lg font-bold text-white [font-family:var(--font-syne)]">{title}</h3>
          <p className="text-white/60 text-base max-w-lg leading-[1.7]">{description}</p>
        </div>

        {ctaHref ? (
          <a
            href={ctaHref}
            className="group inline-flex shrink-0 items-center gap-2.5 pl-5 pr-1.5 h-11 rounded-full font-semibold text-sm text-[#1e3a8a] bg-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            {ctaLabel}
            <span className="w-7 h-7 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={14} className="text-white" />
            </span>
          </a>
        ) : (
          <button
            type="button"
            onClick={openModal}
            className="group inline-flex shrink-0 items-center gap-2.5 pl-5 pr-1.5 h-11 rounded-full font-semibold text-sm text-[#1e3a8a] bg-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            {ctaLabel}
            <span className="w-7 h-7 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={14} className="text-white" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
