import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='sticky top-0 bg-black flex justify-between px-4 py-6 h-[80px] z-50 text-white items-center'>
      <span className='text-xl'> Shopping Cart</span>
      <div className='flex gap-2 px-6 text-xl'>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  )
}

export default Header