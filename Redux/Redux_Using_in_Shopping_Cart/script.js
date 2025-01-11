import { createStore } from "redux";
import { productList } from "./productList";

const initialState = {
  products: productList,
  cartItems: [],
  wishlist: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "cart/addItem":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
  }
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store);

store.dispatch({
  type: "cart/addItem",
  payload: { productId: 1, quantity: 1 },
});
console.log("Fist get state ", store.getState());

export default store;
