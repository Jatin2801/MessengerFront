import React from 'react'
import SingleMsg from './SingleMsg'

const Messages = () => {
  return (
    <div className='overflow-auto px-4 flex-1'>
        <SingleMsg/>
        <SingleMsg/>
        <SingleMsg/>
        <SingleMsg/>
        <SingleMsg/>
        <SingleMsg/>
        <SingleMsg/>
    </div>
  )
}

export default Messages