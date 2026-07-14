"use client";

import React, { useId, useState } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "motion/react";

/**
 * A faint grid-line background that continuously drifts and reveals a
 * brighter patch of the grid around the cursor via a radial mask. Meant to
 * sit as an absolutely-positioned layer inside a `relative` dark container —
 * see `AnimatedGridBackground` below for the piece actually meant for reuse
 * (e.g. inside `DarkHero`). This full-page `Component` is kept as the
 * original standalone demo.
 */
export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <AnimatedGridBackground />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-green-500/40 dark:bg-green-600/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 dark:bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-6 pointer-events-none">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            The Infinite Grid
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Move your cursor to reveal the active grid layer. <br />
            The pattern scrolls infinitely in the background.
          </p>
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={() => setCount(count + 1)}
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all shadow-md active:scale-95"
          >
            Interact ({count})
          </button>
          <button className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/80 transition-all active:scale-95">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * The reusable piece: two stacked grid-line layers (a very low-opacity base
 * grid, plus a brighter copy revealed only inside a radial mask that follows
 * the cursor) that continuously drift. Drop it as the first child of any
 * `relative overflow-hidden` dark container — it fills via `absolute inset-0`
 * and never blocks clicks on the content rendered after it.
 */
export function AnimatedGridBackground({
  className,
  lineClassName = "text-white",
  /** Opacity of the always-visible base grid — tune up on light backgrounds. */
  baseOpacity = 0.05,
  /** Opacity of the copy revealed inside the cursor-following radial mask. */
  revealOpacity = 0.4,
}: {
  className?: string;
  /** Tailwind text-color class controlling the grid line color (uses currentColor via stroke). */
  lineClassName?: string;
  baseOpacity?: number;
  revealOpacity?: number;
}) {
  // Each mounted instance needs its own <pattern> id — a duplicate id would
  // make every `url(#id)` reference resolve to only the first one in the DOM.
  // useId (not a module-level counter) keeps server and client render in sync.
  const patternId = `infinite-grid-pattern-${useId()}`;

  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5;
  const speedY = 0.5;

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + speedX) % 40);
    gridOffsetY.set((gridOffsetY.get() + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      className={cn("absolute inset-0 z-10 overflow-hidden", className)}
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
    >
      <div className="absolute inset-0" style={{ opacity: baseOpacity }}>
        <GridPattern patternId={patternId} offsetX={gridOffsetX} offsetY={gridOffsetY} lineClassName={lineClassName} />
      </div>
      <motion.div className="absolute inset-0" style={{ opacity: revealOpacity, maskImage, WebkitMaskImage: maskImage }}>
        <GridPattern patternId={patternId} offsetX={gridOffsetX} offsetY={gridOffsetY} lineClassName={lineClassName} />
      </motion.div>
    </div>
  );
}

const GridPattern = ({
  patternId,
  offsetX,
  offsetY,
  lineClassName,
}: {
  patternId: string;
  offsetX: any;
  offsetY: any;
  lineClassName: string;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern id={patternId} width="40" height="40" patternUnits="userSpaceOnUse" x={offsetX} y={offsetY}>
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className={lineClassName} />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
