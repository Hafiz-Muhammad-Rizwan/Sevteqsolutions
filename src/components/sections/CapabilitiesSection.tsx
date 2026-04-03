"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/common/SectionHeading";
import { capabilities } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/animations/TiltCard";

const CARD_GRADIENTS = [
  "from-[#2D5BFF] via-[#2D5BFF]/40 to-transparent",
  "from-[#8B5CF6] via-[#8B5CF6]/40 to-transparent",
  "from-[#06B6D4] via-[#06B6D4]/40 to-transparent",
  "from-[#F59E0B] via-[#F59E0B]/40 to-transparent",
  "from-[#EC4899] via-[#EC4899]/40 to-transparent",
  "from-[#10B981] via-[#10B981]/40 to-transparent",
];

export function CapabilitiesSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10" id="services">
      <SectionHeading
        eyebrow="What We Do"
        title="Integrated capabilities for ambitious organizations"
        description="We combine strategic clarity with technical depth to help enterprises transform confidently at scale."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        {capabilities.map((capability, index) => {
          // Asymmetrical grid logic for 6 elements: 0/3/4 span 2 cols, others span 1.
          const isWide = [0, 3, 4].includes(index);
          const bgGradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

          return (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={isWide ? "md:col-span-2" : "md:col-span-1"}
            >
              <TiltCard perspective={1200} className="h-full">
                <Link href={`/projects#${capability.id}`} className="group relative overflow-hidden flex flex-col rounded-3xl border border-white/10 bg-[#0A0A0A]/50 p-8 md:p-10 min-h-[280px] h-full transition-all duration-300 hover:border-white/30 glow-hover block">

                  {/* Persistent Glowing Mesh Gradient */}
                  <div className={`absolute -top-16 -left-16 w-80 h-80 rounded-full bg-gradient-to-br ${bgGradient} blur-[60px] opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none z-0`} />
                  <div className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-md pointer-events-none z-10" />

                  <div style={{ transform: "translateZ(30px)" }} className="relative z-20 absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#2D5BFF] group-hover:border-transparent transition-all z-20">
                    <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>

                  <div style={{ transform: "translateZ(50px)" }} className="relative z-20 flex flex-col flex-1 justify-end pt-16 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-4 pr-12 tracking-wide block">{capability.title}</h3>
                    <p className="leading-relaxed text-white/80">{capability.description}</p>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
