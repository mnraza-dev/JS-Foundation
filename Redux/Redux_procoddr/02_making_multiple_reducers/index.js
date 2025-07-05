import { createStore } from "redux";
import { productsList } from "./productsList.js";
const initialState = {
  products: productsList,
  cartItems: [],
  wishlistItems: [],
};

function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter(
            (item) => item.productId !== action.payload.productId
          ),
        ],
      };
    default:
      return state;
  }
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("State changed:", store.getState());
});

store.dispatch({
  type: "ADD_TO_CART",
  payload: {
    productId: 1,
    quantity: 1,
  },
});

store.dispatch({
  type: "REMOVE_FROM_CART",
  payload: {
    productId: 1,
    quantity: 1,
  },
});
