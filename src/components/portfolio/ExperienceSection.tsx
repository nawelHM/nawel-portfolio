
import React from "react";
import { useIntersection } from "@/hooks/use-intersection";

const TIMELINE = [
  {
    year: "Jul. 2023 — Sep. 2023",
    title: "Mobile Developer Intern",
    org: "TAC-TIC",
    desc: "Developed a mobile leave request application with React Native and a Laravel REST API, focusing on practical workflows and a smooth user experience.",
  },
  {
    year: "May 2024 — Sep. 2024",
    title: "Front-End Developer",
    org: "Freelance",
    desc: "Built responsive educational web interfaces, integrated REST APIs, and improved user-facing features with a focus on usability and performance.",
  },
  {
    year: "May 2024 — Dec. 2024",
    title: "Full-Stack Developer",
    org: "Dopify",
    desc: "Contributed to an intelligent recruitment platform and mobile HR management application, working across UI/UX, development, testing, and deployment workflows.",
  },
  {
    year: "Oct. 2025 — Dec. 2025",
    title: "Full-Stack Developer",
    org: "Freelance",
    desc: "Developed a complete e-commerce platform with React, Node.js, Express, and MongoDB, including product management, cart functionality, authentication, and deployment.",
  },
  {
    year: "Nov. 2025 — Jan. 2026",
    title: "Full-Stack Developer",
    org: "Freelance",
    desc: "Built a food delivery platform with React, Node.js, Express, and MongoDB, covering restaurants, menus, cart management, order processing, authentication, and deployment.",
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="font-space-mono text-accent text-xs mb-4">
            05 / Experience
          </div>

          <h2 className="font-syne font-bold text-3xl md:text-4xl text-foreground mb-5 leading-tight">
            Professional Journey
          </h2>

          <p className="max-w-2xl font-dm-sans text-muted-foreground leading-relaxed mb-12">
            A selection of experiences where I’ve built software, solved
            real-world problems, and grown across different areas of
            development.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl space-y-0">
          {TIMELINE.map((item, i) => (
            <div
              key={`${item.year}-${item.org}`}
              className={`relative pl-8 pb-10 last:pb-0 reveal reveal-delay-${
                (i % 4) + 1
              } ${isVisible ? "is-visible" : ""}`}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-1.5 bottom-0 w-px bg-border" />

              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-accent bg-background" />

              {/* Year */}
              <div className="font-space-mono text-xs text-accent mb-2">
                {item.year}
              </div>

              {/* Position */}
              <h3 className="font-syne font-semibold text-foreground text-lg leading-tight mb-1">
                {item.title}
              </h3>

              {/* Organization */}
              <div className="font-dm-sans text-sm text-muted-foreground/70 mb-2">
                {item.org}
              </div>

              {/* Description */}
              <p className="font-dm-sans text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
