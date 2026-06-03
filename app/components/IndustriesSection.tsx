"use client";

import React, { useState, useRef } from "react";
import {
  Landmark, Gamepad2, Building2, ShoppingCart, Tv2,
  Truck, GraduationCap, Plane, MessageSquare,
  Bell, Users, Ticket, Heart, Send, Zap, ChevronRight, ChevronLeft,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

// ── Types ─────────────────────────────────────────────────────────────────────
interface UseCase { title: string; visual: React.ReactNode; }
interface Industry { label: string; Icon: React.ElementType; color: string; useCases: UseCase[]; }

// ── Mini visuals ──────────────────────────────────────────────────────────────

const BubbleChat = ({ color1, color2 }: { color1: string; color2: string }) => (
  <div className="flex flex-col gap-2.5 w-full">
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: color1 }}>
        <MessageSquare size={12} />
      </div>
      <div className="px-3.5 py-2 rounded-2xl rounded-bl-sm text-[11px] font-medium text-white max-w-[75%] leading-snug" style={{ background: color1 }}>
        Hey! Check out our new offer 🎉
      </div>
    </div>
    <div className="flex items-end gap-2 self-end flex-row-reverse">
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: color2 }}>
        <Users size={12} />
      </div>
      <div className="px-3.5 py-2 rounded-2xl rounded-br-sm text-[11px] font-medium text-white max-w-[75%] leading-snug" style={{ background: color2 }}>
        Interested! Tell me more 👍
      </div>
    </div>
  </div>
);

const SubscriptionCard = () => (
  <div className="flex flex-col gap-2.5 w-full">
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 px-4 py-3 flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
        <Bell size={16} className="text-violet-500" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-slate-700">Subscribed!</p>
        <p className="text-[10px] text-slate-400">Breaking news alerts on</p>
      </div>
      <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center shrink-0">
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
    </div>
    <div className="flex gap-1.5 flex-wrap">
      {["Sports","Politics","Tech"].map(t => (
        <span key={t} className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 text-[10px] font-semibold border border-violet-100">{t}</span>
      ))}
    </div>
  </div>
);

const EventTicket = () => (
  <div className="flex flex-col gap-2 w-full">
    <div className="bg-white rounded-xl shadow-sm border border-pink-100 p-3.5">
      <div className="flex items-center gap-2 mb-2.5">
        <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
          <Ticket size={14} className="text-pink-500"/>
        </div>
        <div>
          <p className="text-xs font-bold text-slate-800">Lollapalooza 2025</p>
          <p className="text-[10px] text-slate-400">Aug 2–4 · Chicago</p>
        </div>
      </div>
      <div className="border-t border-dashed border-slate-200 my-2" />
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-slate-400">General Admission</span>
        <span className="text-xs font-bold text-pink-500">$149</span>
      </div>
    </div>
    <div className="flex items-center gap-1.5">
      <Send size={10} className="text-violet-400"/>
      <span className="text-[10px] text-slate-400">SMS alert sent to 40K fans</span>
    </div>
  </div>
);

const CommunityGraph = () => (
  <div className="relative flex items-center justify-center w-full" style={{ height: 110 }}>
    <div className="absolute w-11 h-11 rounded-full bg-violet-100 flex items-center justify-center border-2 border-violet-200 z-10 shadow-sm">
      <Heart size={16} className="text-violet-500" />
    </div>
    {[
      { x: -68, y: -28, label: "Fans" },
      { x: 68,  y: -28, label: "Clubs" },
      { x: -52, y: 42,  label: "Events" },
      { x: 58,  y: 42,  label: "Media" },
    ].map(({ x, y, label }, i) => (
      <div key={i} className="absolute flex flex-col items-center gap-0.5" style={{ transform: `translate(${x}px,${y}px)` }}>
        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-200 shadow-sm">
          <Users size={13} className="text-emerald-500" />
        </div>
        <span className="text-[9px] text-slate-400 font-medium">{label}</span>
        <svg className="absolute" style={{ top: y < 0 ? "80%" : "-140%", left: "50%", width: 60, height: 38, overflow: "visible", pointerEvents: "none" }}>
          <line x1="0" y1="0" x2={-x * 0.6} y2={y < 0 ? 28 : -28} stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="4 3"/>
        </svg>
      </div>
    ))}
  </div>
);

const OTPVisual = () => (
  <div className="flex flex-col items-center gap-3 w-full">
    <div className="flex gap-1.5">
      {["4","8","2","9","1","0"].map((d, i) => (
        <div key={i} className="w-8 h-10 rounded-lg bg-white shadow-sm border border-blue-100 flex items-center justify-center text-lg font-extrabold text-blue-600">{d}</div>
      ))}
    </div>
    <p className="text-[10px] text-slate-400">OTP valid for <span className="font-semibold text-blue-500">10 minutes</span></p>
  </div>
);

