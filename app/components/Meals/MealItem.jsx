import React from 'react'

export default function MealItem({image,title,price}) {
    return (
        <div>
            <img
                className='rounded-2xl h-30 w-full object-cover'
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            <h3 className='text-white text-center'>{title}</h3>    
            <h3 className='text-white text-center'>{price} AED</h3>    
        </div>
    )
}
