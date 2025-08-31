"use client"
import { useEffect, useRef, useState } from "react"
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

function ExpandableText({
  text,
  collapsedLines,
  expanded,
  className,
}: {
  text: string
  collapsedLines: number
  expanded: boolean
  className?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const computed = window.getComputedStyle(el)
    const lineHeight = parseFloat(computed.lineHeight || "20")
    const collapsed = Math.round(lineHeight * collapsedLines)
    // First, set to auto to measure scrollHeight accurately
    const prevMax = el.style.maxHeight
    el.style.maxHeight = "none"
    const full = el.scrollHeight
    el.style.maxHeight = prevMax
    setMaxHeight(expanded ? full : collapsed)
  }, [text, collapsedLines, expanded])

  return (
    <p
      ref={ref}
      className={`expander ${className ?? ""}`}
      style={{ maxHeight: maxHeight !== undefined ? `${maxHeight}px` : undefined }}
    >
      {text}
    </p>
  )
}

const Artifacts = ({ artifact }: ArtifactProps) => {
  const IconComponent = iconMap[artifact.icon] || FileText
  const [descExpanded, setDescExpanded] = useState(false)
  const [reflExpanded, setReflExpanded] = useState(false)
  return (
    <Card className="h-full flex flex-col group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <IconComponent className="w-5 h-5 text-primary" />
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
        <CardTitle className="text-lg font-serif text-card-foreground leading-tight line-clamp-2">
          {artifact.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground mb-1">Description:</p>
          <ExpandableText
            text={artifact.description}
            collapsedLines={2}
            expanded={descExpanded}
            className="text-sm text-card-foreground leading-relaxed"
          />
          <button
            type="button"
            className="mt-1 text-xs font-medium text-primary hover:underline"
            onClick={() => setDescExpanded((v) => !v)}
            aria-expanded={descExpanded}
          >
            {descExpanded ? "Show less" : "Show more"}
          </button>
        </div>

        <div className="mt-4 bg-muted/50 p-3 rounded-lg border-l-4 border-secondary">
          <p className="text-xs font-medium text-muted-foreground mb-1">Reflection:</p>
          <ExpandableText
            text={artifact.reflection}
            collapsedLines={3}
            expanded={reflExpanded}
            className="text-sm text-card-foreground leading-relaxed"
          />
          <button
            type="button"
            className="mt-2 text-xs font-medium text-primary hover:underline"
            onClick={() => setReflExpanded((v) => !v)}
            aria-expanded={reflExpanded}
          >
            {reflExpanded ? "Show less" : "Show more"}
          </button>
        </div>

        <div className="mt-auto bg-accent/5 p-3 rounded-lg border border-accent/20">
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
