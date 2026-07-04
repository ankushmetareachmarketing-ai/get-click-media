import Image from "next/image";
import Link from "next/link";

export default function WhatIsOtpSMS() {
  return (
    <section aria-label="What is OTP SMS service" className="py-20 sm:py-28 bg-(--surface-0)">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* -- Left: text -- */}
          <div className="flex-1 flex flex-col gap-5">

            <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[0.6875rem] font-bold tracking-widest uppercase text-primary">
              About OTP SMS
            </span>

            <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1)">
              What is OTP SMS Service?
            </h2>

            <div className="flex flex-col gap-4 text-[0.9375rem] sm:text-base text-(--ink-2) leading-[1.65]">
              <p>
                OTP SMS service delivers One-Time Passwords — short-lived numeric codes used
                to authenticate users during login, payment authorisation, account verification,
                and other sensitive actions. Unlike standard promotional messages, OTPs travel
                via the <strong className="text-(--ink-1) font-semibold">transactional route</strong> and
                reach every recipient, including DND-registered numbers, within seconds.
              </p>

              <p>
                In India, OTP SMS is classified as a critical transactional message under TRAI
                guidelines. Senders must register their entity, approved sender ID, and message
                template on the DLT (Distributed Ledger Technology) platform before any OTP can
                be delivered.{" "}
                <Link href="/dlt-registration" className="text-primary font-medium hover:underline">
                  Learn about the DLT registration process →
                </Link>
              </p>

              <p>
                Get Click Media routes your OTPs through carrier-grade infrastructure with
                sub-second delivery, automatic retries, and real-time delivery receipts — so
                your users never wait and your conversions never drop.
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
                src="/images/bulk-sms/small_Covering_All_Your_SMS_Needs_Be_It_Promotional_Or_Transactional_85a655ff7b.webp"
                alt="OTP SMS service provider platform showing real-time delivery dashboard for Indian businesses"
                width={2000}
                height={2000}
                className="w-full h-auto object-contain"
                priority={true}
              />
              {/* floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-(--shadow-elevated) px-4 py-2.5 flex items-center gap-2.5 border border-(--border-subtle)">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
                <span className="text-xs font-semibold text-(--ink-1)">Sub-Second OTP Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
