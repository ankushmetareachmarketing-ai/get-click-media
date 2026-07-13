"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";

export default function TransactionalSmsFinalCTA() {
  const openModal = useModalStore((s) => s.openModal);

  return (
    <section
      aria-label="Start sending transactional SMS today"
      className="py-14 sm:py-20 bg-(--surface-2)"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div
          className="rounded-[20px] overflow-hidden shadow-(--shadow-elevated) grid grid-cols-1 lg:grid-cols-[1fr_420px] relative"
          style={{ background: "linear-gradient(110deg, #ffffff 0%, #ffffff 45%, #fef0e8 100%)" }}
        >

          {/* Blobs */}
          <div className="absolute bottom-0 left-0 right-0 h-80 lg:top-0 lg:left-auto lg:h-auto lg:w-105 pointer-events-none" aria-hidden="true">
            <div
              className="absolute top-0 bottom-0 my-auto -right-20 w-120 h-120 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(244,165,122,0.55) 0%, transparent 65%)",
                animation: "cta-blob 7s ease-in-out infinite",
              }}
            />
            <div
              className="absolute top-0 bottom-0 my-auto right-0 w-90 h-90 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(232,113,122,0.48) 0%, transparent 65%)",
                animation: "cta-blob 9s ease-in-out infinite reverse",
              }}
            />
            <div
              className="absolute top-0 bottom-0 my-auto right-15 w-60 h-60 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(217,79,122,0.42) 0%, transparent 65%)",
                animation: "cta-blob 5s ease-in-out infinite",
              }}
            />
          </div>

          {/* Left: content */}
          <div className="relative z-10 flex flex-col justify-center gap-3 sm:gap-5 p-6 sm:p-12 lg:p-16">

            <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[0.6875rem] font-bold tracking-widest uppercase text-primary">
              Get Started Today
            </span>

            <h2 className="text-[1.4rem] sm:text-[2rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.15] tracking-[-0.02em] text-(--ink-1)">
              Start sending transactional SMS across India in minutes
            </h2>

            <p className="text-(--ink-3) text-[0.9375rem] leading-[1.65] max-w-md">
              Join 10,000+ businesses across India. Get a free demo and complete
              DLT registration assistance — no commitment required.
            </p>

            <div className="flex items-center gap-2 sm:gap-3 pt-1">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 h-9 sm:h-11 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-xs sm:text-sm font-bold shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:scale-105 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Get Free Demo
              </button>

              <a
                href="https://wa.me/919667694088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 h-9 sm:h-11 px-3 sm:px-4 rounded-full border border-(--border-subtle) text-(--ink-2) text-xs sm:text-sm font-medium hover:border-primary hover:text-primary hover:bg-blue-50/30 transition-all duration-150 whitespace-nowrap"
              >
                <MessageCircle size={13} className="sm:hidden" />
                <MessageCircle size={15} className="hidden sm:block" />
                WhatsApp Us
              </a>
            </div>

            <p className="text-(--ink-4) text-xs">
              No credit card required &nbsp;·&nbsp; DLT assistance included &nbsp;·&nbsp; Go live in 24 hours
            </p>
          </div>

          {/* Right: image */}
          <div className="relative z-10 flex items-end justify-center min-h-75 sm:min-h-90 lg:min-h-0">
            <Image
              src="/images/bulk-sms/transactional-sms-india.webp"
              alt="Business professional using the Get Click Media transactional SMS platform"
              width={420}
              height={460}
              className="w-full max-w-[320px] sm:max-w-none h-auto object-contain"
            />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes cta-blob {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.07); }
        }
      `}</style>
    </section>
  );
}
