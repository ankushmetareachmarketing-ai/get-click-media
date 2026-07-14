import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

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
}

/**
 * The one dark-gradient hero used by every RCS and WhatsApp page — previously
 * copy-pasted inline into 32 separate files with tiny drift between them
 * (breadcrumb sometimes inside the card, sometimes outside; touch targets
 * inconsistent; no depth beyond a flat grid overlay). Centralised here so
 * every page gets the same premium treatment and future fixes apply once.
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
}: DarkHeroProps) {
  return (
    <section className="relative overflow-hidden mt-2 bg-gradient-to-br from-[#0c1a3a] via-[#1e3a8a] to-[#1e40af] mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl">
      {/* Subtle grid overlay for texture */}
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Spotlight glow — the depth/premium touch a flat gradient card lacks.
          Dark canvas is exactly what Aceternity's default opacity is tuned for. */}
      <Spotlight className="-top-16 left-0 lg:left-20" fill="#38bdf8" />
      <Spotlight className="top-0 right-0 lg:right-0 rotate-180" fill="#818cf8" fillOpacity={0.15} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/60 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span aria-hidden className="text-white/30">/</span>}
                  <li className="flex items-center gap-1">
                    {i === 0 && <Home size={11} className="mr-1" aria-hidden="true" />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-white transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white font-medium">{crumb.label}</span>
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
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              {eyebrow}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-(family-name:--font-syne)">
              {title}
              {highlight && <span className="text-[#38bdf8] block sm:inline"> {highlight}</span>}
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {primaryCta.href ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 px-6 h-11 sm:h-12 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  {primaryCta.label} <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  onClick={primaryCta.onClick}
                  className="inline-flex items-center gap-2 px-6 h-11 sm:h-12 rounded-full bg-white text-[#1e3a8a] text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  {primaryCta.label} <ChevronRight className="w-4 h-4" />
                </button>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 px-6 h-11 sm:h-12 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  {secondaryCta.label}
                </Link>
              )}
              {tertiaryCta && (
                <Link
                  href={tertiaryCta.href}
                  className="inline-flex items-center gap-2 px-6 h-11 sm:h-12 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  {tertiaryCta.label}
                </Link>
              )}
            </div>

            {trustLine && <p className="text-white/40 text-xs">{trustLine}</p>}
          </div>

          {/* Right — hero image */}
          <div className="w-full lg:w-[50%] shrink-0">
            <div className="relative w-full rounded-2xl overflow-hidden aspect-4/3 shadow-2xl shadow-blue-950/40">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority sizes="(max-width: 1024px) 90vw, 45vw" />
            </div>
          </div>
        </div>

        {stats && stats.length > 0 && (
          <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.value + stat.label} className="text-center space-y-1">
                <p className="text-xl sm:text-2xl font-extrabold text-[#38bdf8] font-(family-name:--font-syne)">{stat.value}</p>
                <p className="text-xs text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
