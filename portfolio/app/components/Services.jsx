"use client"
import React from 'react';
import Image from 'next/image'
import {motion} from "framer-motion";

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using React.js and Next.js.',
    icon: '/web.png',
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile apps using React Native and Flutter.',
    icon: '/mob.png',
  },
  {
    id: 3,
    title: 'Python',
    description: 'Developing automation scripts, data analysis tools, and backend solutions using Python.',
    icon: '/python.png',
  },
]

const Services = () => {
  return (
    <section id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <div className='text-center mb-12'>
        <h2 className='text-5xl font-bold'>My Services</h2>
        <p className='max-w-2xl mx-auto mt-5 text-gray-400'>
          I provide high-quality development and design solutions, ensuring
          seamless experiences across web platforms.
        </p>
      </div>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6'>
        {SERVICES_DATA.map(({ id, title, description, icon }) => (
            <motion.div
            initial={{ opacity:0 }}
            whileInView={{opacity:1}}
            transition={{duration: 0.6, delay: id * 0.3}}
             key={id} 
             className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-3 transition duration-500'>
            <div className='bg-[#1f1f1f] rounded-lg w-14 h-14 flex items-center justify-center'>
              <Image src={icon} alt={title} width={40} height={40} />
            </div>
            <h3 className='text-lg my-4 text-white font-semibold'>{title}</h3>
            <p className='text-sm text-gray-400 leading-5'>{description}</p>
            <a href="" className='flex items-center gap-2 text-sm mt-5 text-white'>
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services