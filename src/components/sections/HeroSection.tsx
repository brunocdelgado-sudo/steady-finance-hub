import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, TrendingUp, PieChart, Wallet } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const benefits = [
  {
    icon: TrendingUp,
    text: "Mais previsibilidade de caixa e menos \"apagão\" financeiro",
  },
  {
    icon: Wallet,
    text: "Rotina organizada (pagar, receber, conciliar, acompanhar)",
  },
  {
    icon: PieChart,
    text: "Custos e margens sob controle para decidir melhor",
  },
];

export function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      
      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-foreground mb-6 animate-fade-in">
            Gestão financeira profissional para empresas que querem{" "}
            <span className="text-primary">crescer com controle.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A LICE CONSULTORIA organiza rotinas, estrutura processos e apoia decisões com números confiáveis — via consultoria e BPO financeiro sob medida.
          </p>

          <div className="space-y-4 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <benefit.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-lg">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <WhatsAppButton variant="hero" size="xl">
              Falar no WhatsApp
            </WhatsAppButton>
            <p className="text-text-secondary text-sm mt-3">
              Explique sua necessidade e receba um direcionamento inicial.
            </p>
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center gap-3 bg-surface/50 backdrop-blur-sm border border-primary/20 rounded-full px-5 py-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-text-secondary">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent font-bold">
                    Do operacional ao estratégico
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary-light to-primary/60 rounded-full" />
                </span>
                {" "}— com método e acompanhamento.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
