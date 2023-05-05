import Image from 'next/image'
import Link from 'next/link'

export default function Home({ params }) {
    const category = params.id.toUpperCase()
  return (
    <div className='w-full max-w-screen-xl h-screen pt-28'>
      <p className='mt-4 ml-8 mb-2 sm:ml-12 sm:mb-6'>Home</p>
      <b className=' text-center text-3xl block'>{category}</b>
    </div>
    
  )
}
