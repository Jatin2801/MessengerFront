import React from 'react'

const Conversation = ({conversation , lastIdx}) => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
    <div className='avatar offline'>
    <div className='w-12 rounded-full'>
        <img src= {conversation.profilepic} />
    </div>
    </div>
    <div className='flex flex-col flex-1'>
        <div className='flex gap-2 justify-between'>
            <p className='font-bold text-gray-800'>{conversation.fullname}</p>
        </div>
    </div>
    
    </div>
    {!lastIdx &&  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-500"/>}
       
    </>
  )
}

export default Conversation