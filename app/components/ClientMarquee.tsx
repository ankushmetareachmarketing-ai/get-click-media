"use client";

import React from "react";
import Image from "next/image";

const CLIENTS = [
  { src: "/images/our-clients/logo/gdgoenka.png",           name: "GD Goenka" },
  { src: "/images/our-clients/logo/bada-bussiness.png",     name: "Bada Business" },
  { src: "/images/our-clients/logo/nexuspay.png",           name: "NexusPay" },
  { src: "/images/our-clients/logo/salary-now.png",         name: "Salary Now" },
  { src: "/images/our-clients/logo/ibgnetwork.png",         name: "IBG Network" },
  { src: "/images/our-clients/logo/niramayahealthcare.png", name: "Niramaya Healthcare" },
  { src: "/images/our-clients/logo/smartrealty.png",        name: "Smart Realty" },
  { src: "/images/our-clients/logo/evanik.png",             name: "Evanik" },
  { src: "/images/our-clients/logo/radius.png",             name: "Radius" },
  { src: "/images/our-clients/logo/logiceducation.png",     name: "Logic Education" },
  { src: "/images/our-clients/logo/helipkg.png",            name: "HeliPkg" },
  { src: "/images/our-clients/logo/acerlabs.png",           name: "Acer Labs" },
  { src: "/images/our-clients/logo/visiontech.webp",        name: "VisionTech" },
  { src: "/images/our-clients/logo/teleopedialogo.png",     name: "Teleopedia" },
  { src: "/images/our-clients/logo/shiplinelogo.png",       name: "Shipline" },
  { src: "/images/our-clients/logo/max-labs.png",           name: "Max Labs" },
  { src: "/images/our-clients/logo/inihomes.png",           name: "Ini Homes" },
  { src: "/images/our-clients/logo/cashi.png",              name: "Cashi" },
  { src: "/images/our-clients/logo/prime-dental.png",       name: "Prime Dental" },
  { src: "/images/our-clients/logo/wwicslogo.png",          name: "WWICS" },
];

const doubled = [...CLIENTS, ...CLIENTS];

const ClientMarquee: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 overflow-hidden">
      {/* Keyframes injected inline- no Tailwind class dependency */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll-left 25s linear infinite;
        }
      `}</style>

      {/* Label */}
      <p className="text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-5 sm:mb-7">
        Trusted by 10,000+ businesses across India
      </p>

      {/* Outer wrapper: clips overflow + fades edges */}
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Scrolling track- doubled list for seamless loop */}
        <div className="marquee-track flex w-max">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="shrink-0 mx-3 flex items-center justify-center bg-white border border-gray-100 rounded-2xl shadow-sm"
              style={{ width: 136, height: 68, padding: "0 20px" }}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={96}
                height={40}
                className="w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                style={{ maxHeight: 36, maxWidth: 96 }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;
