"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projectCategories } from "@/data/projects";

// Curate 3 projects to show on the main homepage
const FEATURED_PROJECTS = [
  {
    ...projectCategories[0].projects[0], // OmniCore ERP
    category: "Custom Software",
  },
  {
    ...projectCategories[1].projects[0], // Nexus E-Commerce
    category: "Web Ecosystems",
  },
  {
    ...projectCategories[2].projects[0], // Aura Lifestyle App
    category: "Mobile Apps",
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
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
          top: "20%",
          left: "-100px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(45, 91, 255, 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          bottom: "10%",
          right: "-150px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(148, 209, 255, 0.05) 0%, transparent 70%)",
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
            Portfolio
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
            Engineering digital solutions that deliver impact
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "var(--color-text-muted)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Explore our curated selection of recent work delivering engineering excellence across mobile, web, and custom platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "56px",
          }}
          className="portfolio-grid"
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <article
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "28px",
                  border: "1px solid rgba(207, 231, 255, 0.05)",
                  background: "#10131c",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  boxShadow: "var(--shadow-chromatic-4)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="portfolio-card"
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(45, 91, 255, 0.25)";
                  el.style.boxShadow = "var(--shadow-card-elevated), 0 0 30px rgba(45, 91, 255, 0.06)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(207, 231, 255, 0.05)";
                  el.style.boxShadow = "var(--shadow-chromatic-4)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Image Container */}
                <div style={{ position: "relative", height: "220px", width: "100%", overflow: "hidden", background: "rgba(255,255,255,0.02)" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    }}
                    className="portfolio-card-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, #10131c 5%, rgba(16, 19, 28, 0.4) 60%, transparent 100%)",
                    }}
                  />
                  
                  {/* Top Right Arrow Indicator */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.4)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      position: "absolute",
                      top: "24px",
                      right: "24px",
                      transition: "stroke 0.3s ease, transform 0.3s ease",
                    }}
                    className="portfolio-arrow"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>

                {/* Content */}
                <div style={{ padding: "32px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "-20px", position: "relative", zIndex: 10 }}>
                  <div>
                    {/* Eyebrow / Client and Category */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-primary)" }}>
                        {project.client}
                      </span>
                      <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
                      <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(255, 255, 255, 0.4)" }}>
                        {project.category}
                      </span>
                    </div>

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
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.55,
                        color: "var(--color-text-muted)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* Center CTA Button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#10131c",
              color: "#ffffff",
              border: "1px solid rgba(207, 231, 255, 0.12)",
              borderRadius: "12px",
              padding: "16px 36px",
              fontSize: "15px",
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              boxShadow: "var(--shadow-chromatic-4)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--color-primary)";
              el.style.boxShadow = "0 0 20px rgba(148, 209, 255, 0.25)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(207, 231, 255, 0.12)";
              el.style.boxShadow = "var(--shadow-chromatic-4)";
              el.style.transform = "translateY(0)";
            }}
          >
            Explore Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "10px" }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        .portfolio-card:hover .portfolio-card-img {
          transform: scale(1.04) !important;
        }
        .portfolio-card:hover .portfolio-arrow {
          stroke: #94d1ff !important;
          transform: translate(3px, -3px) !important;
        }
        @media (max-width: 960px) {
          .portfolio-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
