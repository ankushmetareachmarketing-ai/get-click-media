"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  /** Seconds for one full loop — lower is faster. */
  speed?: number;
  pauseOnHover?: boolean;
}

/**
 * Infinite CSS marquee — duplicates its children once so the loop is
 * seamless, driven by the animate-marquee-left/right keyframes already
 * defined in globals.css (pure CSS transform, GPU-composited, no GSAP
 * ticker needed for something this simple).
 */
export function Marquee({
  children,
  className,
  direction = "left",
  speed = 38,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <div
        className={cn(
          "flex w-max",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
