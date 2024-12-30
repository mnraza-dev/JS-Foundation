import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import Search from './Search'
import { useEffect } from 'react'
import CountryCard from './CountryCard'


const CountryList = ({ query, setQuery }) => {
    const [countryList, setCountryList] = useState(null);
    const filteredCountryList = countryList?.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()));

    const getCountries = async () => {
        const countries = await fetch('https://restcountries.com/v3.1/all');
        const data = await countries.json();
        setCountryList(data);
        console.log(data?.area);
    }
    useEffect(() => {
        getCountries();
    }, [])


    return (
        <div className='px-16 '>
            <section
                className='mb-6 mt-6 flex justify-between items-center gap-4'>
                <Search setQuery={setQuery} />
                <Dropdown />
            </section>
            <section className='flex flex-wrap justify-center  items-center'>
                {
                    filteredCountryList && filteredCountryList.map((country) => (
                        <CountryCard key={country.name.common} country={country} />
                    ))
                }
            </section>
        </div>
    )
}

export default CountryList