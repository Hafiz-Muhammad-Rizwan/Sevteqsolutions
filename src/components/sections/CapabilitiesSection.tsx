"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/site";
import { TiltCard } from "@/components/animations/TiltCard";

// Beautiful custom dual SVGs for the Landio-style capsule badges
// Beautiful custom dual SVGs for the four core pillars
const DOUBLE_ICONS = [
  // 1. Native & Cross-Platform Mobile Development: Smartphone | Layers
  <div key="mobile" className="flex items-center gap-3 px-3 py-1.5">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#94d1ff]">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
    <div className="w-[1px] h-4 bg-white/10" />
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#b8c7d9]">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polygon points="2 17 12 22 22 17" />
      <polygon points="2 12 12 17 22 12" />
    </svg>
  </div>,

  // 2. Full-Stack Web Ecosystems: Globe | Server
  <div key="web" className="flex items-center gap-3 px-3 py-1.5">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#94d1ff]">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
    <div className="w-[1px] h-4 bg-white/10" />
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#b8c7d9]">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  </div>,

  // 3. Autonomous AI Agents & Automation: Robot Face | Sparkles
  <div key="ai" className="flex items-center gap-3 px-3 py-1.5">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#94d1ff]">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="8" cy="16" r="1.5" />
      <circle cx="16" cy="16" r="1.5" />
      <path d="M12 6v5" />
      <path d="M8 6h8" />
    </svg>
    <div className="w-[1px] h-4 bg-white/10" />
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#b8c7d9]">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  </div>,

  // 4. Cloud Architecture & DevOps Infrastructure: Cloud | Terminal
  <div key="devops" className="flex items-center gap-3 px-3 py-1.5">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#94d1ff]">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
    <div className="w-[1px] h-4 bg-white/10" />
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#b8c7d9]">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  </div>,
];

export function CapabilitiesSection() {
  return (
    <section
      id="services"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "#04070d",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div
        className="glow-orb"
        style={{
          top: "15%",
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
          left: "-150px",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(148, 209, 255, 0.06) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        {/* Section Heading */}
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
            Services
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
            Integrated capabilities for ambitious organizations
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "var(--color-text-muted)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            We combine strategic clarity with technical depth to help enterprises transform confidently at scale.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="capabilities-grid"
        >
          {capabilities.map((capability, index) => {
            const bentoClass = `bento-box-${index + 1}`;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={bentoClass}
              >
                <TiltCard perspective={1500} className="h-full">
                  <article
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "20px",
                      border: "1px solid rgba(207, 231, 255, 0.05)",
                      background: "#10131c",
                      padding: "48px 32px",
                      minHeight: "310px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                      boxShadow: "var(--shadow-chromatic-4)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(148, 209, 255, 0.25)";
                      el.style.boxShadow = "var(--shadow-card-elevated), 0 0 25px rgba(148, 209, 255, 0.08)";
                      el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(207, 231, 255, 0.05)";
                      el.style.boxShadow = "var(--shadow-chromatic-4)";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Top capsule badge with double icons */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "100px",
                        background: "rgba(4, 7, 13, 0.6)",
                        border: "1px solid rgba(207, 231, 255, 0.08)",
                        marginBottom: "28px",
                      }}
                    >
                      {DOUBLE_ICONS[index % DOUBLE_ICONS.length]}
                    </div>

                    {/* Content */}
                    <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <h3
                        style={{
                          fontSize: "20px",
                          fontWeight: 500,
                          color: "#ffffff",
                          fontFamily: "'Inter', sans-serif",
                          marginBottom: "12px",
                          lineHeight: 1.3,
                          letterSpacing: "-0.5px",
                        }}
                      >
                        {capability.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14.5px",
                          lineHeight: 1.6,
                          color: "var(--color-text-muted)",
                          fontFamily: "'Inter', sans-serif",
                          maxWidth: "280px",
                        }}
                      >
                        {capability.description}
                      </p>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .bento-box-1 {
          grid-column: span 2;
        }
        .bento-box-2 {
          grid-column: span 1;
        }
        .bento-box-3 {
          grid-column: span 1;
        }
        .bento-box-4 {
          grid-column: span 2;
        }
        @media (max-width: 960px) {
          .capabilities-grid { grid-template-columns: 1fr 1fr !important; }
          .bento-box-1 {
            grid-column: span 2;
          }
          .bento-box-2 {
            grid-column: span 1;
          }
          .bento-box-3 {
            grid-column: span 1;
          }
          .bento-box-4 {
            grid-column: span 2;
          }
        }
        @media (max-width: 640px) {
          .capabilities-grid { grid-template-columns: 1fr !important; }
          .bento-box-1, .bento-box-2, .bento-box-3, .bento-box-4 {
            grid-column: span 1 !important;
          }
          article { padding: 40px 24px !important; min-height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
