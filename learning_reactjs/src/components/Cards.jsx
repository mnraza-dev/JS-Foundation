import React, { useEffect, useState } from 'react'
import CardItem from './CardItem';

const Cards = () => {
    const [products, setProducts] = useState(null);
    const getProducts = async () => {
        const products = await fetch('https://dummyjson.com/products');
        const data = await products.json();
        setProducts(data.products);
        console.log(data.products);

    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className=' '>
            <h1 className='p-2 pb-4 text-3xl font-bold'>Products</h1>
            <div className=' flex flex-wrap gap-4 justify-around'>

                {
                    products && products.map((product) => (
                        <CardItem key={product.id} product={product} />
                    ))}

            </div>
        </div>
    )
}

export default Cards