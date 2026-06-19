import { Zap, ShieldCheck, Code2, BellRing, Headphones, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "99.9% Delivery Uptime",
    description:
      "Carrier-grade infrastructure routes your transactional messages with redundant failover across all Indian telecom operators.",
  },
  {
    icon: ShieldCheck,
    title: "DLT Registration Support",
    description:
      "We handle your complete TRAI DLT setup — entity, transactional sender ID, and template registration — so you go live without delays.",
  },
  {
    icon: BellRing,
    title: "DND-Exempt Delivery",
    description:
      "Transactional SMS bypasses the DND registry. Your OTPs, alerts, and service messages reach every customer number, 24 hours a day.",
  },
  {
    icon: Code2,
    title: "Simple REST API",
    description:
      "Send transactional messages with a single API call. SDKs available for Node.js, Python, PHP, and Java. Integrate in under an hour.",
  },
  {
    icon: Globe,
    title: "Pan-India Coverage",
    description:
      "Full coverage across all 22 telecom circles — Airtel, Jio, Vi, BSNL and all MVNOs — with real-time delivery confirmation.",
  },
  {
    icon: Headphones,
    title: "24×7 Dedicated Support",
    description:
      "Round-the-clock support via phone, email, and WhatsApp. Average response time under 2 minutes.",
  },
];

export default function TransactionalSmsFeatures() {
  return (
    <section
      aria-label="Why choose us — 6 transactional SMS feature cards"
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
            Why Choose Get Click Media for Transactional SMS in India?
          </h2>
          <p className="text-(--ink-3) max-w-2xl text-[0.9375rem] leading-[1.65]">
            Everything you need to deliver compliant, high-priority transactional messages across India.
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
