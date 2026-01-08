import { WhatsAppButton } from "@/components/WhatsAppButton";
import { 
  Target, 
  LineChart, 
  DollarSign, 
  ShoppingCart, 
  CreditCard, 
  Settings,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Planejamento financeiro e tributário",
    description: "Planejamento e direcionamento para decisões mais seguras e previsíveis.",
    highlight: true,
  },
  {
    icon: LineChart,
    title: "Consultoria financeira",
    description: "Diagnóstico, plano de ação e acompanhamento para melhorar performance financeira.",
    highlight: false,
  },
  {
    icon: DollarSign,
    title: "Precificação e análise de custos",
    description: "Preço certo, custos dominados e margem protegida.",
    highlight: false,
  },
  {
    icon: ShoppingCart,
    title: "Compras e gestão de fornecedores",
    description: "Organização e estratégia para reduzir desperdícios e aumentar eficiência.",
    highlight: false,
  },
  {
    icon: CreditCard,
    title: "Contas a pagar e a receber",
    description: "Processo, prazos e acompanhamento para manter o caixa saudável.",
    highlight: false,
  },
  {
    icon: Settings,
    title: "Processos financeiros e indicadores",
    description: "Rotina estruturada, responsabilidades claras e KPIs para acompanhar resultados.",
    highlight: true,
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">O que fazemos na prática</h2>
          <p className="section-subtitle mx-auto">
            Atuamos na gestão financeira ponta a ponta — do básico bem feito ao estratégico — 
            para você ter rotina, controle e tomada de decisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                service.highlight 
                  ? 'bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border-primary/30 hover:border-primary/50' 
                  : 'bg-card border-border hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    service.highlight 
                      ? 'bg-primary/20 group-hover:bg-primary/30' 
                      : 'bg-primary/10 group-hover:bg-primary/20'
                  }`}>
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary/0 group-hover:text-primary/60 transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton variant="default" size="lg">
            Falar no WhatsApp
          </WhatsAppButton>
          <p className="text-text-secondary text-sm mt-3">
            Diga "quero organizar meu financeiro" e começamos pelo diagnóstico.
          </p>
        </div>
      </div>
    </section>
  );
}
