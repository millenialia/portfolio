"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import me from '@/public/me.jpeg'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section'


export default function Intro() {
  const { ref } = useSectionInView('Home')
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id='home'>
          <div className='flex items-center justify-center'>
              <div className='relative'>
                  <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'tween', duration: 0.2 }}>
                    <Image
                      src={me}
                      alt='my portrait'
                      quality='95'
                      priority={true}
                          className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
                    </motion.div>
                  <motion.span className='text-[2rem] absolute bottom-0 right-[-.3rem]'
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness:125, delay:0.1,duration: 0.7 }}>
                      🖖🏻
                  </motion.span>
              </div>
          </div>
          <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl' initial={{ opacity: 0, y: 100 }} animate={{opacity: 1, y: 0}}>
              Hello,<span className="font-bold"> I`m Olena.</span><br />I`m a junior
        <span className="font-bold"> full-stack developer.</span> I enjoy
        building <span className="italic">attractive</span> and <span className="italic">comprehensive</span> sites. My focus is
        <span className="underline"> React.js</span>.
          </motion.h1>
          <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium' initial={{ opacity: 0, y: 100 }} animate={{opacity: 1, y: 0}} transition={{delay:0.1,}}>
        <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 hover:bg-gray-950 transition'
          onClick={() => {
            setTimeOfLastClick(Date.now())
            setActiveSection('Contact')}}>Contact me here<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /></Link>
              
              <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10' href='/CV.pdf' download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>

        <div className='flex gap-2'>
          
          <a href="https://www.linkedin.com/in/millenialia/" target='_blank' className='bg-white text-gray-700 p-4 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'><BsLinkedin /></a>
          
          <a href="https://github.com/millenialia" target='_blank' className='bg-white text-gray-700 p-4 flex items-center text-[1.2rem] rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'><FaGithubSquare /></a>
          
            </div>
          </motion.div>
    </section>
  )
}
