import { WhatsAppButton } from "@/components/WhatsAppButton";
import { 
  Target, 
  LineChart, 
  DollarSign, 
  ShoppingCart, 
  CreditCard, 
  Settings 
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Planejamento financeiro e tributário",
    description: "Planejamento e direcionamento para decisões mais seguras e previsíveis.",
  },
  {
    icon: LineChart,
    title: "Consultoria financeira",
    description: "Diagnóstico, plano de ação e acompanhamento para melhorar performance financeira.",
  },
  {
    icon: DollarSign,
    title: "Precificação e análise de custos",
    description: "Preço certo, custos dominados e margem protegida.",
  },
  {
    icon: ShoppingCart,
    title: "Compras e gestão de fornecedores",
    description: "Organização e estratégia para reduzir desperdícios e aumentar eficiência.",
  },
  {
    icon: CreditCard,
    title: "Contas a pagar e a receber",
    description: "Processo, prazos e acompanhamento para manter o caixa saudável.",
  },
  {
    icon: Settings,
    title: "Processos financeiros e indicadores",
    description: "Rotina estruturada, responsabilidades claras e KPIs para acompanhar resultados.",
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
              className="card-service group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary">
                {service.description}
              </p>
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
