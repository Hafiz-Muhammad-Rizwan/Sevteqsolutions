"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projectCategories } from "@/data/projects";
import { BorderRotate } from "@/components/ui/animated-gradient-border";

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
        background: "var(--color-bg)",
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
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.02) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          bottom: "10%",
          right: "-150px",
          width: "500px",
          height: "500px",
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
            Portfolio
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
              className="flex h-full w-full"
            >
              <BorderRotate
                animationMode="stop-rotate-on-hover"
                animationSpeed={5}
                gradientColors={{
                  primary: "#4f46e5",
                  secondary: "#818cf8",
                  accent: "#c7d2fe"
                }}
                backgroundColor="#ffffff"
                borderWidth={1.5}
                borderRadius={28}
                className="h-full w-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <article
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "26px", // Slightly smaller than wrapper's 28px to fit inside border
                    background: "#ffffff",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="portfolio-card group"
                >
                  {/* Image Container */}
                  <div style={{ position: "relative", height: "220px", width: "100%", overflow: "hidden", background: "rgba(0,0,0,0.02)" }}>
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
                        background: "linear-gradient(to top, #ffffff 5%, rgba(255, 255, 255, 0.2) 60%, transparent 100%)",
                      }}
                    />
                    
                    {/* Top Right Arrow Indicator */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(0, 0, 0, 0.4)"
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
                        <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0F172A" }}>
                          {project.client}
                        </span>
                        <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(0,0,0,0.1)" }} />
                        <span style={{ fontSize: "11px", fontWeight: 500, color: "var(--color-text-muted)" }}>
                          {project.category}
                        </span>
                      </div>

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
              </BorderRotate>
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
              background: "#ffffff",
              color: "#344054",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
              padding: "16px 36px",
              fontSize: "15px",
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--color-border-accent)";
              el.style.background = "#f9fafb";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--color-border)";
              el.style.background = "#ffffff";
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
          stroke: #0F172A !important;
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
