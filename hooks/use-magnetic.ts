"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/animation/gsap";
import { prefersReducedMotion } from "@/lib/animation/config";

export interface UseMagneticOptions {
  /** How far the element travels toward the cursor, as a fraction of cursor offset. */
  strength?: number;
  disabled?: boolean;
}

/**
 * Magnetic hover: the element eases toward the cursor while it's within
 * bounds, then springs back on leave. Meant for buttons / icon targets.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>({
  strength = 0.35,
  disabled = false,
}: UseMagneticOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (disabled || !el || prefersReducedMotion()) return;
    // Magnetic pull only makes sense with a precise pointer.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const gsap = getGsap();
    const quickX = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      quickX(relX * strength);
      quickY(relY * strength);
    };

    const onLeave = () => {
      quickX(0);
      quickY(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, disabled]);

  return ref;
}
