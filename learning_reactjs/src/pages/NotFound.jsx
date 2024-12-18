import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
    const error = useRouteError();
    console.log(error);


    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className=' bg-black p-2 px-4 rounded-md drop-shadow-sm text-white flex items-center gap-4 absolute top-5 left-6'>
                <i className='fa-solid text-2xl  fa-arrow-left'></i> <button type='button' className='font-semibold text-2xl' onClick={() => window.history.back()}>Go Back</button>
            </div>

            <p className='text-6xl font-semibold mb-10' >
                {error.data}
            </p>
            <div className='text-9xl flex items-center gap-4 font-semibold' >

                <i className="text-red-700  fa-solid fa-triangle-exclamation"></i>
                <span className='text-9xl font-semibold' >{error.status}</span>
                <span className='text-4xl text-center'>
                    {error.statusText}</span>
            </div>
        </div>
    )
}

export default NotFound