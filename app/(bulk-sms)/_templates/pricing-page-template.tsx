import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import HeroLeadForm from "@/app/components/HeroLeadForm";
import { ResponsiveTable, type ResponsiveTableColumn } from "@/components/ui/responsive-table";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";
import { PricingTierCta } from "./pricing-tier-cta";

const CONTAINER = "max-w-7xl mx-auto px-6 sm:px-12 lg:px-20";
const SECTION_PADDING = "py-16 sm:py-20 lg:py-[100px]";
const EYEBROW_LIGHT = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest";
const EYEBROW_DARK = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-widest";
const H2_LIGHT = "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight";
const H2_DARK = "text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight";
const SYNE_FONT = { fontFamily: "var(--font-syne)" };

function cnJoin(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export interface PricingTier {
  name: string;
  price: string;
  unit?: string;
  volume: string;
  badge?: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  ctaHref?: string;
}

export interface PricingFactor {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface PricingCapability {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface PricingPageTemplateProps {
  breadcrumbLabel: string;
  heroEyebrow: string;
  heroTitle: ReactNode;
  heroHighlight: ReactNode;
  heroDescription: ReactNode;
  heroImage: string;
  heroImageAlt: string;
  heroTrustLine?: string;
  /** Optional EEAT byline/last-updated strip rendered right below the hero. */
  eeatLine?: ReactNode;
  stats: { value: string; label: string }[];
  aeoParagraph: ReactNode;
  insightCallout?: ReactNode;
  tiersTitle: string;
  tiersSubtitle: string;
  tiers: PricingTier[];
  tiersDisclaimer: string;
  slabTitle: string;
  slabSubtitle?: string;
  slabCaption: string;
  slabColumns: ResponsiveTableColumn[];
  slabRows: Array<Record<string, ReactNode>>;
  comparisonTitle: string;
  comparisonSubtitle?: string;
  comparisonCaption: string;
  comparisonColumns: ResponsiveTableColumn[];
  comparisonRows: Array<Record<string, ReactNode>>;
  comparisonHighlightKey?: string;
  factorsTitle: string;
  factors: PricingFactor[];
  capabilitiesTitle: string;
  capabilities: PricingCapability[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
  relatedLinksHeading?: string;
  relatedLinks: { label: string; href: string }[];
  bottomCtaTitle: string;
  bottomCtaDescription: string;
  schema: object;
}

/**
 * Shared template for the three pricing-intent pages (`bulk-sms-pricing-india`,
 * `otp-sms-pricing`, `transactional-sms-pricing`). Same component library and
 * layout rhythm as `IndustryPageTemplate` in this folder, but the body swaps
 * use-cases/performance-table for the sections a pricing-intent visitor
 * actually wants: tier cards, a volume pricing slab, a cost-per-message
 * comparison against other channels, and the factors that move the price.
 */
export function PricingPageTemplate({
  breadcrumbLabel,
  heroEyebrow,
  heroTitle,
  heroHighlight,
  heroDescription,
  heroImage,
  heroImageAlt,
  heroTrustLine,
  eeatLine,
  stats,
  aeoParagraph,
  insightCallout,
  tiersTitle,
  tiersSubtitle,
  tiers,
  tiersDisclaimer,
  slabTitle,
  slabSubtitle,
  slabCaption,
  slabColumns,
  slabRows,
  comparisonTitle,
  comparisonSubtitle,
  comparisonCaption,
  comparisonColumns,
  comparisonRows,
  comparisonHighlightKey,
  factorsTitle,
  factors,
  capabilitiesTitle,
  capabilities,
  faqHeading,
  faqs,
  relatedLinksHeading = "Related Bulk SMS resources",
  relatedLinks,
  bottomCtaTitle,
  bottomCtaDescription,
  schema,
}: PricingPageTemplateProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -- HERO ------------------------------------------------------------ */}
      <DarkHero
        theme="light"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Bulk SMS Services", href: "/bulk-sms-service-provider-india" },
          { label: breadcrumbLabel },
        ]}
        eyebrow={heroEyebrow}
        title={heroTitle}
        highlight={heroHighlight}
        description={heroDescription}
        primaryCta={{ label: "Get a Custom Quote" }}
        secondaryCta={{ label: "Talk to Sales", href: "/bulk-sms-service-provider-india" }}
        imageSrc={heroImage}
        imageAlt={heroImageAlt}
        trustLine={heroTrustLine}
        stats={stats}
      />

      {eeatLine && (
        <div className="bg-white border-b border-gray-100">
          <p className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 text-center text-xs text-gray-400">
            {eeatLine}
          </p>
        </div>
      )}

      <ClientMarquee />

      {/* -- DIRECT ANSWER / AEO BLOCK --------------------------------------- */}
      <section className="relative overflow-hidden py-10 bg-white">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="max-w-[680px] mx-auto rounded-2xl border-l-4 border-[#2563eb] bg-blue-50/60 px-6 py-5">
            <p className="text-base leading-[1.7] text-gray-700">{aeoParagraph}</p>
          </div>
          {insightCallout && (
            <div className="max-w-[680px] mx-auto mt-6 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 leading-[1.7]">{insightCallout}</p>
            </div>
          )}
        </div>
      </section>

      {/* -- PRICING TIERS ---------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-gray-50")} id="pricing-tiers">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-4 space-y-4">
            <span className={EYEBROW_LIGHT}>Pricing Plans</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              {tiersTitle}
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">{tiersSubtitle}</p>
          </div>
          <div className="mt-10 flex flex-col gap-6 sm:grid sm:grid-cols-3 sm:items-start">
            {tiers.map((plan) => (
              <div
                key={plan.name}
                className={cnJoin(
                  "bg-white rounded-2xl flex flex-col p-6 sm:p-8 relative",
                  plan.highlighted ? "border-2 border-[#2563eb] shadow-(--shadow-elevated)" : "border border-(--border-subtle) shadow-(--shadow-card)"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#2563eb] text-white rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap">{plan.badge}</span>
                  </div>
                )}
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3" style={SYNE_FONT}>
                  {plan.name}
                </h3>
                <div className="mb-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#2563eb]" style={SYNE_FONT}>
                    {plan.price}
                  </span>
                  {plan.unit && <span className="text-gray-500 text-base ml-1">{plan.unit}</span>}
                </div>
                <p className="text-sm text-gray-400 mb-6">{plan.volume}</p>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <PricingTierCta label={plan.ctaLabel} href={plan.ctaHref} highlighted={!!plan.highlighted} />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 text-center mt-10 max-w-2xl mx-auto">{tiersDisclaimer}</p>
        </div>
      </section>

      {/* -- VOLUME SLAB TABLE --------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="volume-pricing">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className={EYEBROW_LIGHT}>Volume-Based Pricing</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              {slabTitle}
            </h2>
            {slabSubtitle && <p className="text-gray-500 text-base max-w-2xl mx-auto">{slabSubtitle}</p>}
          </div>
          <ResponsiveTable caption={slabCaption} columns={slabColumns} rows={slabRows} />
        </div>
      </section>

      {/* -- COST COMPARISON --------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-gray-50")} id="cost-comparison">
        <SectionPattern tone="teal" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-10 space-y-4">
            <span className={EYEBROW_LIGHT}>Cost Comparison</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              {comparisonTitle}
            </h2>
            {comparisonSubtitle && <p className="text-gray-500 text-base max-w-2xl mx-auto">{comparisonSubtitle}</p>}
          </div>
          <ResponsiveTable
            caption={comparisonCaption}
            columns={comparisonColumns}
            rows={comparisonRows}
            highlightColumnKey={comparisonHighlightKey}
          />
        </div>
      </section>

      {/* -- WHAT DETERMINES PRICING --------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="pricing-factors">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>Pricing Factors</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              {factorsTitle}
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {factors.map((f) => (
              <BentoCard key={f.title} icon={f.icon} name={f.title} description={f.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- WHAT'S INCLUDED / CAPABILITIES --------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-[#0f172a]")} id="capabilities">
        <SectionPattern tone="green" opacity={0.08} />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_DARK}>Included In Every Plan</span>
            <h2 className={H2_DARK} style={SYNE_FONT}>
              {capabilitiesTitle}
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {capabilities.map((c) => (
              <BentoCard key={c.title} tone="dark" icon={c.icon} name={c.title} description={c.desc} />
            ))}
          </BentoGrid>
        </div>
      </section>

      <HeroLeadForm />

      {/* -- FAQ ------------------------------------------------------------ */}
      <section className={cnJoin(SECTION_PADDING, "relative overflow-hidden bg-white")} id="faq">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Frequently Asked Questions</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              {faqHeading}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-4/5">
                <Image src={heroImage} alt={`Ask a question about ${breadcrumbLabel}`} fill className="object-cover" sizes="36vw" />
              </div>
            </div>
            <AccordionList
              className="flex-1 w-full"
              items={faqs.map((f) => ({ question: f.q, answer: <p className="text-base text-gray-500 leading-[1.7]">{f.a}</p> }))}
            />
          </div>
        </div>
      </section>

      {/* -- RELATED LINKS ---------------------------------------------------- */}
      <section className="relative overflow-hidden py-16 bg-gray-50">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={SYNE_FONT}>
            {relatedLinksHeading}
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- BOTTOM CTA ------------------------------------------------------ */}
      <section className="py-20 bg-white">
        <div className={CONTAINER}>
          <GlowCtaBanner title={bottomCtaTitle} description={bottomCtaDescription} ctaLabel="Get a Custom Quote" />
        </div>
      </section>
    </>
  );
}
