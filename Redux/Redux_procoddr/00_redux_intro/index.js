import { createStore } from "redux";
const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
  if (action.type === "incrementByAmount") {
    return {
      count: state.count + action.payload,
    };
  }
   if (action.type === "decrementByAmount") {
    return {
      count: state.count - action.payload,
    };
  }
  if (action.type === "reset") {
    return { count: (state.count = 0) };
  }
  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("State changed:", store.getState());
});

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
store.dispatch({ type: "incrementByAmount", payload: 121 });
store.dispatch({ type: "decrementByAmount", payload: 11 });
store.dispatch({ type: "reset" });
