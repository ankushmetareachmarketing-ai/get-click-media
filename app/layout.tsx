import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GlobalBackground from "./components/GlobalBackground";
import ServiceModal from "./components/ServiceModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FloatingActions from "./components/FloatingActions";

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

export const metadata: Metadata = {
  title: {
    default: "Get Click Media | AI-Powered Business Communication Platform",
    template: "%s | Get Click Media",
  },
  description:
    "AI-Powered Customer Communication Platform for Modern Businesses. WhatsApp API, Bulk SMS, RCS, Voice & Email — trusted by 10,000+ Indian businesses.",
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
  email: "hello@getclickmedia.com",
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
      className={cn("h-full antialiased", manrope.variable, syne.variable)}
    >
      <body className=" relative font-[var(--font-manrope)]" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Fixed dot-grid + floating balls — sits behind everything */}
        <GlobalBackground />
        <div className="layout-header"><Header /></div>
        {children}
        <Footer />
        <FloatingActions />
        <ServiceModal />
      </body>
    </html>
  );
}