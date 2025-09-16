"use client";

import { useEffect, useMemo, useState } from "react";
import data from "@/data/eportfolio.json";
import { cn } from "@/lib/utils";
import { Menu, X} from "lucide-react";

const sections = [
  { id: "hero", label: "Home", icon: "🏠" },
  { id: "table-of-contents", label: "Explore", icon: "🧭" },
  { id: "introduction", label: "About", icon: "👋" },
  { id: "evidence", label: "Artifacts", icon: "💼" },
  { id: "future-goals", label: "Goals", icon: "🎯" },
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
    () => cn("font-bold text-xl transition-all duration-300 text-slate-800 hover:text-blue-600 group"),
    []
  );

  const linkBase =
    "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-all duration-500",
        scrolled
          ? "bg-white/95 border-b border-slate-200/60 shadow-xl"
          : "bg-white/30 border-b border-white/40"
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
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">{data.student.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {data.student.name}
                </div>
                <div className="text-xs text-slate-500 font-medium">ePortfolio</div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active === s.id ? "page" : undefined}
                className={cn(
                  linkBase,
                  "flex items-center gap-2 group",
                  active === s.id 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105" 
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-100/80"
                )}
              >
                <span className="text-sm">{s.icon}</span>
                <span className="font-medium">{s.label}</span>
                {active === s.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className={cn(
              "md:hidden relative p-3 rounded-xl transition-all duration-300",
              "bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg",
              "hover:bg-white hover:shadow-xl hover:scale-105",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            )}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {menuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden relative bg-white/95 backdrop-blur-md border-t border-slate-200/60 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-2 gap-3">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 group",
                    "bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg",
                    "hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50",
                    active === s.id && "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl scale-105"
                  )}
                >
                  <span className="text-lg">{s.icon}</span>
                  <div>
                    <div className={cn(
                      "font-semibold text-sm",
                      active === s.id ? "text-white" : "text-slate-800"
                    )}>
                      {s.label}
                    </div>
                    <div className={cn(
                      "text-xs",
                      active === s.id ? "text-blue-100" : "text-slate-500"
                    )}>
                      {s.id === "hero" && "Back to top"}
                      {s.id === "table-of-contents" && "Navigate portfolio"}
                      {s.id === "introduction" && "Learn about me"}
                      {s.id === "evidence" && "View my work"}
                      {s.id === "future-goals" && "See my goals"}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
