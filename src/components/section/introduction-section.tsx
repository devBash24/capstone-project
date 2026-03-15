import { Check, Quote } from "lucide-react"
import data from "@/data/eportfolio.json"


export function IntroductionSection() {
  const sectionOne = data.sectionOne;
  return (
    <section id="introduction" className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/85 p-8 shadow-sm md:p-12">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <p className="mb-4 text-lg font-semibold text-primary">{sectionOne.caption}</p>
            <h2 className="mb-4 text-4xl text-foreground md:text-5xl">Introduction</h2>
            <div className="mx-auto h-px w-24 bg-section-rule"></div>
          </div>

          <div className="mb-8 rounded-2xl border border-border bg-background/90 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-1 rounded-full bg-section-rule"></div>
              <h3 className="text-2xl text-foreground">Purpose Statement</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground/85">
              {sectionOne.purposeStatement}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-surface-soft/70 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-xl bg-primary p-2">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-foreground">Letter to Self</h3>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <p className="text-lg italic leading-relaxed text-foreground/85">
                  {sectionOne.letterToSelf}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/90 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-xl bg-accent p-2">
                  <Check className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl text-foreground">Key Milestones</h3>
              </div>
              <ul className="space-y-4">
                {sectionOne.keyMilestones.map((milestone, index) => (
                  <li key={index} className="flex items-start gap-3 rounded-lg border border-border bg-card/80 p-4 transition-all duration-300 hover:shadow-sm">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="leading-relaxed text-foreground/85">{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
