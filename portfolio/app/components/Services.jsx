import React from 'react'

const Services = () => {
  return <section id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
    <div className='text-center mb-12'>
        <h2 className='text-5xl font-bold'>My Services</h2>
        <p className='max-w-2xl mx-auto mt-5 text-gray-400'>
            I provide high-qulity development and design solutions,ensuring seamless experiences across web platforms.
        </p>
    </div>

    <div className='grid grid-cols-[repeat(auto-fit, minmax(200px,1fr))] gap-6'></div>
  </section>
};

export default Services;