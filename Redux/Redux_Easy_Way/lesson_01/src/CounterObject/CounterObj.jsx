import React from 'react'
import { useReducer } from 'react'

const CounterObj = () => {
    const initialState = {
        count: 0
    }
    const [count, dispatch] = useReducer(reducer, initialState);
    function reducer(state, action) {
        switch (action.type) {
            case "INCR":
                return { count: state.count + 1 };
            case "DECR":
                return { count: state.count - 1 };
            case "RESET":
                return { count: 0 };
            default:
                return state;
        }
    }
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>
                Count: 0
            </h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button>Increemnt</button>
                <button>Reset</button>
                <button>Decrement</button>
            </div>
        </div>
    )
}


export default CounterObj;