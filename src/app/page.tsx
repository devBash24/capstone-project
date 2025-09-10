import { EvidenceSection } from "@/components/section/evidence-section";
import { FutureGoalsSection } from "@/components/section/future-goals-section";
import { IntroductionSection } from "@/components/section/introduction-section";
import { TableOfContents } from "@/components/section/table-of-contents";
import Header from "@/components/header";
import data from "@/data/eportfolio.json";


export default async function Home() {

  return (
    <div className="min-h-screen bg-background">
    {/* Glass Header */}
    <Header />
    {/* Hero Section */}
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute top-40 right-32 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl animate-pulse delay-1000" aria-hidden="true"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-slate-200/40 rounded-full blur-lg animate-pulse delay-2000" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300/25 rounded-full blur-xl animate-pulse delay-3000" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center z-10">
        {/* Main Content */}
        <div className="space-y-8 mb-16">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-medium">Welcome to my ePortfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-6 leading-tight">
            {data.student.name}
          </h1>
          
          {/* Subtitle */}
          <div className="text-3xl md:text-4xl text-slate-600 font-light mb-6">
            ePortfolio
          </div>
          
          {/* Accent Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-8"></div>
          
          {/* Goal Statement */}
          <div className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            <span>Working towards becoming a </span>
            <span className="inline-block">
              <span className="typewriter-text">Software Developer</span>
              <span className="typewriter-cursor">|</span>
            </span>
          </div>
          
          {/* Motto */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/50 shadow-lg">
            <div className="text-6xl mb-4">✨</div>
            <p className="text-lg text-slate-700 italic leading-relaxed">
              &ldquo;{data.student.motto}&rdquo;
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a 
            href="#table-of-contents" 
            className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>🧭</span>
              Explore My Journey
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </a>
          <a 
            href={data.links.linkedIn} 
            className="group border-2 border-slate-300 text-slate-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            <span className="flex items-center gap-2">
              <span>💼</span>
              Connect on LinkedIn
            </span>
          </a>
        </div>

        {/* Stats/Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-3">📝</div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-slate-600 font-medium">Weekly Reflections</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-3">🎯</div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
            <div className="text-slate-600 font-medium">Goal Achievement</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-3">🚀</div>
            <div className="text-3xl font-bold text-slate-600 mb-2">∞</div>
            <div className="text-slate-600 font-medium">Growth Mindset</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    {/* Main Content */}
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
      {/* Table of Contents */}
      <TableOfContents />

      {/* Introduction Section */}
      <IntroductionSection />

      {/* Evidence of Learning Section */}
      <EvidenceSection />

      {/* Future Goals & Reflections Section */}
      <FutureGoalsSection />
    </main>

    {/* Updated Footer */}
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-t border-slate-200/50 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Let&apos;s Connect</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            I&apos;m always interested in connecting with fellow developers, mentors, and opportunities in the tech industry.
          </p>
        </div>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href={data.links.linkedIn} 
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">LinkedIn</span>
          </a>
          <a 
            href={data.links.github} 
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors">GitHub</span>
          </a>
          <a 
            href={`mailto:${data.links.email}`} 
            className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">Email</span>
          </a>
        </div>
        
        <div className="border-t border-slate-200/50 pt-8">
          <p className="text-slate-600 text-lg">{data.copyright}</p>
        </div>
      </div>
    </footer>
  </div>
  );
}
