import Image from 'next/image'
import CatergoryBoxes from './components/CatergoryBoxes'

export default function Home() {
  return (
    <div className='w-full max-w-screen-xl h-screen pt-28'>
      <CatergoryBoxes />
    </div>
    
  )
}
