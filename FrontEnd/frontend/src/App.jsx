import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import {Home} from './components/Home'
export const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App