const FraudAlertVisual = () => (
  <div className="flex flex-col gap-2 w-full">
    <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
        <Zap size={14} className="text-red-500"/>
      </div>
      <div>
        <p className="text-xs font-bold text-red-600">Fraud Alert!</p>
        <p className="text-[10px] text-slate-500">Unusual login from 🇷🇺 Moscow</p>
      </div>
    </div>
    <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2.5 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
      <div>
        <p className="text-xs font-bold text-emerald-600">Transaction Approved</p>
        <p className="text-[10px] text-slate-500">₹24,500 · HDFC Bank</p>
      </div>
    </div>
  </div>
);

const DeliveryVisual = () => (
  <div className="flex flex-col gap-2 w-full">
    <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-3.5">
      <div className="flex items-center gap-2 mb-3">
        <Truck size={14} className="text-orange-500"/>
        <span className="text-xs font-bold text-slate-700">Order #ORD-9921</span>
      </div>
      <div className="flex justify-between text-[9px] text-slate-400 mb-1.5">
        {["Placed","Packed","Shipped","Out","Delivered"].map((s, i) => (
          <span key={i} className={i <= 2 ? "text-orange-500 font-semibold" : ""}>{s}</span>
        ))}
      </div>
      <div className="w-full h-1.5 rounded-full bg-slate-100">
        <div className="h-1.5 rounded-full" style={{ width: "55%", background: "linear-gradient(to right, #fb923c, #f97316)" }}/>
      </div>
    </div>
  </div>
);

const LearnVisual = () => (
  <div className="flex flex-col gap-2 w-full">
    <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-3.5">
      <p className="text-xs font-bold text-slate-700 mb-2.5">📚 Daily Quiz: Maths</p>
      {["What is 12 × 8?", "Solve: 2x + 5 = 21"].map((q, i) => (
        <div key={i} className="text-[10px] text-slate-500 flex items-center gap-2 mb-1.5">
          <div className="w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center text-[8px] font-bold text-indigo-500 shrink-0">{i + 1}</div>
          {q}
        </div>
      ))}
      <div className="mt-2">
        <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-[9px] text-indigo-500 font-semibold border border-indigo-100">Send Answers via SMS</span>
      </div>
    </div>
  </div>
);

