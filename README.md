# NeuForge Site Template

Reusable Astro template for local business websites. One config file per client, deploy to Cloudflare Pages, near-zero maintenance.

## Per-client workflow

1. **New repo from this template** → name it `client-[businessname]`
2. **Edit `src/config/site.ts`** — the only file that must change per client:
   NAP (must match Google Business Profile exactly), hours, services,
   testimonials, FAQs, theme preset, Web3Forms key, schema type
3. **Swap images in `/public`** — `hero.jpg`, `team.jpg`, `og.jpg` (1200×630), `favicon.svg`.
   Use real photos of the client's business, compressed (squoosh.app)
4. **Write real copy** in `src/pages/about.astro` (client's story) and adjust page copy
5. **Add per-service pages** if SEO warrants: `src/pages/services/[service-name].astro`
6. `npm install && npm run dev` to work locally, `npm run build` before shipping

## Deploy (Cloudflare Pages)

- Push repo to GitHub → Cloudflare Pages → "Connect to Git"
- Build command: `npm run build` · Output directory: `dist`
- Add custom domain under the Pages project → follow DNS instructions
- **Do not touch the client's MX records** when changing DNS — that's their email
- Every push to `main` auto-deploys; PRs get preview URLs (use for client review)

## What's wired in already

- LocalBusiness JSON-LD (from config) on every page + FAQPage schema
- Unique title/description per page, canonical URLs, og tags, sitemap, robots.txt
- Click-to-call in sticky header, hours in footer, NeuForge credit link
- Contact form via Web3Forms (create one access key per client at web3forms.com)
- Three theme presets in `site.ts` (`trade`, `hospitality`, `care`) — or override with colours from the client's logo
- Reduced-motion respected, focus outlines, semantic HTML

## House rules

- Fonts: presets reference Google Fonts families (Archivo, Fraunces, Source Serif 4, Inter).
  Either add the `<link>` tags in `Base.astro` or, better, self-host via Fontsource
  (`npm i @fontsource-variable/inter` etc.) for speed
- Keep Lighthouse ≥ 90 performance / ≥ 95 SEO — check before every launch
- Improvements made for one client that are generic → merge back into this template.
  The template getting better with every job is the whole point.
