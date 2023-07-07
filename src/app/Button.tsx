'use client';

import React from 'react';

function Button() {
  return (
    <button
      className='text-white bg-black rounded-full text-sm py-4 w-full'
      onClick={() =>
        window.open(
          'https://www.etsy.com/au/shop/DragonwoodDesignsAU',
          '_blank'
        )
      }
    >
      ETSY STORE
    </button>
  );
}

export default Button;
