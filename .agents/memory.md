# Project Memory — josefonte.pt

Injected every session via `AGENTS.md`. Keep it short and current: preferences, settled
choices, and a dated decisions log.

## What this is

My personal website / CV at josefonte.pt. Goal: a clean, minimal presentation of my
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
