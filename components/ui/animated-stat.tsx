"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

export interface AnimatedStatProps {
  /** e.g. "10,000+", "98%", "3–5 Days", "24×7" */
  value: string;
  className?: string;
}

function parseValue(value: string) {
  const match = value.match(/[\d,]+/);
  if (!match || match.index === undefined) return null;
  const numeric = Number(match[0].replace(/,/g, ""));
  if (!Number.isFinite(numeric)) return null;
  return {
    numeric,
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + match[0].length),
    hasCommas: match[0].includes(","),
  };
}

/**
 * Counts a stat up from 0 when it scrolls into view. Only the leading numeric
 * run animates- any surrounding text ("+", "%", "Days", "×7"...) is preserved
 * as a static prefix/suffix around it.
 */
export function AnimatedStat({ value, className }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parseValue(value);

  useEffect(() => {
    if (!parsed || !ref.current || !isInView) return;
    const el = ref.current;
    const controls = animate(0, parsed.numeric, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        const rounded = Math.round(v);
        const formatted = parsed.hasCommas ? rounded.toLocaleString("en-IN") : String(rounded);
        el.textContent = `${parsed.prefix}${formatted}${parsed.suffix}`;
      },
    });
    return () => controls.stop();
  }, [isInView, parsed]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}0{parsed.suffix}
    </span>
  );
}
