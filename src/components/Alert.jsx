import React, { useEffect } from 'react'
import {IoMdAnalytics, IoMdCall, IoMdClose, IoMdHome, IoMdPaper} from "react-icons//io";
//aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

export default function Alert({Visible, onClose}) {
    if (!Visible) return null;
     
      useEffect(() => {
          AOS.init({duration:1200})
       })
  return(
    <div className='w-[100%] min-h-[100vh] fixed z-50 bg-green  inset-0 bg-opacity-50 backdrop-blur-sm flex justify-end items-start'>
     <div data-aos="slide-left" className='  w-[80%] h-[50vh] bg-white  p-2  rounded-l-sm'> 
        <div className='flex justify-end mb-4 py-5'><IoMdClose size={30} onClick={onClose}  className='cursor-pointer text-green hover:scale-125 duration-700'/></div>
        
        <div>
            <ul className='text-lg mt-6'>
                <Link><li className='hover:text-green mb-5 flex gap-2 duration-500'><IoMdHome size={25}/>Home</li></Link>
                <Link><li className='hover:text-green mb-5 flex gap-2  duration-500'><IoMdPaper size={25}/>Project</li></Link>
                <Link><li className='hover:text-green mb-5 flex gap-2  duration-500'><IoMdAnalytics size={25}/>About</li></Link>
                <Link><li className='hover:text-green mb-3 flex gap-2 duration-500'><IoMdCall size={25}/>Contact</li></Link>
            </ul>
        </div>
     </div>      
    </div>
  )};