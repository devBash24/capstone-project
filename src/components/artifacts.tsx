"use client";
import { Badge } from "./ui/badge";
import {
  Calendar,
  Timer,
  ListChecks,
  Home,
  BookOpen,
  Dumbbell,
  Wallet,
  Notebook,
  Linkedin,
  Star,
  FileText,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Timer,
  ListChecks,
  Calendar,
  Home,
  BookOpen,
  Dumbbell,
  Wallet,
  Notebook,
  Linkedin,
  Star,
};
const typeColors = {
  productivity: 'bg-primary/10 text-primary border-primary/20',
  'time-management': 'bg-accent/10 text-accent border-accent/20',
  balance: 'bg-success/10 text-success border-success/20',
  journaling: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  fitness: 'bg-red-500/10 text-red-600 border-red-500/20',
} as const;


type ArtifactProps = {
  artifact: {
    date: string;
    title: string;
    description: string;
    reflection: string;
    quote: string;
    quoteAuthor: string;
    icon: string;
    type: string;
}
  index:number
};

const Artifacts = ({ artifact,index }: ArtifactProps) => {
  const IconComponent = iconMap[artifact.icon] || FileText;

  return (
    <div
      className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-xl border ${
              typeColors[artifact.type as keyof typeof typeColors] || 'bg-muted/10 text-muted-foreground border-muted/20'
            }`}
          >
            <IconComponent className="w-6 h-6" />
          </div>
          <Badge variant="outline" className="text-xs font-medium bg-muted/50">
            {artifact.date}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
          {artifact.title}
        </h3>

        {/* Description */}
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full"></div>
              Description
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {artifact.description}
            </p>
          </div>

          {/* Reflection */}
          <div>
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2 flex items-center gap-2">
              <div className="w-1 h-4 bg-accent rounded-full"></div>
              Reflection
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {artifact.reflection}
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="relative pt-4 mt-6 border-t border-border/50">
          <div className="absolute left-0 top-0 w-8 h-px bg-gradient-primary"></div>
          <blockquote className="text-sm italic text-foreground/80 leading-relaxed">
            &ldquo;{artifact.quote}&rdquo;
          </blockquote>
          <cite className="text-xs text-muted-foreground mt-2 block">
            — {artifact.quoteAuthor}
          </cite>
        </div>
      </div>
    </div>
  );
};

export default Artifacts;
