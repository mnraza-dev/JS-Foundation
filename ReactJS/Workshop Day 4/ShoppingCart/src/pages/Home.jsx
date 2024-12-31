import React, { useState } from 'react';
import Footer from '../components/Footer';
import { faker } from '@faker-js/faker';
import SingleProduct from '../components/SingleProduct';

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
            <SingleProduct key={product.id} product={product} />  
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
