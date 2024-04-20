import Link from 'next/link'
import ProjectCard from './ProjectCard'

const MAX_DISPLAY = 6

export default function LatestProjects({ projects }) {
  return (
    <div className="">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Some of the non-commercial and open source projects I've created
        </p>
      </div>
      {!projects.length && 'No projects found.'}
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}
      >
        {projects.slice(0, MAX_DISPLAY).map((project) => {
          const { title, description, repoUrl, href, imgSrc } = project
          return (
            <ProjectCard
              description={description}
              repoUrl={repoUrl}
              key={title}
              title={title}
              href={href}
              imgSrc={imgSrc}
              className={''}
            />
          )
        })}
      </div>
      {projects.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All projects"
          >
            All projects &rarr;
          </Link>
        </div>
      )}
    </div>
  )
}
