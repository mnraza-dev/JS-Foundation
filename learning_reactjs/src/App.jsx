import React, { useState } from 'react'
import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
import CountryList from './components/CountryList'

function App() {
  const [query, setQuery] = useState('');


  return (
    <div className=' w-full  '>
      {/* <Cards /> */}
      <Header />
      <CountryList query={query} setQuery={setQuery} />

      <Footer />

    </div>
  )
}

export default App