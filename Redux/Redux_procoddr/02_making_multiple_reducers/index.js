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
    case "INCREASE_CART_QUANTITY":
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((item) => {
            if (item.productId === action.payload.productId) {
              return {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              };
            }
            return item;
          }),
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
  },
});

store.dispatch({
  type: "ADD_TO_CART",
  payload: {
    productId: 11,
  },
});
store.dispatch({
  type: "INCREASE_CART_QUANTITY",
  payload: {
    productId: 1,
    quantity: 2,
  },
});
store.dispatch({
  type: "REMOVE_FROM_CART",
  payload: {
    productId: 1,
  },
});
