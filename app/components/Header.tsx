"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useModalStore } from "@/store/useModalStore";
import {
  ChevronDown,
  ChevronRight,
  MessageSquare,
  Megaphone,
  Bot,
  Zap,
  Globe,
  Users,
  BookOpen,
  Building2,
  Phone,
  Mail,
  Star,
  BarChart2,
  ShoppingCart,
  HeartHandshake,
  Layers,
  Sparkles,
  Video,
  FileText,
  Briefcase,
  Award,
  X,
  Menu,
  ShieldCheck,
  Home,
  MapPin,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// --- Types -------------------------------------------------------------------

interface MegaMenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  color?: string;
  bgColor?: string;
}

interface MegaMenuSection {
  sectionTitle?: string;
  items: MegaMenuItem[];
}

interface NavItem {
  label: string;
  hasMenu: boolean;
  sidebarIcon?: React.ReactNode;
  sidebarColor?: string;
  sidebarBgColor?: string;
  menu?: {
    sections: MegaMenuSection[];
    featuredCard?: {
      title: string;
      description: string;
      cta: string;
      videoLabel: string;
    };
  };
}

// --- Menu Data ----------------------------------------------------------------

const navItems: NavItem[] = [
  {
    label: "Platform",
    hasMenu: true,
    sidebarIcon: <Layers size={18} />,
    sidebarColor: "#6366f1",
    sidebarBgColor: "#eef2ff",
    menu: {
      featuredCard: {
        title: "Conversation Cloud",
        description: "AI-powered platform for seamless, omnichannel customer engagement and automation",
        cta: "Learn more",
        videoLabel: "What is Conversation Cloud?",
      },
      sections: [
        {
          sectionTitle: "Products",
          items: [
            { icon: <MessageSquare size={20} />, title: "Communicate", description: "Smart CPaaS platform for seamless, multi-channel messaging", href: "/whatsapp-business-api", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <Megaphone size={20} />, title: "Advertise", description: "Drive engagement with targeted, personalized ads on WhatsApp", href: "/whatsapp-marketing-services", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Bot size={20} />, title: "Commerce", description: "Enable end-to-end commerce experiences within messaging channels", href: "/whatsapp-click-to-chat", color: "#10b981", bgColor: "#ecfdf5" },
          ],
        },
        {
          sectionTitle: "Channels",
          items: [
            { icon: <Globe size={20} />, title: "WhatsApp Business API", description: "Reach 2B+ users on the world's largest platform", href: "/whatsapp-business-api", color: "#22c55e", bgColor: "#f0fdf4" },
            { icon: <Video size={20} />, title: "WhatsApp Broadcast", description: "Send high-impact WhatsApp campaigns", href: "/whatsapp-broadcast", color: "#ef4444", bgColor: "#fef2f2" },
            { icon: <Bot size={20} />, title: "WhatsApp Chatbot", description: "Automate conversations with intelligent bots", href: "/whatsapp-chatbot", color: "#10b981", bgColor: "#ecfdf5" },
            { icon: <Zap size={20} />, title: "WhatsApp Click-to-Chat", description: "Start chats instantly from any channel", href: "/whatsapp-click-to-chat", color: "#f59e0b", bgColor: "#fffbeb" },
            { icon: <Sparkles size={20} />, title: "WhatsApp Marketing Services", description: "Grow engagement with campaigns and support", href: "/whatsapp-marketing-services", color: "#06b6d4", bgColor: "#ecfeff" },
          ],
        },
        {
          sectionTitle: "SMS & Messaging",
          items: [
            { icon: <Mail size={20} />, title: "Bulk SMS", description: "Pan-India bulk messaging at scale", href: "/bulk-sms-service-provider-india", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <ShieldCheck size={20} />, title: "OTP SMS", description: "Sub-second OTP delivery, DND-exempt", href: "/otp-sms-service-provider", color: "#10b981", bgColor: "#ecfdf5" },
            { icon: <Zap size={20} />, title: "Transactional SMS", description: "Critical alerts and service messages", href: "/transactional-sms-service", color: "#f59e0b", bgColor: "#fffbeb" },
            { icon: <Globe size={20} />, title: "Web & App Chat", description: "Embed live chat on any digital surface", href: "/whatsapp-chatbot", color: "#8b5cf6", bgColor: "#f5f3ff" },
          ],
        },
      ],
    },
  },
  {
    label: "WhatsApp",
    hasMenu: true,
    sidebarIcon: <MessageSquare size={18} />,
    sidebarColor: "#22c55e",
    sidebarBgColor: "#ecfdf5",
    menu: {
      sections: [
        {
          sectionTitle: "WhatsApp Pages",
          items: [
            { icon: <Globe size={20} />, title: "WhatsApp Business API", description: "Official WhatsApp Business API integration", href: "/whatsapp-business-api", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <Globe size={20} />, title: "WhatsApp Business API Provider India", description: "India-focused WhatsApp API provider services", href: "/whatsapp-business-api-provider-india", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Video size={20} />, title: "WhatsApp Broadcast", description: "Send bulk WhatsApp campaigns and updates.", href: "/whatsapp-broadcast", color: "#ef4444", bgColor: "#fef2f2" },
            { icon: <Bot size={20} />, title: "WhatsApp Chatbot", description: "Automate conversations with intelligent chatbots.", href: "/whatsapp-chatbot", color: "#10b981", bgColor: "#ecfdf5" },
            { icon: <Zap size={20} />, title: "WhatsApp Click-to-Chat", description: "One-click chat entry from any channel.", href: "/whatsapp-click-to-chat", color: "#f59e0b", bgColor: "#fffbeb" },
            { icon: <Sparkles size={20} />, title: "WhatsApp Marketing Services", description: "Grow engagement with campaigns and support.", href: "/whatsapp-marketing-services", color: "#06b6d4", bgColor: "#ecfeff" },
            { icon: <Building2 size={20} />, title: "WhatsApp API Banking", description: "Banking-grade WhatsApp solutions.", href: "/whatsapp-api-banking", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <ShoppingCart size={20} />, title: "WhatsApp API Ecommerce", description: "Commerce solutions for online stores.", href: "/whatsapp-api-ecommerce", color: "#f97316", bgColor: "#fff7ed" },
            { icon: <BookOpen size={20} />, title: "WhatsApp API Education", description: "Education engagement through WhatsApp.", href: "/whatsapp-api-education", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Users size={20} />, title: "WhatsApp API Healthcare", description: "Secure patient outreach via WhatsApp.", href: "/whatsapp-api-healthcare", color: "#14b8a6", bgColor: "#f0fdfa" },
            { icon: <Building2 size={20} />, title: "WhatsApp API Real Estate", description: "Real estate lead generation on WhatsApp.", href: "/whatsapp-api-real-estate", color: "#3b82f6", bgColor: "#eff6ff" },
          ],
        },
      ],
    },
  },
  {
    label: "RCS",
    hasMenu: true,
    sidebarIcon: <Globe size={18} />,
    sidebarColor: "#0ea5e9",
    sidebarBgColor: "#ecfeff",
    menu: {
      sections: [
        {
          sectionTitle: "RCS Pages",
          items: [
            { icon: <Building2 size={20} />, title: "RCS for Banking", description: "Conversational RCS experiences for finance.", href: "/rcs-for-banking", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <ShoppingCart size={20} />, title: "RCS for Ecommerce", description: "RCS commerce messaging that converts.", href: "/rcs-for-ecommerce", color: "#f97316", bgColor: "#fff7ed" },
            { icon: <BookOpen size={20} />, title: "RCS for Education", description: "Student engagement through RCS.", href: "/rcs-for-education", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Home size={20} />, title: "RCS for Real Estate", description: "RCS alerts and lead nurturing for property.", href: "/rcs-for-real-estate", color: "#14b8a6", bgColor: "#f0fdfa" },
            { icon: <MessageSquare size={20} />, title: "RCS Messaging", description: "Rich conversational messaging for brands.", href: "/rcs-messaging", color: "#22c55e", bgColor: "#ecfdf5" },
            { icon: <MapPin size={20} />, title: "RCS Messaging Delhi Noida", description: "Local RCS services for Delhi and Noida.", href: "/rcs-messaging-delhi-noida", color: "#f59e0b", bgColor: "#fffbeb" },
          ],
        },
      ],
    },
  },
  {
    label: "Bulk SMS",
    hasMenu: true,
    sidebarIcon: <Mail size={18} />,
    sidebarColor: "#3b82f6",
    sidebarBgColor: "#eff6ff",
    menu: {
      sections: [
        {
          sectionTitle: "Bulk SMS Pages",
          items: [
            { icon: <Mail size={20} />, title: "Bulk SMS Service Provider India", description: "High-volume SMS campaigns across India.", href: "/bulk-sms-service-provider-india", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <ShieldCheck size={20} />, title: "OTP SMS Service Provider", description: "Fast OTP delivery for secure authentication.", href: "/otp-sms-service-provider", color: "#10b981", bgColor: "#ecfdf5" },
            { icon: <Zap size={20} />, title: "Transactional SMS Service", description: "Reliable transactional SMS for alerts and OTPs.", href: "/transactional-sms-service", color: "#f59e0b", bgColor: "#fffbeb" },
          ],
        },
      ],
    },
  },
  {
    label: "AI Offerings",
    hasMenu: true,
    sidebarIcon: <Sparkles size={18} />,
    sidebarColor: "#8b5cf6",
    sidebarBgColor: "#f5f3ff",
    menu: {
      sections: [
        {
          items: [
            { icon: <Bot size={20} />, title: "ACE LLM", description: "Purpose-built large language model for CX", href: "/blog", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Sparkles size={20} />, title: "AI Copilot", description: "AI-assisted agent productivity tools", href: "/blog", color: "#f59e0b", bgColor: "#fffbeb" },
            { icon: <Layers size={20} />, title: "Generative AI Studio", description: "Build and deploy custom AI models", href: "/blog", color: "#ec4899", bgColor: "#fdf2f8" },
            { icon: <Zap size={20} />, title: "Smart Automation", description: "Intelligent process automation at scale", href: "/blog", color: "#06b6d4", bgColor: "#ecfeff" },
          ],
        },
      ],
    },
  },
  {
    label: "Solutions",
    hasMenu: true,
    sidebarIcon: <Building2 size={18} />,
    sidebarColor: "#3b82f6",
    sidebarBgColor: "#eff6ff",
    menu: {
      sections: [
        {
          sectionTitle: "WhatsApp Solutions",
          items: [
            { icon: <ShoppingCart size={20} />, title: "WhatsApp API Ecommerce", description: "Commerce solutions for online stores.", href: "/whatsapp-api-ecommerce", color: "#f97316", bgColor: "#fff7ed" },
            { icon: <Building2 size={20} />, title: "WhatsApp API Real Estate", description: "Real estate lead generation on WhatsApp.", href: "/whatsapp-api-real-estate", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <BookOpen size={20} />, title: "WhatsApp API Education", description: "Education engagement through WhatsApp.", href: "/whatsapp-api-education", color: "#14b8a6", bgColor: "#f0fdfa" },
          ],
        },
        {
          sectionTitle: "RCS Solutions",
          items: [
            { icon: <Building2 size={20} />, title: "RCS for Banking", description: "Conversational RCS experiences for finance.", href: "/rcs-for-banking", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <ShoppingCart size={20} />, title: "RCS for Ecommerce", description: "RCS commerce messaging that converts.", href: "/rcs-for-ecommerce", color: "#f97316", bgColor: "#fff7ed" },
            { icon: <BookOpen size={20} />, title: "RCS for Education", description: "Student engagement through RCS.", href: "/rcs-for-education", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Building2 size={20} />, title: "RCS for Real Estate", description: "RCS alerts and lead nurturing for property.", href: "/rcs-for-real-estate", color: "#14b8a6", bgColor: "#f0fdfa" },
          ],
        },
        {
          sectionTitle: "SMS Solutions",
          items: [
            { icon: <Mail size={20} />, title: "Bulk SMS Service Provider India", description: "High-volume SMS campaigns across India.", href: "/bulk-sms-service-provider-india", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <ShieldCheck size={20} />, title: "OTP SMS Service Provider", description: "Fast OTP delivery for secure authentication.", href: "/otp-sms-service-provider", color: "#10b981", bgColor: "#ecfdf5" },
            { icon: <Zap size={20} />, title: "Transactional SMS Service", description: "Reliable transactional SMS for alerts and OTPs.", href: "/transactional-sms-service", color: "#f59e0b", bgColor: "#fffbeb" },
          ],
        },
      ],
    },
  },
  {
    label: "Resources",
    hasMenu: true,
    sidebarIcon: <BookOpen size={18} />,
    sidebarColor: "#f97316",
    sidebarBgColor: "#fff7ed",
    menu: {
      sections: [
        {
          items: [
            { icon: <BookOpen size={20} />, title: "Blog", description: "Latest insights and product updates", href: "/blog", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <FileText size={20} />, title: "Whitepapers", description: "In-depth research and guides", href: "/blog", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Video size={20} />, title: "Webinars", description: "On-demand and upcoming live events", href: "/blog", color: "#ef4444", bgColor: "#fef2f2" },
            { icon: <Award size={20} />, title: "Case Studies", description: "Real results from real customers", href: "/blog", color: "#f59e0b", bgColor: "#fffbeb" },
          ],
        },
      ],
    },
  },
  {
    label: "Company",
    hasMenu: true,
    sidebarIcon: <Users size={18} />,
    sidebarColor: "#22c55e",
    sidebarBgColor: "#f0fdf4",
    menu: {
      sections: [
        {
          items: [
            { icon: <Building2 size={20} />, title: "About Us", description: "Our story, mission, and team", href: "/", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <Users size={20} />, title: "Careers", description: "Join the team building the future of CX", href: "/", color: "#22c55e", bgColor: "#f0fdf4" },
            { icon: <Globe size={20} />, title: "Newsroom", description: "Press releases and media resources", href: "/", color: "#6366f1", bgColor: "#eef2ff" },
            { icon: <HeartHandshake size={20} />, title: "Contact", description: "Get in touch with our team", href: "/", color: "#ec4899", bgColor: "#fdf2f8" },
          ],
        },
      ],
    },
  },
];

