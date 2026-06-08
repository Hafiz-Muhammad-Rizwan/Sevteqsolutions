"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/site";

export function MetricsSection() {
  return (
    <section
      id="pricing"
      style={{
        position: "relative",
        width: "100%",
        borderTop: "1px solid rgba(207, 231, 255, 0.06)",
        borderBottom: "1px solid rgba(207, 231, 255, 0.06)",
        background: "#04070d",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      {/* Dynamic glow orb */}
      <div
        className="glow-orb"
        style={{
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "200px",
          background: "radial-gradient(circle, rgba(148, 209, 255, 0.08) 0%, transparent 80%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
          className="metrics-grid"
        >
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                style={{
                  background: "#10131c",
                  border: "1px solid rgba(207, 231, 255, 0.05)",
                  borderRadius: "20px",
                  padding: "36px 32px",
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  boxShadow: "var(--shadow-chromatic-4)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(148, 209, 255, 0.25)";
                  el.style.boxShadow = "var(--shadow-card-elevated), 0 0 20px rgba(148, 209, 255, 0.05)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(207, 231, 255, 0.05)";
                  el.style.boxShadow = "var(--shadow-chromatic-4)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                    fontWeight: 500,
                    fontFamily: "'Inter', sans-serif",
                    color: "#94d1ff",
                    lineHeight: 1,
                    marginBottom: "12px",
                    letterSpacing: "-1.6px",
                  }}
                >
                  {item.value}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#b8c7d9",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .metrics-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .metrics-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
