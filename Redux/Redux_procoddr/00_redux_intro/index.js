import { createStore } from "redux";
const initialState = {
  count: 0,
};
const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENT_BY_AMOUNT = "incrementByAmount";
const DECREMENT_BY_AMOUNT = "decrementByAmount";
const RESET = "reset";

function reducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }
  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }
  if (action.type === INCREMENT_BY_AMOUNT) {
    return {
      count: state.count + action.payload,
    };
  }
  if (action.type === DECREMENT_BY_AMOUNT) {
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
store.dispatch({ type: INCREMENT_BY_AMOUNT, payload: 121 });
store.dispatch({ type: DECREMENT_BY_AMOUNT, payload: 11 });
// store.dispatch({ type: RESET });
