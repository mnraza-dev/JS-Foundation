import React from 'react'

import HamburgerDrawer from './HamburgerDrawer';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 bg-white border-b-2 drop-shadow-sm shadow-sm border-gray-200 h-[80px]'>

      <div className=' flex items-center'>

        <HamburgerDrawer />

        <img className='w-[160px] h-[60px] cursor-pointer' src={'https://assets.inshorts.com/website_assets/images/logo_inshorts.png'} alt="Logo" />
      </div>


    </div>
  )
}

export default Navbar