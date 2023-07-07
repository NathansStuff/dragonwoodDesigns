import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='w-full bg-black/90 text-white text-center p-10'>
      <div className='flex w-full justify-center space-x-4 pb-10'>
        <Link
          href='https://www.facebook.com/DragonwoodDesignsAU'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebook className='text-white h-8 w-8 cursor-pointer' />
        </Link>
        <Link
          href='https://www.instagram.com/dragonwooddesignsau/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram className='text-white h-8 w-8 cursor-pointer' />
        </Link>
      </div>
      <p className='py-4 text-xs font-normal text-gray-300'>
        Copyright © 2023 Dragonwood Designs - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
