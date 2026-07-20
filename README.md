# Marcelo Santamaria — Platform & Cloud Architect Portfolio

Personal engineering portfolio built with Astro, TailwindCSS, TypeScript, and MDX. Static site, deployed to GitHub Pages via GitHub Actions.

## Structure

- `src/content/{work,architecture,articles}` — MDX content collections
- `src/data/profile.ts` — single source of truth for profile data (bio, experience, skills, principles)
- `src/components/ui` — reusable design system primitives
- `src/components/sections` — home page sections
- `src/layouts` — `BaseLayout` (SEO/nav/footer) and `ArticleLayout` (RFC-style detail pages)

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npx astro check` | Type-check the project |

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages. GitHub Pages must be configured to deploy from **GitHub Actions** (Settings → Pages → Build and deployment → Source).

## Content to replace

- `public/resume.pdf` — placeholder PDF, replace with a real exported resume
- `public/og-image.png` — placeholder Open Graph image
