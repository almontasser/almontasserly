'use client'

import { formatDate } from 'pliny/utils/formatDate'
import Image from './Image'
import Link from './Link'
import { useEffect, useState } from 'react'

// const ProjectCard = async ({ title, description, imgSrc, href, repoUrl, className }) => {
//   let stars = null
//   if (repoUrl) {
//     const strippedRepoUrl = repoUrl.replace('https://github.com/', '')
//     const response = await fetch(`https://api.github.com/repos/${strippedRepoUrl}`, {
//       next: { revalidate: 3600 },
//     }).then((res) => res.json())
//     if (response.stargazers_count) {
//       stars = response.stargazers_count
//     }
//   }

const ProjectCard = ({ title, description, imgSrc, href, repoUrl, className }) => {
  const [stars, setStars] = useState(null)

  useEffect(() => {
    if (repoUrl) {
      const strippedRepoUrl = repoUrl.replace('https://github.com/', '')
      fetch(`https://api.github.com/repos/${strippedRepoUrl}`, {
        next: { revalidate: 3600 },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.stargazers_count) {
            setStars(response.stargazers_count)
          }
        })
        .catch(() => {})
    }
  }, [repoUrl])

  return (
    <div className={'md group relative w-full min-w-[300px] max-w-[384px] p-2 ' + className}>
      {stars ? (
        <span className="absolute right-0 top-0 inline-flex items-center justify-center gap-1 rounded-md bg-gray-900 px-4 py-2 text-xs shadow-md">
          <svg
            width="12px"
            height="12px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 47.94 47.94"
            xmlSpace="preserve"
            className="mr-1"
          >
            <path
              style={{ fill: '#ED8A19' }}
              d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
    c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
    c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
    c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
    c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
    C22.602,0.567,25.338,0.567,26.285,2.486z"
            />
          </svg>
          <strong>{stars}</strong> GitHub stars
        </span>
      ) : null}
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-transparent border-opacity-60 transition-all group-hover:border-primary-900 dark:border-gray-700 `}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                style={{ objectPosition: 'top' }}
                alt={title}
                src={imgSrc}
                sizes="400px"
                loading="lazy"
                className="rounded-t-sm object-cover object-center transition-all duration-300 group-hover:scale-105 md:h-36 lg:h-[150px]"
                width={384}
                height={250}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover md:h-36 lg:h-[150px]"
              width={384}
              height={250}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <dl>
            <dt className="sr-only">Description</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              {description}
            </dd>
          </dl>

          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
