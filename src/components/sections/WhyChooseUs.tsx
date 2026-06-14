"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

export function WhyChooseUs() {
  return (
    <section
      id="process"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      {/* Dynamic ambient background glows */}
      <div
        className="glow-orb"
        style={{
          top: "10%",
          left: "20%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.02) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          bottom: "10%",
          right: "15%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(15, 23, 42, 0.02) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        {/* Title Block */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 600,
              color: "#101828",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-1.6px",
              marginBottom: "16px",
            }}
          >
            Why Choose <span className="font-serif-italic">Us?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "18px",
              color: "var(--color-text-muted)",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "580px",
              margin: "0 auto",
            }}
          >
            Everything you need to automate, optimize, and scale
          </motion.p>
        </div>

        {/* 3 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="why-choose-us-grid"
        >
          {/* Card 1: Built to Last & Scale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex h-full w-full"
          >
            <GlowCard
              glowColor="blue"
              customSize={true}
              className="w-full flex flex-col justify-between items-center text-center p-10 min-h-[440px] shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              {/* Animation Area */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Radar Dial */}
                <div
                  style={{
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    border: "1px solid rgba(15, 23, 42, 0.06)",
                    background: "rgba(249, 250, 251, 0.8)",
                    position: "relative",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)",
                  }}
                >
                  {/* Rotating Radar Hand */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "55px",
                      height: "55px",
                      transformOrigin: "top left",
                      background: "linear-gradient(50deg, rgba(15, 23, 42, 0.08) 0%, transparent 60%)",
                      borderTopLeftRadius: "100%",
                      zIndex: 2,
                    }}
                  />
                  {/* Dial Center */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#0F172A",
                      zIndex: 3,
                    }}
                  />
                  {/* Muted radar dots fading in and out */}
                  <motion.div
                    animate={{ opacity: [0.2, 0.9, 0.2] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    style={{
                      position: "absolute",
                      top: "25%",
                      left: "30%",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#0F172A",
                    }}
                  />
                  <motion.div
                    animate={{ opacity: [0.1, 0.8, 0.1] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: 1.2 }}
                    style={{
                      position: "absolute",
                      bottom: "30%",
                      right: "25%",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#0F172A",
                    }}
                  />
                  {/* Outer radar ring */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-10px",
                      borderRadius: "50%",
                      border: "1px dashed rgba(15, 23, 42, 0.05)",
                    }}
                  />
                </div>
              </div>

              {/* Typography */}
              <div style={{ marginTop: "24px" }}>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#101828",
                    marginBottom: "12px",
                    letterSpacing: "-0.5px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Built to Last & Scale
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                    maxWidth: "280px",
                    margin: "0 auto",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  We write clean, high-grade code that loads instantly, never crashes, and grows seamlessly with your business.
                </p>
              </div>
            </GlowCard>
          </motion.div>

          {/* Card 2: Stunning, Simple UI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex h-full w-full"
          >
            <GlowCard
              glowColor="orange"
              customSize={true}
              className="w-full flex flex-col justify-between items-center text-center p-10 min-h-[440px] shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              {/* Animation Area */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: "12px",
                  paddingBottom: "25px",
                }}
              >
                {/* Animated Chart Bars */}
                {[
                  { baseHeight: 35, animHeights: [35, 75, 45, 90, 35], delay: 0 },
                  { baseHeight: 65, animHeights: [65, 40, 85, 55, 65], delay: 0.3 },
                  { baseHeight: 50, animHeights: [50, 95, 30, 75, 50], delay: 0.6 },
                  { baseHeight: 80, animHeights: [80, 50, 90, 40, 80], delay: 0.9 },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: bar.animHeights }}
                    transition={{
                      repeat: Infinity,
                      duration: 4.5,
                      ease: "easeInOut",
                      delay: bar.delay,
                    }}
                    style={{
                      width: "20px",
                      height: `${bar.baseHeight}px`,
                      borderRadius: "6px",
                      background: "linear-gradient(to top, rgba(15, 23, 42, 0.01) 0%, rgba(15, 23, 42, 0.08) 40%, rgba(15, 23, 42, 0.8) 100%)",
                      boxShadow: "0 4px 10px rgba(15, 23, 42, 0.04)",
                    }}
                  />
                ))}
              </div>

              {/* Typography */}
              <div style={{ marginTop: "24px" }}>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#101828",
                    marginBottom: "12px",
                    letterSpacing: "-0.5px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Stunning, Simple UI
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                    maxWidth: "280px",
                    margin: "0 auto",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  We design software that is elegant, clean, and extremely easy to use, making complex actions feel completely effortless.
                </p>
              </div>
            </GlowCard>
          </motion.div>

          {/* Card 3: Smart AI & Automation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex h-full w-full"
          >
            <GlowCard
              glowColor="purple"
              customSize={true}
              className="w-full flex flex-col justify-between items-center text-center p-10 min-h-[440px] shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              {/* Animation Area */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* SVG Connector Animation */}
                <svg width="150" height="150" viewBox="0 0 150 150" style={{ overflow: "visible" }}>
                  {/* Connecting Lines */}
                  <line x1="75" y1="75" x2="35" y2="45" stroke="rgba(15, 23, 42, 0.06)" strokeWidth="1.5" />
                  <line x1="75" y1="75" x2="115" y2="45" stroke="rgba(15, 23, 42, 0.06)" strokeWidth="1.5" />
                  <line x1="75" y1="75" x2="25" y2="85" stroke="rgba(15, 23, 42, 0.06)" strokeWidth="1.5" />
                  <line x1="75" y1="75" x2="125" y2="85" stroke="rgba(15, 23, 42, 0.06)" strokeWidth="1.5" />
                  <line x1="75" y1="75" x2="50" y2="125" stroke="rgba(15, 23, 42, 0.06)" strokeWidth="1.5" />
                  <line x1="75" y1="75" x2="100" y2="125" stroke="rgba(15, 23, 42, 0.06)" strokeWidth="1.5" />

                  {/* Pulsing signal dots */}
                  {[
                    { cx1: 35, cy1: 45, cx2: 75, cy2: 75, delay: 0 },
                    { cx1: 115, cy1: 45, cx2: 75, cy2: 75, delay: 0.6 },
                    { cx1: 25, cy1: 85, cx2: 75, cy2: 75, delay: 1.2 },
                    { cx1: 125, cy1: 85, cx2: 75, cy2: 75, delay: 0.3 },
                    { cx1: 50, cy1: 125, cx2: 75, cy2: 75, delay: 0.9 },
                    { cx1: 100, cy1: 125, cx2: 75, cy2: 75, delay: 1.5 },
                  ].map((pt, i) => (
                    <motion.circle
                      key={i}
                      r="3"
                      fill="#0F172A"
                      animate={{
                        cx: [pt.cx1, pt.cx2],
                        cy: [pt.cy1, pt.cy2],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.2,
                        ease: "easeOut",
                        delay: pt.delay,
                      }}
                    />
                  ))}

                  {/* Outer Nodes */}
                  <circle cx="35" cy="45" r="5" fill="#ffffff" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.5" />
                  <circle cx="115" cy="45" r="5" fill="#ffffff" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.5" />
                  <circle cx="25" cy="85" r="5" fill="#ffffff" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.5" />
                  <circle cx="125" cy="85" r="5" fill="#ffffff" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.5" />
                  <circle cx="50" cy="125" r="5" fill="#ffffff" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.5" />
                  <circle cx="100" cy="125" r="5" fill="#ffffff" stroke="rgba(15, 23, 42, 0.15)" strokeWidth="1.5" />

                  {/* Central Node */}
                  <g transform="translate(60, 60)">
                    <circle cx="15" cy="15" r="14" fill="#ffffff" stroke="#0F172A" strokeWidth="2" />
                    <path
                      d="M 12 7 A 9 9 0 0 1 22 21 A 9 9 0 1 0 12 7 Z"
                      fill="#0F172A"
                      opacity="0.85"
                    />
                    <motion.circle
                      cx="15"
                      cy="15"
                      r="14"
                      fill="none"
                      stroke="#0F172A"
                      strokeWidth="1"
                      animate={{ r: [14, 24], opacity: [0.4, 0] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
                    />
                  </g>
                </svg>
              </div>

              {/* Typography */}
              <div style={{ marginTop: "24px" }}>
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#101828",
                    marginBottom: "12px",
                    letterSpacing: "-0.5px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Smart AI & Automation
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                    maxWidth: "280px",
                    margin: "0 auto",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  We connect your favorite tools and build custom AI assistants to automate repetitive manual tasks, saving your team hours of work.
                </p>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .why-choose-us-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
