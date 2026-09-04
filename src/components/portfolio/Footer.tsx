
export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-space-mono text-xs text-muted-foreground">
          Hammouda Nawel ·{" "}
          <span className="text-accent">Full-Stack Software Engineer</span>
        </div>

        <div className="font-dm-sans text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Hammouda Nawel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
