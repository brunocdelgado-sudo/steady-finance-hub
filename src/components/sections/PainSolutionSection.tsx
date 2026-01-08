import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AlertTriangle, XCircle, CheckCircle2, ArrowRight } from "lucide-react";

const warningSignals = [
  "Você não tem clareza do caixa real dos próximos 30/60/90 dias",
  "Contas a pagar/receber vivem em atraso ou \"no improviso\"",
  "Não sabe exatamente onde está a margem (ou ela some no mês)",
  "Custos desorganizados e precificação sem base consistente",
  "Relatórios chegam tarde (ou nem existem)",
];

export function PainSolutionSection() {
  return (
    <section id="dor-solucao" className="bg-surface py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">
              Se o financeiro está travando o crescimento, a solução é{" "}
              <span className="text-primary">estrutura.</span>
            </h2>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A maioria das empresas não quebra por falta de venda — quebra por falta de controle. 
              Quando não há processo, rotina e informação confiável, o gestor decide no escuro.
            </p>
          </div>

          {/* Split layout: Problem vs Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Problem Side */}
            <div className="bg-background border border-warning/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              {/* Warning glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-warning/20 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-warning" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-warning">
                    Sinais de alerta
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {warningSignals.map((signal, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3 group"
                    >
                      <XCircle className="w-5 h-5 text-warning/70 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary group-hover:text-foreground transition-colors">
                        {signal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution Side */}
            <div className="bg-background border border-primary/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              {/* Primary glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary">
                    O que a LICE resolve
                  </h3>
                </div>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">
                      <strong className="text-foreground">Visão clara de caixa</strong> — você sabe o que entra e sai nos próximos meses
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">
                      <strong className="text-foreground">Rotina financeira</strong> — contas em dia, cobranças no prazo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">
                      <strong className="text-foreground">Margem protegida</strong> — custos e preços sob controle
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">
                      <strong className="text-foreground">Decisões com dados</strong> — relatórios que chegam no tempo certo
                    </span>
                  </li>
                </ul>

                <p className="text-lg text-foreground font-medium border-t border-border/50 pt-4">
                  A LICE entra para organizar, executar e evoluir seu financeiro com consistência.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <WhatsAppButton variant="default" size="lg">
              Falar no WhatsApp
            </WhatsAppButton>
            <p className="text-text-secondary text-sm mt-3">
              Vamos entender seu cenário em poucos minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
