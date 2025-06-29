import React from 'react';
import logo from "../../Favicon/Lisak.png";
import bg from "../../assets/water.png"
import Navigation from '../../components/Navigation';

const Home = () => {
  return (
    <div className='w-[100%] h-[100vh] relative overflow-hidden bg-green bg-opacity-20 flex justify-center items-center'>
        <img src={bg} className='absolute left lg:-bottom-64 md:-bottom-60 -bottom-10'/>
       <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:w-[80%] md:w-[80%] w-[100%] relative lg:px-20 md:px-10 px-2'>
        <Navigation/>
        <div className='flex items-center lg:mb-0 md:mb-0 mb-4'>  
        <div>
        <h1 className='text-3xl font-bold'>Natural Mineral <span className='text-green'>CLEAN WATER</span></h1>
        <p className='text-lg'>High Natural Pure and Clean Water From Nature</p>
        </div>   
        </div>

         <div className='flex justify-end'>
          <div className='lg:w-[60%] md:w-[90%] py-10 bg-green hover:border hover:scale-110 duration-700 px-4 rounded-2xl shadow-sm'>
            <div><img src={logo}/></div>
            <h1 className='text-center text-4xl opacity-75 text-white font-bold'>LISAK</h1>
            <h2 className='text-center font-mono font-semibold text-white opacity-70'>Water Solution</h2>
            <p className='text-center text-white opacity-75'>Solution To Poor Hydration.</p>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Home