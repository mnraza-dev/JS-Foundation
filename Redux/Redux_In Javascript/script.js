import { createStore } from "redux";

const initialState = {
  name: "John",
  age: 30,
  count: 0,
};

function reducer(state = initialState, action) {
  if (action.type === "post/increment") {
    return { ...state, count: (state.count += 1) };
  } else if (action.type === "post/decrement") {
    return { ...state, count: (state.count -= 1) };
  }

  return state;
}

const store = createStore(reducer);

console.log(store);
console.log(store.getState());

store.dispatch({ type: "post/increment" });

console.log(store.getState());