import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, ArrowRight, Zap, TrendingUp, Clock, Target } from "lucide-react";
import bpoProfessional from "@/assets/bpo-professional.jpg";

const bpoServices = [
  "Faturamento e cobrança (organização do processo e acompanhamento)",
  "Contas a pagar (controle, calendário e rotina)",
  "Contas a receber (acompanhamento, cobrança e redução de inadimplência)",
  "Conciliação bancária (organização e classificação das movimentações)",
  "Relatórios e indicadores (informação clara para decisão)",
];

const benefits = [
  { icon: Clock, text: "Rotina em dia e visão clara do caixa" },
  { icon: Target, text: "Menos retrabalho, erros e \"surpresas\"" },
  { icon: TrendingUp, text: "Mais tempo do gestor para vender, operar e crescer" },
  { icon: Zap, text: "Decisões com base em dados, não em achismo" },
];

export function BPOSection() {
  return (
    <section id="bpo" className="bg-surface py-20 md:py-28 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <h2 className="section-title">
                BPO Financeiro: seu financeiro rodando com{" "}
                <span className="text-primary">especialistas</span>
              </h2>
              <p className="section-subtitle">
                BPO é terceirização de processos. Na LICE, você pode delegar rotinas financeiras 
                (total ou parcial) para ter execução com método, cadência e relatórios.
              </p>
            </div>

            {/* O que pode entrar no BPO */}
            <div className="bg-background border border-border rounded-xl p-6 mb-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-5 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                O que pode entrar no BPO
              </h3>
              <ul className="space-y-3">
                {bpoServices.map((service, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-text-secondary group-hover:text-foreground transition-colors">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefícios diretos - Grid de cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-background border border-border rounded-lg p-4 flex items-center gap-3 hover:border-primary/50 hover:bg-surface transition-all group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-foreground transition-colors">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div>
              <WhatsAppButton variant="default" size="lg">
                Falar no WhatsApp
              </WhatsAppButton>
              <p className="text-text-secondary text-sm mt-3">
                Escreva "BPO" e eu te explico o melhor formato para sua empresa.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img 
                src={bpoProfessional} 
                alt="Profissional trabalhando com dashboard financeiro" 
                className="rounded-2xl shadow-lg w-full object-cover"
                loading="lazy"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
