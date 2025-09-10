import data from "@/data/eportfolio.json"
import Artifacts from "../artifacts";



export function EvidenceSection() {
  const sectionTwo = data.sectionTwo;
  return (
    <section id="evidence" className="space-y-8">
       <div className="rounded-2xl border border-border shadow-sm bg-card p-6 md:p-8">
    <div className="text-center">
      <p className="text-accent-foreground font-medium mb-2">{sectionTwo.caption}</p>
      <h2 className="text-3xl font-serif font-bold text-foreground">Evidence of Learning</h2>
      <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
        A curated collection of academic work, projects, and achievements that demonstrate my learning journey and
        skill development.
      </p>
    </div>
 
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {
            sectionTwo.artifacts.map((artifact,index)=>(
              <div key={index} className="break-inside-avoid">
                <Artifacts index={index} artifact={artifact}/>
              </div>
            ))
          }
        </div>
        </div>
      
  </section>
  )
}
