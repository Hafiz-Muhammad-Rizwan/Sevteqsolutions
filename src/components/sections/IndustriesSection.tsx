"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { industries } from "@/data/site";
import Image from "next/image";
import { TiltCard } from "@/components/animations/TiltCard";

const INDUSTRY_IMAGES = [
  "https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Sevteqsolutions/main/public/pexels-freestockpro-12960383.jpg",
  "https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Sevteqsolutions/main/public/pexels-jakub-pabis-147246622-36169773.jpg",
  "https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Sevteqsolutions/main/public/pexels-jplenio-1105379.jpg",
  "https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Sevteqsolutions/main/public/pexels-werner-pfennig-6949525.jpg"
];

export function IndustriesSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10" id="industries">
      <SectionHeading
        eyebrow="Industries"
        title="Sector depth that drives meaningful outcomes"
        description="Our cross-functional teams understand the realities of heavily regulated and rapidly evolving markets."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <TiltCard perspective={1500} className="h-full group">
              <article className="relative overflow-hidden rounded-3xl border border-white/10 glass-panel min-h-[320px] h-full p-8 md:p-10 transition-all glow-hover">
                {/* Background Image mapped to the industry - Unblurred for visual crispness */}
                <Image
                  src={INDUSTRY_IMAGES[index % INDUSTRY_IMAGES.length]}
                  alt={industry.name}
                  fill
                  className="object-cover opacity-50 filter brightness-75 transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent pointer-events-none" />

                <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex flex-col justify-end h-full pt-20 transition-transform duration-300">
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-wide">{industry.name}</h3>
                  <p className="leading-relaxed text-white/90 text-lg sm:text-base lg:text-lg">{industry.summary}</p>
                </div>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
