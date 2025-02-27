'use client'
import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import axios from 'axios'

export default function Meals() {

const [meals,setmeals]=useState([])



const fetchMeals = async () => {
  try {
    const response = await axios.get('/api/meals');
    setmeals(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


useEffect(()=>{
  fetchMeals();
},[])




  return (
    <div  className='container m-auto px-5 my-10'>

        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Our Meals 🔥</h1>
        <div className='grid grid-cols-2 gap-4'>
            <MealItem />
            
            {meals.map((meal)=>(
                <MealItem key={meal._id} id={meal._id} title={meal.title} image={meal.image} price={meal.price} />
            ))}
        </div>
    </div>
  )
}
