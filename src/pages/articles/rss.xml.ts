import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { profile } from '../../data/profile';
import { withBase } from '../../lib/url';

export async function GET(context: APIContext) {
  const articles = await getCollection('articles');

  return rss({
    title: `${profile.name} — Engineering Journal`,
    description: 'Technical writing on cloud architecture, IoT systems, and engineering leadership.',
    site: new URL(withBase('/'), context.site).toString(),
    items: articles
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((article) => ({
        title: article.data.title,
        description: article.data.summary,
        pubDate: article.data.date,
        link: withBase(`/articles/${article.id}/`),
      })),
  });
}
