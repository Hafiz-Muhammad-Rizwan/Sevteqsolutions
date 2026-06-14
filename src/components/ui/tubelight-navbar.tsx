"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Cpu, Activity, Briefcase, Mail, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: string | LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

const iconMap = {
  Home,
  Cpu,
  Activity,
  Briefcase,
  Mail,
};

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll Spy: Update active tab as user scrolls through sections
  useEffect(() => {
    const elements = items
      .filter((item) => item.url.startsWith("#"))
      .map((item) => {
        const id = item.url.substring(1);
        const element = document.getElementById(id);
        return { element, name: item.name };
      });

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const matched = items.find((item) => item.url === `#${id}`);
          if (matched) {
            setActiveTab(matched.name);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Triggers when section occupies middle viewport
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(({ element }) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  // Scroll Fallback: Set first tab active if at the very top of the page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveTab(items[0].name);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, url: string, name: string) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      setActiveTab(name);
      
      const id = url.substring(1);
      const target = document.getElementById(id);
      if (target) {
        const top = target.offsetTop - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 sm:bottom-auto sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-white/70 border border-gray-200/80 backdrop-blur-xl py-1.5 px-2 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = typeof item.icon === "string"
            ? (iconMap[item.icon as keyof typeof iconMap] || Home)
            : item.icon;
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => handleScrollTo(e, item.url, item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 rounded-full transition-colors flex items-center justify-center gap-2",
                "text-gray-600 hover:text-gray-900",
                isActive && "text-gray-950",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              <span className="hidden sm:inline md:hidden">{item.name}</span>
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-gray-900/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Glowing Indicator Line & Blur Shadows */}
                  {isMobile ? (
                    // Glow shines UPWARD from top of navbar (when floating at bottom of screen)
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#0F172A] rounded-t-full">
                      <div className="absolute w-12 h-6 bg-[#0F172A]/12 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-[#0F172A]/12 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-[#0F172A]/12 rounded-full blur-sm top-0 left-2" />
                    </div>
                  ) : (
                    // Glow shines DOWNWARD from bottom of navbar (when floating at top of screen)
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#0F172A] rounded-b-full">
                      <div className="absolute w-12 h-6 bg-[#0F172A]/12 rounded-full blur-md -bottom-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-[#0F172A]/12 rounded-full blur-md -bottom-1" />
                      <div className="absolute w-4 h-4 bg-[#0F172A]/12 rounded-full blur-sm bottom-0 left-2" />
                    </div>
                  )}
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
