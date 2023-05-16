'use client'

import React from 'react' 
import Link from 'next/link'
import { useCartContext } from '../context/CartContext'


function Header() {

  const {cartCount, setCartCount} = useCartContext();

  return (
    <div className='bg-white h-28 pl-8 pr-8 w-full flex justify-center shadow-[0_15px_10px_-15px_#111;] fixed z-50'>
      <div className='max-w-screen-xl flex justify-between items-center w-full sm:pl-12 sm:pr-12'>
        <Link href={`/`}>
          <div className='flex gap-3 items-center'>
            <img src="/images/cartifyCartLogo.png" alt="Logo" width='30' height='30'/>
            <p className='font-sanchez font-medium text-[#e78200] text-base sm:text-xl'>Cartify</p>
          </div>
        </Link>
        <div className='flex gap-7 items-center'>
            <Link className='hidden sm:block font-medium' href={{pathname: `/categories/all`,}}>CATEGORIES</Link>
            <a className='hidden sm:block font-medium' href="/">PRODUCT PAGE</a>
            <img className='sm:hidden' src='/images/dropdown-icon.png' alt='Dropdown-Icon' width='30' height='30' />
            <div className='relative'>
              <img src='/images/cartIcon.png' alt='Cart-Icon' width='30' height='30'/>
              <div className='absolute bottom-5 left-5 h-4 w-4 rounded-full bg-orange-500 flex items-center justify-center'>
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <p className='text-white text-xs text-center font-light'>{cartCount}</p>
              </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}
 
export default Header