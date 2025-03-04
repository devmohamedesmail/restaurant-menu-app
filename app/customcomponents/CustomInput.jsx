import React from 'react'

export default function CustomInput({value,onChange,placeholder,type,label}) {
  return (
    <div className='my-2'>
       <label  className='text-white block mb-1 '>{label}</label>
       <input type={type}  placeholder={placeholder} value={value} onChange={onChange}   className="input input-primary w-full h-14" />
    </div>
  )
}
