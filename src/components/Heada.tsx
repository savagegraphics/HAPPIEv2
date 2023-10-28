'use client'

import React, { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0'>
      <nav
        className='max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8'
        aria-label='Global'
      >
        <div className='relative md:flex md:items-center md:justify-between'>
          <div className='flex items-center justify-between'>
            <a
              className='flex-none text-xl font-semibold dark:text-white'
              href='#'
              aria-label='Brand'
            >
              Dashboard
            </a>
            <div className='md:hidden'>
              <button
                type='button'
                className={`hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm ${
                  isMenuOpen
                    ? 'dark:bg-slate-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:focus:ring-offset-gray-800'
                    : 'dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
                }`}
                onClick={toggleMenu}
                aria-label='Toggle navigation'
              >
                {isMenuOpen ? (
                  <svg
                    className='w-4 h-4'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                  </svg>
                ) : (
                  <svg
                    className='w-4 h-4'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            id='navbar-collapse-with-animation'
            className={`hs-collapse ${
              isMenuOpen ? 'block' : 'hidden'
            } overflow-hidden transition-all duration-300 basis-full grow md:block`}
          >
            <div className='overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y'>
              <div className='flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700'>
                <a
                  className='font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500'
                  href='#'
                  aria-current='page'
                >
                  <div className='relative'>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                      <svg
                        className='w-5 h-5 text-gray-400'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <path
                          d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></path>
                      </svg>
                    </span>

                    <input
                      type='text'
                      className='w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 text-xs'
                      placeholder='Search Parcel'
                    />
                  </div>
                </a>

                <a
                  className='font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500'
                  href='#'
                  aria-current='page'
                >
                  <div className='flex'>
                    <div className=''>
                      {' '}
                      <h1 className='text-black text-md font-bold font-[Open Sans]'>
                        Tony Almeida
                      </h1>
                      <p className='text-neutral-400 text-[0.6rem] font-thin font-[Open Sans]'>
                        letgetit@gmail.com
                      </p>
                    </div>
                    <div className='m-2 mt-1'>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </div>
                    <div className=''>
                      <button
                        type='button'
                        className='relative rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                      >
                        <span className='absolute -inset-1.5' />
                        <span className='sr-only'>View notifications</span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='w-6 h-6 text-black'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
                {/* Add more menu items here */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
