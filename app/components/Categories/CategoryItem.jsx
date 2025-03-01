import React from 'react'

export default function CategoryItem({ image, title }) {
    return (
        <div className='border rounded-2xl overflow-hidden'>

            <div>
                <img
                    className='rounded-2xl h-30 w-full object-cover'
                    src={image}
                    alt={title} />
            </div>

            <p className='text-center text-white text-sm font-bold mt-3'>{title}</p>
        </div>
    )
}
