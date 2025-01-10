export function myCreateStore(reducer) {
  let state;
  let listeners = [];

  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe(Listener) {
      listeners.push(Listener);
    },
  };

  store.dispatch({ type: "@@INIT" });
  return store;
}
