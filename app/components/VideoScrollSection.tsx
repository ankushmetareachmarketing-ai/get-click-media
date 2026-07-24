"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, CheckCheck } from "lucide-react";

const SECTIONS = [
  {
    step: "01",
    tag: "WhatsApp Business API",
    title: "Send Messages That Actually Get Read",
    desc: "Reach every customer on India's most-used app with the official WhatsApp Business API. 98% open rates, rich media, and instant delivery- all from one dashboard.",
    features: [
      "Meta-verified green tick badge",
      "Broadcast to unlimited contacts",
      "Rich media: images, PDFs & buttons",
      "Real-time delivery & read receipts",
    ],
    video: "/images/video/whatsapp-api.mp4",
    accent: "#25D366",
    pill: "#f0fdf4",
  },
  {
    step: "02",
    tag: "Live Chat & Support",
    title: "Never Miss a Customer Conversation",
    desc: "Manage every incoming WhatsApp message from a shared team inbox. Assign chats, trigger smart auto-replies, and close tickets faster than ever.",
    features: [
      "Shared inbox for your entire team",
      "Smart routing & agent assignment",
      "Quick-reply & canned responses",
      "Full chat history synced to CRM",
    ],
    video: "/images/video/whatsapp-chat.mp4",
    accent: "#2563eb",
    pill: "#eff6ff",
  },
  {
    step: "03",
    tag: "Campaign Manager",
    title: "Run Campaigns That Convert",
    desc: "Schedule, personalise, and analyse WhatsApp campaigns in minutes. Segment your audience, A/B test messages, and watch your conversion rates climb.",
    features: [
      "Drag-and-drop campaign builder",
      "Advanced audience segmentation",
      "A/B testing for message variants",
      "Real-time CTR & delivery analytics",
    ],
    video: "/images/video/whatsapp-manage.mp4",
    accent: "#7c3aed",
    pill: "#faf5ff",
  },
  {
    step: "04",
    tag: "Bulk SMS",
    title: "Reach Every Phone Instantly via SMS",
    desc: "Send OTPs, alerts, and promotional messages to any mobile number across India. DLT-compliant, lightning-fast delivery with detailed reports.",
    features: [
      "DLT-registered sender IDs",
      "Transactional, promo & OTP routes",
      "Delivery reports & click tracking",
      "Unicode, Flash & long SMS support",
    ],
    video: "/images/video/bulk-sms.mp4",
    accent: "#ea580c",
    pill: "#fff7ed",
  },
];

