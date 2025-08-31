import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"
import data from "@/data/eportfolio.json"


export function IntroductionSection() {
  const sectionOne = data.sectionOne;
  return (
    <section id="introduction" className="space-y-8">
      <div className="text-center">
        <p className="text-secondary font-medium mb-2">{sectionOne.caption}</p>
        <h2 className="text-3xl font-serif font-bold text-foreground">Introduction</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Purpose Statement */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-card-foreground">Purpose Statement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-card-foreground leading-relaxed">
              {sectionOne.purposeStatement}
            </p>
            {/* <p className="text-card-foreground leading-relaxed">
              Welcome to my digital portfolio, a comprehensive showcase of my academic journey, professional
              development, and personal growth. This ePortfolio serves as a living document that chronicles my
              educational experiences, achievements, and reflections.
            </p> */}
            {/* <p className="text-muted-foreground leading-relaxed">
              Through this collection of work, I aim to demonstrate my commitment to lifelong learning, critical
              thinking, and professional excellence. Each artifact represents a milestone in my educational journey and
              contributes to my overall growth as a scholar.
            </p> */}
          </CardContent>
        </Card>

        {/* Letter to Self */}
        <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-card-foreground flex items-center gap-2">
              <Quote className="w-5 h-5 text-secondary" />
              Letter to Self
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-background/80 p-4 rounded-lg border border-border">
              <p className="text-card-foreground leading-relaxed italic">
                {sectionOne.letterToSelf}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-card-foreground">Key Milestones:</h4>
              <ul className="space-y-1 text-muted-foreground">
                {sectionOne.keyMilestones.map((milestone, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    {milestone}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
