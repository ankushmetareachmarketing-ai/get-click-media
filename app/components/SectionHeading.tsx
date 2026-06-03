'use client'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * SectionHeading — globally reusable heading block
 * Colors pulled from CSS variables defined in globals.css
 *
 * Usage:
 *   <SectionHeading
 *     eyebrow="Our Services"
 *     title="Everything you need to reach your customers"
 *     highlight="reach your customers"
 *     description="Optional supporting text."
 *     align="left"
 *     size="md"
 *   />
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  size = 'md',
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align]

  const titleSize = {
    sm: 'text-xl sm:text-2xl sm:text-3xl',
    md: 'text-2xl sm:text-[28px] md:text-4xl',
    lg: 'text-3xl sm:text-4xl md:text-[52px]',
  }[size]

  const renderTitle = () => {
    if (!highlight) return title
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: 'var(--gradient-primary)' }}
        >
          {highlight}
        </span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={cn('flex flex-col gap-3', alignClass, className)}>

      {/* Eyebrow pill — uses --accent + --accent-foreground from globals */}
      {eyebrow && (
        <span
          className="self-start inline-flex items-center gap-2 rounded-full px-3.5 py-1
                     text-[11px] font-semibold tracking-[0.16em] uppercase"
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-foreground)',
            border: '1px solid #bae6fd',
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: 'var(--primary)' }}
          />
          {eyebrow}
        </span>
      )}

      {/* Title — Syne for strong brand personality, foreground from globals */}
      <h2
        className={cn(titleSize, 'font-bold leading-[1.15] tracking-[-0.02em]')}
        style={{
          color: 'var(--foreground)',
          fontFamily: "'Syne', sans-serif",
        }}
      >
        {renderTitle()}
      </h2>

      {/* Description — text-muted from globals */}
      {description && (
        <p
          className="mt-1 max-w-full sm:max-w-xl text-sm sm:text-[15px] leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          {description}
        </p>
      )}
    </div>
  )
}