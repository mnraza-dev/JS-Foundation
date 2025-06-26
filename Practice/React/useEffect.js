let lastDeps;

function useEffect(effectFn, deps) {
  const hasNoDeps = !deps;
  const hasChangedDeps = lastDeps
    ? !deps.every((dep, i) => dep === lastDeps[i])
    : true;

  if (hasNoDeps || hasChangedDeps) {
    effectFn(); // run the effect
    lastDeps = deps;
  }
}


let count = 0;

function MyComponent() {
  useEffect(() => {
    console.log("Effect ran! Count is", count);
  }, [count]);
}

MyComponent(); // Effect ran! Count is 0
count++;
MyComponent(); // Effect ran! Count is 1
MyComponent(); // Effect ran! Count is 1 ← no change, so won't re-run unless count changes
