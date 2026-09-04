
import React from "react";
import { useIntersection } from "@/hooks/use-intersection";

const STATS = [
  { value: "Full Stack", label: "Web Development" },
  { value: "Microservices", label: "Backend Architecture" },
  { value: "AI / NLP", label: "Intelligent Solutions" },
  { value: "React Native", label: "Mobile Development" },
];

export function AboutSection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-16 items-start reveal ${
            isVisible ? "is-visible" : ""
          }`}
        >
          {/* Text side */}
          <div>
            <div className="font-space-mono text-accent text-xs mb-4">
              01 / About
            </div>

            <h2 className="font-syne font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Who I am
            </h2>

            <div className="space-y-4 text-muted-foreground font-dm-sans leading-relaxed">
              <p>
                I’m a{" "}
                <span className="text-foreground font-medium">
                  Software Engineer
                </span>{" "}
                passionate about turning ideas into{" "}
                <span className="text-foreground font-medium">
                  scalable, reliable, and impactful software.
                </span>
              </p>

              <p>
                I specialize in{" "}
                <span className="text-foreground font-medium">
                  full-stack development
                </span>
                , combining{" "}
                <span className="text-foreground font-medium">
                  React, Java, Spring Boot, and MySQL
                </span>{" "}
                to build modern web applications and robust backend systems.
              </p>

              <p>
                My work also includes{" "}
                <span className="text-foreground font-medium">
                  microservices, AI/NLP solutions, and mobile applications
                </span>{" "}
                using technologies such as Python, Flask, and
                React Native.
              </p>

              <p>
                I’m driven by{" "}
                <span className="text-foreground font-medium">
                  problem-solving, continuous learning, and clean engineering
                </span>
                , always looking for better ways to build useful technology.
              </p>
            </div>
          </div>

          {/* Stats side */}
          {/* <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`portfolio-card rounded-lg p-6 reveal reveal-delay-${i + 1} ${
                  isVisible ? "is-visible" : ""
                }`}
              >
                <div className="font-syne font-extrabold text-4xl text-accent mb-1">
                  {stat.value}
                </div>

                <div className="font-dm-sans text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
