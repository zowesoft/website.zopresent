# Zopresent website

Marketing, documentation and download pages for **Zopresent** — scripture-first
worship presentation for a single operator and one audience display, built by
Zowesoft. Live at [zopresent.vercel.app](https://zopresent.vercel.app).

This repository contains only the site. The app is
[zowesoft/zopresent](https://github.com/zowesoft/zopresent).

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack) with React 19
- Tailwind CSS v4
- All copy lives in `src/lib/content.ts` — update releases, sizes, docs and
  blog posts there, not in the pages
- Deploys to Vercel on every push to `main`

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build (what Vercel runs)
pnpm start      # serve the production build locally
pnpm lint       # eslint
```

## Content

- `src/lib/content.ts` — site copy: product blurb, features, downloads
  (release asset names and [sizes](https://github.com/zowesoft/zopresent/releases)),
  docs and blog posts
- `src/app/opengraph-image.png` / `twitter-image.png` — the link-preview cards
  (1200x630, the Zopresent mark on the navy gradient)
- `public/` — screenshots and static assets

## Licence

The website is © 2026 Zowesoft. All rights reserved. The desktop product
ships under a source-available licence; see
[`LICENSE`](https://github.com/zowesoft/zopresent/blob/main/LICENSE) in the
desktop repository.

## Support

If Zopresent serves your church, you can help keep the project going — the
domain and (eventually) code-signing certificates are the project's only
recurring costs:

- [GitHub Sponsors](https://github.com/sponsors/theJohnCode)
- [Buy me a coffee](https://buymeacoffee.com/thejohncode)
