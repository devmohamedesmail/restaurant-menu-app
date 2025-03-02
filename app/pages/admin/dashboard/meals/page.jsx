'use client'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import HeaderAdmin from '@/app/components/HeaderAdmin/HeaderAdmin'
import { DataContext } from '@/app/context/DataProvider'
import CustomButton from '@/app/customcomponents/CustomButton'
import CustomDeleteBtn from '@/app/customcomponents/CustomDeleteBtn'
import CustomEditBtn from '@/app/customcomponents/CustomEditBtn'
import CustomImagePicker from '@/app/customcomponents/CustomImagePicker'
import CustomInput from '@/app/customcomponents/CustomInput'
import CustomSpinner from '@/app/customcomponents/CustomSpinner'
import CustomTextArea from '@/app/customcomponents/CustomTextArea'
import React, { useState, useContext, useRef } from 'react'

export default function page() {

    const [categoryId, setCategoryId] = useState("");
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const { categories, meals, fetchMeals } = useContext(DataContext);
    const [loading, setLoading] = useState(false)
    const modalRef = useRef(null);




    const handleAddMeal = async () => {

        const formData = new FormData();
        formData.append("categoryId", categoryId);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("image", image);

        setLoading(true)

        try {
            const response = await fetch("/api/meals", {
                method: "POST",

                body: formData,
            });



            setLoading(false)
            modalRef.current?.showModal();
            fetchMeals();
        } catch (error) {
            console.error("Error:", error);

        } finally {
            setLoading(false)
        }


    }

    return (
        <div>


        <HeaderAdmin />



            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />

                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Add New Meal</h1>

                        <select defaultValue="Pick a text editor" className="select select-primary w-full h-16" onChange={(e) => setCategoryId(e.target.value)}>
                            {categories && categories.length > 0 && categories.map((category) => (
                                <option key={category._id} value={category._id}>{category.title}</option>
                            ))}

                        </select>
                        <CustomInput value={title} onChange={(e) => setTitle(e.target.value)} type={"text"} label={"Title"} />
                        <CustomInput value={price} onChange={(e) => setPrice(e.target.value)} type="number" label={"Price"} />
                        <CustomTextArea value={description} onChange={(e) => setDescription(e.target.value)} label={"Description"} />
                        <CustomImagePicker onChange={(e) => setImage(e.target.files[0])} />

                        {loading ? (<CustomSpinner />) : (<CustomButton title={"Add Meal"} onClick={() => handleAddMeal()} />)}



                        <hr />
                        <h4 className='text-white text-center font-bold my-4'> All Meals </h4>



                        {meals && meals.length > 0 ? (

                            <div className='grid grid-cols-3 gap-5'>
                                {meals.map((meal) => (
                                    <div key={meal._id} className='border rounded-2xl overflow-hidden'>
                                        <div>
                                            <img
                                                className='rounded-2xl h-30 w-full object-cover'
                                                src={meal.image}
                                                alt={meal.title} />
                                        </div>
                                        <p className='text-center text-white text-sm font-bold mt-3'>{meal.title}</p>
                                        <div className='flex justify-between items-center px-3'>
                                            <CustomEditBtn />
                                            <CustomDeleteBtn />
                                        </div>
                                    </div>

                                ))}
                            </div>


                        ) : (<CustomSpinner />)}







                    </div>
                </div>
            </div>



            {/* Modal Saving meal */}
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    )
}
