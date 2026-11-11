# AGENTS.md — Rules for AI agents working in this repository

Read `docs/PRD.md` (what we build) and `docs/SOP.md` (how we work) before changing anything. If they conflict with a request, say so and ask.

## Owner

- Talk to the owner in **simple Bangla**. Code, file names and docs stay in English.
- The owner does not write code. Explain each decision briefly and name the concept ("this is a component", "this is a CSP header").
- Work **one section at a time**: propose → build → show → feedback → refine.

## Stack

- Astro (static output), plain CSS, no UI framework.
- Fonts (self-hosted): Sofia Sans Condensed Variable for display (`--font-display`), Sofia Sans Variable for labels and body (`--font`).
- Dependencies: `astro` and the two font packages. Adding another needs a reason written in the PRD.

## Structure

```
docs/PRD.md, docs/SOP.md     Requirements and procedure
vercel.json                  Security and cache headers (Vercel)
public/main.js               The only JavaScript: loader ring layout, scroll reveal, menu close, services title colour, live clock
src/data/site.ts             ALL content: text, links, services, projects, skills
src/styles/global.css        Design tokens and shared classes
src/layouts/Layout.astro     <head>, fonts, global CSS
src/components/*.astro       One file per section, with its own scoped <style>
src/pages/index.astro        Section order
src/assets/portrait.png      Hero photo (B&W cut-out, transparent background)
```

## Commands

- `npm run dev` — local preview on port 4321
- `npm run build` — must pass before any commit
- `npm run preview` — serve `dist/`

## Coding rules

- Content goes in `src/data/site.ts`, never hard-coded in several places.
- Use the tokens in `global.css` (`--ink`, `--accent`, `--gap`…). No new raw colors or magic sizes.
- Shared classes: `.wrap`, `.section`, `.sec-head`, `.label`, `.muted`, `.link`, `.roll`, `.btn`, `.dot`, `.reveal`.
- Prefer HTML and CSS features over JavaScript (`@property`, grid `0fr → 1fr`, `:focus-within`).
- Write the least code that fully works. No abstractions "for later".
- Semantic HTML, one `<h1>`, alt text on images, visible focus.

## Security rules

- The CSP in `vercel.json` allows **only same-origin files**. Therefore:
  - no inline `<script>` and no `style=""` attributes;
  - no third-party scripts, fonts, embeds or CDNs;
  - keep `build.inlineStylesheets: 'never'` in `astro.config.mjs`.
- External links use `rel="noopener noreferrer"`.
- No secrets in the repository. `.env*` is git-ignored.

## Performance rules

- JavaScript stays under 5 kB. Images go through `astro:assets` (`<Picture>`).
- Every animation must respect `prefers-reduced-motion` (handled globally in `global.css`).
- The loader runs on every page load, about 2.4 s, and never blocks interaction.

## Honesty rules

- Never invent projects, clients, reviews, awards or numbers.
- Service levels are "Core" or "Intermediate". Do not claim more than that.
- The reference site (olhalazarieva.com) is inspiration only. Do not copy its code, copy or layout.
