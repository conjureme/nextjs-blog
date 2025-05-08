'use client';

import React from 'react';
import ThemeToggle from './ToggleTheme';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Image from 'next/image';

export default function Navbar() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
  ];

  const pathname = usePathname();

  return (
    <div className='sticky top-0 z-50 flex justify-center bg-base-100/50 shadow-xs backdrop-blur-sm font-[montserrat]'>
      <div className='navbar w-full max-w-6xl justify-center items-center py-2 md:px-0 px-5'>
        {/* smaller screens */}
        <div className='navbar-start'>
          <div className='dropdown'>
            <button
              aria-label='button'
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                ></path>
              </svg>
            </button>
            <ul className='menu dropdown-content menu-md z-1 mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 shadow-sm'>
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='relative h-12 w-12'>
            <Link href='/'>
              <Image
                src='/polar.png'
                alt='silly guy'
                className='w-full h-full'
                fill
              />
            </Link>
          </div>
        </div>
        {/* large screens */}
        <div className='navbar-center hidden lg:flex'>
          {navigation.map((item, index) => (
            <nav key={index} className='menu menu-horizontal'>
              <Link
                href={item.href}
                className={`hover:text-primary hover:bg-primary/10 transition flex py-2 px-4 rounded-md ${
                  pathname === item.href ? 'text-primary bg-primary/10' : ''
                }`}
              >
                {item.name}
              </Link>
            </nav>
          ))}
        </div>
        <div className='navbar-end'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
