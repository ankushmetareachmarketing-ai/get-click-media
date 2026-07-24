'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/lib/blogs'

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`rounded-[16px] border bg-(--surface-0) shadow-(--shadow-card) overflow-hidden transition-colors duration-200 ${
              isOpen ? 'border-primary/30' : 'border-(--border-subtle)'
            }`}
          >
            {/* Trigger */}
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full cursor-pointer flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left group"
            >
              <span className="text-[0.9375rem] font-bold text-(--ink-1) [font-family:var(--font-syne)] leading-snug group-hover:text-primary transition-colors">
                {item.question}
              </span>
              <span
                className={`flex-none w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'bg-primary text-white rotate-180'
                    : 'bg-(--surface-2) text-(--ink-4)'
                }`}
              >
                <ChevronDown size={15} />
              </span>
            </button>

            {/* Collapsible body- grid-rows trick for smooth height animation */}
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-(--ink-3) leading-relaxed border-t border-(--border-subtle) pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
