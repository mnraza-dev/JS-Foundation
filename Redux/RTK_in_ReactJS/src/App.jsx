import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";
const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App using RTK</h1>
      <p>
        Count : <strong>{count.value}</strong>{" "}
      </p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default App;
