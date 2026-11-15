# almontasser.ly

The personal site of Mahmoud Almontasser: portfolio, experience, and writing.

Built with [Astro](https://astro.build), MDX, and hand-written CSS. It ships almost no
JavaScript: a command menu, a theme switch, and a clock.

## Develop

```bash
npm install
npm run dev
```

The site runs at http://localhost:4321.

## Edit content

- `src/data/site.ts`: profile, links, projects, experience, and toolbox.
- `src/content/blog/`: posts as Markdown or MDX. Each post needs `title`, `summary`, and `date`.
- `src/assets/`: the portrait and project screenshots.

GitHub contributions and star counts are fetched at build time. Set `GITHUB_TOKEN` to raise the
API rate limit. If GitHub is unreachable, the build still succeeds and hides those numbers.

## Build

```bash
npm run build    # outputs to dist/
npm run check    # type-checks .astro and .ts files
npm run og       # re-renders public/og.png from scripts/og.html (needs Google Chrome)
```
