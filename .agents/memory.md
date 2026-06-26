# Project Memory — josefonte-website

Injected every session via `AGENTS.md`. Keep it short and current: preferences, settled
choices, and a dated decisions log.

## What this is

My personal website / CV at josefonte.xyz. Goal: a clean, minimal presentation of my
background — work, education, projects, photos, blog. Built with Next.js 16, React 19,
Tailwind, and shadcn/ui; the app lives at the repo root.

## Directives

- Minimal by default. Prefer editing content/data over adding features or dependencies.
- Content is data-driven: update `src/data/*` rather than hardcoding into pages.
- Bun is the package manager/runtime; Node + Bun versions are pinned in `mise.toml`.

## Decisions log

Append-only, dated (YYYY-MM-DD), newest at the bottom. One line + short why.

- 2026-06-25 — Adopted the `CLAUDE.md` → `AGENTS.md` + `.agents/memory.md` setup so the
  repo is agent-readable. Why: portable across tools, single source for project context.
- 2026-06-25 — Upgraded Next.js 14→16 and React 18→19; moved Node version control to
  `mise` (Node 24.18.0) and switched the package manager/runtime to Bun (1.3.14). Why:
  run on current, supported toolchain.
- 2026-06-25 — Renamed the GitHub repo `josefonte.pt` → `josefonte-website` and updated
  doc references; live domain links point to josefonte.xyz. Why: decouple repo name from
  the TLD, which depends on the DNS bill (.pt vs .xyz).
- 2026-06-26 — Reskinned off the shadcn-slate default to a **"terminal paper"** identity:
  Space Grotesk / Inter / JetBrains Mono, a single indigo `--signal` accent (distinct from
  shadcn `--accent`), mono "data voice" + `~/page` path-headers, and a streaming `> whoami`
  hero. Also fixed metadata/OG, `<main>`+skip-link, footer link, styled 404, favicon,
  photos lazy-loading + data refactor, and moved education course content into `src/data/`.
  Removed the Blog (placeholder feed). Why: a deliberate, accessible identity over a
  templated starter. See [design.md](design.md).
- 2026-06-26 — UX audit pass: removed the `jf` corner logo (home link moved onto the
  profile name "José Fonte" → `/`); hid the `~/page` path-headers (kept as `sr-only`
  `<h1>` for a11y/SEO); set the Contacts nav label in mono. Warmed the light paper
  (`45 33% 98%` → `40 43% 96%`). Switched the `--signal` accent from indigo to amber
  (`32 90% 47%` / dark `38 90% 60%`). Collapsed typography from three families to a
  **two-font superfamily system: IBM Plex Sans (main, body + headings) + IBM Plex Mono
  (accent/"data voice")**; `font-display` now aliases `--font-sans`. Why: warmer, more
  distinctive identity with a cohesive, intentional type pairing. See [design.md](design.md).
