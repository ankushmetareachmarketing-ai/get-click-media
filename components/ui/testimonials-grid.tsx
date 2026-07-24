"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  image: string;
  name: string;
  role: string;
  text: string;
}

export interface TestimonialsGridProps {
  testimonials: TestimonialItem[];
  className?: string;
  /** Cards shown before the "Load More" reveal- omit to show every card. */
  maxDisplayed?: number;
}

/**
 * A card grid of testimonials with a "Load More" reveal- global, reusable
 * (no page-specific copy baked in). Callers own the section wrapper/heading,
 * same as every other section on this page (eyebrow + H2 pattern), so this
 * component is just the grid + expand behaviour.
 */
export function TestimonialsGrid({ testimonials, className, maxDisplayed = 6 }: TestimonialsGridProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = testimonials.slice(0, showAll ? undefined : maxDisplayed);
  const hasMore = testimonials.length > maxDisplayed && !showAll;

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          hasMore && "max-h-[760px] overflow-hidden"
        )}
      >
        {visible.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-(--border-subtle) bg-white p-6 shadow-(--shadow-card)"
          >
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- external avatar URLs, same pattern as testimonials-columns-1.tsx */}
              <img src={t.image} alt={t.name} width={44} height={44} className="rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-(--ink-1)">{t.name}</p>
                <p className="text-xs text-(--ink-3)">{t.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-(--ink-2)">{t.text}</p>
          </div>
        ))}
      </div>

      {hasMore && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
          <div className="relative mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex h-11 items-center rounded-full border border-(--border-subtle) bg-white px-6 text-sm font-semibold text-(--ink-1) shadow-(--shadow-card) transition-all duration-200 hover:shadow-(--shadow-card-hover) cursor-pointer"
            >
              Load More
            </button>
          </div>
        </>
      )}
    </div>
  );
}
