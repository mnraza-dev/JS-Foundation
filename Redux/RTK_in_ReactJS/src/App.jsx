import React from 'react'
import { decrement, increment, incrementByAmount } from './redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>RTK - Redux Toolkit</h1>
      <h3>Count: {count} </h3>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())} >Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(6))} >Increment By Amount</button>
    </div>
  )
}

export default App