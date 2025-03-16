import React from "react";
import { useReducer } from "react";

// Define initial state as an object
const initialState = {
  count: 0,
};

// Reducer function to manage state
const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCR_BY_TWO":
      return { ...state, count: state.count + action.payload };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const ExampleReducerHook = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h2>Reducer Hook : Example 01</h2>
      <p>
        <strong>{state.count}</strong> {/* Access count property from state */}
      </p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment by One
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement by One
      </button>
      <button
        onClick={() => {
          dispatch({ type: "INCR_BY_TWO", payload: 2 });
        }}
      >
        Increment By Two
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ExampleReducerHook;
