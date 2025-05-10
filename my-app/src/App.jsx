import { useState } from 'react'
import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import PrivateRoutes from './components/privateRoutes.jsx';

import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/profile'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
         <Route element={<PrivateRoutes/>}>
         <Route path='/Profile' element={<Profile/>}/>
         </Route>
      </Routes>
    </BrowserRouter>
       
  )
}

export default App
