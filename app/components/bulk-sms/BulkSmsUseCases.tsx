import Link from "next/link";
import { Landmark, ShoppingBag, GraduationCap, HeartPulse, Building2 } from "lucide-react";

const industries = [
  {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    Icon: Landmark,
    heading: "Banking & Finance",
    desc: "Send OTPs, transaction alerts, loan notifications and payment reminders. Reach DND-exempt numbers with transactional SMS.",
    link: { href: "/transactional-sms", label: "Explore transactional SMS →" },
  },
  {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    Icon: ShoppingBag,
    heading: "E-commerce & Retail",
    desc: "Order confirmations, delivery updates, flash sale alerts and cart recovery campaigns at scale.",
    link: null,
  },
  {
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    Icon: GraduationCap,
    heading: "Education",
    desc: "Admission updates, exam schedules, attendance alerts and fee payment reminders to students and parents.",
    link: null,
  },
  {
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    Icon: HeartPulse,
    heading: "Healthcare",
    desc: "Appointment reminders, health tips, lab result notifications and prescription refill alerts.",
    link: null,
  },
  {
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    Icon: Building2,
    heading: "Real Estate",
    desc: "Property alerts, site visit confirmations, payment reminders and new launch notifications.",
    link: { href: "/bulk-sms-hyderabad", label: "SMS for Hyderabad market →" },
  },
];

export default function BulkSmsUseCases() {
  return (
    <section aria-label="Industries and use cases section" className="py-20 sm:py-28 bg-(--surface-0)">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-primary">
            Use Cases
          </span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1)">
            Bulk SMS Solutions for Every Industry in India
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const { iconBg, iconColor, Icon, heading, desc, link } = industry;
            return (
              <article
                key={heading}
                className="bg-white rounded-xl border border-(--border-subtle) p-6 sm:p-8 shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:-translate-y-1 transition-all duration-200"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${iconBg} mb-4`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg [font-family:var(--font-syne)] font-semibold text-(--ink-1) mb-2">
                  {heading}
                </h3>
                <p className="text-sm text-(--ink-2) leading-relaxed mb-4">{desc}</p>
                {link && (
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
