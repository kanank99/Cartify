import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

async function Trending() {
  async function getAllProducts() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    return await res.json()
  }
  const allProducts = await getAllProducts()

    const trendingProducts = allProducts.filter((product) => {
        return product.rating.rate > 4
    })

  return (
    <div className='mt-6 flex flex-col items-center p-4'>
        <div className='flex justify-between items-center w-full max-w-[1185px] z-10'>
            <h1 className="text-3xl font-bold text-center">Trending Now</h1>
            <div className='flex gap-2 items-center'>
                <p className=' text-2xl'>Scroll</p>
                <div className=''>
                    <Image src="/images/scroll.png" alt="scroll-right" width='50' height='50' className='rotate-90'/>
                </div>
            </div>
        </div>
        

        <div className="flex gap-5 mt-4 w-full max-w-[1185px] overflow-scroll z-10">
            {trendingProducts.map((product) => (
                <div key={product.id}>
                    <Link href={`/product/${product.id}`}>
                        <div className='flex flex-col place-content-between items-center gap-3 p-4 bg-white rounded border-2 border-[#cbcbcb] transition duration-200 ease-in-out transform hover:border-[#e78200d1] w-72 h-full'>
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
    </div>


  )
}

export default Trending