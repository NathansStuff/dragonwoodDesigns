import Socials from '@/components/Socials';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='w-full bg-black/90 text-white text-center p-10'>
      <Socials />
      <p className='py-4 text-xs font-normal text-gray-300'>
        Copyright © 2023 Dragonwood Designs - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
