<div align="center">

# Developer Portfolio Template

### Built by [Nick / Enuzna](https://github.com/deathlegionteamlk) · [Team DeathLegionLK](https://github.com/deathlegionteamlk)

A clean, minimal dark portfolio template for full stack developers. Built with React, TypeScript, Tailwind CSS, and Vite. No backend required — just clone, customize, and deploy.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](./LICENSE)

---

**[Live Demo](#)** · **[Report Bug](https://github.com/deathlegionteamlk/developer-portfolio-template/issues)** · **[Request Feature](https://github.com/deathlegionteamlk/developer-portfolio-template/issues)**

</div>

---

## Preview

> Dark minimal portfolio with 7 sections, scroll-triggered animations, Web3-style team grid, color-coded skill badges, and a fully responsive layout.

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen intro with name, aliases, role, tagline, and CTAs |
| 2 | **About** | Personal bio with stat cards |
| 3 | **Skills** | Color-coded tech stack grid (Frontend / Backend / Databases / DevOps) |
| 4 | **Projects** | Project cards with tech tags, GitHub and demo links |
| 5 | **Team** | Web3-style circular avatar grid with purple duotone effect |
| 6 | **Experience** | Vertical timeline with dates and descriptions |
| 7 | **Contact** | Direct links (GitHub, Email, Discord, Telegram) |

---

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build tool:** Vite 5
- **Styling:** Tailwind CSS v3 + custom CSS design tokens
- **UI components:** shadcn/ui
- **Icons:** lucide-react
- **Fonts:** Syne (headings), Space Mono (labels/code), DM Sans (body)
- **Animations:** CSS + IntersectionObserver (no external animation libraries)
- **Package manager:** pnpm

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/deathlegionteamlk/developer-portfolio-template.git
cd developer-portfolio-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
pnpm build
pnpm preview
```

---

## Customization

### 1. Personal Info — `src/components/portfolio/HeroSection.tsx`

Update the name, aliases, tagline, and GitHub link:

```tsx
// Change the name display
<h1>NICK</h1>

// Update aliases
<span>// Enuzna</span>
<span>// Hexa</span>

// Update tagline
<p>I build web applications end to end...</p>

// Update GitHub link
href="https://github.com/yourusername"
```

### 2. About Text — `src/components/portfolio/AboutSection.tsx`

Edit the bio text and stat cards directly in the component.

### 3. Skills — `src/components/portfolio/SkillsSection.tsx`

Modify the `SKILL_CATEGORIES` array. Each skill has a `name` and `color` (hex):

```ts
const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      // add more...
    ],
  },
  // more categories...
];
```

### 4. Projects — `src/components/portfolio/ProjectsSection.tsx`

Edit the `PROJECTS` array:

```ts
const PROJECTS = [
  {
    name: "Your Project",
    description: "What it does and why you built it.",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "Open source",
    github: "https://github.com/yourrepo",
    demo: "https://yourproject.com",
  },
  // ...
];
```

### 5. Team — `src/components/portfolio/TeamSection.tsx`

Modify the `TEAM_MEMBERS` array. Uses Unsplash URLs by default — replace with real photos:

```ts
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Your Name",
    role: "Your Role",
    avatar: "https://your-photo-url.jpg",
  },
  // 15 members total (fills the 4-row grid)
];
```

### 6. Experience — `src/components/portfolio/ExperienceSection.tsx`

Edit the `TIMELINE` array with your actual experience.

### 7. Contact — `src/components/portfolio/ContactSection.tsx`

Update the `LINKS` array with your real social links.

### 8. Navbar — `src/components/portfolio/Navbar.tsx`

Update the logo name and alias shown in the navbar.

---

## Design System

The design is token-based — all colors, shadows, and transitions live in `src/index.css`:

```css
:root {
  --background: 235 22% 4%;      /* Main dark background */
  --foreground: 220 15% 88%;     /* Text color */
  --card: 235 20% 7%;            /* Card/surface background */
  --border: 235 16% 13%;         /* Subtle borders */
  --accent: 192 85% 55%;         /* Teal accent (links, highlights) */
  --muted-foreground: 220 10% 48%; /* Secondary text */
}
```

To change the accent color, update `--accent` (and `--primary`) in `src/index.css` and `--ring`.

### Font Customization

Fonts are loaded via Google Fonts in `index.html`. Change the import URL and update `tailwind.config.ts`:

```ts
fontFamily: {
  syne: ['Syne', 'sans-serif'],         // Headings
  'space-mono': ['Space Mono', 'monospace'], // Labels/code text
  'dm-sans': ['DM Sans', 'sans-serif'],  // Body text
},
```

---

## File Structure

```
├── index.html                    # Entry HTML, font imports, OG meta
├── public/
│   └── favicon.svg               # Custom SVG favicon
├── src/
│   ├── components/
│   │   ├── portfolio/            # All portfolio section components
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── CircularAvatarTeam.tsx  # Web3 avatar grid component
│   │   │   ├── TeamSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                   # shadcn/ui components
│   ├── hooks/
│   │   └── use-intersection.ts   # Scroll-reveal hook
│   ├── pages/
│   │   └── Index.tsx             # Main page assembly
│   ├── index.css                 # Design system tokens + global styles
│   └── main.tsx                  # App entry
├── tailwind.config.ts            # Tailwind + font config
└── package.json
```

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

Or connect the GitHub repo directly at [vercel.com](https://vercel.com).

### Netlify

```bash
pnpm build
# Upload the dist/ folder at netlify.com
```

### GitHub Pages

```bash
pnpm build
# Deploy the dist/ folder using gh-pages or GitHub Actions
```

---

## Scroll Animations

Animations use a lightweight `useIntersection` hook — no GSAP, Framer Motion, or AOS required:

```ts
// src/hooks/use-intersection.ts
const { ref, isVisible } = useIntersection(0.12);

// Apply to section element:
<section ref={ref as React.RefObject<HTMLElement>}>
  <div className={`reveal ${isVisible ? "is-visible" : ""}`}>
    {/* content */}
  </div>
</section>
```

Add staggered delays with `reveal-delay-1` through `reveal-delay-4` classes.

---

## CircularAvatarTeam Component

The team section uses a Web3-inspired circular avatar grid with:

- Purple duotone image effect (grayscale + color blend)
- Halftone dot pattern overlay
- Hover: full color reveal + scale + glow ring
- Large bold typography ("Meet The Team") layered with avatars
- 4-row grid layout (3 / 4 / 3 / 5 avatars)

Import and use it standalone:

```tsx
import { CircularAvatarTeam } from "@/components/portfolio/CircularAvatarTeam";

<CircularAvatarTeam
  members={yourMembers}
  logoText="YOURTEAM"
/>
```

---

## License

MIT © [Nick / Enuzna — DeathLegionLK](https://github.com/deathlegionteamlk)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

---

<div align="center">

Made by **[Nick](https://github.com/deathlegionteamlk)** · Team **DeathLegionLK**

</div>

<!-- DL Code Badge -->
![Status](https://img.shields.io/badge/status-active-success?style=flat-square)

