import React from 'react'

export default function CustomDeleteBtn({onClick}) {
  return (
    <button className='flex-1 rounded-xl py-2 text-white mx-1  bg-red-600' onClick={onClick}>Delete</button>
  )
}
