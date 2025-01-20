import React, { useReducer, useState } from "react";
const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "ïncrementBy":
      return {
        ...state,
        count: state.count + incrementBy,
      };

    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [incrementBy, setIncrementBy] = useState(0);

  return (
    <div>
      <h1>
        <span
          style={{
            color: "green",
          }}
        >
          useReducer
        </span>
        is a hook that is similar to useState
      </h1>
      <h2>
        But it is designed for complex state objects , It allows you to manage
        state in a functional, immutable way
      </h2>

      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <h2>Increment By Example</h2>
      <input
        type="text"
        name="incCount"
        placeholder="Increment By"
        onChange={(e) => setIncrementBy(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "incrementBy", payload: incrementBy })}
      >
        Increment By {incrementBy}
      </button>

      
    </div>
  );
};

export default App;
