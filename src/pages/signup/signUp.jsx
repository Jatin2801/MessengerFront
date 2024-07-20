import React from 'react'
import Genderbox from './Genderbox'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  ' >
        <h1 className='text-3xl font-semibold text-center text-gray-600'>
          Sign Up <span className='text-blue-500'>Messegio</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
            <span className='text-base label-text text-gray-800' >Full Name</span>
            </label>
            <input type='text' placeholder='Enter Fullname' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
            <span className='text-base label-text text-gray-800' >Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>
          <div>
          <label className='label p-2'>
          <span className='text-base label-text text-gray-800' >Password</span>
          </label>
          <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' />
          <label className='label p-2'>
          <span className='text-base label-text text-gray-800' >Confirm Password</span>
          </label>
          <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10' />
          </div>
        
        <Genderbox/>

        <Link to='/login' className='text-sm text-gray-800 hover:underline hover:text-blue-950 mt-2 inline-block'>
 						Already have an account?
 					</Link>
        <div>
 						<button className='btn btn-block text-gray-200 btn-sm mt-3 pr-10 btn-primary'>Signup</button>
 					</div>
          </form>
      </div>
    </div>
  )
}

export default SignUp