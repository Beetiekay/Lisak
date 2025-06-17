import React from 'react'
import edge from "../assets/comp1.png"
import { FaFax, FaGooglePlus, FaPhoneVolume } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-[100%] h-[55vh] bg-aliceblue relative overflow-hidden'>
        <img src={edge} className='absolute lg:-top-44 md:-top-24'/>
        <div className='relative lg:py-52  md:py-52 py-24 lg:px-40 md:px-10 px-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
          <h1 className='lg:text-2xl md:text-2xl text-xl font-semibold text-green lg:mb-0 md:mb-0 mb-4'>Contact Us</h1>

         <ul className='flex items-center gap-2 lg:mb-0 md:mb-0 mb-4'>
           <li><FaPhoneVolume  className='text-green lg:text-[2rem] md:text-[2rem] text-xl animate-spin scale-125'/></li>
           <li className='font-semibold'>
            <h1 className='lg:text-sm md:text-sm text-xs font-bold text-green'>TEL</h1>
            <p className='lg:text-sm md:text-sm text-xs'>+2348064221146</p>
           </li>
         </ul>

         <ul className='flex items-center gap-2 lg:mb-0 md:mb-0 mb-4'>
           <li><FaFax  className='text-green lg:text-[2rem] md:text-[2rem] text-xl animate-spin rotate-6'/></li>
           <li className='font-semibold'>
            <h1 className='lg:text-sm md:text-sm text-xs font-bold text-green'>FAX</h1>
            <p  className='lg:text-sm md:text-sm text-xs'>080-6422-1146</p>
           </li>
         </ul>

         <ul className='flex items-center gap-2 lg:mb-0 md:mb-0 mb-4'>
           <li><FaGooglePlus  className='text-green lg:text-[2rem] md:text-[2rem] text-xl animate-pulse'/></li>
           <li className='font-semibold'>
            <h1 className='lg:text-sm md:text-sm text-xs font-bold text-green'>E-MAIL</h1>
            <p  className='lg:text-sm md:text-sm text-xs'>lisak@gmail.com</p>
           </li>
         </ul>
        </div>
         
    </div>
  )
}

export default Footer