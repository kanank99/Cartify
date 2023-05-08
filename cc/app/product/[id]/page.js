
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
                <h2 className="hidden sm:block">{product.title}</h2>
                <p className="font-light">{product.description}</p>
                <div className="w-full flex flex-col items-center gap-4">
                    <b className="text-xl">QUANTITY</b>
                    <div className="flex justify-around border border-black w-2/4">
                        <p className="text-xl border-r border-black w-full text-center bg-white flex items-center justify-center">-</p>
                        <input className="text-center w-full resize-none flex items-center justify-center" placeholder="0" type="number" />
                        <p className="text-xl border-l border-black w-full text-center bg-white flex items-center justify-center">+</p>
                    </div>
                    <div className="text-xl">$ <b className="">{product.price}</b></div>
                </div>
                <div className="flex flex-col justify-center gap-4 text-center">
                    <div className="border border-black p-4 bg-white font-bold">ADD TO CART</div>
                    <div className="border border-black p-4 text-center font-bold">BUY NOW</div>
                </div>
            </div>
        </div>
      {/* hello {product.id} {product.price} */}
    </div>

  )
}
