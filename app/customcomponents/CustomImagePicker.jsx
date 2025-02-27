import React from 'react'

export default function CustomImagePicker({onChange}) {
  return (
    <div>

        <label htmlFor="image" className='border py-3 flex flex-col justify-center items-center gap-2 my-3 border-dashed border-amber-600'>
            <p className='text-white'>Upload Image</p>
            <input id='image' type="file" className='hidden' onChange={onChange} />
            <img src="/images/image.svg" className='w-20 h-20' />
        </label>
    </div>
  )
}
