# NextWave Junk Removal Irvine

Marketing site for NextWave Junk Removal Irvine — React 18 + Vite + CSS Modules + React Router.

## Edit business details

Everything (phone, service areas, services, pricing checklist, FAQs, before/after photos, reviews, hours, site URL, optional estimate webhook) lives in `src/data/business.js`.

- `reviews: []` — paste real customer reviews here; until then the section shows "The NextWave Promise" cards.
- `googleReviewsUrl` — add the Google Business Profile reviews link to show a "Read Our Google Reviews" button.
- `estimateWebhookUrl` — add a GoHighLevel inbound webhook to receive estimate submissions as JSON.
- `siteUrl` — also update `index.html` (canonical), `public/robots.txt` and `public/sitemap.xml` if the domain differs.

## Develop

```bash
npm install
npm run dev
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- SPA routing handled by `public/_redirects`
