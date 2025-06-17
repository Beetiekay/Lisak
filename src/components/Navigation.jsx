import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from "../Favicon/Lisak.png";
import { TiMessageTyping, TiThMenu } from "react-icons/ti";
import Mobilnav from './mobil/Mobilnav';

const Navigation = () => {

  let {pathname} = useLocation()
     let subpage = pathname.split('/')?.[1]
  
     function Links (type = null){
        let classes = ''
        if(subpage === ''){
          subpage ="home"
        }
  
        if(type === subpage){
          classes += "font-semibold border-b-2 border-b-green duration-500"
        }else{
          classes += " "
        }
        return classes
     }
  return (
    <div className='w-[100%] fixed left-0 right-0 top-0 flex items-center lg:justify-around md:justify-around justify-between lg:px-0 md:px-0 px-4 z-20 py-2 backdrop-blur-sm'>
        <div><img src={logo} className='lg:w-20 md:w-20 w-16'/></div>
        <ul className='lg:flex md:flex hidden gap-6'>
            <Link to={"/"}><li className={Links('home')}>Home</li></Link>
            <Link to={"/project"}><li className={Links('project')}>Projects</li></Link>
            <Link to={"/about"}><li className={Links('about')}>About</li></Link>
            <Link to={"/contact"}><li className={Links('contact')}>Contact</li></Link>
        </ul>
        <div className='flex gap-2 lg:items-center md:items-center items-center'>
          <TiMessageTyping className='text-green text-4xl animate-pulse'/>

          <div className='lg:hidden md:hidden block'>
            <input type='checkbox' className='peer z-30 opacity-0  transition-transform outline-none absolute w-8 h-8'/>
            <div><TiThMenu className='text-green text-2xl animate-pulse'/></div>
            <div className='hidden peer-checked:block duration-500 relative z-10'><Mobilnav/></div>
         </div>

        </div>
    </div>
  )
}

export default Navigation