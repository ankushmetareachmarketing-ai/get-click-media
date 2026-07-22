"use client";

import { useModalStore } from "@/store/useModalStore";
import { cn } from "@/lib/utils";

export function PricingTierCta({ label, href, highlighted }: { label: string; href?: string; highlighted: boolean }) {
  const openModal = useModalStore((s) => s.openModal);

  if (href) {
    return (
      <a
        href={href}
        className="inline-flex items-center justify-center px-5 sm:px-6 h-11 sm:h-12 rounded-full border border-(--border-subtle) bg-white text-gray-600 text-sm font-semibold hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-blue-50/30 transition-all duration-150"
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={openModal}
      className={cn(
        "inline-flex items-center gap-2 px-5 sm:px-6 h-11 sm:h-12 rounded-full text-sm font-bold justify-center transition-all duration-200 cursor-pointer",
        highlighted
          ? "bg-[linear-gradient(135deg,#2563eb,#3b82f6)] text-white shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:scale-105"
          : "border border-(--border-subtle) bg-white text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-blue-50/30"
      )}
    >
      {label}
    </button>
  );
}
