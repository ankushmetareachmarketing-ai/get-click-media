"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GradientCarouselCard {
  icon?: React.ReactNode;
  title: string;
  description: string;
  /** Tailwind gradient stops for this card's soft background, e.g. "from-blue-50 to-sky-50" */
  gradient?: string;
  /** Optional extra line under the description- e.g. a result stat like "+45% conversion" */
  footnote?: string;
  href?: string;
}

/**
 * Light card background paired with a deeper, saturated icon tone-
 * cycled per card so a row never looks monochrome. Icon gradients are
 * one notch darker than the card wash so the badge pops off the page.
 */
const PALETTE = [
  { gradient: "from-blue-50 via-white to-sky-50", icon: "from-blue-500 to-blue-600", shadow: "shadow-blue-500/30" },
  { gradient: "from-purple-50 via-white to-fuchsia-50", icon: "from-purple-500 to-fuchsia-600", shadow: "shadow-purple-500/30" },
  { gradient: "from-emerald-50 via-white to-teal-50", icon: "from-emerald-500 to-teal-600", shadow: "shadow-emerald-500/30" },
  { gradient: "from-amber-50 via-white to-orange-50", icon: "from-amber-500 to-orange-600", shadow: "shadow-amber-500/30" },
  { gradient: "from-rose-50 via-white to-pink-50", icon: "from-rose-500 to-pink-600", shadow: "shadow-rose-500/30" },
  { gradient: "from-cyan-50 via-white to-blue-50", icon: "from-cyan-500 to-blue-600", shadow: "shadow-cyan-500/30" },
  { gradient: "from-indigo-50 via-white to-violet-50", icon: "from-indigo-500 to-violet-600", shadow: "shadow-indigo-500/30" },
  { gradient: "from-lime-50 via-white to-emerald-50", icon: "from-lime-500 to-emerald-600", shadow: "shadow-lime-500/30" },
];

/**
 * A horizontally-swipeable row of light-gradient cards. Uses native CSS
 * scroll-snap instead of a JS drag/carousel library- free on mobile,
 * works with touch out of the box, no motion library needed for the
 * scrolling itself (the two nav buttons just call scrollBy).
 */
export function GradientCardCarousel({
  cards,
  className,
}: {
  cards: GradientCarouselCard[];
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 320;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-8 pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card, i) => {
          const palette = PALETTE[i % PALETTE.length];
          const cardClassName = cn(
            "group relative snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[30%] rounded-2xl border border-black/5 p-6 sm:p-7 pt-12 sm:pt-14",
            "bg-gradient-to-br shadow-(--shadow-card) transition-all duration-200 hover:-translate-y-1 hover:shadow-(--shadow-card-hover)",
            card.href && "hover:border-primary/40",
            card.gradient ?? palette.gradient
          );
          const content = (
            <>
              {card.icon && (
                <span
                  className={cn(
                    "absolute -top-5 left-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                    "shadow-lg ring-1 ring-white/70 ring-inset",
                    palette.icon,
                    palette.shadow
                  )}
                >
                  {card.icon}
                </span>
              )}
              <h3 className="text-base sm:text-lg font-bold text-(--ink-1) [font-family:var(--font-syne)] mb-2">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-(--ink-3)">{card.description}</p>
              {card.footnote && (
                <p className="text-xs font-bold text-green-600 mt-3">{card.footnote}</p>
              )}
            </>
          );
          return card.href ? (
            <Link key={card.title + i} href={card.href} className={cardClassName}>
              {content}
            </Link>
          ) : (
            <div key={card.title + i} className={cardClassName}>
              {content}
            </div>
          );
        })}
      </div>

      {/* Desktop nav arrows- hidden on touch/mobile where swipe is natural */}
      <div className="hidden sm:flex justify-end gap-2 mt-2">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="h-9 w-9 rounded-full border border-(--border-subtle) bg-white flex items-center justify-center text-(--ink-2) hover:border-primary hover:text-primary transition-colors cursor-pointer"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="h-9 w-9 rounded-full border border-(--border-subtle) bg-white flex items-center justify-center text-(--ink-2) hover:border-primary hover:text-primary transition-colors cursor-pointer"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
