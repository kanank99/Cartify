'use client'

import Image from 'next/image'
import CatergoryBoxes from './components/CatergoryBoxes'
import Header from './components/Header'
import { useState } from 'react'

export default function Home() {

const [cartCount, setCartCount] = useState(0)

  return (
    <>
      <Header cartCount={cartCount} setCartCount={setCartCount}/>
      <div className='w-full max-w-screen-xl h-screen pt-28 bg-white'>
        <CatergoryBoxes />
      </div>
    </>
    
    
  )
}
