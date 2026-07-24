"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare, Radio, Hash, ShieldCheck, Mic2, Phone,
  Mail, Bot, Building2, GraduationCap, HeartPulse,
  ShoppingCart, Car, BookOpen, FileText, Code2,
  Layers, ArrowUpRight, MapPin, PhoneCall, MailOpen, Zap,
} from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Linkedin01Icon,
  NewTwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  Facebook01Icon,
} from "@hugeicons/core-free-icons";

// -- Social icons with brand colors -------------------------------------------

const SOCIALS = [
  {
    label: "LinkedIn",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.15)",
    hoverBg: "#0A66C2",
    icon: Linkedin01Icon,
  },
  {
    label: "Twitter / X",
    color: "#e2e8f0",
    bg: "rgba(255,255,255,0.08)",
    hoverBg: "#1a1a2e",
    icon: NewTwitterIcon,
  },
  {
    label: "YouTube",
    color: "#FF0000",
    bg: "rgba(255,0,0,0.12)",
    hoverBg: "#FF0000",
    icon: YoutubeIcon,
  },
  {
    label: "Instagram",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.12)",
    hoverBg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    color: "#1877F2",
    bg: "rgba(24,119,242,0.12)",
    hoverBg: "#1877F2",
    icon: Facebook01Icon,
  },
];

// -- Navigation data -----------------------------------------------------------

const PLATFORM = [
  { label: "WhatsApp Business API",    icon: MessageSquare, href: "#" },
  { label: "RCS Business Messaging",   icon: Radio,         href: "#" },
  { label: "Bulk SMS",                 icon: Hash,          href: "/bulk-sms-service-provider-india" },
  { label: "OTP SMS Service",           icon: ShieldCheck,   href: "/otp-sms-service-provider" },
  { label: "Transactional SMS",         icon: Zap,           href: "/transactional-sms-service" },
  { label: "Voice & IVR",              icon: Mic2,          href: "#" },
  { label: "Toll Free Numbers",        icon: Phone,         href: "#" },
  { label: "Email Marketing",          icon: Mail,          href: "#" },
  { label: "AI Chatbots",              icon: Bot,           href: "#" },
];

const SOLUTIONS = [
  { label: "Real Estate",  icon: Building2 },
  { label: "Education",    icon: GraduationCap },
  { label: "Healthcare",   icon: HeartPulse },
  { label: "E-commerce",   icon: ShoppingCart },
  { label: "Finance",      icon: ShieldCheck },
  { label: "Automobile",   icon: Car },
];

const RESOURCES = [
  { label: "Blog & Insights",            icon: BookOpen,      href: "/blog" },
  { label: "Case Studies",               icon: FileText,      href: "#" },
  { label: "API Documentation",          icon: Code2,         href: "#" },
  { label: "WhatsApp API Pricing India", icon: MessageSquare, href: "#" },
  { label: "RCS Messaging Guide",        icon: Radio,         href: "#" },
  { label: "DLT Registration Guide",     icon: Layers,        href: "#" },
  { label: "OTP SMS Security Guide",      icon: ShieldCheck,   href: "/blog/otp-sms-security-guide" },
];

const COMPANY = [
  "About Us", "Careers", "Newsroom",
  "Partner Program", "Pricing", "Contact Sales",
];

const METRICS = [
  { value: "99.9%",  label: "Platform Uptime",     color: "#38bdf8" },
  { value: "2B+",    label: "Messages Delivered",   color: "#818cf8" },
  { value: "10,000+", label: "Businesses Served",    color: "#34d399" },
  { value: "150+",   label: "Integrations",         color: "#fb923c" },
];

// -- Footer --------------------------------------------------------------------

