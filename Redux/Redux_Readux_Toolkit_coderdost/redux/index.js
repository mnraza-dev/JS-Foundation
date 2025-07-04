import { createStore } from "redux";

// store 
const store = createStore(reducer);

// reducer
function reducer(state={amount:100}, action) {
   return state;
}
//global state 

const mydata = store.getState()
console.log(mydata)
