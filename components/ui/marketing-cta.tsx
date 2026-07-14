"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import { cn } from "@/lib/utils";

export interface MarketingCtaProps {
  label: string;
  /** Omit to open the sitewide lead-capture modal instead of navigating. */
  href?: string;
  variant?: "primary" | "secondary";
  /** Which kind of section background this sits on — controls contrast. */
  tone?: "light" | "dark";
  className?: string;
}

const STYLES: Record<string, string> = {
  "primary-light":
    "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.4)]",
  "primary-dark": "bg-white text-[#1e3a8a] shadow-lg hover:shadow-xl",
  "secondary-light":
    "border border-(--border-subtle) text-(--ink-1) bg-transparent hover:border-blue-300 hover:bg-blue-50/50",
  "secondary-dark": "border border-white/30 text-white bg-transparent hover:bg-white/10",
};

/**
 * The one pill CTA button for this page's net-new touchpoints — 52px tall,
 * 999px radius, arrow that shifts on hover. `href` renders a Link; omitting
 * it opens the sitewide lead-capture modal (the only mechanism on the site
 * that actually persists a lead), matching how Header/CTABanner already do it.
 */
export function MarketingCta({ label, href, variant = "primary", tone = "light", className }: MarketingCtaProps) {
  const openModal = useModalStore((s) => s.openModal);

  const sharedClassName = cn(
    "group inline-flex h-[52px] items-center justify-center gap-2 rounded-full px-[30px] text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer",
    STYLES[`${variant}-${tone}`],
    className
  );

  const content = (
    <>
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={openModal} className={sharedClassName}>
      {content}
    </button>
  );
}
