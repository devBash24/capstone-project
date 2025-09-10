import { BookOpen, FolderOpen, Rocket } from "lucide-react"

export function TableOfContents() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      description: "My journey begins here",
      icon: BookOpen,
      gradient: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      id: "evidence",
      title: "Evidence of Learning",
      description: "Showcasing my growth",
      icon: FolderOpen,
      gradient: "from-indigo-500 to-purple-600",
      bg: "bg-indigo-50",
      border: "border-indigo-200",
    },
    {
      id: "future-goals",
      title: "Future Goals & Reflections",
      description: "Looking ahead",
      icon: Rocket,
      gradient: "from-purple-500 to-pink-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
  ]

  return (
    <section id="table-of-contents" className="space-y-8">
      <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl p-8 md:p-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Table of Contents</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Navigate through my academic portfolio and discover my journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group relative block"
                >
                  <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border ${section.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform`}
                       style={{ animationDelay: `${index * 150}ms` }}>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10 text-center space-y-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${section.gradient} shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{section.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{section.description}</p>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
