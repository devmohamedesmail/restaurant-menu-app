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
    const modalRefEdit = useRef(null);
    const [selectedMeal, setSelectedMeal] = useState(null);



    const handleAddMeal = async () => {

        const formData = new FormData();
        formData.append("categoryId", categoryId);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("image", image);

        setLoading(true)
        setCategoryId("")
        setTitle("")
        setDescription("")
        setPrice("")
        setImage("")


        try {
            const response = await fetch("/api/meals", {
                method: "POST",
                body: formData,
            });

            console.log(response);
            if (response.ok) {
                modalRef.current?.showModal();
            } else {
                alert("Something went wrong")
            }

            setLoading(false)

            fetchMeals();
        } catch (error) {
            console.error("Error:", error);

        } finally {
            setLoading(false)
        }


    }





    // ***************************************** Handle Delete start *******************************************
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/meals/${id}`, {
                method: 'DELETE',
            })
            fetchMeals();

        } catch (error) {
            console.error(error);
        }
    };


    // ***************************************** Handle Delete end *******************************************




    // ***************************************** Handle Edit start *******************************************

    const handleUpdateMeal = async (id) =>{
        try {
            const response = await fetch(`/api/meals/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: selectedMeal._id,
                    title: selectedMeal.title,
                    description: selectedMeal.description,
                    price: selectedMeal.price,
                    image: selectedMeal.image, // Send image path if no new upload
                }),
            })
        } catch (error) {
          console.log(error)  
        }
    }
    // ***************************************** Handle Edit end *********************************************




    return (
        <div>

            <HeaderAdmin />



            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />

                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Add New Meal</h1>

                        <div>
                            <label className='text-sm mb-1'>Select Category</label>
                            <select defaultValue="Pick a text editor" className="select select-primary w-full h-16" onChange={(e) => setCategoryId(e.target.value)}>
                                {categories && categories.length > 0 && categories.map((category) => (
                                    <option key={category._id} value={category._id}>{category.title}</option>
                                ))}

                            </select>
                        </div>
                        <CustomInput value={title} onChange={(e) => setTitle(e.target.value)} type={"text"} label={"Title"} />
                        <CustomInput value={price} onChange={(e) => setPrice(e.target.value)} type="number" label={"Price"} />
                        <CustomTextArea value={description} onChange={(e) => setDescription(e.target.value)} label={"Description"} />
                        <CustomImagePicker onChange={(e) => setImage(e.target.files[0])} />

                        {loading ? (<CustomSpinner />) : (<CustomButton title={"Add Meal"} onClick={() => handleAddMeal()} />)}



                        <hr />
                        <h4 className='text-white text-center font-bold my-4'> All Meals </h4>



                        {meals && meals.length > 0 ? (

                            <div className='grid grid-cols-3 gap-5 my-4'>
                                {meals.map((meal) => (
                                    <div key={meal._id} className='rounded-2xl overflow-hidden pb-4'>
                                        <div>
                                            <img
                                                className='rounded-2xl h-44 w-full object-cover'
                                                src={meal.image}
                                                alt={meal.title} />
                                        </div>
                                        <p className='text-center text-white text-sm font-bold mt-3'>{meal.title}</p>
                                        <p className='text-center text-white text-sm font-bold mt-3'>{meal.description}</p>
                                        <div className='flex justify-evenly items-center  mt-3'>
                                            <CustomEditBtn
                                                onClick={() => {
                                                    modalRefEdit.current?.showModal()
                                                    setSelectedMeal(meal)
                                                }}
                                            />
                                            <CustomDeleteBtn onClick={() => handleDelete(meal._id)} />
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
                    <h3 className="font-bold text-3xl text-cnter">
                        ✅
                    </h3>
                    <p className="py-4 text-center">
                        Meal Added Successfully
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>





            {/* Edit Modal Start */}
            <dialog ref={modalRefEdit} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Meal</h3>

                    <div className="modal-action ">
                        <form method="dialog" className=' flex flex-col w-full'>

                            {/* <CustomInput value={selectedMeal?.title} onChange={(e) => setSelectedCategory({ ...selectedCategory, title: e.target.value })} />
                            <CustomImagePicker onChange={(e) => setSelectedCategory({ ...selectedCategory, image: e.target.files[0] })} />
                            <CustomButton title="Update" onClick={() => handleEditCategory(selectedCategory._id)} /> */}



<div>
                            <label className='text-sm mb-1'>Select Category</label>
                            <select defaultValue="Pick a text editor" className="select select-primary w-full h-16" onChange={(e) => setCategoryId(e.target.value)}>
                                {categories && categories.length > 0 && categories.map((category) => (
                                    <option key={category._id} value={category._id}>{category.title}</option>
                                ))}

                            </select>
                        </div>
                        <CustomInput value={selectedMeal?.title} onChange={(e) => setSelectedMeal({ ...selectedMeal, title: e.target.value })} type={"text"} label={"Title"} />
                        <CustomInput value={selectedMeal?.price} onChange={(e) => setSelectedMeal({ ...selectedMeal, price: e.target.value })} type="number" label={"Price"} />
                        <CustomTextArea value={selectedMeal?.description} onChange={(e) => setSelectedMeal({ ...selectedMeal, description: e.target.value })} label={"Description"} />
                        <CustomImagePicker onChange={(e) => setSelectedMeal({ ...selectedMeal, image: e.target.files[0] })} />

                        {loading ? (<CustomSpinner />) : (<CustomButton title={"Update Meal"}  onClick={() => handleUpdateMeal(selectedMeal._id)} />)}










                            <button className="btn btn-error my-1">Close</button>
                        </form>

                    </div>
                </div>
            </dialog>
            {/* Edit Modal End */}

        </div>
    )
}
