interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  repoUrl?: string
}

const projectsData: Project[] = [
  {
    title: 'Crust Programming Language',
    description: `This is a hobby project to learn about compilers and language design. I've designed the language to be similar to C and Rust.`,
    imgSrc: '/static/images/projects/crust.png',
    href: 'https://github.com/almontasser/crust',
    repoUrl: 'https://github.com/almontasser/crust',
  },
  {
    title: 'My blog',
    description:
      'My 🏡 in the ☁: Featuring my portfolio, showcases, code snippets, development logs, and creative ideas.',
    imgSrc: '/static/images/projects/blog.png',
    href: 'https://github.com/almontasser/almontasserly',
    repoUrl: 'https://github.com/almontasser/almontasserly',
  },
]

export default projectsData
