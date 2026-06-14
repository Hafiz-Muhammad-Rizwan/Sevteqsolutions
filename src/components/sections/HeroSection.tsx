"use client";

import { motion } from "framer-motion";
import { Star, Smartphone, Activity, Terminal, Shield, ArrowRight } from "lucide-react";

export function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 72px)",
        width: "100%",
        overflow: "hidden",
        background: "var(--color-bg)",
        display: "flex",
        alignItems: "center",
        padding: "80px 0",
      }}
    >
      {/* Background abstract elements */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", width: "100%", position: "relative", zIndex: 10 }}>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1.1fr 0.9fr", 
            gap: "60px", 
            alignItems: "center" 
          }}
          className="hero-grid"
        >
          {/* Left Side: Bold text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow badge */}
            <div style={{
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
              color: "#475467",
              background: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "28px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.02)"
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0F172A", display: "inline-block" }} />
              GLOBAL TECHNOLOGY PARTNERSHIP
            </div>

            <h1 style={{
              fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
              fontWeight: 600,
              lineHeight: 1.12,
              color: "#101828",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "24px",
              letterSpacing: "-0.03em",
            }}>
              Engineering the Future of Mobile, Web, and Autonomous AI.
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
              lineHeight: 1.65,
              color: "#344054",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              marginBottom: "40px",
              maxWidth: "600px",
            }}>
              We build high-performance mobile and web ecosystems, deploy intelligent AI automation agents, and architect bulletproof DevOps infrastructure that scales seamlessly.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#0F172A",
                  color: "#ffffff",
                  borderRadius: "10px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 12px rgba(15, 23, 42, 0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#1e293b";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1.5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#0F172A";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Talk to Us
                <ArrowRight style={{ marginLeft: "8px" }} size={16} />
              </a>
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, "#services")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff",
                  color: "#344054",
                  border: "1px solid var(--color-border)",
                  borderRadius: "10px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.02)"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#f9fafb";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1.5px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Our Services
              </a>
            </div>
          </motion.div>

          {/* Right Side: Interactive Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ position: "relative", width: "100%" }}
            className="hero-mockup-container"
          >
            {/* Main Web Mockup Frame */}
            <div
              style={{
                width: "100%",
                background: "#ffffff",
                borderRadius: "16px",
                border: "1px solid var(--color-border)",
                boxShadow: "0 20px 40px -15px rgba(16, 24, 40, 0.08), 0 1px 3px rgba(16, 24, 40, 0.02)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "380px",
              }}
            >
              {/* Mockup Header */}
              <div
                style={{
                  height: "40px",
                  background: "#f9fafb",
                  borderBottom: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  gap: "6px",
                }}
              >
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f87171" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#fbbf24" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#34d399" }} />
                <div
                  style={{
                    marginLeft: "20px",
                    background: "#ffffff",
                    borderRadius: "6px",
                    border: "1px solid var(--color-border)",
                    fontSize: "11px",
                    color: "#667085",
                    padding: "2px 30px",
                    fontFamily: "monospace",
                  }}
                >
                  sevteq.com/console
                </div>
              </div>

              {/* Mockup Content */}
              <div 
                className="hero-mockup-content"
                style={{ flexGrow: 1, display: "grid", gridTemplateColumns: "60px 1fr", height: "calc(100% - 40px)" }}
              >
                {/* Mockup Sidebar */}
                <div
                  className="hero-mockup-sidebar"
                  style={{
                    background: "#f9fafb",
                    borderRight: "1px solid var(--color-border)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "20px",
                    gap: "20px",
                  }}
                >
                  <Terminal size={18} className="text-[#0F172A]" />
                  <Smartphone size={18} className="text-[#98a2b3]" />
                  <Activity size={18} className="text-[#98a2b3]" />
                  <Shield size={18} className="text-[#98a2b3]" />
                </div>

                {/* Mockup Main Panel */}
                <div 
                  className="hero-mockup-panel"
                  style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px", overflow: "hidden" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#101828" }}>Platform Health</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "#12b76a", background: "#ecfdf3", padding: "2px 8px", borderRadius: "99px", fontWeight: 500 }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#12b76a", display: "inline-block" }} />
                      Operational
                    </span>
                  </div>

                  {/* Micro stats */}
                  <div 
                    className="hero-stats-grid"
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
                  >
                    <div style={{ border: "1px solid var(--color-border)", borderRadius: "10px", padding: "12px", background: "#f9fafb" }}>
                      <div style={{ fontSize: "11px", color: "#667085", marginBottom: "4px" }}>Web Performance</div>
                      <div style={{ fontSize: "20px", fontWeight: 600, color: "#101828" }}>99.8%</div>
                    </div>
                    <div style={{ border: "1px solid var(--color-border)", borderRadius: "10px", padding: "12px", background: "#f9fafb" }}>
                      <div style={{ fontSize: "11px", color: "#667085", marginBottom: "4px" }}>Mobile API Response</div>
                      <div style={{ fontSize: "20px", fontWeight: 600, color: "#101828" }}>124 ms</div>
                    </div>
                  </div>

                  {/* Nice chart graphic */}
                  <div 
                    className="hero-chart-container"
                    style={{ border: "1px solid var(--color-border)", borderRadius: "10px", padding: "16px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <span style={{ fontSize: "12px", fontWeight: 500, color: "#344054" }}>Monthly Deployments</span>
                      <span style={{ fontSize: "10px", color: "#667085" }}>Jan - Jun</span>
                    </div>
                    {/* Simulated chart bars */}
                    <div 
                      className="hero-chart-bars-wrapper"
                      style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-around", flexGrow: 1, gap: "10px", height: "80px", paddingTop: "10px" }}
                    >
                      {[25, 45, 30, 75, 55, 90].map((h, i) => (
                        <div key={i} style={{ width: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="hero-chart-bar"
                            style={{
                              width: "24px",
                              background: "linear-gradient(to top, rgba(15, 23, 42, 0.01) 0%, rgba(15, 23, 42, 0.15) 100%)",
                              borderTop: "2px solid #0F172A",
                              borderRadius: "4px 4px 0 0",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Mobile App Mockup Frame (Aesthetic Wow factor) */}
            <motion.div
              initial={{ x: 50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-20px",
                width: "180px",
                height: "300px",
                background: "#ffffff",
                borderRadius: "24px",
                border: "4px solid #0f172a",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                zIndex: 20,
              }}
              className="hero-mobile-mockup"
            >
              {/* Notch */}
              <div
                style={{
                  width: "90px",
                  height: "15px",
                  background: "#0f172a",
                  alignSelf: "center",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  marginBottom: "12px",
                }}
              />
              
              {/* Screen Content */}
              <div style={{ flexGrow: 1, padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {/* Profile row */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#f2f4f7", border: "1px solid var(--color-border)" }} />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "9px", fontWeight: 600, color: "#101828" }}>Hi, User</span>
                    <span style={{ fontSize: "7px", color: "#667085" }}>App Connected</span>
                  </div>
                </div>

                {/* Graphic Card */}
                <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", borderRadius: "12px", padding: "10px", color: "#ffffff", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "8px", opacity: 0.8 }}>Syncing Data</span>
                  <div style={{ fontSize: "15px", fontWeight: 600 }}>Active</div>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" }}>
                    <div style={{ width: "70%", height: "100%", background: "#ffffff" }} />
                  </div>
                </div>

                {/* Menu list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", flexGrow: 1 }}>
                  {[1, 2, 3].map((val) => (
                    <div key={val} style={{ border: "1px solid var(--color-border)", borderRadius: "8px", padding: "6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "8px", fontWeight: 500, color: "#344054" }}>Service Node {val}</span>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#34d399" }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          .hero-grid div {
            margin: 0 auto;
          }
          .hero-mockup-container {
            max-width: 460px;
            margin-top: 20px;
          }
          .hero-mobile-mockup {
            display: none !important; /* Hide mobile overlay on smaller viewports */
          }
        }
        @media (max-width: 640px) {
          .hero-mockup-content {
            grid-template-columns: 1fr !important;
          }
          .hero-mockup-sidebar {
            display: none !important;
          }
          .hero-mockup-panel {
            padding: 16px !important;
            gap: 16px !important;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-mockup-panel {
            padding: 12px !important;
            gap: 12px !important;
          }
          .hero-stats-grid {
            gap: 8px !important;
          }
          .hero-chart-container {
            padding: 12px !important;
          }
          .hero-chart-bars-wrapper {
            gap: 6px !important;
          }
          .hero-chart-bar {
            width: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
