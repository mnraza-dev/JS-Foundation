import React, { useState } from 'react'
import Cards from './components/Cards'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className=' w-full  '>
      <Header />

      <Outlet />


    </div>
  )
}

export default App