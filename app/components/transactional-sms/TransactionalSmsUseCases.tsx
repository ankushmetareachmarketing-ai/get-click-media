import { Landmark, ShoppingBag, GraduationCap, HeartPulse, Building2, Truck } from "lucide-react";

const industries = [
  {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    Icon: Landmark,
    heading: "Banking & Finance",
    desc: "OTPs, transaction alerts, account debits, loan disbursement updates, and credit card activity notifications — DND-exempt, 24×7.",
    link: null,
  },
  {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    Icon: ShoppingBag,
    heading: "E-commerce & Retail",
    desc: "Order confirmations, shipment tracking updates, delivery alerts, return initiation codes, and refund credit notifications.",
    link: null,
  },
  {
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    Icon: GraduationCap,
    heading: "Education",
    desc: "Admission result alerts, fee payment confirmations, exam schedule updates, and attendance notifications to students and parents.",
    link: null,
  },
  {
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    Icon: HeartPulse,
    heading: "Healthcare",
    desc: "Appointment confirmations, prescription alerts, lab result notifications, teleconsultation access codes, and discharge summaries.",
    link: null,
  },
  {
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    Icon: Building2,
    heading: "Real Estate",
    desc: "Site visit confirmations, payment receipt acknowledgements, agreement signing OTPs, and possession date alerts.",
    link: null,
  },
  {
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    Icon: Truck,
    heading: "Logistics & Supply Chain",
    desc: "Pickup confirmations, in-transit status updates, out-for-delivery alerts, and proof of delivery notifications.",
    link: null,
  },
];

export default function TransactionalSmsUseCases() {
  return (
    <section aria-label="Transactional SMS industries and use cases" className="py-20 sm:py-28 bg-(--surface-0)">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-primary">
            Use Cases
          </span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1)">
            Transactional SMS Solutions for Every Industry in India
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const { iconBg, iconColor, Icon, heading, desc } = industry;
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
                <p className="text-sm text-(--ink-2) leading-relaxed">{desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
