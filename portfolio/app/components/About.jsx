'use client'
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import aboutImage from '../../public/about.jpg'
import { motion, scale } from 'framer-motion';

const TAB_DATA = [
  {
    id: 'skills',
    title: 'Skills',
    content: [
      'React.js',
      'Next.js',
      'React Native',
      'Flutter',
      'JavaScript',
      'Tailwind CSS'
    ]
  },
  {
    id: 'education',
    title: 'Education',
    content: [
      'BSc (Hons) in Software Engineering',
      'NSBM Green University',
      '2023 - Present'
    ]
  },
  {
    id: 'experience',
    title: 'Experience',
    content: [
      'Frontend Developer - Company Name',
      'Internship - Company Name'
    ]
  },
]

const variants = {
    default: {width:  0},
    active: {width: 'calc(100% - 0.75rem)'},
};

const About = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section id='about' className='container mt-10 mx-auto px-12 py-4'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}>

            <Image src={aboutImage} width={500} height={400} alt='about image'  />
        </motion.div>

        <motion.div 
        className='mt-4 md:mt-0 text-left flex flex-col h-full'
        initial={{ opacity: 0, scale: 0.5 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        >
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a Frontend Developer with React.js, Next.js, React Native, Flutter. 
            I build responsive, user-friendly applications that blend performance with 
            great design. Passionate about creating seamless digital experiences.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            {TAB_DATA.map(({ id, title }) => (
              <button key={id} onClick={() => handleTabChange(id)}>
                <p className={`mr-3 font-semibold cursor-pointer hover:text-white ${
                  tab === id ? 'text-white' : 'text-[#abd7be]'
                }`}>
                  {title}
                </p>
                <motion.div 
                animate={tab === id ? 'active' : 'default'} 
                variants={variants} 
                className='h-1 bg-[#00adb5] mt-2 mr-3'
                />
              </button>
            ))}
          </div>

          <div className='mt-8'>
            <ul className='list-disc pl-2'>
              {TAB_DATA.find((t) => t.id === tab)?.content.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;