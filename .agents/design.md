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
shadcn base color: **slate**. Each token has a paired `*-foreground` for text on it.

| Token | Light `H S% L%` | Dark `H S% L%` | Tailwind |
| --- | --- | --- | --- |
| `--background` | `0 0% 100%` | `222.2 84% 4.9%` | `bg-background` |
| `--foreground` | `222.2 84% 4.9%` | `210 40% 98%` | `text-foreground` |
| `--card` | `0 0% 100%` | `222.2 84% 4.9%` | `bg-card` |
| `--card-foreground` | `222.2 84% 4.9%` | `210 40% 98%` | `text-card-foreground` |
| `--popover` | `0 0% 100%` | `222.2 84% 4.9%` | `bg-popover` |
| `--popover-foreground` | `222.2 84% 4.9%` | `210 40% 98%` | `text-popover-foreground` |
| `--primary` | `222.2 47.4% 11.2%` | `210 40% 98%` | `bg-primary` |
| `--primary-foreground` | `210 40% 98%` | `222.2 47.4% 11.2%` | `text-primary-foreground` |
| `--secondary` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | `bg-secondary` |
| `--secondary-foreground` | `222.2 47.4% 11.2%` | `210 40% 98%` | `text-secondary-foreground` |
| `--muted` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | `bg-muted` |
| `--muted-foreground` | `215.4 16.3% 46.9%` | `215 20.2% 65.1%` | `text-muted-foreground` |
| `--accent` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | `bg-accent` |
| `--accent-foreground` | `222.2 47.4% 11.2%` | `210 40% 98%` | `text-accent-foreground` |
| `--destructive` | `0 84.2% 60.2%` | `0 62.8% 30.6%` | `bg-destructive` |
| `--destructive-foreground` | `210 40% 98%` | `210 40% 98%` | `text-destructive-foreground` |
| `--border` | `214.3 31.8% 91.4%` | `217.2 32.6% 17.5%` | `border-border` |
| `--input` | `214.3 31.8% 91.4%` | `217.2 32.6% 17.5%` | `border-input` |
| `--ring` | `222.2 84% 4.9%` | `212.7 26.8% 83.9` | `ring-ring` |

## Radius

`--radius: 0.5rem` drives the border-radius scale:

| Tailwind | Value |
| --- | --- |
| `rounded-sm` | `calc(var(--radius) - 4px)` |
| `rounded-md` | `calc(var(--radius) - 2px)` |
| `rounded-lg` | `var(--radius)` (0.5rem) |

## Typography

- Font: **Inter** (`next/font/google`), applied via the default `font-sans` utility.
- Type scale: Tailwind defaults (`text-sm`, `text-base`, …). No custom scale.

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

Plugin: `tailwindcss-animate`. Theme transitions are disabled on toggle
(`disableTransitionOnChange`).

## Conventions

- Style with the semantic tokens above (`bg-background`, `text-muted-foreground`, …),
  never raw hex/HSL — that's what keeps light/dark in sync.
- shadcn/ui primitives live in `src/components/ui/`. Don't hand-edit them; regenerate
  via `bunx shadcn@latest add <component>`.
- To retheme, edit the CSS variables in `globals.css`, not component classes.
