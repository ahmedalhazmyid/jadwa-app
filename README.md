# Jadwa · جدوى

Bilingual free feasibility studies (NPV / IRR / DCF) — Arabic & English.

This repository is a **static GitHub Pages port** of the Jadwa TanStack/React SPA (originally on Vercel at jadwa.grok.me).

## Live site

**https://ahmedalhazmyid.github.io/jadwa-app/**

## Guest / no-login mode

This static build runs **fully client-side**:

- **No sign-in / account / better-auth backend** — `/start`, `/dashboard`, and `/projects/$id` always see a local guest user.
- Studies are created, listed, opened, and deleted via **`localStorage`** (`jadwa.guest.projects.v1`).
- Financial engine (NPV, IRR, payback, sensitivity, valuation) runs in the browser from the shipped `schema-*.js` module.

## What’s included

- Static HTML for public routes (`/`, `/start`, `/blog/*`, `/valuation`, …)
- Full Vite asset graph
- Client-side routing with TanStack Router (`basepath: /jadwa-app`)
- SPA fallback via `404.html` + `.nojekyll`

## Limitations vs the Vercel original

- No better-auth / `/api/auth` — login CTAs point to `/start`.
- No `/_serverFn/` cloud research, live citations, or server PDF pipeline.
- Browser “Print” can still produce a PDF-like export of the on-screen report.
- Data stays in the current browser profile (clearing site data removes studies).

## Base path

GitHub project Pages URL: `https://ahmedalhazmyid.github.io/jadwa-app/`  
Asset and router base path: `/jadwa-app`

## Verify

1. Open `https://ahmedalhazmyid.github.io/jadwa-app/start` — should load without redirecting to a login gate.
2. Fill the form → Generate — opens `/projects/...` from localStorage.
3. Open `https://ahmedalhazmyid.github.io/jadwa-app/dashboard` — lists the same studies.
4. View source / Network: guest session (`guest-local` / `ضيف`) and no calls to jadwa.grok.me for core calculate/save/list.

Mirrored fresh from `https://jadwa.grok.me` then patched for Pages guest mode.
