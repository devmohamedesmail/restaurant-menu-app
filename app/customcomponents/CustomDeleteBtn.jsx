import React from 'react'
import { MdDelete } from "react-icons/md";
export default function CustomDeleteBtn({onClick}) {
  return (
    <button className="btn btn-error bg-red-700 flex-1 text-white mx-1"  onClick={onClick}> Delete <MdDelete color="white" /></button>
    
  )
}