export default function VideoScrollSection() {
  const rootRef    = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const rowRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs  = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    const init = async () => {
      const gsap          = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        /* -- Section header ----------------------------------------------- */
        if (headerRef.current) {
          const kids = Array.from(headerRef.current.children);
          gsap.fromTo(
            kids,
            { opacity: 0, y: 36 },
            {
              opacity: 1, y: 0,
              duration: 0.8, stagger: 0.12, ease: "power3.out",
              scrollTrigger: { trigger: headerRef.current, start: "top 82%" },
            },
          );
        }

        /* -- Per-section animations --------------------------------------- */
        rowRefs.current.forEach((row, i) => {
          if (!row) return;
          const isReversed = i % 2 !== 0;

          const contentEl  = row.querySelector<HTMLElement>(".vs-content");
          const videoEl    = row.querySelector<HTMLElement>(".vs-video");
          const tagEl      = row.querySelector<HTMLElement>(".vs-tag");
          const headingEl  = row.querySelector<HTMLElement>(".vs-heading");
          const descEl     = row.querySelector<HTMLElement>(".vs-desc");
          const featureEls = row.querySelectorAll<HTMLElement>(".vs-feature");
          const ctaEl      = row.querySelector<HTMLElement>(".vs-cta");
          const stepEl     = row.querySelector<HTMLElement>(".vs-step");

          const trig = { trigger: row, start: "top 72%", once: true } as const;

          /* Content panel slide-in */
          if (contentEl)
            gsap.fromTo(contentEl,
              { opacity: 0, x: isReversed ? 56 : -56 },
              { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", scrollTrigger: trig },
            );

          /* Video panel slide-in + scale */
          if (videoEl)
            gsap.fromTo(videoEl,
              { opacity: 0, x: isReversed ? -56 : 56, scale: 0.94 },
              { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out", delay: 0.1, scrollTrigger: trig },
            );

          /* Step number fade */
          if (stepEl)
            gsap.fromTo(stepEl,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.05, scrollTrigger: trig },
            );

          /* Tag badge */
          if (tagEl)
            gsap.fromTo(tagEl,
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.55, ease: "power2.out", delay: 0.18, scrollTrigger: trig },
            );

          /* Heading */
          if (headingEl)
            gsap.fromTo(headingEl,
              { opacity: 0, y: 22 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.26, scrollTrigger: trig },
            );

          /* Desc */
          if (descEl)
            gsap.fromTo(descEl,
              { opacity: 0, y: 16 },
              { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", delay: 0.35, scrollTrigger: trig },
            );

          /* Features stagger */
          if (featureEls.length)
            gsap.fromTo(featureEls,
              { opacity: 0, x: isReversed ? 20 : -20 },
              { opacity: 1, x: 0, duration: 0.5, stagger: 0.09, ease: "power2.out", delay: 0.44, scrollTrigger: trig },
            );

          /* CTA */
          if (ctaEl)
            gsap.fromTo(ctaEl,
              { opacity: 0, y: 14, scale: 0.96 },
              { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.4)", delay: 0.75, scrollTrigger: trig },
            );

          /* Auto-play video when in view */
          const vid = videoRefs.current[i];
          if (vid) {
            ScrollTrigger.create({
              trigger: row,
              start: "top 80%",
              end: "bottom 20%",
              onEnter:      () => vid.play().catch(() => {}),
              onLeave:      () => vid.pause(),
              onEnterBack:  () => vid.play().catch(() => {}),
              onLeaveBack:  () => vid.pause(),
            });
          }
        });

      }, rootRef.current!);
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <section ref={rootRef} data-gsap-own="true" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* -- Section header ---------------------------------------------- */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-24 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
            Platform Features
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Everything You Need to{" "}
            <span className="text-[#2563eb]">Communicate at Scale</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            One unified platform. Every channel your customers rely on.
          </p>
        </div>

        {/* -- Section rows ------------------------------------------------ */}
        <div className="space-y-24 sm:space-y-36">
          {SECTIONS.map((s, i) => {
            const reversed = i % 2 !== 0;
            return (
              <div
                key={i}
                ref={el => { rowRefs.current[i] = el; }}
                className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
              >

                {/* -- Content -------------------------------------------- */}
                <div className="vs-content w-full lg:w-[46%] space-y-6">

                  {/* Step + tag row */}
                  <div className="flex items-center gap-4">
                    <span
                      className="vs-step text-5xl font-extrabold leading-none select-none"
                      style={{ color: s.accent + "22", fontFamily: "var(--font-syne)" }}
                    >
                      {s.step}
                    </span>
                    <span
                      className="vs-tag inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ background: s.pill, color: s.accent }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.accent }} />
                      {s.tag}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3
                    className="vs-heading text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-gray-900 leading-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {s.title}
                  </h3>

                  {/* Accent divider */}
                  <div
                    className="w-12 h-1 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${s.accent}, ${s.accent}44)` }}
                  />

                  {/* Desc */}
                  <p className="vs-desc text-gray-500 text-base leading-relaxed">{s.desc}</p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {s.features.map(f => (
                      <li key={f} className="vs-feature flex items-center gap-3">
                        <span
                          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ background: s.accent + "18" }}
                        >
                          <CheckCheck className="w-3.5 h-3.5" style={{ color: s.accent }} />
                        </span>
                        <span className="text-gray-700 text-sm font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className="vs-cta group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold shadow-md transition-all duration-200 hover:gap-3 hover:shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent}bb)` }}
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* -- Video card ----------------------------------------- */}
                <div className="vs-video w-full lg:w-[54%]">
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      aspectRatio: "16/9",
                      background: "#0f172a",
                      boxShadow: `0 32px 80px -12px ${s.accent}33, 0 8px 32px rgba(0,0,0,0.18)`,
                    }}
                  >
                    {/* Browser chrome bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-8 z-10 flex items-center px-3 gap-1.5"
                      style={{ background: "rgba(15,23,42,0.85)", backdropFilter: "blur(6px)" }}
                    >
                      <span className="w-2 h-2 rounded-full bg-red-400/70" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                      <span className="w-2 h-2 rounded-full bg-green-400/70" />
                      <div className="flex-1 mx-3">
                        <div className="h-3.5 rounded-full bg-white/10 w-48 flex items-center px-2">
                          <span className="text-white/30 text-[8px] font-mono truncate">getclickmedia.com</span>
                        </div>
                      </div>
                    </div>

                    {/* Video */}
                    <video
                      ref={el => { videoRefs.current[i] = el; }}
                      src={s.video}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />

                    {/* Subtle bottom gradient */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)" }}
                    />

                    {/* Tag chip bottom left */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-white backdrop-blur-sm"
                        style={{ background: s.accent + "cc" }}
                      >
                        <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                        {s.tag}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
