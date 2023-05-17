import RenderCategory from '@/app/components/renderCategory'
import RenderAll from '@/app/components/renderAll'
import CategoryFilter from '@/app/components/CategoryFilter'
import Link from 'next/link'

export default function Home({ params }) {
  const category = params.id.toUpperCase()
  return (
    <>
      <div className='w-full max-w-screen-xl pt-28 flex flex-col h-full'>
        <Link href={`/`}>
          <div className='mt-4 ml-8 mb-2 sm:ml-12 sm:mb-4 font-light text-2xl flex items-center gap-1'><img src="/images/backArrow.png" alt="go-back" width='20' height='20' className=' inline-block'/>Home</div>
        </Link>
        <b className=' text-center text-3xl block'>{category}</b>
        <CategoryFilter id={params.id} />
        {params.id === 'all' ? <RenderAll /> : <RenderCategory id={params.id} />}
      </div>
    </>
    

  )
}
