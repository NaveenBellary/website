# website

My personal website built with [Astro](https://astro.build) (Vite-based) and
deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/)
as static assets.

## Development

```sh
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static build into dist/
npm run preview   # preview the production build locally
```

## Writing a post

Add a markdown file to `src/content/blog/`:

```md
---
title: "Post title"
description: "Optional summary"
date: 2026-08-22
---

Post body…
```

The file name becomes the URL: `src/content/blog/my-post.md` → `/posts/my-post/`.

## Deployment

```sh
npm run deploy    # builds and deploys via wrangler (needs `npx wrangler login` once)
```

Alternatively, connect this repo to Cloudflare Workers Builds in the
Cloudflare dashboard (Workers & Pages → Create → import repository) for
automatic deploys on push. Build command: `npm run build`, deploy command:
`npx wrangler deploy`.

After the first deploy, update `site` in `astro.config.mjs` to the real URL.
