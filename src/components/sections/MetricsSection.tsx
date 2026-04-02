"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/site";

export function MetricsSection() {
  return (
    <section className="relative w-full border-y border-white/5 bg-transparent py-20 relative z-10">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2D5BFF]/5 via-transparent to-[#2D5BFF]/5 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 glass-panel glow-hover backdrop-blur-md text-center lg:text-left transition-transform hover:-translate-y-1"
            >
              <p className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-[#94A3B8]">
                {item.value}
              </p>
              <p className="text-sm font-medium text-[#94A3B8] uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
