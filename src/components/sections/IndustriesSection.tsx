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
        background: "#04070d",
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
            Industries
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
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
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
                    borderRadius: "20px",
                    border: "1px solid rgba(207, 231, 255, 0.05)",
                    minHeight: "340px",
                    height: "100%",
                    padding: "48px 36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                    transition: "border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
                    boxShadow: "var(--shadow-chromatic-4)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(148, 209, 255, 0.25)";
                    el.style.boxShadow = "var(--shadow-card-elevated), 0 0 20px rgba(148, 209, 255, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(207, 231, 255, 0.05)";
                    el.style.boxShadow = "var(--shadow-chromatic-4)";
                  }}
                >
                  <Image
                    src={INDUSTRY_IMAGES[index % INDUSTRY_IMAGES.length]}
                    alt={industry.name}
                    fill
                    className="industry-img"
                    style={{
                      objectFit: "cover",
                      opacity: 0.3,
                      transition: "transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s ease",
                    }}
                  />
                  {/* Gradient overlays */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #04070d 10%, rgba(4,7,13,0.6) 60%, transparent 100%)" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(148,209,255,0.08) 0%, transparent 60%)" }} />

                  <div style={{ position: "relative", zIndex: 10 }}>
                    <h3
                      style={{
                        fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                        fontWeight: 500,
                        color: "#ffffff",
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
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .industry-img { transition: transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.35s ease !important; }
        article:hover .industry-img { transform: scale(1.05) !important; opacity: 0.45 !important; }
        @media (max-width: 768px) { .industries-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
