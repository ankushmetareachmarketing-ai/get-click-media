"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Loader2, CheckCircle2, Sparkles } from "lucide-react";
import { Input }  from "@/components/ui/input";
import { Label }  from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// ── Types ─────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  phone: string;
  email: string;
  website: string;
  slot: string;
  consent: boolean;
}
type Status = "idle" | "loading" | "success" | "error";

const EMPTY: FormState = {
  name: "", phone: "", email: "",
  website: "", slot: "", consent: false,
};

const SLOTS = [
  "10:00 AM – 10:30 AM",
  "11:00 AM – 11:30 AM",
  "12:00 PM – 12:30 PM",
  "2:00 PM – 2:30 PM",
  "3:00 PM – 3:30 PM",
  "4:00 PM – 4:30 PM",
  "5:00 PM – 5:30 PM",
];

const PARTNERS = [
  { src: "/images/consultation/meta.webp",   name: "Meta Business Partner" },
  { src: "/images/consultation/bsp.webp",    name: "WhatsApp" },
  { src: "/images/consultation/google.webp", name: "Google RCS Partner" },
  { src: "/images/consultation/awards.webp", name: "Award Winning" },
];

// ── Component ─────────────────────────────────────────────────────────────────

const BookConsultation: React.FC = () => {
  const [form, setForm]     = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, email: form.email,
          phone: form.phone, company: form.website,
          message: `Slot: ${form.slot}`,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-14 sm:py-20 px-4 bg-[#f8fafc]">
      <div className="max-w-screen-xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-[#2563eb] text-[11px] font-bold tracking-wide">
            <Sparkles size={12} />
            Let&apos;s Customize this for You
          </span>

          <h2
            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight tracking-tight text-gray-900"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Create Your Tailored Solution{" "}
            <span style={{ color: "#f59e0b" }}>✦</span>{" "}
            With Get Click Media
          </h2>

          <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
            From chatbot automation to CRM-integrated customer journeys, every
            solution is built around your business needs.
          </p>
        </div>

        {/* ── Main card — full width of max-w-screen-xl ── */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* ── Left: Form ── */}
            <div className="flex-1 p-7 sm:p-10">

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 h-full py-16 text-center">
                  <CheckCircle2 size={52} className="text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-syne)" }}>
                    You&apos;re all set!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    We&apos;ve received your request. Our team will reach out within 24 hours to confirm your slot.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[#2563eb] text-sm font-semibold underline underline-offset-2 cursor-pointer"
                  >
                    Book another slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="bc-name" className="text-xs font-semibold text-gray-600">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="bc-name" required placeholder="Full Name"
                        value={form.name} onChange={set("name")}
                        className="h-11 rounded-xl border-gray-200 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="bc-phone" className="text-xs font-semibold text-gray-600">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 h-11 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 font-medium shrink-0">
                          +91
                        </span>
                        <Input
                          id="bc-phone" required type="tel" placeholder="Phone No"
                          value={form.phone} onChange={set("phone")}
                          className="h-11 rounded-l-none rounded-r-xl border-gray-200 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="bc-email" className="text-xs font-semibold text-gray-600">
                        Official Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="bc-email" required type="email" placeholder="Official Email"
                        value={form.email} onChange={set("email")}
                        className="h-11 rounded-xl border-gray-200 text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="bc-website" className="text-xs font-semibold text-gray-600">
                        Company Website <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="bc-website" required type="url" placeholder="Paste your company URL here"
                        value={form.website} onChange={set("website")}
                        className="h-11 rounded-xl border-gray-200 text-sm"
                      />
                    </div>
                  </div>

                  {/* Slot */}
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-semibold text-gray-600">
                      Book Your Slot <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <select
                        required
                        value={form.slot}
                        onChange={e => setForm(p => ({ ...p, slot: e.target.value }))}
                        className="w-full h-11 rounded-xl border border-gray-200 bg-white px-3 pr-9 text-sm text-gray-600 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-[#2563eb]"
                      >
                        <option value="" disabled>Select Your Slot</option>
                        {SLOTS.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={e => setForm(p => ({ ...p, consent: e.target.checked }))}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-[#2563eb] cursor-pointer"
                    />
                    <span className="text-xs text-gray-500 leading-relaxed">
                      I agree to receive communications from Get Click Media
                    </span>
                  </label>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={status === "loading" || !form.consent}
                    className="w-fit inline-flex items-center gap-2.5 pl-5 pr-2 h-11 rounded-full font-semibold text-sm text-white cursor-pointer transition-all hover:scale-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)", boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}
                  >
                    {status === "loading" ? (
                      <><Loader2 size={14} className="animate-spin" />Scheduling…</>
                    ) : (
                      <>
                        Schedule My Demo
                        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                          <ArrowRight size={14} style={{ color: "#2563eb" }} />
                        </span>
                      </>
                    )}
                  </Button>

                  {status === "error" && (
                    <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>

            {/* ── Right: Trust panel ── */}
            <div
              className="lg:w-[400px] xl:w-[440px] shrink-0 flex flex-col gap-8 p-7 sm:p-10"
              style={{ background: "linear-gradient(145deg,#0c1a3a 0%,#0f2356 60%,#0d3b6e 100%)" }}
            >
              {/* Heading */}
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  To Book 1:1{" "}
                  <em style={{ fontStyle: "italic", fontFamily: "Georgia,'Times New Roman',serif", fontWeight: 400, color: "#38bdf8" }}>
                    Consultation
                  </em>
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  This will be a 30-minute call to understand your needs and give you a glimpse of our platform and offerings.
                </p>
              </div>

              {/* Partner badge grid — real images */}
              <div className="grid grid-cols-2 gap-3">
                {PARTNERS.map(({ src, name }) => (
                  <div
                    key={name}
                    className="flex items-center justify-center bg-white rounded-2xl p-4 h-24"
                  >
                    <Image
                      src={src}
                      alt={name}
                      width={120}
                      height={60}
                      className="w-auto max-h-14 object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BookConsultation;
