"use client";

import React, { useState, useRef, useEffect } from "react";
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
  Play,
  X,
  Menu,
} from "lucide-react";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────

interface MegaMenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  featured?: boolean;
  videoLabel?: string;
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

// ─── Menu Data ────────────────────────────────────────────────────────────────

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
            { icon: <MessageSquare size={20} />, title: "Communicate", description: "Smart CPaaS platform for seamless, multi-channel messaging", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <Megaphone size={20} />, title: "Advertise", description: "Drive engagement with targeted, personalized ads on WhatsApp", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Bot size={20} />, title: "Commerce", description: "Enable end-to-end commerce experiences within messaging channels", color: "#10b981", bgColor: "#ecfdf5" },
          ],
        },
        {
          sectionTitle: "Capabilities",
          items: [
            { icon: <Sparkles size={20} />, title: "AI Agents", description: "Autonomous AI agents for intelligent automation", color: "#f59e0b", bgColor: "#fffbeb" },
            { icon: <Zap size={20} />, title: "Flow Builder", description: "Visual workflow builder for complex journeys", color: "#06b6d4", bgColor: "#ecfeff" },
            { icon: <BarChart2 size={20} />, title: "Analytics", description: "Deep insights across all conversation channels", color: "#6366f1", bgColor: "#eef2ff" },
          ],
        },
        {
          sectionTitle: "Channels",
          items: [
            { icon: <Phone size={20} />, title: "WhatsApp Business", description: "Reach 2B+ users on the world's largest platform", color: "#22c55e", bgColor: "#f0fdf4" },
            { icon: <Mail size={20} />, title: "SMS & RCS", description: "Rich messaging with multimedia support", href: "/bulk-sms-service-provider-india", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <Globe size={20} />, title: "Web & App Chat", description: "Embed live chat on any digital surface", color: "#8b5cf6", bgColor: "#f5f3ff" },
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
            { icon: <Bot size={20} />, title: "ACE LLM", description: "Purpose-built large language model for CX", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Sparkles size={20} />, title: "AI Copilot", description: "AI-assisted agent productivity tools", color: "#f59e0b", bgColor: "#fffbeb" },
            { icon: <Layers size={20} />, title: "Generative AI Studio", description: "Build and deploy custom AI models", color: "#ec4899", bgColor: "#fdf2f8" },
            { icon: <Zap size={20} />, title: "Smart Automation", description: "Intelligent process automation at scale", color: "#06b6d4", bgColor: "#ecfeff" },
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
          sectionTitle: "By Industry",
          items: [
            { icon: <ShoppingCart size={20} />, title: "Retail & E-commerce", description: "Conversational commerce for modern retail", color: "#f97316", bgColor: "#fff7ed" },
            { icon: <HeartHandshake size={20} />, title: "Banking & Finance", description: "Secure, compliant customer engagement", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <Building2 size={20} />, title: "Healthcare", description: "Patient communication reimagined", color: "#14b8a6", bgColor: "#f0fdfa" },
          ],
        },
        {
          sectionTitle: "By Use Case",
          items: [
            { icon: <Users size={20} />, title: "Customer Support", description: "Deflect tickets, delight customers", color: "#6366f1", bgColor: "#eef2ff" },
            { icon: <Star size={20} />, title: "Marketing & Campaigns", description: "Personalised campaigns at scale", color: "#f59e0b", bgColor: "#fffbeb" },
            { icon: <Briefcase size={20} />, title: "Sales Enablement", description: "Conversational selling on every channel", color: "#22c55e", bgColor: "#f0fdf4" },
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
            { icon: <BookOpen size={20} />, title: "Blog", description: "Latest insights and product updates", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <FileText size={20} />, title: "Whitepapers", description: "In-depth research and guides", color: "#8b5cf6", bgColor: "#f5f3ff" },
            { icon: <Video size={20} />, title: "Webinars", description: "On-demand and upcoming live events", color: "#ef4444", bgColor: "#fef2f2" },
            { icon: <Award size={20} />, title: "Case Studies", description: "Real results from real customers", color: "#f59e0b", bgColor: "#fffbeb" },
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
            { icon: <Building2 size={20} />, title: "About Us", description: "Our story, mission, and team", color: "#3b82f6", bgColor: "#eff6ff" },
            { icon: <Users size={20} />, title: "Careers", description: "Join the team building the future of CX", color: "#22c55e", bgColor: "#f0fdf4" },
            { icon: <Globe size={20} />, title: "Newsroom", description: "Press releases and media resources", color: "#6366f1", bgColor: "#eef2ff" },
            { icon: <HeartHandshake size={20} />, title: "Contact", description: "Get in touch with our team", color: "#ec4899", bgColor: "#fdf2f8" },
          ],
        },
      ],
    },
  },
];



