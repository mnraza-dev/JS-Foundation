import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            Discover. Shop. Repeat.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Welcome to <span className="font-semibold text-green-600 dark:text-green-400">ShoppyCart</span> — your go-to destination for effortless online shopping. Browse thousands of products with confidence.
          </p>
          <div className="flex gap-4">
            <Link
              to="/shop"
              className="px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-700 transition"
            >
              Start Shopping
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 text-green-600 bg-white border border-green-600 rounded-md hover:bg-green-50 transition dark:bg-transparent dark:text-green-400 dark:border-green-400 dark:hover:bg-gray-800"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Optional Image */}
        <div className="hidden md:block">
          <img
            src="/add-to-cart.svg"
            alt="Shopping illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
