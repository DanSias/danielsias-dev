# danielsias.dev

Personal portfolio site for Daniel Sias, a full-stack software engineer working on developer tooling, payment platforms, internal systems, and AI-assisted development. It's a small, mostly static Next.js site: the point is to represent the work accurately, load fast, and stay easy to maintain — not to demonstrate a large architecture.

Live at [danielsias.dev](https://danielsias.dev).

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack, typed routes)
- **UI:** React 19, TypeScript 5 (strict), Tailwind CSS 3.4
- **Theming:** `next-themes` (class-based light/dark mode)
- **Components:** Radix UI (tooltip), `react-icons`
- **Testing:** Playwright (E2E, run against a real production build) + `@axe-core/playwright` (accessibility)
- **CI:** GitHub Actions (lint, typecheck, build, E2E on Chromium)

## Getting started

Requires Node **>=20.9.0** (see `.nvmrc` for the version this project is developed against).

```bash
nvm use        # or install the version in .nvmrc directly
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Turbopack dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint over the whole project |
| `npm run typecheck` | Regenerate Next's route types, then `tsc --noEmit` |
| `npm run test:e2e` | Playwright E2E suite, Chromium only (matches CI) |
| `npm run test:e2e:all` | Same suite across Chromium, Firefox, and WebKit |
| `npm run test:e2e:ui` | Playwright's interactive UI mode |
| `npm run test:e2e:headed` | Chromium run with a visible browser window |
| `npm run test:e2e:report` | Open the last HTML test report |

## Testing

`npm run test:e2e` builds the app with `next build`, serves it with `next start`, and runs Playwright against that real production server — not `next dev` — so what's tested matches what actually ships. See `playwright.config.ts` for the webServer setup and `e2e/` for the suites, which cover:

- Route smoke tests (every page loads, has the right heading, no console/network errors) and a custom 404
- Desktop/mobile navigation, including keyboard tab order and active-state (`aria-current`)
- Theme toggle behavior and persistence across navigation, including full-viewport background checks on shorter pages
- The resume page's PDF preview, download link, and fallback link
- The skills page's native `<details>`/`<summary>` disclosures (click, keyboard, mobile)
- Cross-page link continuity (flagship project CTA, experience/projects cross-links, hash anchors)
- Contact page actions (mailto, social links) and layout (no overflow, no orphaned closing line)
- Responsive/overflow checks at desktop, tablet, and small mobile widths
- Site-wide link integrity (no dead internal links, no placeholder hrefs)
- Automated accessibility scans (axe-core, `wcag2a`/`wcag2aa`/`wcag21a`/`wcag21aa`) on every route, failing on serious/critical violations

Automated accessibility testing here checks what a tool can check — missing accessible names, contrast, ARIA misuse, and similar. It supplements but does not replace manual review (actual screen reader and keyboard-only testing); it can't evaluate reading order, the quality of alt text, or whether an interaction actually makes sense to someone using assistive tech.

`test:e2e:all` (Chromium + Firefox + WebKit) is meant for an occasional manual check, not CI, because of two known cross-browser quirks that are runner/browser behavior, not application bugs:

- **Firefox:** headless Firefox has no built-in PDF viewer, so the resume page's inline `<iframe src="/resume.pdf">` preview is treated as a download by the browser, which races with Playwright's page-navigation lifecycle and fails the `continuity` test's `/resume` navigation. The PDF itself loads and displays fine in real browsers with a PDF viewer (i.e., everywhere it matters).
- **WebKit:** Safari's real default keyboard behavior does not include links in the Tab order unless "Full Keyboard Access" is turned on — this matches actual macOS Safari, not a bug in the site. Links remain reachable and operable by keyboard through other means (e.g., a screen reader's rotor); the `navigation` suite's Tab-order assertion is written against Chromium/Firefox's default, which does include links.

## Deployment

Hosted on Vercel, deployed automatically from pushes to `master`. DNS for `danielsias.dev` is managed through Cloudflare, pointed at Vercel. There is no deployment step in CI — GitHub Actions runs checks only; Vercel's own git integration handles the actual deploy.

## Updating the resume

`public/resume.pdf` is the single source of truth for the resume. The `/resume` page previews it in an iframe and links directly to it — there's no separate content system to keep in sync. To update it, replace that file and redeploy.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home: intro, flagship project, selected work |
| `/about` | How I think, working style |
| `/experience` | Case studies by role (RocketGate, Pearson, Liquid Gravity) |
| `/projects` | Engineering projects, grouped by theme |
| `/skills` | Capabilities, grouped and expandable by area |
| `/education` | Academic and professional background |
| `/resume` | PDF preview, download, and links into the rest of the site |
| `/contact` | How to get in touch |

## Known dependency findings

`npm audit --omit=dev` currently reports high-severity advisories in `postcss` and `sharp`. Both are **transitive dependencies pulled in by Next.js itself** — not top-level dependencies this project chose or controls directly:

- `postcss` — Next bundles its own internal copy (`node_modules/next/node_modules/postcss`). This project's own `postcss` devDependency is a separate, unaffected, up-to-date install used for the Tailwind build.
- `sharp` — pulled in solely by Next's built-in image optimizer (`next/image`).

`npm audit fix --force` would resolve both, but only by downgrading `next` to `9.3.3` — a multi-major-version downgrade that would break the App Router, Turbopack, and most of this codebase. That's not a fix, so it hasn't been applied. These findings are expected to clear naturally as Next.js ships updated internal dependencies; Dependabot (see `.github/dependabot.yml`) is configured to surface the update once one lands. This is a documented, known state, not something silently ignored.

## CI

`.github/workflows/ci.yml` runs on every push and pull request against `master`: lint, typecheck, build, then the Chromium E2E suite. The Playwright HTML report is uploaded as an artifact if any test fails. `npm audit --omit=dev` also runs as a non-blocking, informational step — see [Known dependency findings](#known-dependency-findings) for why it isn't a hard gate.

`.github/dependabot.yml` checks for npm and GitHub Actions updates weekly, grouping minor/patch npm updates into a single PR. Nothing auto-merges — every update still gets a human look before landing.
