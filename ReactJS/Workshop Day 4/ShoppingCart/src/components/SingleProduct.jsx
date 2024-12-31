import React from 'react'

const SingleProduct = ({ product }) => {
    return (
        <div>
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
                <p className="text-gray-600 text-center mt-2">₹ {product.price.substring(0, 3)}</p>
                <button onClick={() => alert('Product added to cart!')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default SingleProduct