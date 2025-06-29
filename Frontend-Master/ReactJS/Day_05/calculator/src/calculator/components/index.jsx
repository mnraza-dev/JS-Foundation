import React from "react";
import "./style.css";
import Button from "./button";
import Input from "./Input";
export default function Calculator() {
  
  return (
    <div className="calculator">  
      <Input  />
      <br />
      <br />

      <Button label="+" onClick={() => console.log("Button clicked")} />

    </div>
  );
}
