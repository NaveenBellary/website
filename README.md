# website

[![Netlify Status](https://api.netlify.com/api/v1/badges/a4128e78-7592-4bd7-9de1-f6af8446e650/deploy-status)](https://app.netlify.com/sites/naveenbellary/deploys)

My personal website — <https://naveenbellary.dev> — built with
[Astro](https://astro.build) and deployed to
[Netlify](https://www.netlify.com/).

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

Netlify builds and deploys automatically on push to `master`. Build settings
live in `netlify.toml` (command `npm run build`, publish `dist/`), which
overrides whatever is configured in the Netlify UI.

`netlify.toml` also holds the redirects that preserve the old Hugo URLs
(`/index.xml` → `/rss.xml`, `/sitemap.xml` → `/sitemap-index.xml`).

> A future move to Cloudflare Workers is planned as a separate change. The
> previous `wrangler.jsonc` can be recovered with
> `git show e88faf7:wrangler.jsonc`.
