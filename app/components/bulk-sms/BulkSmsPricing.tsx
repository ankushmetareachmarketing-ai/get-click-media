"use client";

import { useModalStore } from "@/store/useModalStore";

const plans = [
  {
    name: "Starter",
    price: "₹0.12",
    unit: "/ SMS",
    volume: "Up to 10,000 SMS/month",
    badge: null,
    features: [
      "Transactional & Promotional SMS",
      "DLT Registration Support",
      "Basic Analytics Dashboard",
      "Email Support",
      "REST API Access",
    ],
    cta: {
      label: "Get Started",
      type: "secondary" as const,
      href: "#",
    },
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹0.09",
    unit: "/ SMS",
    volume: "Up to 1,00,000 SMS/month",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Priority Delivery Queue",
      "Advanced Analytics & Reports",
      "Dedicated Account Manager",
      "24×7 Phone Support",
    ],
    cta: {
      label: "Get Free Demo",
      type: "primary" as const,
      href: null,
    },
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    unit: null,
    volume: "Unlimited SMS",
    badge: null,
    features: [
      "Everything in Growth",
      "Custom SLA & Uptime Guarantee",
      "White-label Options",
      "Dedicated Infrastructure",
      "On-site Integration Support",
    ],
    cta: {
      label: "Contact Sales",
      type: "secondary" as const,
      href: "#",
    },
    highlighted: false,
  },
];

export default function BulkSmsPricing() {
  const { openModal } = useModalStore();

  return (
    <section
      aria-label="Pricing plans section"
      className="py-20 sm:py-28 bg-(--surface-0)"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-primary">
            Transparent Pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1) text-center mb-3">
          Bulk SMS Pricing for Indian Businesses
        </h2>

        {/* Subheading */}
        <p className="text-center text-(--ink-3) text-base sm:text-lg mb-12 sm:mb-16">
          No hidden charges. DLT assistance included in all plans.
        </p>

        {/* Cards grid */}
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={[
                "bg-white rounded-xl flex flex-col p-6 sm:p-8 relative",
                plan.highlighted
                  ? "border-2 border-primary shadow-(--shadow-elevated)"
                  : "border border-(--border-subtle) shadow-(--shadow-card)",
              ].join(" ")}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-base sm:text-lg [font-family:var(--font-syne)] font-semibold text-(--ink-1) mb-3">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-primary [font-family:var(--font-syne)]">
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className="text-(--ink-3) text-base ml-1">{plan.unit}</span>
                )}
              </div>

              {/* Volume */}
              <p className="text-sm text-(--ink-4) mb-6">{plan.volume}</p>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-(--ink-2)">
                    <span className="text-primary font-bold mt-0.5">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.cta.type === "primary" ? (
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 h-11 sm:h-12 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-sm font-bold shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:scale-105 transition-all duration-200 cursor-pointer justify-center"
                >
                  {plan.cta.label}
                </button>
              ) : (
                <a
                  href={plan.cta.href ?? "#"}
                  className="inline-flex items-center justify-center px-5 sm:px-6 h-11 sm:h-12 rounded-full border border-(--border-subtle) bg-white text-(--ink-2) text-sm font-semibold hover:border-primary hover:text-primary hover:bg-blue-50/30 transition-all duration-150"
                >
                  {plan.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-(--ink-4) text-center mt-10">
          Prices shown are indicative. Final pricing depends on volume, route and contract terms. All prices exclusive of GST. DLT charges may apply as per TRAI guidelines.
        </p>
      </div>
    </section>
  );
}
