# fsvdr.me

Personal site and portfolio for [@fsvdr](https://twitter.com/fsvdr). Built with
[Astro](https://astro.build) and deployed to [Cloudflare Workers](https://workers.cloudflare.com).

## Stack

- **Astro** — static output (every page is prerendered), with a single on-demand
  Worker route for dynamic Open Graph share images.
- **@astrojs/cloudflare** — adapter that builds the Cloudflare Worker + static assets.
- **Content Collections** — blog posts authored in Markdown under `src/content/blog`.
- **workers-og** (satori) — runtime generation of social share thumbnails.
- **@astrojs/sitemap** & **@astrojs/rss** — `sitemap-index.xml` and `/rss.xml`.
- **Shiki** — code block highlighting. **bun** — package manager / runtime.

Custom fonts (Trenda, Wattermellon) are served from Cloudflare R2 and swapped in
with a small FOIT (Flash Of Invisible Text) strategy. Scroll parallax is done
purely in CSS via scroll-driven animations (`animation-timeline: view()`), which
degrade gracefully to a static layout in browsers without support (e.g. Firefox).

## Develop

```sh
bun install
bun run dev          # Astro dev server at http://localhost:4321
```

## Build & preview

```sh
bun run build        # outputs static assets to dist/client and the worker to dist/server
bun run preview      # builds, then runs the worker locally with `wrangler dev`
```

`bun run preview` runs the real Cloudflare Worker locally (via Wrangler/Miniflare),
which is the most accurate way to test the dynamic OG image route. Note the OG
endpoint fetches the brand fonts from R2 at runtime, so it needs outbound network
access to `r2.dev`.

## Deploy

Deployment runs through **Cloudflare Workers Builds** (connected to this Git repo
in the Cloudflare dashboard: _Workers & Pages → the worker → Settings → Builds_).
Use these settings:

| Setting             | Value                                          |
| ------------------- | ---------------------------------------------- |
| Build command       | `bun run build`                                |
| Deploy command      | `npx wrangler deploy -c dist/server/wrangler.json` |
| Build output / root | repository root                                |

The non-default deploy command matters: `@astrojs/cloudflare` emits the worker
and its resolved Wrangler config to `dist/server/wrangler.json` (with `main` and
the `ASSETS` static-assets binding wired up), so `wrangler deploy` must be pointed
at that file rather than the root `wrangler.toml`. The root `wrangler.toml` only
holds project-level settings (name, compatibility date/flags) and is intentionally
free of `main`/`assets` — adding them there would break `astro build`.

Node version is pinned via `.node-version`. The deploy needs no extra Cloudflare
resources (the only binding is the auto-managed `ASSETS`).

To deploy from your own machine instead:

```sh
wrangler login
bun run deploy       # astro build && wrangler deploy -c dist/server/wrangler.json
```

After the first deploy, point the `fsvdr.me` domain at the worker via a Custom
Domain (or route) in the Cloudflare dashboard.

## Project layout

```
src/
├── assets/            # images optimized at build time via astro:assets
├── components/        # Astro components (Title, Section, SiteNav, Contact, …)
├── content/blog/      # Markdown blog posts (+ co-located images)
├── content.config.ts  # blog collection schema
├── layouts/           # BaseLayout (head, analytics, fonts, footer, socials)
├── pages/
│   ├── index.astro · about.astro · blog.astro · 404.astro
│   ├── [...slug].astro        # blog post pages, routed by frontmatter `path`
│   ├── rss.xml.ts             # RSS feed
│   └── share-thumbnail.png.ts # on-demand OG image worker route
├── plugins/           # remark/rehype plugins (reading time, inline code, captions)
└── styles/            # global.css + R2 @font-face declarations
```

## Writing a post

Add a Markdown file under `src/content/blog/<slug>/` with frontmatter:

```yaml
---
path: /my-post          # the public URL
title: My post
description: A short summary
date: 2026-01-01
category: Tutorial
tags: ['tag-a', 'tag-b']
series: 5                # ordering for prev/next navigation
standalone: false        # true => excluded from the blog series + listing
---
```

Co-locate images next to the Markdown and reference them with relative paths;
they are optimized automatically. An image with a title gets a `<figcaption>`:
`![alt](./image.png 'My caption')`.
