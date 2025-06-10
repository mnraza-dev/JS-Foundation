import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="relative w-full max-w-[240px] bg-green-50 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-all duration-300">
      <Link to={`/product/${product.id}`}>
        <img
          className="  rounded-t-lg w-full h-48 bg-cover"
          src={product.image}
          alt="product image"
        />
      </Link>
      <div className="px-5 py-2 pb-5 flex flex-col  justify-between">
        <div className="">
          <p className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </p>
          <p className="text-sm font-semibold my-1 tracking-tight text-gray-900 dark:text-amber-400">
            {product.category.toUpperCase()}
          </p>
          <p className="text-lg font-semibold text-gray-900 dark:text-amber-400">
          ₹{product.price.toLocaleString()}
          </p>
        </div>

        <div className="  mt-2 flex justify-center gap-2">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="cursor-pointer bg-green-800 hover:bg-green-900 px-2 py-1 text-xs text-gray-200 w-fit rounded-md"
          >
            Add to cart
          </button>
          <button className="px-2 py-1 text-xs text-green-600 bg-white border border-green-600 rounded-md hover:bg-green-50 transition dark:bg-transparent dark:text-green-400 dark:border-green-400 dark:hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
