

export default function CustomTextArea({value,onChange,label}) {
  return (
   <div className="my-1">
     <label className='text-white'>{label}</label>
     <textarea type="text"  className="textarea textarea-primary w-full" onChange={onChange} value={value} />  
   </div>
  )
}
