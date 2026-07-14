"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedGridBackground } from "@/components/ui/the-infinite-grid";
import { useModalStore } from "@/store/useModalStore";

export interface DarkHeroBreadcrumb {
  label: string;
  href?: string;
}

export interface DarkHeroStat {
  value: string;
  label: string;
}

export interface DarkHeroProps {
  breadcrumbs?: DarkHeroBreadcrumb[];
  eyebrow: string;
  title: React.ReactNode;
  highlight?: React.ReactNode;
  description: React.ReactNode;
  primaryCta: { label: string; href?: string; onClick?: () => void };
  secondaryCta?: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
  trustLine?: string;
  stats?: DarkHeroStat[];
  /** Defaults to "dark" — the original navy-gradient look every other page already uses. */
  theme?: "dark" | "light";
}

/**
 * The one hero used by every RCS and WhatsApp page — previously copy-pasted
 * inline into 32 separate files with tiny drift between them. Centralised
 * here so every page gets the same premium treatment and future fixes apply
 * once. `theme="light"` swaps the navy gradient for a white canvas with soft
 * pastel glow blobs — everything else about the layout is unchanged.
 */
export default function DarkHero({
  breadcrumbs,
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  imageSrc,
  imageAlt,
  trustLine,
  stats,
  theme = "dark",
}: DarkHeroProps) {
  const openModal = useModalStore((s) => s.openModal);
  const handlePrimaryClick = primaryCta.onClick ?? openModal;
  const isLight = theme === "light";

  return (
    <section
      className={cn(
        "relative overflow-hidden mt-2 mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl",
        isLight
          ? "bg-white border border-(--border-subtle)"
          : "bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af]"
      )}
    >
      {isLight ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -right-[20%] h-[85%] w-[65%] rounded-full bg-[#25D366] opacity-[0.10] blur-[100px]" />
          <div className="absolute -bottom-[35%] -left-[20%] h-[85%] w-[65%] rounded-full bg-blue-500 opacity-[0.20] blur-[100px]" />
        </div>
      ) : (
        <>
          {/* Spotlight glow — the depth/premium touch a flat gradient card lacks.
              Dark canvas is exactly what Aceternity's default opacity is tuned for. */}
          <Spotlight className="-top-16 left-0 lg:left-20" fill="#38bdf8" />
          <Spotlight className="top-0 right-0 lg:right-0 rotate-180" fill="#818cf8" fillOpacity={0.15} />
        </>
      )}

      {/* Drifting grid lines, brighter in a radial patch that follows the cursor —
          sits above the color wash (z-10) so the lines stay crisp over it. */}
      <AnimatedGridBackground
        lineClassName={isLight ? "text-slate-400" : "text-white"}
        baseOpacity={isLight ? 0.08 : 0.05}
        revealOpacity={isLight ? 0.3 : 0.4}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol
              className={cn(
                "flex items-center gap-2 text-xs rounded-full px-4 py-2 w-fit flex-wrap",
                isLight ? "text-gray-500 bg-gray-100" : "text-white/60 bg-white/10 backdrop-blur-sm"
              )}
            >
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <span aria-hidden className={isLight ? "text-gray-300" : "text-white/30"}>
                      /
                    </span>
                  )}
                  <li className="flex items-center gap-1">
                    {i === 0 && <Home size={11} className="mr-1" aria-hidden="true" />}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className={cn("transition-colors", isLight ? "hover:text-gray-900" : "hover:text-white")}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={cn("font-medium", isLight ? "text-gray-900" : "text-white")}>
                        {crumb.label}
                      </span>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left copy */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <span
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase",
                isLight
                  ? "bg-blue-50 border border-blue-100 text-[#2563eb]"
                  : "bg-white/10 border border-white/20 text-white backdrop-blur-sm"
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              {eyebrow}
            </span>

            <h1
              className={cn(
                "text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight",
                isLight ? "text-gray-900" : "text-white"
              )}
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {title}
              {highlight && (
                <span className={cn("block sm:inline", isLight ? "text-[#2563eb]" : "text-[#38bdf8]")}>
                  {" "}
                  {highlight}
                </span>
              )}
            </h1>

            <p
              className={cn(
                "text-base sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0",
                isLight ? "text-gray-500" : "text-white/70"
              )}
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {primaryCta.href ? (
                <Link
                  href={primaryCta.href}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 h-11 sm:h-12 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200",
                    isLight
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                      : "bg-white text-[#1e3a8a]"
                  )}
                >
                  {primaryCta.label} <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  onClick={handlePrimaryClick}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 h-11 sm:h-12 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer",
                    isLight
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                      : "bg-white text-[#1e3a8a]"
                  )}
                >
                  {primaryCta.label} <ChevronRight className="w-4 h-4" />
                </button>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 h-11 sm:h-12 rounded-full border text-sm font-semibold transition-colors duration-200",
                    isLight
                      ? "border-(--border-subtle) bg-white text-gray-700 hover:bg-gray-50"
                      : "border-white/30 text-white hover:bg-white/10"
                  )}
                >
                  {secondaryCta.label}
                </Link>
              )}
              {tertiaryCta && (
                <Link
                  href={tertiaryCta.href}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 h-11 sm:h-12 rounded-full border text-sm font-semibold transition-colors duration-200",
                    isLight
                      ? "border-(--border-subtle) text-gray-700 hover:bg-gray-50"
                      : "border-white/30 text-white hover:bg-white/10"
                  )}
                >
                  {tertiaryCta.label}
                </Link>
              )}
            </div>

            {trustLine && (
              <p className={cn("text-xs", isLight ? "text-gray-400" : "text-white/40")}>{trustLine}</p>
            )}
          </div>

          {/* Right — hero image, smaller share so the copy column gets more width */}
          <div className="w-full lg:w-[38%] shrink-0">
            <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority sizes="(max-width: 1024px) 90vw, 38vw" />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
