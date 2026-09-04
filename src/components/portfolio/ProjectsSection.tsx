
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const PROJECTS = [
  {
    name: "Smart Recruitment Platform",
    description:
      "Full-stack recruitment platform designed to streamline candidate management and evaluation, with a dedicated mobile application for HR management and intelligent recruitment features.",
    tech: [
      "React",
      "React Native",
      "Spring Boot",
      "Microservices",
      "Docker",
      "GitLab",
    ],
    status: "Featured Project",
    github: null,
    demo: null,
  },
  {
    name: "Food Delivery Platform",
    description:
      "Complete food delivery application with restaurant and menu management, shopping cart, order processing, and secure user authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Render"],
    status: "Full Stack",
    github: "https://github.com/nawelHM/food_delv",
    demo: null,
  },
  {
    name: "E-Commerce Platform",
    description:
      "Modern e-commerce platform with product management, shopping cart functionality, secure authentication, and a responsive user experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Render"],
    status: "Full Stack",
    github: "https://github.com/nawelHM/Mern_ECommerce_App",
    demo: null,
  },
  {
    name: "Microservices Mobile App",
    description:
      "Complex mobile application built around a microservices architecture, combining multiple backend technologies with event-driven communication and containerization.",
    tech: [
      "React Native",
      "Spring Boot",
      "Laravel",
      "Kafka",
      "Docker",
    ],
    status: "Microservices",
    github: null,
    demo: null,
  },
  {
    name: "Deep Learning Recognition",
    description:
      "Web application for plan recognition using deep learning models, with a Flask backend connecting prediction models to the user interface.",
    tech: ["Python", "Flask", "Deep Learning", "Machine Learning"],
    status: "AI / Deep Learning",
    github: null,
    demo: null,
  },
  {
    name: "Medical Office Manager",
    description:
      "Desktop application designed to simplify the management of a medical office, including patient and appointment management.",
    tech: ["Java", "JavaFX"],
    status: "Desktop Application",
    github: null,
    demo: null,
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
          <div className="font-space-mono text-accent text-xs mb-4">
            03 / Projects
          </div>

          <div className="flex items-end justify-between mb-12">
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Things I've built
            </h2>

            <a
              href="https://github.com/nawelHM"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans text-sm text-muted-foreground hover:text-accent transition-colors hidden md:flex items-center gap-1.5"
            >
              <Github size={14} />
              All on GitHub
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className={`portfolio-card rounded-lg p-6 flex flex-col reveal reveal-delay-${
                (i % 3) + 1
              } ${isVisible ? "is-visible" : ""}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-syne font-semibold text-lg text-foreground mb-1">
                    {project.name}
                  </h3>

                  <span className="font-space-mono text-xs text-accent">
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.name} GitHub repository`}
                    >
                      <Github size={16} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.name} live demo`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="font-dm-sans text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-space-mono text-xs text-muted-foreground/70 bg-secondary px-2 py-0.5 rounded"
                  >
                    {t}
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
