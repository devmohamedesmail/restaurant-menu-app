import React from 'react'

export default function CustomInput({icon,value,onChange,placeholder,type,label}) {
  return (
     <div className='my-3'>
      <label className='text-white block mb-1 '>{label}</label>
       <label className="input input-primary w-full h-14 flex items-center gap-2">
                   {icon}
                <input type={type}  placeholder={placeholder} value={value} onChange={onChange}  className="grow"  />
      </label>
     </div>
  )
}
