import { createStore } from "redux";
import {productList} from "./productList";

const initialState = {
  products: productList,
  cartItems: [],
  wishlist: [],
};

function reducer(state = initialState, action) {}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store);

export default store;
