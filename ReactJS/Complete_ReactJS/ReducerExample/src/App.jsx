import React, { useReducer } from "react";
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

      default:
        return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    </div>
  );
};

export default App;
