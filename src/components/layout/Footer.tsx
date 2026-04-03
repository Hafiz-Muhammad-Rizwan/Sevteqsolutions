import Link from "next/link";
import { navItems } from "@/data/site";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] border-t border-white/10 pt-20 pb-10">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#2D5BFF] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Sevteq Home">
              <img 
                src="/Sevteq%20Logo.jpeg" 
                alt="Sevteq Logo" 
                className="h-10 lg:h-12 w-auto object-contain rounded-lg transition-all group-hover:scale-105 shadow-[0_0_15px_rgba(45,91,255,0.2)] group-hover:shadow-[0_0_25px_rgba(45,91,255,0.4)]" 
              />
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#2D5BFF] transition-colors hidden sm:block">
                Sevteq
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[#94A3B8]">
              Empowering businesses to grow through high-quality software solutions, digital products, and managed IT operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white tracking-wide">Company</h4>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium text-[#94A3B8] transition-colors hover:text-[#2D5BFF] w-fit">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact / Office */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white tracking-wide">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-[#94A3B8]">
              <p>Email: <a href="mailto:sevteqsolutions@outlook.com" className="hover:text-[#2D5BFF] transition-colors">sevteqsolutions@outlook.com</a></p>
              <p>Phone: <a href="tel:+17033011006" className="hover:text-[#2D5BFF] transition-colors">+1 (703) 301-1006</a></p>
              <a href="https://www.linkedin.com/company/sevteq/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D5BFF] transition-colors">
                LinkedIn Profile
              </a>
              <a href="#contact" className="mt-2 inline-block text-[#2D5BFF] hover:text-white font-medium transition-colors">
                Start a project →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-[#94A3B8]">
            © {year} Sevteq. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-[#94A3B8]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
