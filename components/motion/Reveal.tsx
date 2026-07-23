"use client";

import React from "react";
import { useReveal, type UseRevealOptions } from "@/hooks/use-reveal";
import type { PresetName } from "@/lib/animation/presets";

export interface RevealProps extends UseRevealOptions {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  preset?: PresetName;
}

/**
 * Declarative scroll-reveal wrapper for JSX call sites:
 *
 *   <Reveal preset="fade-up"><h2>Heading</h2></Reveal>
 *   <Reveal preset="fade-up" stagger><Card /><Card /><Card /></Reveal>
 *
 * For markup you don't control directly (CMS/MDX content, deeply nested
 * trees), prefer the `data-reveal="fade-up"` attribute instead — see
 * components/motion/RevealInit.tsx. Both read the same preset table.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  preset,
  stagger,
  delay,
  duration,
  repeat,
  start,
  disabled,
}: RevealProps) {
  const ref = useReveal({ preset, stagger, delay, duration, repeat, start, disabled });
  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
