'use client'
import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import axios from 'axios'

export default function Categories() {



  const [categories,setCategories] = useState([])


  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };



useEffect(() => {
  fetchCategories();
}, []);



  return (
    <div className='container m-auto px-5 my-10'>
       <h1 className='text-3xl text-center mb-3 text-white font-bold'>Our Categories 🔥</h1>
       <div className='grid grid-cols-4  gap-4'>

        {categories.map((category) => (
          <CategoryItem key={category._id} title={category.title} />
        ))}
       
       
       </div>
    </div>
  )
}
