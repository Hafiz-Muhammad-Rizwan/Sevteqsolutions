import Link from "next/link";
import { navItems } from "@/data/site";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#10131c",
        borderTop: "1px solid rgba(207, 231, 255, 0.06)",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      {/* Subtle glow */}
      <div
        className="glow-orb"
        style={{
          top: 0,
          left: "25%",
          width: "500px",
          height: "300px",
          background: "radial-gradient(circle, rgba(148, 209, 255, 0.05) 0%, transparent 70%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px", marginBottom: "60px" }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              href="/"
              aria-label="Sevteq Home"
              style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "20px" }}
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
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "var(--color-text-muted)",
                fontFamily: "'Inter', sans-serif",
                maxWidth: "320px",
              }}
            >
              Empowering businesses to grow through high-quality software solutions, digital products, and managed IT operations.
            </p>
          </div>

          {/* Company links Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Company
            </h4>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="footer-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Connect Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Connect
            </h4>
            <p style={{ fontSize: "14px", color: "var(--color-text-muted)", fontFamily: "'Inter', sans-serif" }}>
              Email:{" "}
              <a
                href="mailto:contact@sevteq.com"
                className="footer-link"
                style={{ display: "inline-block" }}
              >
                contact@sevteq.com
              </a>
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-text-muted)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.6",
              }}
            >
              Global Headquarters<br />San Francisco, CA
            </p>
            <a
              href="#contact"
              className="footer-cta-link"
            >
              Start a project →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "32px",
            borderTop: "1px solid rgba(207, 231, 255, 0.06)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(184, 199, 217, 0.5)", fontFamily: "'Inter', sans-serif" }}>
            © {year} Sevteq. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <a
                key={label}
                href="#"
                className="footer-sub-link"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
