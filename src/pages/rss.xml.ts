import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { site } from '../data/site'
import { getPosts } from '../lib/posts'

export async function GET(context: APIContext) {
  const posts = await getPosts()
  return rss({
    title: `${site.name}: writing`,
    description: site.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      categories: p.data.tags,
      link: `/blog/${p.id}/`,
    })),
  })
}
