"use client";

import { motion } from "framer-motion";
import { insights } from "@/data/site";
import { TiltCard } from "@/components/animations/TiltCard";

const CATEGORY_COLORS: Record<string, string> = {
  "Thought Leadership": "#94d1ff",
  "Transformation": "#b8c7d9",
  "Cybersecurity": "#94d1ff",
};

export function InsightsSection() {
  return (
    <section
      id="insights"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "#04070d",
        overflow: "hidden",
      }}
    >
      {/* Background glow orb */}
      <div
        className="glow-orb"
        style={{
          bottom: "10%",
          right: "-100px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(148, 209, 255, 0.06) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: "660px", marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(207, 231, 255, 0.08)",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              background: "rgba(148, 209, 255, 0.08)",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "20px",
            }}
          >
            Insights
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
              fontWeight: 500,
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.15,
              letterSpacing: "-1.2px",
              marginBottom: "16px",
            }}
          >
            Perspectives for digital and business leaders
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "var(--color-text-muted)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Research, guidance, and strategic viewpoints from our experts on technology-enabled transformation.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
          className="insights-grid"
        >
          {insights.map((insight, index) => {
            const accentColor = CATEGORY_COLORS[insight.category] ?? "#94d1ff";
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
                      borderRadius: "20px",
                      border: "1px solid rgba(207, 231, 255, 0.05)",
                      background: "#10131c",
                      padding: "48px 32px",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                      boxShadow: "var(--shadow-chromatic-4)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(148, 209, 255, 0.25)";
                      el.style.boxShadow = "var(--shadow-card-elevated), 0 0 25px rgba(148, 209, 255, 0.05)";
                      el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(207, 231, 255, 0.05)";
                      el.style.boxShadow = "var(--shadow-chromatic-4)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Accent top bar */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "32px",
                        right: "32px",
                        height: "2px",
                        background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                        opacity: 0.5,
                      }}
                    />

                    {/* Glow orb inside card */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-80px",
                        left: "-40px",
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        background: "rgba(148, 209, 255, 0.05)",
                        filter: "blur(50px)",
                        pointerEvents: "none",
                      }}
                    />

                    <div style={{ position: "relative", zIndex: 1 }}>
                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: accentColor,
                          fontFamily: "'Inter', sans-serif",
                          marginBottom: "16px",
                        }}
                      >
                        {insight.category}
                      </p>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: 500,
                          lineHeight: 1.35,
                          color: "#ffffff",
                          fontFamily: "'Inter', sans-serif",
                          letterSpacing: "-0.5px",
                          marginBottom: "14px",
                        }}
                      >
                        {insight.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14.5px",
                          lineHeight: 1.6,
                          color: "var(--color-text-muted)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {insight.excerpt}
                      </p>
                    </div>

                    <button
                      style={{
                        marginTop: "28px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "rgba(255, 255, 255, 0.6)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Inter', sans-serif",
                        padding: 0,
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")}
                    >
                      Read insight
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#94d1ff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
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
