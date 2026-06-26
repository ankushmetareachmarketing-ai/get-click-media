"use client";

import { useEffect, useRef } from "react";
import { CheckCheck, ArrowRight } from "lucide-react";

const SECTIONS = [
  {
    step: "01",
    tag: "WhatsApp Business API",
    title: "Send Messages That\nActually Get Read",
    desc: "Reach every customer on India's most-used app with the official WhatsApp Business API. 98% open rates, rich media, and instant delivery — all from one dashboard.",
    features: [
      "Meta-verified green tick badge",
      "Broadcast to unlimited contacts",
      "Rich media: images, PDFs & buttons",
      "Real-time delivery & read receipts",
    ],
    video: "/images/video/whatsapp-api.mp4",
    accent: "#25D366",
    bg: "#f0fdf4",
  },
  {
    step: "02",
    tag: "Live Chat & Support",
    title: "Never Miss a Customer\nConversation",
    desc: "Manage every incoming WhatsApp message from a shared team inbox. Assign chats, trigger smart auto-replies, and close tickets faster than ever.",
    features: [
      "Shared inbox for your entire team",
      "Smart routing & agent assignment",
      "Quick-reply & canned responses",
      "Full chat history synced to CRM",
    ],
    video: "/images/video/whatsapp-chat.mp4",
    accent: "#2563eb",
    bg: "#eff6ff",
  },
  {
    step: "03",
    tag: "Campaign Manager",
    title: "Run Campaigns That\nConvert",
    desc: "Schedule, personalise, and analyse WhatsApp campaigns in minutes. Segment your audience, A/B test messages, and watch your conversion rates climb.",
    features: [
      "Drag-and-drop campaign builder",
      "Advanced audience segmentation",
      "A/B testing for message variants",
      "Real-time CTR & delivery analytics",
    ],
    video: "/images/video/whatsapp-manage.mp4",
    accent: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    step: "04",
    tag: "Bulk SMS",
    title: "Reach Every Phone\nInstantly via SMS",
    desc: "Send OTPs, alerts, and promotional messages to any mobile number across India. DLT-compliant, lightning-fast delivery with detailed reports.",
    features: [
      "DLT-registered sender IDs",
      "Transactional, promo & OTP routes",
      "Delivery reports & click tracking",
      "Unicode, Flash & long SMS support",
    ],
    video: "/images/video/bulk-sms.mp4",
    accent: "#ea580c",
    bg: "#fff7ed",
  },
];

const N = SECTIONS.length;

