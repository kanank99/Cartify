import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

async function RenderAll(props) {
  async function getAllProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    return await res.json()
  }
  const allProducts = await getAllProducts()
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-8">
      {allProducts.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>
            <div className='flex flex-col place-content-between items-center gap-3 p-4 bg-white rounded border-2 border-[#cbcbcb] hover:border-[#e78200d1] w-80 h-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
              <div className="h-60 bg-white">
                <Image className="w-full h-full p-4" width='1000' height='1000' src={product.image} alt="product-image" />
              </div>
              <div className="self-start">
                <p className='font-light text-sm bg-white'>{product.title}</p>
                <p className='text-xl font-medium bg-white'>${product.price}</p>
              </div>
            </div>
          </Link>
        </div>
        
      ))}
    </div>

  )
}

export default RenderAll