export default function Footer() {
  return (
    <footer id="site-footer" style={{
      background: "linear-gradient(180deg, #0f172a 0%, #0a0f1e 100%)",
      color: "#e2e8f0",
      fontFamily: "inherit",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Subtle background glow */}
      <div style={{
        position: "absolute", top: 0, left: "20%",
        width: 600, height: 300,
        background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>

      {/* -- Stats strip ---------------------------------------------------- */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
        <div
          className="ft-stats"
          data-reveal="fade-up"
          data-reveal-stagger="0.08"
          style={{
            maxWidth: 1280, margin: "0 auto", padding: "32px 40px",
            display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {METRICS.map(({ value, label, color }, i) => (
            <div key={label} style={{
              textAlign: "center",
              padding: "8px 16px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}>
              <p style={{
                margin: 0, fontSize: 28, fontWeight: 800, lineHeight: 1,
                color,
                textShadow: `0 0 20px ${color}55`,
              }}>
                {value}
              </p>
              <p style={{ margin: "6px 0 0", fontSize: 12, color: "#ffffff", fontWeight: 600, letterSpacing: "0.03em" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* -- Main body ------------------------------------------------------- */}
      <div className="ft-main" style={{
        maxWidth: 1280, margin: "0 auto", padding: "52px 40px 40px",
        display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, position: "relative",
      }}>

        {/* -- Brand column -- */}
        <div data-reveal="fade-up" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <Link href="/" style={{ display: "inline-flex" }}>
            <Image
              src="/images/gcm-logo.png"
              alt="Get Click Media"
              width={130} height={36}
            />
          </Link>

          <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "#ffffff", margin: 0, maxWidth: 230 }}>
            AI-Powered Customer Communication Platform for Modern Businesses- trusted by 10,000+ companies across India.
          </p>

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {[
              { Icon: PhoneCall, text: "+91 9667694088",         href: "tel:+919667694088" },
              { Icon: MailOpen,  text: "hello@getclickmedia.com", href: "mailto:hello@getclickmedia.com" },
              { Icon: MapPin,    text: "Mumbai, India",           href: "#" },
            ].map(({ Icon, text, href }) => (
              <a key={text} href={href} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(37,99,235,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={14} color="#93c5fd" />
                </span>
                <span style={{ fontSize: 13, color: "#ffffff", fontWeight: 500 }}>{text}</span>
              </a>
            ))}
          </div>

          {/* Social icons with brand colors */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {SOCIALS.map(({ label, color, bg, hoverBg, icon }) => (
              <SocialBtn key={label} label={label} color={color} bg={bg} hoverBg={hoverBg}>
                <HugeiconsIcon icon={icon} size={15} strokeWidth={1.8} />
              </SocialBtn>
            ))}
          </div>
        </div>

        {/* -- Nav columns -- */}
        <div
          className="ft-nav"
          data-reveal="fade-up"
          data-reveal-stagger="0.06"
          style={{
            display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28,
          }}
        >
          <NavCol title="Platform">
            {PLATFORM.map(({ label, icon: Icon, href }) => (
              <NavLink key={label} href={href} icon={<Icon size={13} />}>{label}</NavLink>
            ))}
          </NavCol>

          <NavCol title="Solutions">
            {SOLUTIONS.map(({ label, icon: Icon }) => (
              <NavLink key={label} icon={<Icon size={13} />}>{label}</NavLink>
            ))}
          </NavCol>

          <NavCol title="Resources">
            {RESOURCES.map(({ label, icon: Icon, href }) => (
              <NavLink key={label} href={href} icon={<Icon size={13} />}>{label}</NavLink>
            ))}
          </NavCol>

          <NavCol title="Company">
            {COMPANY.map(l => <NavLink key={l}>{l}</NavLink>)}

            {/* CTA mini-card */}
            <div style={{
              marginTop: 14,
              padding: "14px",
              borderRadius: 12,
              background: "linear-gradient(135deg,rgba(30,58,138,0.45),rgba(37,99,235,0.25))",
              border: "1px solid rgba(99,132,255,0.2)",
              backdropFilter: "blur(8px)",
            }}>
              <p style={{ margin: "0 0 3px", fontSize: 12, fontWeight: 700, color: "#e2e8f0" }}>
                Ready to get started?
              </p>
              <p style={{ margin: "0 0 11px", fontSize: 11, color: "#7dd3fc" }}>
                Free trial · No credit card needed
              </p>
              <CtaLink href="#">Start Free Trial <ArrowUpRight size={10} /></CtaLink>
            </div>
          </NavCol>
        </div>
      </div>

      {/* -- Bottom bar ---------------------------------------------------- */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          padding: "16px 40px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 10,
        }}>
          <p style={{ margin: 0, fontSize: 12, fontWeight: 500, color: "#ffffff" }}>
            © {new Date().getFullYear()} Get Click Media Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy",   href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Cookie Policy",    href: "/cookie-policy" },
              { label: "Refund Policy",    href: "/refund-policy" },
              { label: "GDPR",             href: "/gdpr" },
            ].map(({ label, href }) => (
              <BottomLink key={label} href={href}>{label}</BottomLink>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .ft-main  { grid-template-columns: 1fr !important; }
          .ft-nav   { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .ft-stats { grid-template-columns: repeat(2,1fr) !important; }
          .ft-nav   { grid-template-columns: 1fr 1fr !important; }
          .ft-main  { padding: 36px 20px 28px !important; }
        }
      `}</style>
    </footer>
  );
}

// -- Sub-components ------------------------------------------------------------

function SocialBtn({
  label, color, bg, hoverBg, children,
}: {
  label: string; color: string; bg: string; hoverBg: string; children: React.ReactNode;
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href="#"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36, height: 36,
        borderRadius: 10,
        border: hovered
          ? `1px solid ${color}60`
          : "1px solid rgba(255,255,255,0.08)",
        background: hovered ? hoverBg : bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? "#fff" : color,
        transition: "all 0.2s ease",
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      {children}
    </a>
  );
}

function NavCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{
        margin: "0 0 14px",
        fontSize: 11,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "#ffffff",
      }}>
        {title}
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </div>
  );
}

function NavLink({ icon, href = "#", children }: { icon?: React.ReactNode; href?: string; children: React.ReactNode }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        fontWeight: 500,
        color: "#ffffff",
        textDecoration: "none",
        padding: "5px 0",
        opacity: hovered ? 0.55 : 1,
        transition: "opacity 0.15s ease",
      }}
    >
      {icon && (
        <span style={{ color: "#ffffff", flexShrink: 0, display: "flex", alignItems: "center" }}>
          {icon}
        </span>
      )}
      {children}
    </a>
  );
}

function CtaLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        fontSize: 11, fontWeight: 700, color: "#fff",
        background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
        padding: "6px 14px",
        borderRadius: 99,
        textDecoration: "none",
        transition: "opacity 0.2s",
        opacity: hovered ? 0.75 : 1,
        boxShadow: "0 4px 12px rgba(37,99,235,0.35)",
      }}
    >
      {children}
    </a>
  );
}

function BottomLink({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 12,
        fontWeight: 500,
        color: "#ffffff",
        textDecoration: "none",
        transition: "opacity 0.15s",
        opacity: hovered ? 0.5 : 1,
      }}
    >
      {children}
    </a>
  );
}
