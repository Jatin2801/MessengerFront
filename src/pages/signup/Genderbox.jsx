import React from 'react'

const Genderbox = () => {
  return (
    <div className='flex'>
        <div className='form-control' >
            <label className='label gap-2 cursor-pointer'>
            <span className='label-text text-gray-900 font-semibold'>Male</span>
            <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>
        <div className=' ml-5 form-control' >
            <label className='label gap-2 cursor-pointer'>
            <span className='label-text text-gray-900 font-semibold '>Female</span>
            <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>
    </div>
  )
}

export default Genderbox