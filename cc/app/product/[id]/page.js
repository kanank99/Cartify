'use client'

import Header from "@/app/components/Header"
import Quantity from "@/app/components/Quantity"


export default async function Home({ params }) {
  async function getProduct() {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    return await res.json()
  }
  const product = await getProduct()

  let itemParam;

  if (params.id === '1') {
    itemParam = {
      price: 'price_1N6H96LVw56XMgIANSSpWS1Y',
    }
  } else if (params.id === '2') {
    itemParam = {
      price: 'price_1N6HAVLVw56XMgIAKRZsmEA4',
    }
  } else if (params.id === '3') {
    itemParam = {
      price: 'price_1N6HBOLVw56XMgIAtvQWqaNF',
    }
  } else if (params.id === '4') {
    itemParam = {
      price: 'price_1N6HCFLVw56XMgIAiWlJqvvl',
    }
  } else if (params.id === '5') {
    itemParam = {
      price: 'price_1N6HDGLVw56XMgIAC9FcSvqH',
    }
  } else if (params.id === '6') {
    itemParam = {
      price: 'price_1N6HE6LVw56XMgIAyA6JWoq3',
    }
  } else if (params.id === '7') {
    itemParam = {
      price: 'price_1N6HFILVw56XMgIAcJBIKjMZ',
    }
  } else if (params.id === '8') {
    itemParam = {
      price: 'price_1N6HGNLVw56XMgIAUYBVVfhZ',
    }
  } else if (params.id === '9') {
    itemParam = {
      price: 'price_1N6HHALVw56XMgIAz59l0iD0',
    }
  } else if (params.id === '10') {
    itemParam = {
      price: 'price_1N6HI0LVw56XMgIAbovVm0mo',
    }
  } else if (params.id === '11') {
    itemParam = {
      price: 'price_1N6HIwLVw56XMgIAGipbhgow',
    }
  } else if (params.id === '12') {
    itemParam = {
      price: 'price_1N6HJkLVw56XMgIAKFNQJfmn',
    }
  } else if (params.id === '13') {
    itemParam = {
      price: 'price_1N6HKiLVw56XMgIAi33zq0xW',
    }
  } else if (params.id === '14') {
    itemParam = {
      price: 'price_1N6HLaLVw56XMgIAeIdMPYAU',
    }
  } else if (params.id === '15') {
    itemParam = {
      price: 'price_1N6HMNLVw56XMgIAtnH9D6Jv',
    }
  } else if (params.id === '16') {
    itemParam = {
      price: 'price_1N6HNVLVw56XMgIA16mL8WSB',
    }
  } else if (params.id === '17') {
    itemParam = {
      price: 'price_1N6HOXLVw56XMgIAxKj4H3uF',
    }
  } else if (params.id === '18') {
    itemParam = {
      price: 'price_1N6HPwLVw56XMgIA5ZKnODRq',
    }
  } else if (params.id === '19') {
    itemParam = {
      price: 'price_1N6HQwLVw56XMgIA8WM8z1TP',
    }
  } else if (params.id === '20') {
    itemParam = {
      price: 'price_1N6HRpLVw56XMgIA2LllZ1EK',
    }
  } 







  return (
    <>
      <Header />
      <div className='w-full max-w-screen-xl pt-28 flex flex-col h-screen mt-8'>
          <div className="flex flex-col items-center sm:flex-row w-full gap-8">
              <h1 className="sm:hidden text-center text-2xl font-extrabold pl-4 pr-4">{product.title}</h1>
              <div className="flex flex-1 justify-center">
                  <img className=" w-2/3" src={product.image} />
              </div>
              <div className="flex flex-1 flex-col justify-around gap-4 m-4 p-4 bg-[#e782008a]">
                  <h2 className="hidden sm:block sm:font-extrabold sm:text-center sm:text-2xl">{product.title}</h2>
                  <p className="font-light">{product.description}</p>
                  <div className="flex justify-around">
                      <div className="flex flex-col items-center w-1/3 gap-2"><h1>Reviews</h1> <b className="bg-black text-[#f4bc88] w-2/3 text-center pl-2 pr-2 pt-1 pb-1">{product.rating.count}</b></div>
                      <div className="flex flex-col items-center w-1/3 gap-2"><h1>Rating</h1> <b className="bg-black text-[#f4bc88] w-2/3 text-center pl-2 pr-2 pt-1 pb-1">{product.rating.rate}</b></div>
                  </div>
                  <Quantity price={product.price} productId={params.id} productCode={itemParam.price} />

              </div>
          </div>
        {/* hello {product.id} {product.price} */}
      </div>    
    </>


  )
}
