import cloudflare from '@astrojs/cloudflare';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeFigureCaptions from './src/plugins/rehype-figure-captions.mjs';
import remarkInlineCode from './src/plugins/remark-inline-code.mjs';
import remarkReadingTime from './src/plugins/remark-reading-time.mjs';

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
  // This site doesn't use Astro sessions. Setting an in-memory driver stops the
  // Cloudflare adapter from auto-provisioning a `SESSION` KV namespace, so the
  // Worker deploys cleanly with no extra resources to create.
  session: {
    driver: 'memory',
  },
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
