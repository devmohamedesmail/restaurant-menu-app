'use client'
import CustomInput from '@/app/customcomponents/CustomInput'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CustomButton from '@/app/customcomponents/CustomButton'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import CustomImagePicker from '@/app/customcomponents/CustomImagePicker'

export default function page() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [categories, setCategories] = useState([])


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










    const handleSubmit = async () => {
        if (!title || !image) {
            alert("Please provide both title and image");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);

        try {
            await axios.post("/api/categories", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Category added successfully!");
            setTitle('');  // Clear the input
            setImage(null); // Clear the image picker
            fetchCategories(); // Refresh categories list
        } catch (error) {
            console.error("Error adding category:", error);
            alert("Error adding category");
        }
    };





    return (
        <div>

            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />
                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Add Category</h1>
                        <CustomInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} label="Title" />

                        <CustomImagePicker onChange={(e) => setImage(e.target.files[0])} />
                        <CustomButton title="add" onClick={() => handleSubmit()} />

                        <hr />
                        <h4 className='text-white text-center font-bold my-4'>All Categories</h4>






                     <div className='grid grid-cols-3 gap-5'>
                     {categories.map((category) => (
                            <div key={category._id} className="mb-4 bg-white rounded-2xl overflow-hidden">
                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/banner.jpg" alt={category.title} className="w-full" />
                                    <p className="text-black font-bold">{category.title}</p>
                                </div>
                               <div className='flex justify-between gap-2 my-2'>
                               <button className='flex-1 rounded-xl py-2 text-white mx-1  bg-red-600'>Delete</button>
                               <button className='flex-1 rounded-xl py-2 text-white mx-1 bg-green-600'>Edit</button>
                               </div>
                            </div>
                        ))}
                     </div>







                    </div>
                </div>
            </div>

        </div>
    )
}
