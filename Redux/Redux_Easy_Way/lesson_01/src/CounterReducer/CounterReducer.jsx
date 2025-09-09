import { useReducer } from 'react'

const CounterReducer = () => {

  const initialState = 0;
  const [count, dispatch] = useReducer(reducer, initialState);
  
  function reducer(state, action) {
    switch (action) {
      case "INCR":
        return state + 1;
      case "DECR":
        return state - 1;
      case "RESET":
        return 0;
      default:
        return state;
    }
  }
  
  return (
    <div>
      <h1>using useReducer()</h1>
      <h2>Count : {count} </h2>
      <button onClick={() => { dispatch("INCR") }}>Increment</button>
      <button onClick={() => { dispatch("DECR") }}>Decrement</button>
      <button onClick={() => { dispatch("RESET") }}>Reset</button>
    </div>
  )
}
export default CounterReducer