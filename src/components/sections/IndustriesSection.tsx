"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/site";
import Image from "next/image";
import { TiltCard } from "@/components/animations/TiltCard";

const INDUSTRY_IMAGES = [
  "/pexels-freestockpro-12960383.jpg",
  "/pexels-jakub-pabis-147246622-36169773.jpg",
  "/pexels-jplenio-1105379.jpg",
  "/pexels-werner-pfennig-6949525.jpg"
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "300px", borderRadius: "50%", background: "rgba(31,119,246,0.05)", filter: "blur(120px)", pointerEvents: "none" }} />

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
            Industries
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
            Sector depth that drives meaningful outcomes
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.65, color: "#999", fontFamily: "'General Sans','Inter',sans-serif" }}>
            Our cross-functional teams understand the realities of heavily regulated and rapidly evolving markets.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
          className="industries-grid"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard perspective={1500} className="h-full">
                <article
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "16px",
                    border: "1px solid #191919",
                    minHeight: "340px",
                    height: "100%",
                    padding: "36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    transition: "border-color 0.35s ease, transform 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(31,119,246,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#191919";
                  }}
                >
                  <Image
                    src={INDUSTRY_IMAGES[index % INDUSTRY_IMAGES.length]}
                    alt={industry.name}
                    fill
                    className="industry-img"
                    style={{
                      objectFit: "cover",
                      opacity: 0.45,
                      transition: "transform 0.7s ease, opacity 0.35s ease",
                    }}
                  />
                  {/* Gradient overlays */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 50%, transparent 100%)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(31,119,246,0.08) 0%, transparent 60%)" }} />

                  <div style={{ position: "relative", zIndex: 10 }}>
                    <h3 style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      fontWeight: 500,
                      color: "#fff",
                      fontFamily: "'General Sans','Inter',sans-serif",
                      letterSpacing: "-0.01em",
                      marginBottom: "10px",
                    }}>
                      {industry.name}
                    </h3>
                    <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,255,255,0.75)", fontFamily: "'General Sans','Inter',sans-serif" }}>
                      {industry.summary}
                    </p>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .industry-img { transition: transform 0.7s ease, opacity 0.35s ease !important; }
        article:hover .industry-img { transform: scale(1.06) !important; opacity: 0.55 !important; }
        @media (max-width: 768px) { .industries-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
