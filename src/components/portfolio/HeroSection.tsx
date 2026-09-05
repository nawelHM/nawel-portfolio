
import { ArrowDown, Github, ExternalLink, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">

      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 hero-glow" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">

        {/* Tech badge */}
        <div className="flex justify-center mb-5 sm:mb-6 md:absolute md:top-24 md:right-0 md:mb-0">
          <div className="flex items-center gap-2 font-space-mono text-[10px] sm:text-xs text-muted-foreground border border-border rounded px-3 py-1.5 bg-card/60 backdrop-blur-sm whitespace-nowrap">
            <Terminal
              size={11}
              className="text-accent flex-shrink-0"
            />
            <span>full-stack · web · mobile · ai</span>
          </div>
        </div>

        {/* Availability */}
        <div className="inline-flex max-w-full items-center justify-center gap-2 font-space-mono text-[10px] sm:text-xs text-accent border border-accent/30 rounded-full px-3 sm:px-4 py-1.5 bg-accent/5 mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
          <span>Available for opportunities</span>
        </div>

        {/* Name */}
        <div className="font-space-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground/70 tracking-[0.12em] sm:tracking-[0.2em] mb-4 sm:mb-5 uppercase">
          Hammouda Nawel
        </div>

        {/* Main heading */}
        <h1 className="font-syne font-bold text-[clamp(2.25rem,9vw,5rem)] leading-[1.08] tracking-tight text-foreground mb-5 sm:mb-6">
          Full-Stack Software
          <span className="block text-accent">
            Engineer
          </span>
        </h1>

        {/* Description */}
        <p className="font-dm-sans text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
          I build modern web and mobile applications with a focus on
          thoughtful design, reliable architecture, and practical solutions.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-2">
          <a
            href="#projects"
            className="font-dm-sans font-medium px-4 sm:px-6 py-2.5 rounded bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 text-xs sm:text-sm flex items-center justify-center gap-2 min-w-[130px] sm:min-w-0"
          >
            <ExternalLink size={14} />
            View projects
          </a>

          <a
            href="#contact"
            className="font-dm-sans font-medium px-4 sm:px-6 py-2.5 rounded border border-border text-foreground hover:border-accent/50 transition-all duration-200 text-xs sm:text-sm flex items-center justify-center min-w-[115px] sm:min-w-0"
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
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors flex flex-col items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-space-mono"
        aria-label="Scroll to About section"
      >
        <span>scroll</span>
        <ArrowDown
          size={13}
          className="animate-bounce sm:w-[14px] sm:h-[14px]"
        />
      </a>
    </section>
  );
}
