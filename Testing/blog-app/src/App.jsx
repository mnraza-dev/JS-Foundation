import React from "react";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>

      <img
        title="Google Logo"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png"
        alt="Logo"
        width={200}
        height={100}
      />

      <input type="text" name="todo" id="todo" placeholder="Enter a todo" /> <br />

      <button type="button">Add Todo</button>
    </div>
  );
};

export default App;
