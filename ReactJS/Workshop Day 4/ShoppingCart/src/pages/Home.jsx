import React, { useState } from 'react';
import Footer from '../components/Footer';
import { faker } from '@faker-js/faker';

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [products] = useState(productsArray);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-black h-[200px] text-white py-6 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
          <p className="text-lg mt-2">Find the best products at amazing prices!</p>
        </div>
      </div>
      <main className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-200 rounded-lg  p-4 flex flex-col items-center transform transition-transform hover:scale-105 drop-shadow-lg shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {product.name}
              </h2>
              <p className="text-gray-600 text-center mt-2">${product.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
