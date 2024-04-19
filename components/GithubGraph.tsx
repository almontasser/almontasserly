'use client'

import { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

const contributionYears = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]

export default function GithubGraphSection() {
  const [year, setYear] = useState(2024)

  return (
    <div className="w-full">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Github Contributions ({year})
        </h1>
        <div className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My GitHub Contributions show my ongoing open-source involvement since 2016, a fulfilling
          hobby I engage in during my free time.
          <div className="text-md mt-3 flex flex-wrap gap-3 leading-7">
            {contributionYears.map((singleYear) => (
              <button
                key={singleYear}
                className="cursor-pointer text-primary-500 hover:text-primary-800"
                onClick={() => setYear(singleYear)}
              >
                {singleYear}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-md border-2 border-gray-700 border-opacity-60 p-6 transition-all hover:border-primary-900">
        <GitHubCalendar
          key={`${year}-calendar`}
          username="almontasser"
          year={year}
          colorScheme="dark"
          theme={{ dark: ['#374151', '#1e44af'] }}
        />
      </div>
    </div>
  )
}
