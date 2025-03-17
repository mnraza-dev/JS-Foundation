import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from "./redux/counterSlice";
const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inputRef = useRef();
  return (
    <div>
      <h1>Counter App using RTK</h1>
      <p>
        Count : <strong>{count.value}</strong>{" "}
      </p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <input type="text" ref={inputRef} placeholder="ADD VALUES" />
      <button
        onClick={() =>
          dispatch(incrementByValue(parseInt(inputRef.current.value)))
        }
      >
        INCR BY Value
      </button>
    </div>
  );
};

export default App;
