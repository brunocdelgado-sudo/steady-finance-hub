import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainSolutionSection } from "@/components/sections/PainSolutionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BPOSection } from "@/components/sections/BPOSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainSolutionSection />
        <ServicesSection />
        <BPOSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
