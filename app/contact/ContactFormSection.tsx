"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin, PhoneCall } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const EMPTY: FormState = { name: "", email: "", phone: "", company: "", service: "", message: "" };

export default function ContactFormSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");

  const field = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

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
      setForm(EMPTY);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      setStatus("idle");
      toast.error("Something went wrong — please try again.");
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white" id="contact-form">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        {/* -- Contact details -- */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-widest">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-(family-name:--font-syne)">
              We usually reply within 24 hours
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tell us about your business and what you&apos;re looking to achieve- WhatsApp, RCS, SMS,
              or a combination- and our team will follow up with next steps.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { Icon: PhoneCall, text: "+91 9667694088", href: "tel:+919667694088" },
              { Icon: Mail, text: "info@getclickmedia.com", href: "mailto:info@getclickmedia.com" },
              { Icon: MapPin, text: "Mumbai, India", href: undefined },
            ].map(({ Icon, text, href }) => {
              const content = (
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#2563eb]" />
                  </span>
                  <span className="text-sm font-medium text-gray-700">{text}</span>
                </div>
              );
              return href ? (
                <a key={text} href={href} className="block hover:opacity-80 transition-opacity">
                  {content}
                </a>
              ) : (
                <div key={text}>{content}</div>
              );
            })}
          </div>
        </div>

        {/* -- Form -- */}
        <div className="rounded-2xl border border-gray-100 shadow-sm bg-white p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center gap-4 py-10">
              <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">You&rsquo;re all set!</h3>
                <p className="text-sm text-gray-500 mt-1 max-w-xs">
                  We&apos;ve received your message and will be in touch within 24 hours.
                </p>
              </div>
              <Button
                onClick={() => setStatus("idle")}
                className="mt-2 h-10 px-6 rounded-xl font-semibold gap-2 text-white border-0 bg-linear-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] hover:opacity-90"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    Full Name<span className="text-red-500 ml-0.5">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={field("name")}
                    required
                    className="h-10 rounded-xl bg-[#f8fafc] border-[#e2e8f0]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    Email Address<span className="text-red-500 ml-0.5">*</span>
                  </Label>
                  <Input
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={field("email")}
                    required
                    className="h-10 rounded-xl bg-[#f8fafc] border-[#e2e8f0]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wide text-gray-500">Phone Number</Label>
                  <Input
                    type="tel"
                    placeholder="+91 96676 94088"
                    value={form.phone}
                    onChange={field("phone")}
                    className="h-10 rounded-xl bg-[#f8fafc] border-[#e2e8f0]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs font-bold uppercase tracking-wide text-gray-500">Company / Brand</Label>
                  <Input
                    type="text"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={field("company")}
                    className="h-10 rounded-xl bg-[#f8fafc] border-[#e2e8f0]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-gray-500">Service Interested In</Label>
                <Select value={form.service} onValueChange={(val) => setForm((p) => ({ ...p, service: val }))}>
                  <SelectTrigger className="h-10 w-full rounded-xl bg-[#f8fafc] border-[#e2e8f0] text-sm">
                    <SelectValue placeholder="Select a service…" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-[#e2e8f0] bg-white shadow-xl">
                    {SERVICES.map((s) => (
                      <SelectItem key={s} value={s} className="cursor-pointer rounded-lg text-sm">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-xs font-bold uppercase tracking-wide text-gray-500">
                  Your Message<span className="text-red-500 ml-0.5">*</span>
                </Label>
                <Textarea
                  placeholder="Describe your goals, audience, current challenges…"
                  value={form.message}
                  onChange={field("message")}
                  required
                  rows={4}
                  className="rounded-xl bg-[#f8fafc] border-[#e2e8f0] resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-11 rounded-xl text-[15px] font-semibold gap-2 text-white bg-linear-to-r from-[#1e3a8a] via-[#2563eb] to-[#38bdf8] hover:opacity-90 disabled:opacity-60 border-0"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
