import React,{useState, useEffect} from "react";

const ExampleUseStateHook = () => {
  const [inputValue, setInputValue] = useState("");

  const [toggle, setToggle] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
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

export default ExampleUseStateHook;
