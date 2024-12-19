import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  // const countryName = new URLSearchParams(location.search).get('name');
  const params = useParams()
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then(res => res.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          flag: data.flags.svg,
          population: data.population,
          region: data.region,
          capital: data.capital,
          currencies: Object.values(data.currencies).map(currency => currency.name).join(', '),
          languages: Object.values(data.languages).join(', '),
        })

      });


  }, [])
  return countryData === null ? (
    <h1>Loading.......</h1>
  ) : (
    <main className='flex flex-col justify-center items-center h-autox '>
      {/* Back Button */}
      <div className='z-10 bg-black p-2 px-4 rounded-md drop-shadow-sm text-white flex items-center gap-4 absolute top-28 left-20'>
        <i className='fa-solid text-2xl  fa-arrow-left'></i> <button type='button' className='font-semibold text-2xl' onClick={() => window.history.back()}>Go Back</button>
      </div>
      <h1 className='mt-6 text-4xl text-center'>Country Detail</h1>

      <div className='h-auto p-6 w-[50%] mt-4 mb-6 border border-gray-500 rounded-xl drop-shadow-lg shadow-lg flex justify-around items-center   '>
        <div className='flex flex-col gap-2 p-4  '>
          <h2 className='text-6xl text-black font-semibold'>{countryData.name}</h2>

          <p className='text-2xl'>Native Name: <span className='font-semibold'>{countryData.nativeName}</span></p>
          <p className='text-2xl'>Region: <span className='font-semibold'>{countryData.region}</span></p>
          <p className='text-2xl'>Capital: <span className='font-semibold'>{countryData.capital.join(', ')}</span></p> <p className='text-2xl'>Population: <span className='font-semibold'>{countryData.population.toLocaleString('en-IN')}</span></p>

          <p className='text-2xl'>Currencies: <span className='font-semibold'>{countryData.currencies}</span></p>
          <p className='text-2xl'>Languages: <span className='font-semibold'>{countryData.languages}</span></p>

        </div>
        <div className='w-96'>
          <img src={countryData.flag} alt={countryData.name} className='w-full h-1/2 rounded-t-xl' />

        </div>


      </div>
    </main >
  )
}
export default CountryDetail