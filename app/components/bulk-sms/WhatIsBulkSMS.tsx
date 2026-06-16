import Image from "next/image";
import Link from "next/link";

export default function WhatIsBulkSMS() {
  return (
    <section aria-label="What is bulk SMS service" className="py-20 sm:py-28 bg-(--surface-0)">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: text ── */}
          <div className="flex-1 flex flex-col gap-5">

            <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[0.6875rem] font-bold tracking-widest uppercase text-primary">
              About Bulk SMS
            </span>

            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1)">
              What is Bulk SMS Service?
            </h2>

            <div className="flex flex-col gap-4 text-[0.9375rem] sm:text-base text-(--ink-2) leading-[1.65]">
              <p>
                Bulk SMS service is a platform that enables businesses to send large volumes of
                text messages simultaneously to thousands of recipients across India. Unlike
                individual SMS, bulk SMS is delivered through telecom operator gateways with
                high throughput and real-time delivery confirmation.
              </p>

              <p>
                In India, bulk SMS is regulated by TRAI (Telecom Regulatory Authority of India).
                All commercial SMS senders must register on the DLT (Distributed Ledger
                Technology) platform before sending any messages — this ensures compliance and
                protects consumers from spam.{" "}
                <Link href="/dlt-registration" className="text-primary font-medium hover:underline">
                  Learn about the DLT registration process →
                </Link>
              </p>

              <p>
                There are two main types: <strong className="text-(--ink-1) font-semibold">Transactional SMS</strong> (OTPs,
                account alerts, order updates — can reach DND numbers) and{" "}
                <strong className="text-(--ink-1) font-semibold">Promotional SMS</strong> (marketing campaigns —
                restricted to non-DND numbers between 9 AM–9 PM).{" "}
                <Link href="/transactional-sms" className="text-primary font-medium hover:underline">
                  Explore our transactional SMS services →
                </Link>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-sm font-bold shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:scale-105 transition-all duration-200"
              >
                Get Started Free
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-6 h-11 rounded-full border border-(--border-subtle) bg-white text-(--ink-2) text-sm font-semibold hover:border-primary hover:text-primary hover:bg-blue-50/30 transition-all duration-150"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* ── Right: image ── */}
          <div className="flex-1 w-full">
            <div className="relative overflow-hidden ">
              {/* TODO: replace with actual product screenshot */}
              <Image
                src="/images/bulk-sms/small_Covering_All_Your_SMS_Needs_Be_It_Promotional_Or_Transactional_85a655ff7b.webp"
                alt="Bulk SMS service provider platform showing real-time delivery dashboard for Indian businesses"
                width={2000}
                height={2000}
                className="w-full h-auto object-contain"
                priority={true}
              />
              {/* floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-(--shadow-elevated) px-4 py-2.5 flex items-center gap-2.5 border border-(--border-subtle)">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-(--ink-1)">99.9% Delivery Rate</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
