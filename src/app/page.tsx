import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { MetricsSection } from "@/components/sections/MetricsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-(--color-surface)">
      <Header />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <MetricsSection />
        <IndustriesSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
