import React from 'react'

const PROJECT_DATA = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of your first project.',
    image: '/1.png',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of your second project.',
    image: '/2.jpg',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of your third project.',
    image: '/3.png',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

const Projects = () => {
  return (
    <section id="projects" className='container mt-10 mx-auto px-12 py-4'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>

      <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {PROJECT_DATA.map((project, index) => (
          <li key={index}>
            <div>
              <div
                className='h-52 md:h-72 rounded-t-xl relative group'
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
              <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full 
              bg-opacity-0 hidden group-hover:opacity-90 group-hover:bg-[#181818]transitio-all duration-500'>
                <Link href= {project.gitUrl} className='h-4 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group'></Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects