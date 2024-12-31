import React from 'react'

const Cart = ({ cart, setCart }) => {
  return (
    <div><h1>
      My Cart</h1>

      <br />
      <span>
        Total : ₹ 340

      </span>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>
            <button onClick={() => setCart(cart.filter((p) => p.id !== product.id))}>Remove</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Cart