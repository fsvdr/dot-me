import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';

import remarkReadingTime from './src/plugins/remark-reading-time.mjs';
import remarkInlineCode from './src/plugins/remark-inline-code.mjs';
import rehypeFigureCaptions from './src/plugins/rehype-figure-captions.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://fsvdr.me',
  // Static by default — every page is prerendered and served from Cloudflare's
  // edge as a static asset. The only on-demand route is the OG image worker,
  // which opts out via `export const prerender = false`.
  output: 'static',
  // Clean, trailing-slash-free URLs (e.g. /blog, /its-here-finally) that match
  // the original site and avoid redirect hops on Cloudflare static assets.
  trailingSlash: 'never',
  build: { format: 'file' },
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/share-thumbnail'),
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime, remarkInlineCode],
      rehypePlugins: [rehypeFigureCaptions],
    }),
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
});
