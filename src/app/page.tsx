import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#04070d]">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
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
