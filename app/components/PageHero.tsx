"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import { Spotlight } from "@/components/ui/spotlight";
import { Magnetic } from "@/components/motion/Magnetic";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  title: string;
  highlight?: string;
  eyebrow?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  primaryCta?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
  bgImage?: string;
}

export default function PageHero({
  title,
  highlight,
  eyebrow,
  description,
  breadcrumbs,
  primaryCta = "Request a Demo",
  secondaryCta = "Explore Services",
  secondaryCtaHref = "#",
  imageSrc,
  imageAlt,
  bgImage,
}: PageHeroProps) {
  const { openModal } = useModalStore();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: c.href } : {}),
    })),
  };

  const renderTitle = () => {
    if (!highlight) return <>{title}</>;
    const idx = title.indexOf(highlight);
    if (idx === -1) return <>{title}</>;
    return (
      <>
        {title.slice(0, idx)}
        <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,var(--primary),var(--primary-light))]">
          {highlight}
        </span>
        {title.slice(idx + highlight.length)}
      </>
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#E9E9E9]" >

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Abstract PNG background (very subtle) */}
      {bgImage && (
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.06,
          }}
          aria-hidden="true"
        />
      )}

      {/* Spotlight glow- replaces the old flat gradient-blob look with a
          designed, angled, blurred glow (fades in once on mount, no loop). */}
      <Spotlight className="-top-20 left-0 lg:left-20" fill="#2563eb" fillOpacity={0.5} />
      <Spotlight className="top-10 right-0 lg:right-10 rotate-180" fill="#38bdf8" fillOpacity={0.4} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-28 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* -- Left -- */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5">

          {/* Breadcrumb */}
          <nav data-reveal="fade-down" aria-label="Breadcrumb">
            <ol
              className="flex items-center flex-wrap gap-1 text-xs text-(--ink-4)"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              {breadcrumbs.map((crumb, i) => (
                <li
                  key={i}
                  className="flex items-center gap-1"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  itemProp="itemListElement"
                >
                  {i === 0 && <Home size={11} aria-hidden="true" />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-primary transition-colors" itemProp="item">
                      <span itemProp="name">{crumb.label}</span>
                    </Link>
                  ) : (
                    <span className="text-(--ink-3)" itemProp="name">{crumb.label}</span>
                  )}
                  <meta itemProp="position" content={String(i + 1)} />
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight size={10} className="text-(--ink-4) shrink-0" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Eyebrow */}
          {eyebrow && (
            <span data-reveal="fade-up" className="inline-flex items-center self-start gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[0.6875rem] font-bold tracking-widest uppercase text-primary">
              {eyebrow}
            </span>
          )}

          {/* H1 */}
          <h1
            data-reveal="fade-up"
            data-reveal-delay="0.1"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] [font-family:var(--font-syne)] font-bold text-(--ink-1) leading-[1.1] tracking-[-0.02em]"
          >
            {renderTitle()}
          </h1>

          {/* Description */}
          <p
            data-reveal="fade-up"
            data-reveal-delay="0.2"
            className="text-[0.9375rem] sm:text-base text-(--ink-3) leading-[1.65] max-w-lg"
          >
            {description}
          </p>

          {/* CTAs */}
          <div data-reveal="fade-up" data-reveal-delay="0.3" className="flex items-center gap-2 sm:gap-3 pt-1">
            <Magnetic strength={0.25}>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 h-11 sm:h-12 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-xs sm:text-sm font-bold shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:scale-105 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                {primaryCta}
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ChevronRight size={12} />
                </span>
              </button>
            </Magnetic>

            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center px-3 sm:px-6 h-11 sm:h-12 rounded-full border border-(--border-subtle) bg-white text-(--ink-2) text-xs sm:text-sm font-semibold hover:border-primary hover:text-primary hover:bg-blue-50/30 transition-all duration-150 whitespace-nowrap"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>

        {/* -- Right: image -- */}
        <div
          data-reveal="scale-in"
          data-reveal-delay="0.15"
          className="flex-1 flex justify-center items-end lg:items-center w-full order-last lg:order-0"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={900}
            height={720}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 45vw"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain"
            quality={95}
            priority
          />
        </div>
      </div>
    </section>
  );
}
