"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getGsap, ScrollTrigger } from "@/lib/animation/gsap";
import { DEFAULT_TWEEN, isPresetName, PRESETS } from "@/lib/animation/presets";
import { prefersReducedMotion, REVEAL_START, STAGGER } from "@/lib/animation/config";

const SCANNED_ATTR = "data-reveal-done";

/**
 * Zero-JS-authoring scroll reveal engine. Mounted once in the root layout.
 * Any element anywhere in the app- existing page or one added tomorrow-
 * gets scroll-triggered entrance animation just by carrying `data-reveal`:
 *
 *   <div data-reveal="fade-up">...</div>
 *   <div data-reveal="fade-up" data-reveal-stagger>
 *     <Card /><Card /><Card />   // each child staggers in
 *   </div>
 *   <div data-reveal="scale-in" data-reveal-delay="0.15" data-reveal-repeat>
 *
 * This is what every new page/component "automatically inherits" without
 * touching layout code- no hook, no import, just the attribute.
 */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const gsap = getGsap();

    // Drop ScrollTriggers whose trigger element no longer exists (previous route)-
    // this is the engine's garbage collection; RevealInit itself never unmounts.
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger && !document.body.contains(st.trigger)) st.kill();
    });

    const nodes = document.querySelectorAll<HTMLElement>(
      `[data-reveal]:not([${SCANNED_ATTR}])`
    );

    nodes.forEach((el) => {
      const presetName = el.getAttribute("data-reveal");
      if (!isPresetName(presetName)) return;
      el.setAttribute(SCANNED_ATTR, "1");

      const staggerAttr = el.getAttribute("data-reveal-stagger");
      const isStagger = staggerAttr !== null;
      const staggerValue = staggerAttr && !Number.isNaN(Number(staggerAttr))
        ? Number(staggerAttr)
        : STAGGER.base;

      const target = isStagger ? Array.from(el.children) : el;
      if (isStagger && (target as Element[]).length === 0) return;

      const def = PRESETS[presetName];
      const delay = Number(el.getAttribute("data-reveal-delay")) || 0;
      const duration = Number(el.getAttribute("data-reveal-duration")) || DEFAULT_TWEEN.duration;
      const start = el.getAttribute("data-reveal-start") || REVEAL_START;
      const repeat = el.hasAttribute("data-reveal-repeat");

      gsap.fromTo(target, def.from, {
        ...def.to,
        ...DEFAULT_TWEEN,
        duration,
        delay,
        stagger: isStagger ? staggerValue : undefined,
        scrollTrigger: {
          trigger: el,
          start,
          once: !repeat,
          toggleActions: repeat ? "play reverse play reverse" : "play none none none",
        },
      });
    });

    // Layout can still be settling (fonts, images) right after route change.
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(refresh);
  }, [pathname]);

  return null;
}
