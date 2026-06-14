"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/site";
import { SplineScene } from "@/components/ui/splite";
import { ArrowRight, Smartphone, Sparkles, Globe, Server, Cloud, Terminal, Cpu } from "lucide-react";

// Beautiful custom dual icons for the four core pillars in light theme
const DOUBLE_ICONS = [
  // 1. Native & Cross-Platform Mobile Development
  <div key="mobile" className="flex items-center gap-3 px-3 py-1.5">
    <Smartphone size={18} className="text-[#2563eb]" />
    <div className="w-[1px] h-4 bg-gray-200" />
    <Server size={18} className="text-[#64748b]" />
  </div>,

  // 2. Full-Stack Web Ecosystems
  <div key="web" className="flex items-center gap-3 px-3 py-1.5">
    <Globe size={18} className="text-[#0d9488]" />
    <div className="w-[1px] h-4 bg-gray-200" />
    <Terminal size={18} className="text-[#64748b]" />
  </div>,

  // 3. Autonomous AI Agents & Automation
  <div key="ai" className="flex items-center gap-3 px-3 py-1.5">
    <Cpu size={18} className="text-[#9333ea]" />
    <div className="w-[1px] h-4 bg-gray-200" />
    <Sparkles size={18} className="text-[#64748b]" />
  </div>,

  // 4. Cloud Architecture & DevOps Infrastructure
  <div key="devops" className="flex items-center gap-3 px-3 py-1.5">
    <Cloud size={18} className="text-[#ea580c]" />
    <div className="w-[1px] h-4 bg-gray-200" />
    <Terminal size={18} className="text-[#64748b]" />
  </div>,
];

export function CapabilitiesSection() {
  // We'll separate the capabilities: 
  // Mobile (0), Web (1), DevOps (3) will be span-1 cards
  // AI Agents & Automation (2) will be a wide span-3 card with the 3D Spline scene
  const caps = [
    { ...capabilities[0], index: 0 },
    { ...capabilities[1], index: 1 },
    { ...capabilities[3], index: 3 },
  ];
  const aiCapability = { ...capabilities[2], index: 2 };

  return (
    <section
      id="services"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "var(--color-bg)",
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
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.02) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          bottom: "10%",
          left: "-150px",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.02) 0%, transparent 70%)",
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
              border: "1px solid var(--color-border)",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-text-secondary)",
              background: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "20px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.02)"
            }}
          >
            Services
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
              fontWeight: 600,
              color: "#101828",
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

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="capabilities-grid"
        >
          {/* Row 1: Mobile, Web, DevOps (span 1 each) */}
          {caps.map((capability) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: capability.index * 0.08 }}
              className="col-span-1"
            >
              <article
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "20px",
                  border: "1px solid var(--color-border)",
                  background: "#ffffff",
                  padding: "48px 32px",
                  minHeight: "340px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  boxShadow: "0 4px 12px rgba(16, 24, 40, 0.03)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border-accent)";
                  el.style.boxShadow = "var(--shadow-card-elevated)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border)";
                  el.style.boxShadow = "0 4px 12px rgba(16, 24, 40, 0.03)";
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
                    background: "#f9fafb",
                    border: "1px solid var(--color-border)",
                    marginBottom: "28px",
                    width: "fit-content",
                  }}
                >
                  {DOUBLE_ICONS[capability.index]}
                </div>

                {/* Content */}
                <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#101828",
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
                    }}
                  >
                    {capability.description}
                  </p>
                </div>
              </article>
            </motion.div>
          ))}

          {/* Row 2: AI Agents & Automation (span 3) with Spline 3D Scene */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-3"
            style={{ gridColumn: "span 3" }}
          >
            <article
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                border: "1px solid var(--color-border)",
                background: "#ffffff",
                padding: "48px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "40px",
                minHeight: "440px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                boxShadow: "0 4px 12px rgba(16, 24, 40, 0.03)",
              }}
              className="ai-bento-card"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border-accent)";
                el.style.boxShadow = "var(--shadow-card-elevated)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border)";
                el.style.boxShadow = "0 4px 12px rgba(16, 24, 40, 0.03)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Left side content */}
              <div style={{ flex: 1.2, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                {/* Top capsule badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "100px",
                    background: "#f9fafb",
                    border: "1px solid var(--color-border)",
                    marginBottom: "28px",
                    width: "fit-content",
                  }}
                >
                  {DOUBLE_ICONS[aiCapability.index]}
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#101828",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "16px",
                    lineHeight: 1.3,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {aiCapability.title}
                </h3>
                <p
                  style={{
                    fontSize: "15.5px",
                    lineHeight: 1.65,
                    color: "var(--color-text-muted)",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "24px",
                    maxWidth: "500px"
                  }}
                >
                  {aiCapability.description}
                </p>

                <div className="flex gap-4 items-center">
                  <span className="text-sm font-semibold text-[#0F172A] flex items-center gap-1">
                    Explore Intelligent Automation <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              {/* Right side: 3D Robot Spline Scene (Blending into white canvas) */}
              <div 
                style={{ 
                  flex: 0.8, 
                  height: "360px", 
                  position: "relative",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "#ffffff",
                }}
                className="ai-spline-container"
              >
                <div style={{ position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none", background: "linear-gradient(to right, #ffffff 0%, transparent 10%, transparent 90%, #ffffff 100%), linear-gradient(to bottom, #ffffff 0%, transparent 10%, transparent 90%, #ffffff 100%)" }} />
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </article>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .capabilities-grid { grid-template-columns: 1fr !important; }
          .col-span-3, .col-span-1 {
            grid-column: span 1 !important;
          }
          .ai-bento-card {
            flex-direction: column !important;
            padding: 32px !important;
            align-items: stretch !important;
          }
          .ai-spline-container {
            height: 380px !important;
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
}
