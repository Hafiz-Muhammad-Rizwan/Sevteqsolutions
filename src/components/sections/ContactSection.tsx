"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 mb-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 glass-panel p-10 sm:p-16 lg:p-24 text-center mt-8 glow-hover"
      >
        {/* Abstract flares inside contact box */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2D5BFF]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto space-y-8">
          <p className="text-sm font-bold tracking-widest text-[#2D5BFF] uppercase">
            Let&apos;s collaborate
          </p>
          <h2 className="text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl text-balance">
            Build your next competitive advantage.
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-[#94A3B8] max-w-2xl text-balance">
            Share your priorities with our team and we will craft a transformation roadmap aligned to your goals, timelines, and governance model.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <a
              href="mailto:sevteqsolutions@outlook.com"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1a3db3] to-[#2D5BFF] px-10 py-4 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(45,91,255,0.4)]"
            >
              Email Us
            </a>
            <a
              href="tel:+17033011006"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-10 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              +1 (703) 301-1006
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
