import React from 'react'
import Search from './Search'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div>
        <Search/>
        <div className='divider px-3'></div>
        <Conversations/> 
    </div>
  )
}

export default Sidebar