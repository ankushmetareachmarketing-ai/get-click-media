"use client";

import { Shield, TrendingUp, CheckCircle, Clock } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";

const stats = [
  { icon: Shield, value: "10,000+", label: "Businesses" },
  { icon: TrendingUp, value: "99.9%", label: "Delivery Rate" },
  { icon: CheckCircle, value: "DLT", label: "Compliant" },
  { icon: Clock, value: "24/7", label: "Support" },
];

export default function TransactionalSmsTrustBar() {
  const openModal = useModalStore((s) => s.openModal);

  return (
    <section aria-label="Transactional SMS trust stats strip" className="bg-white border-y border-(--border-subtle)">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
        <h2 className="sr-only">
          Trusted transactional SMS provider for thousands of businesses across India
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 flex-1 divide-y sm:divide-y-0 sm:divide-x divide-(--border-subtle) w-full">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-1.5 py-4 sm:py-0 sm:px-6"
              >
                <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-3xl font-extrabold text-(--ink-1) leading-tight">{value}</span>
                <span className="text-sm text-(--ink-3)">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 sm:pl-8">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-2 px-5 sm:px-6 h-11 sm:h-12 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-sm font-bold shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Get Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
