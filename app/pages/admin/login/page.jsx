import CustomButton from '@/app/customcomponents/CustomButton';
import CustomLoginInput from '@/app/customcomponents/CustomLoginInput';
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
export default function page() {
    return (
        <div className='container m-auto'>


            <div className='h-screen flex justify-center items-center'>
                <div className='w-full lg:w-1/3  mx-2'>


                    <img src="https://picsum.photos/200/300" className='w-20 h-20 rounded-full mx-auto my-10' alt="" />

            


                   <CustomLoginInput  icon={<MdOutlineEmail color='white' fontSize={20} />} placeholder='Email' type='text'  id='email'/>
                   <CustomLoginInput  icon={<RiLockPasswordFill color='white' fontSize={20} />} placeholder='Password' type='password'  id='password'/>


                    <CustomButton title="Login" />


                   


                </div>
            </div>

        </div>
    )
}
