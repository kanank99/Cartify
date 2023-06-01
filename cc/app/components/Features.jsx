import Image from 'next/image'
import React from 'react'

function Features() {
  return (
    <div className='flex flex-col gap-10 mt-20'>
        <p className=' text-4xl font-bold text-center'>WHY CHOOSE <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600'>CARTIFY</span>?</p>
        <div className='flex flex-col sm:flex-row w-full'>
            <div className='flex flex-col gap-3 items-center'>
                <div className='flex gap-5 w-4/5 p-3 border border-orange-400 bg-orange-100 rounded'>
                    <div>
                        <p className='text-2xl font-bold text-center'>User Interface 💻</p>
                        <p className='text-xl'>Our website is designed to be easy to use and navigate.</p>
                    </div>
                </div>
                <div className=' flex gap-5 w-4/5 p-3 border border-orange-400 bg-orange-100 rounded'>
                    <div>
                        <p className='text-2xl font-bold text-center'>Reviews ⭐</p>
                        <p className='text-xl'>We have reviews for every product so you can see what others think.</p>
                    </div>
                </div>
                <div className='flex gap-5 w-4/5 p-3 border border-orange-400 bg-orange-100 rounded'>
                    <div>
                        <p className='text-2xl font-bold text-center'>Secure Payment 💳</p>
                        <p className='text-xl'>We use Stripe to process payments so you can be sure your information is safe.</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Image src="/images/features.png" alt="secure" width='500' height='500'/>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <div className='flex gap-5 w-4/5 p-3 border border-orange-400 bg-orange-100 rounded'>
                    <div>
                        <p className='text-2xl font-bold text-center'>Fast Delivery 📦</p>
                        <p className='text-xl'>We offer fast delivery so you can get your products as soon as possible.</p>
                    </div>
                </div>
                <div className='flex gap-5 w-4/5 p-3 border border-orange-400 bg-orange-100 rounded'>
                    <div>
                        <p className='text-2xl font-bold text-center'>Newsletter 📰</p>
                        <p className='text-xl'>Sign up for our newsletter to get the latest news and deals.</p>
                    </div>
                </div>
                <div className='flex gap-5 w-4/5 p-3 border border-orange-400 bg-orange-100 rounded'>
                    <div>
                        <p className='text-2xl font-bold text-center'>Customer Service 🗣</p>
                        <p className='text-xl'>We have a dedicated customer service team to help you with any questions or concerns.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Features