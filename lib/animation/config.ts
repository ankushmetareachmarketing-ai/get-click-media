/**
 * Central animation configuration — durations, eases and the reduced-motion
 * check every hook/preset in lib/animation and components/motion reads from.
 * Change values here to retune motion across the entire site at once.
 */

export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  soft: "power1.out",
  back: "back.out(1.6)",
  expo: "expo.out",
} as const;

export const DURATION = {
  fast: 0.35,
  base: 0.7,
  slow: 1.1,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.1,
  loose: 0.16,
} as const;

/** Distance (px) travelled by directional reveal presets. */
export const REVEAL_DISTANCE = 32;

/** Default ScrollTrigger start position for viewport-entry reveals. */
export const REVEAL_START = "top 85%";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
