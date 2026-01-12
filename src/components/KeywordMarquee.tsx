import { Shield, Users, Zap, TrendingUp, Database, FileText, DollarSign } from "lucide-react";

const keywords = [
  { text: "Segurança", icon: Shield },
  { text: "Especialistas", icon: Users },
  { text: "Eficiência", icon: Zap },
  { text: "Produtividade", icon: TrendingUp },
  { text: "Dados", icon: Database },
  { text: "Informações", icon: FileText },
  { text: "Lucratividade", icon: DollarSign },
];

export function KeywordMarquee() {
  // Duplicate the array for seamless loop
  const duplicatedKeywords = [...keywords, ...keywords];

  return (
    <div className="w-full overflow-hidden bg-surface/50 border-y border-border/50 py-4 md:py-5">
      <div className="flex animate-marquee">
        {duplicatedKeywords.map((keyword, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-4 md:mx-6 flex-shrink-0"
          >
            <keyword.icon className="w-5 h-5 text-primary" />
            <span className="text-foreground font-heading font-semibold text-sm md:text-base whitespace-nowrap">
              {keyword.text}
            </span>
            <span className="text-primary/40 mx-2 md:mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
