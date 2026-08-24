import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('writing')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: "writing · obinna's world",
    description: 'writing about software, coding agents, and the tools around them',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.subtitle,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
    })),
  });
}
