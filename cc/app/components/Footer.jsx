import React from 'react'

function Footer() {
  return (
    <div className='relative bg-gradient-to-b from-[#181919] to-slate-900 h-72 w-full mt-36'>
        <div className='absolute -top-1/4  left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 h-2/3 sm:h-1/2 border-2 border-orange-400 bg-orange-100 shadow-md shadow-orange-400 sm:rounded-3xl sm:p-6'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-xl sm:text-4xl font-bold sm:font-light text-center text-[#181919]'>Get access to exclusive updates</h1>
                <div className='flex justify-center gap-3 mt-4 w-full'>
                    <input type="text" placeholder='jane.smith@example.com' className='border-2 border-[#181919] rounded w-3/4 sm:w-96 h-12 p-2'/>
                    <div className='bg-[#181919] rounded p-3 h-12 w-12'><img src="/images/paper-airplain-white.png" alt="send" width='20' height='20'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer