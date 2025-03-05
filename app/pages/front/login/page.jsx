'use client'
import CustomButton from '@/app/customcomponents/CustomButton'
import CustomInput from '@/app/customcomponents/CustomInput'
import React, { useContext, useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { DataContext } from '@/app/context/DataProvider';
import { useTranslation } from 'react-i18next';
import RegisterForm from './RegisterForm';
import BackBtn from '@/app/components/BackBtn/BackBtn';
import LanguageSwitcher from '@/app/components/LanguageSwitcher/LanguageSwitcher';

export default function page() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const { setting } = useContext(DataContext);
  const [registerForm, setRegisterForm] = useState(false)
  const { t } = useTranslation();




  const toggleForm = () => {
    setRegisterForm(!registerForm)
  }






  return (
    <div>
      <div className='flex justify-between items-center container m-auto'>
        <BackBtn />
        <LanguageSwitcher />
      </div>
      <div className='container m-auto'>


        <div className='mt-30 flex justify-center items-center'>

          <div className='w-full lg:w-1/3  mx-2 bg-black rounded-4xl py-10 px-5 relative overflow-hidden'>




            <RegisterForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              registerForm={registerForm}
              toggleForm={toggleForm}
              setting={setting}
              t={t} />






            <img src={setting?.image} className='w-fit h-20 rounded-full mx-auto mb-10' alt={setting?.name} />
            <div className='mb-3'>
              <CustomInput type="text" placeholder={t('Email')} icon={<MdOutlineMailOutline />} />
            </div>
            <div className='mb-3'>
              <CustomInput type="password" placeholder={t('Password')} icon={<FaLock />} />
            </div>
            <CustomButton title={t('Login')} />
            <button className='btn btn-outline mt-3 w-full h-16' onClick={toggleForm}>{t('Register')}</button>
          </div>
        </div>

      </div>
    </div>

  )
}
