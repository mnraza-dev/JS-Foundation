let state;

function useState(initialValue) {
  state = state === undefined ? initialValue : state;

  function setState(newValue) {
    state = newValue;
    console.log("State is now:", state);
  }

  return [state, setState];
}

const [count, setCount] = useState(0);

console.log(count);     // 0
setCount(10);           // State is now: 10
setCount(42);           // State is now: 42
