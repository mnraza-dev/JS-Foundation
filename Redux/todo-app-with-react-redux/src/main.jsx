import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { todoReducer } from "./redux/reducer.js";

const store = createStore(todoReducer);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
