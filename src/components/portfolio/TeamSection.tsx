
import React from "react";
import {
  Code2,
  Layers3,
  Smartphone,
  BrainCircuit,
} from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const FOCUS_AREAS = [
  {
    number: "01",
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete web applications with intuitive interfaces, reliable APIs, and well-structured backend systems.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Designing clean and maintainable solutions using modern architectures, databases, APIs, and microservices.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Creating responsive cross-platform mobile experiences with a focus on usability, performance, and consistency.",
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "Intelligent Solutions",
    description:
      "Exploring AI, NLP, and data-driven approaches to create smarter applications and solve real-world problems.",
  },
];

export function TeamSection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="focus"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div
          className={`max-w-2xl mb-14 reveal ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="font-space-mono text-accent text-xs mb-4">
            04 / What I Bring
          </div>

          <h2 className="font-syne font-bold text-3xl md:text-4xl text-foreground mb-5">
            Building with purpose.
          </h2>

          <p className="text-muted-foreground font-dm-sans leading-relaxed">
            I combine development, architecture, and problem-solving to
            transform ideas into practical digital solutions.
          </p>
        </div>

        {/* Focus areas */}
        <div className="grid md:grid-cols-2 gap-5">
          {FOCUS_AREAS.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`portfolio-card rounded-lg p-7 md:p-8 reveal reveal-delay-${
                  index + 1
                } ${isVisible ? "is-visible" : ""}`}
              >
                <div className="flex items-start justify-between mb-7">
                  <div className="w-11 h-11 rounded-md border border-border flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>

                  <span className="font-space-mono text-xs text-muted-foreground">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-xl text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="font-dm-sans text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
