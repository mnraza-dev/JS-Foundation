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
  return state;
}

const store = createStore(reducer);
console.log(store)
console.log(store.getState());
store.dispatch({ type: "increment" });
console.log(store.getState());