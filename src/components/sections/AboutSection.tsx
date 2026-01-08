import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, User } from "lucide-react";

const differentials = [
  "Proximidade e acompanhamento real",
  "Rotina e método (sem \"achismos\")",
  "Clareza de números para decisão",
  "Soluções sob medida para o estágio da empresa",
];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-surface py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Experiência aplicada à realidade da sua empresa
            </h2>
            <p className="section-subtitle mx-auto">
              A LICE CONSULTORIA é especializada em finanças corporativas para empresas 
              que precisam de organização, processo e previsibilidade.
            </p>
          </div>

          {/* Founder Card */}
          <div className="bg-background border border-border rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Liderança: Fábio Lice
                </h3>
                <p className="text-text-secondary">
                  A consultoria é liderada por Fábio Lice, profissional com experiência no 
                  mercado financeiro e atuação direta no suporte a empresas em planejamento, 
                  rotinas e processos financeiros.
                </p>
              </div>
            </div>
          </div>

          {/* Differentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {differentials.map((diff, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-background border border-border rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{diff}</span>
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
