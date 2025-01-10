import { createStore } from "redux";
import { myCreateStore } from "./my-redux";

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


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const myStore = myCreateStore(reducer);
console.log(myStore);


// console.log(store);
myStore.subscribe(() => {
  console.log(myStore.getState());
});

myStore.dispatch({ type: "post/decrement" });
// console.log(myStore.getState());

myStore.dispatch({ type: "post/incrementByAmount", payload: 5 });
// console.log(myStore.getState());

myStore.dispatch({ type: "post/deceremntByAmount", payload: 1 });
// console.log(myStore.getState());
