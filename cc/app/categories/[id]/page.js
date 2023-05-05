import RenderCategory from '@/app/components/renderCategory'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({ params }) {
    const category = params.id.toUpperCase()
  return (
    <div className='w-full max-w-screen-xl h-screen pt-28 flex flex-col'>
      <Link href={`/`}>
        <p className='mt-4 ml-8 mb-2 sm:ml-12 sm:mb-6'>Home</p>
      </Link>
      <b className=' text-center text-3xl block'>{category}</b>
      <div className='mt-6 flex flex-wrap items-center justify-center gap-4'>
        <Link href={`/categories/all`}>
            <div className='border border-amber-600 hover:bg-[#e78200d1] rounded pl-4 pr-4 pt-1 pb-1'>All</div>
        </Link>
        <Link href={`/categories/electronics`}>
            <div className='border border-amber-600 hover:bg-[#e78200d1] rounded pl-4 pr-4 pt-1 pb-1'>Electronics</div>
        </Link>
        <Link href={`/categories/jewelery`}>
            <div className='border border-amber-600 hover:bg-[#e78200d1] rounded pl-4 pr-4 pt-1 pb-1'>Jewelery</div>
        </Link>
        <Link href={`/categories/men's clothing`}>
            <div className='border border-amber-600 hover:bg-[#e78200d1] rounded pl-4 pr-4 pt-1 pb-1'>Men's</div>
        </Link>
        <Link href={`/categories/women's clothing`}>
            <div className='border border-amber-600 hover:bg-[#e78200d1] rounded pl-4 pr-4 pt-1 pb-1'>Women's</div>
        </Link>
      </div>
      <RenderCategory id={params.id}/>
    </div>
    
  )
}
