import React from 'react'

export default function CategoryItem({image,title}) {
    return (
        <div className='border rounded-2xl overflow-hidden'>
            <img
                className='rounded-2xl h-20 w-full object-cover'

                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt={title} />

            <p className='text-center text-white text-sm'>{title}</p>
        </div>
    )
}
