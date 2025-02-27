import Link from 'next/link'
import React from 'react'

export default function BottomNavbar() {
  return (
    <div className='fixed bottom-0 left-0 right-0 flex justify-center items-center bg-black py-2'>
      <div className='flex justify-between items-center w-full px-4'>

        <Link href='#' className='flex flex-col items-center justify-center flex-1'>
          <img src="/images/fire.svg" className='w-8 h-8' alt="" />
          <h3 className='text-white text-sm'>Offers</h3>
        </Link>

        <Link href='#' className='flex flex-col items-center justify-center flex-2'>
          <img src="/images/cart.svg" className='w-8 h-8' alt="" />
          <h3 className='text-white text-sm'>Cart</h3>
        </Link>
        <Link href='#' className='flex flex-col items-center justify-center flex-1'>
          <img src="/images/home.svg" className='w-8 h-8' alt="" />
          <h3 className='text-white text-sm'>Home</h3>
        </Link>



      </div>
    </div>
  )
}
