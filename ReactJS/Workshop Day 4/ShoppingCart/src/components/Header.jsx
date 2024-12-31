import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <span>Raect Context API - Shopping Cart</span>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Header