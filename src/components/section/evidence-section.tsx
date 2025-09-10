import data from "@/data/eportfolio.json"
import Artifacts from "../artifacts";



export function EvidenceSection() {
  const sectionTwo = data.sectionTwo;
  return (
    <section id="evidence" className="space-y-8">
      <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl p-8 md:p-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <p className="text-indigo-600 font-semibold text-lg mb-4">{sectionTwo.caption}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Evidence of Learning</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A curated collection of academic work, projects, and achievements that demonstrate my learning journey and
              skill development.
            </p>
          </div>
 
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {sectionTwo.artifacts
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .map((artifact,index)=>(
                <div key={index} className="break-inside-avoid">
                  <Artifacts index={index} artifact={artifact}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
