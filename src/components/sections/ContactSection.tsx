"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0 120px",
        background: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div style={{ position: "absolute", top: "20%", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(31,119,246,0.08)", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(218,78,36,0.06)", filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "24px",
              border: "1px solid #191919",
              background: "#0a0a0a",
              padding: "clamp(48px, 8vw, 96px)",
              textAlign: "center",
            }}
          >
            {/* Inner glows */}
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "380px", height: "380px", borderRadius: "50%", background: "rgba(31,119,246,0.10)", filter: "blur(90px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(218,78,36,0.07)", filter: "blur(80px)", pointerEvents: "none" }} />

            {/* Top accent line */}
            <div style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "35%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #1f77f6, transparent)",
            }} />

            <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "720px", margin: "0 auto" }}>
              <p style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1f77f6",
                fontFamily: "'General Sans','Inter',sans-serif",
                marginBottom: "24px",
              }}>
                Let&apos;s collaborate
              </p>

              <h2 style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 500,
                color: "#fff",
                fontFamily: "'General Sans','Inter',sans-serif",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}>
                Build your next competitive advantage.
              </h2>

              <p style={{
                fontSize: "18px",
                lineHeight: 1.65,
                color: "#999",
                fontFamily: "'General Sans','Inter',sans-serif",
                maxWidth: "540px",
                marginBottom: "48px",
              }}>
                Share your priorities with our team and we will craft a transformation roadmap aligned to your goals, timelines, and governance model.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                <a
                  href="mailto:contact@sevteq.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#1f77f6",
                    color: "#fff",
                    borderRadius: "14px",
                    padding: "16px 40px",
                    fontSize: "15px",
                    fontWeight: 500,
                    fontFamily: "'General Sans','Inter',sans-serif",
                    textDecoration: "none",
                    border: "none",
                    transition: "background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#3d8af7";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(31,119,246,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#1f77f6";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  Email Us
                </a>
                <a
                  href="tel:+1234567890"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid #191919",
                    borderRadius: "14px",
                    padding: "16px 40px",
                    fontSize: "15px",
                    fontWeight: 500,
                    fontFamily: "'General Sans','Inter',sans-serif",
                    textDecoration: "none",
                    transition: "border-color 0.25s ease, background 0.25s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#191919";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
