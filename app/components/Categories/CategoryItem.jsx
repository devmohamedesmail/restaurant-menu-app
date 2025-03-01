import React from 'react'

export default function CategoryItem({image,title}) {
    return (
        <div className='border rounded-2xl overflow-hidden'>
            <img
                className='rounded-2xl h-30 w-full object-cover'

                src={image}
                alt={title} />

            <p className='text-center text-white text-sm'>{title}</p>
        </div>
    )
}
