import React from 'react'
import LogIn from './components/LogIn'
import Register from './components/Register'
import  Home  from './Home'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            
            
        </Routes>
        
    </BrowserRouter>
  )
}
