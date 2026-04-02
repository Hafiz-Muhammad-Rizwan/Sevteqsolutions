"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SLIDES = [
  {
    video: "https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Sevteqsolutions/main/public/video1.mp4",
    title: "Empowering businesses through innovation",
    subtitle: "Bridging the gap between business needs and technology by delivering scalable, efficient, and user-centric digital products.",
    buttonText: "OUR MISSION",
    buttonHref: "#about"
  },
  {
    video: "https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Sevteqsolutions/main/public/video2.mp4",
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
    <section className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-black flex items-center" id="about">
      {/* Full-Screen Background Videos */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover scale-105"
              src={SLIDES[currentSlide].video}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay to make text readable matching System Ltd style */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-10 flex flex-col justify-center min-h-[70vh]">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8"
            >
              <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] font-bold tracking-tight text-white mb-6">
                {SLIDES[currentSlide].title}
              </h1>

              <p className="max-w-2xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/95 font-medium mb-10">
                {SLIDES[currentSlide].subtitle}
              </p>

              <div>
                <a
                  href={SLIDES[currentSlide].buttonHref}
                  className="inline-block rounded-none bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-[#2D5BFF] hover:text-white"
                >
                  {SLIDES[currentSlide].buttonText}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Slider Controls Like SystemsLtd */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 flex items-center justify-between z-30 pointer-events-none lg:left-10 lg:right-10">
          <button
            onClick={prevSlide}
            className="pointer-events-auto flex h-14 w-14 items-center justify-center text-white/70 transition-all hover:text-white hover:scale-110"
            aria-label="Previous slide"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto flex h-14 w-14 items-center justify-center text-white/70 transition-all hover:text-white hover:scale-110"
            aria-label="Next slide"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
