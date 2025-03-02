

export default function CustomTextArea({value,onChange,label}) {
  return (
   <div>
     <label className='text-white font-bold'>{label}</label>
     <textarea type="text"  className="textarea textarea-primary w-full" onChange={onChange} value={value} />  
   </div>
  )
}
