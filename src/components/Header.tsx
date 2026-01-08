import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#dor-solucao", label: "Desafios" },
  { href: "#servicos", label: "Serviços" },
  { href: "#bpo", label: "BPO" },
  { href: "#como-funciona", label: "Método" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Sou%20da%20%5BNOME%20DA%20EMPRESA%5D.%20Quero%20organizar%20meu%20financeiro.%20Hoje%20meu%20principal%20desafio%20%C3%A9%20%5BCAIXA%20%2F%20CUSTOS%20%2F%20CONTAS%20A%20PAGAR%20%2F%20CONTAS%20A%20RECEBER%20%2F%20PRECIFICA%C3%87%C3%83O%5D.%20Podemos%20conversar%3F";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">L</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">LICE</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="default" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-foreground transition-colors py-3 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4">
              <Button variant="default" className="w-full gap-2">
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
