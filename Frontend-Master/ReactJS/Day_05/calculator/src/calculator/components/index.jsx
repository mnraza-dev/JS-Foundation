import React from "react";
import "./style.css";
import Button from "./button";
import Input from "./Input";

const Add = "+";
const Subtract = "-";
const Multiply = "*";
const Divide = "/";

const Operations = [Add, Subtract, Multiply, Divide];
const Nums = [...new Array(10)];

export default function Calculator() {
  const onInput = (value) => {
    console.log("Input value:", value);
  };
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="calculator">
      <Input placeholder="Enter a number" onInput={onInput} />
      <br />
      <br />
      <div className="btnContainer">
        {Operations.map((op, i) => (
          <Button key={i} label={op} onClick={handleClick} />
        ))}
      </div>
      <div className="btnContainer">
        {Nums.map((_, i) => (
          <Button key={i} label={i} onClick={handleClick} />
        ))}
        <Button className="equal" label="=" onClick={handleClick} />

      </div>
     
    </div>
  );
}
