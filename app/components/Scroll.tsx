"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SectionHeading from "./SectionHeading";

export default function Scroll() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-4">
          <SectionHeading
            eyebrow="Platform Overview"
            title="One dashboard to manage Every Conversation"
            highlight="Every Conversation"
            description="WhatsApp, RCS, SMS, Voice & Email- unified in a single intelligent platform built for modern businesses."
            align="left"
          />
        </div>
      </div>
      <div className="overflow-hidden">
        <ContainerScroll>
          <img
            src={`images/dashboard.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-top-left"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
