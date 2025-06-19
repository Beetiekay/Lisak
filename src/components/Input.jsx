import React from 'react'

const Input = ({...props}) => {
  return (
    <div>
        <input {...props} className='w-[100%] text-green font-semibold rounded-lg outline-none py-2' required/>
    </div>
  )
}

export default Input