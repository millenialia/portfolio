'use client'


import React from 'react'
import SectionHeading from './section-header'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import {  experimental_useFormStatus as useFormStatus} from 'react-dom'
import { toast } from 'react-hot-toast'

export default function Contact() {
    const { ref } = useSectionInView('Contact')
    const { pending } = useFormStatus()
    
  return (
      <motion.section id='contact' ref={ref} className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
          initial={{
          opacity:0,
          }}
          whileInView={{
          opacity:1,
          }}
          transition={{
          duration:1
      }}>
          <SectionHeading>Contact me</SectionHeading>
          <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a href="mailto:lenalebo@gmail.com" className='underline'>lenalebo@gmail.com</a> or through this form.</p>

          <form
              className='mt-10 flex flex-col dark:text-black'
              action={async (formData) => {
                  const { data, error } = await sendEmail(formData)
                  if (error) {
                      toast.error(error)
                      return
                  }
                  toast.success('Email sent successfully')
          }}>
              <input
                  type="email"
                  placeholder='Your email'
                  name='senderEmail' className='h-14 px-4 rounded-lg borderBlack focus:border-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none' required maxLength={500} />
              
              <textarea
                  placeholder='Your message'
                  name='message'
                  className='h-52 p-4 my-3 rounded-lg borderBlack focus:border-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none' required
                  maxLength={5000}></textarea>
              
              <SubmitBtn/>
          </form>
    </motion.section>
  )
}
