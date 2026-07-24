/**
 * Single shared GSAP instance for the whole app. GSAP + its plugins must only
 * be registered once- importing "gsap" fresh in every component works, but
 * registerPlugin() is idempotent-unsafe with fast refresh in dev, so this
 * module is the one place that does it. Everything else imports gsap from here.
 */
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function getGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export { ScrollTrigger };
export default gsap;
