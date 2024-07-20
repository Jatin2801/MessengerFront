import React from 'react'
import Search from './Search'
import Conversations from './Conversations'
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className='border-r border-slate-600 p-4 flex flex-col'>
        <Search/>
        <div className='divider px-3'></div>
        <Conversations/> 
        <div className='mt-auto'>
      <RiLogoutBoxLine className='w-6 h-6 text-black cursor-pointer' />
        </div>
    </div>
  )
}

export default Sidebar