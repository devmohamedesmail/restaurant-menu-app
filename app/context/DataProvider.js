"use client"
import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const DataContext = createContext();



export const DataProvider = ({ children }) => {



    const [categories, setCategories] = useState([])
    const [meals, setMeals] = useState([])
    const [offers, setOffers] = useState([])



    // *************************************** fetch categories start *******************************************
    const fetchCategories = async () => {
        try {
            const response = await axios.get('/api/categories');
            setCategories(response.data);

        } catch (error) {
            console.log("Error Fetching Categories", error);
        }
    }
    // *************************************** fetch categories End *******************************************





    // *************************************** fetch Meals start *******************************************
    const fetchMeals = async () => {
        try {
            const response = await axios.get('/api/meals');
            setMeals(response.data);
        } catch (error) {
            console.log("Error Fetching Meals", error);
        }
    }
    // *************************************** fetch Meals End *******************************************




    // *************************************** fetch offers start *******************************************
    const fetchOffers = async () => {
        try {
            const response = await axios.get('/api/offers');
            setMeals(response.data);
        } catch (error) {
            console.log("Error Fetching offers", error);
        }
    }
    // *************************************** fetch Meals End *******************************************








    useEffect(() => {
        fetchCategories();
        fetchMeals();
        fetchOffers();
    }, []);




    return (
        <DataContext.Provider value={{ categories, fetchCategories, meals, fetchMeals, offers, fetchOffers }}>{children}</DataContext.Provider>
    )
};