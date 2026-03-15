import { BookOpen, FolderOpen, Rocket } from "lucide-react"

export function TableOfContents() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      description: "My journey begins here",
      icon: BookOpen,
      tone: "primary",
    },
    {
      id: "evidence",
      title: "Evidence of Learning",
      description: "Showcasing my growth",
      icon: FolderOpen,
      tone: "accent",
    },
    {
      id: "future-goals",
      title: "Future Goals & Reflections",
      description: "Looking ahead",
      icon: Rocket,
      tone: "muted",
    },
  ]

  return (
    <section id="table-of-contents" className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/85 p-8 shadow-sm md:p-12">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl text-foreground md:text-5xl">Table of Contents</h2>
            <div className="mx-auto mb-4 h-px w-24 bg-section-rule"></div>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">Navigate through my academic portfolio and discover my journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              const toneClasses =
                section.tone === "primary"
                  ? "bg-primary text-primary-foreground"
                  : section.tone === "accent"
                    ? "bg-accent text-white"
                    : "bg-surface-strong text-foreground"
              const iconClass = section.tone === "muted" ? "h-8 w-8 text-foreground" : "h-8 w-8 text-white"
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group relative block"
                >
                  <div className="relative rounded-2xl border border-border bg-background/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/25 hover:shadow-md"
                       style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="absolute inset-0 rounded-2xl bg-surface-soft/0 transition-colors duration-300 group-hover:bg-surface-soft/50"></div>
                    
                    <div className="relative z-10 text-center space-y-6">
                      <div className={`inline-flex rounded-2xl p-4 shadow-sm ${toneClasses}`}>
                        <IconComponent className={iconClass} />
                      </div>
                      <div>
                        <h3 className="mb-3 text-2xl text-foreground transition-colors group-hover:text-primary">{section.title}</h3>
                        <p className="leading-relaxed text-muted-foreground">{section.description}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
