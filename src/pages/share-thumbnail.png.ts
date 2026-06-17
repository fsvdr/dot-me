import { ImageResponse } from 'workers-og';
import type { APIContext } from 'astro';

// Generated on demand by the Cloudflare Worker (not prerendered).
export const prerender = false;

const FONT_BASE = 'https://pub-fd7ef24f455244ba96868abce0b6d30a.r2.dev/fonts/trenda';

// Memoize font data within the isolate to avoid refetching on every request.
let fontCache: { regular: ArrayBuffer; black: ArrayBuffer } | null = null;

async function loadFonts() {
  if (fontCache) return fontCache;

  const [regular, black] = await Promise.all([
    fetch(`${FONT_BASE}/Trenda-Regular.ttf`).then((r) => r.arrayBuffer()),
    fetch(`${FONT_BASE}/Trenda-Black.ttf`).then((r) => r.arrayBuffer()),
  ]);

  fontCache = { regular, black };
  return fontCache;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET({ url }: APIContext) {
  const title = escapeHtml(url.searchParams.get('title') ?? 'I make websites and apps');
  const circle = escapeHtml(url.searchParams.get('circle') ?? `Based in Mexico City ·${new Date().getFullYear()}·`);
  const rawBadge = url.searchParams.get('badge');
  const badge = rawBadge ? escapeHtml(rawBadge) : null;

  const fontSize = title.length >= 30 ? 80 : 104;

  const markup = `
    <div style="display:flex;flex-direction:column;justify-content:center;width:1200px;height:630px;background:#000000;color:#ffffff;padding:64px 96px;font-family:Trenda;">
      <div style="font-weight:800;text-transform:uppercase;font-size:28px;letter-spacing:1px;">fsvdr</div>

      <div style="display:flex;font-weight:800;text-transform:uppercase;font-size:${fontSize}px;line-height:1.05;margin-top:24px;">${title}</div>

      <div style="display:flex;align-items:center;margin-top:40px;font-size:30px;">
        <span style="color:#FF4A4A;font-weight:800;">${circle}</span>
        ${
          badge
            ? `<span style="display:flex;margin-left:28px;border:3px solid #ffffff;border-radius:999px;padding:8px 28px;font-weight:800;text-transform:uppercase;">${badge}</span>`
            : ''
        }
      </div>
    </div>
  `;

  try {
    const { regular, black } = await loadFonts();

    return new ImageResponse(markup, {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Trenda', data: regular, weight: 400, style: 'normal' },
        { name: 'Trenda', data: black, weight: 800, style: 'normal' },
      ],
      // Cache aggressively at the edge — thumbnails are deterministic per query.
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable',
      },
    });
  } catch (error) {
    return new Response(`Failed to generate thumbnail: ${(error as Error).message}`, { status: 500 });
  }
}
