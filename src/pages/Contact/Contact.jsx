import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import bot from "../../assets/water.png"
import { FaFacebookF, FaHandHolding, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
   <div className='w-[100%] h-[100vh] relative bg-opacity-20'>
    <div className='lg:mb-6 md:mb-6 mb-24'>
       <Navigation/>
            
         <p className='text-center text-sm mb-2 font-semibold text-green mt-20'>OUR SUCCESS IN NUMBERS</p> 
         <h1 className='text-3xl text-center font-semibold mb-2'>Let's Work Together</h1>
          <p className='text-center lg:px-0 md:px-0 px-4 font-semibold'>
            Share Your Vision For Your Next Project Us. Please Contact Us For Basic Questions, We are Here To Help!
          </p>
       <div className='h-[80vh] w-[100%] relative lg:top-6 md:top-6 top-28 flex items-center justify-center'>
        <img src={bot} className='absolute lg:-top-5 md:top-5 -top-20 w-52'/>
         <form action='' className='bg-green lg:px-4 md:px-4 px-6 hover:bg-opacity-100 lg:w-[50%] md:w-[60%] w-[85%] grid lg:grid-cols-2 md:grid-cols-1 gap-4 py-10 rounded-2xl bg-opacity-70 shadow-md p-2'>
              <div className='space-y-2 py-2'>
                <Input placeholder=" Enter Your Name" />
                <Input placeholder=" Phone No"/>
                <Input placeholder=" Enter Your Email"/>
                <Input placeholder=" Service Interest In"/>
              </div>
              <div>
               <input type='message' placeholder=' Tell Us About Your Project..' required className='w-[100%] text-green font-semibold lg:h-[30vh] md:h-[20vh] h-[25vh] outline-none rounded-lg'/>
              </div>
              <div><button className='p-2 px-6 w-[100%] hover:opacity-40 duration-500 text-sm rounded-lg outline-none bg-white text-green'>Submit</button></div>
         </form>
       </div>
       <h1 className='text-center text-sm mb-2 lg:mt-0 md:mt-0 mt-36'>Get In Touch With Us</h1>
       <div className='flex justify-center '>
         <div className='flex gap-2 relative z-10 lg:w-[12%] md:w-[22%]'>
           <a href='' ><button className='bg-green text-white p-2 rounded-full hover:scale-110 outline-none'><FaFacebookF size={20}/></button></a>
           <a href='' ><button className='bg-green text-white p-2 rounded-full hover:scale-110 outline-none'><FaInstagram size={20}/></button></a>
           <a href='' ><button className='bg-green text-white p-2 rounded-full hover:scale-110 outline-none'><FaTwitter size={20}/></button></a>
           <a href='' ><button className='bg-green text-white p-2 rounded-full hover:scale-110 outline-none'><FaLinkedin size={20}/></button></a>
         </div>
       </div>
    </div>
     <div className='w-[100]'><Footer/> </div>
   </div>
  )
}

export default Contact