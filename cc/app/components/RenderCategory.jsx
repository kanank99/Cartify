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
    <div>
        {categoryProducts.map((product) => (
            <div key={product.id} className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:items-start sm:gap-3 sm:pl-8 sm:pr-8'>
                <p className='text-2xl font-medium'>{product.title}</p>
                <p className='text-xl font-medium'>${product.price}</p>
            </div>
        ))}
    </div>
        
  )
}

export default RenderCategory