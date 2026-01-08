import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O atendimento é para quais tipos de empresa?",
    answer: "Para empresas que precisam estruturar e profissionalizar o financeiro, com rotina e controle.",
  },
  {
    question: "O BPO substitui meu time interno?",
    answer: "Pode substituir, complementar ou assumir partes do processo — depende do cenário.",
  },
  {
    question: "Vocês ajudam com precificação e custos?",
    answer: "Sim. A análise de custos e precificação é um dos pilares para proteger margem.",
  },
  {
    question: "Como começa?",
    answer: "Por uma conversa rápida no WhatsApp para diagnóstico inicial e definição do melhor formato.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Perguntas frequentes</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-surface border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground font-heading font-semibold hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center">
            <WhatsAppButton variant="default" size="lg">
              Falar no WhatsApp
            </WhatsAppButton>
            <p className="text-text-secondary text-sm mt-3">
              Sem formulário. Sem espera. Direto ao ponto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
