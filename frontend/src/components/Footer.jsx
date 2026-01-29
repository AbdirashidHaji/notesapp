import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-slate-900 border-t border-slate-700 text-slate-300 mt-16'>
      <div className='max-w-6xl mx-auto px-8 py-12'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          {/* About */}
          <div>
            <h3 className='text-white font-semibold mb-4'>NotesApp</h3>
            <p className='text-slate-400 text-sm leading-relaxed'>
              A modern note-taking application built with the MERN stack for fast and reliable note management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link to='/' className='text-slate-400 hover:text-blue-400 transition'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/create' className='text-slate-400 hover:text-blue-400 transition'>
                  Create Note
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Features</h3>
            <ul className='space-y-2 text-sm'>
              <li className='text-slate-400'>✓ Create Notes</li>
              <li className='text-slate-400'>✓ Edit Notes</li>
              <li className='text-slate-400'>✓ Delete Notes</li>
              <li className='text-slate-400'>✓ Real-time Sync</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Connect</h3>
            <div className='flex gap-4'>
              <a
                href='#'
                className='text-slate-400 hover:text-blue-400 transition text-2xl'
                aria-label='GitHub'
              >
                💻
              </a>
              <a
                href='#'
                className='text-slate-400 hover:text-blue-400 transition text-2xl'
                aria-label='Twitter'
              >
                𝕏
              </a>
              <a
                href='#'
                className='text-slate-400 hover:text-blue-400 transition text-2xl'
                aria-label='LinkedIn'
              >
                🔗
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-slate-700 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-slate-400 text-sm'>
              &copy; {currentYear} NotesApp. All rights reserved.
            </p>
            <div className='flex gap-6 mt-4 md:mt-0 text-sm'>
              <a href='#' className='text-slate-400 hover:text-blue-400 transition'>
                Privacy Policy
              </a>
              <a href='#' className='text-slate-400 hover:text-blue-400 transition'>
                Terms of Service
              </a>
              <a href='#' className='text-slate-400 hover:text-blue-400 transition'>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer