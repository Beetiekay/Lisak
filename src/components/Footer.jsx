import React from 'react'
import edge from "../assets/comp1.png"
import { FaFax, FaGooglePlus, FaPhoneVolume } from "react-icons/fa";
import image from "../Favicon/Lisak.png"
import { TiLocation } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-[100%] lg:h-[72vh] md:h-[55vh] h-[80vh] bg-green bg-opacity-20 relative overflow-hidden'>
        <img src={edge}  className='absolute lg:-top-44 md:-top-24 top-0 animate-spin scale-125 duration-700'/>
        <div className='relative lg:py-40  md:py-52 py-48 lg:px-40 md:px-10 px-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
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
         <div className='flex justify-center lg:-mt-10 md:-mt-14 -mt-44'>
           <div className=' w-[80%] h-[40vh] relative lg:-top-24 md:-top-32 top-8'>
              <div className='flex justify-center'><img src={image} className='w-36'/></div>
               <h1 className='text-2xl text-center font-bold text-green mb-4'>Lisak</h1>

               <div className='flex justify-center'><TiLocation size={30} className='text-green animate-bounce'/></div>
                <p className='text-center mb-4 text-sm font-semibold'>KM4 Opposite Katarda Headquaters, kano road, Katsina State</p>
                <div className='bg-green rounded-xl p-1 flex justify-center'><p className='text-white text-xs'>Copyright@2025Lisak | All rights reserved</p></div>
           </div>
         </div>
    </div>
  )
}

export default Footer