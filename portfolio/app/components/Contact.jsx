'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import linkedin from '../../public/linkedinIcon.png'
import github from '../../public/githubIcon.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    setLoading(true)

    emailjs.send(
      'service_2rx3bgb',
      'template_cynhryv',
      {
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'KW7_PSLk8ddGlzUbT'
    ).then(() => {
      setEmailSubmitted(true)
      setLoading(false)
    }).catch((err) => {
      console.error('EmailJS error:', err)
      setError(true)
      setLoading(false)
    })
  }

  return (
    <section id='contact' className='container mx-auto px-6 md:px-12 lg:px-24 py-24'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Let's Connect
          </h2>
          <p className='text-[#adb7be] text-lg mb-6 leading-relaxed'>
            I'm always excited to connect, share ideas and collaborate on innovative projects.
            Let's work together to create something impactful and inspiring!
          </p>
          <div className='flex gap-4'>
            <Link href='https://github.com/uthpalawanna'>
              <Image
                src={github}
                alt='github icon'
                width={40}
                height={40}
                className='hover:scale-110 transition-transform duration-300 cursor-pointer'
              />
            </Link>
            <Link href='https://www.linkedin.com/in/uthpalawanna-moratuwagama-497a652a9/'>
              <Image
                src={linkedin}
                alt='linkedin icon'
                width={40}
                height={40}
                className='hover:scale-110 transition-transform duration-300 cursor-pointer'
              />
            </Link>
          </div>
        </div>

        <div className='bg-[#1a1a1a] p-8 rounded-xl shadow-lg'>
          {emailSubmitted ? (
            <div className='text-center py-12'>
              <p className='text-[#00adb5] text-2xl font-semibold mb-2'>Message Sent!</p>
              <p className='text-[#adb7be]'>Thank you! I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
              <div>
                <label htmlFor="email" className='block text-white font-medium mb-2'>
                  Your Email
                </label>
                <input
                  id="email"
                  type='email'
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='YourEmail@Email.com'
                  autoComplete='off'
                  className='w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] 
                  text-white placeholder-[#9ca2a9] focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-300'
                />
              </div>

              <div>
                <label htmlFor="subject" className='block text-white font-medium mb-2'>
                  Subject
                </label>
                <input
                  id="subject"
                  type='text'
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Subject'
                  autoComplete='off'
                  className='w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] 
                  text-white placeholder-[#9ca2a9] focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-300'
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-white font-medium mb-2'>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let's talk about..."
                  autoComplete='off'
                  className='w-full p-3 rounded-lg bg-[#1f1f1f] border border-[#33353f] h-32 resize-none
                  text-white placeholder-[#9ca2a9] focus:ring-2 focus:ring-[#00adb5] focus:outline-none transition-all duration-300'
                />
              </div>

              {error && (
                <p className='text-red-500 text-sm'>Something went wrong. Please try again.</p>
              )}

              <button
                type='submit'
                disabled={loading}
                className='w-full bg-[#00adb5] hover:bg-[#008188] 
                text-white font-medium py-3 rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-60'>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact