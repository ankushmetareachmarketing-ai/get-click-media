import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GlobalBackground from "./components/GlobalBackground";
import ServiceModal from "./components/ServiceModal";
import Footer from "./components/Footer";

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
  title: "Get Click Media",
  description: "AI-Powered Customer Communication Platform for Modern Businesses",
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
      <body className="min-h-full flex flex-col font-[var(--font-manrope)]">
        {/* Fixed dot-grid + floating balls — sits behind everything */}
        <GlobalBackground />
        {children}
        <Footer />
        <ServiceModal />
      </body>
    </html>
  );
}