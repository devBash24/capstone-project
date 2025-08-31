import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, CheckCircle } from "lucide-react"
import data from "@/data/eportfolio.json"

export function FutureGoalsSection() {
  const sectionThree = data.sectionThree

  return (
    <section id="future-goals" className="space-y-8">
      <div className="rounded-2xl border border-border shadow-sm bg-card p-6 md:p-8">
      <div className="text-center mb-8">
        <p className="text-primary font-medium mb-2">{sectionThree.caption}</p>
        <h2 className="text-3xl font-serif font-bold text-foreground">Future Goals & Reflections</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          {sectionThree.quote}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Future Goals */}
        <Card className="bg-card border-border rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-card-foreground flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Future Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sectionThree.futureGoals.map((goal, index) => (
              <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div className="space-y-2">
                  <p className="text-card-foreground leading-relaxed">{goal}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Insights & Reflections */}
        <Card className="bg-accent/10 border-accent/30 rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-card-foreground flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {sectionThree.keyInsights.map((insight, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground leading-relaxed italic">{insight}</p>
                </div>
              ))}
            </div>

            <div className="bg-background/80 p-4 rounded-lg border border-border">
              <h4 className="font-semibold text-card-foreground mb-2">Ongoing Growth</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {sectionThree.ongoingGrowth}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </section>
  )
}
