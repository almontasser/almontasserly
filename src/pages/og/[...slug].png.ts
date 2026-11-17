// A 1200×630 link-preview image for each post, rendered at build time.
import { readFile } from 'node:fs/promises'
import type { APIRoute, GetStaticPaths } from 'astro'
import satori from 'satori'
import sharp from 'sharp'
import { site } from '../../data/site'
import { formatDate, getPosts, readingTime } from '../../lib/posts'

export const getStaticPaths = (async () =>
  (await getPosts()).map((post) => ({ params: { slug: post.id }, props: { post } }))) satisfies GetStaticPaths

const font = (pkg: string, file: string) => readFile(`node_modules/@fontsource/${pkg}/files/${file}`)
const fonts = Promise.all([
  font('geist', 'geist-latin-400-normal.woff'),
  font('geist', 'geist-latin-600-normal.woff'),
  font('geist-mono', 'geist-mono-latin-500-normal.woff'),
])

// satori takes React-shaped objects; this saves pulling in JSX for one image.
const h = (type: string, style: Record<string, unknown>, ...children: unknown[]) => ({
  type,
  props: { style, children },
})

export const GET: APIRoute = async ({ props }) => {
  const { title } = props.post.data
  const [regular, semibold, mono] = await fonts
  const muted = '#a1a1aa'
  const monoText = { fontFamily: 'Geist Mono', fontSize: 22, letterSpacing: '0.04em', color: muted }

  const svg = await satori(
    h(
      'div',
      {
        width: 1200,
        height: 630,
        boxSizing: 'border-box', // satori defaults to content-box, which pushes the footer off the canvas
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        background: '#09090b',
        borderTop: '6px solid #22d3ee',
        color: '#ededef',
        fontFamily: 'Geist',
      },
      h('div', { display: 'flex', ...monoText }, 'almontasser.ly / writing'),
      h(
        'div',
        { display: 'flex', flexDirection: 'column' },
        h(
          'div',
          {
            display: 'flex',
            width: 1040, // satori won't wrap text without a width
            fontSize: title.length > 60 ? 64 : 80,
            fontWeight: 600,
            letterSpacing: '-0.045em',
            lineHeight: 1.05,
          },
          title,
        ),
        h(
          'div',
          { display: 'flex', justifyContent: 'space-between', marginTop: 48, ...monoText },
          h('span', {}, site.name),
          h('span', {}, `${formatDate(props.post.data.date)} · ${readingTime(props.post.body)}`),
        ),
      ),
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Geist', data: regular, weight: 400 },
        { name: 'Geist', data: semibold, weight: 600 },
        { name: 'Geist Mono', data: mono, weight: 500 },
      ],
    },
  )

  const png = await sharp(Buffer.from(svg)).png().toBuffer()
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } })
}
