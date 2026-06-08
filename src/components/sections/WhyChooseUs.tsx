"use client";

import { motion } from "framer-motion";

export function WhyChooseUs() {
  return (
    <section
      id="process"
      style={{
        position: "relative",
        width: "100%",
        padding: "100px 0",
        background: "#04070d",
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
          background: "radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          bottom: "10%",
          right: "15%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(148, 209, 255, 0.15) 0%, transparent 70%)",
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
              fontWeight: 500,
              color: "#ffffff",
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
          {/* Card 1: Real-Time Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="landio-card"
            style={{
              background: "#04070d",
              borderRadius: "32px",
              padding: "48px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              minHeight: "440px",
              justifyContent: "space-between",
            }}
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
                  border: "1px solid rgba(148, 209, 255, 0.1)",
                  background: "rgba(16, 19, 28, 0.4)",
                  position: "relative",
                  boxShadow: "rgba(207, 231, 255, 0.05) 0px 0px 1px 1px inset",
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
                    background: "linear-gradient(50deg, rgba(148, 209, 255, 0.4) 0%, transparent 60%)",
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
                    background: "var(--color-primary)",
                    boxShadow: "0 0 10px var(--color-primary)",
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
                    background: "var(--color-primary)",
                    boxShadow: "0 0 6px var(--color-primary)",
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
                    background: "var(--color-primary)",
                    boxShadow: "0 0 8px var(--color-primary)",
                  }}
                />
                {/* Outer radar ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-10px",
                    borderRadius: "50%",
                    border: "1px dashed rgba(148, 209, 255, 0.05)",
                  }}
                />
              </div>
            </div>

            {/* Typography */}
            <div style={{ marginTop: "24px" }}>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#ffffff",
                  marginBottom: "12px",
                  letterSpacing: "-0.5px",
                }}
              >
                Real-Time Intelligence
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  maxWidth: "280px",
                  margin: "0 auto",
                }}
              >
                Access accurate, real-time data to drive smarter decisions
              </p>
            </div>
          </motion.div>

          {/* Card 2: Measurable Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="landio-card"
            style={{
              background: "#04070d",
              borderRadius: "32px",
              padding: "48px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              minHeight: "440px",
              justifyContent: "space-between",
            }}
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
                    background: "linear-gradient(to top, rgba(148, 209, 255, 0.05) 0%, var(--color-primary-glow) 40%, var(--color-primary) 100%)",
                    boxShadow: "0 0 15px rgba(148, 209, 255, 0.15)",
                  }}
                />
              ))}
            </div>

            {/* Typography */}
            <div style={{ marginTop: "24px" }}>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#ffffff",
                  marginBottom: "12px",
                  letterSpacing: "-0.5px",
                }}
              >
                Measurable Impact
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  maxWidth: "280px",
                  margin: "0 auto",
                }}
              >
                Track performance, uncover insights, and achieve data-backed growth
              </p>
            </div>
          </motion.div>

          {/* Card 3: Seamless Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="landio-card"
            style={{
              background: "#04070d",
              borderRadius: "32px",
              padding: "48px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              minHeight: "440px",
              justifyContent: "space-between",
            }}
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
                {/* Connecting Lines with pulses */}
                <line x1="75" y1="75" x2="35" y2="45" stroke="rgba(148, 209, 255, 0.15)" strokeWidth="1.5" />
                <line x1="75" y1="75" x2="115" y2="45" stroke="rgba(148, 209, 255, 0.15)" strokeWidth="1.5" />
                <line x1="75" y1="75" x2="25" y2="85" stroke="rgba(148, 209, 255, 0.15)" strokeWidth="1.5" />
                <line x1="75" y1="75" x2="125" y2="85" stroke="rgba(148, 209, 255, 0.15)" strokeWidth="1.5" />
                <line x1="75" y1="75" x2="50" y2="125" stroke="rgba(148, 209, 255, 0.15)" strokeWidth="1.5" />
                <line x1="75" y1="75" x2="100" y2="125" stroke="rgba(148, 209, 255, 0.15)" strokeWidth="1.5" />

                {/* Pulsing signal dots traveling from outer nodes to center */}
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
                    fill="var(--color-primary)"
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
                <circle cx="35" cy="45" r="5" fill="#10131c" stroke="rgba(148, 209, 255, 0.3)" strokeWidth="1.5" />
                <circle cx="115" cy="45" r="5" fill="#10131c" stroke="rgba(148, 209, 255, 0.3)" strokeWidth="1.5" />
                <circle cx="25" cy="85" r="5" fill="#10131c" stroke="rgba(148, 209, 255, 0.3)" strokeWidth="1.5" />
                <circle cx="125" cy="85" r="5" fill="#10131c" stroke="rgba(148, 209, 255, 0.3)" strokeWidth="1.5" />
                <circle cx="50" cy="125" r="5" fill="#10131c" stroke="rgba(148, 209, 255, 0.3)" strokeWidth="1.5" />
                <circle cx="100" cy="125" r="5" fill="#10131c" stroke="rgba(148, 209, 255, 0.3)" strokeWidth="1.5" />

                {/* Central Node (Sphere with Crescent Moon shape representing Landio-style emblem) */}
                <g transform="translate(60, 60)">
                  <circle cx="15" cy="15" r="14" fill="#04070d" stroke="var(--color-primary)" strokeWidth="2" />
                  <path
                    d="M 12 7 A 9 9 0 0 1 22 21 A 9 9 0 1 0 12 7 Z"
                    fill="var(--color-primary)"
                    opacity="0.85"
                  />
                  {/* Subtle pulsing ring around center */}
                  <motion.circle
                    cx="15"
                    cy="15"
                    r="14"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1"
                    animate={{ r: [14, 24], opacity: [0.6, 0] }}
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
                  fontWeight: 500,
                  color: "#ffffff",
                  marginBottom: "12px",
                  letterSpacing: "-0.5px",
                }}
              >
                Seamless Integration
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  maxWidth: "280px",
                  margin: "0 auto",
                }}
              >
                Connect tools, teams, and workflows with intelligent automation
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .why-choose-us-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .landio-card {
            min-height: auto !important;
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
