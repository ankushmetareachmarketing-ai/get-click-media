"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/animation/gsap";
import { prefersReducedMotion } from "@/lib/animation/config";

export interface UseCounterOptions {
  to: number;
  from?: number;
  duration?: number;
  /** Formats the rounded value for display, e.g. add commas/prefix/suffix. */
  format?: (value: number) => string;
  disabled?: boolean;
}

/**
 * Counts a number up when its element scrolls into view. Writes directly to
 * textContent via GSAP's tick (cheaper than a React state update per frame).
 */
export function useCounter<T extends HTMLElement = HTMLElement>({
  to,
  from = 0,
  duration = 1.6,
  format = (v) => String(v),
  disabled = false,
}: UseCounterOptions) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (disabled || prefersReducedMotion()) {
      el.textContent = format(to);
      return;
    }

    const gsap = getGsap();
    const state = { value: from };
    const ctx = gsap.context(() => {
      gsap.to(state, {
        value: to,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(Math.round(state.value));
        },
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [to, from, duration, format, disabled]);

  return ref;
}
