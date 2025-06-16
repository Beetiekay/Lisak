import React from 'react'
import Landing from './pages/Home/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter >
         <Routes>
            <Route path="/" element={<Landing/>}/>
         </Routes>
       </BrowserRouter>
  )
}
