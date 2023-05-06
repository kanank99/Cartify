// "use client"

import React from 'react'
import Link from 'next/link'

async function RenderCategory(props) {
  async function getCategoryProducts() {
    const res = await fetch(`https://fakestoreapi.com/products/category/${props.id}`)
    return await res.json()
  }
  const categoryProducts = await getCategoryProducts()
  //   console.log(categoryProducts)
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-8">
      {categoryProducts.map((product) => (
        <div key={product.id} className='flex flex-col place-content-between items-center gap-3 p-4 bg-white rounded border-4 border-[#cbcbcb] hover:border-black w-80'>
          <div className="h-80 bg-white">
            <img className="w-full h-80 p-4" src={product.image} alt="product-img" />
          </div>
          <div className="self-start">
            <p className='text-2xl font-light text-sm bg-white'>{product.title}</p>
            <p className='text-xl font-medium bg-white'>${product.price}</p>
          </div>
        </div>
      ))}
    </div>

  )
}

export default RenderCategory