import React from 'react'
import Link from 'next/link'

function CatergoryBoxes() {
  return (
    <div className='mt-4 ml-4 mr-4 flex flex-col gap-3 sm:flex-row' >
        <div className='flex gap-3 sm:w-full sm:pl-8'>
            <Link href='/categories/electronics' className='relative h-64 bg-[url("/images/electronics.png")] bg-cover w-full sm:h-96 border-2 hover:border-black'>
                <div className='bg-black opacity-30 hover:opacity-5 w-full h-full'></div>
                <p className='absolute bottom-3 left-3 text-white text-2xl md:text-4xl brightness-150'>Electronics</p>
            </Link>
            <Link href='/categories/jewelery' className='relative h-64 bg-[url("/images/jewelery.png")] bg-cover w-full sm:h-96 sm:w-2/3 border-2 hover:border-black'>
              <div className='bg-black opacity-30 hover:opacity-5 w-full h-full'></div>
              <p className='absolute bottom-2 left-2 text-white text-2xl md:text-4xl brightness-150'>Jewelery</p>
            </Link>
        </div>
        <div className='flex gap-3 sm:flex-col sm:w-4/12 sm:pr-8'>
            <Link href={`/categories/men's clothing`} className='relative h-64 bg-[url("/images/mensclothing.png")] bg-cover w-full sm:h-1/2 border-2 hover:border-black'>
              <div className='bg-black opacity-30 hover:opacity-5 w-full h-full'></div>
              <p className='absolute bottom-2 left-2 text-white text-2xl md:text-4xl z-10'>Men's</p>
            </Link>
            <Link href={`/categories/women's clothing`} className='relative h-64 bg-[url("/images/womensclothing.png")] bg-cover w-full sm:h-1/2 border-2 hover:border-black'>
              <div className='bg-black opacity-30 hover:opacity-5 w-full h-full'></div>
              <p className='absolute bottom-2 left-2 text-white text-2xl md:text-4xl brightness-150'>Women's</p>
            </Link>
        </div>
    </div>
  )
}

export default CatergoryBoxes