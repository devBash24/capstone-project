import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, FolderOpen, Rocket } from "lucide-react"

export function TableOfContents() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      description: "My journey begins here",
      icon: BookOpen,
      color: "text-secondary",
    },
    {
      id: "evidence",
      title: "Evidence of Learning",
      description: "Showcasing my growth",
      icon: FolderOpen,
      color: "text-accent",
    },
    {
      id: "future-goals",
      title: "Future Goals & Reflections",
      description: "Looking ahead",
      icon: Rocket,
      color: "text-primary",
    },
  ]

  return (
    <section id="table-of-contents" className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold text-foreground mb-2">Table of Contents</h2>
        <p className="text-muted-foreground">Navigate through my academic portfolio</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((section) => {
          const IconComponent = section.icon
          return (
            <Card
              key={section.id}
              className="group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`inline-flex p-3 rounded-full bg-muted ${section.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-card-foreground mb-2">{section.title}</h3>
                  <p className="text-muted-foreground text-sm">{section.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
