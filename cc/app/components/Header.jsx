'use client'

import React from 'react' 
import { useState } from 'react'
import Link from 'next/link'
import { useCartContext } from '../context/CartContext'


function Header() {

  const {cartCount, setCartCount} = useCartContext();
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <div className='bg-white h-28 pl-8 pr-8 w-full flex justify-center shadow-[0_15px_10px_-15px_#111;] fixed z-10'>
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
              <div className='relative' onClick={() => setShowCart(!showCart)}>
                <img src='/images/cartIcon.png' alt='Cart-Icon' width='30' height='30'/>
                { cartCount > 0 ?
                <div className='absolute bottom-5 left-5 h-4 w-4 rounded-full bg-orange-500 flex items-center justify-center'>
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <p className='text-white text-xs text-center font-light'>{cartCount}</p>
                </div>
                : null}
              </div>
              
          </div>
        </div>
      </div>
      {showCart ?
      <>
      <div className='fixed top-0 left-0 w-full h-screen bg-black opacity-30 z-20' onClick={() => setShowCart(!showCart)}></div>
      <div className=' h-screen sm:w-2/3 md:w-1/3 w-full bg-white border border-l-black right-0 fixed z-50 p-5'>
        <div className='flex flex-col h-full justify-between'>
          <div className='flex justify-between'>
            <p>You have {cartCount} items in your cart</p>
            <button onClick={() => setShowCart(!showCart)}><img src='/images/closeIcon-light.png' alt='close-cart' width='30' height='30' /></button>
          </div>

          <div className='h-24 border-t-4 border-t-black border-dotted'>

          </div>
        </div>
      </div>
      
      </>
      : null}
    </>

  )
}
 
export default Header