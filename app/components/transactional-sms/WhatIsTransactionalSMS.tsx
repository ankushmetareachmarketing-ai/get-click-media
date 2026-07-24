import Image from "next/image";
import Link from "next/link";

export default function WhatIsTransactionalSMS() {
  return (
    <section aria-label="What is transactional SMS service" className="py-20 sm:py-28 bg-(--surface-0)">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* -- Left: text -- */}
          <div className="flex-1 flex flex-col gap-5">

            <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[0.6875rem] font-bold tracking-widest uppercase text-primary">
              About Transactional SMS
            </span>

            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1)">
              What is Transactional SMS Service?
            </h2>

            <div className="flex flex-col gap-4 text-[0.9375rem] sm:text-base text-(--ink-2) leading-[1.65]">
              <p>
                Transactional SMS is a category of business messaging used to send critical,
                non-promotional information to customers- OTPs, account alerts, order updates,
                appointment reminders, payment confirmations, and more. Unlike promotional SMS,
                transactional messages can be delivered to <strong className="text-(--ink-1) font-semibold">DND-registered numbers</strong> around
                the clock.
              </p>

              <p>
                Under TRAI regulations, transactional SMS in India must travel via a dedicated
                transactional route, with the sender entity, header, and message template
                pre-registered on the DLT (Distributed Ledger Technology) platform.{" "}
                <Link href="/dlt-registration" className="text-primary font-medium hover:underline">
                  Learn about the DLT registration process →
                </Link>
              </p>

              <p>
                Get Click Media delivers transactional SMS through carrier-grade infrastructure
                with 99.9% uptime, real-time delivery receipts, and full DLT registration
                support- so your customers receive the right message at the right moment,
                every time.
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

          {/* -- Right: image -- */}
          <div className="flex-1 w-full">
            <div className="relative overflow-hidden">
              <Image
                src="/images/bulk-sms/what-is-transactional-sms-service.webp"
                alt="Transactional SMS service provider platform showing real-time delivery dashboard for Indian businesses"
                width={2000}
                height={2000}
                className="w-full h-auto object-contain"
                priority={true}
              />
              {/* floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-(--shadow-elevated) px-4 py-2.5 flex items-center gap-2.5 border border-(--border-subtle)">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-(--ink-1)">DND-Exempt · 24×7 Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
