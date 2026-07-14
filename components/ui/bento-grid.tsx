import React, { type ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  tone = "light",
}: {
  className?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  /** span 2 columns on sm+ — use for one hero-ish standout tile per grid */
  span?: boolean;
  /** Which kind of section background this card sits on. */
  tone?: "light" | "dark";
}) => {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5",
        isDark
          ? "border border-white/10 bg-white/5 hover:border-[#38bdf8]/40"
          : "border border-(--border-subtle) bg-(--surface) shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:border-primary/30",
        span && "sm:col-span-2 lg:col-span-1",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
        }}
      />
      {icon && (
        <span
          className={cn(
            "relative mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl",
            isDark ? "bg-white/10 text-[#38bdf8]" : "bg-blue-50 text-primary"
          )}
        >
          {icon}
        </span>
      )}
      <h3
        className={cn(
          "relative text-sm font-bold [font-family:var(--font-syne)]",
          isDark ? "text-white" : "text-(--ink-1)"
        )}
      >
        {title}
      </h3>
      {description && (
        <p className={cn("relative mt-1.5 text-sm leading-relaxed", isDark ? "text-white/50" : "text-(--ink-3)")}>
          {description}
        </p>
      )}
    </div>
  );
};

export interface BentoCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  /**
   * Grid placement — pass explicit `lg:col-start-*`/`lg:col-end-*`/
   * `lg:row-start-*`/`lg:row-end-*` here for a true asymmetric bento layout
   * (tiles of different sizes), matched against `BentoGrid`'s own
   * `lg:grid-cols-*`/`lg:grid-rows-*`. Omit for a plain equal-size tile.
   */
  className?: string;
  /** Optional decorative layer (image, gradient, pattern) behind the content. */
  background?: ReactNode;
  href?: string;
  cta?: string;
  /** Which kind of section background this card sits on. */
  tone?: "light" | "dark";
}

/**
 * The richer bento tile — same tokens/hover language as `BentoGridItem`,
 * but supports a background layer and an optional hover-reveal CTA link,
 * and is meant to be positioned via explicit grid-line classes for a real
 * varied-size bento layout (see `BentoGrid`'s doc comment for an example).
 */
export const BentoCard = ({
  name,
  description,
  icon: Icon,
  className,
  background,
  href,
  cta,
  tone = "light",
}: BentoCardProps) => {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-300",
        isDark
          ? "border border-white/10 bg-white/5 hover:border-white/20"
          : "border border-(--border-subtle) bg-(--surface) shadow-(--shadow-card) hover:shadow-(--shadow-card-hover)",
        className
      )}
    >
      {background && <div className="absolute inset-0">{background}</div>}

      <div className="relative z-10 flex flex-col gap-2 p-6 transition-transform duration-300 group-hover:-translate-y-1">
        <Icon
          className={cn(
            "h-9 w-9 mb-1 transition-transform duration-300 group-hover:scale-90",
            isDark ? "text-[#38bdf8]" : "text-primary"
          )}
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <h3
          className={cn(
            "text-lg font-bold [font-family:var(--font-syne)]",
            isDark ? "text-white" : "text-(--ink-1)"
          )}
        >
          {name}
        </h3>
        <p className={cn("text-sm leading-relaxed", isDark ? "text-white/50" : "text-(--ink-3)")}>{description}</p>
      </div>

      {href && cta && (
        <div className="relative z-10 pointer-events-none flex translate-y-2 items-center p-6 pt-0 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            variant="ghost"
            asChild
            size="sm"
            className={cn("pointer-events-auto px-0", isDark && "text-[#38bdf8] hover:text-white hover:bg-transparent")}
          >
            <a href={href}>
              {cta}
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      )}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-all duration-300",
          isDark ? "group-hover:bg-white/[0.03]" : "group-hover:bg-black/[0.02]"
        )}
      />
    </div>
  );
};
