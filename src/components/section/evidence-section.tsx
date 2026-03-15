"use client"
import data from "@/data/eportfolio.json"
import Artifacts from "../artifacts";

import Masonry from "react-masonry-css"
const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};


export function EvidenceSection() {
  const sectionTwo = data.sectionTwo;
  const artifacts = sectionTwo.artifacts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  return (
    <section id="evidence" className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/85 p-8 shadow-sm md:p-12">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <p className="mb-4 text-lg font-semibold text-primary">{sectionTwo.caption}</p>
            <h2 className="mb-4 text-4xl text-foreground md:text-5xl">Evidence of Learning</h2>
            <div className="mx-auto mb-6 h-px w-24 bg-section-rule"></div>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              A curated collection of academic work, projects, and achievements that demonstrate my learning journey and
              skill development.
            </p>
          </div>
          <Masonry
  breakpointCols={breakpointColumnsObj}
  className="flex gap-8"
  columnClassName="space-y-8"
>
  {artifacts.map((artifact, index) => (
    <Artifacts key={index} index={index} artifact={artifact} />
  ))}
</Masonry>
        </div>
      </div>
    </section>
  )
}
