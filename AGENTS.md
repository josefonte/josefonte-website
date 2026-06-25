# josefonte.pt

My personal website — a CV / portfolio for José Fonte ([josefonte.pt](https://josefonte.pt)).
A small Next.js site presenting who I am: work, education, projects, photos, and a blog.

## Repo map

The Next.js app lives at the repo root.

- `src/app/` — routes: `/` (intro), `work`, `education`, `projects`, `photos`, `blog`.
- `src/data/` — content as typed TS arrays (`work.tsx`, `education.tsx`,
  `projects.tsx`, `photos.tsx`). **Edit content here, not in the page components.**
- `src/components/me/` — site-specific components (navbar, cards, profile).
- `src/components/ui/` — shadcn/ui primitives. Don't hand-edit; regenerate via the CLI.
- `public/assets/` — images (photos, logos).

## How to work here

- Content changes (a new job, project, or photo) → edit the matching file in `src/data/`.
  Keep the existing `*DataType` shape; add entries, don't restructure.
- Minimal by default. This is a small personal site — no new dependencies or abstractions
  unless a change genuinely needs them.
- Match the existing Tailwind + shadcn/ui style. Light/dark theme is handled by
  `next-themes`.

## Tooling

- Toolchain versions are pinned in `mise.toml` — run `mise install` to set up
  (Node 24.18.0, Bun 1.3.14).
- Bun is the package manager, script runner, and runtime (lockfile: `bun.lock`).
  App bundling is Next.js's job (Turbopack), not Bun's bundler.
- Common tasks are wrapped in the `Makefile` (see Useful commands below).
- Add a shadcn/ui component: `bunx shadcn@latest add <component>`

## Useful commands

Run from the repo root. Each target is wrapped in the `Makefile` and routes through
`mise exec -- bun`, so it works without mise shell activation (CI, fresh clone).

| Command | Does |
| --- | --- |
| `make` | List all commands |
| `make setup` | Install toolchain (mise) + dependencies (fresh clone) |
| `make install` | Install dependencies |
| `make dev` | Dev server at http://localhost:3000 |
| `make build` | Production build |
| `make start` | Serve the production build |
| `make lint` | ESLint |
| `make test` | Bun test runner (no tests yet) |
| `make clean` | Remove `.next` and `node_modules` |

## Project memory

@.agents/memory.md
