import CatergoryBoxes from './components/CatergoryBoxes'
import Features from './components/Features'
import Trending from './components/Trending'
import Footer from './components/Footer'

export default function Home() {

  return (
    <div className='w-full h-full pt-28 bg-white'>
      <div className='max-w-screen-xl m-auto'>
        <CatergoryBoxes />
        <Trending />
        <Features />
      </div>
    </div>
  )
}
