# PRD — Personal Portfolio Website

Status: v1 (built). Owner: Sayem Al Amin. Last updated: 2026-11-11.

A PRD (Product Requirements Document) says what we build, for whom, why, what is in and out of scope, and how we know it is done. When a decision is unclear, this file decides.

## 1. Goal

A personal portfolio that makes a **client** want to start a project and an **employer** want to interview the owner. One primary action: **send an email** ("Let's talk").

## 2. Audience

| Visitor | What they need in 10 seconds | What they do next |
|---|---|---|
| Client (small business) | What he does, that he understands business | Email |
| Employer / recruiter | Skills, proof of work, education | Email or LinkedIn |

## 3. Priorities (from the mentor, non-negotiable)

1. Up-to-date, high-quality UI/UX
2. Simple system design: only what is needed
3. Security
4. Minimal, optimized code
5. Very fast loading

## 4. Positioning

- Two identities: **Designer + Developer**.
- **AI-native builder** is how he works, not a job title.
- No "Product Manager" title. Product thinking is shown in the Process section and case studies.
- Services carry a level: **Core** (web, business and AI) or **Intermediate** (digital marketing, video editing).

Hero copy:

> I design and build digital products that solve real business problems.
> Designer & Developer · AI-native builder

## 5. Scope

### In

| # | Section | Content |
|---|---|---|
| — | Loader | Two 3D text rings spin while a 0→100% counter runs. Every page load, about 2.4 s, never blocks the page |
| — | Navbar | On phones a "Menu+" button opens a full-screen menu (accent name, links rise in, local time). Fixed, inverts over dark areas (blend mode). Two-line name logo, Work · About · Services · Contact, "Let's talk" |
| 0 | Hero | Headline, tags, B&W cut-out portrait on an accent block, two buttons, strip (location, status, live local time) |
| 1 | About | Dark section: a large light statement, then two staggered notes (philosophy, way of working) that turn accent on hover |
| 2 | Services | A row of tall columns; the one you point at grows and opens, a small animated drawing for that service appears on the right, its title fills with accent (others go back to black); with nothing selected the first one fills; every title empties as the row scrolls away. On phones the same as rows: the tapped row opens downward |
| 3 | Work | Numbered project list. #1 is this portfolio as a case study. Dark section, accent titles; each project pops up as it scrolls into view |
| 4 | Process | Discover → Design → Build → Launch. Pinned section: cards run sideways as you scroll and light up in accent one at a time; accent on hover too |
| 5 | Education | A journey: ticket-shaped stops (year stub, dashed tear line, notches) joined by a curved dashed road, oldest first, accent background on hover |
| 6 | Skills | Four belts of skills that travel sideways, each styled differently |
| — | Contact + footer | "Have a project in mind?", the email as the main link, socials, menu, then the name set full width, filled with accent left to right as you scroll to it |

### Out (decided, do not add without updating this PRD)

- Backend, database, CMS, blog
- Contact form (a `mailto:` link is faster, has no spam and no server)
- 3D / WebGL, heavy animation libraries
- Dark/light theme toggle
- Analytics (may be added later, privacy-friendly only)
- Invented projects, clients, reviews or numbers

## 6. Design

- Reference: olhalazarieva.com for the **feel** only (uppercase type, numbered sections, counter loader, local time). Layout, code and copy are original.
- Colors: off-white `#f3f2ee`, ink `#0c0c0c`, one accent `#ff4a1c`. The footer inverts to ink.
- Type: Sofia Sans Condensed (bold uppercase display) and Sofia Sans (labels and body). Both variable, self-hosted, open licence.
- Motion: loader, hero entrance, scroll reveal, hover responses. All CSS. All disabled under `prefers-reduced-motion`.
- All tokens live in `src/styles/global.css`.

## 7. Technical decisions

| Decision | Choice | Why |
|---|---|---|
| Site type | Static | Content is fixed. Fastest and smallest attack surface |
| Framework | Astro | Ships HTML and CSS, no JS by default |
| Styling | Plain CSS + custom properties | No build-time framework needed |
| JavaScript | One small file (`public/main.js`, about 3 kB) | Loader ring layout, scroll reveal, phone menu, services title colour, live clock |
| Images | `astro:assets` → AVIF/WebP, responsive sizes | Small files |
| Content | `src/data/site.ts` | One file to edit text, links and projects |
| Hosting | Vercel, domain sayem.me | Free, global CDN, deploys on every push to `main`, reads `vercel.json` |
| Security | Strict CSP (no inline script or style), HSTS, nosniff, frame deny, Referrer-Policy, Permissions-Policy, CORP/COOP | See `vercel.json` |

## 8. Done means

- Lighthouse ≥ 95 in Performance, Accessibility, Best Practices, SEO (mobile)
- LCP < 1.5 s, CLS < 0.05, JavaScript < 5 kB
- Works at 390, 768, 1024, 1440 px with no horizontal scroll
- Keyboard usable, visible focus, readable with reduced motion
- Security headers grade A on securityheaders.com after deploy
- No secrets in the repository

## 9. Open items (owner must provide)

- [ ] Links and screenshots for projects 2 and 3 once they ship
- [ ] Domain name
