'use client'
import React, { useContext, useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import axios from 'axios'
import CustomSpinner from '@/app/customcomponents/CustomSpinner'
import { DataContext } from '@/app/context/DataProvider'

export default function Categories() {



 // const [categories, setCategories] = useState([])
      const {categories}=useContext(DataContext)

 






  return (
    <div className='container m-auto px-5 my-10'>
      <h1 className='text-3xl text-center text-white font-bold mb-10'>Our Categories 🔥</h1>
    


        {categories && categories.length > 0 ? (
          <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6   gap-4'>
            {categories.map((category) => (
              <CategoryItem key={category._id} title={category.title} image={category.image} />
            ))}
          </div>
        ) : (
          <CustomSpinner />
        )}


     
    </div>
  )
}
