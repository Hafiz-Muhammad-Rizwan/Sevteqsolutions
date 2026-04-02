"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { insights } from "@/data/site";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/animations/TiltCard";

export function InsightsSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10" id="insights">
      <SectionHeading
        eyebrow="Insights"
        title="Perspectives for digital and business leaders"
        description="Research, guidance, and strategic viewpoints from our experts on technology-enabled transformation."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
          >
            <TiltCard perspective={1500}>
              <article className="group flex flex-col justify-between h-full rounded-3xl border border-white/10 glass-panel p-8 transition-colors hover:bg-white/5 glow-hover min-h-[300px]">
                <div style={{ transform: "translateZ(40px)" }} className="transition-transform duration-300">
                  <p className="text-xs font-semibold tracking-widest text-[#2D5BFF] uppercase">
                    {insight.category}
                  </p>
                  <h3 className="mt-5 text-2xl leading-tight font-bold text-white line-clamp-3">{insight.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#94A3B8]">{insight.excerpt}</p>
                </div>
                <button style={{ transform: "translateZ(20px)" }} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-all">
                  Read insight
                  <ArrowUpRight className="w-4 h-4 text-[#2D5BFF] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
