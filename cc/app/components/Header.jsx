'use client'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useCartContext } from '../context/CartContext'
import { loadStripe } from "@stripe/stripe-js"
import Image from 'next/image'
import { usePathname } from 'next/navigation';


function Header() {

  const { cartCount, setCartCount } = useCartContext();
  const [showCart, setShowCart] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { cartItems, setCartItems } = useCartContext();
  const { subtotal, setSubtotal } = useCartContext();
  const { lastProductVisited } = useCartContext();

  const pathname = usePathname();

  console.log(pathname)

  const underline = 'hidden md:block font-medium text-xl underline decoration-orange-400 decoration-4 underline-offset-4'
  const noUnderline = 'hidden md:block font-medium text-xl'
  const menuUnderline = 'font-medium text-2xl underline decoration-orange-400 decoration-4 underline-offset-4'
  const menuNoUnderline = 'font-medium text-2xl'

  const removeFromCart = (index) => {
    setCartCount(cartCount - cartItems[index].quantity)
    setSubtotal(Number(subtotal) - Number(cartItems[index].price * cartItems[index].quantity).toFixed(2))
    cartItems.splice(index, 1)
    if (cartItems.length === 0) {
      setShowCart(false)
      setSubtotal(0)
    }
    setCartItems([...cartItems])
  }

  const addAnother = (index) => {
    cartItems[index].quantity += 1
    setCartCount(cartCount + 1)
    setSubtotal((Number(subtotal) + Number(cartItems[index].price)).toFixed(2))
    setCartItems([...cartItems])
  }

  const removeOne = (index) => {
    cartItems[index].quantity -= 1
    setCartCount(cartCount - 1)
    setSubtotal((Number(subtotal) - Number(cartItems[index].price)).toFixed(2))
    setCartItems([...cartItems])
    if (cartItems[index].quantity === 0) {
      removeFromCart(index)
    }
  }

  // Stripe

  let stripePromise

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    }
    return stripePromise
  }


  const item = cartItems.map((item) => {
    return { price: item.productCode, quantity: item.quantity }
  })

  const goToSuccess = async () => {
    router.push({
      pathname: '/success',
    })
  }

  const goToCancel = async () => {
    router.push({
      pathname: '/cancel',
    })
  }


  const checkoutOptions = {
    lineItems: item,
    mode: 'payment',
    // successUrl: `${window.location.origin}/success`,
    // cancelUrl: `${window.location.origin}/cancel`,
    successUrl: goToSuccess,
    cancelUrl: goToCancel,
  }

  const redirectToCheckout = async () => {
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout(checkoutOptions)
    if (error) {
      console.warn('Error:', error)
    }

  }

  return (
    <>
      <div className='bg-white h-28 pl-8 pr-8 w-full flex justify-center shadow-[0_15px_10px_-15px_#111;] fixed z-20'>
        <div className='max-w-screen-xl flex justify-between items-center w-full sm:pl-12 sm:pr-12'>
          <Link href={`/`}>
            <div className='flex gap-3 items-center'>
              <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/277670709_427065322767075_1474479713388510210_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aByX6giuzOYAX9mzoVp&_nc_ht=scontent-atl3-1.xx&oh=00_AfCe8DDluZ7yJ9wAHCH_m615QM2DlsP0ZWYKNFrHdPNFNQ&oe=65459C64" className=' h-12 w-12' alt="Logo" />
              <p className='font-sanchez font-bold text-[#e78200] text-xl sm:text-2xl'>CARTIFY</p>
            </div>
          </Link>
          <div className='flex gap-7 items-center'>
            <Link className={pathname == '/' ? underline : noUnderline} href={{ pathname: `/`, }}>HOME</Link>
            <Link className={pathname.includes('categories') ? underline : noUnderline} href={{ pathname: `/categories/all`, }}>CATEGORIES</Link>
            <Link className={pathname.includes('product') ? underline : noUnderline} href={`/product/${lastProductVisited}`}>PRODUCT PAGE</Link>
            <Image className='md:hidden' onClick={() => setShowMenu(!showMenu)} src='/images/dropdown-icon.png' alt='Dropdown-Icon' width='30' height='30' />
            <div className='relative' onClick={() => setShowCart(!showCart)}>
              <Image src='/images/cartIcon.png' alt='Cart-Icon' width='30' height='30' />
              {cartCount > 0 ?
                <div className='absolute bottom-5 left-5 h-4 w-4 rounded-full bg-orange-500 flex items-center justify-center'>
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <p className='text-white text-xs text-center font-light'>{cartCount}</p>
                </div>
                : null}
            </div>

          </div>
        </div>
      </div>
      {showMenu ?
        <div className='fixed top-0 left-0 w-full h-screen bg-white z-20' onClick={() => setShowMenu(!showMenu)}>
          <button className='absolute top-7 right-10' onClick={() => setShowCart(!showMenu)}><Image src='/images/closeIcon-light.png' alt='close-cart' width='50' height='50' /></button>
          <div className='flex flex-col h-full gap-16 items-center justify-center p-4'>
            <Link className={pathname == '/' ? menuUnderline : menuNoUnderline} href={{ pathname: `/`, }}>HOME</Link>
            <Link className={pathname.includes('categories') ? menuUnderline : menuNoUnderline} href={{ pathname: `/categories/all`, }}>CATEGORIES</Link>
            <Link className={pathname.includes('product') ? menuUnderline : menuNoUnderline} href={`/product/${lastProductVisited}`}>PRODUCT PAGE</Link>
            <div className='relative' onClick={() => setShowCart(!showCart)}>
              <Image src='/images/cartIcon.png' alt='Cart-Icon' width='30' height='30' />
              {cartCount > 0 ?
                <div className='absolute bottom-5 left-5 h-4 w-4 rounded-full bg-orange-500 flex items-center justify-center'>
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <p className='text-white text-xs text-center font-light'>{cartCount}</p>
                </div>
                : null}
            </div>
          </div>
        </div>
        : null}
      {showCart ?
        <>
          <div className='fixed top-0 left-0 w-full h-screen bg-black opacity-30 z-20' onClick={() => setShowCart(!showCart)}></div>
          <div className=' h-screen sm:w-2/3 lg:w-2/4 xl:w-1/3 w-full bg-white border border-l-black right-0 fixed z-50 p-5'>
            <div className='flex flex-col h-full justify-between'>
              <div className='flex justify-between'>
                <p className='sm:text-2xl'>You have {cartCount} items in your cart</p>
                <button onClick={() => setShowCart(!showCart)}><Image src='/images/closeIcon-light.png' alt='close-cart' width='30' height='30' /></button>
              </div>

              {cartCount > 0 ?
                <div className='flex flex-col gap-5 overflow-y-scroll pt-4 pb-4'>
                  {cartItems.map((item) => (
                    <div key={item.productCode} className='flex justify-between items-center gap-5 bg-[#f2f2f2] border border-black rounded'>
                      <div className='flex gap-5 items-center'>
                        <Image src={item.image} alt='cart-item' width='100' height='100' className='rounded border-r border-black' />
                        <div className='flex flex-col'>
                          <p className='font-sanchez font-medium text-[#e78200] text-base sm:text-xl'>{item.title}</p>
                          <p className='font-sanchez font-light text-sm sm:text-base'>${item.price}</p>
                        </div>
                      </div>
                      <div className='flex flex-col gap-3 p-4'>
                        <div className='flex gap-5 items-center'>
                          <button className='bg-[#e78200] text-white font-sanchez font-medium text-base sm:text-xl p-2 rounded h-6 flex justify-center items-center' onClick={() => removeOne(cartItems.indexOf(item))}>-</button>
                          <p className='font-sanchez font-medium text-base sm:text-xl'>{item.quantity}</p>
                          <button className='bg-[#e78200] text-white font-sanchez font-medium text-base sm:text-xl p-2 rounded h-6 flex justify-center items-center' onClick={() => addAnother(cartItems.indexOf(item))}>+</button>
                        </div>
                        <button className='text-[#e78200] font-sanchez font-medium text-base sm:text-xl' onClick={() => removeFromCart(cartItems.indexOf(item))}>Remove</button>
                      </div>

                    </div>
                  ))}
                </div>
                : <div className='flex flex-col gap-10 items-center'>
                  <p className='text-center text-2xl md:text-4xl md:font-light'>You have an empty cart!</p>
                  <Image src='/images/emptyCart1.png' alt='emptyCart-logo' width='250' height='250' className='mx-auto rounded-2xl' />
                  <Link href='/categories/all'><button className='bg-[#e78200] text-white font-sanchez font-medium text-base sm:text-xl p-2 rounded-lg sm:font-light tracking-wide' onClick={() => setShowCart(false)}>SHOP NOW</button></Link>
                </div>
              }

              <div className='h-24 border-t-4 border-t-black border-dotted p-4 flex justify-between items-center'>
                <div className='flex flex-col gap-2'>
                  <p className='font-sanchez font-medium text-[#e78200] text-base sm:text-xl'>Subtotal</p>
                  <p className='font-sanchez font-medium text-base sm:text-xl'>${subtotal}</p>
                </div>
                <button className='bg-[#e78200] text-white font-sanchez font-medium text-base sm:text-xl p-2 rounded-lg sm:font-light tracking-wide h-12' onClick={redirectToCheckout}>CHECKOUT</button>
              </div>
            </div>
          </div>

        </>
        : null}
    </>

  )
}

export default Header