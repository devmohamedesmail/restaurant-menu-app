import React from 'react'

export default function CustomInput({value,onChange,placeholder,type,label}) {
  return (
    <div>
       


       <label  className='text-white font-bold'>{label}</label>
       <input type={type}  placeholder={placeholder} value={value} onChange={onChange}   className="input input-primary w-full h-14" />
    </div>
  )
}
