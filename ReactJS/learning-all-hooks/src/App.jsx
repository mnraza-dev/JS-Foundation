import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
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
    </div>
  );
};

export default App;
