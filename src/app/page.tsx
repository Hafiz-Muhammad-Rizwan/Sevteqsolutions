import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-secondary)]">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <CapabilitiesSection />
        <MetricsSection />
        <PortfolioSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
