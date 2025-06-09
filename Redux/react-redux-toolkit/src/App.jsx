import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";
const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button aria-label="Reset value" onClick={() => dispatch(reset())}>
        Reset
      </button>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        aria-label="Increment by amount"
        onClick={() => dispatch(incrementByAmount(Number(amount)))}
      >
        Inc by Amount
      </button>
    </div>
  );
};

export default App;
