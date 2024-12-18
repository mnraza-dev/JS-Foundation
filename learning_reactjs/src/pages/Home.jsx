import React, { useState } from 'react'
import CountryList from '../components/CountryList';
import Footer from '../components/Footer';

const Home = () => {
    const [query, setQuery] = useState('');

    return (
        <div>
            {/* <Cards /> */}

            <main>

                <CountryList query={query} setQuery={setQuery} />
            </main>

            <Footer />
        </div>
    )
}

export default Home