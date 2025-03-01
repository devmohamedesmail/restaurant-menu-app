"use client"
import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const DataContext = createContext();



export const DataProvider = ({ children }) => {



const [categories,setCategories] = useState([])




const fetchCategories = async () => {
    try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
        
    } catch (error) {
        console.log(error);
    }
}


useEffect(() => {
    fetchCategories(); // Fetch categories when the provider mounts
}, []);




    return <DataContext.Provider value={{categories,fetchCategories}}>{children}</DataContext.Provider>;
};