import { createStore } from "redux";

const initialState = {
    count: 0
}
const store = createStore({
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
});

console.log(store.getState());

store.dispatch({ type: "increment" });


export default store;