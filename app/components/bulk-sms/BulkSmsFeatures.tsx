import { Zap, ShieldCheck, Code2, Rocket, Headphones, MapPin } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "99.9% Delivery Rate",
    description:
      "Carrier-grade infrastructure ensures your messages reach every recipient across all Indian telecom operators.",
  },
  {
    icon: ShieldCheck,
    title: "DLT Registration Support",
    description:
      "We handle your complete TRAI DLT setup — entity, header, and template registration included.",
  },
  {
    icon: Code2,
    title: "Powerful SMS API",
    description:
      "RESTful API with SDKs for Node, Python, PHP and Java. Integrate bulk SMS into any application in minutes.",
  },
  {
    icon: Rocket,
    title: "Go Live in 24 Hours",
    description:
      "Quick onboarding with pre-verified DLT templates. Start your first campaign within one business day.",
  },
  {
    icon: Headphones,
    title: "24×7 Dedicated Support",
    description:
      "Round-the-clock support via phone, email and WhatsApp. Average response time under 2 minutes.",
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    description:
      "Full coverage across all 22 telecom circles — Airtel, Jio, Vi, BSNL and all MVNOs.",
  },
];

export default function BulkSmsFeatures() {
  return (
    <section
      aria-label="Why choose us — 6 feature cards"
      className="py-20 sm:py-28 bg-(--surface-1)"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.6875rem] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 text-primary">
            Why Choose Us
          </span>
          <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] [font-family:var(--font-syne)] font-bold leading-[1.1] tracking-[-0.02em] text-(--ink-1)">
            Why Choose Get Click Media for Bulk SMS in India?
          </h2>
          <p className="text-(--ink-3) max-w-2xl text-[0.9375rem] leading-[1.65]">
            Everything you need to run compliant, high-delivery bulk SMS
            campaigns in India.
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
