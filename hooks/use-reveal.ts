"use client";

import { useEffect, useRef } from "react";
import { getGsap, ScrollTrigger } from "@/lib/animation/gsap";
import { DEFAULT_TWEEN, PRESETS, type PresetName } from "@/lib/animation/presets";
import { prefersReducedMotion, REVEAL_START, STAGGER } from "@/lib/animation/config";

export interface UseRevealOptions {
  preset?: PresetName;
  /** Animate direct children as a stagger group instead of the container itself. */
  stagger?: boolean | number;
  delay?: number;
  duration?: number;
  /** Re-run every time the element re-enters the viewport instead of once. */
  repeat?: boolean;
  /** ScrollTrigger `start`. Defaults to "top 85%". */
  start?: string;
  disabled?: boolean;
}

/**
 * Imperative scroll-reveal for a single ref. Powers <Reveal> and any
 * component that wants a preset animation without going through JSX props.
 */
export function useReveal<T extends HTMLElement = HTMLElement>({
  preset = "fade-up",
  stagger = false,
  delay = 0,
  duration,
  repeat = false,
  start = REVEAL_START,
  disabled = false,
}: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (disabled || !ref.current) return;
    if (prefersReducedMotion()) return;

    const gsap = getGsap();
    const def = PRESETS[preset];
    const target = stagger ? Array.from(ref.current.children) : ref.current;
    if (stagger && (target as Element[]).length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(target, def.from, {
        ...def.to,
        ...DEFAULT_TWEEN,
        duration: duration ?? DEFAULT_TWEEN.duration,
        delay,
        stagger: stagger ? (typeof stagger === "number" ? stagger : STAGGER.base) : undefined,
        scrollTrigger: {
          trigger: ref.current,
          start,
          once: !repeat,
          toggleActions: repeat ? "play reverse play reverse" : "play none none none",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [preset, stagger, delay, duration, repeat, start, disabled]);

  return ref;
}

/** Force a ScrollTrigger recalculation — call after layout-affecting async content loads. */
export function refreshScrollTrigger() {
  if (typeof window === "undefined") return;
  ScrollTrigger.refresh();
}
