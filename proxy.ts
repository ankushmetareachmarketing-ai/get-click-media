import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  const { pathname } = request.nextUrl

  // -- API routes- never cache ----------------------------------------------
  if (pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store')
    return response
  }

  // -- HTML pages- always fetch fresh from server ---------------------------
  // Next.js ISR sets "Cache-Control: s-maxage=..., stale-while-revalidate=..."
  // on HTML pages, which browsers can cache for up to 1 year ("Expire: 1y" in
  // build output).  After a new deploy, CSS/JS filenames change (content-hashed)
  // but browsers serve stale HTML referencing the OLD hashes → Tailwind / JS
  // silently breaks.
  //
  // This proxy runs after ISR headers are set, so it reliably overrides them.
  // Static assets under /_next/static/ are excluded by the matcher below and
  // keep Next.js's default immutable caching unchanged.
  response.headers.set('Cache-Control', 'no-store')
  response.headers.set('Pragma', 'no-cache') // legacy proxy compatibility

  return response
}

export const config = {
  matcher: [
    /*
     * Match every path EXCEPT:
     *  - _next/static  (JS, CSS, fonts- content-hashed, immutably cached)
     *  - _next/image   (optimised images- managed by Next.js)
     *  - static files  (favicon, images, xml, txt …)
     */
    '/((?!_next/static|_next/image|.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|xml|txt|rss)).*)',
  ],
}
