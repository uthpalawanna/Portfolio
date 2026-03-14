'use client'
import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50'>
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-[#1f1f1f] shadow-sm'>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className='ml-auto md:hidden'>
        <button>
            {navbarOpen ? <XMarkIcon/> : <Bars3Icon/>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar