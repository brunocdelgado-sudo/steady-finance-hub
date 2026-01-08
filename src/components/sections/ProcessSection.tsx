import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Search, FolderOpen, PlayCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico rápido",
    description: "Levantamos sua realidade, dores, números e prioridades.",
  },
  {
    icon: FolderOpen,
    number: "02",
    title: "Organização",
    description: "Implantamos controles, rotinas, calendário financeiro e responsabilidades.",
  },
  {
    icon: PlayCircle,
    number: "03",
    title: "Execução (consultoria e/ou BPO)",
    description: "Aplicamos o plano e/ou assumimos as rotinas conforme o formato definido.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Acompanhamento e melhoria",
    description: "Indicadores e ajustes contínuos para melhorar caixa, margem e eficiência.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-service h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-3xl font-heading font-bold text-border">{step.number}</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
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
