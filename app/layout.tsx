import type { Metadata } from "next";
import { Manrope, Syne, Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { cn } from "@/lib/utils";
import GlobalBackground from "./components/GlobalBackground";
import ServiceModal from "./components/ServiceModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FloatingActions from "./components/FloatingActions";
import StickyBookDemoCta from "./components/StickyBookDemoCta";
import FloatingContactIcons from "./components/FloatingContactIcons";
import SmoothScroll from "@/components/motion/SmoothScroll";
import RevealInit from "@/components/motion/RevealInit";
import ScrollProgressBar from "@/components/motion/ScrollProgressBar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

// Description/body copy (paragraphs)- distinct from the Syne display
// headings and the Manrope UI chrome, per the brand's typographic hierarchy.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Get Click Media | AI-Powered Business Communication Platform",
    template: "%s | Get Click Media",
  },
  description:
    "AI-Powered Customer Communication Platform for Modern Businesses. WhatsApp API, Bulk SMS, RCS, Voice & Email- trusted by 10,000+ Indian businesses.",
  metadataBase: new URL("https://getclickmedia.com"),
  openGraph: {
    siteName: "Get Click Media",
    type: "website",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Get Click Media",
  url: "https://getclickmedia.com",
  logo: "https://getclickmedia.com/images/gcm-logo.png",
  telephone: "+91-9667694088",
  email: "info@getclickmedia.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/getclickmedia",
    "https://twitter.com/getclickmedia",
    "https://www.instagram.com/getclickmedia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", manrope.variable, syne.variable, montserrat.variable)}
    >
      <body className=" relative font-[var(--font-manrope)]" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        {/* Full-page preloader- shown on the initial hard load only (persists
            hidden across client-side <Link> navigations since this layout
            doesn't remount). Hidden by the inline script below once the
            window has fully loaded, with a safety timeout in case "load"
            never fires. */}
        <div id="gcm-preloader" role="status" aria-label="Loading">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/loader.svg" alt="" width={96} height={96} />
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              var start = Date.now();
              var MIN_MS = 3000;
              function hide(){
                var el = document.getElementById('gcm-preloader');
                if (!el) return;
                var wait = Math.max(0, MIN_MS - (Date.now() - start));
                setTimeout(function(){
                  el.classList.add('gcm-preloader-hidden');
                  setTimeout(function(){ el.remove(); }, 450);
                }, wait);
              }
              if (document.readyState === 'complete') hide();
              else window.addEventListener('load', hide);
              setTimeout(hide, 6000);
            })();`,
          }}
        />

        {/* Fixed dot-grid + floating balls- sits behind everything */}
        <GlobalBackground />

        {/* Global animation system- Lenis smooth scroll synced to GSAP's
            ticker, the site-wide data-reveal scroll engine, and the top
            scroll-progress bar. All three are no-ops under
            prefers-reduced-motion. See lib/animation + components/motion. */}
        <SmoothScroll />
        <RevealInit />
        <ScrollProgressBar />

        <div className="layout-header"><Header /></div>
        {children}
        <Footer />
        <FloatingActions />
        <StickyBookDemoCta />
        <FloatingContactIcons />
        <ServiceModal />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "12px",
              background: "#0f172a",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              padding: "12px 16px",
            },
            success: { iconTheme: { primary: "#22c55e", secondary: "#fff" } },
            error: { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
          }}
        />
      </body>
    </html>
  );
}