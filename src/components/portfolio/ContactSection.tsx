
import React from "react";
import {
  Github,
  Mail,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";

const LINKS = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/nawelHM",
    href: "https://github.com/nawelHM",
    color: "#ffffff",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/nawel-hammouda-62b46b173",
    href: "https://www.linkedin.com/in/nawel-hammouda-62b46b173/",
    color: "#0A66C2",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "nawelks.info@gmail.com",
    href: "mailto:nawelks.info@gmail.com",
    color: "#1cd4ef",
  },
];

export function ContactSection() {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-16 items-start reveal ${
            isVisible ? "is-visible" : ""
          }`}
        >
          {/* Left */}
          <div>
            <div className="font-space-mono text-accent text-xs mb-4 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-accent" />
              06 / Contact
            </div>

            <h2 className="font-syne font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Let's build something.
            </h2>

            <p className="font-dm-sans text-muted-foreground leading-relaxed mb-4">
              Have a project idea, an opportunity, or simply want to connect?
              I’m always open to discussing new ideas and interesting
              challenges.
            </p>

            <p className="font-dm-sans text-muted-foreground leading-relaxed">
              Feel free to reach out through email or connect with me on
              LinkedIn and GitHub.
            </p>
          </div>

          {/* Right — Contact Links */}
          <div className="space-y-3">
            {LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`portfolio-card rounded-lg p-4 flex items-center justify-between group reveal reveal-delay-${
                  i + 1
                } ${isVisible ? "is-visible" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-border group-hover:border-transparent transition-all duration-200"
                    style={{
                      color: link.color,
                      backgroundColor: `${link.color}12`,
                    }}
                  >
                    {link.icon}
                  </div>

                  <div>
                    <div className="font-space-mono text-xs text-muted-foreground/60 mb-0.5">
                      {link.label}
                    </div>

                    <div className="font-dm-sans text-sm text-foreground">
                      {link.value}
                    </div>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
