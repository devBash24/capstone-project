"use client";

import { useEffect, useMemo, useState } from "react";
import data from "@/data/eportfolio.json";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness, House, Menu, Telescope, Target, UserRound, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Home", icon: House },
  { id: "table-of-contents", label: "Explore", icon: Telescope },
  { id: "introduction", label: "About", icon: UserRound },
  { id: "evidence", label: "Artifacts", icon: BriefcaseBusiness },
  { id: "future-goals", label: "Goals", icon: Target },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(sections[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const brandClasses = useMemo(
    () => cn("group text-xl font-bold text-foreground transition-all duration-300 hover:text-primary"),
    []
  );

  const linkBase =
    "relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/95 shadow-sm"
          : "border-b border-border/50 bg-background/75"
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between gap-4">
          {/* Brand */}
          <a href="#hero" className={brandClasses}>
            <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-sm">
                <span className="text-white font-bold text-lg">{data.student.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {data.student.name}
                </div>
                <div className="text-xs font-medium text-muted-foreground">ePortfolio</div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "page" : undefined}
                  className={cn(
                    linkBase,
                    "flex items-center gap-2 group",
                    active === s.id
                      ? "scale-105 bg-card text-foreground shadow-sm ring-1 ring-border"
                      : "text-muted-foreground hover:bg-card hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="font-medium">{s.label}</span>
                  {active === s.id && (
                    <div className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-section-rule"></div>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className={cn(
              "md:hidden relative p-3 rounded-xl transition-all duration-300",
              "border border-border bg-card shadow-sm",
              "hover:scale-105 hover:bg-background hover:shadow-md",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {menuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="relative border-t border-border bg-background/95 backdrop-blur-md shadow-sm md:hidden">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-2 gap-3">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl p-4 transition-all duration-300 group",
                      "border border-border bg-card shadow-sm",
                      "hover:scale-105 hover:border-primary/20 hover:shadow-md",
                      active === s.id && "scale-105 border-primary/20 bg-surface-soft text-foreground shadow-md"
                    )}
                  >
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {s.label}
                      </div>
                      <div className={cn(
                        "text-xs",
                        active === s.id ? "text-primary" : "text-muted-foreground"
                      )}>
                        {s.id === "hero" && "Back to top"}
                        {s.id === "table-of-contents" && "Navigate portfolio"}
                        {s.id === "introduction" && "Learn about me"}
                        {s.id === "evidence" && "View my work"}
                        {s.id === "future-goals" && "See my goals"}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
