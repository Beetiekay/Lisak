import React from 'react'
import Home from './Home'
import Footer from '../../components/Footer'
import Lisakq from './Lisakq'
import Green from './Green'
import Testimonial from './Testimonial'

const Landing = () => {
  return (
    <div>
        <Home/>
        <Lisakq/>
        <Green/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Landing