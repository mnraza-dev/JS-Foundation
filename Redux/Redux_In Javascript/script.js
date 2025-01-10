import { createStore } from "redux";

let reduxState = {
  name: "John",
  age: 30,
  count: 0,
};

function reducer(state = reduxState, action) {
  if (action.type === "post/increment") {
    return { ...state, count: (state.count += 1) };
  } else if (action.type === "post/decrement") {
    return { ...state, count: (state.count -= 1) };
  }

  return state;
}

const store = createStore(reducer);

console.log(store.getState());
