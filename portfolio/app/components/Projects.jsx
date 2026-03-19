'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'

const PROJECT_DATA = [
  {
    id: 1,
    title: 'Portfolio',
    description: '',
    image: '/1.png',
    tag: ['All', 'web'],
    gitUrl: 'https://github.com/uthpalawanna/Portfolio.git',
    previewUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Online-Learning-Platform',
    description: '',
    image: '/2.jpg',
    tag: ['All', 'web'],
    gitUrl: 'https://github.com/uthpalawanna/ACADEMIA-Online-Education-Learning-Platform.git',
    previewUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Machine Learning + Web App',
    description: '',
    image: '/3.png',
    tag: ['All', 'machine learning'],
    gitUrl: 'https://github.com/uthpalawanna/Diabetes-Prediction-System.git',
    previewUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Mobile Application',
    description: '',
    image: '/4.png',
    tag: ['All', 'mobile'],
    gitUrl: 'https://github.com',
    previewUrl: 'https://example.com',
  },
  {
    id: 5,
    title: 'Web Application',
    description: '',
    image: '/7.png',
    tag: ['All', 'web'],
    gitUrl: 'https://github.com',
    previewUrl: 'https://example.com',
  },
]

const Projects = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity:1}
  }

  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.tag.includes(tag)
  )

  return (
    <section id="projects" className='container mt-10 mx-auto px-12 py-4'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>

      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        {['All', 'web', 'mobile', 'machine learning'].map((tagName) => (
          <button
            key={tagName}
            className={`${
              tag === tagName
                ? 'text-white border-[#00adb5]'
                : 'text-[#adb7be] border-slate-600 hover:border-white'
            } rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => setTag(tagName)}
          >
            {tagName}
          </button>
        ))}
      </div>

      <ul ref = {ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li key={index} 
          variants={cardVariants} 
          initial='initial' 
          animate={isInview ? 'animate' : 'initial'} 
          transition={{duration: 0.3, delay: index * 0.4}}
          >

            <div className='relative group'>
              <div
                className='h-52 md:h-72 rounded-t-xl'
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
              <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full
                bg-opacity-0 hidden group-hover:flex group-hover:opacity-90 group-hover:bg-[#181818] transition-all duration-500'>
                <Link
                  href={project.gitUrl}
                  className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link flex items-center justify-center'>
                  <CodeBracketIcon className='h-8 w-8 text-[#adb7be] cursor-pointer group-hover/link:text-white' />
                </Link>
                <Link
                  href={project.previewUrl}
                  className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link flex items-center justify-center'>
                  <GlobeAltIcon className='h-8 w-8 text-[#adb7be] cursor-pointer group-hover/link:text-white' />
                </Link>
              </div>
            </div>

            <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
              <h5 className='text-xl font-semibold mb-2'>{project.title}</h5>
              <p className='text-[#adb7be]'>{project.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Projects