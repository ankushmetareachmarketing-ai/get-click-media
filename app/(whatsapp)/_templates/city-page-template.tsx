import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCheck, type LucideIcon } from "lucide-react";
import DarkHero from "@/app/components/DarkHero";
import ClientMarquee from "@/app/components/ClientMarquee";
import HeroLeadForm from "@/app/components/HeroLeadForm";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { AccordionList } from "@/components/ui/accordion-list";
import { GlowCtaBanner } from "@/components/ui/glow-cta-banner";
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

export interface CityIndustryCard {
  icon: LucideIcon;
  title: string;
  color: string;
  bgColor: string;
  textColor: string;
  why: string;
  useCase: string;
  image: string;
}

export interface CityWhyPoint {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface CityClientUseCase {
  sector: string;
  automation: string;
  result: string;
  [key: string]: ReactNode;
}

export interface CityPageTemplateProps {
  breadcrumbLabel: string;
  heroEyebrow: string;
  heroTitle: ReactNode;
  heroHighlight: ReactNode;
  heroDescription: ReactNode;
  heroImage: string;
  heroImageAlt: string;
  heroTrustLine?: string;
  stats: { value: string; label: string }[];
  aeoHeading?: string;
  aeoParagraphs: string[];
  whyCity: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    points: CityWhyPoint[];
  };
  industries: CityIndustryCard[];
  gcmService: {
    eyebrow: string;
    title: string;
    description: ReactNode;
    image: string;
    capabilities: { label: string; value: string }[];
  };
  clientUseCases: CityClientUseCase[];
  areasServed: string[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
  bottomCtaTitle: string;
  bottomCtaDescription: string;
  schema: object;
}

/**
 * Shared template for the 10 `whatsapp-api-{city}` pages- they all had one
 * identical section structure already; this centralises it on the same
 * component library `whatsapp-business-api` was redesigned with, instead of
 * 10 copies of the old hand-rolled markup (raw `<table>`, native `<details>`,
 * broken `href="/contact"` links).
 */
export function CityPageTemplate({
  breadcrumbLabel,
  heroEyebrow,
  heroTitle,
  heroHighlight,
  heroDescription,
  heroImage,
  heroImageAlt,
  heroTrustLine,
  stats,
  aeoParagraphs,
  whyCity,
  industries,
  gcmService,
  clientUseCases,
  areasServed,
  faqs,
  relatedLinks,
  bottomCtaTitle,
  bottomCtaDescription,
  schema,
}: CityPageTemplateProps) {
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
        primaryCta={{ label: "Get WhatsApp API" }}
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
            <p className="text-base leading-[1.7] text-gray-700">{aeoParagraphs[0]}</p>
          </div>
          {aeoParagraphs.slice(1).map((p, i) => (
            <p key={i} className="max-w-[680px] mx-auto text-gray-500 text-base leading-[1.7] mt-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* -- WHY THIS CITY ---------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="why-city">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="flex flex-col lg:flex-row items-start gap-14">
            <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-(--shadow-elevated)">
                <Image src={whyCity.image} alt={whyCity.title} fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className={EYEBROW_LIGHT}>{whyCity.eyebrow}</span>
              <h2 className={H2_LIGHT} style={SYNE_FONT}>
                {whyCity.title}
              </h2>
              <p className="text-gray-500 text-base leading-[1.7]">{whyCity.description}</p>
              <div className="space-y-4">
                {whyCity.points.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- TOP INDUSTRIES ---------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="industries">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-14 space-y-4">
            <span className={EYEBROW_LIGHT}>Top Industries</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Top Industries Using WhatsApp API in {breadcrumbLabel}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl border border-(--border-subtle) shadow-(--shadow-card) hover:shadow-(--shadow-card-hover) transition-shadow overflow-hidden bg-white"
              >
                <div className={cnJoin("h-1.5 bg-gradient-to-r", industry.color)} />
                <div className="relative w-full aspect-video">
                  <Image src={industry.image} alt={`WhatsApp Business API for ${industry.title}`} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={cnJoin("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", industry.bgColor)}>
                      <industry.icon className={cnJoin("w-5 h-5", industry.textColor)} aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-gray-900" style={SYNE_FONT}>
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{industry.why}</p>
                  <div className="flex items-start gap-2 text-sm bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <CheckCheck className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-600">{industry.useCase}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- GCM'S SERVICE IN THIS CITY ---------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="gcm-service">
        <SectionPattern tone="teal" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="flex flex-col lg:flex-row-reverse items-start gap-14">
            <div className="w-full lg:w-[44%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-(--shadow-elevated)">
                <Image src={gcmService.image} alt={gcmService.title} fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <span className={EYEBROW_LIGHT}>{gcmService.eyebrow}</span>
              <h2 className={H2_LIGHT} style={SYNE_FONT}>
                {gcmService.title}
              </h2>
              <p className="text-gray-500 text-base leading-[1.7]">{gcmService.description}</p>
              <div className="rounded-2xl border border-(--border-subtle) overflow-hidden bg-white">
                {gcmService.capabilities.map((row, i) => (
                  <div
                    key={row.label}
                    className={cnJoin(
                      "flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-3.5 text-sm",
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    )}
                  >
                    <span className="font-semibold text-gray-900 sm:w-44 shrink-0">{row.label}</span>
                    <span className="text-gray-500">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- CLIENT USE CASES --------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="use-cases">
        <SectionPattern tone="light" />
        <div className={cnJoin(CONTAINER, "relative z-10")}>
          <div className="text-center mb-12 space-y-4">
            <span className={EYEBROW_LIGHT}>Client Use Cases</span>
            <h2 className={H2_LIGHT} style={SYNE_FONT}>
              Client Use Cases- {breadcrumbLabel} Businesses
            </h2>
          </div>
          <ResponsiveTable
            caption={`WhatsApp API client use cases in ${breadcrumbLabel}`}
            highlightColumnKey="result"
            columns={[
              { key: "sector", label: "Sector" },
              { key: "automation", label: "WhatsApp automation deployed" },
              { key: "result", label: "Business result" },
            ]}
            rows={clientUseCases}
          />
        </div>
      </section>

      {/* -- AREAS SERVED --------------------------------------------------- */}
      <section className={cnJoin(SECTION_PADDING, "relative")} id="areas-served">
        <SectionPattern tone="green" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 text-center space-y-8">
          <span className={EYEBROW_DARK}>Areas We Serve</span>
          <h2 className={H2_DARK} style={SYNE_FONT}>
            Areas in and Around {breadcrumbLabel} We Serve
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-[1.7]">
            Get Click Media provides WhatsApp Business API to businesses across {breadcrumbLabel} and the
            surrounding region. Onboarding is fully remote- we set up your WhatsApp API account without
            requiring any in-person meetings.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {areasServed.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70">
                {area}
              </span>
            ))}
          </div>
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
              WhatsApp Business API in {breadcrumbLabel}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:w-[36%] shrink-0 lg:sticky lg:top-24">
              <div className="relative w-full rounded-2xl aspect-[4/5]">
                <Image
                  src="/images/whatsapp/whatsapp-api-question.png"
                  alt={`Ask a question about WhatsApp Business API in ${breadcrumbLabel}`}
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
          <GlowCtaBanner title={bottomCtaTitle} description={bottomCtaDescription} ctaLabel="Get WhatsApp API" />
        </div>
      </section>
    </>
  );
}
