import React from 'react'
import {Link} from 'react-router-dom'
const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1729154031163-1c5484fac8dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full">
        <img className='w-14 ml-8' src="https://play-lh.googleusercontent.com/oa3KmJ5TGL9DwhXrk7JHvHrtf-Szt_oc4qFisnc7D1mgOayhCEUWnr5Fli7G4wK54KI" alt="" />
        <div className='bg-white pb-7 py-5 px-5'>
            <h2 className='text-xl font-bold'>Get Started With Dabbewala</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start