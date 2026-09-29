import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Home from './pages/Home'
import Products from './pages/Products'
// import './App.css'
import { Outlet } from "react-router";
import About from './pages/About'

function App() {
 

  return (
    <>


    
    <Outlet />
     {/* <Home/> */}
     {/* <Products/> */}


    </>
  )
}

export default App
