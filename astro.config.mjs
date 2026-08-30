// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

// `site` is the live domain; it backs canonical URLs, the sitemap and the RSS
// feed, so it must match what Netlify serves.
export default defineConfig({
  site: 'https://naveenbellary.dev',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
