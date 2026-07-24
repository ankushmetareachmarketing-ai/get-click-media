import Link from "next/link";
import { CheckCircle } from "lucide-react";

const facts = [
  { label: "Route Type", value: "Transactional (bypasses DND)" },
  { label: "TRAI Mandate Active Since", value: "March 8, 2021" },
  { label: "Template Approval Time", value: "1–3 business days (typically)" },
];

const services = [
  "Entity Registration on TRAI DLT portal",
  "Transactional Sender ID (Header) Registration",
  "OTP Template Registration and approval",
  "Message Scrubbing for DLT compliance",
  "Ongoing compliance monitoring",
];

export default function OtpSmsDLTCompliance() {
  return (
    <section
      aria-label="TRAI DLT compliance for OTP SMS"
      className="py-20 sm:py-28 bg-(--surface-2)"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Eyebrow */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-primary">
            Regulatory Compliance
          </span>
        </div>

        {/* Section heading */}
        <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1) mb-10 max-w-3xl">
          DLT Compliance for OTP SMS- India&apos;s TRAI Mandate Explained
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN */}
          <div>
            {/* Opening paragraph */}
            <p className="text-base text-(--ink-2) leading-relaxed mb-8">
              All OTP SMS sent in India must travel via the transactional route under TRAI&apos;s
              DLT (Distributed Ledger Technology) framework, effective March 2021. The good news:
              the transactional route is DND-exempt- your OTPs reach every registered user,
              regardless of their DND status, 24×7.
            </p>

            {/* What is DLT Registration */}
            <h3 className="text-base sm:text-lg [font-family:var(--font-syne)] font-semibold text-(--ink-1) mb-3">
              Why OTPs Need DLT Registration
            </h3>
            <p className="text-base text-(--ink-2) leading-relaxed mb-8">
              Even though OTPs are service messages, TRAI still requires the sending entity,
              sender ID, and OTP message template to be pre-approved on an authorised DLT
              portal (Airtel, Jio, Vi, BSNL, Tata, Videocon, or Tanla). Messages with
              unregistered templates are scrubbed by telecom operators before delivery.
            </p>

            {/* What We Handle */}
            <h3 className="text-base sm:text-lg [font-family:var(--font-syne)] font-semibold text-(--ink-1) mb-4">
              What We Handle for You
            </h3>
            <ul className="space-y-3 mb-8">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-primary mt-0.5 shrink-0"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-base text-(--ink-2)">{service}</span>
                </li>
              ))}
            </ul>

            {/* CTA link */}
            <Link
              href="/dlt-registration"
              className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity text-base"
            >
              Explore our DLT Registration Service →
            </Link>
          </div>

          {/* RIGHT COLUMN- Info box */}
          <aside className="bg-white border border-(--border-subtle) rounded-xl p-6 sm:p-8 w-full shadow-(--shadow-card)">
            <h3 className="text-base sm:text-lg [font-family:var(--font-syne)] font-semibold text-primary mb-5">
              Key DLT Facts for OTP SMS
            </h3>
            <dl className="space-y-4">
              {facts.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <dt className="text-sm font-bold text-(--ink-1)">{label}</dt>
                  <dd className="text-sm text-(--ink-2)">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-(--ink-2) border-t border-(--border-subtle) pt-4">
              OTP templates with unregistered variables are blocked by telecom operators
              before delivery- register every template before going live.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
