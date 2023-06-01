//page that will be displayed when the user cancels the order from stripe dashboard
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
    
    return (
        <div className='w-full h-full pt-28 bg-white'>
            <div className='max-w-screen-xl h-full m-auto'>
                <Link href={`/`}>
                    <div className='mt-4 ml-8 mb-2 sm:ml-12 sm:mb-4 font-light text-2xl flex items-center gap-1'><Image src="/images/backArrow.png" alt="go-back" width='20' height='20' className=' inline-block'/>Home</div>
                </Link>
                <Image src="/images/cancel.png" alt="cancelled" width='200' height='200' className='m-auto'/>
                <div className='text-center text-3xl font-bold'>Order Cancelled</div>
                <div className='text-center text-xl font-light'>Your order has been cancelled. Please try again.</div>
            </div>
        </div>
    )
  }
  