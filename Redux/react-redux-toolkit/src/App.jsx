import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";
const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Count: {count}</h1>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>+</button>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>-</button>
      <button aria-label="Reset value" onClick={() => dispatch(reset())}>Reset</button>

    </div>
  );
};

export default App;
