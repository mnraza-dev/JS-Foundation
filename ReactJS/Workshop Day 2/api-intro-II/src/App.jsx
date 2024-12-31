import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [singleCountry, setSingleCountry] = useState();
  const [singleCity, setSingleCity] = useState();
  const [submit, setSubmit] = useState(false);

  const getCountries = async () => {
    try {
      const countryList = await axios.get('https://countriesnow.space/api/v0.1/countries/');
      setCountry(countryList.data.data);
      console.log(countryList.data);

    } catch (error) {
      console.log(error);

    }
  }
  const fetchCities = async (scountry) => {
    setSubmit(false);
    setSingleCity(null);
    setSingleCountry(scountry);

    const findCities = country.find((item) => item.country === scountry);

    setCity(findCities.cities);
    console.log(findCities.cities);

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
  const handleClick = (e) => {
    e.preventDefault();

    if (singleCity && singleCountry) {
      setSubmit(true);
      console.log(singleCity, singleCountry);
    }
  }
  useEffect(() => {
    getCountries();
    getCities();

  }, [])
  return (
    <div className='h-screen'>
      <h1 className="mb-10 text-6xl font-bold underline">
        Select Your Hometown!
      </h1>
      <div className=' flex justify-center items-center gap-6'>
        {/* Country List */}
        <form onSubmit={handleClick} className='flex justify-center items-center gap-4'>

          <select className='w-1/2 p-2 rounded-full' name="country" onChange={(e) => fetchCities(e.target.value)} id="" value={singleCountry}>
            <option className='rounded-full' disabled selected hidden value="">Select Country</option>
            {
              country?.map((item, index) => {
                return <option key={index} value={item.country}>{item.country}</option>
              })
            }
          </select>

          {/* City List */}

          <select onChange={(e) => setSingleCity(e.target.value)} value={singleCity} className='w-1/2 p-2 rounded-full' name="city" id="">
            <option className='rounded-full' disabled selected hidden value="">Select City</option>
            {
              city?.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
              })
            }
          </select>
          <button >Go</button>
        </form>
      </div>
      {
        submit && (
          <div className='flex justify-center items-center mt-10'>
            <div className='user_Wrapper'>
              <div className='user'>
                <h3 className='text-2xl font-semibold'>Your Hometown is <span className='font-bold'>{singleCountry}</span>, &nbsp;
                  <span className='font-bold text-gray-400'>{singleCity}</span></h3>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App