"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useModalStore } from "@/store/useModalStore";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Cancel01Icon,
  Menu01Icon,
  Call02Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// --- Menu content icons --------------------------------------------------------
// Every nav/mega-menu content icon is one of our own image assets in
// /public/images/header-icon- no icon library glyphs in the header content
// itself (functional chrome- hamburger, close, chevrons, the Talk Now phone
// glyph- has no matching asset in that folder, so those stay as hugeicons).
function MenuIcon({ src, size = 20 }: { src: string; size?: number }) {
  return (
    <Image
      src={`/images/header-icon/${src}`}
      alt=""
      width={size}
      height={size}
      className="shrink-0"
      unoptimized
    />
  );
}

// --- Types -------------------------------------------------------------------

interface MegaMenuItem {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  href: string;
  color?: string;
  bgColor?: string;
}

interface MegaMenuSection {
  sectionTitle?: string;
  /** "cards" = icon + title + description (for primary products). "links" = compact
   *  two-column text list, no icon/description (for long lists like industries/cities). */
  layout?: "cards" | "links";
  items: MegaMenuItem[];
}

interface NavItem {
  label: string;
  href?: string;
  sidebarIcon?: React.ReactNode;
  sidebarColor?: string;
  sidebarBgColor?: string;
  sections?: MegaMenuSection[];
}

// --- Menu Data ----------------------------------------------------------------

