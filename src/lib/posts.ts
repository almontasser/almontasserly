import { getCollection } from 'astro:content'

export async function getCaseStudies() {
  const items = await getCollection('work', ({ data }) => import.meta.env.DEV || !data.draft)
  return items.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft)
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export const readingTime = (body = '') =>
  `${Math.max(1, Math.round(body.split(/\s+/).length / 220))} min read`

const fmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})
export const formatDate = (d: Date) => fmt.format(d)
