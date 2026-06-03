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
  featured?: boolean;
  videoLabel?: string;
}

interface MegaMenuSection {
  sectionTitle?: string;
  items: MegaMenuItem[];
}

interface NavItem {
  label: string;
  hasMenu: boolean;
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
    menu: {
      featuredCard: {
        title: "Conversation Cloud",
        description:
          "AI-powered platform for seamless, omnichannel customer engagement and automation",
        cta: "Learn more",
        videoLabel: "What is Conversation Cloud?",
      },
      sections: [
        {
          sectionTitle: "Products",
          items: [
            {
              icon: <MessageSquare size={20} />,
              title: "Communicate",
              description:
                "Smart CPaaS platform for seamless, multi-channel messaging and intelligent customer interactions",
            },
            {
              icon: <Megaphone size={20} />,
              title: "Advertise",
              description:
                "Drive engagement with targeted, personalized ads on WhatsApp and other messaging channels",
            },
            {
              icon: <Bot size={20} />,
              title: "Commerce",
              description:
                "Enable end-to-end commerce experiences directly within messaging channels",
            },
          ],
        },
        {
          sectionTitle: "Capabilities",
          items: [
            {
              icon: <Sparkles size={20} />,
              title: "AI Agents",
              description: "Autonomous AI agents for intelligent automation",
            },
            {
              icon: <Zap size={20} />,
              title: "Flow Builder",
              description: "Visual workflow builder for complex journeys",
            },
            {
              icon: <BarChart2 size={20} />,
              title: "Analytics",
              description: "Deep insights across all conversation channels",
            },
          ],
        },
        {
          sectionTitle: "Channels",
          items: [
            {
              icon: <Phone size={20} />,
              title: "WhatsApp Business",
              description: "Reach 2B+ users on the world's largest platform",
            },
            {
              icon: <Mail size={20} />,
              title: "SMS & RCS",
              description: "Rich messaging with multimedia support",
            },
            {
              icon: <Globe size={20} />,
              title: "Web & App Chat",
              description: "Embed live chat on any digital surface",
            },
          ],
        },
      ],
    },
  },
  {
    label: "AI Offerings",
    hasMenu: true,
    menu: {
      sections: [
        {
          items: [
            {
              icon: <Bot size={20} />,
              title: "ACE LLM",
              description: "Purpose-built large language model for CX",
            },
            {
              icon: <Sparkles size={20} />,
              title: "AI Copilot",
              description: "AI-assisted agent productivity tools",
            },
            {
              icon: <Layers size={20} />,
              title: "Generative AI Studio",
              description: "Build and deploy custom AI models",
            },
            {
              icon: <Zap size={20} />,
              title: "Smart Automation",
              description: "Intelligent process automation at scale",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Solutions",
    hasMenu: true,
    menu: {
      sections: [
        {
          sectionTitle: "By Industry",
          items: [
            {
              icon: <ShoppingCart size={20} />,
              title: "Retail & E-commerce",
              description: "Conversational commerce for modern retail",
            },
            {
              icon: <HeartHandshake size={20} />,
              title: "Banking & Finance",
              description: "Secure, compliant customer engagement",
            },
            {
              icon: <Building2 size={20} />,
              title: "Healthcare",
              description: "Patient communication reimagined",
            },
          ],
        },
        {
          sectionTitle: "By Use Case",
          items: [
            {
              icon: <Users size={20} />,
              title: "Customer Support",
              description: "Deflect tickets, delight customers",
            },
            {
              icon: <Star size={20} />,
              title: "Marketing & Campaigns",
              description: "Personalised campaigns at scale",
            },
            {
              icon: <Briefcase size={20} />,
              title: "Sales Enablement",
              description: "Conversational selling on every channel",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Resources",
    hasMenu: true,
    menu: {
      sections: [
        {
          items: [
            {
              icon: <BookOpen size={20} />,
              title: "Blog",
              description: "Latest insights and product updates",
            },
            {
              icon: <FileText size={20} />,
              title: "Whitepapers",
              description: "In-depth research and guides",
            },
            {
              icon: <Video size={20} />,
              title: "Webinars",
              description: "On-demand and upcoming live events",
            },
            {
              icon: <Award size={20} />,
              title: "Case Studies",
              description: "Real results from real customers",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Company",
    hasMenu: true,
    menu: {
      sections: [
        {
          items: [
            {
              icon: <Building2 size={20} />,
              title: "About Us",
              description: "Our story, mission, and team",
            },
            {
              icon: <Users size={20} />,
              title: "Careers",
              description: "Join the team building the future of CX",
            },
            {
              icon: <Globe size={20} />,
              title: "Newsroom",
              description: "Press releases and media resources",
            },
            {
              icon: <HeartHandshake size={20} />,
              title: "Contact",
              description: "Get in touch with our team",
            },
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
    <div className="w-full">
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
                    href="#"
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
      <header ref={headerRef} className="fixed w-full top-2 z-50 ">

        <div className="bg-white shadow-sm py-2 rounded-full w-[80%] mx-auto mt-3 relative">
          <div className="max-w-screen-xl mx-auto px-6 flex items-center h-16 gap-8 relative">
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/images/gcm-logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-auto h-10"
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
            className="absolute left-0 right-0 top-full mt-2 z-50 px-6"
          >
            <div className="mx-auto max-w-screen-xl">
              <MegaMenu menu={activeNavItem?.menu} isOpen={!!activeNavItem?.menu && activeMenu === activeNavItem.label} />
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
            {/* mobile menu unchanged */}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
