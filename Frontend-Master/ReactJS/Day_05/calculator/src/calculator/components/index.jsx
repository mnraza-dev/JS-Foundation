import React from "react";
import "./style.css";
export default function Calculator() {
  return (
    <div>
      <h1>Calculator Components</h1>
      <p>This is the index file for calculator components.</p>
      {/* You can import and use your Button and Input components here */}
      {/* Example: */}
      <Button label="+" onClick={() => console.log("Button clicked")} />
      <Input  />
    </div>
  );
}
