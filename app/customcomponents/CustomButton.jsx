import React from 'react'

export default function CustomButton({title,onClick}) {
  return (
    <div>
       
        <button className="btn btn-primary w-full h-16"onClick={onClick}>{title}</button>
    </div>
  )
}
