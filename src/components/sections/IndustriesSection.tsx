"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/site";
import Image from "next/image";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

const INDUSTRY_IMAGES = [
  "/pexels-freestockpro-12960383.jpg",
  "/pexels-jakub-pabis-147246622-36169773.jpg",
  "/pexels-jplenio-1105379.jpg",
  "/pexels-werner-pfennig-6949525.jpg"
];

const GRADIENT_PALETTES = [
  { primary: "#4f46e5", secondary: "#818cf8", accent: "#c7d2fe" }, // Indigo
  { primary: "#0891b2", secondary: "#22d3ee", accent: "#cffafe" }, // Cyan
  { primary: "#0d9488", secondary: "#2dd4bf", accent: "#ccfbf1" }, // Teal
  { primary: "#7c3aed", secondary: "#a78bfa", accent: "#ddd6fe" }, // Purple
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.02) 0%, transparent 70%)",
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
            Industries
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
            Sector depth that drives meaningful outcomes
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "var(--color-text-muted)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Our cross-functional teams understand the realities of heavily regulated and rapidly evolving markets.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
          className="industries-grid"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex h-full w-full"
            >
              <BorderRotate
                animationMode="stop-rotate-on-hover"
                animationSpeed={5}
                gradientColors={GRADIENT_PALETTES[index % GRADIENT_PALETTES.length]}
                backgroundColor="#ffffff"
                borderWidth={1.5}
                borderRadius={20}
                className="h-full w-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <article
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "18px", // Slightly smaller than wrapper to fit inside border
                    minHeight: "320px",
                    height: "100%",
                    padding: "48px 36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    background: "#ffffff",
                  }}
                  className="group"
                >
                  <Image
                    src={INDUSTRY_IMAGES[index % INDUSTRY_IMAGES.length]}
                    alt={industry.name}
                    fill
                    className="industry-img"
                    style={{
                      objectFit: "cover",
                      opacity: 0.12,
                      transition: "transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s ease",
                    }}
                  />
                  {/* Light-theme gradient overlays */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #ffffff 15%, rgba(255,255,255,0.75) 60%, transparent 100%)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,23,42,0.02) 0%, transparent 60%)" }} />

                  <div style={{ position: "relative", zIndex: 10 }}>
                    <h3
                      style={{
                        fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                        fontWeight: 600,
                        color: "#101828",
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: "-0.6px",
                        marginBottom: "10px",
                      }}
                    >
                      {industry.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.6,
                        color: "var(--color-text-muted)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {industry.summary}
                    </p>
                  </div>
                </article>
              </BorderRotate>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .industry-img { transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s ease !important; }
        .group:hover .industry-img { transform: scale(1.04) !important; opacity: 0.22 !important; }
        @media (max-width: 768px) { .industries-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
