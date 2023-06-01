import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='relative flex flex-col bg-gradient-to-b from-[#181919] to-slate-900 h-72 w-full mt-36'>
        <div className='absolute -top-1/4  left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 h-2/3 sm:h-1/2 max-w-[1000px] border-2 border-orange-400 bg-orange-100 shadow-xl shadow-black sm:rounded-3xl sm:p-6'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-xl sm:text-4xl font-bold sm:font-light text-center text-[#181919]'>Get access to exclusive updates</h1>
                <div className='flex justify-center gap-3 mt-4 w-full'>
                    <input type="text" placeholder='jane.smith@example.com' className='border-2 border-[#181919] rounded w-3/4 sm:w-96 h-12 p-2'/>
                    <div className='bg-[#181919] rounded flex justify-center items-center h-12 w-12 hover:cursor-pointer hover:bg-slate-800 transition duration-200 ease-in-out transform'><Image src="/images/paper-airplain-white.png" alt="send" width='22' height='22'/></div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center mt-28 sm:mt-16 h-full gap-8 sm:gap-32 md:gap-52'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className=' text-slate-200 text-xs sm:text-lg font-light self-start hover:cursor-pointer'>About</p>
                <p className='text-slate-200 text-xs sm:text-lg font-light self-start hover:cursor-pointer'>Store Locator</p>
                <p className=' text-slate-200 text-xs sm:text-lg font-light self-start hover:cursor-pointer'>FAQs</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-slate-200 text-xs sm:text-lg font-light self-start hover:cursor-pointer'>News</p>
                <p className='text-slate-200 text-xs sm:text-lg font-light self-start hover:cursor-pointer'>Careers</p>
                <p className='text-slate-200 text-xs sm:text-lg font-light self-start hover:cursor-pointer'>Contact Us</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-slate-200 text-xs sm:text-lg font-light self-start hover:cursor-pointer'>Privacy Policy</p>
                <p className='text-slate-200 text-xs sm:text-lg font-light self-start hover:cursor-pointer'>Terms & Conditions</p>
                <div className='flex gap-3 self-start'>
                    <Image src="/images/facebook-icon.svg" alt="facebook" width={20} height={20} className='hover:cursor-pointer md:h-7 md:w-7'/>
                    <Image src="/images/instagram-icon.svg" alt="instagram" width={20} height={20} className='hover:cursor-pointer md:h-7 md:w-7'/>
                    <Image src="/images/twitter-icon.svg" alt="twitter" width={20} height={20} className='hover:cursor-pointer md:h-7 md:w-7'/>
                    <Image src='/images/linkedin-icon.svg' alt='linkedin' width={20} height={20} className='hover:cursor-pointer md:h-7 md:w-7'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer