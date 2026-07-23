"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/animation/gsap";
import { prefersReducedMotion } from "@/lib/animation/config";

/**
 * Next.js re-mounts template.tsx on every navigation (unlike layout.tsx),
 * making it the correct App Router primitive for a per-page enter
 * transition. Keep this cheap — it wraps every route including the 40+
 * programmatic SEO pages, so no imports beyond the shared gsap singleton.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;
    const gsap = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
