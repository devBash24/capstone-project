import { Target, Lightbulb, CheckCircle } from "lucide-react"
import data from "@/data/eportfolio.json"

export function FutureGoalsSection() {
  const sectionThree = data.sectionThree

  return (
    <section id="future-goals" className="space-y-8">
      <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl p-8 md:p-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-semibold text-lg mb-4">{sectionThree.caption}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Future Goals & Reflections</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full mb-6"></div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200/50 max-w-3xl mx-auto">
              <p className="text-slate-700 leading-relaxed text-lg italic">
                &ldquo;{sectionThree.quote}&rdquo;
              </p>
              <p className="text-slate-600 text-sm mt-2">— {sectionThree.quoteAuthor}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Future Goals */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Future Goals</h3>
              </div>
              <div className="space-y-4">
                {sectionThree.futureGoals.map((goal, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-700 leading-relaxed font-medium">{goal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Insights & Reflections */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg border border-pink-200/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Key Insights</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  {sectionThree.keyInsights.map((insight, index) => (
                    <div key={index} className="flex gap-3 items-start p-4 bg-white/60 rounded-xl border border-pink-200/30">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 leading-relaxed italic">{insight}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/80 p-6 rounded-xl border border-pink-200/50 shadow-sm">
                  <h4 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    Ongoing Growth
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
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
