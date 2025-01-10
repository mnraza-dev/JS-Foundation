import {createStore} from "redux";

console.log(createStore);




let state = {
  name: "John",
  age: 30,
  count: 0,
};

function reducer(state, action) {
  if (action.type === "post/increment") {
    return { ...state, count: (state.count += 1) };
  } else if (action.type === "post/decrement") {
    return { ...state, count: (state.count -= 1) };
  }

  return state;
}

// state = reducer(state);
console.log(
  reducer(state, {
    type: "post/increment",
  })
);

console.log(
  reducer(state, {
    type: "post/increment",
  })
);

console.log(
  reducer(state, {
    type: "post/increment",
  })
);

// console.log(state);
