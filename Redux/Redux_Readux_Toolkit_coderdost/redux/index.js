import { createStore } from "redux";

// store
const store = createStore(reducer);

// reducer
function reducer(state = { amount: 100 }, action) {
  if (action.type === "DEPOSIT") {
    return {
      ...state,
      amount: state.amount + action.payload,
    };
  }
  if (action.type === "WITHDRAW") {
    return {
      ...state,
      amount: state.amount - action.payload,
    };
  }
  return state;
}

//global state

const mydata = store.getState();
console.log(mydata);

// dispatch
store.dispatch({ type: "DEPOSIT", payload: 100 });
store.dispatch({ type: "DEPOSIT", payload: 400 });

const mydata2 = store.getState();
console.log(mydata2);
