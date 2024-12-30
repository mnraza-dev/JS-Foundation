import React from 'react'

const Search = ({ setQuery }) => {
    return (
        <div className='bg-gray-100 px-4 drop-shadow-md shadow-md  rounded-lg  flex items-center'>
            <i className='fa-solid fa-magnifying-glass text-gray-400'></i>
            <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type='text'
                className='bg-gray-100 w-96 p-2 border-none   outline-none' placeholder='Search...' />
        </div>
    )
}

export default Search