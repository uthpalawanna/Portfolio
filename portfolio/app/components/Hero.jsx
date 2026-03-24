'use client'
import React from 'react'
import Image from 'next/image'
import profile from '../../public/hero.jpeg'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section id='hero'>
      <div className='w-11/12 max-w-3xl text-center mx-auto mt-32 flex flex-col items-center justify-center gap-4'>
        <div className='rounded-full bg-[#1f1f1f] w-[200px] h-[200px] relative'>
          <Image
            src={profile}
            alt='profile image'
            className='rounded-full w-48 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
          Hi I'm Uthpalawanna Moratuwagama
        </h3>
        <div className='text-3xl sm:text-6xl lg:text-[66px] font-bold'>
          <TypeAnimation
            sequence={[
              'Web Developer',
              1000,
              'Mobile Developer',
              1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className='text-gray-400 max-w-2xl mx-auto'>
          React Native, Next.js, Flutter, building responsive and user-friendly applications.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <a href='#contact' className='px-10 py-3 rounded-full border border-white bg-[#1f1f1f] text-white flex items-center gap-2'>
            Contact Me
          </a>
          
        <a 
          href='/resume.pdf' 
          target='_blank'
          download
          className='px-10 py-3 rounded-full border border-gray-500 text-gray-400 flex items-center gap-2'>
          My Resume
        </a>
        </div>
      </div>
    </section>
  )
}

export default Hero