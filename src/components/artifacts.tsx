import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Calendar, Timer, ListChecks, Home, BookOpen, Dumbbell, Wallet, Notebook, Linkedin, Star, FileText } from "lucide-react"


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
}

type ArtifactProps = {
  artifact: {
    date: string
    title: string
    description: string
    reflection: string
    quote: string
    icon: string
  }
}

const Artifacts = ({ artifact }: ArtifactProps) => {
  const IconComponent = iconMap[artifact.icon] || FileText
  return (
    <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-muted rounded-lg">
              <IconComponent className="w-5 h-5 text-accent" />
            </div>
            <Badge variant="secondary" className="text-xs">
              {/* category */}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span className="text-xs">{artifact.date}</span>
          </div>
        </div>
        <CardTitle className="text-lg font-serif text-card-foreground leading-tight">
          {artifact.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Description:</p>
          <p className="text-sm text-card-foreground leading-relaxed">{artifact.description}</p>
        </div>

        <div className="bg-muted/50 p-3 rounded-lg border-l-4 border-secondary">
          <p className="text-xs font-medium text-muted-foreground mb-1">Reflection:</p>
          <p className="text-sm text-card-foreground leading-relaxed">{artifact.reflection}</p>
        </div>

        <div className="bg-accent/5 p-3 rounded-lg border border-accent/20">
          <div className="flex items-start gap-2">
            <IconComponent className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
            <p className="text-sm italic text-accent font-medium leading-relaxed">{artifact.quote}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Artifacts
