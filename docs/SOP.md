# SOP — How we work on this site

An SOP (Standard Operating Procedure) is the fixed routine for every change. Following the same steps each time keeps the project clean.

## 1. Roles

- **Owner:** decides what to build, reviews, gives feedback. Never writes code by hand.
- **AI agent:** writes all code, explains each decision in simple Bangla, works in small steps.

## 2. The loop for every change

1. **Ask:** the owner describes the change. If it changes scope, update `docs/PRD.md` first.
2. **Propose:** the agent says what it will change and why (2–3 lines).
3. **Build:** one section or one concern at a time.
4. **Show:** run `npm run dev` and look at it in the browser at phone and desktop width.
5. **Feedback:** the owner approves or asks for changes. Repeat 3–5.
6. **Check:** run the checklist in section 5.
7. **Commit:** one commit per approved change.

## 3. Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (first time only) |
| `npm run dev` | Local preview at http://localhost:4321 |
| `npm run build` | Build the final site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |

## 4. Git

- `main` is always deployable.
- New work goes on a branch: `feat/<name>`, `fix/<name>`, `content/<name>`.
- Commit style (Conventional Commits): `feat: add work section`, `fix: hero overflow on phones`, `content: add project two`, `docs: update PRD`.
- Merge to `main` only after the checklist passes.
- Never commit `.env` files, keys or passwords.

## 5. Checklist before merging

- [ ] `npm run build` finishes with no errors
- [ ] Looks right at 390, 768, 1024 and 1440 px, no horizontal scroll
- [ ] Tab key reaches every link, focus is visible
- [ ] Still readable with "reduce motion" turned on
- [ ] No inline `<script>` or `style=""` (the CSP would block them)
- [ ] No new dependency unless the PRD justifies it
- [ ] Lighthouse (mobile) ≥ 95 in all four categories

## 6. Common tasks

- **Change text, links, projects, skills:** edit `src/data/site.ts` only.
- **Change the photo:** replace `src/assets/portrait.png` (black and white, background removed, transparent PNG).
- **Change a color, font size or spacing:** edit the tokens at the top of `src/styles/global.css`.
- **Add a section:** new file in `src/components/`, import it in `src/pages/index.astro`, add it to the PRD.

## 7. Deploy (first time)

1. Create a GitHub repository and push `main`. GitHub Actions (`.github/workflows/ci.yml`) then builds every push.
2. On vercel.com: Add New Project, import the repository. Vercel detects Astro (build `npm run build`, output `dist`).
3. Every push to `main` now deploys automatically (this is CI/CD). Pull requests get preview links.
4. Vercel → Project → Settings → Domains: add `sayem.me` and `www.sayem.me`, then set the DNS records Vercel shows at the domain registrar. HTTPS is automatic.
5. `site` in `astro.config.mjs` is already `https://sayem.me`; change it only if the domain changes.
6. Test the live site: PageSpeed Insights, securityheaders.com, Mozilla Observatory, W3C validator.

## 8. Maintenance

- Dependabot opens pull requests for updates (npm weekly, GitHub Actions monthly). Each one runs CI and gets a Vercel preview link: open the preview, check it, then merge.
- GitHub alerts on known vulnerabilities (Dependabot alerts) and blocks pushes that contain secrets (push protection).
- `main` cannot be force-pushed or deleted (repository ruleset).
- `npm audit` must report 0 high vulnerabilities; CI fails otherwise.
- New project finished → add it to `src/data/site.ts`.
