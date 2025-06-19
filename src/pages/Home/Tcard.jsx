import React from 'react'
import { FaStar, FaUser } from 'react-icons/fa6'

const Tcard = (props) => {
  return (
    <div  className='relative'>
     <div 
     className='bg-green-500 rounded-3xl bg-seagreen shadow-lg py-40 relative mb-16 rotate-6 duration-500 lg:w-[80%] md:w-[85%]  w-[90%]'></div>

      <div className='lg:w-[80%] md:w-[85%] w-[95%] cursor-pointer scale-95 -mt-2 hover:scale-105 bg-green  duration-700 bg-green-100 py-10 px-6 left-0 right-0 top-0  rounded-3xl shadow-md absolute z-10'>
       <div className='relative -top-16 flex justify-center '>
        <FaUser size={60} className='bg-green border-2 border-white animate-spin scale-125 duration-1000 py-2 px-2 rounded-full shadow-lg text-seagreen'/>
        </div>

        <div className='grid grid-cols-5 gap-2 relative -top-5 cursor-pointer px-6 mb-4'>
          <FaStar size={25} color='orange' className=' hover:scale-y-200 duration-500'/>
          <FaStar size={25} color='orange' className=' hover:scale-y-200 duration-500'/>
          <FaStar size={25} color='orange' className=' hover:scale-y-200 duration-500'/>
          <FaStar size={25} color='orange' className=' hover:scale-y-200 duration-500'/>
          <FaStar size={25} color='orange' className=' hover:scale-y-200 duration-500'/>
        </div>

        <h1 className='text-seagreen text-2xl font-semibold mb-1'>{props.name}</h1>
        <p className='text-lg  text-seagreen mb-2'>{props.position}</p>
        <p className='text-sm text-white mb-2'>{props.pharagh}</p>
        </div>
    </div>
  )
}

export default Tcard