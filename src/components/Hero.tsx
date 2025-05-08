import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className='hero py-4 font-[montserrat]'>
      <div className='hero-content text-center flex flex-col'>
        <div className='badge badge-outline badge-lg'>hiya!</div>
        <h1 className='text-5xl font-bold text-primary mb-8'>next.js blog</h1>
        <div className='max-w-md'>
          <Image
            src='/polar.png'
            alt='silly guy'
            className='w-full'
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
