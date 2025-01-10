import { createStore } from "redux";

const initialState = {
  name: "John",
  age: 30,
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/increment":
      return { ...state, count: (state.count += 1) };
    case "post/decrement":
      return { ...state, count: (state.count -= 1) };
    case "post/incrementByAmount":
      return { ...state, count: (state.count += action.payload) };
    case "post/deceremntByAmount":
      return { ...state, count: (state.count -= action.payload) };
    case "post/reset":
      return { ...state, count: 0 };
  }
}
//   if (action.type === "post/increment") {
//     return { ...state, count: (state.count += 1) };
//   } else if (action.type === "post/decrement") {
//     return { ...state, count: (state.count -= 1) };
//   } else if (action.type === "post/incrementByAmount") {
//     return { ...state, count: (state.count += action.payload) };
//   } else if (action.type === "post/deceremntByAmount") {
//     return { ...state, count: (state.count -= action.payload) };
//   } else if (action.type === "post/reset") {
//     return { ...state, count: 0 };
//   }

//   return state;

const store = createStore(reducer);

console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({ type: "post/increment" });
store.dispatch({ type: "post/decrement" });
// store.dispatch({ type: "post/increment" });
store.dispatch({ type: "post/incrementByAmount", payload: 25 });
store.dispatch({ type: "post/deceremntByAmount", payload: 5 });
store.dispatch({ type: "post/deceremntByAmount", payload: 5 });
