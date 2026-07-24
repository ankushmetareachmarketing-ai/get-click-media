"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/animation/gsap";
import { prefersReducedMotion } from "@/lib/animation/config";

export interface UseParallaxOptions {
  /** Px of vertical travel across the scroll range. Negative = moves up. */
  distance?: number;
  /** Pin the element in place while its trigger track scrolls past- powers "sticky reveal" sections. */
  pin?: boolean;
  /** ScrollTrigger scrub value. `true` ties motion 1:1 to scroll position. */
  scrub?: boolean | number;
  start?: string;
  end?: string;
  disabled?: boolean;
}

/**
 * Scroll-linked vertical parallax, with an optional pin mode for
 * sticky-reveal sections (element stays fixed while content scrolls past it).
 */
export function useParallax<T extends HTMLElement = HTMLElement>({
  distance = -80,
  pin = false,
  scrub = true,
  start = "top bottom",
  end = "bottom top",
  disabled = false,
}: UseParallaxOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (disabled || !ref.current || prefersReducedMotion()) return;

    const gsap = getGsap();
    const ctx = gsap.context(() => {
      if (pin) {
        gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end,
            pin: true,
            scrub,
          },
        });
      } else {
        gsap.fromTo(
          ref.current,
          { y: 0 },
          {
            y: distance,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start,
              end,
              scrub,
            },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [distance, pin, scrub, start, end, disabled]);

  return ref;
}
