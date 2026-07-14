import React from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style BentoGrid, recolored/restyled to the site's card tokens
 * (--surface, --border-subtle, --shadow-card) instead of Aceternity's stock
 * dark-mode-first neutral palette. Pure CSS hover — no JS, so it's free on
 * mobile and never needs a reduced-motion guard.
 */
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  span = false,
}: {
  className?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  /** span 2 columns on sm+ — use for one hero-ish standout tile per grid */
  span?: boolean;
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-(--border-subtle) bg-(--surface) p-5 sm:p-6",
        "shadow-(--shadow-card) transition-all duration-200 hover:-translate-y-0.5 hover:shadow-(--shadow-card-hover) hover:border-primary/30",
        span && "sm:col-span-2 lg:col-span-1",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }}
      />
      {icon && (
        <span className="relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
          {icon}
        </span>
      )}
      <h3 className="relative text-sm font-bold text-(--ink-1) [font-family:var(--font-syne)]">
        {title}
      </h3>
      {description && (
        <p className="relative mt-1.5 text-sm leading-relaxed text-(--ink-3)">
          {description}
        </p>
      )}
    </div>
  );
};
