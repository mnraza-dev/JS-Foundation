import React, { useRef } from 'react'
import { decrement, increment, incrementByAmount } from './redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const inputRef = useRef();

  return (
    <div>
      <h1>RTK - Redux Toolkit || Counter Example</h1>
      <h3>Count: {count} </h3>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())} >Decrement</button>
      <div> <input type="text" name="count" id="" placeholder='Increment By Amount ' ref={inputRef} />
        <button onClick={() => dispatch(incrementByAmount(parseInt(inputRef.current.value)))} >Increment By Amount</button></div>
    </div>
  )
}

export default App