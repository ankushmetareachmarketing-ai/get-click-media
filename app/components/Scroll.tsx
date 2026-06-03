"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SectionHeading from "./SectionHeading";

export default function Scroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <SectionHeading
            eyebrow="Platform Overview"
            title="One dashboard to manage Every Conversation"
            highlight="Every Conversation"
            description="WhatsApp, RCS, SMS, Voice & Email — unified in a single intelligent platform built for modern businesses."
            align="center"
            size="lg"
          />
        }
      >
        <img
          src={`images/dashboard.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
