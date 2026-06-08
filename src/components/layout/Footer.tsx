import Link from "next/link";
import { navItems } from "@/data/site";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000000",
        borderTop: "1px solid #191919",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      {/* Subtle glow */}
      <div style={{ position: "absolute", top: 0, left: "25%", width: "500px", height: "300px", borderRadius: "50%", background: "rgba(31,119,246,0.05)", filter: "blur(150px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px", marginBottom: "60px" }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link href="/" aria-label="Sevteq Home" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", marginBottom: "20px" }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #1f77f6, #0d5fd4)",
                boxShadow: "0 0 16px rgba(31,119,246,0.4)",
                fontSize: "14px",
                fontWeight: 700,
                color: "#fff",
                fontFamily: "'General Sans','Inter',sans-serif",
              }}>
                S
              </span>
              <span style={{ fontSize: "20px", fontWeight: 500, color: "#fff", fontFamily: "'General Sans','Inter',sans-serif", letterSpacing: "-0.02em" }}>
                Sevteq
              </span>
            </Link>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#555", fontFamily: "'General Sans','Inter',sans-serif", maxWidth: "320px" }}>
              Empowering businesses to grow through high-quality software solutions, digital products, and managed IT operations.
            </p>
          </div>

          {/* Company links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: 500, color: "#fff", fontFamily: "'General Sans','Inter',sans-serif", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "4px" }}>
              Company
            </h4>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#555",
                  textDecoration: "none",
                  fontFamily: "'General Sans','Inter',sans-serif",
                  transition: "color 0.2s ease",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1f77f6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Connect */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ fontSize: "14px", fontWeight: 500, color: "#fff", fontFamily: "'General Sans','Inter',sans-serif", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "4px" }}>
              Connect
            </h4>
            <p style={{ fontSize: "14px", color: "#555", fontFamily: "'General Sans','Inter',sans-serif" }}>
              Email:{" "}
              <a
                href="mailto:contact@sevteq.com"
                style={{ color: "#555", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                contact@sevteq.com
              </a>
            </p>
            <p style={{ fontSize: "14px", color: "#555", fontFamily: "'General Sans','Inter',sans-serif" }}>
              Global Headquarters<br />San Francisco, CA
            </p>
            <a
              href="#contact"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#1f77f6",
                textDecoration: "none",
                fontFamily: "'General Sans','Inter',sans-serif",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1f77f6")}
            >
              Start a project →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: "32px", borderTop: "1px solid #191919", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <p style={{ fontSize: "13px", color: "#333", fontFamily: "'General Sans','Inter',sans-serif" }}>
            © {year} Sevteq. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontSize: "13px",
                  color: "#333",
                  textDecoration: "none",
                  fontFamily: "'General Sans','Inter',sans-serif",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#999")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
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
