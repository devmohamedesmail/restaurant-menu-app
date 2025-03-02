'use client'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

export default function BottomNavbar() {

  const cart = useSelector(state => state.cart.meals)
  return (
    <div className='fixed bottom-0 left-0 right-0 flex justify-center items-center bg-black py-2'>
      <div className='flex justify-between items-center w-full px-4'>

        <Link href='/pages/front/offers' className='flex flex-col items-center justify-center flex-1'>
          <img src="/images/fire.svg" className='w-8 h-8' alt="" />
          <h3 className='text-white text-sm'>Offers</h3>
        </Link>




        <Link href='#' className='flex flex-col items-center  justify-center flex-2'>
          <div className='relative flex flex-col items-center  justify-center'>
            <img src="/images/cart.svg" className='w-8 h-8' alt="" />
            <h3 className='text-white text-sm absolute -top-3 -right-3 bg-amber-600 rounded-full w-6 h-6 flex justify-center items-center'>{cart.length}</h3>
            <h3 className='text-white text-sm'>100.00</h3>
          </div>

        </Link>






        <Link href='/' className='flex flex-col items-center justify-center flex-1'>
          <img src="/images/home.svg" className='w-8 h-8' alt="" />
          <h3 className='text-white text-sm'>Home</h3>
        </Link>



      </div>
    </div>
  )
}
