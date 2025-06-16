import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Favicon/Lisak.png"
import { TiMessageTyping } from "react-icons/ti"

const Navigation = () => {
  return (
    <div className='fixed flex items-center lg:justify-around md:justify-around justify-between lg:px-0 md:px-0 px-4 w-[100%] z-20 py-2 backdrop-blur-sm'>
        <div><img src={logo} className='lg:w-20 md:w-20 w-16'/></div>
        <ul className='lg:flex md:flex hidden gap-6'>
            <Link ><li className='hover:border-b-2 hover:border-b-green duration-500'>Home</li></Link>
            <Link ><li className='hover:border-b-2 hover:border-b-green duration-500'>Projects</li></Link>
            <Link ><li className='hover:border-b-2 hover:border-b-green duration-500'>About</li></Link>
            <Link ><li className='hover:border-b-2 hover:border-b-green duration-500'>Contact</li></Link>
        </ul>

        <div><TiMessageTyping className='text-green text-4xl animate-pulse'/></div>
    </div>
  )
}

export default Navigation