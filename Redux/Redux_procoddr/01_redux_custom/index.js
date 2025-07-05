import { customCreateStore } from "./custom-redux";

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
const store = customCreateStore(reducer);

store.subscribe(() => {
  console.log("State changed:", store.getState());
});

const unsubscribe1= store.subscribe(() => {
  console.log("Another Subscribe:");
});

const unsubscribe = store.subscribe(() => {
  console.log("Unsubscribe example:");
});

unsubscribe();
unsubscribe1();

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREMENT_BY_AMOUNT, payload: 5 });
store.dispatch({ type: DECREMENT_BY_AMOUNT, payload: 2 });
store.dispatch({ type: RESET });
