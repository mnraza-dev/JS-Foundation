import React from 'react';
import { toast } from 'react-toastify';

const SingleProduct = ({ product, cart, setCart }) => {
  const handleAddToCart = () => {
    setCart([...cart, product]); 
    toast.success(`${product.name} added to the cart!`, {
      position: "top-right",
      autoClose: 3000, 
    });
  };

  const handleRemoveFromCart = () => {
    setCart(cart.filter((p) => p.id !== product.id)); 
    toast.error(`${product.name} removed from the cart!`, {
      position: "top-right",
      autoClose: 4000,
    });
  };

  return (
    <div>
      <div
        key={product.id}
        className="bg-gray-200 rounded-lg p-4 flex flex-col items-center transform transition-transform hover:scale-105 drop-shadow-lg shadow-lg"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          {product.name}
        </h2>
        <p className="text-gray-600 text-center mt-2">
          ₹ {product.price.substring(0, 3)}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={handleRemoveFromCart}
            className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
