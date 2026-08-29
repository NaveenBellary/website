// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: update to the final deployed URL (workers.dev subdomain or custom
// domain) — it is used for canonical URLs in the sitemap and RSS feed.
export default defineConfig({
  site: 'https://naveenbellary.com',
  integrations: [sitemap()],
});
