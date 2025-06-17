import React, { useEffect } from 'react'
import {IoMdAnalytics, IoMdCall, IoMdClose, IoMdHome, IoMdPaper} from "react-icons//io";
//aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from 'react-router-dom';

const Mobilnav = () =>  {
     
      useEffect(() => {
          AOS.init({duration:1200})
       });


       let {pathname} = useLocation()
            let subpage = pathname.split('/')?.[1]
         
            function Links (type = null){
               let classes = ''
               if(subpage === ''){
                 subpage ="home"
               }
         
               if(type === subpage){
                 classes += "text-green mb-5 flex items-center gap-2 duration-500"
               }else{
                 classes += "flex gap-2 items-center mb-5"
               }
               return classes
            }
  return(
    <div className='w-[100%] min-h-[100vh] fixed z-50 bg-green  inset-0 bg-opacity-50 backdrop-blur-sm flex justify-end items-start'>
     <div data-aos="slide-left" className=' w-[80%] h-[50vh] bg-white  p-2  rounded-l-sm'> 
        <div className='flex justify-end mb-4 px-4'><IoMdClose size={30}  className='cursor-pointer text-green hover:scale-125 duration-700'/></div>
        
        <div>
            <ul className='text-lg mt-6'>
                <Link to={"/"}><li className={Links('home')}><IoMdHome size={25}/>Home</li></Link>
                <Link to={"/project"}><li className={Links('project')}><IoMdPaper size={25}/>Project</li></Link>
                <Link to={"/about"}><li className={Links('about')}><IoMdAnalytics size={25}/>About</li></Link>
                <Link to={"/contact"}><li className={Links('contact')}><IoMdCall size={25}/>Contact</li></Link>
            </ul>
        </div>
     </div>      
    </div>
  )};

  export default Mobilnav