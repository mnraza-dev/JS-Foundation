import React, { useEffect } from 'react'

const CountryDetail = () => {
  const countryName = new URLSearchParams(location.search).get('name');




  useEffect(() => {
    const countries = fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then(data => console.log(data))


  }, [])
  return (
    <main className='flex flex-col justify-center items-center h-screen '>
      {/* Back Button */}
      <div className='z-10 bg-black p-2 px-4 rounded-md drop-shadow-sm text-white flex items-center gap-4 absolute top-28 left-20'>
        <i className='fa-solid text-2xl  fa-arrow-left'></i> <button type='button' className='font-semibold text-2xl' onClick={() => window.history.back()}>Go Back</button>
      </div>
      <h1 className='mt-6 text-4xl text-center'>Country Detail</h1>

      <div className='h-full w-full  rounded-xl drop-shadow-lg shadow-lg flex items-center justify-center  '>

      </div>
    </main >


  )
}

export default CountryDetail