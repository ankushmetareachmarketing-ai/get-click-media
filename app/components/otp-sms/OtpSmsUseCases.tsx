import { Landmark, ShoppingBag, GraduationCap, HeartPulse, Building2, Smartphone } from "lucide-react";

const industries = [
  {
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    Icon: Landmark,
    heading: "Banking & Finance",
    desc: "Secure login OTPs, fund-transfer authentication, credit card approvals, and NBFC loan disbursement confirmations.",
    link: null,
  },
  {
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    Icon: ShoppingBag,
    heading: "E-commerce & Retail",
    desc: "Guest checkout verification, new account sign-ups, high-value order confirmations, and return initiation OTPs.",
    link: null,
  },
  {
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    Icon: GraduationCap,
    heading: "EdTech & Education",
    desc: "Student portal login, exam registration verification, and parent app authentication via one-time password SMS.",
    link: null,
  },
  {
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    Icon: HeartPulse,
    heading: "Healthcare",
    desc: "Patient portal login, teleconsultation access codes, prescription delivery confirmation, and lab result release OTPs.",
    link: null,
  },
  {
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    Icon: Building2,
    heading: "Real Estate & PropTech",
    desc: "Site visit booking confirmation, digital agreement signing verification, and payment release authentication.",
    link: null,
  },
  {
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    Icon: Smartphone,
    heading: "SaaS & Startups",
    desc: "Passwordless login, 2FA for sensitive actions, new device verification, and team member onboarding codes.",
    link: null,
  },
];

export default function OtpSmsUseCases() {
  return (
    <section aria-label="OTP SMS industries and use cases section" className="py-20 sm:py-28 bg-(--surface-0)">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-primary">
            Use Cases
          </span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1)">
            OTP SMS Solutions for Every Industry in India
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
