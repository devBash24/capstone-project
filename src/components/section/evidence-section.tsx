import data from "@/data/eportfolio.json"
import Artifacts from "../artifacts";



export function EvidenceSection() {
  const sectionTwo = data.sectionTwo;
  return (
    <section id="evidence" className="space-y-8">
    <div className="text-center">
      <p className="text-accent font-medium mb-2">{sectionTwo.caption}</p>
      <h2 className="text-3xl font-serif font-bold text-foreground">Evidence of Learning</h2>
      <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
        A curated collection of academic work, projects, and achievements that demonstrate my learning journey and
        skill development.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sectionTwo.artifacts.map((artifact) => {
        return <Artifacts key={artifact.date} artifact={artifact} />
      })}
    </div>
  </section>
  )
}
