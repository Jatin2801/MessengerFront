import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
    return (
        <div>
            <form className='gap-2 flex mt-1 items-center'>
                <input type='text' placeholder='Search...' className='input ml-1 input-bordered rounded-full' />
                <button type='submit' className='btn btn-circle border-none mr-1 mt-1 bg-sky-600 text-white'>
                    <IoSearchSharp className='w-6 h-6' />
                </button>
            </form>
        </div>
    )
}

export default Search