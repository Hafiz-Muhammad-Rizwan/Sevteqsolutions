"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SLIDES = [
  {
    video: "/video1.mp4",
    title: "Empowering businesses through innovation",
    subtitle: "Bridging the gap between business needs and technology by delivering scalable, efficient, and user-centric digital products.",
    buttonText: "OUR MISSION",
    buttonHref: "#about"
  },
  {
    video: "/video2.mp4",
    title: "Your global technology partner",
    subtitle: "We leverage cutting-edge solutions to drive long-term success and foster innovation across all industries.",
    buttonText: "OUR VISION",
    buttonHref: "#services"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 72px)",
        width: "100%",
        overflow: "hidden",
        background: "#000000",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── Full-screen Background Videos ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.05)" }}
              src={SLIDES[currentSlide].video}
            />
          </motion.div>
        </AnimatePresence>

        {/* Layered overlays */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to top, #04070d 0%, transparent 100%)", zIndex: 3 }} />
      </div>

      {/* ── Primary accent line top-right ── */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "-80px",
        width: "3px",
        height: "55%",
        background: "linear-gradient(to bottom, transparent, #1f77f6, transparent)",
        zIndex: 4,
        opacity: 0.6,
      }} />
      <div style={{
        position: "absolute",
        top: "20%",
        right: "40px",
        width: "1px",
        height: "40%",
        background: "linear-gradient(to bottom, transparent, rgba(31,119,246,0.5), transparent)",
        zIndex: 4,
      }} />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 40px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "70vh",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {/* Eyebrow tag */}
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
                background: "rgba(255,255,255,0.04)",
                fontFamily: "'General Sans','Inter',sans-serif",
                marginBottom: "28px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1f77f6", display: "inline-block" }} />
                {currentSlide === 0 ? "SUPERCHARGE YOUR BUSINESS" : "GLOBAL TECHNOLOGY PARTNER"}
              </div>

              <h1 style={{
                fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
                fontWeight: 500,
                lineHeight: 1.08,
                color: "#ffffff",
                fontFamily: "'General Sans','Inter',sans-serif",
                marginBottom: "28px",
                letterSpacing: "-0.02em",
              }}>
                {SLIDES[currentSlide].title}
              </h1>

              <p style={{
                fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.75)",
                fontFamily: "'General Sans','Inter',sans-serif",
                fontWeight: 400,
                marginBottom: "44px",
                maxWidth: "560px",
              }}>
                {SLIDES[currentSlide].subtitle}
              </p>

              {/* Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <a
                  href={SLIDES[currentSlide].buttonHref}
                  className="btn-primary"
                >
                  {SLIDES[currentSlide].buttonText}
                </a>
                <a
                  href="#services"
                  className="btn-outline"
                >
                  Our Services
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Slide indicators ── */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "10px",
        zIndex: 15,
      }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === currentSlide ? "28px" : "8px",
              height: "8px",
              borderRadius: "999px",
              background: i === currentSlide ? "#1f77f6" : "rgba(255,255,255,0.25)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.35s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Arrow Controls ── */}
      <div style={{
        position: "absolute",
        left: "40px",
        right: "40px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 15,
        pointerEvents: "none",
      }}>
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(0,0,0,0.4)",
            color: "rgba(255,255,255,0.6)",
            cursor: "pointer",
            transition: "all 0.25s ease",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#1f77f6"; (e.currentTarget as HTMLButtonElement).style.color = "#1f77f6"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)"; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(0,0,0,0.4)",
            color: "rgba(255,255,255,0.6)",
            cursor: "pointer",
            transition: "all 0.25s ease",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#1f77f6"; (e.currentTarget as HTMLButtonElement).style.color = "#1f77f6"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)"; }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    </section>
  );
}
