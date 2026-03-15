import { EvidenceSection } from "@/components/section/evidence-section";
import { FutureGoalsSection } from "@/components/section/future-goals-section";
import { IntroductionSection } from "@/components/section/introduction-section";
import { TableOfContents } from "@/components/section/table-of-contents";
import { ContactSection } from "@/components/section/contact-section";
import Header from "@/components/header";
import data from "@/data/eportfolio.json";
import { BriefcaseBusiness, Mail, Sparkles, Telescope } from "lucide-react";


export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
    <Header />
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="absolute inset-x-0 top-0 h-48 bg-surface-soft/80"></div>
      <div className="absolute top-20 left-20 h-20 w-20 rounded-full bg-hero-dot/35 blur-xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute top-40 right-32 h-32 w-32 rounded-full bg-accent-soft/30 blur-2xl animate-pulse delay-1000" aria-hidden="true"></div>
      <div className="absolute bottom-32 left-1/4 h-16 w-16 rounded-full bg-muted/80 blur-lg animate-pulse delay-2000" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-20 h-24 w-24 rounded-full bg-surface-strong/70 blur-xl animate-pulse delay-3000" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center z-10">
        {/* Main Content */}
        <div className="space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-6 py-3 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
            <span className="font-medium text-foreground">Welcome to my ePortfolio</span>
          </div>

          <h1 className="mb-6 text-6xl leading-tight text-foreground md:text-8xl">
            {data.student.name}
          </h1>
          <div className="mb-6 text-3xl font-light text-muted-foreground md:text-4xl">
            ePortfolio
          </div>
          <div className="mx-auto mb-8 h-px w-32 bg-section-rule"></div>
          <div className="mx-auto mb-8 max-w-4xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl">
            <span>Working towards becoming a </span>
            <span className="inline-block">
              <span className="typewriter-text">Software Developer</span>
              <span className="typewriter-cursor">|</span>
            </span>
          </div>
          
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/90 p-8 shadow-sm">
            <div className="mb-4 flex justify-center">
              <Sparkles className="h-12 w-12 text-primary" aria-hidden="true" />
            </div>
            <p className="text-lg italic leading-relaxed text-foreground/85">
              &ldquo;{data.student.motto}&rdquo;
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a 
            href="#table-of-contents" 
            className="rounded-2xl bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-accent-strong hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              <Telescope className="h-5 w-5" aria-hidden="true" />
              Explore My Journey
            </span>
          </a>
          <a 
            href={data.links.linkedIn} 
            className="rounded-2xl border border-border bg-card px-10 py-4 text-lg font-semibold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:text-primary hover:shadow-md"
          >
            <span className="flex items-center gap-2">
              <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              Connect on LinkedIn
            </span>
          </a>
          <a 
            href="#contact" 
            className="rounded-2xl border border-primary/20 bg-accent-soft/50 px-10 py-4 text-lg font-semibold text-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-accent-soft hover:shadow-md"
          >
            <span className="flex items-center gap-2">
              <Mail className="h-5 w-5" aria-hidden="true" />
              Contact Me
            </span>
          </a>
        </div>

      
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/40">
          <div className="mt-2 h-3 w-1 rounded-full bg-muted-foreground/50 animate-pulse"></div>
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

      {/* Contact Section */}
      <ContactSection />
    </main>

    <footer className="relative mt-20 overflow-hidden border-t border-border bg-surface-soft/60">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <h3 className="mb-4 text-2xl text-foreground">Let&apos;s Connect</h3>
          <div className="mx-auto mb-6 h-px w-16 bg-section-rule"></div>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            I&apos;m always interested in connecting with fellow developers, mentors, and opportunities in the tech industry.
          </p>
        </div>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href={data.links.linkedIn} 
            className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="font-medium text-foreground transition-colors group-hover:text-primary">LinkedIn</span>
          </a>
          <a 
            href={data.links.github} 
            className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span className="font-medium text-foreground">GitHub</span>
          </a>
          <a 
            href="#contact" 
            className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-medium text-foreground transition-colors group-hover:text-primary">Contact Form</span>
          </a>
          <a 
            href={`mailto:${data.links.email}`} 
            className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-medium text-foreground transition-colors group-hover:text-primary">Email</span>
          </a>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-lg text-muted-foreground">{data.copyright}</p>
        </div>
      </div>
    </footer>
  </div>
  );
}
