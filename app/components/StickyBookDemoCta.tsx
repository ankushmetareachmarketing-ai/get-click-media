"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircleMore, X } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import { useNearFooter } from "@/hooks/use-near-footer";

/**
 * Sitewide "Book a Demo" CTA that appears once the visitor scrolls past the
 * hero- a bottom bar on mobile, a side rail on desktop- per the RCS money
 * pages content brief's developer notes. Opens the existing lead-capture
 * modal (ServiceModal) rather than a separate route, matching the pattern
 * already used by GlowCtaBanner elsewhere on the site.
 */
export default function StickyBookDemoCta() {
  const openModal = useModalStore((s) => s.openModal);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const tickingRef = useRef(false);
  const nearFooter = useNearFooter();

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 560);
        tickingRef.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && !dismissed && !nearFooter;

  return (
    <>
      {/* -- Desktop: side rail ------------------------------------------- */}
      <div
        className="gsap-fixed-ui hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 items-center transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-50%) translateX(${show ? "0" : "110%"})` }}
        aria-hidden={!show}
      >
        <div className="relative flex items-center gap-3 rounded-l-2xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] pl-5 pr-4 py-4 shadow-xl">
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-white text-gray-500 flex items-center justify-center shadow-sm hover:text-gray-800 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <MessageCircleMore className="w-5 h-5 text-white shrink-0" />
          <button
            type="button"
            onClick={openModal}
            className="flex items-center gap-2 text-sm font-bold text-white whitespace-nowrap cursor-pointer"
          >
            Book a Demo
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </button>
        </div>
      </div>

      {/* -- Mobile: bottom bar --------------------------------------------- */}
      <div
        className="gsap-fixed-ui lg:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-out"
        style={{ transform: show ? "translateY(0)" : "translateY(110%)" }}
        aria-hidden={!show}
      >
        <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.18)]">
          <p className="text-xs font-semibold text-white leading-tight">
            Ready to get started with RCS?
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#1e3a8a] text-xs font-bold shadow-sm"
            >
              Book a Demo
            </button>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
