"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { getGsap, ScrollTrigger } from "@/lib/animation/gsap";
import { prefersReducedMotion } from "@/lib/animation/config";

/**
 * Mounts once in the root layout. Drives Lenis smooth scroll off GSAP's
 * ticker so Lenis and ScrollTrigger stay on the same clock — the standard
 * Lenis+GSAP wiring (lenis.raf inside gsap.ticker, ScrollTrigger.update on
 * every Lenis scroll event, ticker.lagSmoothing(0) so tab-switch jank never
 * produces a giant catch-up jump).
 *
 * No-ops entirely under prefers-reduced-motion: native scroll, no Lenis
 * instance, ScrollTrigger still registered so reveal animations keep working.
 */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const gsap = getGsap();
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -8 * t)),
      wheelMultiplier: 1.15,
      smoothWheel: true,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Route changes: jump instantly (no smoothing) so Next's own scroll
  // handling and Lenis's animated position don't fight each other.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
