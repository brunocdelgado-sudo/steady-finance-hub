import { WhatsAppButton } from "@/components/WhatsAppButton";
import { 
  Target, 
  LineChart, 
  DollarSign, 
  ShoppingCart, 
  CreditCard, 
  Settings,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Planejamento financeiro e tributário",
    description: "Planejamento e direcionamento para decisões mais seguras e previsíveis.",
    highlight: true,
    number: "01",
  },
  {
    icon: LineChart,
    title: "Consultoria financeira",
    description: "Diagnóstico, plano de ação e acompanhamento para melhorar performance financeira.",
    highlight: false,
    number: "02",
  },
  {
    icon: DollarSign,
    title: "Precificação e análise de custos",
    description: "Preço certo, custos dominados e margem protegida.",
    highlight: false,
    number: "03",
  },
  {
    icon: ShoppingCart,
    title: "Compras e gestão de fornecedores",
    description: "Organização e estratégia para reduzir desperdícios e aumentar eficiência.",
    highlight: false,
    number: "04",
  },
  {
    icon: CreditCard,
    title: "Contas a pagar e a receber",
    description: "Processo, prazos e acompanhamento para manter o caixa saudável.",
    highlight: false,
    number: "05",
  },
  {
    icon: Settings,
    title: "Processos financeiros e indicadores",
    description: "Rotina estruturada, responsabilidades claras e KPIs para acompanhar resultados.",
    highlight: true,
    number: "06",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-background py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Nossos Serviços</span>
          </div>
          <h2 className="section-title">O que fazemos na prática</h2>
          <p className="section-subtitle mx-auto">
            Atuamos na gestão financeira ponta a ponta — do básico bem feito ao estratégico — 
            para você ter rotina, controle e tomada de decisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                service.highlight 
                  ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/40 hover:border-primary hover:shadow-primary/20' 
                  : 'bg-card border-border/50 hover:border-primary/50 hover:shadow-primary/10'
              }`}
            >
              {/* Number badge */}
              <div className="absolute top-4 right-4 text-4xl font-heading font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                {service.number}
              </div>
              
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-700" />
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                    service.highlight 
                      ? 'bg-gradient-to-br from-primary/30 to-primary/10' 
                      : 'bg-gradient-to-br from-primary/20 to-primary/5'
                  }`}>
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <service.icon className="w-8 h-8 text-primary relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-primary/0 group-hover:text-primary transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
