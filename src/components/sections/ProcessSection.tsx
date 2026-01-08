import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Search, FolderOpen, PlayCircle, TrendingUp, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico rápido",
    description: "Levantamos sua realidade, dores, números e prioridades.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: FolderOpen,
    number: "02",
    title: "Organização",
    description: "Implantamos controles, rotinas, calendário financeiro e responsabilidades.",
    color: "from-primary/25 to-primary/10",
  },
  {
    icon: PlayCircle,
    number: "03",
    title: "Execução (consultoria e/ou BPO)",
    description: "Aplicamos o plano e/ou assumimos as rotinas conforme o formato definido.",
    color: "from-primary/30 to-primary/15",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Acompanhamento e melhoria",
    description: "Indicadores e ajustes contínuos para melhorar caixa, margem e eficiência.",
    color: "from-primary/35 to-primary/20",
  },
];

export function ProcessSection() {
  return (
    <section id="como-funciona" className="bg-background py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Um processo simples: entender, organizar, executar e evoluir
          </h2>
          <p className="section-subtitle mx-auto">
            Cada empresa tem uma realidade. Por isso, começamos com entendimento do 
            cenário e seguimos com estrutura e acompanhamento.
          </p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary rounded-full" />
            
            <div className="grid grid-cols-4 gap-6 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Card */}
                  <div className={`card-service h-full relative bg-gradient-to-br ${step.color} border-primary/20`}>
                    {/* Number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-primary-foreground font-heading font-bold">{step.number}</span>
                    </div>
                    
                    <div className="w-14 h-14 bg-background/80 rounded-xl flex items-center justify-center mb-4 group-hover:bg-background transition-colors">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-heading font-bold text-foreground mb-3 pr-8">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 top-24 z-10">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="lg:hidden mb-12">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary" />
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Dot on timeline */}
                  <div className="absolute -left-8 top-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Card */}
                  <div className={`card-service bg-gradient-to-br ${step.color} border-primary/20`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-background/80 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <WhatsAppButton variant="default" size="lg">
            Falar no WhatsApp
          </WhatsAppButton>
          <p className="text-text-secondary text-sm mt-3">
            Você explica o cenário, a LICE devolve o caminho.
          </p>
        </div>
      </div>
    </section>
  );
}
