import React from 'react'

const Header = () => {
    return (
        <div className=' shadow-md drop-shadow-xl  h-[90px]  flex items-center  justify-between px-20'>
            <h2 className='text-2xl '>
                Where in the world ?
            </h2>

            <p>
                <i className="fa-solid fa-moon mr-2"></i>
                <span className='cursor-pointer' onClick={() => document.body.classList.toggle('dark')}>  Dark theme</span>
            </p>
        </div>
    )
}

export default Header