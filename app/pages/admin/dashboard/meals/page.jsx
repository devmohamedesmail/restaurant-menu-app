'use client'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import { DataContext } from '@/app/context/DataProvider'
import CustomButton from '@/app/customcomponents/CustomButton'
import CustomImagePicker from '@/app/customcomponents/CustomImagePicker'
import CustomInput from '@/app/customcomponents/CustomInput'
import CustomTextArea from '@/app/customcomponents/CustomTextArea'
import React, { useState,useContext } from 'react'

export default function page() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)
    const {categories}=useContext(DataContext);



    const handleAddMeal = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("image", image); // Append file


        setLoading(true)

        try {
            await fetch("/api/meals", {
                method: "POST",
                body: formData,
            });



            setLoading(false)
            modalRef.current?.showModal();
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
            setLoading(false)
        } finally {
            setLoading(false)
        }


    }

    return (
        <div>

            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />

                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Add New Meal</h1>


                        <hr />
                        <h4 className='text-white text-center font-bold my-4'>All Meals</h4>

                        <select defaultValue="Pick a text editor" className="select select-primary w-full h-16">
                            {categories && categories.length > 0 && categories.map((category) => (
                                <option key={category._id}>{category.title}</option>
                            ))}
                         
                        </select>
                        <CustomInput value={title} onChange={(e) => setTitle(e.target.value)} type={"text"} label={"Title"} />
                        <CustomInput value={price} onChange={(e) => setPrice(e.target.value)} type="number" label={"Price"} />
                        <CustomTextArea value={description} onChange={(e) => setDescription(e.target.value)} label={"Description"} />
                        <CustomImagePicker onChange={(e) => setImage(e.target.files[0])} />

                        <CustomButton title={"Add Meal"} onClick={() => handleAddMeal()} />







                    </div>
                </div>
            </div>

        </div>
    )
}
