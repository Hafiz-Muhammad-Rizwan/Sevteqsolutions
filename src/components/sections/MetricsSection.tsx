"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/site";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover & Strategy",
    desc: "We align on objectives, map dependencies, and write technical blueprints.",
  },
  {
    num: "02",
    title: "Stunning Prototype",
    desc: "We design detailed UI/UX interfaces that are simple, elegant, and interactive.",
  },
  {
    num: "03",
    title: "High-Grade Coding",
    desc: "We write clean, modular, and typed code across web, mobile, and custom AI.",
  },
  {
    num: "04",
    title: "Deploy & Scale",
    desc: "We deploy on secure containerized AWS setups with GitLab automated CI/CD.",
  },
];

export function MetricsSection() {
  return (
    <section
      id="process-metrics"
      style={{
        position: "relative",
        width: "100%",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-bg)",
        padding: "100px 0",
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
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.01) 0%, transparent 80%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        
        {/* PART 1: Floating borderless metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "40px",
            marginBottom: "100px",
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
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(2.8rem, 4.5vw, 4rem)",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  color: "#101828", // Obsidian/Deep Charcoal
                  lineHeight: 1,
                  marginBottom: "8px",
                  letterSpacing: "-2px",
                }}
              >
                {item.value}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  fontFamily: "'Inter', sans-serif",
                  maxWidth: "180px",
                }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <hr style={{ border: 0, borderTop: "1px solid var(--color-border)", marginBottom: "80px" }} />

        {/* PART 2: Clean step-by-step line component (Process) */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 600, color: "#101828", letterSpacing: "-0.8px" }}>
              Our Delivery Process
            </h3>
            <p style={{ fontSize: "15px", color: "var(--color-text-muted)", marginTop: "8px" }}>
              How we take your product from concept to production-grade deployment
            </p>
          </div>

          {/* Steps Timeline Container */}
          <div 
            style={{ 
              position: "relative", 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "flex-start",
              gap: "24px",
            }}
            className="process-timeline-container"
          >
            {/* The horizontal connecting line */}
            <div 
              style={{ 
                position: "absolute", 
                top: "20px", 
                left: "40px", 
                right: "40px", 
                height: "1px", 
                background: "var(--color-border)", 
                zIndex: 0 
              }} 
              className="timeline-connecting-line"
            />

            {/* Signal dot travelling the line */}
            <motion.div
              animate={{ left: ["40px", "calc(100% - 40px)"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "19px",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#0F172A",
                boxShadow: "0 0 8px #0F172A",
                zIndex: 1
              }}
              className="timeline-pulse-dot"
            />

            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                style={{ 
                  flex: 1, 
                  position: "relative", 
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
                className="timeline-step-node"
              >
                {/* Step Circle Bubble */}
                <div 
                  style={{ 
                    width: "40px", 
                    height: "40px", 
                    borderRadius: "50%", 
                    background: "#ffffff", 
                    border: "1.5px solid var(--color-border)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "#101828",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    marginBottom: "20px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0F172A";
                    e.currentTarget.style.background = "#0F172A";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.color = "#101828";
                  }}
                >
                  {step.num}
                </div>

                {/* Title */}
                <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#101828", marginBottom: "8px" }}>
                  {step.title}
                </h4>

                {/* Description */}
                <p style={{ fontSize: "13px", color: "var(--color-text-muted)", lineHeight: 1.5, maxWidth: "220px" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) { 
          .metrics-grid { grid-template-columns: repeat(2,1fr) !important; gap: 30px !important; } 
        }
        @media (max-width: 768px) {
          .process-timeline-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 40px !important;
            padding-left: 20px;
          }
          .timeline-connecting-line {
            top: 20px !important;
            left: 39px !important;
            bottom: 20px !important;
            width: 1px !important;
            height: auto !important;
          }
          .timeline-step-node {
            flex-direction: row !important;
            text-align: left !important;
            align-items: flex-start !important;
            gap: 20px;
          }
          .timeline-step-node div {
            margin-bottom: 0 !important;
            flex-shrink: 0;
          }
          .timeline-pulse-dot {
            display: none !important;
          }
        }
        @media (max-width: 480px) { 
          .metrics-grid { grid-template-columns: 1fr !important; } 
        }
      `}</style>
    </section>
  );
}
