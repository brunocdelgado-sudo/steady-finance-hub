import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import logoLice from "@/assets/logo-lice.png";

const navLinks = [
  { href: "#inicio", label: "Início", sectionId: "inicio" },
  { href: "#dor-solucao", label: "Desafios", sectionId: "dor-solucao" },
  { href: "#servicos", label: "Serviços", sectionId: "servicos" },
  { href: "#bpo", label: "BPO", sectionId: "bpo" },
  { href: "#como-funciona", label: "Método", sectionId: "como-funciona" },
  { href: "#sobre", label: "Sobre", sectionId: "sobre" },
  { href: "#faq", label: "FAQ", sectionId: "faq" },
];

const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Sou%20da%20%5BNOME%20DA%20EMPRESA%5D.%20Quero%20organizar%20meu%20financeiro.%20Hoje%20meu%20principal%20desafio%20%C3%A9%20%5BCAIXA%20%2F%20CUSTOS%20%2F%20CONTAS%20A%20PAGAR%20%2F%20CONTAS%20A%20RECEBER%20%2F%20PRECIFICA%C3%87%C3%83O%5D.%20Podemos%20conversar%3F";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.sectionId);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img 
              src={logoLice} 
              alt="LICE Consultoria" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors py-2",
                  activeSection === link.sectionId
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-foreground"
                )}
              >
                {link.label}
                {/* Active indicator underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300",
                    activeSection === link.sectionId
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  )}
                />
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
        <div className="lg:hidden bg-surface/95 backdrop-blur-lg border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors py-3 text-base font-medium",
                  activeSection === link.sectionId
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-foreground"
                )}
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
