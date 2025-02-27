import React from 'react'

export default function CustomButton({title,onClick}) {
  return (
    <div>
        <button className='bg-amber-600 h-14 w-full text-white' onClick={onClick}>
            {title}
        </button>
    </div>
  )
}
