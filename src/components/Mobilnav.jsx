import React, { useState } from 'react'
import Alert from './Alert';
import { IoMdMenu } from 'react-icons/io';

const Mobilnav = () => {
  const [ShowAlert, setShowAlert] = useState(false);

  const handleOnClose = () => setShowAlert(false);

  return (
    <div >
         <button onClick={() => setShowAlert(true)}  className='outline-none flex items-center text-green'><IoMdMenu size={30}/></button>
        <Alert onClose={handleOnClose} Visible={ShowAlert}/>
    </div>
   
  )
}

export default Mobilnav;