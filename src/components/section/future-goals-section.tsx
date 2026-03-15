import { Target, Lightbulb, CheckCircle } from "lucide-react"
import data from "@/data/eportfolio.json"

export function FutureGoalsSection() {
  const sectionThree = data.sectionThree

  return (
    <section id="future-goals" className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/85 p-8 shadow-sm md:p-12">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <p className="mb-4 text-lg font-semibold text-primary">{sectionThree.caption}</p>
            <h2 className="mb-4 text-4xl text-foreground md:text-5xl">Future Goals & Reflections</h2>
            <div className="mx-auto mb-6 h-px w-24 bg-section-rule"></div>
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface-soft/70 p-6">
              <p className="text-lg italic leading-relaxed text-foreground/85">
                &ldquo;{sectionThree.quote}&rdquo;
              </p>
              <p className="mt-2 text-sm text-muted-foreground">— {sectionThree.quoteAuthor}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-background/90 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-xl bg-primary p-2">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-foreground">Future Goals</h3>
              </div>
              <div className="space-y-4">
                {sectionThree.futureGoals.map((goal, index) => (
                  <div key={index} className="flex gap-4 rounded-xl border border-border bg-surface-soft/65 p-6 transition-all duration-300 hover:shadow-sm">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium leading-relaxed text-foreground/85">{goal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface-soft/75 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-xl bg-accent p-2">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-foreground">Key Insights</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  {sectionThree.keyInsights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-xl border border-border bg-card/80 p-4">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent"></div>
                      <p className="italic leading-relaxed text-foreground/85">{insight}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h4 className="mb-3 flex items-center gap-2 text-xl text-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    Ongoing Growth
                  </h4>
                  <p className="leading-relaxed text-muted-foreground">
                    {sectionThree.ongoingGrowth}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
