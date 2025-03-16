import React, { useState } from "react";
import { useEffect } from "react";
import HookExample from "./hook-example";
import { useRef } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <ThemeSwitcher />
      <h1>Learning all hooks</h1>
      <input
        ref={inputRef}
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
