import React from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { ListOrdered } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
  ];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Your cart is empty 🛒
            <br />
            <Link
              to="/shop"
              className="text-green-600 underline dark:text-green-400"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm dark:bg-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Price: ₹{item.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Summary
              </h3>
              <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
                <span>Total Items:</span>
                <span>
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between mb-4 text-gray-700 dark:text-gray-300">
                <span>Total Price:</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <button className="flex items-center justify-center gap-2 w-full px-4 py-2 mt-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                <ShoppingCartIcon className="w-5 h-5" />
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
