# Backend & Compliance Checklist — TradesNKY

Standard pre-launch checklist (website-builder skill). Status as of 2026-08-14.

Status key: [x] done · [~] wired, needs Google dashboard step · [ ] manual (human, in Google)

## Auto-built (in the codebase)

- [x] **Privacy Policy** — page at `/privacy-policy`, linked in footer
- [x] **Accessibility Statement** — page at `/accessibility`, linked in footer
- [x] **Cookie Policy** — page at `/cookie-policy`, linked in footer
- [x] **Cookie consent banner** — functional: blocks GA/GTM until the visitor
      accepts the "Analytics & Performance" category, suppresses on decline,
      remembers the choice. Reopenable via "Cookie Preferences" in the footer.
- [x] **llms.txt** — at site root, lists key pages + all three policy pages
- [x] **robots.txt** — generated (`src/app/robots.ts`); allows all + AI crawlers
      (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and more) and
      references the sitemap
- [x] **sitemap.xml** — generated (`src/app/sitemap.ts`), 30 URLs covering all
      static pages, the 5 pillars, and the 10 insight articles

## Google setup (wired in code — finish in the Google dashboards)

- [~] **Google Analytics** — tag installed and consent-gated (`G-JKT9H7JDLM`).
      Remaining: confirm the GA4 property is live and receiving data (accept
      analytics cookies on the banner, then check Realtime).
- [~] **Google Tag Manager** — container installed and consent-gated
      (`GTM-PBJP6BWF`). Remaining: publish/confirm the container in GTM and add
      any tags there through consent mode.
- [ ] **Google Search Console** — verification file placed at
      `public/google2e8ac6b76f7fe274.html` (served at the site root once
      deployed). Remaining: click **Verify** in Search Console, then submit
      `https://tradesnky.org/sitemap.xml`.

## Notes
- GA/GTM only fire after analytics consent. When verifying install (GA Realtime
  or Search Console), accept the Analytics toggle first or you'll see zero data.
- Routes use the project's `-policy` naming (`/privacy-policy`, `/cookie-policy`)
  rather than the skill's default `/privacy`, `/cookies`, for in-project
  consistency.
- Search Console file verification works against the deployed domain; on a local
  dev server the file is served at `http://localhost:2000/google2e8ac6b76f7fe274.html`.
