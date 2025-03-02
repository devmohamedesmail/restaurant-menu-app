import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import CustomQuantityBtn from '@/app/customcomponents/CustomQuantityBtn';

export default function MealItem({ image, title, price, description ,quantity,addtocart,quantityIncrement,quantityDecrement}) {
    return (
        <div className=''>
            <img
                className='rounded-2xl h-30 w-full object-cover'
                src={image}
                alt={title} />

            <h3 className='text-white text-center font-bold'>{title}</h3>
            <h3 className='text-white text-center'>{description}</h3>
            <h3 className=' text-center font-bold text-amber-600'>{price} AED</h3>

            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center flex-1 mr-10 bg-black px-2 py-1 rounded-full  '>
                    
                    <CustomQuantityBtn icon={<FaPlus />} onClick={quantityIncrement} />
                    <input type="text" readOnly className='w-6 text-center' value={quantity} />
                    <CustomQuantityBtn icon={<FaMinus />} onClick={quantityDecrement} />
                
                </div>
                <button className='bg-amber-600 p-3 rounded-full' onClick={addtocart}>
                    <MdAddShoppingCart color='white' />
                </button>
            </div>


        </div>
    )
}
