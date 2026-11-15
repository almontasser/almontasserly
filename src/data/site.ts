// Everything personal on the site lives in this file. Edit here, not in the pages.
import tuskDesigner from '../assets/projects/tusk-designer.webp'

export const site = {
  name: 'Mahmoud Almontasser',
  url: 'https://almontasser.ly',
  title: 'Mahmoud Almontasser · Backend team lead',
  description:
    'Backend team lead from Libya. I build Laravel and Node.js backends, run the Linux servers under them, and write developer tools in Rust.',
  role: 'Backend team lead',
  location: 'Misurata, Libya',
  timeZone: 'Africa/Tripoli',
  email: 'almontasser@outlook.com',
  // Set to '' to hide the availability badge.
  availability: 'Open to remote roles',
  githubUser: 'almontasser',
  githubSince: 2016,
  links: {
    github: 'https://github.com/almontasser',
    linkedin: 'https://www.linkedin.com/in/m-almuntasir',
    x: 'https://x.com/Montasser93',
  },
}

export type Project = {
  name: string
  repo?: string // owner/name, used for live star counts
  tagline: string
  description: string
  year: number
  stack: string[]
  links: { label: string; href: string }[]
  highlights?: { value: string; label: string }[]
  image?: ImageMetadata
  imageAlt?: string
}

export const featured: Project = {
  name: 'Tusk',
  repo: 'almontasser/tusk',
  tagline: 'The PHP editor for Laravel artisans',
  description:
    'A desktop editor for PHP, Laravel, and Filament on macOS, Windows, and Linux. It aims for PhpStorm-class navigation using only open-source language servers, and adds visual designers for Filament, refactoring, static analysis, an Xdebug debugger, a database client, and local AI completion.',
  year: 2026,
  stack: ['Rust', 'TypeScript', 'Language servers', 'PHP'],
  links: [
    { label: 'Website', href: 'https://tusk.almontasser.ly' },
    { label: 'Source', href: 'https://github.com/almontasser/tusk' },
  ],
  highlights: [
    { value: '~1 s', label: 'to index a 23,000-file Laravel app with its Rust PHP language server' },
    { value: '3 ms', label: 'of work per keystroke, even in a 4,800-line file' },
    { value: 'Local', label: 'AI completion: Qwen2.5-Coder runs on your own GPU' },
  ],
  image: tuskDesigner,
  imageAlt: 'Tusk editing a Filament product resource in its visual form designer',
}

export const projects: Project[] = [
  {
    name: 'Crust',
    repo: 'almontasser/crust',
    tagline: 'A compiler for a C-like language with Rust syntax',
    description:
      'A compiler written from scratch to learn language design. It parses functions, scopes, arrays, strings, and control flow, and generates x86-64 GNU assembly.',
    year: 2023,
    stack: ['Rust', 'Compilers', 'x86-64'],
    links: [{ label: 'Source', href: 'https://github.com/almontasser/crust' }],
  },
  {
    name: 'tauri-plugin-dev-invoke',
    repo: 'almontasser/tauri-plugin-dev-invoke',
    tagline: 'Run a Tauri app in a plain browser during development',
    description:
      "A Tauri v2 plugin that routes browser requests through Tauri's real IPC. Commands, events, channels, binary payloads, and permission checks behave as they do in the app. Published on crates.io and npm.",
    year: 2025,
    stack: ['Rust', 'Tauri v2', 'TypeScript'],
    links: [
      { label: 'Source', href: 'https://github.com/almontasser/tauri-plugin-dev-invoke' },
      { label: 'crates.io', href: 'https://crates.io/crates/tauri-plugin-dev-invoke' },
    ],
  },
  {
    name: 'UDCN',
    repo: 'almontasser/udcn3',
    tagline: 'Named Data Networking with eBPF acceleration',
    description:
      'A content-centric networking stack. An XDP program handles packets in the kernel, a daemon forwards and routes, a CLI transfers files between nodes, and a bench tool simulates topologies.',
    year: 2025,
    stack: ['Rust', 'eBPF / XDP', 'Networking'],
    links: [{ label: 'Source', href: 'https://github.com/almontasser/udcn3' }],
  },
  {
    name: 'mmWave beam alignment',
    repo: 'almontasser/ba-sionna',
    tagline: 'A deep learning paper, reimplemented',
    description:
      'A TensorFlow implementation of adaptive joint mmWave beam alignment on 3GPP TR 38.901 channel models. The base station learns a beam codebook while the device adapts with a recurrent network.',
    year: 2025,
    stack: ['Python', 'TensorFlow', 'Sionna'],
    links: [{ label: 'Source', href: 'https://github.com/almontasser/ba-sionna' }],
  },
]

// TODO(Mahmoud): add start years, and any earlier employers.
export const experience = [
  {
    role: 'Backend Team Leader',
    org: 'Lamah for Information Technologies',
    period: 'Now',
    points: [
      'Lead the backend team: system design, code review, and delivery.',
      'Run the infrastructure under our services: Linux, Docker, databases, and networking.',
    ],
  },
  {
    role: 'Software Developer',
    org: 'Lamah for Information Technologies',
    period: 'Before',
    points: ['Built web backends with Nest.js and Laravel, and moved into leading the team.'],
  },
  {
    role: 'Desktop software developer',
    org: 'Independent',
    period: 'Earlier',
    points: ['Wrote Windows software in Delphi, C++, and C# before moving to the web.'],
  },
]

export const milestones = [
  { year: '2026', text: 'Released Tusk, a PHP editor with its own Rust language server, in alpha.' },
  { year: '2025', text: 'Published tauri-plugin-dev-invoke on crates.io and npm.' },
  { year: '2025', text: 'Built UDCN, an eBPF-accelerated Named Data Networking stack.' },
  { year: '2023', text: 'Wrote Crust, a compiler from scratch.' },
  { year: '2016', text: 'Started publishing code on GitHub.' },
  { year: 'Age 12', text: 'Wrote my first program.' },
]

export const toolbox = [
  {
    title: 'Backend',
    note: 'APIs, admin panels, queues, and the business logic in between.',
    items: ['PHP', 'Laravel', 'Filament', 'Node.js', 'NestJS', 'TypeScript'],
  },
  {
    title: 'Infrastructure',
    note: 'The servers, networks, and pipelines that keep it running.',
    items: ['Linux', 'Docker', 'Terraform', 'Hetzner Cloud', 'Networking', 'GitHub Actions'],
  },
  {
    title: 'Data',
    note: 'Schema design, query tuning, and database administration.',
    items: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    title: 'Systems',
    note: 'Compilers, language servers, and kernel-level networking.',
    items: ['Rust', 'C', 'Go', 'Odin', 'eBPF'],
  },
  {
    title: 'Desktop & frontend',
    note: 'Native apps and the interfaces on top of the backend.',
    items: ['Tauri', 'React', 'Vue', 'Next.js'],
  },
  {
    title: 'Where I started',
    note: 'Desktop software, long before the web.',
    items: ['Delphi', 'C++', 'C#'],
  },
]
