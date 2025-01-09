let state = {
  count: 0,
};
function increment() {
  /**
   * Mutating the state
   * 
   * state.count = state.count + 1;
   * 
   * Not Mutating way
   * 
   */
  state = { ...state, count: (state.count += 1) };
}
console.log("'count' before increment: ", state);
increment();
console.log(state);
increment();
console.log(state);
increment();
console.log(state);
