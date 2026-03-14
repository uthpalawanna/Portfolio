'use client'
import React from 'react'
import Image from 'next/image'
import profile from '../../public/hero.png'

const Hero = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto mt-32 flex flex-col items-center justify-center gap-4'>
      <div className='rounded-full bg-[#1f1f1f] w-[200px] h-[200px] relative'>
        <Image
          src={profile}
          alt='profile image'
          className='rounded-full w-48 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        />
      </div>
    </div>
  );
};

export default Hero;