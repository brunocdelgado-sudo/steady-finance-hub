import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "default" | "hero" | "whatsapp";
  size?: "default" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
}

const defaultMessage = "Olá! Sou da [NOME DA EMPRESA]. Quero organizar meu financeiro. Hoje meu principal desafio é [CAIXA / CUSTOS / CONTAS A PAGAR / CONTAS A RECEBER / PRECIFICAÇÃO]. Podemos conversar?";

export function WhatsAppButton({ 
  message = defaultMessage, 
  variant = "default",
  size = "default",
  className = "",
  children = "Falar no WhatsApp"
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/5511999999999?text=${encodedMessage}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <Button variant={variant} size={size} className={`gap-2 ${className}`}>
        <MessageCircle className="w-5 h-5" />
        {children}
      </Button>
    </a>
  );
}

export function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20consultoria%20financeira.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-primary-foreground p-4 rounded-full shadow-glow animate-pulse-glow transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
