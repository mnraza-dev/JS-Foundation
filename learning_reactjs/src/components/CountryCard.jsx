import React from 'react'

const CountryCard = ({ country }) => {
    return (
        <div className='m-4 cursor-pointer drop-shadow-lg shadow-xl rounded-lg hover:scale-110 hover:transition-all hover:ease-in-out hover:duration-300'>
            <div className=' max-w-72' >
                <img src={country.flags.svg}
                    class="object-cover h-48 w-72 rounded-t-lg"
                    alt={country.name.common} />
            </div >

            <div className='bg-gray-100 p-3 pb-6 w-72 rounded-b-lg'>
                <p className='text-2xl'>{country.name.common}</p>

                <p className='text-xl'>Region:
                    <span className='font-semibold'>{country.region}</span>
                </p>
                <p className='text-xl'>Population: <span className='font-semibold italic'>{country.population}</span></p><p className='text-xl'>Capital:  <span className='font-semibold '>{country.capital}</span> </p>
            </div >
        </div >
    )
}

export default CountryCard