# Design — josefonte-website

The design system in one place: primitives, tokens, and the conventions that keep the
site visually consistent. This documents what *exists* — when changing styles, reuse
these tokens rather than introducing one-off values.

Source of truth: `src/app/globals.css` (CSS variables), `tailwind.config.ts` (token
mapping), `components.json` (shadcn config). Theme switching via `next-themes`
(class strategy, `defaultTheme="system"`).

## Color tokens

Colors are HSL channel triples in CSS variables, consumed as `hsl(var(--token))` and
exposed to Tailwind as semantic utilities (e.g. `bg-background`, `text-muted-foreground`).
Palette: **"terminal paper"** — warm paper + ink with a single amber "signal" accent.
Each token has a paired `*-foreground` for text on it.

| Token | Light `H S% L%` | Dark `H S% L%` | Tailwind |
| --- | --- | --- | --- |
| `--background` (paper) | `40 43% 96%` | `240 6% 8%` | `bg-background` |
| `--foreground` (ink) | `240 8% 9%` | `48 18% 95%` | `text-foreground` |
| `--card` | `40 43% 96%` | `240 6% 8%` | `bg-card` |
| `--card-foreground` | `240 8% 9%` | `48 18% 95%` | `text-card-foreground` |
| `--popover` | `40 43% 96%` | `240 6% 8%` | `bg-popover` |
| `--popover-foreground` | `240 8% 9%` | `48 18% 95%` | `text-popover-foreground` |
| `--primary` | `240 8% 9%` | `48 18% 95%` | `bg-primary` |
| `--primary-foreground` | `40 43% 96%` | `240 6% 8%` | `text-primary-foreground` |
| `--secondary` | `42 17% 94%` | `240 6% 16%` | `bg-secondary` |
| `--secondary-foreground` | `240 8% 9%` | `48 18% 95%` | `text-secondary-foreground` |
| `--muted` | `42 17% 94%` | `240 6% 14%` | `bg-muted` |
| `--muted-foreground` | `240 4% 43%` | `240 5% 56%` | `text-muted-foreground` |
| `--accent` (neutral hover) | `42 17% 92%` | `240 6% 18%` | `bg-accent` |
| `--accent-foreground` | `240 8% 9%` | `48 18% 95%` | `text-accent-foreground` |
| `--destructive` | `0 72% 51%` | `0 62% 45%` | `bg-destructive` |
| `--destructive-foreground` | `40 43% 96%` | `48 18% 95%` | `text-destructive-foreground` |
| `--border` (hairline) | `42 17% 89%` | `240 6% 16%` | `border-border` |
| `--input` | `42 17% 89%` | `240 6% 16%` | `border-input` |
| `--signal` (brand accent) | `32 90% 47%` | `38 90% 60%` | `bg-signal` / `text-signal` |
| `--ring` | `32 90% 47%` | `38 90% 60%` | `ring-ring` |

**`--signal` is the brand accent** (cursor, active nav, link hover, focus ring) and is
deliberately separate from shadcn's `--accent`, which stays a neutral hover surface.
`--ring` is mapped to `--signal` so keyboard focus is on-brand.

## Radius

`--radius: 0.5rem` drives the border-radius scale:

| Tailwind | Value |
| --- | --- |
| `rounded-sm` | `calc(var(--radius) - 4px)` |
| `rounded-md` | `calc(var(--radius) - 2px)` |
| `rounded-lg` | `var(--radius)` (0.5rem) |

## Typography

A two-font system from one superfamily, via `next/font/google` (CSS variables on
`<body>`): **IBM Plex Sans** is the main face (body + display), **IBM Plex Mono** is the
accent / "data voice".

| Role | Font | Variable | Tailwind | Used for |
| --- | --- | --- | --- | --- |
| Main | **IBM Plex Sans** | `--font-sans` | `font-sans` (default) | running copy; also headings, names, card titles via `font-display` |
| Accent | **IBM Plex Mono** | `--font-mono` | `font-mono` | the "data voice": dates, locations, badge chips, eyebrows, the hero prompt, the Contacts nav label |

`font-display` is an alias that maps to `--font-sans` (so heading utilities keep working);
hierarchy comes from weight/size, not a separate display family.

Type scale: Tailwind defaults (`text-sm`, `text-base`, …). No custom scale.

## Layout

- Container: centered, `padding: 2rem`, max width `1400px` at `2xl`.
- Page gutters: responsive horizontal margins `mx-[10%] md:mx-[15%] lg:mx-[20%]`,
  used for the navbar and main content. The profile header uses `lg:mx-[25%]`.
- Background: fixed radial dot grid — `#dbd9d9` dots on light, `#2b2b2b` on dark,
  `16px` grid, faded with an ellipse `mask-image`.

## Motion

| Animation | Definition |
| --- | --- |
| `animate-accordion-down` | `accordion-down 0.2s ease-out` |
| `animate-accordion-up` | `accordion-up 0.2s ease-out` |
| `animate-fade-up` | `fade-up 0.28s var(--ease-glide) 0.06s both` — per-navigation page enter (`app/template.tsx`) |
| `animate-blink` | `blink 1s steps(1) infinite` — the streaming-bio caret |

`--ease-glide` (`cubic-bezier(0.65, 0, 0.35, 1)`) is the shared easing token, exposed as
`ease-glide`. Plugin: `tailwindcss-animate`. Theme transitions are disabled on toggle
(`disableTransitionOnChange`). Motion is suppressed under `prefers-reduced-motion`
(global CSS safety net in `globals.css`, plus `motion-reduce:` per component).

## Conventions

- Style with the semantic tokens above (`bg-background`, `text-muted-foreground`, …),
  never raw hex/HSL — that's what keeps light/dark in sync.
- shadcn/ui primitives live in `src/components/ui/`. Don't hand-edit them; regenerate
  via `bunx shadcn@latest add <component>`.
- To retheme, edit the CSS variables in `globals.css`, not component classes.
