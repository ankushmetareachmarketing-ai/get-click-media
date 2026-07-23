"use client";

import React from "react";
import { useMagnetic } from "@/hooks/use-magnetic";

export interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  disabled?: boolean;
}

/**
 * Wrap any single interactive child (button, link) to make it drift toward
 * the cursor on hover. No-ops on touch devices and prefers-reduced-motion.
 *
 *   <Magnetic><Button>Request a demo</Button></Magnetic>
 */
export function Magnetic({ children, className, strength, disabled }: MagneticProps) {
  const ref = useMagnetic<HTMLDivElement>({ strength, disabled });
  return (
    <div ref={ref} className={className} style={{ display: "inline-flex" }}>
      {children}
    </div>
  );
}
