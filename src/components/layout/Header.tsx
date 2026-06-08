"use client";

import Link from "next/link";
import { navItems } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [activeItem, setActiveItem] = useState("About");
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
        background: "rgba(0,0,0,0.80)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid #191919",
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
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #1f77f6, #0d5fd4)",
              boxShadow: "0 0 18px rgba(31,119,246,0.45)",
              fontSize: "14px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "'General Sans','Inter',sans-serif",
            }}
          >
            S
          </span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#fff",
              fontFamily: "'General Sans','Inter',sans-serif",
              letterSpacing: "-0.02em",
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
            padding: "6px",
            borderRadius: "999px",
            background: "#0f0f0f",
            border: "1px solid #191919",
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
                  fontFamily: "'General Sans','Inter',sans-serif",
                  color: isActive ? "#fff" : "#999",
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
                      background: "rgba(31,119,246,0.15)",
                      border: "1px solid rgba(31,119,246,0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="header-cta" style={{ display: "none" }}>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact", "Contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "999px",
              padding: "10px 24px",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "'General Sans','Inter',sans-serif",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1f77f6";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1f77f6";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
            }}
          >
            Talk to Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
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
              background: "rgba(0,0,0,0.96)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid #191919",
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
                  color: "#999",
                  textDecoration: "none",
                  fontFamily: "'General Sans','Inter',sans-serif",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
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
                background: "#1f77f6",
                color: "#fff",
                borderRadius: "999px",
                padding: "12px 32px",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "'General Sans','Inter',sans-serif",
                textDecoration: "none",
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
