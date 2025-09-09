import { useState } from 'react'
const Counter = () => {
    
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }
    const handleDecrement = () => {
        setCounter((prevCounter) => prevCounter - 1)
    }
    const handleReset = () => {
        setCounter(0)
    }
    return (
        <div>
            <h1>Using UseState()</h1>
            <p>Count: {counter}</p>
            <button onClick={handleIncrement}>
                Increment
            </button>
            <button onClick={handleDecrement}>
                Decrement
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </div>
    )
}

export default Counter