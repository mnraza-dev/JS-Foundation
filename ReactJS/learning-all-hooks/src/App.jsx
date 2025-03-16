import React, { useState } from "react";
import { useEffect } from "react";
import HookExample from "./hook-example";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <h1>Learning all hooks</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        You Typed: <strong>{inputValue}</strong>
      </p>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle Counter
      </button>
      {toggle && <HookExample />}
    </div>
  );
};

export default App;
