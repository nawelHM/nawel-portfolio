
import React from "react";
import { useIntersection } from "@/hooks/use-intersection";

interface SkillItem {
  name: string;
  color: string;
}

const SKILL_CATEGORIES: {
  label: string;
  icon: string;
  skills: SkillItem[];
}[] = [
  {
    label: "Frontend",
    icon: "⬡",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "React Native", color: "#61DAFB" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "HTML / CSS", color: "#E34F26" },
      { name: "Tailwind CSS", color: "#38BDF8" },
    ],
  },
  {
    label: "Backend",
    icon: "⬡",
    skills: [
      { name: "Node.js", color: "#68A063" },
      { name: "Express", color: "#ffffff" },
      { name: "Java", color: "#ED8B00" },
      { name: "Spring Boot", color: "#6DB33F" },
      { name: "Spring Security", color: "#6DB33F" },
      { name: "REST APIs", color: "#1cd4ef" },
    ],
  },
  {
    label: "Databases",
    icon: "⬡",
    skills: [
      { name: "MySQL", color: "#4479A1" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47A248" },
      { name: "JPA / Hibernate", color: "#59666C" },
    ],
  },
  {
    label: "Tools & Other",
    icon: "⬡",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#ffffff" },
      { name: "Docker", color: "#2496ED" },
      { name: "Python", color: "#3776AB" },
      { name: "Flask", color: "#ffffff" },
      { name: "NLP", color: "#1cd4ef" },
    ],
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="font-space-mono text-accent text-xs mb-4 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-accent" />
            02 / Skills
          </div>

          <h2 className="font-syne font-bold text-3xl md:text-4xl text-foreground mb-12 leading-tight">
            What I work with
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div
              key={cat.label}
              className={`reveal reveal-delay-${ci + 1} ${
                isVisible ? "is-visible" : ""
              }`}
            >
              <h3 className="font-space-mono text-xs text-muted-foreground mb-4 uppercase tracking-widest flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                {cat.label}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-badge font-dm-sans text-xs text-muted-foreground border border-border rounded px-3 py-1.5 cursor-default flex items-center gap-1.5"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: skill.color }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
