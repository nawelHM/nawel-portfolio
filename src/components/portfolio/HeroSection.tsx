
import { ArrowDown, Github, ExternalLink, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 hero-glow" />

      {/* Tech badge */}
      <div className="absolute top-24 right-6 md:right-12 flex items-center gap-2 font-space-mono text-xs text-muted-foreground border border-border rounded px-3 py-1.5 bg-card/60 backdrop-blur-sm">
        <Terminal size={12} className="text-accent" />
        <span>full-stack · web · mobile · ai</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Availability */}
        <div className="inline-flex items-center gap-2 font-space-mono text-xs text-accent border border-accent/30 rounded-full px-4 py-1.5 bg-accent/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <div className="font-space-mono text-xs md:text-sm text-muted-foreground/70 tracking-[0.2em] mb-5 uppercase">
          Hammouda Nawel
        </div>

        {/* Main heading */}
        <h1 className="font-syne font-bold text-[clamp(2.6rem,6vw,5rem)] leading-[1.08] tracking-tight text-foreground mb-6">
          Full-Stack Software
          <span className="block text-accent">Engineer</span>
        </h1>

        {/* Description */}
        <p className="font-dm-sans text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          I build modern web and mobile applications with a focus on
          thoughtful design, reliable architecture, and practical solutions.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a
            href="#projects"
            className="font-dm-sans font-medium px-6 py-2.5 rounded bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 text-sm flex items-center gap-2"
          >
            <ExternalLink size={14} />
            View projects
          </a>

          <a
            href="#contact"
            className="font-dm-sans font-medium px-6 py-2.5 rounded border border-border text-foreground hover:border-accent/50 transition-all duration-200 text-sm"
          >
            Get in touch
          </a>

          <a
            href="https://github.com/nawelHM"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center gap-2 text-xs font-space-mono"
      >
        <span>scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
