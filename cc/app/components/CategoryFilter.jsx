'use client'

import React from 'react'
import Link from 'next/link'

function CategoryFilter(props) {
  const unactivated = 'border border-amber-600 hover:bg-[#e78200d1] rounded pl-4 pr-4 pt-1 pb-1'
  const activated = 'border border-amber-600 bg-[#e78200d1] rounded pl-4 pr-4 pt-1 pb-1'
  return (
    <div className='mt-6 flex flex-wrap items-center justify-center gap-4'>
        <Link href={`/categories/all`}>
          <div className={props.id == 'all' ? activated : unactivated}>All</div>
        </Link>
        <Link href={`/categories/electronics`}>
          <div className={props.id == 'electronics' ? activated : unactivated}>Electronics</div>
        </Link>
        <Link href={`/categories/jewelery`}>
          <div className={props.id == 'jewelery' ? activated : unactivated}>Jewelery</div>
        </Link>
        <Link href={`/categories/men's clothing`}>
          <div className={props.id == "men's%20clothing" ? activated : unactivated}>Men&apos;s</div>
        </Link>
        <Link href={`/categories/women's clothing`}>
          <div className={props.id == "women's%20clothing" ? activated : unactivated}>Women&apos;s</div>
        </Link>
    </div>
  )
}

export default CategoryFilter