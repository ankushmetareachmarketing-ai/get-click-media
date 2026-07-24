import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import HeroLeadForm from "@/app/components/HeroLeadForm";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { SectionPattern } from "@/components/ui/section-pattern";

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

export interface IndustryUseCase {
  icon: LucideIcon;
  title: string;
  trigger: string;
  message: string;
  result: string;
}

export interface IndustryPerformanceRow {
  metric: string;
  before: string;
  after: string;
  source: string;
  [key: string]: ReactNode;
}

export interface IndustryCapability {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface IndustryImageSection {
  eyebrow: string;
  title: ReactNode;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  imageSide?: "left" | "right";
}

export interface IndustryPageTemplateProps {
  breadcrumbLabel: string;
  heroEyebrow: string;
  heroTitle: ReactNode;
  heroHighlight: ReactNode;
  heroDescription: ReactNode;
  heroImage: string;
  heroImageAlt: string;
  heroTrustLine?: string;
  stats: { value: string; label: string }[];
  aeoParagraph: ReactNode;
  insightCallout?: ReactNode;
  whyIndustryTitle: string;
  whyIndustryParagraphs: ReactNode[];
  whyIndustryInsight?: ReactNode;
  imageSections: IndustryImageSection[];
  useCasesTitle: string;
  useCases: IndustryUseCase[];
  performanceData: IndustryPerformanceRow[];
  capabilitiesTitle: string;
  capabilities: IndustryCapability[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
  bottomCtaTitle: string;
  bottomCtaDescription: string;
  schema: object;
}

/**
 * Shared template for the 10 `whatsapp-api-{industry}` pages- previously each
 * had its own centered, image-less hero and hand-rolled markup (raw
 * `<table>`, native `<details>`, broken `href="/contact"` links). Standardized
 * onto the same component library as `whatsapp-business-api`: hero now uses
 * the shared `DarkHero` (same navy gradient, same responsive right-image
 * treatment- no fixed width/shadow- as every other redesigned page),
 * reusing each industry's own existing dashboard image as the hero image
 * rather than fabricating a new one.
 */
export function IndustryPageTemplate({
  breadcrumbLabel,
  heroEyebrow,
  heroTitle,
  heroHighlight,
  heroDescription,
  heroImage,
  heroImageAlt,
  heroTrustLine,
  stats,
  aeoParagraph,
  insightCallout,
  whyIndustryTitle,
  whyIndustryParagraphs,
  whyIndustryInsight,
  imageSections,
  useCasesTitle,
  useCases,
  performanceData,
  capabilitiesTitle,
  capabilities,
  faqs,
  relatedLinks,
  bottomCtaTitle,
  bottomCtaDescription,
  schema,
}: IndustryPageTemplateProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* -- HERO ------------------------------------------------------------ */}
      <DarkHero
        theme="light"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
          { label: breadcrumbLabel },
        ]}
        eyebrow={heroEyebrow}
        title={heroTitle}
        highlight={heroHighlight}
        description={heroDescription}
        primaryCta={{ label: "Book a Demo" }}
        secondaryCta={{ label: "View Pricing", href: "/whatsapp-api-pricing-india" }}
        imageSrc={heroImage}
        imageAlt={heroImageAlt}
        trustLine={heroTrustLine}
        stats={stats}
      />

      {/* -- TRUST LOGOS ------------------------------------------------------ */}
      <ClientMarquee />

      {/* -- DIRECT ANSWER / AEO BLOCK --------------------------------------- */}
      <section className="relative py-10">
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

      {/* -- WHY THIS INDUSTRY NEEDS WHATSAPP ---------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="why-industry">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Why This Industry Needs WhatsApp</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              {whyIndustryTitle}
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 leading-[1.7]">
            {whyIndustryParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {whyIndustryInsight && (
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <p className="text-sm text-blue-800 font-medium leading-[1.7]">{whyIndustryInsight}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* -- ALTERNATING IMAGE SECTIONS ---------------------------------------- */}
      {imageSections.map((section, i) => (
        <section
          key={section.eyebrow}
          className={cnJoin("relative py-16", "border-y border-(--border-subtle)")}
        >
          <SectionPattern tone={i % 2 === 0 ? "teal" : "light"} />
          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
            <div className={cnJoin("flex flex-col lg:flex-row items-start gap-12", section.imageSide === "left" && "lg:flex-row-reverse")}>
              <div className="flex-1 space-y-4">
                <span className={EYEBROW_LIGHT}>{section.eyebrow}</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900" style={SYNE_FONT}>
                  {section.title}
                </h2>
                <p className="text-gray-500 text-base leading-[1.7]">{section.description}</p>
                <ul className="space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-[#25D366] mt-0.5">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-[45%] shrink-0 lg:sticky lg:top-24">
                <div className="relative w-full rounded-2xl overflow-hidden ">
                  <Image src={section.image} alt={section.imageAlt} width={700} height={500} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* -- USE CASES ---------------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="use-cases">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>Use Cases</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              {useCasesTitle}
            </h2>
          </div>
          <BentoGrid className="lg:grid-cols-3">
            {useCases.map((uc) => (
              <BentoCard
                key={uc.title}
                icon={uc.icon}
                name={uc.title}
                description={`Trigger: ${uc.trigger}. ${uc.message} Result: ${uc.result}`}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* -- PERFORMANCE BENCHMARKS --------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="performance">
        <SectionPattern tone="light" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Performance Benchmarks</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Real results from Indian {breadcrumbLabel.toLowerCase()} providers
            </h2>
          </div>
          <ResponsiveTable
            caption={`WhatsApp API performance benchmarks for ${breadcrumbLabel}`}
            highlightColumnKey="after"
            columns={[
              { key: "metric", label: "Metric" },
              { key: "before", label: "Before WhatsApp API", align: "center" },
              { key: "after", label: "After WhatsApp API", align: "center" },
              { key: "source", label: "Source" },
            ]}
            rows={performanceData}
          />
        </div>
      </section>

      {/* -- CAPABILITIES --------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="capabilities">
        <SectionPattern tone="green" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_DARK}>Platform Capabilities</span>
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
      <section className={cnJoin(SECTION_PADDING, "relative")} id="faq">
        <SectionPattern tone="gold" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Frequently Asked Questions</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              WhatsApp API for {breadcrumbLabel}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl aspect-[4/5]">
                <Image
                  src="/images/whatsapp/ask-question-whatsapp-api.png"
                  alt={`Ask a question about WhatsApp API for ${breadcrumbLabel}`}
                  fill
                  className="object-contain"
                  sizes="36vw"
                />
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
      <section className="relative py-16">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <h2 className="text-xl font-bold text-gray-900 mb-6" style={SYNE_FONT}>
            Related WhatsApp Business API resources
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
          <GlowCtaBanner title={bottomCtaTitle} description={bottomCtaDescription} ctaLabel="Book a Demo" />
        </div>
      </section>
    </>
  );
}
