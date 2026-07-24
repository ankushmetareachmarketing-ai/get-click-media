"use client";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * Aceternity-style Spotlight, recolored to the brand blue scale
 * (--primary / --primary-light) instead of Aceternity's stock purple.
 * Pure SVG + CSS opacity fade- no JS animation loop, so it's free on
 * mobile and doesn't fight prefers-reduced-motion.
 */
export const Spotlight = ({
  className,
  fill = "#38bdf8",
  /** Aceternity's default reads well on near-black canvases; light
   *  (bg-white/bg-gray) heroes need a stronger fill to actually show up. */
  fillOpacity = 0.21,
}: {
  className?: string;
  fill?: string;
  fillOpacity?: number;
}) => {
  return (
    <svg
      // Fixed width + auto height (SVG keeps its own aspect ratio via viewBox)-
      // percentage sizing here would need the parent to have an explicit height,
      // which a content-sized hero section doesn't have, so it silently collapses.
      className={cn(
        "pointer-events-none absolute z-0 w-[56rem] max-w-none animate-spotlight-fade opacity-0 sm:w-[72rem] lg:w-[90rem]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#spotlight-blur)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          fillOpacity={fillOpacity}
        ></ellipse>
      </g>
      <defs>
        <filter
          id="spotlight-blur"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
