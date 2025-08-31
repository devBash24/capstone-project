"use client";

import { useEffect, useMemo, useState } from "react";
import data from "@/data/eportfolio.json";
import { cn } from "@/lib/utils";

const sections = [
  { id: "table-of-contents", label: "Explore" },
  { id: "introduction", label: "About" },
  { id: "evidence", label: "Work" },
  { id: "future-goals", label: "Goals" },
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
    () => cn("font-serif font-bold text-xl transition-colors text-foreground"),
    []
  );

  const linkBase =
    "transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-all",
        scrolled
          ? "bg-card/80 border-b border-border shadow-sm"
          : "bg-background/30 border-b border-white/30"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-3">
        <nav className="flex items-center justify-between gap-4">
          <a href="#table-of-contents" className={brandClasses}>
            {data.student.name}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active === s.id ? "page" : undefined}
                className={cn(
                  linkBase,
                  "text-foreground/80 hover:text-foreground",
                  active === s.id && "text-primary"
                )}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className={cn(
              "md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              "border-border text-foreground hover:bg-muted"
            )}
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className={cn(
            "md:hidden px-6 pb-4 bg-card/80 border-t border-border"
          )}
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  linkBase,
                  "text-foreground/80 hover:text-foreground",
                  active === s.id && "text-primary"
                )}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
