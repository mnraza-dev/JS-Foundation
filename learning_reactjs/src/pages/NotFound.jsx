import React from 'react'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className=' bg-black p-2 px-4 rounded-md drop-shadow-sm text-white flex items-center gap-4 absolute top-5 left-6'>
               <i className='fa-solid text-2xl  fa-arrow-left'></i> <button type='button' className= 'font-semibold text-2xl' onClick={() => window.history.back()}>Go Back</button>
            </div>
            <p className='text-9xl font-semibold' >404</p>
            <h1 className='text-4xl text-center'>
                Page Not Found</h1></div>
    )
}

export default NotFound