// ─── MegaMenu ─────────────────────────────────────────────────────────────────

interface MegaMenuProps {
  menu: NavItem["menu"] | undefined;
  isOpen: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ menu, isOpen }) => {
  if (!menu || !isOpen) return null;

  const hasFeatured = !!menu.featuredCard;
  const colCount = menu.sections.length;

  return (
    <div className="w-full z-[9999]">
      <div className="flex justify-center">
        <div className="w-3 h-3 bg-white rotate-45 shadow -mb-1.5 z-10 relative border-l border-t border-[color:var(--border)]" />
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border border-[color:var(--border)] overflow-hidden">
        {hasFeatured && (
          <div className="bg-[linear-gradient(135deg,var(--surface-alt),#eef6ff)] px-6 py-5 border-b border-[color:var(--border)] flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] flex items-center justify-center shadow-lg">
              <Sparkles size={22} className="text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {menu.featuredCard!.title}
              </h3>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed max-w-sm">
                {menu.featuredCard!.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-[color:var(--primary)] hover:text-[color:var(--primary-light)]"
              >
                {menu.featuredCard!.cta} <ChevronRight size={14} />
              </a>
            </div>

           
            <button className="flex-shrink-0 flex items-center gap-2 bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-sm font-semibold px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
              <Play size={14} fill="white" />
              <span className="text-xs leading-tight max-w-[80px]">
                {menu.featuredCard!.videoLabel}
              </span>
            </button>
          </div>
        )}

        <div
          className="grid p-5 gap-4"
          style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}
        >
          {menu.sections.map((section, si) => (
            <div key={si}>
              {section.sectionTitle && (
                <p className="text-xs font-bold uppercase tracking-widest text-[color:var(--muted)] mb-3 px-1">
                  {section.sectionTitle}
                </p>
              )}

              <div className="flex flex-col gap-1">
                {section.items.map((item, ii) => (
                  <a
                    key={ii}
                    href={item.href ?? "#"}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[color:var(--surface-alt)] transition-colors"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center text-gray-500 group-hover:text-[color:var(--primary)] transition-colors">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[color:var(--primary)] transition-colors">
                        {item.title}
                      </p>
                      <p className="text-xs text-[color:var(--muted)] leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Main Header ──────────────────────────────────────────────────────────────

const Header: React.FC = () => {
  const { openModal } = useModalStore();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeNavItem = navItems.find((item) => item.label === activeMenu);

  const openMenu = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const stayOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header ref={headerRef} className="fixed w-full top-2 z-9999">

        <div className="bg-white shadow-sm py-1 sm:py-2 rounded-full w-[95%] sm:w-[80%] mx-auto mt-3 relative">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center h-12 sm:h-16 gap-4 sm:gap-8 relative">
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/images/gcm-logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-auto h-7 sm:h-10"
              />
            </a>

            <nav
              className="hidden lg:flex items-center gap-1 flex-1"
              onMouseLeave={closeMenu}
            >
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeMenu === item.label
                        ? "text-[color:var(--primary)] bg-blue-50"
                        : "text-gray-700 hover:text-[color:var(--primary)] hover:bg-gray-50"
                    }`}
                    onMouseEnter={() => item.hasMenu && openMenu(item.label)}
                  >
                    {item.label}
                    {item.hasMenu && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <button onClick={openModal} className="px-6 cursor-pointer py-3 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--primary-light))] text-white text-[16px] font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                Request a demo
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[color:var(--primary)] shadow-sm">
                  <ChevronRight size={15} />
                </div>
              </button>
            </div>

            <button
              className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mega menu aligned to parent header width */}
          <div
            onMouseEnter={stayOpen}
            onMouseLeave={closeMenu}
            className="absolute left-0 right-0 top-full mt-2 z-9999 px-6"
          >
            <div className="mx-auto max-w-screen-xl">
              <MegaMenu menu={activeNavItem?.menu} isOpen={!!activeNavItem?.menu && activeMenu === activeNavItem.label} />
            </div>
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
        {/* Gradient header */}
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
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <X size={16} className="text-white" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-3 px-2.5 flex flex-col gap-0.5">
          {navItems.map((item) => {
            const isExpanded = mobileExpanded === item.label;
            return (
              <div key={item.label}>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-200 ${isExpanded ? "bg-gray-50" : "hover:bg-gray-50"}`}
                  onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                >
                  {/* Colored icon */}
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
                          <a
                            key={ii}
                            href="#"
                            className="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 transition-colors group"
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
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer CTA */}
        <div className="p-3 shrink-0 border-t border-gray-100 space-y-2">
          <button
            onClick={() => { openModal(); setMobileOpen(false); }}
            className="w-full px-4 py-3 rounded-2xl text-white text-sm font-bold shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
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
