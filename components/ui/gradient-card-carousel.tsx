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
  /** Optional extra line under the description — e.g. a result stat like "+45% conversion" */
  footnote?: string;
  href?: string;
}

/**
 * A horizontally-swipeable row of light-gradient cards. Uses native CSS
 * scroll-snap instead of a JS drag/carousel library — free on mobile,
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
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-5 px-5 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card, i) => {
          const cardClassName = cn(
            "group relative snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[30%] rounded-2xl border border-blue-100/60 p-6 sm:p-7",
            "bg-gradient-to-br shadow-(--shadow-card) transition-all duration-200 hover:-translate-y-1 hover:shadow-(--shadow-card-hover)",
            card.href && "hover:border-primary/40",
            card.gradient ?? "from-blue-50 via-white to-sky-50"
          );
          const content = (
            <>
              {card.icon && (
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-(--shadow-card)">
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

      {/* Desktop nav arrows — hidden on touch/mobile where swipe is natural */}
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
