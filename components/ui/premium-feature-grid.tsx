"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { useModalStore } from "@/store/useModalStore";

export type FeatureAccent =
  | "orange"
  | "pink"
  | "blue"
  | "purple"
  | "green"
  | "indigo"
  | "cyan"
  | "red";

export interface PremiumFeature {
  /** Pre-rendered icon element, e.g. <Bot className="h-6 w-6" /> — a Server Component
   *  parent can't hand this Client Component a raw component reference. */
  icon: ReactNode;
  title: string;
  description: string;
  accent: FeatureAccent;
}

const ACCENT_ICON: Record<FeatureAccent, string> = {
  orange: "from-orange-400 to-amber-500 shadow-orange-500/25",
  pink: "from-pink-400 to-rose-500 shadow-pink-500/25",
  blue: "from-blue-500 to-blue-600 shadow-blue-500/25",
  purple: "from-purple-400 to-violet-500 shadow-purple-500/25",
  green: "from-emerald-400 to-emerald-500 shadow-emerald-500/25",
  indigo: "from-indigo-400 to-indigo-500 shadow-indigo-500/25",
  cyan: "from-cyan-400 to-sky-500 shadow-cyan-500/25",
  red: "from-red-400 to-rose-500 shadow-red-500/25",
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Premium enterprise-SaaS feature grid — badge + two-line heading, a
 * fixed-height responsive card grid (no slider; nothing here needs
 * side-by-side comparison), and a single centered CTA.
 */
export function PremiumFeatureGrid({
  id,
  badge,
  heading,
  description,
  features,
  ctaLabel = "Explore All Features",
  ctaHref,
  className,
}: {
  id?: string;
  badge: string;
  heading: [string, string];
  description: string;
  features: PremiumFeature[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}) {
  const openModal = useModalStore((s) => s.openModal);

  return (
    <section id={id} className={cn("relative overflow-hidden bg-white py-16 sm:py-20 lg:py-[100px]", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-blue-500 opacity-[0.04] blur-3xl" />
        <div className="absolute bottom-0 right-1/5 h-[380px] w-[380px] rounded-full bg-sky-400 opacity-[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1.5 text-[11px] font-bold uppercase text-white [letter-spacing:2px]">
            {badge}
          </span>
          <h2 className="mt-6 text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.15] text-(--ink-1) [font-family:var(--font-syne)]">
            {heading[0]}
            <br />
            {heading[1]}
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-[1.7] text-(--ink-3)">{description}</p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          aria-label={badge}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 list-none p-0"
        >
          {features.map((feature) => (
            <motion.li
              key={feature.title}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative flex min-h-[260px] flex-col rounded-3xl border border-[#E9EEF5] bg-white p-7 shadow-(--shadow-card) transition-[box-shadow,border-color] duration-300 hover:border-blue-300 hover:shadow-(--shadow-card-hover)"
            >
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:rotate-6",
                  ACCENT_ICON[feature.accent]
                )}
              >
                {feature.icon}
              </span>
              <h3 className="mt-5 text-[22px] font-bold leading-tight text-(--ink-1) [font-family:var(--font-syne)]">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-base leading-[1.7] text-(--ink-3)">{feature.description}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-16 flex justify-center">
          {ctaHref ? (
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(37,99,235,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={openModal}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(37,99,235,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
