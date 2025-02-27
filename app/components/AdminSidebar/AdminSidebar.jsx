import CustomDashboardIcon from '@/app/customcomponents/CustomDashboardIcon'
import React from 'react'

export default function AdminSidebar() {
    return (
        <div className='col-span-12 lg:col-span-5'>
            <div className='grid grid-cols-2 gap-3'>

                <CustomDashboardIcon title="Home" image="/images/home.svg" link="/pages/admin/dashboard" />
                <CustomDashboardIcon title="Categories" image="/images/category.svg" link="/pages/admin/dashboard/categories" />

            </div>
        </div>
    )
}
