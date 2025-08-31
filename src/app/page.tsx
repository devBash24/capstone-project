import { EvidenceSection } from "@/components/section/evidence-section";
import { FutureGoalsSection } from "@/components/section/future-goals-section";
import { IntroductionSection } from "@/components/section/introduction-section";
import { TableOfContents } from "@/components/section/table-of-contents";
import data from "@/data/eportfolio.json";


export default async function Home() {

  return (
    <div className="min-h-screen bg-background">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">{data.student.name}&apos;s ePortfolio</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {data.student.goal}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg">
            Explore My Work
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
            Download Resume
          </button>
        </div>
      </div>
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/15 rounded-full blur-2xl"></div>
    </section>

    {/* Updated Header */}
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-serif font-bold text-xl text-foreground">{data.student.name}</div>
          <div className="hidden md:flex space-x-8">
            <a href="#introduction" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#evidence" className="text-muted-foreground hover:text-primary transition-colors">
              Work
            </a>
            <a href="#goals" className="text-muted-foreground hover:text-primary transition-colors">
              Goals
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>

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
    <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-muted-foreground text-lg">© 2024 My ePortfolio. Crafted with passion for excellence.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href={data.links.linkedIn} className="text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href={data.links.github} className="text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </a>
          <a href={data.links.email} className="text-muted-foreground hover:text-primary transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  </div>
  );
}
