import React from 'react'

export default function CustomButton({title,onClick}) {
  return (
    <div>
        <button className="btn btn-primary bg-amber-600 border-0 w-full h-16"onClick={onClick}>{title}</button>
    </div>
  )
}
