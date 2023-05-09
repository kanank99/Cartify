import React from 'react' 
import Link from 'next/link'


function Header() {
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
            <Link className='hidden sm:block font-medium' href={`/categories/all`}>CATEGORIES</Link>
            <a className='hidden sm:block font-medium' href="/">PRODUCT PAGE</a>
            <img className='sm:hidden' src='/images/dropdown-icon.png' alt='Dropdown-Icon' width='30' height='30' />
            <img className='hidden sm:block' src='/images/cart-icon.png' alt='Cart-Icon' width='30' height='30'/>
        </div>
      </div>
    </div>
  )
}
 
export default Header