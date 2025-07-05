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
      return function unsubscribe() {
        const index = listeners.findIndex((l) => l === Listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      };
    },
  };
  store.dispatch({ type: "@@INIT" });
  return store;
}