const navItems: NavItem[] = [
  {
    label: "WhatsApp",
    sidebarIcon: <MenuIcon src="whatsapp.svg" size={20} />,
    sidebarColor: "#22c55e",
    sidebarBgColor: "#ecfdf5",
    sections: [
      {
        sectionTitle: "Platform",
        layout: "cards",
        items: [
          { icon: <MenuIcon src="whatsapp.svg" />, title: "WhatsApp Business API", description: "Official Meta BSP integration for India", href: "/whatsapp-business-api", color: "#22c55e", bgColor: "#ecfdf5" },
          { icon: <MenuIcon src="building-3.svg" />, title: "Provider in India", description: "Official Meta Business Solution Provider", href: "/whatsapp-business-api-provider-india", color: "#3b82f6", bgColor: "#eff6ff" },
          { icon: <MenuIcon src="voice-square.svg" />, title: "WhatsApp Broadcast", description: "Send high-impact bulk campaigns", href: "/whatsapp-broadcast", color: "#ef4444", bgColor: "#fef2f2" },
          { icon: <MenuIcon src="message-AI.svg" />, title: "WhatsApp Chatbot", description: "Automate conversations with AI bots", href: "/whatsapp-chatbot", color: "#8b5cf6", bgColor: "#f5f3ff" },
          { icon: <MenuIcon src="message-question.svg" />, title: "Click-to-Chat", description: "Start chats instantly from any channel", href: "/whatsapp-click-to-chat", color: "#f59e0b", bgColor: "#fffbeb" },
          { icon: <MenuIcon src="status-up.svg" />, title: "Marketing Services", description: "Campaigns, support, and growth", href: "/whatsapp-marketing-services", color: "#06b6d4", bgColor: "#ecfeff" },
        ],
      },
      {
        sectionTitle: "By Industry",
        layout: "links",
        items: [
          { icon: <MenuIcon src="building-3.svg" size={16} />, title: "Real Estate", href: "/whatsapp-api-real-estate" },
          { icon: <MenuIcon src="heart-add.svg" size={16} />, title: "Healthcare", href: "/whatsapp-api-healthcare" },
          { icon: <MenuIcon src="edtech.svg" size={16} />, title: "Education", href: "/whatsapp-api-education" },
          { icon: <MenuIcon src="usd-coin-(usdc).svg" size={16} />, title: "Banking", href: "/whatsapp-api-banking" },
          { icon: <MenuIcon src="shopping-cart.svg" size={16} />, title: "E-commerce", href: "/whatsapp-api-ecommerce" },
          { icon: <MenuIcon src="security-safe.svg" size={16} />, title: "Insurance", href: "/whatsapp-api-insurance" },
          { icon: <MenuIcon src="bag-2.svg" size={16} />, title: "Retail", href: "/whatsapp-api-retail" },
          { icon: <MenuIcon src="scan-barcode.svg" size={16} />, title: "Logistics", href: "/whatsapp-api-logistics" },
          { icon: <MenuIcon src="airplane-square.svg" size={16} />, title: "Travel", href: "/whatsapp-api-travel" },
          { icon: <MenuIcon src="calculator.svg" size={16} />, title: "Automobile", href: "/whatsapp-api-automobile" },
        ],
      },
      {
        sectionTitle: "By City",
        layout: "links",
        items: [
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Delhi", href: "/whatsapp-api-delhi" },
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Noida", href: "/whatsapp-api-noida" },
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Gurgaon", href: "/whatsapp-api-gurgaon" },
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Mumbai", href: "/whatsapp-api-mumbai" },
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Bangalore", href: "/whatsapp-api-bangalore" },
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Hyderabad", href: "/whatsapp-api-hyderabad" },
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Pune", href: "/whatsapp-api-pune" },
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Chennai", href: "/whatsapp-api-chennai" },
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Jaipur", href: "/whatsapp-api-jaipur" },
          { icon: <MenuIcon src="flag.svg" size={16} />, title: "Ahmedabad", href: "/whatsapp-api-ahmedabad" },
        ],
      },
    ],
  },
  {
    label: "RCS",
    sidebarIcon: <MenuIcon src="messages.svg" size={20} />,
    sidebarColor: "#0ea5e9",
    sidebarBgColor: "#ecfeff",
    sections: [
      {
        sectionTitle: "RCS Messaging",
        layout: "cards",
        items: [
          { icon: <MenuIcon src="messages.svg" />, title: "RCS Messaging", description: "Rich conversational messaging for brands", href: "/rcs-messaging", color: "#22c55e", bgColor: "#ecfdf5" },
          { icon: <MenuIcon src="usd-coin-(usdc).svg" />, title: "RCS for Banking", description: "Conversational RCS experiences for finance", href: "/rcs-for-banking", color: "#3b82f6", bgColor: "#eff6ff" },
          { icon: <MenuIcon src="shopping-cart.svg" />, title: "RCS for E-commerce", description: "RCS commerce messaging that converts", href: "/rcs-for-ecommerce", color: "#f97316", bgColor: "#fff7ed" },
          { icon: <MenuIcon src="edtech.svg" />, title: "RCS for Education", description: "Student engagement through RCS", href: "/rcs-for-education", color: "#8b5cf6", bgColor: "#f5f3ff" },
          { icon: <MenuIcon src="building-3.svg" />, title: "RCS for Real Estate", description: "Alerts and lead nurturing for property", href: "/rcs-for-real-estate", color: "#14b8a6", bgColor: "#f0fdfa" },
          { icon: <MenuIcon src="flag.svg" />, title: "RCS Delhi & Noida", description: "Local RCS services for Delhi-NCR", href: "/rcs-messaging-delhi-noida", color: "#f59e0b", bgColor: "#fffbeb" },
        ],
      },
      {
        sectionTitle: "Resources",
        layout: "links",
        items: [
          { title: "RCS Service Provider India", href: "/rcs-service-provider-india" },
          { title: "RCS Pricing India", href: "/rcs-pricing-india" },
          { title: "RCS API", href: "/rcs-api" },
          { title: "Google RCS Business Messaging", href: "/google-rcs-business-messaging" },
        ],
      },
      {
        sectionTitle: "Platform",
        layout: "links",
        items: [
          { title: "Business Messaging Platform", href: "/business-messaging-platform" },
          { title: "Enterprise Messaging Platform", href: "/enterprise-messaging-platform" },
          { title: "Customer Engagement Platform", href: "/customer-engagement-platform" },
          { title: "Conversational Messaging Platform", href: "/conversational-messaging-platform" },
        ],
      },
    ],
  },
  {
    label: "Bulk SMS",
    sidebarIcon: <MenuIcon src="sms.svg" size={20} />,
    sidebarColor: "#3b82f6",
    sidebarBgColor: "#eff6ff",
    sections: [
      {
        sectionTitle: "Core Services",
        layout: "cards",
        items: [
          { icon: <MenuIcon src="sms.svg" />, title: "Bulk SMS Provider India", description: "High-volume SMS campaigns across India", href: "/bulk-sms-service-provider-india", color: "#3b82f6", bgColor: "#eff6ff" },
          { icon: <MenuIcon src="security-safe.svg" />, title: "OTP SMS", description: "Fast OTP delivery for secure authentication", href: "/otp-sms-service-provider", color: "#10b981", bgColor: "#ecfdf5" },
          { icon: <MenuIcon src="document-text.svg" />, title: "Transactional SMS", description: "Reliable delivery for alerts and updates", href: "/transactional-sms-service", color: "#f59e0b", bgColor: "#fffbeb" },
        ],
      },
      {
        sectionTitle: "By Industry",
        layout: "links",
        items: [
          { icon: <MenuIcon src="building-3.svg" size={16} />, title: "Real Estate", href: "/bulk-sms-for-real-estate" },
          { icon: <MenuIcon src="book-2.svg" size={16} />, title: "Schools", href: "/bulk-sms-for-schools" },
          { icon: <MenuIcon src="heart-add.svg" size={16} />, title: "Hospitals", href: "/bulk-sms-for-hospitals" },
          { icon: <MenuIcon src="usd-coin-(usdc).svg" size={16} />, title: "Banking", href: "/bulk-sms-for-banking" },
          { icon: <MenuIcon src="shopping-cart.svg" size={16} />, title: "Ecommerce", href: "/bulk-sms-for-ecommerce" },
          { icon: <MenuIcon src="airplane-square.svg" size={16} />, title: "Travel Agencies", href: "/bulk-sms-for-travel-industry" },
        ],
      },
      {
        sectionTitle: "Pricing",
        layout: "links",
        items: [
          { title: "Bulk SMS Pricing India", href: "/bulk-sms-pricing-india" },
          { title: "OTP SMS Pricing", href: "/otp-sms-pricing" },
          { title: "Transactional SMS Pricing", href: "/transactional-sms-pricing" },
        ],
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

// --- Mega menu content (renders inside shadcn's NavigationMenuContent) --------

// Columns stretch evenly to fill the full-width viewport (the viewport now
// spans the whole navbar, not just the trigger's own width) instead of
// shrinking to a fixed track- a bigger, airier panel edge-to-edge.
const COLUMN_WIDTH = "minmax(240px,1fr)";

const MegaMenuContent: React.FC<{ sections: MegaMenuSection[] }> = ({ sections }) => {
  return (
    <div
      className="grid w-full gap-10 p-8"
      style={{ gridTemplateColumns: sections.map(() => COLUMN_WIDTH).join(" ") }}
    >
      {sections.map((section, si) => (
        <div key={si} className={cn(si > 0 && "border-l border-border pl-8")}>
          {section.sectionTitle && (
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground px-3 pb-3">
              {section.sectionTitle}
            </p>
          )}

          {section.layout === "links" ? (
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {section.items.map((item, ii) => (
                <NavigationMenuLink key={ii} asChild>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {item.icon && <span className="shrink-0 opacity-70">{item.icon}</span>}
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {section.items.map((item, ii) => (
                <NavigationMenuLink key={ii} asChild>
                  <Link
                    href={item.href}
                    className="flex items-start gap-3.5 px-3 py-3 rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: item.bgColor }}
                    >
                      {item.icon}
                    </span>

                    <div className="min-w-0 pt-1">
                      <p className="text-[15px] font-semibold leading-tight">{item.title}</p>
                      {item.description && (
                        <p className="text-[13px] text-muted-foreground leading-snug mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// --- Main Header --------------------------------------------------------------

const Header: React.FC = () => {
  const { openModal } = useModalStore();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <>
      <header className="fixed w-full top-2 z-[9999]" style={{ zIndex: 9999 }}>
        <div className="bg-white shadow-sm py-1 sm:py-2 rounded-full w-[95%] sm:w-[80%] mx-auto mt-3 relative">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center h-12 sm:h-16 gap-4 sm:gap-8 relative">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
              <Image
                src="/images/gcm-logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-auto h-7 sm:h-10"
              />
            </Link>

            {/* Desktop nav- fully driven by shadcn's NavigationMenu primitives.
                viewport={true} makes the component render its own internal
                viewport automatically- do NOT add a second one manually,
                that causes duplicated/overlapping panels. */}
            <NavigationMenu
              viewport={true}
              className={cn(
                "hidden lg:flex relative max-w-none flex-1 items-center justify-start",
                // style the auto-injected viewport (the floating panel) directly
                "[&_[data-slot=navigation-menu-viewport]]:!bg-white",
                "[&_[data-slot=navigation-menu-viewport]]:!rounded-2xl",
                "[&_[data-slot=navigation-menu-viewport]]:!border",
                "[&_[data-slot=navigation-menu-viewport]]:!border-gray-100",
                "[&_[data-slot=navigation-menu-viewport]]:!shadow-xl",
                "[&_[data-slot=navigation-menu-viewport]]:!mt-2"
              )}
            >
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.sections ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "px-3 py-2 rounded-lg text-sm font-medium bg-transparent cursor-pointer",
                            "text-gray-700 hover:text-[color:var(--primary)] hover:bg-gray-50",
                            "data-[state=open]:text-[color:var(--primary)] data-[state=open]:bg-blue-50"
                          )}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <MegaMenuContent sections={item.sections} />
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href ?? "#"}
                          className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[color:var(--primary)] hover:bg-gray-50 cursor-pointer"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">

              <button
                onClick={openModal}
                className="w-40 cursor-pointer py-2.5 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-[15px] font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Request a demo
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[color:var(--primary)] shadow-sm shrink-0">
                  <HugeiconsIcon icon={ChevronRightIcon} size={13} />
                </div>
              </button>
              <Link
                href="tel:+919667694088"
                className="w-40 cursor-pointer py-2.5 rounded-full bg-black text-white text-[15px] font-bold shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <HugeiconsIcon icon={Call02Icon} size={17} strokeWidth={2} />
                Talk Now
              </Link>
            </div>

            <button
              className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HugeiconsIcon icon={Cancel01Icon} size={22} /> : <HugeiconsIcon icon={Menu01Icon} size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Blurry overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ zIndex: 9998 }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Left sidebar drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-72 flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ zIndex: 9999, background: "#fff", boxShadow: "4px 0 32px rgba(0,0,0,0.13)" }}
      >
        <div
          className="px-4 pt-5 pb-4 flex items-center justify-between shrink-0"
          style={{ background: "linear-gradient(135deg,#6366f1 0%,#8b5cf6 60%,#a78bfa 100%)" }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
              <HugeiconsIcon icon={SparklesIcon} size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Get Click Media</p>
              <p className="text-white/70 text-[10px]">AI Communication Platform</p>
            </div>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
            onClick={() => setMobileOpen(false)}
          >
            <HugeiconsIcon icon={Cancel01Icon} size={16} className="text-white" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2.5 flex flex-col gap-0.5">
          {navItems.map((item) => {
            if (!item.sections) {
              return (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-orange-50 text-orange-500">
                    <MenuIcon src="book-2.svg" size={18} />
                  </span>
                  <span className="flex-1 text-left text-sm font-semibold text-gray-800">{item.label}</span>
                </Link>
              );
            }

            const isExpanded = mobileExpanded === item.label;
            return (
              <div key={item.label}>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-200 cursor-pointer ${isExpanded ? "bg-gray-50" : "hover:bg-gray-50"}`}
                  onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                >
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                    style={{ background: item.sidebarBgColor, color: item.sidebarColor }}
                  >
                    {item.sidebarIcon}
                  </span>

                  <span className="flex-1 text-left">
                    <span className="block text-sm font-semibold text-gray-800">{item.label}</span>
                  </span>

                  <HugeiconsIcon
                    icon={ChevronDownIcon}
                    size={14}
                    strokeWidth={isExpanded ? 2.5 : 2}
                    style={{
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      color: isExpanded ? item.sidebarColor : "#94a3b8",
                      transition: "transform 0.2s, color 0.2s",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isExpanded && (
                  <div className="mx-2 mb-1 mt-0.5 rounded-2xl overflow-hidden border border-gray-100">
                    {item.sections.map((section, si) => (
                      <div key={si}>
                        {section.sectionTitle && (
                          <p className="px-3 pt-2.5 pb-1 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                            {section.sectionTitle}
                          </p>
                        )}
                        {section.layout === "links" ? (
                          <div className="grid grid-cols-2 gap-x-1 px-1.5 pb-1">
                            {section.items.map((subItem, ii) => (
                              <Link
                                key={ii}
                                href={subItem.href}
                                className="px-2.5 py-1.5 rounded-lg text-xs text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors truncate"
                                onClick={() => setMobileOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        ) : (
                          section.items.map((subItem, ii) => (
                            <Link
                              key={ii}
                              href={subItem.href}
                              className="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 transition-colors group cursor-pointer"
                              onClick={() => setMobileOpen(false)}
                            >
                              <span
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                style={{ background: subItem.bgColor, color: subItem.color }}
                              >
                                {subItem.icon}
                              </span>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 leading-tight">{subItem.title}</p>
                                {subItem.description && (
                                  <p className="text-[10px] text-gray-400 leading-snug truncate">{subItem.description}</p>
                                )}
                              </div>
                            </Link>
                          ))
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-3 shrink-0 border-t border-gray-100 space-y-2">
          <a
            href="tel:+919667694088"
            className="w-full px-4 py-3 rounded-2xl text-white text-sm font-bold bg-black shadow-md flex items-center justify-center gap-2 transition-all hover:opacity-90 cursor-pointer"
          >
            <HugeiconsIcon icon={Call02Icon} size={15} />
            Talk Now
          </a>
          <button
            onClick={() => { openModal(); setMobileOpen(false); }}
            className="w-full px-4 py-3 rounded-2xl text-white text-sm font-bold shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
            style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
          >
            <HugeiconsIcon icon={SparklesIcon} size={14} />
            Request a demo
          </button>
          <p className="text-center text-[10px] text-gray-400">Trusted by 10,000+ businesses</p>
        </div>
      </div>
    </>
  );
};

export default Header;
