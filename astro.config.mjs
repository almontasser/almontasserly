// @ts-check
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  site: 'https://almontasser.ly',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/projects': '/#work',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Geist',
      cssVariable: '--font-sans',
      weights: ['100 900'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      weights: ['100 900'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Instrument Serif',
      cssVariable: '--font-serif',
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
})
