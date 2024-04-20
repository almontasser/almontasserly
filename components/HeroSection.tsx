import siteMetadata from '@/data/siteMetadata'
import SocialIcon from './social-icons'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="flex w-full flex-wrap items-center justify-between">
      <div className="w-full lg:w-1/2">
        <p className="mb-6 text-5xl font-bold text-primary-600 md:text-7xl">
          Hello, I'm <br />
          <span className="text-white ">Mahmoud Almontasser</span>
        </p>
        <p className="mb-6 text-xl">
          Software developer focused on crafting robust web experiences. Skilled in advising on web
          platform, performance, developer experience, and expert in Nest.js, Databases, DevOps &
          Networking.
        </p>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="flex gap-6">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={8} />
              <SocialIcon kind="github" href={siteMetadata.github} size={8} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={8} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={8} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full lg:mt-0 lg:w-1/2 ">
        <Image
          className="ml-auto h-[550px] rounded-lg object-cover shadow-lg "
          src="/static/images/pp.jpeg"
          alt="Ai generated image of Bart"
          width="400"
          loading="eager"
          height="500"
          priority
        />
      </div>
    </div>
  )
}
