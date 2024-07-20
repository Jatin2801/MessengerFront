import React from 'react'

const SingleMsg = () => {
  return (
    <div className='chat chat-end'>
       <div className='chat-image avatar w-10 rounded-full'>
        <img src='https://avatar.iran.liara.run/public/boy?username=Bob' alt='User Avatar' />
       </div>
       <div className='chat-bubble text-white bg-blue-500'> Hi!!  </div>
       <div className='chat-footer text-black font-bold opacity-50 text-xs flex gap-1 items-center '> 12:43</div>
    </div>
  )
}

export default SingleMsg