# Kashani Studio

Website for Kashani Studio — a boutique web design and development agency. Custom-coded, no templates.

## Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and build
- **React Router v7** — client-side routing
- **Vercel** — deployment target

## Project Structure

```
src/
  components/     # Reusable UI — Navbar, Footer, Logo, Eyebrow
  sections/       # Page-level sections — Hero, ServicesSection, CTASection, etc.
  pages/          # One file per route — Home, About, Services, Work, Contact, NotFound
  layout/         # Layout wrapper with Navbar + Outlet + Footer
  styles/         # Design tokens (colors, shared styles)
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/work` | Work |
| `/contact` | Contact |
| `*` | 404 |

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # type-check + production build
npm run preview  # preview the production build locally
```

## Deployment

Deployed via Vercel. Push to `main` to trigger a production deploy.
