"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useModalStore } from "@/store/useModalStore";
import { Magnetic } from "@/components/motion/Magnetic";

interface InnerPageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: string;
  secondaryCta?: string;
}

const InnerPageHero = ({
  eyebrow,
  title,
  highlight,
  description,
  imageSrc,
  imageAlt,
  primaryCta = "Request a demo",
  secondaryCta = "Explore our services",
}: InnerPageHeroProps) => {
  const { openModal } = useModalStore();

  const renderTitle = () => {
    if (!highlight) return <span>{title}</span>;
    const idx = title.indexOf(highlight);
    if (idx === -1) return <span>{title}</span>;
    return (
      <>
        {title.slice(0, idx)}
        <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,var(--primary),var(--primary-light))]">
          {highlight}
        </span>
        {title.slice(idx + highlight.length)}
      </>
    );
  };

  return (
    <section
      className="m-1 sm:m-2 rounded-2xl overflow-hidden relative"
      style={{
        background:
          "linear-gradient(130deg, #c7d4f8 0%, #dce6ff 35%, #eef1ff 65%, #f5f7ff 100%)",
        minHeight: "calc(100vh - 1rem)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 pt-24 sm:pt-32 pb-24 sm:pb-32 flex flex-col lg:flex-row items-center gap-10 sm:gap-12 min-h-[calc(100vh-1rem)]">

        {/* -- Left: text -- */}
        <div className="flex-1 flex flex-col gap-5 sm:gap-6 z-10">
          {eyebrow && (
            <span data-reveal="fade-up" className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-white/70 border border-white/80 text-xs font-semibold text-[color:var(--primary)] shadow-sm backdrop-blur-sm">
              {eyebrow}
            </span>
          )}

          <h1
            data-reveal="fade-up"
            data-reveal-delay="0.1"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-syne)] text-gray-900 leading-tight"
          >
            {renderTitle()}
          </h1>

          <p
            data-reveal="fade-up"
            data-reveal-delay="0.2"
            className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg"
          >
            {description}
          </p>

          <div data-reveal="fade-up" data-reveal-delay="0.3" className="flex flex-row items-center gap-2 sm:gap-3 flex-wrap">
            <Magnetic strength={0.25}>
              <button
                onClick={openModal}
                className="px-4 sm:px-6 h-10 sm:h-14 sm:min-w-52 cursor-pointer rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-xs sm:text-base font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <span>{primaryCta}</span>
                <span className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[color:var(--primary)] shadow-sm">
                  <ChevronRight size={11} className="sm:hidden" />
                  <ChevronRight size={15} className="hidden sm:block" />
                </span>
              </button>
            </Magnetic>

            <button className="px-4 sm:px-6 h-10 sm:h-14 sm:min-w-52 cursor-pointer rounded-full bg-white text-black text-xs sm:text-base font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 border border-[color:var(--border)]">
              <span>{secondaryCta}</span>
            </button>
          </div>
        </div>

        {/* -- Right: image (desktop) / Bottom: image (mobile) -- */}
        <div
          data-reveal="scale-in"
          data-reveal-delay="0.15"
          className="flex-1 flex justify-center items-end lg:items-center relative w-full order-last lg:order-none"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="relative z-10 w-64 sm:w-80 md:w-96 lg:w-[480px] h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* -- Wave -- */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: 100 }}
        >
          <path
            d="M0,50 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1320,80 1400,30 1440,50 L1440,100 L0,100 Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
};

export default InnerPageHero;
