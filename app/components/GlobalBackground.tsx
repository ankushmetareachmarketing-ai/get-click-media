/**
 * GlobalBackground
 * Drop this as the first child inside <body> in layout.tsx.
 * The dot-grid lives in globals.css on the body element itself.
 * This component renders the 6 floating blurred balls behind all content.
 */
export default function GlobalBackground() {
  return (
    <div className="bg-balls absolute z-50" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}
 