import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice.js";
import { useState } from "react";
import Form from "./comp/Form.jsx";
export default function App() {
  const [input, setinput] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter</h1>
      <h2 style={{ color: "red", fontSize: "40px" }}>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br /> <br />
      <input
        type="number"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => dispatch(incrementByAmount(Number(input)))}>
        Increment by Amount
      </button>
      <Form />
    </div>
  );
}