// --- Mega menu content (renders inside shadcn's NavigationMenuContent) --------

const MegaMenuContent: React.FC<{ menu: NonNullable<NavItem["menu"]> }> = ({ menu }) => {
  return (
    <div
      className="grid p-3 w-[820px] max-w-[92vw] cursor-pointer"
      style={{ gridTemplateColumns: `repeat(${menu.sections.length}, 1fr)` }}
    >
      {menu.sections.map((section, si) => (
        <div key={si} className={cn(si > 0 && "border-l border-gray-50 pl-2")}>
          {section.sectionTitle && (
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 px-3 pt-3 pb-2">
              {section.sectionTitle}
            </p>
          )}
          <div className="flex flex-col gap-0.5 pb-2">
            {section.items.map((item, ii) => (
              <NavigationMenuLink key={ii} asChild>
                <Link
                  href={item.href ?? "#"}
                  className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all duration-150 cursor-pointer"
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:shadow-md"
                    style={{ background: item.bgColor, color: item.color }}
                  >
                    {item.icon}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-gray-700 group-hover:text-gray-900 transition-colors leading-tight">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-gray-400 leading-snug mt-0.5 truncate">
                      {item.description}
                    </p>
                  </div>

                  <ChevronRight
                    size={12}
                    className="shrink-0 text-gray-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                  />
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
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

            {/* Desktop nav — fully driven by shadcn's NavigationMenu primitives.
                viewport={true} makes the component render its own internal
                viewport automatically — do NOT add a second one manually,
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
                    {item.hasMenu && item.menu ? (
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
                          <MegaMenuContent menu={item.menu} />
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href="#"
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
                className="px-6 cursor-pointer py-3 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-[16px] font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                Request a demo
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[color:var(--primary)] shadow-sm">
                  <ChevronRight size={15} />
                </div>
              </button>
            </div>

            <button
              className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
              <Sparkles size={16} className="text-white" />
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
            <X size={16} className="text-white" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-3 px-2.5 flex flex-col gap-0.5">
          {navItems.map((item) => {
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

                  <ChevronDown
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
                    {item.menu?.sections.map((section, si) => (
                      <div key={si}>
                        {section.sectionTitle && (
                          <p className="px-3 pt-2.5 pb-1 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                            {section.sectionTitle}
                          </p>
                        )}
                        {section.items.map((subItem, ii) => (
                          <Link
                            key={ii}
                            href={subItem.href ?? "#"}
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
                              <p className="text-[10px] text-gray-400 leading-snug truncate">{subItem.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-3 shrink-0 border-t border-gray-100 space-y-2">
          <button
            onClick={() => { openModal(); setMobileOpen(false); }}
            className="w-full px-4 py-3 rounded-2xl text-white text-sm font-bold shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
            style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
          >
            <Sparkles size={14} />
            Request a demo
          </button>
          <p className="text-center text-[10px] text-gray-400">Trusted by 10,000+ businesses</p>
        </div>
      </div>
    </>
  );
};

export default Header;