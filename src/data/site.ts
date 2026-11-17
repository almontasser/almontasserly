// Everything personal on the site lives in this file. Edit here, not in the pages.
import hibrHome from '../assets/projects/hibr-home.webp'
import tuskCompletion from '../assets/projects/tusk-completion.webp'

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
  lamahSince: 2021,
  links: {
    github: 'https://github.com/almontasser',
    linkedin: 'https://www.linkedin.com/in/m-almuntasir',
    x: 'https://x.com/Montasser93',
  },
}

export type Project = {
  name: string
  org?: string // set for work done for an employer
  repo?: string // owner/name, used for live star counts
  tagline: string
  description: string
  year: number | string
  stack: string[]
  links: { label: string; href: string }[]
  highlights?: { value: string; label: string }[]
  image?: ImageMetadata
  imageAlt?: string
  wide?: boolean // spans the full row of the project grid
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
  image: tuskCompletion,
  imageAlt: "Tusk completing a Filament form field with the Post model's columns and relationships",
}

export const projects: Project[] = [
  {
    name: 'Hibr',
    tagline: 'Print-on-demand for Libya, designed in the browser',
    description:
      "My own print-on-demand shop. Customers design shirts, mugs, posters, and stickers in an Arabic, right-to-left browser editor with more than 500 templates, or order a design from a real designer. Hibr prints at each product's resolution, takes payment through local gateways, and delivers across Libya.",
    year: 2026,
    stack: ['Next.js', 'React', 'Fabric.js', 'PostgreSQL', 'Prisma'],
    links: [{ label: 'Website', href: 'https://hibr.ly' }],
    image: hibrHome,
    imageAlt: "Hibr's Arabic home page, with a 3D T-shirt preview next to the headline 'From an idea to a product'",
    wide: true,
  },
  {
    name: 'Ersaal SMS gateway',
    org: 'Lamah',
    tagline: 'An SMS platform for businesses and developers in Libya',
    description:
      'Ersaal sends business SMS over the Libyana and Madar networks, through a dashboard and an API. I lead its backend, and I migrated production live from single-instance servers to a three-node high-availability cluster: Patroni PostgreSQL, Valkey with Sentinel, and HAProxy on every node.',
    year: '2024–now',
    stack: ['Laravel', 'Filament', 'PostgreSQL', 'Patroni', 'Valkey', 'Ansible', 'Kamal'],
    links: [{ label: 'Website', href: 'https://www.getersaal.com' }],
  },
  {
    name: 'Ersaal SMPP sender',
    org: 'Lamah',
    tagline: 'The service that hands every message to the carriers',
    description:
      "A NestJS service I wrote to speak SMPP to the carriers' message centers. It keeps a pool of bound sessions for each carrier, submits each batch through a window of in-flight requests, backs off when a carrier throttles, and stores every delivery report before it acknowledges it.",
    year: '2025–now',
    stack: ['TypeScript', 'NestJS', 'SMPP', 'PostgreSQL'],
    links: [],
  },
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
]

export const experience = [
  {
    role: 'Backend Team Leader',
    org: 'Lamah for Information Technologies',
    period: '2023–now',
    points: [
      'Lead the backend team: system design, code review, and delivery.',
      "Lead the backend of Ersaal, Lamah's SMS gateway, and wrote the SMPP sender that delivers its messages to the Libyana and Madar networks.",
      'Migrated Ersaal production live to a three-node high-availability cluster, provisioned with Ansible and deployed with Kamal.',
      'Standardized containerized deployment and CI/CD with Docker and GitHub Actions.',
    ],
  },
  {
    role: 'Network and Servers Administrator',
    org: 'Lamah for Information Technologies',
    period: '2021–now',
    points: [
      'Run the Linux servers, networks, DNS, TLS, and backups under our production services.',
      'Debug reliability and connectivity issues with logs, packet captures, and Docker diagnostics, including VPN links to SMS carriers.',
    ],
  },
  {
    role: 'Backend Developer',
    org: 'Lamah for Information Technologies',
    period: '2021–2023',
    points: [
      'Built REST APIs and backend modules for reservations, archiving, SMS, and café management systems in Laravel and Node.js.',
      'Designed schemas and tuned queries on PostgreSQL, MySQL, and SQLite.',
    ],
  },
  {
    role: 'Desktop software developer',
    org: 'Independent',
    period: 'Before 2021',
    points: ['Wrote Windows software in Delphi, C++, and C# before moving to the web.'],
  },
]

export const milestones = [
  { year: '2026', text: 'Released Tusk, a PHP editor with its own Rust language server, in alpha.' },
  { year: '2026', text: 'Migrated the Ersaal SMS gateway live to a high-availability cluster.' },
  { year: '2026', text: 'Started Hibr, a print-on-demand shop for Libya.' },
  { year: '2025', text: 'Published tauri-plugin-dev-invoke on crates.io and npm.' },
  { year: '2025', text: "Wrote Ersaal's SMPP sender in NestJS." },
  { year: '2023', text: 'Became backend team leader at Lamah.' },
  { year: '2023', text: 'Wrote Crust, a compiler from scratch.' },
  { year: '2023', text: 'Graduated with a B.Sc. in Information Technology.' },
  { year: '2021', text: 'Joined Lamah as a backend developer.' },
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
    items: ['Linux', 'Docker', 'Ansible', 'Kamal', 'HAProxy', 'Terraform', 'Hetzner Cloud', 'Networking', 'GitHub Actions'],
  },
  {
    title: 'Data',
    note: 'Schema design, query tuning, replication, and database administration.',
    items: ['PostgreSQL', 'Patroni', 'Valkey', 'MySQL', 'SQLite'],
  },
  {
    title: 'Systems',
    note: 'Compilers, language servers, and low-level tooling.',
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
