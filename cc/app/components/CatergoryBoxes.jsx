import React from 'react'

function CatergoryBoxes() {
  return (
    <div className='mt-4 ml-4 mr-4 flex flex-col gap-3 sm:flex-row' >
        <div className='flex gap-3 sm:w-full sm:pl-8'>
            <div className='relative h-64 bg-[url("/images/electronics.jpg")] bg-cover brightness-75 w-full sm:h-96'>
                <p className='absolute bottom-2 left-2 text-white text-2xl brightness-150'>Electronics</p>
            </div>
            <div className='relative h-64 bg-[url("/images/jewelery.jpg")] bg-cover brightness-75 w-full sm:h-96 sm:w-2/3'>
            <p className='absolute bottom-2 left-2 text-white text-2xl brightness-150'>Jewelery</p>
            </div>
        </div>
        <div className='flex gap-3 sm:flex-col sm:w-4/12 sm:pr-8'> x
            <div className='relative h-64 bg-[url("/images/mensclothing.jpg")] bg-cover brightness-75 hover:brightness-100 w-full sm:h-1/2'>
            <p className='absolute bottom-2 left-2 text-white text-2xl z-10'>Men's</p>
            </div>
            <div className='relative h-64 bg-[url("/images/womensclothing.jpg")] bg-cover brightness-75 w-full sm:h-1/2'>
            <p className='absolute bottom-2 left-2 text-white text-2xl brightness-150'>Women's</p>
            </div>
        </div>
    </div>
  )
}

export default CatergoryBoxes