import React from 'react'

const CountryDetail = () => {
  return (
    <main className='flex items-center h-screen '>
      {/* Back Button */}
      <div className='z-10 bg-black p-2 px-4 rounded-md drop-shadow-sm text-white flex items-center gap-4 absolute top-28 left-20'>
        <i className='fa-solid text-2xl  fa-arrow-left'></i> <button type='button' className='font-semibold text-2xl' onClick={() => window.history.back()}>Go Back</button>
      </div>
      <div className='h-full w-full  bg-slate-400 rounded-xl drop-shadow-lg shadow-lg flex items-center justify-center  '>
        <h1 className=' text-4xl text-center'>Country Detail</h1>
      </div>
    </main >


  )
}

export default CountryDetail