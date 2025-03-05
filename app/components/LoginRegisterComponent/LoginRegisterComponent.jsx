import Link from 'next/link'
import React from 'react'

export default function LoginRegisterComponent() {
  return (
    <div className='border border-amber-600 w-fit py-2 px-2'>
       <Link href="/pages/front/login" className='text-sm '>Login / Register</Link>  
    </div>
  )
}
