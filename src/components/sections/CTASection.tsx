import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowRight, CheckCircle, Clock, Compass } from "lucide-react";

const highlights = [
  { icon: Clock, text: "Resposta rápida" },
  { icon: Compass, text: "Diagnóstico inicial" },
  { icon: ArrowRight, text: "Próximos passos claros" },
];

export function CTASection() {
  return (
    <section id="cta-final" className="bg-gradient-to-br from-primary/20 via-surface to-surface py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
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
              <div key={index} className="flex items-center gap-2 text-text-secondary">
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
