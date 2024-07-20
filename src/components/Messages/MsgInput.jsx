import React from 'react'
import { IoSendSharp } from "react-icons/io5";

const MsgInput = () => {
  return (
    
        <form className='px-4 my-3'>
        <div className='w-full relative'>
        <input type="text" placeholder="Type here" className="input placeholder-gray-900 input-bordered font-semibold  bg-white text-black w-full max-w-xs" />
        <button type='submit' className='text-black absolute inset-y-0 end-0 mr-8 items-center flex pe-3 text-2xl'> <IoSendSharp/></button>
        </div>
        </form>
   
  )
}

export default MsgInput