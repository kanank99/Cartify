import React from 'react'

function CatergoryBoxes() {
  return (
    <div className='mt-4 ml-4 mr-4 flex flex-col gap-3' >
        <div className='flex gap-3'>
            <div className='h-64 bg-red-600 w-full'>a1</div>
            <div className='h-64 bg-red-800 w-full'>a2</div>
        </div>
        <div className='flex gap-3'>
            <div className='h-64 bg-blue-600 w-full'>b1</div>
            <div className='h-64 bg-blue-800 w-full'>b2</div>
        </div>
    </div>
  )
}

export default CatergoryBoxes