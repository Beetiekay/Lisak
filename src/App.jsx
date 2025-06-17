import React from 'react'
import Landing from './pages/Home/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'

export default function App() {
  return (
    <BrowserRouter >
         <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/project" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
         </Routes>
       </BrowserRouter>
  )
}
