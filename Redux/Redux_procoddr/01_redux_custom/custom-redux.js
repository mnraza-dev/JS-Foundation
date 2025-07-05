export function customCreateStore(reducer) {
  let state;
  const listeners = [];

  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
      return action;
    },

    subscribe(Listener) {
      listeners.push(Listener);
    },
  };

  store.dispatch({ type: "@@INIT" });

  return store;
}
