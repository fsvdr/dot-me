import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../consts';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "FSVDR's Blog RSS",
    description: SITE.description,
    site: context.site?.href ?? SITE.url,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: post.data.path,
      categories: post.data.tags,
    })),
  });
}
