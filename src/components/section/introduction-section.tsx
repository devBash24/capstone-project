import { Quote } from "lucide-react"
import data from "@/data/eportfolio.json"


export function IntroductionSection() {
  const sectionOne = data.sectionOne;
  return (
    <section id="introduction" className="space-y-8">
      <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl p-8 md:p-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-lg mb-4">{sectionOne.caption}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Introduction</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Purpose Statement - Full Width */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-slate-800">Purpose Statement</h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              {sectionOne.purposeStatement}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Letter to Self */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-indigo-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Letter to Self</h3>
              </div>
              <div className="bg-white/80 p-6 rounded-xl border border-indigo-200/50 shadow-sm">
                <p className="text-slate-700 leading-relaxed italic text-lg">
                  {sectionOne.letterToSelf}
                </p>
              </div>
            </div>

            {/* Key Milestones */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                  <div className="w-6 h-6 text-white flex items-center justify-center font-bold">✓</div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Key Milestones</h3>
              </div>
              <ul className="space-y-4">
                {sectionOne.keyMilestones.map((milestone, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-white/60 rounded-lg border border-blue-200/30 hover:shadow-md transition-all duration-300">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-slate-700 leading-relaxed">{milestone}</span>
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
