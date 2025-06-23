import React from 'react'

const Green = () => {
  return (
    <div className='w-[100%] lg:h-[70vh] md:h-[50vh] h-fit relative n flex justify-center items-center bg-white px-4'>
        <div className='lg:w-[50%] md:w-[80%] overflow-hidden  rounded-2xl shadow-md py-8 px-6'>
            <h1 className='text-4xl font-semibold text-green mb-2'>Going Green <span>?</span></h1>
            <p className=' opacity-85'>
                <span className='font-bold'>Lisak water company</span> Cares for your health, at the same time, we also care for health of our 
                mother earth. Our company not only take the step to recyle, we are also the first company in Katsina to
                to introduce pure and clean water.
            </p>
        </div>
    </div>
  )
}

export default Green