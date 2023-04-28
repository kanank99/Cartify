import React from 'react' 


function Header() {
  return (
    <div className='bg-gradient-to-r from-[#18122B] to-[#393053] flex justify-between items-center h-24 pl-5 pr-5'>
        <div><img src='/images/dropdown-icon.png' alt='Dropdown-Icon' width='30' height='30' /></div>
        <div className='flex items-center gap-2 font-Sanchez tracking-wide'> <div>COSMIC </div> <img src="/images/logo.png" alt="cosmic" className=' w-7 h-7' /> <div> CORNER</div></div>
        <div><img src='/images/cart-icon.png' alt='Cart-Icon' width='30' height='30' /></div>
    </div>
  )
}
 
export default Header