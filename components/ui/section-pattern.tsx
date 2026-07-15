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
 * Full-bleed, low-opacity doodle-pattern texture dropped behind a section's
 * content. Tiled (not stretched) so the doodle icons stay a readable size
 * instead of one giant cropped blow-up of the source image. Give the section
 * `relative overflow-hidden` and its content wrapper `relative z-10` so the
 * pattern sits behind everything.
 */
export function SectionPattern({
  tone,
  opacity = 0.08,
  tileSize = 500,
}: {
  tone: SectionPatternTone;
  opacity?: number;
  tileSize?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${PATTERNS[tone]})`,
        backgroundRepeat: "repeat",
        backgroundSize: `${tileSize}px auto`,
        opacity,
      }}
    />
  );
}
