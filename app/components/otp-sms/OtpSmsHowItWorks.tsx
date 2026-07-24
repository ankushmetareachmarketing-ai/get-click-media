import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "Sign Up",
    description:
      "Create your account in under 2 minutes. No credit card required to start your OTP SMS integration.",
  },
  {
    number: 2,
    title: "DLT Registration",
    description: (
      <>
        We assist you with TRAI DLT registration- entity, transactional sender ID, and OTP
        template approval. Learn about{" "}
        <Link
          href="/dlt-registration"
          className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          DLT compliance
        </Link>
        .
      </>
    ),
  },
  {
    number: 3,
    title: "Integrate the API",
    description:
      "Add our REST API or SDK to your app. Trigger an OTP with a single HTTP call- your users receive it in seconds.",
  },
  {
    number: 4,
    title: "Monitor & Scale",
    description:
      "Track delivery receipts in real time from your dashboard. Scale from 100 to 10 million OTPs without changing a line of code.",
  },
];

export default function OtpSmsHowItWorks() {
  return (
    <section
      aria-label="How OTP SMS works- 4-step process"
      className="py-20 sm:py-28 bg-(--surface-1)"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-primary">
            Simple Setup
          </span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1)">
            How to Start Sending OTP SMS in India
          </h2>
          <p className="text-sm text-(--ink-3) max-w-md">
            From signup to your first OTP delivery in 4 easy steps.
          </p>
        </div>

        {/* Steps- mobile: vertical list, desktop: horizontal row */}
        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-px border-t-2 border-dashed border-(--border-subtle) z-0"
            style={{ top: "24px" }}
            aria-hidden="true"
          />

          {/* Mobile connector line */}
          <div
            className="md:hidden absolute left-[23px] top-0 bottom-0 w-px border-l-2 border-dashed border-(--border-subtle) z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-row md:flex-col items-start md:items-center gap-4 bg-white border border-(--border-subtle) rounded-xl shadow-(--shadow-card) p-6"
              >
                {/* Step number circle */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] flex items-center justify-center text-white font-bold text-base"
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5 md:items-center md:text-center">
                  <h3 className="text-base sm:text-lg [font-family:var(--font-syne)] font-semibold text-(--ink-1)">
                    {step.title}
                  </h3>
                  <p className="text-sm text-(--ink-3)">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
