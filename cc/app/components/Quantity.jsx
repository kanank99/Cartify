'use client'
import React from 'react'
import { useState } from 'react'
import { loadStripe } from "@stripe/stripe-js"
import { useCartContext } from '../context/CartContext'

function Quantity(props) {
  const [quantity, setQuantity] = useState(1)
  const {cartCount, setCartCount} = useCartContext();
  const {cartItems, setCartItems} = useCartContext();
  const {subtotal, setSubtotal} = useCartContext();
  const {lastProductVisited, setLastProductVisited} = useCartContext();
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    
    const addToCart = () => {
        if (cartItems.some(item => item.title === props.title)) {
            let index = cartItems.findIndex(item => item.title === props.title)
            cartItems[index].quantity += quantity
            setCartCount(cartCount + quantity)
            setSubtotal((Number(subtotal) + Number(props.price * quantity)).toFixed(2))
            setCartItems([...cartItems])
            return
        }
        setCartCount(cartCount + quantity)
        setCartItems([...cartItems, {title: props.title, price: props.price, image: props.image, quantity: quantity, productCode: props.productCode}])
        setSubtotal((Number(subtotal) + Number(props.price * quantity)).toFixed(2))



        
        
    }

    // Stripe

    let stripePromise

    const getStripe = () => {
      if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
      }
      return stripePromise
    }
  
  
    const item = {
      price: props.productCode,
      quantity: quantity,
    }
  
    const checkoutOptions = {
      lineItems: [item],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    }
  
    const redirectToCheckout = async () => {
      const stripe = await getStripe()
      const { error } = await stripe.redirectToCheckout(checkoutOptions)
      if (error) {
        console.warn('Error:', error)
      }
    }

    if (lastProductVisited !== props.productId) {
        setLastProductVisited(props.productId)
      }

  return (
    <>
        <div className="w-full flex flex-col items-center gap-4">
            <b className="text-xl">QUANTITY</b>
            <div className="flex justify-around border border-black w-2/4">
                <p className="text-2xl border-r border-black w-full text-center bg-white flex items-center justify-center" onClick={decrementQuantity}>-</p>
                <b className="text-center w-full flex items-center justify-center bg-black text-[#f4bc88]"> {quantity} </b>
                <p className="text-2xl border-l border-black w-full text-center bg-white flex items-center justify-center" onClick={incrementQuantity}>+</p>
            </div>
            <div className="text-xl">$ <b className="">{(props.price * quantity).toFixed(2)}</b></div>
        </div>
        <div className="flex flex-col justify-center gap-4 text-center">
            <div className="border border-black p-4 bg-white font-bold" onClick={addToCart}>ADD TO CART</div>
            <div className="border border-black p-4 bg-black text-[#f4bc88] text-center font-bold" onClick={redirectToCheckout}>BUY NOW</div>
        </div>
    </>

  )
}

export default Quantity