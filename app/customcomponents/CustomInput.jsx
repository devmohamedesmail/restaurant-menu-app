import React from 'react'

export default function CustomInput({value,onChange,placeholder,type,label}) {
  return (
    <div>
        <label  className='text-white font-bold'>{label}</label>
        <input 
        type={type} 
        className='border w-full border-amber-600 h-14 flex items-center gap-2 p-2 bg-white focus:outline-0 focus:border-0' 
        value={value} onChange={onChange}  
        placeholder={placeholder}
         />
    </div>
  )
}
