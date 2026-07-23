"use client";

import { useEffect, useRef } from "react";
import { getGsap, ScrollTrigger } from "@/lib/animation/gsap";
import { prefersReducedMotion } from "@/lib/animation/config";

/**
 * Slim fixed progress bar tracking overall page scroll. Mount once, anywhere
 * high in the tree (it's fixed-position and renders its own DOM node).
 */
export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current || prefersReducedMotion()) return;

    const gsap = getGsap();
    const setScale = gsap.quickTo(barRef.current, "scaleX", { duration: 0.15, ease: "none" });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => setScale(self.progress),
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="gsap-fixed-ui fixed top-0 left-0 right-0 h-0.75 z-10000 origin-left pointer-events-none"
      style={{
        background: "linear-gradient(90deg,var(--primary),var(--primary-light))",
        transform: "scaleX(0)",
      }}
      ref={barRef}
    />
  );
}
