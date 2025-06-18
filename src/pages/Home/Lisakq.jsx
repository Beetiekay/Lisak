import React from 'react'
import image from "../../assets/w2.jpg";

const Lisakq = () => {
  return (
    <div className='bg-white w-[100%] h-[100vh] flex items-center'>
       <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 relative lg:px-36 md:px-10 px-6'>
           {/* ball */}
           <div className='w-8 h-8 bg-green rounded-full absolute top-10 left-32 animate-ping'></div>
           <div className='w-8 h-8 bg-green rounded-full absolute top-10 right-32 animate-ping'></div>
           <div className='w-8 h-8 bg-green rounded-full absolute top-32 right-64 animate-ping'></div>
           <div className='w-8 h-8 bg-green rounded-full absolute top-52 right-80 animate-ping'></div>
           {/* ball */}
          <img src={image} className='w-[100%] lg:h-[70vh] md:h-[70vh] h-[50vh] object-cover rounded-2xl' />
          <div className='py-8 flex items-center relative z-10'>
            <div>
            <h1 className='lg:text-3xl md:text-2xl text-lg font-semibold mb-4'><span className='font-bold text-green'>LISAK</span> WATER COMPANY TREATS THE WATER WITH LATEST TECHNOLOGY.</h1>
            <p className='lg:text-sm md:text-sm text-xs font-semibold'>
                Lisak water companny is equipped with a tons stage pure & fresh water purification system which produces
                the highest quality drinking water available. Our unique purify filteration system eliminate toxic mineral 
                and other agents that affect the taste and healthfulness of water. Our water surpasses all FDA water purification
                requirements, ensuring our customers with the purest and best-testing water money can buy.
            </p>
            </div>
          </div>

       </div>
    </div>
  )
}

export default Lisakq