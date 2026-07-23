import type { gsap } from "gsap";
import { DURATION, EASE, REVEAL_DISTANCE } from "./config";

export type PresetName =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "scale-in"
  | "blur-reveal";

type Vars = gsap.TweenVars;

interface PresetDef {
  from: Vars;
  to: Vars;
}

const D = REVEAL_DISTANCE;

/**
 * from/to pairs for every reveal preset. `to` intentionally omits
 * duration/ease/delay/stagger — callers (useReveal, Reveal, RevealInit) merge
 * those in per-instance so one preset table drives every entry point.
 */
export const PRESETS: Record<PresetName, PresetDef> = {
  "fade-up": {
    from: { opacity: 0, y: D },
    to: { opacity: 1, y: 0 },
  },
  "fade-down": {
    from: { opacity: 0, y: -D },
    to: { opacity: 1, y: 0 },
  },
  "fade-left": {
    from: { opacity: 0, x: D },
    to: { opacity: 1, x: 0 },
  },
  "fade-right": {
    from: { opacity: 0, x: -D },
    to: { opacity: 1, x: 0 },
  },
  "fade-in": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "scale-in": {
    from: { opacity: 0, scale: 0.92 },
    to: { opacity: 1, scale: 1 },
  },
  "blur-reveal": {
    from: { opacity: 0, y: D * 0.6, filter: "blur(10px)" },
    to: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

export function isPresetName(value: string | undefined | null): value is PresetName {
  return !!value && value in PRESETS;
}

export const DEFAULT_TWEEN: Vars = {
  duration: DURATION.base,
  ease: EASE.out,
};
