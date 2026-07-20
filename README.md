# Anshika Anand — Portfolio

A premium, single-page developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — custom design tokens (colors, type scale, animations) in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, staggered animations, magnetic buttons, floating nav
- **Lucide React** — icons
- **next/font** — self-hosted Google Fonts (Space Grotesk, Plus Jakarta Sans, JetBrains Mono)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        # fonts, metadata, SEO
  page.tsx           # assembles all sections
  globals.css         # design tokens & base styles
components/
  Nav.tsx             # floating nav bar
  Hero.tsx            # hero with rotating role title + graphic
  About.tsx
  Experience.tsx      # animated timeline
  Skills.tsx          # categorized skill cards
  Projects.tsx
  Achievements.tsx
  Contact.tsx
  Footer.tsx
  ui/                 # Reveal, StaggerGroup, MagneticButton, Badge, Backdrop, SectionHeading
lib/
  data.ts             # single source of truth for all content (from resume)
public/
  Anshika_Anand_Resume.pdf   # linked from the "Download Resume" button
```

## Editing content

All copy — roles, experience, skills, projects, achievements — lives in `lib/data.ts`. Edit that file to update the site; no component changes needed for content edits.

## Replacing the resume file

Swap `public/Anshika_Anand_Resume.pdf` with an updated resume, keeping the same filename (or update `profile.resumeFile` in `lib/data.ts`).

## Deploying

This project deploys cleanly to Vercel:

```bash
npm run build
```

Push to a GitHub repo and import it in Vercel, or run `vercel` from the project root.
