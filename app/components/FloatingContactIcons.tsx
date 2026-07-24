"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useNearFooter } from "@/hooks/use-near-footer";

const WHATSAPP_LINK = "https://wa.me/919667694088";
const CALL_LINK = "tel:+919667694088";

/**
 * Sitewide WhatsApp + Call quick-contact buttons, stacked vertically in the
 * bottom-left corner. Sits opposite the AI-tools dock and Book-a-Demo CTA
 * (both bottom-right), so the two never collide. Bottom offset is larger on
 * mobile to clear StickyBookDemoCta's full-width bottom bar, which only
 * renders below the lg breakpoint.
 */
const FloatingContactIcons: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const nearFooter = useNearFooter();

  if (!mounted) return null;

  return createPortal(
    <div
      className="gsap-fixed-ui fixed left-4 bottom-20 lg:bottom-6 z-40 flex flex-col gap-3 transition-opacity duration-300"
      style={{
        opacity: nearFooter ? 0 : 1,
        pointerEvents: nearFooter ? "none" : "auto",
      }}
    >
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <Image
          src="/images/whatsapp-icon.png"
          alt="Chat with us on WhatsApp"
          width={46}
          height={46}
          className="w-12 h-12 object-contain"
          unoptimized
        />
      </a>
      <a
        href={CALL_LINK}
        aria-label="Call us"
        className="flex items-center overflow-hidden justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <Image
          src="/images/calls-icon.png"
          alt="Call us"
          width={46}
          height={46}
          className="w-12 h-12 object-contain"
          unoptimized
        />
      </a>
    </div>,
    document.body
  );
};

export default FloatingContactIcons;
