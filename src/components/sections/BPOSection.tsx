import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, ArrowRight } from "lucide-react";

const bpoServices = [
  "Faturamento e cobrança (organização do processo e acompanhamento)",
  "Contas a pagar (controle, calendário e rotina)",
  "Contas a receber (acompanhamento, cobrança e redução de inadimplência)",
  "Conciliação bancária (organização e classificação das movimentações)",
  "Relatórios e indicadores (informação clara para decisão)",
];

const benefits = [
  "Rotina em dia e visão clara do caixa",
  "Menos retrabalho, erros e \"surpresas\"",
  "Mais tempo do gestor para vender, operar e crescer",
  "Decisões com base em dados, não em achismo",
];

export function BPOSection() {
  return (
    <section id="bpo" className="bg-surface py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              BPO Financeiro: seu financeiro rodando com{" "}
              <span className="text-primary">especialistas</span>
            </h2>
            <p className="section-subtitle mx-auto">
              BPO é terceirização de processos. Na LICE, você pode delegar rotinas financeiras 
              (total ou parcial) para ter execução com método, cadência e relatórios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* O que pode entrar no BPO */}
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                O que pode entrar no BPO
              </h3>
              <ul className="space-y-3">
                {bpoServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefícios diretos */}
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                Benefícios diretos
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <WhatsAppButton variant="default" size="lg">
              Falar no WhatsApp
            </WhatsAppButton>
            <p className="text-text-secondary text-sm mt-3">
              Escreva "BPO" e eu te explico o melhor formato para sua empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
