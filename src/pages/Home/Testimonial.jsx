import React from 'react'
import Tcard from './Tcard'

const Testimonial = () => {
  return (
    <div className=' bg-white overflow-hidden'>
     <h1 className='lg:text-4xl text-2xl font-bold text-center mb-24 text-green'> Feedbacks</h1>
    <div className=' flex justify-center'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[80%] md:w-[85%] w-[100%] relative lg:left-0 md:left-0 left-4 px-6 gap-5'>
        <Tcard name="Lena Pearche" position="Clients" pharagh=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. A illo dolor dignissimos praesentium consectetur? Mollitia?"/>

        <Tcard name="Sophia Bach" position="Clients" pharagh=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. A illo dolor dignissimos praesentium consectetur? Mollitia?"/>

        <Tcard name="Arielle Copper" position="Clients" pharagh=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. A illo dolor dignissimos praesentium consectetur? Mollitia?"/>
      </div>
      </div>
    </div>
  )
}

export default Testimonial