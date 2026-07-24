import { Zap, ShieldCheck, Code2, RefreshCw, Headphones, BarChart2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Sub-Second Delivery",
    description:
      "OTPs are dispatched over priority transactional routes and typically reach the recipient's handset in under 3 seconds.",
  },
  {
    icon: ShieldCheck,
    title: "DLT Compliant Transactional Route",
    description:
      "We handle your TRAI DLT entity, sender ID, and template registration- ensuring your OTPs bypass DND filters legally.",
  },
  {
    icon: Code2,
    title: "Simple REST API",
    description:
      "Send OTPs with a single API call. SDKs available for Node.js, Python, PHP, and Java. Go live in under an hour.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Retries",
    description:
      "Failed deliveries are automatically retried across alternate telecom routes to maximise the chance of successful OTP delivery.",
  },
  {
    icon: BarChart2,
    title: "Real-Time Delivery Reports",
    description:
      "Track every OTP- sent, delivered, failed- in real time from your dashboard or via webhook callbacks.",
  },
  {
    icon: Headphones,
    title: "24×7 Dedicated Support",
    description:
      "Round-the-clock support via phone, email, and WhatsApp. Average response time under 2 minutes.",
  },
];

export default function OtpSmsFeatures() {
  return (
    <section
      aria-label="Why choose us- 6 OTP SMS feature cards"
      className="py-20 sm:py-28 bg-(--surface-1) relative"
      style={{
        backgroundImage: "url('/images/get-click-media-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/80 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-primary">
            Why Choose Us
          </span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1)">
            Why Choose Get Click Media for OTP SMS in India?
          </h2>
          <p className="text-(--ink-3) max-w-2xl text-[0.9375rem] leading-[1.65]">
            Everything you need to deliver OTPs reliably, compliantly, and at scale across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="bg-white rounded-xl border border-(--border-subtle) p-6 sm:p-8 shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) hover:-translate-y-1 transition-all duration-200"
              >
                <div className="bg-blue-50 rounded-lg p-2.5 w-fit mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="text-base sm:text-lg [font-family:var(--font-syne)] font-semibold text-(--ink-1) mb-2">
                  {feature.title}
                </h3>
                <p className="text-(--ink-3) text-sm leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
