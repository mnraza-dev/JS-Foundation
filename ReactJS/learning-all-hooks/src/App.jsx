import React, { useState } from "react";
import { useEffect } from "react";
import HookExample from "./hook-example";
import { useRef } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ExampleReducerHook from "./hooks/ExampleReducerHook";

const App = () => {


  return (
    <div className="App">
      <ThemeSwitcher />
     
      <ExampleReducerHook/>
    </div>
  );
};

export default App;
