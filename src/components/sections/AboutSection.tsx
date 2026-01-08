import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, Users, Lightbulb, Target, BarChart3 } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.jpg";

const differentials = [
  { 
    icon: Users, 
    title: "Proximidade e acompanhamento real",
    description: "Você fala direto com quem cuida do seu financeiro"
  },
  { 
    icon: Target, 
    title: "Rotina e método (sem \"achismos\")",
    description: "Processos claros e repetíveis para resultados consistentes"
  },
  { 
    icon: BarChart3, 
    title: "Clareza de números para decisão",
    description: "Relatórios que mostram o que realmente importa"
  },
  { 
    icon: Lightbulb, 
    title: "Soluções sob medida",
    description: "Adaptadas ao estágio e realidade da sua empresa"
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-surface py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Experiência aplicada à realidade da sua empresa
            </h2>
            <p className="section-subtitle mx-auto">
              A LICE CONSULTORIA é especializada em finanças corporativas para empresas 
              que precisam de organização, processo e previsibilidade.
            </p>
          </div>

          {/* Founder Card - Enhanced */}
          <div className="bg-background border border-border rounded-2xl p-8 mb-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden ring-4 ring-primary/20">
                  <img 
                    src={founderPortrait} 
                    alt="Fábio Lice - Fundador" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-bold">
                  Fundador
                </div>
              </div>
              
              {/* Info */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Fábio Lice
                </h3>
                <p className="text-primary font-medium mb-4">
                  Especialista em Finanças Corporativas
                </p>
                <p className="text-text-secondary max-w-xl">
                  Profissional com experiência no mercado financeiro e atuação direta no 
                  suporte a empresas em planejamento, rotinas e processos financeiros. 
                  Já ajudou dezenas de empresas a sair do caos e ter previsibilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Differentials - Enhanced Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {differentials.map((diff, index) => (
              <div 
                key={index} 
                className="group bg-background border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <diff.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">
                      {diff.title}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <WhatsAppButton variant="default" size="lg">
              Falar no WhatsApp
            </WhatsAppButton>
            <p className="text-text-secondary text-sm mt-3">
              Me diga seu segmento e seu desafio principal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
