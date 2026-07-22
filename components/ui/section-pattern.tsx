const PATTERNS = {
  /** Warm off-white doodle pattern — for bg-white sections. */
  light: "/images/whatsapp/section-background/light-background.webp",
  /** Muted teal-gray doodle pattern — for bg-gray-50 sections. */
  teal: "/images/whatsapp/section-background/little-light-background.webp",
  /** Saturated WhatsApp-green doodle pattern — for dark navy (bg-[#0f172a]) sections. */
  green: "/images/whatsapp/section-background/green-dark.webp",
  /** Warm cream/gold doodle pattern — for blue-50/accent callout sections. */
  gold: "/images/whatsapp/section-background/litle-gold-background.webp",
} as const;

export type SectionPatternTone = keyof typeof PATTERNS;

/**
 * Full-bleed, low-opacity, single (non-repeating) doodle-pattern image used
 * AS a section's background — do not pair this with a Tailwind bg-color
 * class on the section. Give the section `relative overflow-hidden` and its
 * content wrapper `relative z-10` so the pattern sits behind everything.
 *
 * The "green" tone is always laid over its own dark navy base (baked in
 * here) since it's used on sections with white text — without a dark base,
 * a low-opacity image alone would read as near-white and make that text
 * unreadable.
 */
export function SectionPattern({
  tone,
  opacity = 0.12,
}: {
  tone: SectionPatternTone;
  opacity?: number;
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {tone === "green" && <div className="absolute inset-0 bg-[#0f172a]" />}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${PATTERNS[tone]})`, opacity }}
      />
    </div>
  );
}