const TravelVisual = () => (
  <div className="flex flex-col gap-2 w-full">
    <div className="bg-white rounded-xl shadow-sm border border-sky-100 p-3.5">
      <div className="flex items-center gap-2 mb-2">
        <Plane size={14} className="text-sky-500"/>
        <span className="text-xs font-bold text-slate-700">Flight AI-202 · On Time ✅</span>
      </div>
      <p className="text-[10px] text-slate-500">Gate <span className="font-bold text-sky-600">B14</span> · Boarding at <span className="font-bold text-sky-600">14:30</span></p>
      <div className="mt-2 h-px bg-slate-100"/>
      <p className="mt-2 text-[10px] text-slate-400">Hotel check-in reminder sent 📩</p>
    </div>
  </div>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const industries: Industry[] = [
  {
    label: "Banking & Finance", Icon: Landmark, color: "#3b82f6",
    useCases: [
      { title: "OTP & Secure Authentication",     visual: <OTPVisual /> },
      { title: "Fraud Alerts & Notifications",    visual: <FraudAlertVisual /> },
      { title: "Loan & EMI Reminders",            visual: <BubbleChat color1="#3b82f6" color2="#6366f1" /> },
      { title: "Account Balance Updates",         visual: <SubscriptionCard /> },
    ],
  },
  {
    label: "Gaming", Icon: Gamepad2, color: "#8b5cf6",
    useCases: [
      { title: "Targeted Campaigns & Bots",       visual: <BubbleChat color1="#8b5cf6" color2="#a78bfa" /> },
      { title: "Content Subscription Updates",    visual: <SubscriptionCard /> },
      { title: "Event Promotions & Ticketing",    visual: <EventTicket /> },
      { title: "Fan Community Engagement",        visual: <CommunityGraph /> },
    ],
  },
  {
    label: "Government", Icon: Building2, color: "#0ea5e9",
    useCases: [
      { title: "Emergency Broadcast Alerts",      visual: <BubbleChat color1="#ef4444" color2="#f97316" /> },
      { title: "Citizen Service Reminders",       visual: <SubscriptionCard /> },
      { title: "Election & Voting Notifications", visual: <BubbleChat color1="#0ea5e9" color2="#6366f1" /> },
      { title: "Public Health Campaigns",         visual: <CommunityGraph /> },
    ],
  },
  {
    label: "E-commerce", Icon: ShoppingCart, color: "#f59e0b",
    useCases: [
      { title: "Order & Delivery Tracking",       visual: <DeliveryVisual /> },
      { title: "Flash Sale Campaigns",            visual: <BubbleChat color1="#f59e0b" color2="#ef4444" /> },
      { title: "Abandoned Cart Recovery",         visual: <SubscriptionCard /> },
      { title: "Customer Review Requests",        visual: <CommunityGraph /> },
    ],
  },
  {
    label: "Media & Entertainment", Icon: Tv2, color: "#ec4899",
    useCases: [
      { title: "Interactive Bots & Campaigns",    visual: <BubbleChat color1="#8b5cf6" color2="#a78bfa" /> },
      { title: "Content Subscription Updates",    visual: <SubscriptionCard /> },
      { title: "Event & Ticketing Alerts",        visual: <EventTicket /> },
      { title: "Fan Community Engagement",        visual: <CommunityGraph /> },
    ],
  },
  {
    label: "Logistics & Transport", Icon: Truck, color: "#f97316",
    useCases: [
      { title: "Real-Time Shipment Updates",      visual: <DeliveryVisual /> },
      { title: "Driver & Fleet Alerts",           visual: <BubbleChat color1="#f97316" color2="#eab308" /> },
      { title: "Delivery Confirmation",           visual: <SubscriptionCard /> },
      { title: "Customer ETA Notifications",      visual: <EventTicket /> },
    ],
  },
  {
    label: "Education", Icon: GraduationCap, color: "#6366f1",
    useCases: [
      { title: "Daily Quizzes & Learning Alerts", visual: <LearnVisual /> },
      { title: "Exam Reminders & Results",        visual: <BubbleChat color1="#6366f1" color2="#8b5cf6" /> },
      { title: "Parent Notifications",            visual: <SubscriptionCard /> },
      { title: "Alumni Engagement",              visual: <CommunityGraph /> },
    ],
  },
  {
    label: "Travel & Tourism", Icon: Plane, color: "#0ea5e9",
    useCases: [
      { title: "Flight & Booking Alerts",         visual: <TravelVisual /> },
      { title: "Hotel Check-in Reminders",        visual: <BubbleChat color1="#0ea5e9" color2="#38bdf8" /> },
      { title: "Travel Package Offers",           visual: <SubscriptionCard /> },
      { title: "Itinerary Updates",              visual: <EventTicket /> },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

const IndustriesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const [animKey, setAnimKey]         = useState(0);
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  const handleSelect = (i: number) => {
    if (i === activeIndex) return;
    setActiveIndex(i);
    setAnimKey(k => k + 1);
  };

  const scrollTabsLeft  = () => tabsScrollRef.current?.scrollBy({ left: -100, behavior: "smooth" });
  const scrollTabsRight = () => tabsScrollRef.current?.scrollBy({ left: 100,  behavior: "smooth" });

  const active = industries[activeIndex];

  return (
    <section className="py-10 sm:py-20 px-4 lg:px-16 overflow-hidden bg-white">
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        .ind-grid-in { animation: slideUpFade 0.35s cubic-bezier(0.22,1,0.36,1) both; }
        .ind-card-delay-0 { animation-delay: 0ms;  }
        .ind-card-delay-1 { animation-delay: 60ms; }
        .ind-card-delay-2 { animation-delay: 110ms; }
        .ind-card-delay-3 { animation-delay: 155ms; }

        .ind-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 11px;
          width: 100%;
          padding: 10px 13px;
          border-radius: 12px;
          border: 1.5px solid transparent;
          background: transparent;
          cursor: pointer;
          text-align: left;
          font-size: 13px;
          font-weight: 500;
          color: #64748b;
          transition: background 0.17s ease, color 0.17s ease,
                      transform 0.16s ease, box-shadow 0.17s ease;
          font-family: inherit;
          line-height: 1.2;
        }
        .ind-tab:hover:not(.ind-active) {
          background: #f1f5f9;
          color: #1e293b;
          transform: translateX(3px);
        }
        .ind-active {
          color: #fff !important;
          border-color: transparent;
          transform: translateX(4px);
        }
        .ind-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.17s;
        }
        .ind-arrow {
          margin-left: auto;
          flex-shrink: 0;
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.17s, transform 0.17s;
        }
        .ind-tab:hover .ind-arrow,
        .ind-active .ind-arrow { opacity: 1; transform: translateX(0); }

        @media (max-width: 1023px) {
          .ind-tab {
            width: 72px;
            min-width: 72px;
            height: 76px;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 8px 6px;
            font-size: 10px;
            gap: 5px;
            border-radius: 14px;
            white-space: normal;
            line-height: 1.25;
          }
          .ind-tab:hover:not(.ind-active) { transform: translateY(-2px); }
          .ind-active { transform: translateY(-2px); }
          .ind-arrow { display: none; }
          .ind-icon { width: 26px; height: 26px; border-radius: 7px; }
          .ind-tab-label { flex: none !important; overflow: visible !important; text-overflow: unset !important; white-space: normal !important; }
        }

        @media (max-width: 1023px) {
          .ind-card { padding: 12px; min-height: 160px; gap: 10px; border-radius: 14px; }
        }

        .ind-card {
          background: #fff;
          border-radius: 18px;
          border: 1.5px solid #e2e8f0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-height: 210px;
          transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }
        .ind-card:hover {
          box-shadow: 0 8px 28px rgba(37,99,235,0.1);
          transform: translateY(-3px);
          border-color: #bfdbfe;
        }
      `}</style>

      <div className="max-w-screen-xl mx-auto">

        {/* Section heading */}
        <div className="mb-8 sm:mb-14">
          <SectionHeading
            eyebrow="Industry Solutions"
            title="Your industry, your rules. Build the perfect stack."
            highlight="Build the perfect stack."
            description="A smarter, fully customizable communication system — ready to scale with every channel and vertical."

          />
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-start">

          {/* ── LEFT sidebar ────────────────────────────────────────────── */}
          <div className="w-full lg:w-64 shrink-0">

            {/* Mobile: arrow slider */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                onClick={scrollTabsLeft}
                className="shrink-0 w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 shadow-sm"
              >
                <ChevronLeft size={14} />
              </button>

              <div
                ref={tabsScrollRef}
                className="flex-1 flex flex-row flex-nowrap overflow-x-auto gap-2 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {industries.map(({ label, Icon, color }, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={label}
                      onClick={() => handleSelect(i)}
                      className={`ind-tab${isActive ? " ind-active" : ""}`}
                      style={isActive ? { background: color, boxShadow: `0 4px 14px ${color}40` } : {}}
                    >
                      <span className="ind-icon" style={{ background: isActive ? "rgba(255,255,255,0.2)" : `${color}18` }}>
                        <Icon size={13} strokeWidth={1.9} style={{ color: isActive ? "#fff" : color }} />
                      </span>
                      <span className="ind-tab-label" style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                onClick={scrollTabsRight}
                className="shrink-0 w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-50 shadow-sm"
              >
                <ChevronRight size={14} />
              </button>
            </div>

            {/* Desktop: vertical list */}
            <div
              className="hidden lg:block rounded-2xl p-2.5"
              style={{ background: "#f8fafc", border: "1.5px solid #e2e8f0" }}
            >
              <p
                className="px-3 mb-2 mt-1"
                style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", color: "#94a3b8" }}
              >
                Industries we serve
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {industries.map(({ label, Icon, color }, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={label}
                      onClick={() => handleSelect(i)}
                      className={`ind-tab${isActive ? " ind-active" : ""}`}
                      style={isActive ? { background: color, boxShadow: `0 4px 14px ${color}40` } : {}}
                    >
                      <span className="ind-icon" style={{ background: isActive ? "rgba(255,255,255,0.2)" : `${color}18` }}>
                        <Icon size={15} strokeWidth={1.9} style={{ color: isActive ? "#fff" : color }} />
                      </span>
                      <span className="ind-tab-label" style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {label}
                      </span>
                      <ChevronRight size={13} className="ind-arrow" style={{ color: isActive ? "rgba(255,255,255,0.8)" : "#cbd5e1" }} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── RIGHT panel ─────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Active industry header */}
            <div
              className="flex items-center gap-3 mb-4 px-4 py-3 rounded-2xl"
              style={{ background: `${active.color}0d`, border: `1.5px solid ${active.color}25` }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm shrink-0"
                style={{ background: active.color }}
              >
                <active.Icon size={17} color="#fff" strokeWidth={1.8} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold leading-tight" style={{ color: "#0f172a" }}>
                  {active.label}
                </h3>
                <p className="text-[11px]" style={{ color: "#64748b" }}>
                  {active.useCases.length} use cases available
                </p>
              </div>

              <div
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold shrink-0"
                style={{ background: `${active.color}15`, color: active.color, border: `1.5px solid ${active.color}30` }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: active.color }} />
                Live solutions
              </div>
            </div>

            {/* Cards grid */}
            <div
              key={animKey}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {active.useCases.map(({ title, visual }, i) => (
                <div
                  key={title}
                  className={`ind-card ind-grid-in ind-card-delay-${i}`}
                >
                  {/* Card title row */}
                  <div className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 shrink-0 rounded-full"
                      style={{ width: 4, minHeight: 18, alignSelf: "stretch", background: active.color, opacity: 0.75, borderRadius: 99 }}
                    />
                    <p className="text-[11px] sm:text-[13px] font-semibold leading-snug" style={{ color: "#0f172a" }}>
                      {title}
                    </p>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: "#f1f5f9" }} />

                  {/* Visual area */}
                  <div className="flex-1 flex items-center justify-center w-full">
                    <div className="w-full">
                      {visual}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
