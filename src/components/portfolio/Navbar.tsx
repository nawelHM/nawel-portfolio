
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Focus", href: "#focus" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-syne font-bold text-lg text-foreground tracking-wide">
            <span className="text-accent">H</span>ammouda Nawel
          </span>

          <span className="font-space-mono text-muted-foreground text-xs border border-border px-2 py-0.5 rounded">
            Full-Stack
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-dm-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="font-dm-sans text-sm px-4 py-1.5 rounded border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-dm-sans"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="text-sm w-fit px-4 py-1.5 rounded border border-accent text-accent font-dm-sans"
              onClick={() => setMenuOpen(false)}
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
