import Quantity from "@/app/components/Quantity"

export default async function Home({ params }) {
  async function getProduct() {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    return await res.json()
  }
  const product = await getProduct()

  return (
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
                <Quantity price={product.price} />
                <div className="flex flex-col justify-center gap-4 text-center">
                    <div className="border border-black p-4 bg-white font-bold">ADD TO CART</div>
                    <div className="border border-black p-4 bg-black text-[#f4bc88] text-center font-bold">BUY NOW</div>
                </div>
            </div>
        </div>
      {/* hello {product.id} {product.price} */}
    </div>

  )
}
