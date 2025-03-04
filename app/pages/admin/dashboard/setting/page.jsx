'use client'
import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import CustomImagePicker from '@/app/customcomponents/CustomImagePicker';
import CustomInput from '@/app/customcomponents/CustomInput'
import React, { useState } from 'react'

export default function page() {
    const [name,setName]=useState();
    const [image,setImage]=useState();

    return (
        <div>
            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />

                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Setting page</h1>
                          <CustomInput value={name} onChange={(e) => setName(e.target.value)} placeholder='name' type='text' label='name'  />

                         <CustomImagePicker onChange={(e) => setImage(e.target.files[0])} />


                    </div>
                </div>
            </div>

        </div>
    )
}
