import { BRAND_LIST } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'

const OurBrands = () => {
  return (
    <div className='bg-black py-[42px]'>
      <div className="flex flex-wrap items-center justify-center gap-x-[105px] max-lg:gap-x-24 max-md:gap-x-16 max-sm:gap-y-5 max-sm:gap-8">
        {BRAND_LIST.map((item, i) => (
          <Link key={i} href={'/'}> {item}</Link>
        ))}
      </div>
    </div>
  )
}

export default OurBrands
