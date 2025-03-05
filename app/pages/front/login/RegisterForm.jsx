'use client'
import CustomButton from '@/app/customcomponents/CustomButton'
import CustomInput from '@/app/customcomponents/CustomInput'
import React,{useState} from 'react'
import { FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import CustomSpinner from '@/app/customcomponents/CustomSpinner';

export default function RegisterForm({ registerForm, toggleForm, setting,t,name,email,password ,setName,setEmail,setPassword}) {
    const[loading,setLoading]=useState(false);
  








    // ************************************* Handle Regiser User start *************************************
    const handleRegisterUser = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ name, email, password })
            })
            console.log(response.json())
            setLoading(false);
        } catch (error) {
            console.log("The retoe",error)
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }
    // ************************************* Handle Regiser User end *************************************











    return (
        <div className={`register-form absolute translation-all ease-in-out duration-700 top-0 z-50 left-0 w-full h-full bg-black px-5   ${registerForm ? "translate-y-0" : "translate-y-full"} `}>
            <img src={setting?.image} className='w-fit h-20 rounded-full mx-auto mb-10' alt="" />
            <div className='mb-3'>
                <CustomInput 
                type="text" 
                placeholder={t('Name')} 
                icon={<FaUser />}
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>


            <div className='mb-3'>
                <CustomInput 
                type="text" 
                placeholder={t('Email')} 
                icon={<MdOutlineMailOutline />}
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>



            <div className='mb-3'>
                <CustomInput 
                 type="password" 
                 placeholder={t('Password')} 
                 icon={<FaLock />}
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
            </div>

            {loading ? (<CustomSpinner />):(<CustomButton title={t('Register')} onClick={() => handleRegisterUser()} />)}
            
            <button className='btn btn-outline mt-3 w-full h-16' onClick={toggleForm}>{t('Login')}</button>
        </div>
    )
}
