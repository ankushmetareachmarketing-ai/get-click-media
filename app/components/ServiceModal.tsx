"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

// ── shadcn UI components ──────────────────────────────────────────────────────
import { Input }    from "@/components/ui/input";
import { Label }    from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button }   from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useModalStore } from "@/store/useModalStore";

// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  "WhatsApp Marketing",
  "AI Chatbot & Automation",
  "SMS & RCS Campaigns",
  "Social Media Ads",
  "Email Marketing",
  "CRM Integration",
  "Analytics & Reporting",
  "Custom / Other",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}
type Status = "idle" | "loading" | "success" | "error";

const EMPTY: FormState = {
  name: "", email: "", phone: "",
  company: "", service: "", message: "",
};

// ─────────────────────────────────────────────────────────────────────────────

export default function ServiceModal() {
  const { isOpen, closeModal } = useModalStore();
  const [form, setForm]     = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [visible, setVisible] = useState(false);   // controls CSS transition
  const [inDOM,   setInDOM]   = useState(false);   // controls portal mount
  const overlayRef  = useRef<HTMLDivElement>(null);
  const firstRef    = useRef<HTMLInputElement>(null);

  /* mount → fade-in */
  useEffect(() => {
    if (isOpen) {
      setInDOM(true);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))   // double-raf for reliable CSS transition
      );
      setTimeout(() => firstRef.current?.focus(), 220);
    } else {
      setVisible(false);
      document.body.style.overflow = "";
      const t = setTimeout(() => {
        setInDOM(false);
        setForm(EMPTY);
        setStatus("idle");
      }, 280);
      return () => clearTimeout(t);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Escape key */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [closeModal]);

  const field = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (!inDOM) return null;

  return createPortal(
    /* ── Backdrop ─────────────────────────────────────────────────────────── */
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) closeModal(); }}
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          9999,
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        padding:         "16px",
        backgroundColor: `rgba(15,23,42,${visible ? 0.6 : 0})`,
        backdropFilter:  visible ? "blur(6px)" : "none",
        WebkitBackdropFilter: visible ? "blur(6px)" : "none",
        transition:      "background-color 0.28s ease, backdrop-filter 0.28s ease",
      }}
    >
      {/* ── Dialog card ──────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Service inquiry"
        style={{
          position:     "relative",
          display:      "flex",
          width:        "100%",
          maxWidth:     "860px",
          maxHeight:    "90vh",
          borderRadius: "20px",
          overflow:     "hidden",
          background:   "#ffffff",
          boxShadow:    "0 32px 80px rgba(37,99,235,0.18), 0 8px 32px rgba(0,0,0,0.14)",
          transform:    visible ? "translateY(0) scale(1)"   : "translateY(28px) scale(0.97)",
          opacity:      visible ? 1 : 0,
          transition:   "transform 0.3s cubic-bezier(.22,1,.36,1), opacity 0.28s ease",
        }}
      >
        {/* ── Close button ─────────────────────────────────────────────── */}
        <button
          onClick={closeModal}
          aria-label="Close"
          style={{
            position:        "absolute",
            top:             14,
            right:           14,
            zIndex:          10,
            width:           32,
            height:          32,
            borderRadius:    "50%",
            border:          "1.5px solid #e2e8f0",
            background:      "#f8fafc",
            cursor:          "pointer",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            color:           "#64748b",
            transition:      "all 0.15s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#fee2e2";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#fca5a5";
            (e.currentTarget as HTMLButtonElement).style.color = "#dc2626";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "#f8fafc";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0";
            (e.currentTarget as HTMLButtonElement).style.color = "#64748b";
          }}
        >
          <X size={15} />
        </button>

        {/* ── LEFT — image panel ───────────────────────────────────────── */}
        <div
          style={{
            position:   "relative",
            width:      "320px",
            flexShrink: 0,
            display:    "none",
          }}
          className="sm:block"
        >
          {/* We need sm:display:block but inline style overrides, use a wrapper */}
        </div>

        {/* Real image panel (visible on sm+) */}
        <div className="relative hidden sm:block shrink-0 w-75"
             style={{ minHeight: "100%" }}>
          <Image
            src="/images/heros.png"
            alt="Grow with Get Click Media"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark-to-transparent gradient at bottom */}
          <div
            style={{
              position:   "absolute",
              inset:       0,
              background: "linear-gradient(to top, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0.1) 55%, transparent 100%)",
            }}
          />
          {/* Top badge */}
          <div style={{ position: "absolute", top: 18, left: 18 }}>
            <span style={{
              display:         "inline-flex",
              alignItems:      "center",
              gap:             6,
              background:      "rgba(255,255,255,0.18)",
              border:          "1px solid rgba(255,255,255,0.32)",
              backdropFilter:  "blur(8px)",
              borderRadius:    999,
              padding:         "5px 13px",
              fontSize:        11,
              fontWeight:      600,
              color:           "#fff",
              letterSpacing:   "0.02em",
            }}>
              ✦ Trusted by 500+ brands
            </span>
          </div>
          {/* Bottom caption */}
          <div style={{
            position: "absolute",
            bottom:   0,
            left:     0,
            right:    0,
            padding:  "24px 22px",
          }}>
            <p style={{
              margin:      0,
              color:       "#fff",
              fontWeight:  800,
              fontSize:    20,
              lineHeight:  1.3,
            }}>
              Let&rsquo;s grow your<br />
              <span style={{ color: "#7dd3fc" }}>business together</span>
            </p>
            <p style={{
              margin:    "6px 0 0",
              color:     "rgba(255,255,255,0.75)",
              fontSize:  12,
              lineHeight: 1.5,
            }}>
              Free strategy call · No obligation · Reply in 24 h
            </p>
          </div>
        </div>

        {/* ── RIGHT — form panel ───────────────────────────────────────── */}
        <div style={{
          flex:       1,
          overflowY:  "auto",
          padding:    "32px 28px 28px",
          background: "#fff",
        }}>
          {status === "success" ? (
            <SuccessScreen name={form.name} onClose={closeModal} />
          ) : (
            <>
              {/* Heading */}
              <div style={{ marginBottom: 22 }}>
                <h2 style={{
                  margin:     0,
                  fontSize:   20,
                  fontWeight: 800,
                  color:      "var(--foreground)",
                }}>
                  Get a free consultation
                </h2>
                <p style={{
                  margin:    "4px 0 0",
                  fontSize:  13,
                  color:     "var(--text-muted)",
                }}>
                  Fill in the details below — our team will reach out shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                {/* Row 1 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
                     className="grid-cols-1 sm:grid-cols-2">
                  <FieldWrap label="Full Name" required>
                    <Input
                      ref={firstRef}
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={field("name")}
                      required
                      className="h-10 rounded-xl bg-[#f8fafc] border-[#e2e8f0]
                                 focus-visible:border-[#2563eb] focus-visible:ring-[#2563eb]/20"
                    />
                  </FieldWrap>
                  <FieldWrap label="Email Address" required>
                    <Input
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={field("email")}
                      required
                      className="h-10 rounded-xl bg-[#f8fafc] border-[#e2e8f0]
                                 focus-visible:border-[#2563eb] focus-visible:ring-[#2563eb]/20"
                    />
                  </FieldWrap>
                </div>

                {/* Row 2 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
                     className="grid-cols-1 sm:grid-cols-2">
                  <FieldWrap label="Phone Number">
                    <Input
                      type="tel"
                      placeholder="+91 76699 99219"
                      value={form.phone}
                      onChange={field("phone")}
                      className="h-10 rounded-xl bg-[#f8fafc] border-[#e2e8f0]
                                 focus-visible:border-[#2563eb] focus-visible:ring-[#2563eb]/20"
                    />
                  </FieldWrap>
                  <FieldWrap label="Company / Brand">
                    <Input
                      type="text"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={field("company")}
                      className="h-10 rounded-xl bg-[#f8fafc] border-[#e2e8f0]
                                 focus-visible:border-[#2563eb] focus-visible:ring-[#2563eb]/20"
                    />
                  </FieldWrap>
                </div>

                {/* Service dropdown */}
                <FieldWrap label="Service Interested In">
                  <Select
                    value={form.service}
                    onValueChange={val => setForm(p => ({ ...p, service: val }))}
                  >
                    <SelectTrigger
                      className="h-10 w-full rounded-xl bg-[#f8fafc] border-[#e2e8f0]
                                 focus:border-[#2563eb] focus:ring-[#2563eb]/20 text-sm"
                    >
                      <SelectValue placeholder="Select a service…" />
                    </SelectTrigger>
                    <SelectContent
                      className="rounded-xl border-[#e2e8f0] bg-white shadow-xl"
                      style={{ zIndex: 99999 }}
                    >
                      {SERVICES.map(s => (
                        <SelectItem
                          key={s}
                          value={s}
                          className="cursor-pointer rounded-lg text-sm
                                     focus:bg-blue-50 focus:text-[#2563eb]"
                        >
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FieldWrap>

                {/* Message */}
                <FieldWrap label="Your Message" required>
                  <Textarea
                    placeholder="Describe your goals, audience, current challenges…"
                    value={form.message}
                    onChange={field("message")}
                    required
                    rows={4}
                    className="rounded-xl bg-[#f8fafc] border-[#e2e8f0] resize-none
                               focus-visible:border-[#2563eb] focus-visible:ring-[#2563eb]/20"
                  />
                </FieldWrap>

                {/* Error */}
                {status === "error" && (
                  <p style={{
                    margin:       0,
                    fontSize:     13,
                    color:        "#dc2626",
                    background:   "#fef2f2",
                    border:       "1px solid #fecaca",
                    borderRadius: 12,
                    padding:      "10px 14px",
                  }}>
                    Something went wrong — please try again.
                  </p>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-11 rounded-xl text-[15px] font-semibold gap-2 text-white
                             bg-linear-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8]
                             hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5
                             transition-all duration-200 disabled:opacity-60 border-0"
                >
                  {status === "loading"
                    ? <><Loader2 size={17} className="animate-spin" /> Sending…</>
                    : <>Send My Inquiry <ArrowRight size={16} /></>
                  }
                </Button>

                <p style={{
                  textAlign:  "center",
                  fontSize:   11,
                  color:      "#94a3b8",
                  margin:     "2px 0 0",
                }}>
                  🔒 Your information is never shared with third parties.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FieldWrap({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <Label style={{
        fontSize:      11,
        fontWeight:    700,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color:         "#64748b",
      }}>
        {label}
        {required && <span style={{ color: "#ef4444", marginLeft: 2 }}>*</span>}
      </Label>
      {children}
    </div>
  );
}

function SuccessScreen({ name, onClose }: { name: string; onClose: () => void }) {
  return (
    <div style={{
      display:        "flex",
      flexDirection:  "column",
      alignItems:     "center",
      justifyContent: "center",
      textAlign:      "center",
      gap:            16,
      padding:        "40px 16px",
    }}>
      <div style={{
        width:        72,
        height:       72,
        borderRadius: "50%",
        background:   "#eff6ff",
        border:       "2px solid #bfdbfe",
        display:      "flex",
        alignItems:   "center",
        justifyContent: "center",
      }}>
        <CheckCircle2 size={34} color="#2563eb" />
      </div>
      <div>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#0f172a" }}>
          You&rsquo;re all set!
        </h3>
        <p style={{
          margin:    "6px 0 0",
          fontSize:  13.5,
          color:     "#475569",
          maxWidth:  260,
          lineHeight: 1.6,
        }}>
          Hey <strong>{name || "there"}</strong>! We&apos;ve received your inquiry and will be in touch within 24 hours.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
        {["Free strategy call booked", "No obligation", "Expert advice included"].map(t => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#334155", fontWeight: 500 }}>
            <CheckCircle2 size={14} color="#2563eb" style={{ flexShrink: 0 }} />
            {t}
          </div>
        ))}
      </div>
      <Button
        onClick={onClose}
        className="mt-2 h-10 px-8 rounded-xl font-semibold gap-2 text-white border-0
                   bg-linear-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8]
                   hover:opacity-90 hover:shadow-md transition-all"
      >
        Done <ArrowRight size={15} />
      </Button>
    </div>
  );
}
