import React from "react";

const FCChild = ({ age, name }) => {
  return (
    <div>
      <h1>FCChild</h1>
      <p>
        {name} is {age} years old
      </p>
    </div>
  );
};

export default FCChild;
