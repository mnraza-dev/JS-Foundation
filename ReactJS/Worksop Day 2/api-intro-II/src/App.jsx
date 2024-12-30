import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const getCountries = async () => {
    try {
      const countryList = await axios.get('https://countriesnow.space/api/v0.1/countries/');
      setCountry(countryList.data.data);
      console.log(countryList.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const getCities = async () => {
    try {
      const cityList = await axios.get('https://countriesnow.space/api/v0.1/countries/');
      setCountry(cityList.data.data);
      console.log(cityList.data.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getCountries();
    getCities();

  },[])
  return (
    <div className='h-screen'>
      <h1 className="mb-10 text-6xl font-bold underline">
        Select Your Hometown!
      </h1>
      <div className=' flex justify-center items-center gap-6'>
        <select className='w-1/2 p-2 rounded-full' name="country"  id="">
          <option className='rounded-full' disabled selected hidden value="">Select Country</option>
          {
            country?.map((item, index) => {
              return <option key={index} value={item.country}>{item.country}</option>
            })
          }
        </select>
        <select className='w-1/2 p-2 rounded-full' name="city" id="">
          <option className='rounded-full' disabled selected hidden value="">Select City</option>
          {
            city?.map((item, index) => {
              return <option key={index} value={item.city}>{item.city}</option>
            })
          }
        </select>
        <button onClick={() => handleClick}>Go</button>
      </div>
    </div>
  )
}

export default App