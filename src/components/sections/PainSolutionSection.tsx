import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AlertTriangle } from "lucide-react";

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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-6">
            Se o financeiro está travando o crescimento, a solução é{" "}
            <span className="text-primary">estrutura.</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto">
            A maioria das empresas não quebra por falta de venda — quebra por falta de controle. 
            Quando não há processo, rotina e informação confiável, o gestor decide no escuro.
          </p>

          <div className="bg-background border border-border rounded-xl p-8 mb-12">
            <h3 className="text-xl font-heading font-bold text-warning mb-6 flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Sinais de alerta
            </h3>
            
            <ul className="space-y-4 text-left max-w-2xl mx-auto">
              {warningSignals.map((signal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-secondary">{signal}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-foreground mb-8 font-medium">
            A LICE entra para organizar, executar e evoluir seu financeiro com consistência.
          </p>

          <div>
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
