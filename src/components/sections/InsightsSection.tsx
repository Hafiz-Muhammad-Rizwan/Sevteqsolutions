"use client";

import { motion } from "framer-motion";
import { insights } from "@/data/site";
import { TiltCard } from "@/components/animations/TiltCard";

const CATEGORY_COLORS: Record<string, string> = {
  "Thought Leadership": "#1f77f6",
  "Transformation": "#da4e24",
  "Cybersecurity": "#1f77f6",
};

export function InsightsSection() {
  return (
    <section
      id="insights"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "#000000",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        {/* Heading */}
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
            Insights
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
            Perspectives for digital and business leaders
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.65, color: "#999", fontFamily: "'General Sans','Inter',sans-serif" }}>
            Research, guidance, and strategic viewpoints from our experts on technology-enabled transformation.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}
          className="insights-grid"
        >
          {insights.map((insight, index) => {
            const accentColor = CATEGORY_COLORS[insight.category] ?? "#1f77f6";
            return (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <TiltCard perspective={1500}>
                  <article
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      minHeight: "320px",
                      borderRadius: "16px",
                      border: "1px solid #191919",
                      background: "#0a0a0a",
                      padding: "36px",
                      cursor: "pointer",
                      transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${accentColor}44`;
                      el.style.boxShadow = `0 0 28px ${accentColor}18`;
                      el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "#191919";
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Accent top bar */}
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: "36px",
                      right: "36px",
                      height: "2px",
                      background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                      opacity: 0.6,
                    }} />

                    {/* Glow orb */}
                    <div style={{
                      position: "absolute",
                      top: "-80px",
                      left: "-40px",
                      width: "180px",
                      height: "180px",
                      borderRadius: "50%",
                      background: `${accentColor}12`,
                      filter: "blur(50px)",
                      pointerEvents: "none",
                    }} />

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <p style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: accentColor,
                        fontFamily: "'General Sans','Inter',sans-serif",
                        marginBottom: "16px",
                      }}>
                        {insight.category}
                      </p>
                      <h3 style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        lineHeight: 1.35,
                        color: "#fff",
                        fontFamily: "'General Sans','Inter',sans-serif",
                        letterSpacing: "-0.01em",
                        marginBottom: "14px",
                      }}>
                        {insight.title}
                      </h3>
                      <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#999", fontFamily: "'General Sans','Inter',sans-serif" }}>
                        {insight.excerpt}
                      </p>
                    </div>

                    <button style={{
                      marginTop: "28px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.55)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'General Sans','Inter',sans-serif",
                      padding: 0,
                      transition: "color 0.2s ease",
                    }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                    >
                      Read insight
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </button>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .insights-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px) { .insights-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
