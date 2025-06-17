import React from 'react'
import Landing from './pages/Home/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact/Contact'

export default function App() {
  return (
    <BrowserRouter >
         <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/contact" element={<Contact/>}/>
         </Routes>
       </BrowserRouter>
  )
}
