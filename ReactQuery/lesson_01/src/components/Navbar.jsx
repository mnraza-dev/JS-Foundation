import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='bg-gradient-to-l from-yellow-500 to-orange-400 text-white p-4'>
            <nav>
                <ul className='flex gap-4'>
                    <li><Link className='text-gray-900 hover:text-gray-50 transition-all ease-in-out delay-300' to="/">Home</Link></li>
                    <li><Link className='text-gray-900 hover:text-gray-50 transition-all ease-in-out delay-300' to="/traditional">Traditional</Link></li>
                    <li><Link className='text-gray-900 hover:text-gray-50 transition-all ease-in-out delay-300' to="/react-query">React Query</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar