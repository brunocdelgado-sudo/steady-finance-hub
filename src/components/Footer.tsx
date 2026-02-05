import { MessageCircle } from "lucide-react";
import logoLice from "@/assets/logo-lice.png";

const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20consultoria%20financeira.";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <div className="mb-4">
              <img 
                src={logoLice} 
                alt="LICE Consultoria" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-text-secondary text-sm">
              Gestão financeira profissional para empresas que querem crescer com controle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <a href="#servicos" className="block text-text-secondary hover:text-foreground transition-colors text-sm">
                Serviços
              </a>
              <a href="#bpo" className="block text-text-secondary hover:text-foreground transition-colors text-sm">
                BPO Financeiro
              </a>
              <a href="#como-funciona" className="block text-text-secondary hover:text-foreground transition-colors text-sm">
                Como Funciona
              </a>
              <a href="#sobre" className="block text-text-secondary hover:text-foreground transition-colors text-sm">
                Sobre
              </a>
              <a href="#faq" className="block text-text-secondary hover:text-foreground transition-colors text-sm">
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contato</h4>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>
            <p className="text-text-secondary text-sm mt-4">
              Resposta rápida • Diagnóstico inicial sem custo
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} LICE CONSULTORIA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
