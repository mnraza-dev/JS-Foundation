import React from 'react'
import Home from './pages/Home'
import Header from './components/Header';
import Cart from './pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App