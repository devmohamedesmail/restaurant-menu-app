import React from 'react'
import { MdModeEdit } from "react-icons/md";

export default function CustomEditBtn({onClick}) {
  return (
    <button className="btn btn-success flex-1" onClick={onClick}>Edit <MdModeEdit color='white' /></button>
  )
}
