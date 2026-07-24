"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: ReactNode;
}

/**
 * A single-open accordion with a real height animation (motion/react animates
 * to `height: "auto"` correctly) instead of the native <details> snap-open-
 * that's the whole reason this is a Client Component rather than markup.
 */
export function AccordionList({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={cn(
              "rounded-2xl bg-gray-50 border border-gray-100 transition-shadow duration-300 overflow-hidden",
              isOpen && "shadow-md"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer select-none"
            >
              <span className="text-base font-semibold text-gray-900 leading-snug">{item.question}</span>
              <ChevronDown
                className={cn("w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300", isOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
