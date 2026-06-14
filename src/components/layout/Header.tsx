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
    const hash = href.includes("#") ? href.substring(href.indexOf("#")) : href;
    const target = document.querySelector(hash);
    if (target) {
      e.preventDefault();
      setActiveItem(label);
      setMobileMenuOpen(false);
      const top = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(248, 249, 250, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--color-border)",
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
              border: "1px solid var(--color-border)",
            }}
          />
          <span
            style={{
              fontSize: "21px",
              fontWeight: 500,
              color: "var(--color-text)",
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
            background: "var(--color-bg-secondary)",
            border: "1px solid var(--color-border)",
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
                  color: isActive ? "var(--color-text)" : "var(--color-text-muted)",
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
                      background: "rgba(15, 23, 42, 0.05)",
                      border: "1px solid rgba(15, 23, 42, 0.08)",
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
              background: "var(--color-primary)",
              color: "#ffffff",
              border: "1px solid var(--color-primary)",
              borderRadius: "10px",
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              transition: "all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1e293b";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1e293b";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(15, 23, 42, 0.15)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-primary)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-primary)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <svg
              className="animate-sparkle"
              style={{ marginRight: "8px", color: "#f59e0b" }}
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
            color: "var(--color-text)",
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
              background: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid var(--color-border)",
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
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
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
                color: "#ffffff",
                borderRadius: "10px",
                padding: "12px 32px",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
                width: "100%",
                maxWidth: "280px",
                textAlign: "center",
                boxShadow: "0 4px 14px rgba(15, 23, 42, 0.15)",
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
