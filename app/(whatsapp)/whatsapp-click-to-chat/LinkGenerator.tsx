"use client";

import { useMemo, useState } from "react";
import { Copy, Check, QrCode } from "lucide-react";

function digitsOnly(v: string) {
  return v.replace(/[^0-9]/g, "");
}

export default function LinkGenerator() {
  const [countryCode, setCountryCode] = useState("91");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const link = useMemo(() => {
    const number = `${digitsOnly(countryCode)}${digitsOnly(phone)}`;
    if (!number) return "";
    const base = `https://wa.me/${number}`;
    if (!message.trim()) return base;
    return `${base}?text=${encodeURIComponent(message.trim())}`;
  }, [countryCode, phone, message]);

  const qrSrc = link
    ? `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(link)}`
    : "";

  const handleCopy = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable- no-op
    }
  };

  return (
    <div className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6 sm:p-8 space-y-6">
      <div className="grid sm:grid-cols-[100px_1fr] gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Country code</label>
          <input
            value={countryCode}
            onChange={e => setCountryCode(digitsOnly(e.target.value).slice(0, 3))}
            placeholder="91"
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">WhatsApp Business number</label>
          <input
            value={phone}
            onChange={e => setPhone(digitsOnly(e.target.value).slice(0, 12))}
            placeholder="98765 43210"
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Pre-filled message (optional)</label>
        <input
          value={message}
          onChange={e => setMessage(e.target.value.slice(0, 200))}
          placeholder="Website Enquiry"
          className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb]"
        />
        <p className="text-[11px] text-gray-400 mt-1">Keep it under 10 words- long pre-filled messages get edited or deleted.</p>
      </div>

      <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
        <p className="text-xs font-semibold text-gray-500 mb-2">Your Click to Chat link</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <code className="flex-1 text-xs sm:text-sm text-gray-700 break-all bg-white border border-gray-200 rounded-lg px-3 py-2.5">
            {link || "https://wa.me/91XXXXXXXXXX"}
          </code>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!link}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#2563eb] text-white text-xs font-bold disabled:opacity-40 hover:bg-[#1d4fd1] transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied" : "Copy Link"}
          </button>
        </div>
      </div>

      {link && (
        <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={qrSrc} alt="WhatsApp Click to Chat QR code" width={96} height={96} className="rounded-lg border border-gray-200" />
          <div className="text-xs text-gray-500 leading-relaxed">
            <p className="flex items-center gap-1.5 font-semibold text-gray-700 mb-1"><QrCode className="w-3.5 h-3.5" /> Scan to test</p>
            Use this QR code on business cards, packaging, or in-store signage- or scan it now to test the link
            on your own phone.
          </div>
        </div>
      )}
    </div>
  );
}
