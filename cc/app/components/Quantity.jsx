'use client'
import React from 'react'
import { useState } from 'react'

function Quantity(props) {
  const [quantity, setQuantity] = useState(1)
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

  return (
    <div className="w-full flex flex-col items-center gap-4">
        <b className="text-xl">QUANTITY</b>
        <div className="flex justify-around border border-black w-2/4">
            <p className="text-2xl border-r border-black w-full text-center bg-white flex items-center justify-center" onClick={decrementQuantity}>-</p>
            <b className="text-center w-full flex items-center justify-center bg-black text-[#f4bc88]"> {quantity} </b>
            <p className="text-2xl border-l border-black w-full text-center bg-white flex items-center justify-center" onClick={incrementQuantity}>+</p>
        </div>
        <div className="text-xl">$ <b className="">{(props.price * quantity).toFixed(2)}</b></div>
    </div>
  )
}

export default Quantity