# Jadwa · جدوى

Bilingual free feasibility studies (NPV / IRR / DCF) — Arabic & English.

This repository is a **static GitHub Pages port** of the Jadwa TanStack/React SPA (originally on Vercel at jadwa.grok.me).

## Live site

**https://ahmedalhazmyid.github.io/jadwa-app/**

## What’s included

- Static HTML for all public routes (`/`, `/start`, `/blog/*`, `/valuation`, …)
- Full Vite asset graph (including underscore chunks `_slug-*.js`, `_id-*.js`)
- Client-side routing with TanStack `basepath: /jadwa`
- SPA fallback via `404.html` + `.nojekyll` (so `_*.js` is published)

## Improvements vs a naive mirror

- Indexable (`robots.txt`, `sitemap.xml`, OG/canonical → GitHub Pages)
- PWA manifest scoped to `/jadwa-app/`
- Server-fn stub so `/_serverFn/` never networks
- Light a11y/CSS polish + honest dismissible static-build notice
- Grok builder `extensions.js` removed

## Caveats

Login, cloud research, and any PDF/server-backed features from the Vercel original may be limited or unavailable in this fully client-side build. Core NPV/IRR/DCF calculation flows that run in the browser still work.

## License / credit

Product: Jadwa · جدوى. Port published for static hosting on GitHub Pages.
