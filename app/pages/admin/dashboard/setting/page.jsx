import AdminSidebar from '@/app/components/AdminSidebar/AdminSidebar'
import React from 'react'

export default function page() {
    return (
        <div>

            <div className='container m-auto px-5'>
                <div className='grid grid-cols-12 gap-5 my-10'>
                    <AdminSidebar />

                    <div className='col-span-12 lg:col-span-7'>
                        <h1 className='text-3xl text-center mb-3 text-white font-bold'>Setting page</h1>


                        <hr />
                        <h4 className='text-white text-center font-bold my-4'>All Meals</h4>













                    </div>
                </div>
            </div>

        </div>
    )
}
