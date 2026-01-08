import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowRight, Clock, Compass, MessageCircle } from "lucide-react";
import ctaPattern from "@/assets/cta-pattern.jpg";

const highlights = [
  { icon: Clock, text: "Resposta rápida" },
  { icon: Compass, text: "Diagnóstico inicial" },
  { icon: ArrowRight, text: "Próximos passos claros" },
];

export function CTASection() {
  return (
    <section id="cta-final" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaPattern})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Pronto para ter um financeiro{" "}
            <span className="text-primary">organizado e previsível?</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Clique no WhatsApp, conte seu momento e receba um direcionamento inicial 
            do que fazer primeiro — consultoria, BPO ou modelo híbrido.
          </p>

          <div className="flex justify-center mb-8">
            <WhatsAppButton variant="hero" size="xl">
              Falar no WhatsApp agora
            </WhatsAppButton>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-text-secondary">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
