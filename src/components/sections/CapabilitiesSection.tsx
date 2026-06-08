"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/site";
import { TiltCard } from "@/components/animations/TiltCard";

// Fusion AI accent colors — blue primary + orange secondary accent
const CARD_ACCENTS = [
  { color: "#1f77f6", glow: "rgba(31,119,246,0.18)" },
  { color: "#da4e24", glow: "rgba(218,78,36,0.18)" },
  { color: "#1f77f6", glow: "rgba(31,119,246,0.18)" },
  { color: "#da4e24", glow: "rgba(218,78,36,0.18)" },
  { color: "#1f77f6", glow: "rgba(31,119,246,0.18)" },
  { color: "#da4e24", glow: "rgba(218,78,36,0.18)" },
];

const ICONS = [
  // Code brackets
  <svg key="code" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Globe
  <svg key="globe" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  // Smartphone
  <svg key="phone" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  // Palette
  <svg key="palette" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  // Cloud
  <svg key="cloud" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  // Zap
  <svg key="zap" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
];

export function CapabilitiesSection() {
  return (
    <section
      id="services"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div style={{ position: "absolute", top: "10%", left: "-200px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(31,119,246,0.06)", filter: "blur(100px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-200px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(218,78,36,0.06)", filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: "660px", marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid #191919",
            borderRadius: "999px",
            padding: "6px 16px",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#999",
            background: "#0f0f0f",
            fontFamily: "'General Sans','Inter',sans-serif",
            marginBottom: "20px",
          }}>
            What We Do
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
            fontWeight: 500,
            color: "#fff",
            fontFamily: "'General Sans','Inter',sans-serif",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}>
            Integrated capabilities for ambitious organizations
          </h2>
          <p style={{
            fontSize: "18px",
            lineHeight: 1.65,
            color: "#999",
            fontFamily: "'General Sans','Inter',sans-serif",
          }}>
            We combine strategic clarity with technical depth to help enterprises transform confidently at scale.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            gridAutoRows: "minmax(260px, auto)",
          }}
          className="capabilities-grid"
        >
          {capabilities.map((capability, index) => {
            const isWide = [0, 3, 4].includes(index);
            const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];

            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                style={{ gridColumn: isWide ? "span 2" : "span 1" }}
                className={isWide ? "card-wide" : ""}
              >
                <TiltCard perspective={1200} className="h-full">
                  <article
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "16px",
                      border: "1px solid #191919",
                      background: "#0a0a0a",
                      padding: "36px",
                      minHeight: "260px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                      boxShadow: "rgba(0,0,0,0.17) 0px 2px 12px 0px",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = accent.color + "55";
                      el.style.boxShadow = `0 0 32px ${accent.glow}, rgba(0,0,0,0.3) 0px 8px 24px`;
                      el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "#191919";
                      el.style.boxShadow = "rgba(0,0,0,0.17) 0px 2px 12px 0px";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Subtle mesh glow */}
                    <div style={{
                      position: "absolute",
                      top: "-60px",
                      right: "-60px",
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      background: accent.glow,
                      filter: "blur(60px)",
                      opacity: 0.7,
                      pointerEvents: "none",
                    }} />

                    {/* Top row: icon badge */}
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: accent.glow,
                      border: `1px solid ${accent.color}33`,
                      color: accent.color,
                      marginBottom: "auto",
                    }}>
                      {ICONS[index % ICONS.length]}
                    </div>

                    {/* Content */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <h3 style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#fff",
                        fontFamily: "'General Sans','Inter',sans-serif",
                        marginBottom: "10px",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                      }}>
                        {capability.title}
                      </h3>
                      <p style={{
                        fontSize: "15px",
                        lineHeight: 1.6,
                        color: "#999",
                        fontFamily: "'General Sans','Inter',sans-serif",
                      }}>
                        {capability.description}
                      </p>
                    </div>

                    {/* Corner arrow */}
                    <div style={{
                      position: "absolute",
                      top: "28px",
                      right: "28px",
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid #191919",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#555",
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .capabilities-grid { grid-template-columns: 1fr 1fr !important; }
          .card-wide { grid-column: span 2 !important; }
        }
        @media (max-width: 640px) {
          .capabilities-grid { grid-template-columns: 1fr !important; }
          .card-wide { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
