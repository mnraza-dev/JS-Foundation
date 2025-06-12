import React from "react";
import { Button } from "./components/ui/button";
import TodoItem from "./components/TodoItem";

export default function App() {
  return (
    <div className="p-8 ">
      <div className="flex flex-wrap ">
        <TodoItem />
      </div>
    </div>
  );
}
