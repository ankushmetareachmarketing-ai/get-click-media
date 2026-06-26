"use client";

import { useEffect } from "react";

export default function GSAPPageAnimations() {
  useEffect(() => {
    let ctx: { revert(): void } | undefined;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        // ── Hero entrance (runs on load, no scroll trigger) ─────────────────
        const hero = document.querySelector<HTMLElement>("section[class*='rounded-2xl']");
        if (hero) {
          const center = hero.querySelector<HTMLElement>('[class*="flex-col"][class*="items-center"]');
          if (center) {
            gsap.fromTo(
              Array.from(center.children).slice(0, 4),
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.9, stagger: 0.14, ease: "power3.out", delay: 0.2 },
            );
          }
        }

        // ── Section heading areas on scroll ─────────────────────────────────
        // Only targets the badge + h2 + subtitle paragraph group (text-center blocks)
        document
          .querySelectorAll<HTMLElement>("section:not([data-gsap-own]) [class*='text-center']")
          .forEach(group => {
            const children = Array.from(group.children) as HTMLElement[];
            if (children.length < 2) return;
            gsap.fromTo(
              children,
              { opacity: 0, y: 28 },
              {
                opacity: 1, y: 0,
                duration: 0.8, stagger: 0.12, ease: "power3.out",
                scrollTrigger: { trigger: group, start: "top 82%", once: true },
              },
            );
          });

        // ── Each section's main content block ───────────────────────────────
        // Animate the whole inner container as one unit — not individual elements
        document
          .querySelectorAll<HTMLElement>("section:not([data-gsap-own]) > div")
          .forEach(block => {
            gsap.fromTo(
              block,
              { opacity: 0, y: 24 },
              {
                opacity: 1, y: 0,
                duration: 0.85, ease: "power2.out",
                scrollTrigger: { trigger: block, start: "top 80%", once: true },
              },
            );
          });

      });
    };

    init();
    return () => ctx?.revert();
  }, []);

  return null;
}