export default function VideoScrollSection() {
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const contentRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs    = useRef<(HTMLVideoElement | null)[]>([]);
  const dotRefs      = useRef<(HTMLSpanElement | null)[]>([]);
  const stepRefs     = useRef<(HTMLSpanElement | null)[]>([]);
  const progressRef  = useRef<HTMLDivElement>(null);
  const bgRef        = useRef<HTMLDivElement>(null);
  const counterRef   = useRef<HTMLSpanElement>(null);
  const tagRef       = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let st: import("gsap/ScrollTrigger").ScrollTrigger | undefined;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // ── Initial states ────────────────────────────────────────────────────
      contentRefs.current.forEach((el, i) =>
        el && gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 48 })
      );
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        gsap.set(v, { opacity: i === 0 ? 1 : 0 });
        if (i === 0) v.play().catch(() => {});
      });

      let current = 0;

      const goto = (idx: number) => {
        if (idx === current) return;
        const prev = current;
        current = idx;
        const s = SECTIONS[idx];

        // Content panels
        gsap.to(contentRefs.current[prev], { opacity: 0, y: -36, duration: 0.4, ease: "power2.in" });
        gsap.fromTo(
          contentRefs.current[idx],
          { opacity: 0, y: 52 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.22 }
        );

        // Videos
        gsap.to(videoRefs.current[prev], { opacity: 0, duration: 0.45 });
        gsap.to(videoRefs.current[idx], {
          opacity: 1, duration: 0.5, delay: 0.18,
          onStart: () => {
            const v = videoRefs.current[idx];
            if (v) { v.currentTime = 0; v.play().catch(() => {}); }
          },
          onComplete: () => videoRefs.current[prev]?.pause(),
        });

        // Section background tint
        if (bgRef.current)
          gsap.to(bgRef.current, { backgroundColor: s.bg, duration: 0.6, ease: "power2.out" });

        // Progress bar
        gsap.to(progressRef.current, {
          scaleX: (idx + 1) / N,
          backgroundColor: s.accent,
          duration: 0.5, ease: "power2.out",
        });

        // Step refs (large faded number)
        stepRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.to(el, { opacity: i === idx ? 0.07 : 0, duration: 0.4 });
        });

        // Dots
        dotRefs.current.forEach((dot, i) => {
          if (!dot) return;
          gsap.to(dot, {
            width: i === idx ? 28 : 8,
            backgroundColor: i === idx ? s.accent : "#cbd5e1",
            duration: 0.35,
          });
        });

        // Counter & tag
        if (counterRef.current)
          counterRef.current.textContent = `0${idx + 1} / 0${N}`;
        if (tagRef.current) {
          tagRef.current.textContent = s.tag;
          gsap.to(tagRef.current, { color: s.accent, duration: 0.3 });
        }
      };

      // Init step 0 visuals
      if (stepRefs.current[0]) gsap.set(stepRefs.current[0], { opacity: 0.07 });
      stepRefs.current.slice(1).forEach(el => el && gsap.set(el, { opacity: 0 }));

      // ── ScrollTrigger pin ────────────────────────────────────────────────
      st = ScrollTrigger.create({
        trigger: wrapperRef.current,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: `+=${(N - 1) * 100}%`,
        snap: {
          snapTo: Array.from({ length: N }, (_, i) => i / (N - 1)),
          duration: { min: 0.3, max: 0.55 },
          ease: "power2.inOut",
        },
        onUpdate(self) {
          const idx = Math.min(Math.round(self.progress * (N - 1)), N - 1);
          goto(idx);
        },
      });
    };

    init();
    return () => { st?.kill(); };
  }, []);

  return (
    /* Outer full-width section — this is what gets pinned */
    <section ref={wrapperRef} className="relative w-full overflow-hidden" style={{ height: "100svh" }}>

      {/* Animated section bg tint (full-bleed, behind everything) */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-none"
        style={{ backgroundColor: SECTIONS[0].bg }}
      />

      {/* Thin progress bar at very top */}
      <div className="absolute top-0 left-0 right-0 h-0.75 bg-gray-200 z-30">
        <div
          ref={progressRef}
          className="h-full origin-left"
          style={{
            transform: "scaleX(0.25)",
            transformOrigin: "left center",
            backgroundColor: SECTIONS[0].accent,
          }}
        />
      </div>

      {/* ── max-w-7xl content wrapper (matches every other section) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col">

        {/* Top bar */}
        <div className="flex items-center justify-between pt-6 pb-3 shrink-0">
          <div className="flex items-center gap-3">
            {/* Section label */}
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-white/70 backdrop-blur-sm border border-white shadow-sm"
              style={{ color: SECTIONS[0].accent }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: SECTIONS[0].accent }} />
              <span ref={tagRef} style={{ color: SECTIONS[0].accent }}>{SECTIONS[0].tag}</span>
            </span>
            <h2 className="text-sm sm:text-base font-semibold text-gray-500 hidden md:block">
              Platform Features
            </h2>
          </div>
          <span ref={counterRef} className="text-xs font-mono text-gray-400 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white shadow-sm">
            01 / 0{N}
          </span>
        </div>

        {/* ── Main two-column area ── */}
        <div className="flex-1 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 pb-14 min-h-0">

          {/* LEFT — content panels */}
          <div className="relative w-full lg:w-[46%] h-full flex items-center">

            {/* Large faded step numbers — decorative */}
            {SECTIONS.map((s, i) => (
              <span
                key={i}
                ref={el => { stepRefs.current[i] = el; }}
                className="absolute -left-2 top-1/2 -translate-y-1/2 font-extrabold leading-none select-none pointer-events-none"
                style={{
                  fontSize: "clamp(7rem, 16vw, 14rem)",
                  color: s.accent,
                  opacity: i === 0 ? 0.07 : 0,
                  fontFamily: "var(--font-syne)",
                  zIndex: 0,
                }}
              >
                {s.step}
              </span>
            ))}

            {/* Content panels stacked */}
            {SECTIONS.map((s, i) => (
              <div
                key={i}
                ref={el => { contentRefs.current[i] = el; }}
                className="absolute inset-0 flex items-center"
                style={{ zIndex: 1, pointerEvents: "none" }}
              >
                <div className="space-y-5 w-full max-w-md" style={{ pointerEvents: "auto" }}>

                  {/* Tag pill */}
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ background: s.accent + "18", color: s.accent }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.accent }} />
                    {s.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-3xl md:text-4xl lg:text-[2.4rem] font-extrabold text-gray-900 leading-tight"
                    style={{ fontFamily: "var(--font-syne)", whiteSpace: "pre-line" }}
                  >
                    {s.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">{s.desc}</p>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {s.features.map(f => (
                      <li key={f} className="flex items-center gap-3">
                        <span
                          className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: s.accent + "18" }}
                        >
                          <CheckCheck className="w-3 h-3" style={{ color: s.accent }} />
                        </span>
                        <span className="text-gray-700 text-sm font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold shadow-md transition-all duration-200 hover:gap-3 hover:shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent}bb)` }}
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — video card */}
          <div className="hidden lg:flex w-[54%] h-[85%] shrink-0 flex-col">
            {/* Card frame */}
            <div className="relative flex-1 rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-gray-950">

              {/* Fake app top-bar for polish */}
              <div className="absolute top-0 left-0 right-0 h-9 z-20 flex items-center px-4 gap-2"
                style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}>
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="ml-auto text-white/40 text-[10px] font-mono">getclickmedia.com</span>
              </div>

              {/* Videos */}
              {SECTIONS.map((s, i) => (
                <video
                  key={i}
                  ref={el => { videoRefs.current[i] = el; }}
                  src={s.video}
                  muted loop playsInline preload="auto"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                />
              ))}

              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)" }} />

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10 pointer-events-none">
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Now Viewing</p>
                  <p className="text-white text-sm font-bold">{SECTIONS[0].tag}</p>
                </div>
                <div className="flex gap-1.5 items-center">
                  {SECTIONS.map((s, i) => (
                    <span
                      key={i}
                      ref={el => { dotRefs.current[i] = el; }}
                      className="block h-2 rounded-full"
                      style={{
                        width: i === 0 ? 28 : 8,
                        backgroundColor: i === 0 ? SECTIONS[0].accent : "#6b7280",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile video strip */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-44 overflow-hidden">
        {SECTIONS.map((s, i) => (
          <video key={i} src={s.video} muted loop playsInline autoPlay preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: i === 0 ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, white 0%, transparent 30%)" }} />
      </div>
    </section>
  );
}
