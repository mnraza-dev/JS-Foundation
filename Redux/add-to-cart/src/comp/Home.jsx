import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-green-900 py-6 font-semibold px-10">Products</h1>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
