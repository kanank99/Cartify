import RenderCategory from '@/app/components/renderCategory'
import RenderAll from '@/app/components/renderAll'
import CategoryFilter from '@/app/components/CategoryFilter'
import Link from 'next/link'
import Header from '@/app/components/Header'

export default function Home({ params }) {
  const category = params.id.toUpperCase()
  return (
    <>
      <Header />
      <div className='w-full max-w-screen-xl pt-28 flex flex-col h-full'>
        <Link href={`/`}>
          <p className='mt-4 ml-8 mb-2 sm:ml-12 sm:mb-6 font-light text-2xl'>Home</p>
        </Link>
        <b className=' text-center text-3xl block'>{category}</b>
        <CategoryFilter id={params.id} />
        {params.id === 'all' ? <RenderAll /> : <RenderCategory id={params.id} />}
      </div>
    </>
    

  )
}
