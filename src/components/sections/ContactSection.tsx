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
        background: "#04070d",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div
        className="glow-orb"
        style={{
          top: "20%",
          right: "-100px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(148, 209, 255, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          bottom: "10%",
          left: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(148, 209, 255, 0.06) 0%, transparent 70%)",
        }}
      />

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
              border: "1px solid rgba(207, 231, 255, 0.05)",
              background: "#10131c",
              padding: "clamp(48px, 8vw, 96px)",
              textAlign: "center",
              boxShadow: "var(--shadow-chromatic-4)",
            }}
          >
            {/* Inner glows */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "380px",
                height: "380px",
                borderRadius: "50%",
                background: "rgba(148, 209, 255, 0.08)",
                filter: "blur(90px)",
                pointerEvents: "none",
              }}
            />

            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "35%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, #94d1ff, transparent)",
                opacity: 0.6,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#94d1ff",
                  fontFamily: "'Inter', sans-serif",
                  marginBottom: "24px",
                }}
              >
                Let&apos;s collaborate
              </p>

              <h2
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  fontWeight: 500,
                  color: "#ffffff",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.15,
                  letterSpacing: "-1.6px",
                  marginBottom: "24px",
                }}
              >
                Build your next competitive advantage.
              </h2>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.65,
                  color: "var(--color-text-muted)",
                  fontFamily: "'Inter', sans-serif",
                  maxWidth: "540px",
                  marginBottom: "48px",
                }}
              >
                Share your priorities with our team and we will craft a transformation roadmap aligned to your goals, timelines, and governance model.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                <a
                  href="mailto:contact@sevteq.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#94d1ff",
                    color: "#04070d",
                    borderRadius: "10px",
                    padding: "16px 40px",
                    fontSize: "15px",
                    fontWeight: 500,
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    border: "none",
                    transition: "all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    boxShadow: "0 4px 14px rgba(148, 209, 255, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(148, 209, 255, 0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#94d1ff";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 14px rgba(148, 209, 255, 0.2)";
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
                    color: "#ffffff",
                    border: "1px solid rgba(207, 231, 255, 0.15)",
                    borderRadius: "10px",
                    padding: "16px 40px",
                    fontSize: "15px",
                    fontWeight: 500,
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    transition: "all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(207, 231, 255, 0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(207, 231, 255, 0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(207, 231, 255, 0.15)";
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
