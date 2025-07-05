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
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT_BY_AMOUNT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case RESET:
      return { count: (state.count = 0) };
    default:
      return state;
  }
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  document.getElementById("count").innerText = store.getState().count;

  console.log("State changed:", store.getState());
});

// store.dispatch({ type: INCREMENT });
// store.dispatch({ type: INCREMENT });
// store.dispatch({ type: DECREMENT });
// store.dispatch({ type: RESET });
// store.dispatch({ type: INCREMENT_BY_AMOUNT, payload: 121 });
// store.dispatch({ type: DECREMENT_BY_AMOUNT, payload: 11 });

// DOM manipulation to display the count
document.getElementById("increment").addEventListener("click", () => {
  store.dispatch({ type: INCREMENT });
});

document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch({ type: DECREMENT });
});

document.getElementById("reset").addEventListener("click", () => {
  store.dispatch({ type: RESET });
});
document.getElementById("incrementByAmount").addEventListener("click", () => {
  store.dispatch({ type: INCREMENT_BY_AMOUNT, payload: 10 });
});
document.getElementById("decrementByAmount").addEventListener("click", () => {
  store.dispatch({ type: DECREMENT_BY_AMOUNT, payload: 10 });
});
