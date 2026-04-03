"use client";

import Link from "next/link";
import { navItems } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [activeItem, setActiveItem] = useState("About");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Intercept anchor clicks for ultra-smooth scrolling with Header offset
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActiveItem(label);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).offsetTop - 80; // Account for sticky header
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="inline-flex items-center gap-3 group z-50" aria-label="Sevteq Home" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMobileMenuOpen(false); }}>
          <img 
            src="/Sevteq%20Logo.jpeg" 
            alt="Sevteq Logo" 
            className="h-10 lg:h-12 w-auto object-contain rounded-lg transition-all group-hover:scale-105 shadow-[0_0_15px_rgba(45,91,255,0.2)] group-hover:shadow-[0_0_25px_rgba(45,91,255,0.4)]" 
          />
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#2D5BFF] transition-colors hidden sm:block">
            Sevteq
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex p-1 rounded-full bg-white/5 border border-white/10">
          {navItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href, item.label)}
                className="relative px-5 py-2 text-sm font-medium transition-colors z-10"
              >
                <span className={`relative z-20 ${isActive ? "text-white" : "text-[#94A3B8] hover:text-white"}`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 z-10 rounded-full bg-[#2D5BFF]/20 border border-[#2D5BFF]/30"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact", "Contact")}
            className="rounded-full bg-gradient-to-r from-[#2D5BFF] to-[#1a3db3] px-6 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(45,91,255,0.4)]"
          >
            Talk to Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden z-50 text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-3xl border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden z-40"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href, item.label)}
                className="text-lg font-medium text-white/80 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact", "Contact")}
              className="mt-4 rounded-full bg-gradient-to-r from-[#2D5BFF] to-[#1a3db3] px-8 py-3 text-sm font-bold text-white"
            >
              Talk to Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
