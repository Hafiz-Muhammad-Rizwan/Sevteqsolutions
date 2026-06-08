"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/site";

export function MetricsSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        borderTop: "1px solid #191919",
        borderBottom: "1px solid #191919",
        background: "#000000",
        padding: "80px 0",
        overflow: "hidden",
      }}
    >
      {/* Subtle horizontal accent line */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "40%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, #1f77f6, transparent)",
        opacity: 0.6,
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
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
                  background: "#0a0a0a",
                  border: "1px solid #191919",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  textAlign: "center",
                  cursor: "default",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(31,119,246,0.4)";
                  el.style.boxShadow = "0 0 28px rgba(31,119,246,0.15)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#191919";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                    fontWeight: 500,
                    fontFamily: "'General Sans','Inter',sans-serif",
                    color: "#1f77f6",
                    lineHeight: 1,
                    marginBottom: "12px",
                    letterSpacing: "-0.02em",
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
                    color: "#555",
                    fontFamily: "'General Sans','Inter',sans-serif",
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
