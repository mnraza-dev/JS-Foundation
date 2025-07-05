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
  if (action.type === "reset") {
    return { count: (state.count = 0) };
  }
  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("State changed:", store.getState());
});

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "reset" });
