"use client";

import Link from "next/link";
import { navItems } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [activeItem, setActiveItem] = useState("Services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActiveItem(label);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(4, 7, 13, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(207, 231, 255, 0.06)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Sevteq Home"
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMobileMenuOpen(false); }}
          style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
        >
          <img
            src="/Sevteq Logo.jpeg"
            alt="Sevteq"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              objectFit: "cover",
              border: "1px solid rgba(207, 231, 255, 0.15)",
            }}
          />
          <span
            style={{
              fontSize: "21px",
              fontWeight: 500,
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.6px",
            }}
          >
            Sevteq
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "4px",
            padding: "4px",
            borderRadius: "999px",
            background: "#10131c",
            border: "1px solid rgba(207, 231, 255, 0.05)",
          }}
          className="header-nav"
        >
          {navItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href, item.label)}
                style={{
                  position: "relative",
                  padding: "8px 18px",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  color: isActive ? "#ffffff" : "#b8c7d9",
                  textDecoration: "none",
                  borderRadius: "999px",
                  transition: "color 0.2s ease",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "999px",
                      background: "rgba(148, 209, 255, 0.1)",
                      border: "1px solid rgba(148, 209, 255, 0.25)",
                    }}
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button: Sparkle "Talk to Us" */}
        <div className="header-cta" style={{ display: "none" }}>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact", "Contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#10131c",
              color: "#ffffff",
              border: "1px solid rgba(207, 231, 255, 0.12)",
              borderRadius: "10px",
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              transition: "all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#94d1ff";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 15px rgba(148, 209, 255, 0.2)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(207, 231, 255, 0.12)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <svg
              className="animate-sparkle"
              style={{ marginRight: "8px", color: "#94d1ff" }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
            Talk to Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            padding: "8px",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "absolute",
              top: "72px",
              left: 0,
              width: "100%",
              background: "rgba(4, 7, 13, 0.98)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(207, 231, 255, 0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "32px 24px",
              gap: "24px",
              zIndex: 40,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href, item.label)}
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#b8c7d9",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#b8c7d9")}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact", "Contact")}
              style={{
                marginTop: "8px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-primary)",
                color: "#04070d",
                borderRadius: "10px",
                padding: "12px 32px",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
                width: "100%",
                maxWidth: "280px",
                textAlign: "center",
                boxShadow: "0 4px 14px rgba(148, 209, 255, 0.25)",
              }}
            >
              Talk to Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .header-nav { display: flex !important; }
          .header-cta { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
