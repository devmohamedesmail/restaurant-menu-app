'use client'
import CustomInput from '@/app/customcomponents/CustomInput'
import React, { useState, useEffect,useRef } from 'react'
import axios from 'axios'
import CustomButton from '@/app/customcomponents/CustomButton'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import CustomImagePicker from '@/app/customcomponents/CustomImagePicker'
import HeaderAdmin from '@/app/components/HeaderAdmin/HeaderAdmin'
import ClipLoader from "react-spinners/ClipLoader";
import CustomSpinner from '@/app/customcomponents/CustomSpinner'
import CustomDeleteBtn from '@/app/customcomponents/CustomDeleteBtn'

export default function page() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const modalRef = useRef(null);


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


        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image); // Append file


        setLoading(true)

        try {
            await fetch("/api/categories", {
                method: "POST",
                body: formData,
            });


            fetchCategories();
            setLoading(false)
            modalRef.current?.showModal();
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
            setLoading(false)
        } finally {
            setLoading(false)
        }



    };



    const handleDelete = async (id) => {
        try {

            const response = await fetch(`/api/categories/${id}`, {
                method: 'DELETE',
            })
            console.log(id);
            fetchCategories();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>

            <HeaderAdmin />
            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />
                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Add Category</h1>
                        <CustomInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} label="Title" />

                        <CustomImagePicker onChange={(e) => setImage(e.target.files[0])} />

                        {loading ? (<CustomSpinner />) : <CustomButton title="add" onClick={() => handleSubmit()} />}

                        <hr />
                        <h4 className='text-white text-center font-bold my-4'>All Categories</h4>






                        <div className='grid grid-cols-3 gap-5'>
                            {categories.map((category) => (
                                <div key={category._id} className="mb-4 bg-white rounded-2xl overflow-hidden">
                                    <div className="flex flex-col items-center gap-2">
                                        <img src={category.image} alt={category.title} className="w-full" />
                                        <p className="text-black font-bold">{category.title}</p>
                                    </div>
                                    <div className='flex justify-between gap-2 my-2'>

                                        <CustomDeleteBtn onClick={() => handleDelete(category._id)} />
                                        <button className='flex-1 rounded-xl py-2 text-white mx-1 bg-green-600'>Edit</button>
                                    </div>
                                </div>
                            ))}
                        </div>







                    </div>
                </div>
            </div>







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
