import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className="bg-black py-2.5">
        <p className=' text-white text-center text-sm'>Sign up and get 20% off to your first order. <span className='font-medium font-satoshi-bold'>Sign Up Now</span></p>
      </div>
      <div className="container mx-auto py-6">
        <div className="flex items-center gap-10">
          <Link href={'/'} className='font-integral-cf text-[32px] font-bold'>SHOP.CO</Link>
          
        </div>
      </div>
    </>
  )
}

export default Header
