"use client"

import React from 'react'
import SectionHeading from './section-header'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {

  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    id='about'>
          <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        Working in finance, I always had a keen interest in technology. About a year ago, I took a chance and started learning programming. I took a course that taught me web development basics like <span className="font-medium">HTML, CSS, JavaScript, React and Node.js</span>. I also independently learned <span className="font-medium">TypeScript</span> and use it extensively in my projects, along with <span className="font-medium">Next.js</span>. I enjoy exploring various libraries to find the most suitable solutions. Knowing there are many more to discover, I`m excited about the opportunities ahead. What excites me most about programming is taking on tough challenges and eventually finding solutions.
      </p>
      <p className='mb-3'>
        Outside of work, I love being outdoors. I enjoy activities like biking, yoga, and swimming. I`m a big fan of traveling, camping, and finding peaceful places in nature. One of my big dreams is to see the southern lights in Iceland, even if it`s a bit of a cliché!
      </p>
      <p>
        Right now, I`m searching for a <span className="font-medium italic">full-time position of junior developer</span> where I can apply my skills to real projects and keep growing.
      </p>
    </motion.section>
  )
}
