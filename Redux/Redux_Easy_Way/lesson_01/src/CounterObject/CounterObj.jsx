import { useRef } from 'react';
import { act } from 'react';
import { useReducer } from 'react'
const initialState = {
    count: 0,
}
function reducer(state, action) {
    switch (action.type) {
        case "INCR":
            return { count: state.count + action.payload };
        case "DECR":
            return { count: state.count - action.payload };
        case "INCR_BY_5":
            return { count: state.count + action.payload };
        case "DECR_BY_5":
            return { count: state.count - action.payload };
        case "INCR_BY_INPUT":
            return { count: state.count + action.payload };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}
const CounterObj = () => {
    const [counter, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef(null);
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>
                Count: {counter.count}
            </h2>

           <div style={{textAlign: "center", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" , marginBottom:"20px"}}>
             <input style={{
                display: "block", margin: "10px auto", padding: "5px", fontSize: "16px"
            }} type="text" name="inputDigit" id="inputDigit" ref={inputRef} />
            <button onClick={() => { dispatch({ type: "INCR_BY_INPUT", payload: parseInt(inputRef.current.value) }) }}>Add the Value</button>
           </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button onClick={
                    () => { dispatch({ type: "INCR", payload: 1 }) }
                }>Increment
                </button>
                <button onClick={() => { dispatch({ type: "INCR_BY_5", payload: 5 }) }}>Increment by 5</button>
                <button onClick={() => { dispatch({ type: "RESET" }) }}>Reset</button>
                <button onClick={() => { dispatch({ type: "DECR", payload: 1 }) }}>Decrement</button>
                <button onClick={() => { dispatch({ type: "DECR_BY_5", payload: 5 }) }}>Decrement by 5</button>
            </div>
        </div>
    )
}
export default CounterObj;