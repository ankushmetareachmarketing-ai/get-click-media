import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

export default function MdxLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
  if (isInternal) {
    return (
      <Link href={href} {...(props as object)}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
