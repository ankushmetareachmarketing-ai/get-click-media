"use client";

import { Users, TrendingUp, Rocket, Clock3 } from "lucide-react";
import { AnimatedStat } from "@/components/ui/animated-stat";

const STATS = [
  { icon: Users, value: "10,000+", label: "Businesses Served" },
  { icon: TrendingUp, value: "98%", label: "Message Open Rate" },
  { icon: Rocket, value: "3–5 Days", label: "Go-Live Timeline" },
  { icon: Clock3, value: "24×7", label: "Support Response" },
];

/**
 * Clean, icon-led stat strip right under the hero — four numbers, no CTA,
 * count-up on scroll into view.
 */
export default function WhatsappStatBand() {
  return (
    <section aria-label="WhatsApp Business API trust stats" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-12 sm:py-14">
        <h2 className="sr-only">
          Trusted WhatsApp Business API provider for thousands of businesses across India
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 sm:divide-x divide-(--border-subtle)">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2 sm:px-6">
              <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <AnimatedStat value={value} className="text-3xl sm:text-4xl font-extrabold text-(--ink-1) leading-tight tracking-tight" />
              <span className="text-sm text-(--ink-3)">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
