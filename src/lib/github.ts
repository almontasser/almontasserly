// Build-time GitHub data. Every fetch fails soft: the site builds offline, it just hides live numbers.
import { site } from '../data/site'

export type Day = { date: string; count: number; level: number }

type GitHub = {
  days: Day[]
  total: number | null
  stars: Record<string, number>
}

async function json(url: string, headers: Record<string, string> = {}) {
  try {
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(8000) })
    return res.ok ? await res.json() : null
  } catch {
    return null
  }
}

async function load(): Promise<GitHub> {
  const user = site.githubUser
  const token = process.env.GITHUB_TOKEN
  const [contrib, repos] = await Promise.all([
    json(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`),
    json(
      `https://api.github.com/users/${user}/repos?per_page=100&type=owner`,
      token ? { Authorization: `Bearer ${token}` } : {},
    ),
  ])
  return {
    days: contrib?.contributions ?? [],
    total: contrib?.total?.lastYear ?? null,
    stars: Object.fromEntries(
      (Array.isArray(repos) ? repos : []).map((r) => [r.full_name, r.stargazers_count]),
    ),
  }
}

let cache: Promise<GitHub> | undefined
export const getGitHub = () => (cache ??= load())
