"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projectCategories } from "@/data/projects";
import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-24 pb-16">
        {/* Header Hero */}
        <section className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 mb-20 text-center">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2D5BFF] rounded-full mix-blend-screen filter blur-[250px] opacity-10 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="text-sm font-bold tracking-widest text-[#2D5BFF] uppercase mb-4">
              Our Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Enterprise Excellence,<br /> Delivered.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#94A3B8]">
              Explore our diverse range of successful projects tailored to the unique goals, timelines, and governance models of ambitious organizations worldwide.
            </p>
          </motion.div>
        </section>

        {/* Project Categories */}
        {projectCategories.map((category, idx) => (
          <section key={category.id} id={category.id} className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 py-16 scroll-mt-32">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12 border-l-2 border-[#2D5BFF] pl-6"
            >
              <h2 className="text-3xl font-bold text-white mb-3">{category.name}</h2>
              <p className="text-lg text-[#94A3B8] max-w-3xl">{category.description}</p>
            </motion.div>

            {/* Grid of Projects */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {category.projects.map((project, pIdx) => (
                  <motion.article
                     key={project.title}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.6, delay: pIdx * 0.1 }}
                     className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A]/50 flex flex-col transition-all hover:border-white/30 hover:shadow-[0_0_30px_rgba(45,91,255,0.1)]"
                  >
                     <div className="relative h-64 w-full overflow-hidden bg-white/5">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-90" />
                     </div>
                     <div className="flex flex-col flex-1 p-8 -mt-24 relative z-10 drop-shadow-md">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#2D5BFF] mb-2">{project.client}</span>
                        <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{project.title}</h3>
                        <p className="text-sm text-white/80 leading-relaxed font-medium">{project.description}</p>
                     </div>
                  </motion.article>
               ))}
             </div>
          </section>
        ))}

        <div className="mt-20">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
